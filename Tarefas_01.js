const prompt = require('prompt-sync')()

//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.

let numero = parseInt(prompt("Digite um número inteiro: "));
if (numero % 2 === 0) {
    console.log("O número " + numero + " é par.");
}   else {
    console.log("O número " + numero + " é ímpar.");
}



// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else

let idade = parseInt(prompt("Digite a idade da pessoa: "));
if (idade >= 0 && idade <= 12) {
    console.log("A pessoa é uma criança.");
}   else if (idade >= 13 && idade <= 17) {
    console.log("A pessoa é um adolescente.");
}   else if (idade >= 18 && idade <= 59) {
    console.log("A pessoa é um adulto.");
}   else if (idade >= 60) {
    console.log("A pessoa é um idoso.");
}   



// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if

let nota = parseFloat(prompt("Digite a nota do aluno (0 a 10): "));
if (nota >= 0 && nota < 4) {
    console.log("Reprovado");
}   else if (nota >= 4 && nota < 7) {
    console.log("Recuperação");
}   else if (nota >= 7 && nota <= 10) {
    console.log("Aprovado");
}   



// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

let opcao = parseInt(prompt("Escolha uma opção:\n1. Opção 1\n2. Opção 2\n3. Opção 3\n"));
switch (opcao) {
    case 1:
        console.log("Você escolheu a Opção 1.");
        break;
    case 2:
        console.log("Você escolheu a Opção 2.");
        break;
    case 3:
        console.log("Você escolheu a Opção 3.");
        break;
    default:
        console.log("Opção inválida.");
        break;
}   




// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

let peso = parseFloat(prompt("Digite o peso em kg: "));
let altura = parseFloat(prompt("Digite a altura em metros: "));
let imc = peso / (altura * altura);
if (imc < 18.5) {
    console.log("Baixo peso");
}   else if (imc >= 18.5 && imc < 24.9) {
    console.log("Peso normal");
}   else if (imc >= 25 && imc < 29.9) {
    console.log("Sobrepeso");
}   else if (imc >= 30) {
    console.log("Obesidade");
}   




// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

let a = parseFloat(prompt("Digite o lado A do triângulo: "));
let b = parseFloat(prompt("Digite o lado B do triângulo: "));
let c = parseFloat(prompt("Digite o lado C do triângulo: "));
if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log("O triângulo é equilátero.");
    }   else if (a === b || a === c || b === c) {
        console.log("O triângulo é isósceles.");
    }   else {
        console.log("O triângulo é escaleno.");
    }
}   else {
    console.log("Os lados fornecidos não formam um triângulo.");
}   




// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let quantidade = parseInt(prompt("Digite o número de maçãs compradas: "));
let preco = quantidade < 12 ? 0.30 : 0.25;
let total = quantidade * preco; 
console.log("O valor total da compra é: R$ " + total.toFixed(2));




// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
if (valor1 < valor2) {
    console.log("Os valores em ordem crescente são: " + valor1 + ", " + valor2);
}   else {
    console.log("Os valores em ordem crescente são: " + valor2 + ", " + valor1);
}   



// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

for (let i = 10; i >= 1; i--) {
    console.log(i);
}   



// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let numeroInteiro = parseInt(prompt("Digite um número inteiro: "));
for (let i = 0; i < 10; i++) {
    console.log("Número " + (i + 1) + ": " + numeroInteiro);
}   



// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

let somaTot = 0;
for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt("Digite o número " + i + ": "));
    somaTot += numero;
}
console.log("A soma total dos números é: " + somaTot);



// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

let numeroTabuada = parseInt(prompt("Digite um número para ver a tabuada: "));
for (let i = 1; i <= 10; i++) {
    let resultado = numeroTabuada * i;
    console.log(numeroTabuada + " x " + i + " = " + resultado);
}   



// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

let soma = 0;
let contador = 0;
let numeroDecimal; 
do {
    numeroDecimal = parseFloat(prompt("Digite um número decimal (0 para sair): "));
    if (numeroDecimal !== 0) {
        soma += numeroDecimal;
        contador++;
    }
} while (numeroDecimal !== 0);
if (contador > 0) {
    let media = soma / contador;
    console.log("A média aritmética dos números é: " + media);
}
else {
    console.log("Nenhum número foi digitado.");
}



// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

let numeroFat = parseInt(prompt("Digite um número para calcular o fatorial: "));
let fatorial = 1;
for (let i = 1; i <= numeroFat; i++) {
    fatorial *= i;
}
console.log("O fatorial de " + numeroFat + " é: " + fatorial);



// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for

let n = 10;
let fib = [0, 1];
for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log("Os primeiros " + n + " números da sequência de Fibonacci são: " + fib.join(", "));