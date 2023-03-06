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
    alert('Visite meu linkedin, lá sempre tenho o meu curriculum atualizado! O link está no final da página.')
}