class telefone {
  constructor() {
    if (this.constructor.name === "telefone")
      throw new Error("Classe telefone nao é suficiente");
  }

  ligar() {}

  tirarFoto() {}

  conectarAoWifi() {}
}
