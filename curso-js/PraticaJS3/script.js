function contar(){
   let ini = document.getElementById('txti')
   let fim = document.getElementById('txtf')
   let passo = document.getElementById('txtp')
   let resu = document.getElementById('res')

   if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('[ERRO] Estão faltando dados')
   } else {
    resu.innerHTML = 'Contando'
   }
   
}