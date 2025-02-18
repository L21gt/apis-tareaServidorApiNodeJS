const http = require('http');
const url = require('url'); // Módulo para manejar URLs

const server = http.createServer((req, res) => {
  try {
    // Verificar si la ruta es /collatz y si es una solicitud GET
    if (req.url.startsWith('/collatz') && req.method === 'GET') {
      // Extraer el query parameter 'numero' de la URL
      const query = url.parse(req.url, true).query;
      const numero = query.numero;

      // Validar que el número sea un entero positivo
      if (!numero || isNaN(numero) || !Number.isInteger(parseFloat(numero))) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'El parámetro "numero" debe ser un número entero positivo.' }));
        return; // Detener la ejecución si hay un error
      }

      // Convertir el número a entero
      const n = parseInt(numero, 10);

      // Validar que el número sea positivo
      if (n <= 0) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'El número debe ser un entero positivo.' }));
        return; // Detener la ejecución si hay un error
      }

      // Validar que el número no sea demasiado grande (opcional, para evitar problemas de rendimiento)
      if (n > 1000000) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'El número es demasiado grande. Por favor, usa un número menor o igual a 1,000,000.' }));
        return; // Detener la ejecución si hay un error
      }

      // Calcular la secuencia de Collatz
      const secuencia = calcularSecuenciaCollatz(n);

      // Devolver la secuencia como un Array en formato JSON
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ numero: n, secuencia: secuencia }));
    } else {
      // Si la ruta no es /collatz, devolver un 404
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
    }
  } catch (error) {
    // Manejar errores inesperados
    console.error('Error en el servidor:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Ocurrió un error inesperado en el servidor.' }));
  }
});

// Función para calcular la secuencia de Collatz
function calcularSecuenciaCollatz(n) {
  const secuencia = [n]; // Inicializamos la secuencia con el número inicial

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2; // Si n es par, dividir por 2
    } else {
      n = 3 * n + 1; // Si n es impar, multiplicar por 3 y sumar 1
    }
    secuencia.push(n); // Agregar el nuevo valor de n a la secuencia
  }

  return secuencia;
}

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});