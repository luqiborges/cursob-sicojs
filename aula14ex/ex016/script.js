function contar(){
    var numInicial = document.getElementById('num1')
    var numFinal = document.getElementById('num2')
    var numPasso = document.getElementById('num3')
    var res = document.getElementById('resultado')
    res.innerHTML = '<br>Contando:<br>'

    if(numInicial.value == '' || numFinal.value == '' || numPasso.value == ''){
        res.innerHTML = '<br>Impossível contar!<br>'
    }else{
        if(numPasso.value == 0){
            window.alert('Passo Inválido! Considerando PASSO 1')
            numPasso.value = 1
        }

        var x = Number(numInicial.value)
        var y = Number(numPasso.value)
        var z = Number(numFinal.value)

        if(x <= y){
            while(x<=numFinal.value){
                res.innerHTML += `${x} \u{1F449} `
                x += y
            }
        }
        else{
            while(x>=numFinal.value){
                res.innerHTML += `${x} \u{1F449} `
                x -= y
            }
        }
        
        res.innerHTML += `\u{1F929}`

    }

}