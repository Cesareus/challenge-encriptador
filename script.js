var vinculoLinkedin = document.querySelector("#vinculo-linkedin")

vinculoLinkedin.addEventListener("click",function(){
    window.open("https://www.linkedin.com/in/cesar-rosa-007104237", "Mi Linkedin", "width=800, height=600")

});


var textoencriptado, mensaje, reemplazo, textodesencriptado;


function validarminusculas(mensaje){ /* funcion para comprobar que el texto 
esté en minúsculas y sin caracteres especiales*/
    
    var regex = /^[a-z\s\s+]+$/
        
    if(!regex.test(mensaje)){

       return false;        

     }else{
        return true;        
     }

}
 

function encriptar(mensaje){
    mensaje = document.getElementById('textoaencriptar').value;

    if(mensaje == ""){

        alert("Debe ingresar el texto a encriptar")

    }else {
        
        if(validarminusculas(mensaje)){
           if(mensaje != textoencriptado){

            document.getElementById("copiar").style.display = "block";
            document.getElementById("muñeco").style.display = "none";
            document.getElementById("texto-encriptado").style.display = "block";
            document.querySelector(".caja p").style.display = "none";
            document.querySelector(".caja p + p").style.display = "none";
                
            reemplazo = mensaje
            .replaceAll("e","enter")
            .replaceAll("i","imes")
            .replaceAll("a","ai")
            .replaceAll("o","ober")
            .replaceAll("u","ufat");   
            
            textoencriptado= reemplazo;
            document.getElementById('texto-encriptado').value = textoencriptado;
            document.getElementById('textoaencriptar').value = textoencriptado;  
           }else{
            alert("el mensaje ya fue encriptado");
           }


        }else{

            alert("tiene caracteres que no son minúsculas sin acento");
        }

    }
    
}

function desencriptar(){

 var textodesencriptado = [];  
 var mensaje1 = document.getElementById('textoaencriptar').value;
 
if(mensaje1 == ""){

        alert("Debe ingresar el texto a desencriptar");

} else if(validarminusculas(mensaje1)){  
    
            if($('#copiar').css('display') == 'none'){

                document.getElementById("copiar").style.display = "block";
                document.getElementById("muñeco").style.display = "none";
                document.getElementById("texto-encriptado").style.display = "block";
                document.querySelector(".caja p").style.display = "none";
                document.querySelector(".caja p + p").style.display = "none";
            }   

             reemplazo = mensaje1
            .replaceAll("enter","e")
            .replaceAll("imes","i")
            .replaceAll("ai","a")
            .replaceAll("ober","o")
            .replaceAll("ufat","u");
            textodesencriptado = reemplazo;
       
            document.getElementById('texto-encriptado').value ="";
            document.getElementById('textoaencriptar').value = "";
            document.getElementById('texto-encriptado').value = textodesencriptado;
            document.getElementById('textoaencriptar').value = textodesencriptado;
                       
                   
        }else{

            alert("tiene caracteres que no son minúsculas sin acento");
        }   
    
}

function copiartexto(){

    var textoacopiar = document.getElementById('texto-encriptado');
    textoacopiar.select();
    document.execCommand('copy');
    alert("Copiado!");

}



