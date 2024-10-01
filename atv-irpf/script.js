/*
  A implementação em JS deve possuir pelo menos as seguintes funções:

Função para calcular porcentagem da alíquota, com dois parâmetros de entrada (salário e IR) e um retorno (a porcentagem efetiva de alíquota); FEITO

Função para cálculo do imposto devido, que recebe como entrada o salário e retorna o salario devido. Esta função deve chamar uma função para cada faixa da alíquota, dividindo a tarefa do cálculo em várias partes.
 */
function calcularAliquota(salario, IR) {
  if (salario == 0) {
    return 0;
  }
  return (IR / salario) * 100;
}
function calcularImpostoDevido(salario) {
  let impostoDevido = 0;

  if ((salario < 2259.20)) {
    //isento 
    return 0;
  }
  if(salario < 2826.65);{
    //7,5%
    impostoDevido += calcularImpostoFaixa(salario, 2259.20, 2826.65, 0.075);
  }
  if(salario < 3.751);
  {
    //15%
    impostoDevido += calcularImpostoFaixa(salario, 2826.65, 3.751, 0.15);
  }
  if(salario < 4664.68);
  {
    //22,5%
    impostoDevido += calcularImpostoFaixa(salario, 3.751, 4664.68, 0.225)
  }
  if(salario >= 4664.25);
  {
    // 27,5%
    impostoDevido += calcularImpostoFaixa(salario, 4664.68, 466.25, 0.275)
  }
  return impostoDevido;
}

function calcularImpostoFaixa(salario, faixaInferior, faixaSuperior, aliquota) {
  const baseImponivel = Math.min(salario, faixaSuperior) - faixaInferior;
  return baseImponivel * aliquota;
}


document.getElementById("calcular").addEventListener('click', function(){ 
  const salario = parseFloat(document.getElementById('salario').value);
    
    if (!salario || salario < 0) {
        alert('Por favor, insira um salário válido.');
        return;
    }

    const impostoDevido = calcularImpostoDevido(salario);
    const aliquotaEfetiva = calcularAliquota(salario, impostoDevido);

    document.getElementById('resultado').innerHTML = `
    <p>Imposto devido: R$ ${impostoDevido.toFixed(2)}</p>
    <p>Alíquota efetiva: ${aliquotaEfetiva.toFixed(2)}%</p>
`;
});