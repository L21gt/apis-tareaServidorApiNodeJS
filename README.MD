Luis Ruben Velasquez Garcia  
Curso Desarrollo de Apis NodeJS  
Carnet 24011341  
Tarea creacion de servidor API Node JS basico y secuencia de collatz  

Objetivo  
El objetivo de esta tarea es que los estudiantes desarrollen su lógica de programación y refuercen el uso
de Node.js para construir un servidor básico. Implementarán un servidor HTTP que recibirá un número y
calculará su secuencia de Collatz hasta llegar a 1.  

Instrucciones  
1. Crear un servidor en NodeJS que acepte solicitudes GET en la ruta /collatz?numero=<valor>  
2. Se debe validar que el número recibido sea un entero positivo. Si es un número inválido,
devolver un mensaje de error en JSON  
3. Implementar la lógica de la secuencia de Collatz  
a. Si n es par, n = n / 2.  
b. Si n es impar, n = 3n + 1.  
c. Repetir hasta que n = 1.  
4. Devolver la secuencia como un Array en formato JSON  
5. Manejar errores adecuadamente y devolver respuestas HTTP con los códigos correctos (400 para
entrada inválida, 200 para éxito).  