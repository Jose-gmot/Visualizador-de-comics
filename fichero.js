"use strict"


/*
cargarFichero
Función asíncrona que lee el contenido de un fichero
@param{function} cb - función de callback con el contenido del fichero como primer parámetro
*/
function leerFichero(cb) {
  let txtFile = document.querySelectorAll("input[type=file]")[0];
  let f = txtFile.files[0]; 
  // console.log(f);

  if (f) {
    let r = new FileReader();
    r.addEventListener("load", e=>cb(e.target.result) );
    r.readAsText(f);
  } else { 
    alert("Failed to load file");
  }
}
