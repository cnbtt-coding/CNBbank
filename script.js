const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
} // função que valida o nome do beneficiário

function validaAgencia(agencia) {
    const agenciaComoArray = agencia;
    return agenciaComoArray.length >= 4;
} // função que valida a agência do beneficiário

function validaConta(conta) {
    const contaComoArray = conta.split('-');
    return contaComoArray.length >= 2;
} // função que valida a conta do beneficiário

function validaValor(valor) {
    const saldoMin = valor;
    return saldoMin >= 100;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario')
    if (!validaNome(nomeBeneficiario.value)) {
        document.getElementById('nome-beneficiario').style.borderColor = 'red';
        document.getElementById('nome-fail').style.display = 'block';
    }
    else {
        document.getElementById('nome-beneficiario').style.borderColor = 'green';
        document.getElementById('nome-fail').style.display = 'none';
    } // atribuindo condições para validação do nome do beneficiário

    const agencia = document.getElementById('numero-agencia')
    if(!validaAgencia(agencia.value)) {
        document.getElementById('numero-agencia').style.borderColor = 'red';
        document.getElementById('agencia-fail').style.display = 'block';
    }
    else {
        document.getElementById('numero-agencia').style.borderColor = 'green';
        document.getElementById('agencia-fail').style.display = 'none';
    } // atribuindo condições para validação do número da agência

    const conta = document.getElementById('numero-conta')
    if (!validaConta(conta.value)) {
        document.getElementById('numero-conta').style.borderColor = 'red';
        document.getElementById('conta-fail').style.display = 'block';
    }
    else {
        document.getElementById('numero-conta').style.borderColor = 'green';
        document.getElementById('conta-fail').style.display = 'none';
    }

    const valor = document.getElementById('valor-deposito')
    if (!validaValor(valor.value)) {
        document.getElementById('valor-deposito').style.borderColor = 'red';
        document.getElementById('valor-fail').style.display = 'block';
    }
    else {
        document.getElementById('valor-deposito').style.borderColor = 'green';
        document.getElementById('valor-fail').style.display = 'none';
    }
});


