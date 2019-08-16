function carregar() {

    var msg = window.document.getElementById('img')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
//   var hora = 10 // 
    msg.innerHTML = `Agora são ${hora} horas e  ${min} minutos.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA 
        img.src = 'manha.png'
        document.body.style.background = '#ff9e7d'
        
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE 
        img.src = 'tarde.png'
        document.body.style.background = '#4d9900'

    } else {
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#00001a'

    }


}