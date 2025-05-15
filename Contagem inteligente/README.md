// Ao iniciar (simulando o clique na bandeira verde)
function iniciar() {
  const resposta = prompt("Digite: 1, 2 ou 3"); // Pergunta ao usuário
  let menu = resposta;

  // Agora você pode usar o valor de 'menu' para tomar decisões
  if (menu === "1") {
    console.log("Você escolheu a opção 1");
  } else if (menu === "2") {
    console.log("Você escolheu a opção 2");
  } else if (menu === "3") {
    console.log("Você escolheu a opção 3");
  } else {
    console.log("Opção inválida");
  }
}

iniciar();
