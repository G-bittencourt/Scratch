whenGreenFlagClicked() {
    this.stage.vars.digito = 1;
    this.stage.vars.soma = 0;
    this.stage.vars.media = 0;
    this.stage.vars.numero = 0;
    this.stage.vars.div5 = 0;
    this.stage.vars.somaPares = 0;
    this.stage.vars.nulos = 0;
    for (let i = 0; i < 5; i++) {
      yield* this.askAndWait("Digito " + this.toString(this.stage.vars.digito));
      this.stage.vars.digito++;
      this.stage.vars.soma += this.toNumber(this.answer);
      this.stage.vars.media = this.toNumber(this.stage.vars.soma) / 2;
      this.stage.vars.numero = this.answer;
      if (this.toNumber(this.stage.vars.numero) === 0) {
        this.stage.vars.nulos++;
      }
      if (
        this.toNumber(this.stage.vars.numero) % 5 === 0 &&
        this.compare(this.stage.vars.numero, 0) > 0
      ) {
        this.stage.vars.div5++;
        if (
          this.toNumber(this.stage.vars.numero) % 2 === 0 &&
          this.compare(this.stage.vars.numero, 2) > 0
        ) {
          this.stage.vars.somaPares += this.toNumber(this.stage.vars.numero);
        }
      }
      yield;
    }
    yield* this.sayAndWait(
      "A soma dos números foi: " + this.toString(this.stage.vars.soma),
      2
    );
    yield* this.sayAndWait(
      "A média dos números foi: " + this.toString(this.stage.vars.media),
      2
    );
    yield* this.sayAndWait(
      "Quantidade de números divisíveis por 5 foi: " +
        this.toString(this.stage.vars.div5),
      2
    );
    yield* this.sayAndWait(
      "Quantidade de números nulos foi: " +
        this.toString(this.stage.vars.nulos),
      2
    );
    yield* this.sayAndWait(
      "A soma dos números pares foi: " +
        this.toString(this.stage.vars.somaPares),
      2
    );
  }
