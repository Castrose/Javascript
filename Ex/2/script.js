function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
        
               img.setAttribute('src', 'bebe.jpg')
            } else if (idade < 21) {
        
                img.setAttribute('src', 'adolescente-M.jpg')
            } else if (idade < 50){
        
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
    
                img.setAttribute('src', 'senhorzinho.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
        
                img.setAttribute('src', 'bebe.jpg')
            } else if (idade < 21){
        
                img.setAttribute('src', 'adolescente.jpg')
            } else if (idade < 50){
        
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
        
                img.setAttribute('src', 'senhorinha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }     
}