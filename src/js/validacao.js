const inputText = document.querySelectorAll('.campo')
const botaoEnviar = document.getElementById('enviar')


inputText.forEach(item =>{
    botaoEnviar.addEventListener('click', () =>{
        const mensagem = document.querySelector(".esconder-mensagem")
        if(item.value != ""){
            item.classList.add('validado')
        } else{
            item.classList.add('nao-validado')
            mensagem.classList.remove('esconder-mensagem')
        }

    })
})