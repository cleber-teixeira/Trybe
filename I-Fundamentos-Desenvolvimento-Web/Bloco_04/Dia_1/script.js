/*
01- Faça cinco programas, um para cada operação aritmética básica.
Seu programa deve ter duas variáveis, a e b , definidas no começo
com os valores que serão operados. Faça programas para:
Adição | Subtração | Multiplicação | Divisão | Módulo
*/

function ex01() {
  const a = parseInt(document.getElementById('a1').value);
  const b = parseInt(document.getElementById('b1').value);
  let adicao = a + b;
  let subtracao = a - b;
  let multiplicacao = a * b;
  let divisao = parseFloat(a / b).toFixed(2);
  let modulo = a % b;
  document.getElementById('adcao').innerHTML = `- A adição ${a} + ${b} é igual a ${adicao}`;
  document.getElementById('subtracao').innerHTML = `- A subtração ${a} - ${b} é igual a ${subtracao}`;
  document.getElementById('multiplicacao').innerHTML = `- A multiplicação ${a} * ${b} é igual a ${multiplicacao}`;
  document.getElementById('divisao').innerHTML = `- A divisão ${a} / ${b} é igual a ${divisao}`;
  document.getElementById('modulo').innerHTML = `- O resto da divisão entre ${a} e ${b} é igual a ${modulo}`;
}

/*
02- Faça um programa que retorne o maior de dois números.
Defina no começo do programa duas variáveis com os 
valores que serão comparados.
*/

function ex02() {
  const num1 = parseInt(document.getElementById('a2').value);
  const num2 = parseInt(document.getElementById('b2').value);
  if (num1 > num2) {
      document.getElementById('resultado2').innerHTML = `Sendo os valores ${num1} e ${num2}, logo o valor ${num1} é o maior.`;
  } else if (num1 < num2) {
    document.getElementById('resultado2').innerHTML = `Sendo os valores ${num1} e ${num2}, logo o valor ${num2} é o maior.`;
  } else {
    document.getElementById('resultado2').innerHTML = `Neste caso, não há maior valor`;
  }
}

/*
03- Faça um programa que retorne o maior de três números.
Defina no começo do programa três variáveis com os 
valores que serão comparados.
*/

function ex03() {
  const num1 = parseInt(document.getElementById('a3').value);
  const num2 = parseInt(document.getElementById('b3').value);
  const num3 = parseInt(document.getElementById('c3').value);
  if (num1 > num2 && num1 > num3) {
      document.getElementById('resultado3').innerHTML = `Sendo os valores ${num1}, ${num2} e ${num3}, logo o valor ${num1} é o maior.`;
  } else if (num2 > num1 && num2 > num3) {
    document.getElementById('resultado3').innerHTML = `Sendo os valores ${num1}, ${num2} e ${num3}, logo o valor ${num2} é o maior.`;
  } else if (num3 > num1 && num3 > num2) {
    document.getElementById('resultado3').innerHTML = `Sendo os valores ${num1}, ${num2} e ${num3}, logo o valor ${num3} é o maior.`;
  } else {
    document.getElementById('resultado3').innerHTML = `Neste caso, não há maior valou, ou não foi identificado algum valor`;
  }
}

/* 
04- Faça um programa que, dado um valor definido numa variável,
retorne "positive" se esse valor for positivo, "negative" se 
for negativo e "zero" caso contrário.
*/

function ex04() {
  const num = parseInt(document.getElementById('a4').value);
  if (num > 0) {
    document.getElementById('resultado4').innerHTML = 'positive';
  } else if (num < 0) {
    document.getElementById('resultado4').innerHTML = 'negative';
  } else {
    document.getElementById('resultado4').innerHTML = 'zero';
  }
}

/*
05- Faça um programa que defina três variáveis com os valores
dos três ângulos internos de um triângulo. Retorne true se os
ângulos representarem os ângulos de um triângulo e false caso
contrário.
    - Para os ângulos serem de um triângulo válido, a soma dos
    três deve ser 180 graus. Caso os ângulos estejam inválidos,
    o programa deve retornar uma mensagem de erro.
*/

function ex05() {
  const num1 = parseInt(document.getElementById('a5').value);
  const num2 = parseInt(document.getElementById('b5').value);
  const num3 = parseInt(document.getElementById('c5').value);
  //Verifica a soma dos ângulos se é igual a 180º
  if (num1 < 180 && num2 < 180 && num3 < 180) {
      if (num1 + num2 + num3 === 180) {
        document.getElementById('resultado5').innerHTML = '&rarr; true &larr; <br> Parabéns! Você encontrou o Triângulo!';
      } else {
        document.getElementById('resultado5').innerHTML = '&rarr; false &larr; <br> Para ser um Triângulo a soma dos ângulos deve ser 180.';
      }
  } else {
    document.getElementById('resultado5').innerHTML = 'Valor inválido! Digite três valores menores que 180.';
  }
}

/* 06- Escreva um programa que receba o nome de uma peça de 
    xadrez e retorne os movimentos que ela faz.
    * Como desafio, faça o programa funcionar tanto se
    receber o nome de uma peça com letras maiúsculas
    quanto com letras minúsculas, sem aumentar a
    quantidade de condicionais.
    * Como dica, você pode pesquisar uma função que faz
    uma string ficar com todas as letras minúsculas
    (lower case) .
    * Se a peça passada for inválida, o programa deve
    retornar uma mensagem de erro.
    
    *Exemplo: bishop -> diagonals */

   function ex06() {
    const pecaDeXadrez = document.getElementById('a6').value;
    switch (pecaDeXadrez.toLowerCase()) {
        case 'rei' || 'rei':
          document.getElementById('resultado6').innerHTML = 'O rei movimenta uma casa em qualquer direção.';
            break;
        case 'rainha':
          document.getElementById('resultado6').innerHTML = 'A rainha movimenta na diagonal e na horizontal.';
            break;
        case 'peão':
          document.getElementById('resultado6').innerHTML = 'O peão avança uma ou duas casas a primeira vez depois apenas uma.';
            break;
        case 'bispo':
          document.getElementById('resultado6').innerHTML = 'O bispo movimenta na diagonal.';
            break;
        case 'cavalo':
          document.getElementById('resultado6').innerHTML = 'O cavalo pode se movimentar em L saltando sobre outras peças.';
            break;
        case 'torre':
          document.getElementById('resultado6').innerHTML = 'A torre movimenta na horizontal ou vertical.';
            break;
        default:
          document.getElementById('resultado6').innerHTML = 'Erro, peça inválida!';
            break;
    };
  }
