export default class User {
  constructor(name, email, nascimento, role, ativo = true) {
    this.name = name;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role;
    this.ativo = ativo;
  }

  exibirInfos() {
    return `Nome: ${this.name}, Email: ${this.email}, Nascimento: ${this.nascimento}, Role: ${this.role}, Ativo: ${this.ativo}`;
  }
}

/* const novoUser = new User("Maria", "j@j.com", "10/10/1990", "admin");
console.log(novoUser);
console.log(novoUser.exibirInfos());
console.log(User.prototype.isPrototypeOf(novoUser)); */
