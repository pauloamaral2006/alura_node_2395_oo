import User from "./User.js";

class Docente extends User {
  constructor(name, email, nascimento, role = "docente", ativo = true) {
    super(name, email, nascimento, role, ativo);
  }

  aprovarEstudante(estudante, curso) {
    return `O estudante ${estudante} foi aprovado no curso de ${curso}!`;
  }
}

const novoDocente = new Docente("Mariana", "m@m.com", "10/10/1990");
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovarEstudante("Juliana", "JavaScript"));
