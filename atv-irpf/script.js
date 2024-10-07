
/*
  A implementação em JS deve possuir pelo menos as seguintes funções:
Função para calcular porcentagem da alíquota, com dois parâmetros de entrada (salário e IR) e um retorno (a porcentagem efetiva de alíquota); 
Função para cálculo do imposto devido, que recebe como entrada o salário e retorna o salario devido. Esta função deve chamar uma função para cada faixa da alíquota, dividindo a tarefa do cálculo em várias partes.
 */

function calcularAliquota(salario, IR) {
  let porcentagem = (IR / salario) * 100;
  return porcentagem
}

function calcularFaixa(baseCalculo , faixaInferior, faixaSuperior, aliquota) {
  const valorFaixa = Math.floor((baseCalculo), faixaSuperior) - faixaInferior;
  return valorFaixa * aliquota;
}

function calcularImpostoDevido(salario) {
  let impostoDevido = 0;
  let baseCalculo = salario - 563.80

  if (salario <= 2259.20) {
    // Faixa 1 - Isento
    impostoDevido = 0;

  } else if (salario > 2259.20 && salario <= 2826.65) {
    // Faixa 2 - 7,5%
    const faixa2 = calcularFaixa(baseCalculo, 2259.20, 2826.65, 0.075);
    impostoDevido += faixa2;

  } else if (salario > 2826.65 && salario <= 3751.05) {
    // Faixa 3 - 15%
    const faixa2 = calcularFaixa(2826.65, 2259.20, 2826.65, 0.075);
    const faixa3 = calcularFaixa(baseCalculo, 2826.65, 3751.05, 0.15);
    impostoDevido += faixa2 + faixa3;

  } else if (salario > 3751.06 && salario <= 4664.68) {
    // Faixa 4 - 22,5%
    const faixa2 = calcularFaixa(2826.65, 2259.20, 2826.65, 0.075);
    const faixa3 = calcularFaixa(3751.05, 2826.65, 3751.05, 0.15);
    const faixa4 = calcularFaixa(baseCalculo, 3751.05, 4664.68, 0.225);
    impostoDevido += faixa2 + faixa3 + faixa4 +23.56;

  } else if (salario > 4664.68) {
    // Faixa 5 - 27,5%
    const faixa2 = calcularFaixa(2826.65, 2259.20, 2826.65, 0.075);
    const faixa3 = calcularFaixa(3751.05, 2826.65, 3751.05, 0.15);
    const faixa4 = calcularFaixa(4664.68, 3751.05, 4664.68, 0.225);
    const faixa5 = calcularFaixa(baseCalculo, 4664.68, Infinity, 0.275);
    impostoDevido += faixa2 + faixa3 + faixa4 + faixa5;
  }

  return impostoDevido;
}

// Evento de clique no botão
document.getElementById("calcular").addEventListener('click', function() {
  const salario = parseFloat(document.getElementById('salario').value);
  
  if (!salario || salario < 0) {
    alert('Insira um salário válido.');
    return;
  }

  // aparecer na tela
  const IR = calcularImpostoDevido(salario);
  const aliquotaEfetiva = calcularAliquota(salario, IR);

  document.getElementById('resultado').innerHTML = `
    <p>Valor de IRPF a ser recolhido: R$ ${IR.toFixed(2)}</p>
    <p>Alíquota efetiva: ${aliquotaEfetiva.toFixed(2)}%</p>`;
});