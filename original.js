/*
  A implementação em JS deve possuir pelo menos as seguintes funções:

Função para calcular porcentagem da alíquota, com dois parâmetros de entrada (salário e IR) e um retorno (a porcentagem efetiva de alíquota); FEITO
Função para cálculo do imposto devido, que recebe como entrada o salário e retorna o salario devido. Esta função deve chamar uma função para cada faixa da alíquota, dividindo a tarefa do cálculo em várias partes.


imposto * 100 / (salario + deducao)


2,39
// */
// function calcularAliquota(salario, impostoDevido) {
//   const deducao = 564.80;
//   let valor = (impostoDevido * 100) / (salario + deducao);
//   valor = Math.floor(valor * 100) / 100;
//   return valor;
// }


// function calcularImpostoFaixa(salario) {
//   if (salario <= 2259.20) {
//     return 0;
//   } else if (salario <= 2826.65) {
//     return salario * 0.075 + deducao;
//   } else if (salario <= 3751.05) {
//     return salario * 0.15 + deducao ;
//   } else if (salario <= 4664.68) {
//     return salario * 0.225 + deducao;
//   } else {
//     return salario * 0.275 + deducao;
//   }
// }

// function calcularImpostoDevido(salario) {
//   const impostoDevido = calcularImpostoFaixa(salario);
//   const porcentagem = calcularPorcentagemAliquota(salario, impostoDevido);
//   return {
//     impostoDevido: impostoDevido,
//     aliquotaEfetiva: porcentagem
//   };
// }


// // Evento de clique no botão
// document.getElementById("calcular").addEventListener('click', function() { 
//   const salario = parseFloat(document.getElementById('salario').value);
  
//   if (!salario || salario < 0) {
//     alert('Por favor, insira um salário válido.');
//     return;
//   }

//   // aparecer na tela
//   const impostoDevido = calcularImpostoDevido(salario);
//   const aliquotaEfetiva = calcularAliquota(salario, impostoDevido);

//   document.getElementById('resultado').innerHTML = `
//     <p>Valor de IRPF a ser recolhido: R$ ${impostoDevido.toFixed(2)}</p>
//     <p>Alíquota efetiva: ${aliquotaEfetiva.toFixed(2)}%</p>
//   `;
// });





















/*
  A implementação em JS deve possuir pelo menos as seguintes funções:

Função para calcular porcentagem da alíquota, com dois parâmetros de entrada (salário e IR) e um retorno (a porcentagem efetiva de alíquota); FEITO

Função para cálculo do imposto devido, que recebe como entrada o salário e retorna o salario devido. Esta função deve chamar uma função para cada faixa da alíquota, dividindo a tarefa do cálculo em várias partes.


Imposto = base de cálculo x (alíquota/100)
2,39
*/

function calcularAliquota(salario, impostoDevido) {
  if (salario == 0) {
    return 0;
  }
  return ((impostoDevido / salario) * 100)  ; // Retorna a alíquota em %
}

function calcularImpostoFaixa(salario, faixaInferior, faixaSuperior, aliquota) {
  if (salario <= faixaInferior) {
    return 0; // Se o salário está abaixo da faixa, não há imposto
  }
const Valor = Math.min(salario, faixaSuperior) - faixaInferior;
return Valor * aliquota + 77.82;
}

function calcularImpostoDevido(salario) {
  let impostoDevido = 0;

  if (salario < 2259.20) {
    // Isento
    return 0;
  }
  else if (salario > 2259.21  && salario <= 2826.65) {
    // 7,5%
    impostoDevido += calcularImpostoFaixa(salario, 2259.21 , 2826.65, 0.075);
  }
  else if (salario > 2826.66 && salario <= 3751.05) {
    // 15%
    impostoDevido += calcularImpostoFaixa(salario, 2826, 3751.05, 0.15);
  }
 else if (salario > 3751.06 && salario <= 4664.68) {
    // 22,5%
    impostoDevido += calcularImpostoFaixa(salario, 3751.65, 4664.68, 0.225);
  }
 else if (salario > 4664.68) {
    // 27,5%
    impostoDevido += calcularImpostoFaixa(salario, 4664.68, Infinity, 0.275);
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
  const impostoDevido = calcularImpostoDevido(salario);
  const aliquotaEfetiva = calcularAliquota(salario, impostoDevido);

  document.getElementById('resultado').innerHTML = `
    <p>Valor de IRPF a ser recolhido: R$ ${impostoDevido.toFixed(2)}</p>
    <p>Alíquota efetiva: ${aliquotaEfetiva.toFixed(2)}%</p>  `;
}); 
