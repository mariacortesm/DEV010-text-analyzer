# Analizador de texto
 El analizador de texto permite la entrada de texto que, simultaneamente, muestra el conteo de palabras, de caracters, de números, de longitud y suma total de números. Esto nos permite tener un conteo global de lo que el usuario está ingresando y, de igual forma, borrar todo el contenido con ayuda de un botón. 

[![Vista previa del video](assets/miniatura.png)](https://reccloud.com/es/u/4jmscwm)



## Índice

* [1. Planteamiento y organización del proyecto]
* [2. Objetivos generales]
* [3. Paso a paso del HTML]
* [4. Paso a paso del index js]
* [5. Paso a paso el Analyzer js]
* [6. Paso a paso del CSS]
* [7. Consideraciones finales del proyecto]

***

## 1. Planteamiento y organización del proyecto

Se realizó un prototipo de baja fidelidad para saber cómo iba a hacer el diseño en HTML y CSS. Después de hacer la estructura y diseño de la página web enfocarme en las funcionalidades del conteo de palabras y de números, así como la revisión teórica del js.

## 2. Objetivos generales
Hacer funcional el conteo de palabras y números en el diseño que fue creado. 
Aprender a aprender, desde la teoría hasta la práctica. 

## 3. Paso a paso del HTML
1. Se estructura el HTML con las etiquetas de head, body y footer.
2. Crear una etiqueta de textarea que permita el ingreso de texto.
3. Crear una etiqueta li para crear una lista que permita ingresar los valores de conteo de palabras y de números.
4. Crear un footer con mi nombre.
5. Crear un botón con la etiqueta button que permita limpiar el contenido.

## 4. Paso a paso del index js
1. Llamar los valores de li con querySelector, dado que tiene un atributo name y no un id. De esa manera, podremos llamar el contenido de HTML al index js.
2. Asignar una constante al textarea para agregarle el evento de addEvntListener con el fin de que cada vez que se "escuche" una tecla pueda ser tomada en el textarea.
3. Asignar constantes al li para el conteo de palabras, este está vinculado con el HTML y con el Analyzer js. Estas constantes permitirán que el usuario visualice el número de caracteres o números en la página web. 
4. Asignar una constante al botón de Limpiar con el evento addEventListener y con getElementById, de esa manera, cada vez que se "escuche" el click del botón se borrará tanto el contenido del textarea como el conteo de palabras y números. Así, quedará listo para su uso nuevamente. 
5. Se importa el Analyzer js.

## 5. Paso a paso el Analyzer js
1. Con el getWordCount se emplean los métodos de string, como el split y trim que nos permite separar los caracteres y contar espacio al inicio y al final del texto. Esto nos retorna el número de palabras ingresado. Adicionalmente, se agrega un condicional para el caso en el que no se escriba una palabra el valor nos retorne a 0.
2. Con el getCharacterCount solo retornamos el conteo de palabras con el .length.
3. Con el getCharacterCountExcludingSpaces se agrega el método trim para contar el espacio del inicio y del final, así como replace para que pueda reemplazar los espacios y los caracteres especiales en un string vacío. Esto con ayuda de las expresiones regulares. 
4. Con el getAverageWordLength se agrega el split para separar los caracters en palabras y se agrega un bucle con el for, para que nos permita realizar el promedio de la longitud de las palabras ingresadas. Para que funcione la suma se convierte el string con un Number. 
5. Con el getNumberCount se agrega el método match con una expresión regular que nos permita identificar los números enteros, décimales y que nos retorne un valor 0 para la combinación de letras y números. Se agrega el condicional para que en caso de que no se agregue ningún número el valor retorne a 0.
6. Con el getNumberSum se agrega el método match con una expresión regular que nos permita identificar los números enteros, décimales y que nos retorne un valor 0 para la combinación de letras y números. Se agrega el condicional para que en caso de que no se agregue ningún número el valor retorne a 0 y también un bucle con el for que permita sumar el total de númreros ingresados. Se convierte el string en un Number. 

## 6. Paso a paso del CSS
1. Se agrega estilo al h1.
2. Se agrega estilo al body.
3. Se agrega estilo al textarea con el atributo name.
4. Se agrega estilo al li con el atributo de class.
5. Se agrega estilo al botón con el atributo de id.

## 7. Consideraciones finales del proyecto
En este proyecto fue fundamental la lectura teórica de eventos, métodos y expresiones regulares del js, dado que fue lo que me tomó más tiempo en entender. En ese sentido, luego de leer la teoría se pasó a la práctica y fue un poco más fácil entender de dónde venía todo. 
El proyecto me ayudó bastante a ir paso por paso, entender cómo iba a funcionar todo y qué necesitaba para que funcionara. De esta forma se fue haciendo paso por paso conectando las funciones que se estaban declarando en el analyzer js con el index js y que se mostraran en la página web. 
