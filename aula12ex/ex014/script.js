function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 5){
        img.src = 'madrugada.png'
        document.body.style.background = '#232220' //hexadecimal da cor

    } else if(hora >= 5 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#a8a293'

    } else if(hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#e0c689'

    }else {
        img.src = 'noite.png'
        document.body.style.background = '#12374e'

    }
}