
let emailADM = document.getElementById('email').value;
let senhaADM = document.getElementById('senha').value;

function logarADM(){
   

    //funcao para verificar login e redirecionar à pagina
    if(emailADM === "admin@gmail.com" && senhaADM === "admin"){ 
       
            //metodo usado para redirecionar caso login esteja correto
        alert("Logado como ADM com Sucesso");
        window.location.href = "../html/AreaLogadaADM.html";

        }else{
        alert("Login ou Senha Invalidos!!");
        
        document.getElementById('email').value = '';
        document.getElementById('senha').value = '';
    }
    
    };

