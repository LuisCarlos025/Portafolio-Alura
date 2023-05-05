const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function Encriptar0(){
    const textoencriptar = Encriptar(textarea.value)
    mensaje.value = textoencriptar
    textarea.value = "";
    /*mensaje.style.backgroundImage = "none"*/
}

function Encriptar(stringencriptado) {
    let matrizCodigo = [[ "e", "enter" ], [ "i", "imes"], [ "a", "ai"], [ "o", "ober"], [ "u", "ufat"]];

    stringencriptado = stringencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringencriptado.includes(matrizCodigo[i][0]) ){
        stringencriptado = stringencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
         }
         
    }
    return stringencriptado

}
    
function Desencriptar0(){
    const textoencriptar = Desencriptar(textarea.value)
    mensaje.value = textoencriptar
    textarea.value = "";
   
}

function Desencriptar(stringDesencriptar) {
    let matrizCodigo = [[ "e", "enter" ], [ "i", "imes"], [ "a", "ai"], [ "o", "ober"], [ "u", "ufat"]];

    stringDesencriptar = stringDesencriptar.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptar.includes(matrizCodigo[i][1]) ){
        stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
         }
         
    }
    return stringDesencriptar

}


    var answer = document.getElementById("copy2");
    var copy   = document.getElementById("copy1");
    copy.addEventListener('click', function(e) {
      
       hola.select(); 
       try {
           
           var successful = document.execCommand('copy');
     
           if(successful) answer.innerHTML = ' ';
           else answer.innerHTML = 'Incapaz de copiar!';
       } catch (err) {
           answer.innerHTML = '';
       }
    });

    