//Events

//Functions
function showDiv(i) {
    if (document.querySelector(`#banner .content .imagens .${i} span`).classList.contains('hide')) {
        document.querySelector(`#banner .content .imagens .${i} span`).classList.add('show');
        document.querySelector(`#banner .content .imagens .${i} span`).classList.remove('hide');
    } else {
        document.querySelector(`#banner .content .imagens .${i} span`).classList.remove('show');
        document.querySelector(`#banner .content .imagens .${i} span`).classList.add('hide');
        
    }

}

function linkedin() {
    alert('Visite o meu perfil no Linkedin, lá sempre tenho o meu curriculum atualizado! O link está no rodapé da página.');
}

function enviar() {
    alert('Mensagem enviada com sucesso!');
}