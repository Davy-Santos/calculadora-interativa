
function enviar(){
    var n1 = Number(window.document.getElementById('n1').value)
    var n2 = Number(window.document.querySelector('input#n2').value)
    var result = window.document.getElementById('res').value
    var oper = window.document.getElementById('operador').value
    var ip = window.document.getElementById('ip')
   
    if(oper === '+'){
    result = n1 + n2
    res.innerHTML = `<strong>${n1}  ${oper}  ${n2} é igual a: ${result}</strong>`
    
}
else if (oper ==='-'){
    result = n1 - n2
    res.innerHTML = `<strong>${n1}  ${oper}  ${n2} é igual a: ${result}</strong>`}
    else if (oper ==='*'){
        result = n1 * n2
        res.innerHTML = `<strong>${n1}  ${oper}  ${n2} é igual a: ${result}</strong>`}
        else{
            result = n1 / n2    
           res.innerHTML = `<strong>${n1}  ${oper}  ${n2} é igual a: ${result}</strong>`}
        if(result %2 == 0){
            ip.innerHTML = `${result} é um número par`
            inter.style.backgroundColor = 'orange'
     }
     else if (!Number.isInteger(result)) {  // Verifica se o número é decimal
        ip.innerHTML = `${result} é um número decimal`;
        inter.style.backgroundColor = 'aquamarine';

    }
        else{
            ip.innerHTML = `${result} é um número impar`
            inter.style.backgroundColor = 'red'
        }  } 

      function atualizarHora(){
var Phora = window.document.getElementById('hora')
var agora = new Date()
var hora = agora.getHours() 
var min = agora.getMinutes()
var sec = agora.getSeconds()
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;
Phora.innerHTML = `${hora}:${min}:${sec} `

if(hora == '12' && min == '00' && sec <= '7' || hora == '20' && min == '12' && sec <= '7' ){
   Phora.innerHTML = 'Olá!'
}
    else{
        Phora.innerHTML = `${hora}:${min}:${sec} `
 }}
setInterval(atualizarHora, 1000) //(function, delay) delay: O intervalo de tempo em milissegundos entre cada execução da função. No seu caso, o valor 1000 significa que a função será chamada a cada 1 segundo (1000 milissegundos = 1 segundo).
atualizarHora()
