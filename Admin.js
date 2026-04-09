import User from "./User.js";

export default class Admin extends User {
  constructor(name, email, nascimento, role = "admin", ativo = true) {
    super(name, email, nascimento, role, ativo);
  }

  criarCurso(nomeDoCurso, vagas) {
    return `O curso de ${nomeDoCurso} criado com ${vagas} vagas!`;
  }
}
/* 
const novoAdmin = new Admin("Rodrigo", "r@r.com", "10/10/1990");
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso("JavaScript", 10)); */
