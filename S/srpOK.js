class Funcionarios {
  constructor(nome, cargo, horas) {
    this.nome = nome;
    this.cargo = cargo;
    this.horas = horas;
  }
}
function Pagamento(dadosFuncionario) {
  this.dadosFuncionario = dadosFuncionario;
  this.calcularPagamento = function () {
    //funcao
  };
}

function horasTrabalho(dadosFuncionario) {
  this.dadosFuncionario = dadosFuncionario;
  this.horasTrabalhadas = function () {
    //funcao
  };
}

function salvarFunc(dadosFuncionario) {
  this.dadosFuncionario = dadosFuncionario;
  this.salvar = function () {
    //funcao
  };
}
