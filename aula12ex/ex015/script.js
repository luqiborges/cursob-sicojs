function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('resultado')
    
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else{
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fSex[0].checked){
            gênero = 'homem'
            if(idade>=0 && idade<10){
                //Criança
                img.setAttribute('src', 'criancahomem.png')
            }else if(idade<50){
                //Adulto
                img.setAttribute('src', 'adulto.png')
            }else{
                //Idoso
                img.setAttribute('src', 'velhohomem.png')
            }
        } else if(fSex[1].checked){
            gênero = 'mulher'
            if(idade>=0 && idade<10){
                //Criança
                img.setAttribute('src', 'criancamulher.png')
            }else if(idade<50){
                //Adulto
                img.setAttribute('src', 'adulta.png')
            }else{
                //Idoso
                img.setAttribute('src', 'velhomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //adicionar elemento em HTML
    }

}