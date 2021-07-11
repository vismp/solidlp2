class ave {
  voar(velocidade) {
    return `Voando a ${velocidade} km/h`;
  }
}

class gaviao extends ave {
  voar(velocidade) {
    return `Voando a ${velocidade}`;
  }
}

// Ops, pinguim nao voa
class pinguim extends ave {
  voar() {
    return new Error("Nao consigo voar =(");
  }
}
