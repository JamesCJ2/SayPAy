let ADM = [];
let adms = {};
let JSONadm = localStorage.getItem('ADM');
ADM = JSON.parse(JSONadm);
if(ADM == null){
    ADM = [];
 };

ADM = [
    adms = {
              email: "viniadm@gmail.com",
              senha: "admin"
            }
];

let emailADM = document.getElementById('email').value;
let senhaADM = document.getElementById('senha').value;

function logarADM(){
   
for (adms in ADM){
    //funcao para verificar login e redirecionar à pagina
    if(emailADM && senhaADM){ 
        let LoginExistente = ADM.find(adms => adms.email === emailADM && adms.senha === senhaADM);

        }if(LoginExistente){
            let ADMlogado = LoginExistente;
            localStorage.setItem('ADMlogado', JSON.stringify(ADMlogado));


            //metodo usado para redirecionar caso login esteja correto
        alert("Logado como ADM com Sucesso")
        window.location.href = "html/AreaLogadaADM.html"

        }else{
        alert("Login ou Senha Invalidos!!");
        
        document.getElementById('email').value = '';
        document.getElementById('senha').value = '';
        }
    }
    };

