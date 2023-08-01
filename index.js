import analyzer from './analyzer.js';

// const userInput = document.querySelector('textarea[name="user-input"]');

//se llaman los elementos de la lista con queryselector, dado que no tenemos un id, sino un nombre en HTML
const WordCount = document.querySelector('[data-testid="word-count"]'); 
const characterCount =document.querySelector('[data-testid="character-count');
const characterNoSpacesCount =document.querySelector('[data-testid="character-no-spaces-count"]');
const numberCount =document.querySelector('[data-testid="number-count"]');
const numberSum =document.querySelector('[data-testid="number-sum"]');
const wordLengthAverage =document.querySelector('[data-testid="word-length-average"]');






// const textoo ="ejemplo";
// const contarpalabras =getWordCount (texto);


//llamamos a textarea de HTML a JS para que todo lo que teclee el usuario pueda ser escuchado por addEventListener
const textarea = document.querySelector('[name="user-input"]');
textarea.addEventListener("keyup", function () {

  //asignamos las constantes para el conteo de las palabras de palabras y números que está tanto en HTML como en el Analyzer
  const contarpalabrs =analyzer.getWordCount(textarea.value)
  WordCount.textContent ="Recuento de palabras " + contarpalabrs


  const contarcaracters =analyzer.getCharacterCount(textarea.value)
  characterCount.textContent = "Recuento de caracteres " + contarcaracters

  const contarsinsignos =analyzer.getCharacterCountExcludingSpaces(textarea.value)
  characterNoSpacesCount.textContent = "Recuento de caracteres excluyendo espacios y signos de puntuación " + contarsinsignos

  const contarnumeros =analyzer.getNumberCount(textarea.value)
  numberCount.textContent = "Recuento de números " + contarnumeros

  const sumarnumeros =analyzer.getNumberSum(textarea.value)
  numberSum.textContent = "Suma total de números " + sumarnumeros 

  const longitud =analyzer.getAverageWordLength(textarea.value)
  wordLengthAverage.textContent = "Longitud media de palabras " + longitud

});



// function reset() {
// const botonLimpiar =document.getElementById('reset-button');
// botonLimpiar.addEventListener('click', reset);
// },

const textorea =document.querySelector('[name="user-input"]')
const botonlimpiar =document.getElementById('reset-button');
botonlimpiar.addEventListener("click", function() {
  textorea.value = "";
  WordCount.textContent ="Recuento de palabras "
  characterCount.textContent = "Recuento de caracteres " 
  characterNoSpacesCount.textContent = "Recuento de caracteres excluyendo espacios y signos de puntuación " 
  numberCount.textContent = "Recuento de números "
  numberSum.textContent = "Suma total de números " 
  wordLengthAverage.textContent = "Longitud media de palabras "
  
 
});




// const contartxto =WordCount.textContent;
// const limpiar =document.getElementById('reset-button');
// limpiar.addEventListener("input", function() {
//  contartxto.reset = 0;
 
// });



