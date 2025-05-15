function iniciar() {
  const resposta = prompt("Digite: 1, 2 ou 3"); // Pergunta ao usuário
  let menu = resposta;

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
