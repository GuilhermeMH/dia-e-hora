function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são <strong>${hora} horas e ${minutos} minutos.</strong>`
    if(hora >= 0 && hora < 12){ 
        //bom dia 
        img.src = 'src/manha.png'
        document.body.style.background = '#17ebd9'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'src/tarde.png'
        document.body.style.background = '#ba9824'
    } else {
        //boa noite
        img.src = 'src/noite.png'
        document.body.style.background = '#2b2f43'
    }
    
    
}