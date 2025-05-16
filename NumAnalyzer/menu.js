let quantidade;
let soma = 0;
let maior = 0;
let continuar = 's';
let Quantidade_variavel = 0;

quantidade = prompt("Quantos números?");
quantidade = parseInt(quantidade);

for (let i = 0; i < quantidade; i++) {
  if (continuar === 'n' || Quantidade_variavel === quantidade) {
    break;
  }
  
  let numero = prompt("Número");
  numero = parseInt(numero);
  
  soma += numero;
  
  if (numero > maior) {
    maior = numero;
  }
  
  continuar = prompt("Deseja Continuar: S/N?");
  Quantidade_variavel++;
}

alert(`O maior número digitado foi: ${maior}`);
alert(`A sua soma de números foi de: ${soma}`);
