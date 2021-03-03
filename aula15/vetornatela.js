let valores = [8, 1, 7, 4, 2, 9]

//console.log(valores) //imprime o vetor todin
/*for(let pos=0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}*/

for(let pos in valores){ //lê-se, para cada posição em valores, mostre o num[pos]. SÓ FUNCIONA PARA OBJETOS E ARRAYS.
    console.log(`A posição ${pos} tem o valor ${valores[pos]}. DALE!`)
}