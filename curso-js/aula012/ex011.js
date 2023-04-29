var idade = 68
if (idade < 16){
    console.log('Não vota')
}else{
    if( idade < 18 || idade > 65){
        console.log('Voto opcional') //Posso usar dessa forma com novos blocos else e if.

    }else if(idade >= 18){
            console.log('Voto obrigatório') //  Como posso usar também dessa fomra como  else if para economizar blocos.
        
    }
}