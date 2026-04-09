export default class User {
  #name;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(name, email, nascimento, role, ativo = true) {
    this.#name = name;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }

  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }

  set name(novoName) {
    if (novoName === "") {
      throw new Error("O nome não pode ser vazio");
    }
    this.#name = novoName;
  }   
    
  exibirInfos() {
    const objUser = this.#montaObjetoUser();
    return `Nome: ${objUser.name}, Email: ${objUser.email}, Nascimento: ${objUser.nascimento}, Role: ${objUser.role}, Ativo: ${objUser.ativo}`;
  }

  #montaObjetoUser() {
    return {
      name: this.#name,
      email: this.#email,
      nascimento: this.#nascimento,
      role: this.#role,
      ativo: this.#ativo,
    };
  }
}

/* const novoUser = new User("Maria", "j@j.com", "10/10/1990", "admin");
console.log(novoUser);
console.log(novoUser.exibirInfos());
console.log(User.prototype.isPrototypeOf(novoUser)); */
