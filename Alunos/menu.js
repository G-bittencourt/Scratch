let quantidade = parseInt(prompt("Quantos números?"));
let soma = 0;
let maior = 0;
let continuar = 's';
let Quantidade_variavel = 0;

for (let i = 0; i < quantidade; i++) {
    if (continuar === 'n' || Quantidade_variavel === quantidade) {
        break;
    }
    
    let numero = parseInt(prompt("Número"));
    soma += numero;
    
    if (numero > maior) {
        maior = numero;
    }
    
    continuar = prompt("Deseja continuar? (S/N)");
    Quantidade_variavel++;
}

alert(`O maior número digitado foi: ${maior}`);
alert(`A soma dos números é: ${soma}`);
