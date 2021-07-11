class NumberConverter {
  isNumber(number) {
    return true;
  }

  convertBase(number, fromBase, toBase) {
    return parseInt(number, fromBase).toString(toBase);
  }
}

class DecimalToBinary extends NumberConverter {
  isDecimalNumber(number) {
    return true;
  }

  dec2bin(number) {
    return this.convertBase(number, 10, 2);
  }
}

class BinaryToDecimal extends NumberConverter {
  isBinaryNumber(number) {
    return true;
  }

  bin2dec(number) {
    return this.convertBase(number, 2, 10);
  }
}
