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