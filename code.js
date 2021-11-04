"use strict"

/***************************
	FUNCTIONS
***************************/


/**
 * leerComic
 * @param {string} contenidoFichero - El contenido del fichero seleccionado
 */
function leerComic( contenidoFichero){
  
  //0.- Escribimos en la consola el contenido del fichero para comprobar que se ha leído correctamente

  console.log(contenidoFichero); // Muestra el contenido del fichero

  //1.- La primera línea del fichero contiene el nombre del cómic, el autor y unos coemntarios se parados por :, por ejemplo:
  // Dublinés:Alfonso Zapico:Premio nacionadl 2012. Una novela gráfica sobre James Joyce.
  //
  // El resto de las líneas tendrá la secuencia de imágenes que componen el cómic. Por ejemplo:
  // ./comic/001.jpg
  // ./comic/003.jpg
  // etc
  //
  // El primer paso es convertir la cadena de caracteres leída del fichero en un array.
  // Nota: busca información sobre la orden split https://www.w3schools.com/jsref/jsref_split.asp
  
  arrayPáginas=[];
  //--------------- Completar

  let contenidoSeparado   = contenidoFichero.split("\n");  // Separamos los parametros por "\n".
  let información = contenidoSeparado.shift();             // Se quita el primer contenido que es la información que se guarda en una variable.
  arrayPáginas = contenidoSeparado;                        // Se guarda las páguinas en el arrays ya creado.

  //--------------- Completar

  //2.- Ahora el primer elemento del array contendrá una cadena de caracteres con el nombre del cómic, el nombre 
  //del autor y unos comentarios separados por :
  // Dublinés:Alfonso Zapico:Premio nacionadl 2012. Una novela gráfica sobre James Joyce.
  // Sacaremos esa información del array usando un shift. A continuación insertaremos el nombre del cómic y del autor
  // en el párrafo con id="autor"

  autor= "";              
  cómic= "";              
  comentarios= ""; 

  //--------------- Completar

 let informaciónSeparada = información.split(":");        // Separamos la información.

  //--------------- Completar

  autor= informaciónSeparada[1];              // Guardamos la información
  cómic= informaciónSeparada[0];              // del arrays en cada
  comentarios= informaciónSeparada[2];        // variable.


  //3.- Ahora en el array de páginas sólo hay páginas. 
  //Haremos que el número de página actual sea 0 para empezar a leer la primera página.
  númeroDePáginaActual=0; // Se pone las páguinas a 0.


  //4.- Modificamos el atributo src de la etiqueta imgPágina para que sea el contenido en el 
  //primer elemento del array
  //--------------- Completar
  //Monstramos el contenido
  document.querySelector("#comic").innerHTML = `<img id="pagina"src="${arrayPáginas[númeroDePáginaActual]}">`;

  //--------------- Completar

  // console.log(arrayPáginas);
  // console.log(informaciónSeparada);
 

  //////////////////////////
  ///////// EXTRA
  ////// Select
  document.querySelector("#selPaginas").innerHTML =""; // Recuperamos el valor del select y lo vaciamos si hay algo.

  for(let i=0;i<arrayPáginas.length;i++){
  document.querySelector("#selPaginas").innerHTML +=`<option value="${i}">${i+1}</option>`// añadimos las paginas al select
  }
  ///
  /////////
  ///////////////

  //5.- Modificamos el contenido del párrafo con id="autor" para que se añada a la información mostrada
  //el número de página actual y cuántas páginas en total tiene el cómic
  pAutor.innerHTML= "<b>Comic:</b> "+cómic+" <b>- Author:</b> "+autor+" <b>- Page:</b> "+ (númeroDePáginaActual+1) +" of "+arrayPáginas.length;

  return arrayPáginas; // devolbemos el arrays de paguinas

 }





/**
 * anteriorPágina
 * Mostrará en la web la páginaa anterior en el array
 */
function anteriorPágina(){

  //1.- Si el número de páginas en el array es 0, salimos de la función
  //--------------- Completar

  if(arrayPáginas.length == 0){
    return;
  }

  //--------------- Completar

  //2.- Decrementamos la variable númeroDePáginaActual
  //--------------- Completar

  númeroDePáginaActual--;
  //--------------- Completar

  //3.- Si el número de página actual es menor que 0
  //haremos que el número de página actual sea la primera (0)
  //--------------- Completar

  if(númeroDePáginaActual <= 0){
    númeroDePáginaActual = 0;
  }

  //--------------- Completar

  //4.- Modificamos el atributo src de la etiqueta imgPágina para que sea el contenido en la
  //posición del array a la que apunta númeroDePáginaActual

  //--------------- Completar
  document.querySelector("#comic").innerHTML = `<img id="pagina"src="${arrayPáginas[númeroDePáginaActual]}">`
  //--------------- Completar




  document.querySelector("#selPaginas").innerHTML ="" // Recuperamos el valor del select y lo vaciamos si hay algo.
  
  // Añadimos de nuevo los select correspondiente y hacemos que se muestre el que corresponda.
  for(let i=0;i<arrayPáginas.length;i++){
    if(i==númeroDePáginaActual){
      document.querySelector("#selPaginas").innerHTML +=`<option value="${i}" selected>${i+1}</option>`// añadimos las paginas al select

    }
    else{
    document.querySelector("#selPaginas").innerHTML +=`<option value="${i}">${i+1}</option>`// añadimos las paginas al select
    }
  }

  //5.- Modificamos el contenido del párrafo con id="autor" para que se añada a la información mostrada
  //el número de página actual y cuántas páginas en total tiene el cómic
  pAutor.innerHTML= "<b>Comic:</b> "+cómic+" <b>- Author:</b> "+autor+" <b>- Page:</b> "+ (númeroDePáginaActual+1) +" of "+arrayPáginas.length;

}





/**
 * siguientePágina
 * Mostrará en la web la siguiente página en el array
 */
function siguientePágina(){



  //1.- Si el número de páginas en el array es 0, salimos de la función
  //--------------- Completar

if(arrayPáginas.length == 0){
  return;
}
  //--------------- Completar

  //2.- Incrementamos la variable númeroDePáginaActual
  //--------------- Completar

  númeroDePáginaActual++;

  //--------------- Completar

  //3.- Si el número de página actual es mayor o igual que el número de páginas en el array
  //haremos que el número de página actual sea la última página disponible (arrayPáginas.length - 1)
  //--------------- Completar
  
 if(númeroDePáginaActual >= arrayPáginas.length){
    númeroDePáginaActual--;
    alert("Ultima pág.");
  }

  //--------------- Completar

  //4.- Modificamos el atributo src de la etiqueta imgPágina para que sea el contenido en la
  //posición del array a la que apunta númeroDePáginaActual
  //--------------- Completar

  document.querySelector("#comic").innerHTML = `<img id="pagina"src="${arrayPáginas[númeroDePáginaActual]}">`



  //--------------- Completar


  document.querySelector("#selPaginas").innerHTML ="" // Recuperamos el valor del select y lo vaciamos si hay algo.
  
  // Añadimos de nuevo los select correspondiente y hacemos que se muestre el que corresponda.
  for(let i=0;i<arrayPáginas.length;i++){
    if(i==númeroDePáginaActual){
      document.querySelector("#selPaginas").innerHTML +=`<option value="${i}" selected>${i+1}</option>`// añadimos las paginas al select
    }
    else{
    document.querySelector("#selPaginas").innerHTML +=`<option value="${i}">${i+1}</option>`// añadimos las paginas al select
    }
  }

  //5.- Modificamos el contenido del párrafo con id="autor" para que se añada a la información mostrada
  //el número de página actual y cuántas páginas en total tiene el cómic
  pAutor.innerHTML= "<b>Comic:</b> "+cómic+" <b>- Author:</b> "+autor+" <b>- Page:</b> "+ (númeroDePáginaActual+1) +" of "+arrayPáginas.length;
}



/**
 * mostrarInformación
 * Muestra los comentarios que se encuentran en el fichero.
 */
function mostrarInformación(){
  //1.- Si el número de páginas en el array es 0, salimos de la función
  //--------------- Completar

  if(arrayPáginas.length == 0){
    return;
  }

  //--------------- Completar

  //2.- Mostraremos los comentarios en un alert de la siguiente manera:
  // Cada oración la mostraremos en una línea diferente.
  // Nota: reemplazaremos cada . por un \n
  // Más información en: https://www.w3schools.com/jsref/jsref_replace.asp
  //--------------- Completar
  let s=autor+"\n"+cómic+"\n"+comentarios;
  //--------------- Completar
  alert(s);
}



/**
 * teclaPulsada
 * Segun la tecla pulsada se ejecutará una orden en concreto.
 */
function teclaPulsada(e){
  if(e.key =="ArrowRight"){
    siguientePágina();
  }
  else if (e.key=="ArrowLeft"){
    anteriorPágina();
  }
  else if(e.key=="Enter"){
    mostrarInformación();
  }
  //Si la tecla pulsada es ESC, haremos que se oculte la división con id="controles"
  //si estaba visible o que se muestre si estaba oculta
  //--------------- Completar
  else if(e.key=="Escape"){
     if(controles.style.display == "none"){
      controles.style.display = "initial";
     }
     else{
      controles.style.display = "none";
     }

  }
  //--------------- Completar
}


/**
 * arrWater
 * Cuando se pulse el boton de cascada se muestra todas las páguinas que tenga el comic
 * y se oculta botones inecesarios.
 */
function arrWater(){

  //1.- Si el número de páginas en el array es 0, salimos de la función
  if(arrayPáginas.length == 0){
    return;
  }

  //2.- Recuperamos el valor del select y lo vaciamos si hay algo.
  document.querySelector("#comic").innerHTML = "";

  //3.- Ordenamos todas las paguinas si esta activo la opción de cascada, y se quita si volvemos a pulsar dejando la primera pág.
    if(bulean == 1){
      pAutor.innerHTML= "<b>Comic:</b> "+cómic+" <b>- Author:</b> "+autor;
      for (let i = 0; i<arrayPáginas.length; i++) {
        document.querySelector("#comic").innerHTML += `<img id="pagina${i+1}"src="${arrayPáginas[i]}">`
        bulean=0;
      }
    
    }
    else{
      document.querySelector("#comic").innerHTML = "";
      document.querySelector("#comic").innerHTML = `<img id="pagina${1}"src="${arrayPáginas[0]}">`
      pAutor.innerHTML= "<b>Comic:</b> "+cómic+" <b>- Author:</b> "+autor+" <b>- Page:</b> "+ (númeroDePáginaActual+1) +" of "+arrayPáginas.length;
      númeroDePáginaActual=0;
      bulean=1;
    }

  //4.- Recuperamos el div del HTML.
    let ajusteCascada = document.querySelector("#divBotonesRetrocederAvanzar");

  //5.- Si esta oculto se muestra y si se esta mostrando se oculta.
    if(ajusteCascada.style.display == "none"){
      ajusteCascada.style.display = "initial";
      }
    else{
      ajusteCascada.style.display = "none";
      }

}

/**
 * modoOscuro
 * Ponemos el fondo oscuro o claro según esté pulsado el botón.
 */
function modoOscuro(){

//1.- Si el resto de la division es 0 ponemos la páguina en oscura, sino en claro.
if(contador % 2 == 0) {

  document.getElementById("titulo").style.background = "GRAY";
  window.parent.document.getElementById('btnOscuro').value='Bright Mode';
}

else{

document.getElementById("titulo").style.background = "GAINSBORO";
window.parent.document.getElementById('btnOscuro').value='Dark Mode';
}

contador++; //Añadimos uno mas al contador.

}

/**
 * selPaginas
 * Cuando marcamos una paguina haremos que se muestre esa.
 */
function selPaginas(){

// 1.- Recuperamos el valor que selecionemos en el Select. 
let paguinaSeleccionada = document.getElementById("selPaginas"); 
let resultado = paguinaSeleccionada.options[paguinaSeleccionada.selectedIndex].text;

// 2.- Actualizamos la páguina actual y lo que nos muestra.
document.querySelector("#comic").innerHTML = `<img id="pagina"src="${arrayPáginas[resultado-1]}">`;
númeroDePáginaActual=resultado-1;
}



/***************************
	MAIN
***************************/

//1.- Creamos una variable que contendrá el número de preguntas del cuestionario
let númeroDePáginaActual=0;
let arrayPáginas=[];
let autor="";
let cómic="";
let comentarios="";
let bulean=1;
let contador=0;

//2.- Recuperamos las etiquetas necesarias
let imgPágina  = document.querySelector("#pagina");
let pAutor  = document.querySelector("#autor");

//3.- Asignamos las funciones a los botones
document.querySelector("#btnCargar").addEventListener('click', ()=>{leerFichero(leerComic);});
document.querySelector("#btnAvanzar").addEventListener('click',siguientePágina);
document.querySelector("#btnRetroceder").addEventListener('click',anteriorPágina);
document.addEventListener("keydown", teclaPulsada);
document.querySelector("#btnOscuro").addEventListener('click',modoOscuro);

//////////////////////////
///////// EXTRA
////// Cascada y Select.
document.querySelector("#btnWater").addEventListener('click',arrWater);
document.querySelector("#selPaginas").addEventListener('click',selPaginas);
///
/////////
///////////////