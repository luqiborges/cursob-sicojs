var seq = []
var quadro = document.getElementById('quadro')
var res = document.getElementById('res')

function verifica(vet, n){
    if(vet.indexOf(Number(n)) == -1){
        return false
    }
    else{
        return true
    }
}

function maior(vet){
    let maior=-1
    for(let c=0;c<vet.length;c++){
        if(vet[c]>maior){
            maior=vet[c]
        }
    }
    return maior
}

function menor(vet){
    let menor=101
    for(let c=0;c<vet.length;c++){
        if(vet[c]<menor){
            menor=vet[c]
        }
    }
    return menor
}

function soma(vet){
    let soma=0
    for(let c=0;c<vet.length;c++){
        soma+=vet[c]
    }
    return soma
}

function adicionar(){
    let x = document.getElementById('num')

    if(x.value.length == 0 || x.value > 100 || x.value < 0 || verifica(seq,Number(x.value))){
        alert('Valor inválido ou já encontrado na lista.')
    }
    else{
        seq.push(Number(x.value))

        let item = document.createElement('option')
        item.text = `Valor ${x.value} adicionado.`
        quadro.appendChild(item)

    }
    res.innerHTML = ''
    x.value = ''
    x.focus()
}

function finalizar(){
    if(seq.length == 0){
        alert('Adicione valores antes de finalizar.')
    }
    else{
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${seq.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior(seq)}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor(seq)}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma(seq)}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${parseInt(soma(seq)/seq.length)}.</p>`
    }
       
}
