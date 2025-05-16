*whenGreenFlagClicked() {
    this.vars.fibonacci = 0;
    this.stage.vars.fibonacciSoma = 1;
    yield* this.sayAndWait(this.vars.fibonacci, 1);
    yield* this.sayAndWait(this.stage.vars.fibonacciSoma, 1);
    for (let i = 0; i < 13; i++) {
      this.stage.vars.fibonacciResultado =
        this.toNumber(this.vars.fibonacci) +
        this.toNumber(this.stage.vars.fibonacciSoma);
      this.vars.fibonacci = this.stage.vars.fibonacciSoma;
      this.stage.vars.fibonacciSoma = this.stage.vars.fibonacciResultado;
      yield* this.sayAndWait(this.stage.vars.fibonacciSoma, 1);
      yield;
    }
  }
