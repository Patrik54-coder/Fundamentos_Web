let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = "70%"
email.style.width = "70%"

function validaEmail () {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }

}
function validaAssunto () {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }

}
function enviar (){
    if (emailOk == true && assuntoOk == true){
        alert("Formulario enviado com sucesso!")
        
    } else {
        alert("Por favor, preencher o formulário corretamente!")
    }
}
