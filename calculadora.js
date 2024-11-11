
let activeInput = null;

// Função para adicionar número ao campo ativo
function addNumber(num) {
    if (activeInput) {
        activeInput.value += num;
    }
}

// Eventos para definir o campo ativo
document.getElementById('n1').addEventListener('focus', () => {
    activeInput = document.getElementById('n1');
});
document.getElementById('n2').addEventListener('focus', () => {
    activeInput = document.getElementById('n2');
});

    function preventDefault(){
        // Adiciona um ouvinte de evento ao campo de entrada 'n1' que será ativado quando o usuário pressionar uma tecla
document.getElementById('n1').addEventListener('keypress', function (event) {
    
    // Verifica se a tecla pressionada foi "e" ou "E"
    if (event.key === 'e' || event.key === 'E') {
        
        // Se a tecla for "e" ou "E", impede que o caractere seja inserido no campo
        event.preventDefault();
    }
});

// Repete o mesmo processo para o campo de entrada 'n2'
document.getElementById('n2').addEventListener('keypress', function (event) {
    
    // Verifica se a tecla pressionada foi "e" ou "E"
    if (event.key === 'e' || event.key === 'E') {
        
        // Se a tecla for "e" ou "E", impede que o caractere seja inserido no campo
        event.preventDefault();
    }
})
    }

function enviar(){
    var n1 = Number(window.document.getElementById('n1').value)
    var n2 = Number(window.document.querySelector('input#n2').value)
    var result
    var oper = window.document.getElementById('operador').value
    var ip = window.document.getElementById('ip')
    
   
    if(oper === '+'){
    result = n1 + n2
    //toFixed(): Isso pode ser usado para limitar o número de casas decimais, se aplicável.
    //toLocaleString(): Isso formatará o número com separadores de milhares, tornando-o mais legível.
    res.innerHTML = `<strong>${n1}  ${oper}  ${n2} é igual a: ${result.toLocaleString('pt-BR')}</strong>`
    
}
else if (oper ==='-'){
    result = n1 - n2
    res.innerHTML = `<strong>${n1}  ${oper}  ${n2} é igual a: ${result.toLocaleString('pt-BR')}</strong>`}
    else if (oper ==='*'){
        result = n1 * n2
        res.innerHTML = `<strong>${n1}  ${oper}  ${n2} é igual a: ${result.toLocaleString('pt-BR')}</strong>`}
        else{
            result = n1 / n2    
           res.innerHTML = `<strong>${n1}  ${oper}  ${n2} é igual a: ${result.toLocaleString('pt-BR')}</strong>`}
        if(result %2 == 0){
            ip.innerHTML = `${result.toLocaleString('pt-BR')} é um número par`
            inter.style.backgroundColor = 'orange'
     }
     else if (!Number.isInteger(result)) {  // Verifica se o número é decimal
        ip.innerHTML = `${result.toLocaleString('pt-BR')} é um número decimal`;
        inter.style.backgroundColor = 'aquamarine';

    }
        else{
            ip.innerHTML = `${result.toLocaleString('pt-BR')} é um número impar`
            inter.style.backgroundColor = 'red'
        }
       
         } 

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

    }


}

setInterval(atualizarHora, 1000) //(function, delay) delay: O intervalo de tempo em milissegundos entre cada execução da função. No seu caso, o valor 1000 significa que a função será chamada a cada 1 segundo (1000 milissegundos = 1 segundo).
atualizarHora()
preventDefault()
