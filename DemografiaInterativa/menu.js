*whenGreenFlagClicked() {
    this.stage.vars.continuar = "s";
    this.vars.contador = 1;
    this.vars.contadorHomem = 0;
    this.vars.contadorMulher = 0;
    this.vars.sexoIndividuos = [];
    this.vars.idadeIndividuos = [];
    this.stage.vars.cabeloIndividuos = [];
    while (!(this.toString(this.stage.vars.continuar) === "n")) {
      yield* this.askAndWait("Qual o Sexo: (M/F)");
      this.vars.sexoIndividuos.push(this.answer);
      yield* this.askAndWait("Qual idade");
      this.vars.idadeIndividuos.push(this.answer);
      yield* this.askAndWait(
        "Qual cor de cabelo? Preto(1), Castanho(2),Loiro(3) e Ruivo(4)"
      );
      if (this.toNumber(this.answer) === 1) {
        this.stage.vars.cabeloIndividuos.push("Preto");
      } else {
        if (this.toNumber(this.answer) === 2) {
          this.stage.vars.cabeloIndividuos.push("Castanho");
        } else {
          if (this.toNumber(this.answer) === 3) {
            this.stage.vars.cabeloIndividuos.push("Loiro");
          } else {
            this.stage.vars.cabeloIndividuos.push("Ruivo");
          }
        }
      }
      if (
        this.toString(
          this.itemOf(this.vars.sexoIndividuos, this.vars.contador - 1)
        ) === "f" &&
        this.compare(
          this.itemOf(this.vars.idadeIndividuos, this.vars.contador - 1),
          24
        ) > 0 &&
        this.compare(
          this.itemOf(this.vars.idadeIndividuos, this.vars.contador - 1),
          31
        ) < 0 &&
        this.toString(
          this.itemOf(this.stage.vars.cabeloIndividuos, this.vars.contador - 1)
        ) === "Loiro"
      ) {
        this.vars.contadorMulher++;
      }
      if (
        this.toString(
          this.itemOf(this.vars.sexoIndividuos, this.vars.contador - 1)
        ) === "m" &&
        this.compare(
          this.itemOf(this.vars.idadeIndividuos, this.vars.contador - 1),
          18
        ) > 0 &&
        this.toString(
          this.itemOf(this.stage.vars.cabeloIndividuos, this.vars.contador - 1)
        ) === "Castanho"
      ) {
        this.vars.contadorHomem++;
      }
      yield* this.askAndWait("Quer continuar (s/n)");
      this.stage.vars.continuar = this.answer;
      this.vars.contador++;
      yield;
    }
    this.say(
      "A quantidade de Homens >18, cabelos castanhos é de: " +
        (this.toString(this.vars.contadorHomem) +
          (" ,já a quantidade de mulheres entre 25 e 30 que são loiras é de:" +
            this.toString(this.vars.contadorMulher)))
    );
  }
