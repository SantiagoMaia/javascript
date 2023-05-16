function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.querySelector("#res")
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO]: Verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // Como se eu tivesse criado uma tag IMG la no HTML.
        img.setAttribute('id','foto') // Como se eu tivesse criado um seletor id de nome FOTO na tag IMG.
        if(fsex[0].checked){
            genero = 'HOMEM'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'bbm.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovemm.png' )
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'homem.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'MULHER'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bbf.png')
            }else if(idade < 21){
                img.setAttribute('src','jovemf.png')
            }else if( idade < 50){
                img.setAttribute('src','mulher.png')
            }else{
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center' //Aqui eu deixo o texte abaixo dele centralizado.
        res.innerHTML = `Você é ${genero} e tem ${idade} anos.`
        res.appendChild(img)
    }
}