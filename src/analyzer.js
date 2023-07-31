/* eslint-disable no-debugger */
/* eslint-disable indent */
const analyzer = {  
  getWordCount: (text) => {
    const contartext =text.trim();
    const palabras =contartext.split(/\s+/);
    
    if (contartext === "") {
      return 0
    } else {
      return palabras.length; 
    }
    //se asignan las constantes para usar los métodos de JS, en ese caso usamos los de conteos de espacios al inicio y al final, así como la división de palabras.
    //La condicional nos funciona para determinar que si no hay ninguna palabra nos returne en 0, o en caso contrario cualquier otro valor
  },

  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  //conteo de caracteres a través de los métodos de string de JS
  
  getCharacterCountExcludingSpaces: (text) => {
    const spacio = text.trim();
    const spablanco = spacio.replace(/[^A-Z0-9]/ig, "");
    return spablanco.length
    //Usamos las expresiones regulares que se usan con los métodos de strin de JS, en este caso se reemplaza tanto los espacios en blanco como los caracteres especiales por un string vacío.
  },

  getAverageWordLength: (text) => {    
const textprueba = text.split(/\s+/);
const numpalabras = textprueba.length;
let suma = 0
for (let index = 0; index < textprueba.length; index++) {
    suma = suma + textprueba[index].length
 //Usamos el método de string de JS para separar los caracteres en palabras, luego usamos un bucle con el for para que pueda seguir sumando el promedio de las palabras que escribe el usuario.   
}

const resultado = suma / numpalabras
return Number(resultado.toFixed(2));
//El toFixed nos permite poner 2 décimales en la longitud media de las palabras. Se convierte el string en número para que pueda sumar los valores y no los tome como un arreglo.

},

  getNumberCount: (text) => {
    const contarnum = text.match(/(?<!\S)[-+]?\b\d+(?:\.\d+)?\b(?!\S)/g);
      if (contarnum === null) {
      return 0
      
    } else { return contarnum.length
    }
//Se usa el método de string de js para que pueda reconocer los número del 0-9, y la condicional para que si no hay ningún número ingresado esté en 0, o de lo contrario devuelva cualquier valor

},

  getNumberSum: (text) => {
    const sumarnum =text.match(/(?<!\S)[-+]?\b\d+(?:\.\d+)?\b(?!\S)/g);
    // (/\d+([.,]\d+)?/g); 
    // const separarnum =text.split(/\s+/)

    if (sumarnum === null) {
      return 0
    }

    let suma = 0
    for (let i = 0; i < sumarnum.length; i++) {
      const miString = sumarnum[i]
      const miNumero = Number(miString)
      suma = suma + miNumero;
           
    } return suma
    //text.match(/\b\d+(\.\d+)?\b/g);

    //Se usa uno de los métodos de string de JS para que reconozca el ingreso de números, luego se usa el for para que haga un buble en la suma y puda ir sumando cada dato ingresado
    //se convierte el string en number para que pueda hacer la suma total de los números y no los replique como un arreglo en la interfaz
  },
};

export default analyzer;
