

function preventDefault() {
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
    });
}

function enviar() {
    // Obtém os valores dos campos de entrada
    var n1Element = document.getElementById('n1');
    var n2Element = document.querySelector('input#n2');
    var oper = document.getElementById('operador').value;
    var res = document.getElementById('res');
    var ip = document.getElementById('ip');

    // Verifica se os valores estão vazios
    if (n1Element.value.length == 0 || n2Element.value.length == 0) {
        alert('[ERRO] Faltam dados!');
        return; // Encerra a execução para evitar erros
    }

    // Converte os valores para números
    var n1 = Number(n1Element.value);
    var n2 = Number(n2Element.value);

    // Verifica se o operador é válido
    if (['+', '-', '*', '/'].indexOf(oper) === -1) {
        res.innerHTML = `Operador inválido.`;
        ip.innerHTML = "";
        return;
    }

    // Tratamento para divisão por zero
    if (oper === '/' && n2 === 0) {
        res.innerHTML = `Erro: Divisão por zero não é permitida.`;
        ip.innerHTML = "";
        return;
    }

    // Calcula o resultado com base no operador
    let result;
    switch (oper) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
    }

    // Exibe o resultado formatado
    res.innerHTML = `${n1} ${oper} ${n2} é igual a: <strong>${result.toLocaleString('pt-BR')}</strong>`;

    // Determina se o resultado é par, ímpar ou decimal
    if (!Number.isInteger(result)) { // Número decimal
        ip.innerHTML = `<strong>${result.toLocaleString('pt-BR')}</strong> é um número decimal.`;
    } else if (result % 2 === 0) { // Número par
        ip.innerHTML = `<strong>${result.toLocaleString('pt-BR')}</strong> é um número par.`;
    } else { // Número ímpar
        ip.innerHTML = `<strong>${result.toLocaleString('pt-BR')}</strong> é um número ímpar.`;
    }
}

function AjustarOperador() {
    const operador = document.getElementById('operador');
    const valor = operador.value;
    // Ajusta a largura com base no valor selecionado
    if (valor === '+') {
        operador.style.width = '40px'; // Largura para "+"
    } else if (valor === '-') {
        operador.style.width = '40px'; // Largura para "-"
    } else if (valor === '*') {
        operador.style.width = '40px'; // Largura para "*"
    } else if (valor === '/') {
        operador.style.width = '40px'; // Largura para "/"
    } else {
        operador.style.width = '170px'; // Largura padrão
    }
}

function atualizarHora() {
    var Phora = window.document.getElementById('hora');
    var agora = new Date();
    var hora = agora.getHours();
    var min = agora.getMinutes();
    var sec = agora.getSeconds();
    hora = hora < 10 ? "0" + hora : hora;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    Phora.innerHTML = `${hora}:${min}:${sec} `;

    if(hora >= 0 && hora<12){
        turn.innerHTML = 'Bom dia!';
         }
         else if(hora >= 12 && hora < 18){
         turn.innerHTML = 'Boa tarde!';
         }
         else {
         turn.innerHTML = 'Boa Noite!';
         }
}



setInterval(atualizarHora, 1000); //(function, delay) delay: O intervalo de tempo em milissegundos entre cada execução da função. No seu caso, o valor 1000 significa que a função será chamada a cada 1 segundo (1000 milissegundos = 1 segundo).
atualizarHora();
preventDefault();
