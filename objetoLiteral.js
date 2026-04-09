const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2021/01/01",
  role: "admin",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email, this.nascimento, this.role, this.ativo);
  },
};

const admin = {
  nome: "Mariana",
  email: "m@m.com",
  role: "admin",
  criarCurso() {
    console.log("Curso criado!");
  },
};

Object.setPrototypeOf(admin, user); //definindo user como protótipo de admin
admin.criarCurso();
admin.exibirInfos();

/* user.exibirInfos();
//const exibir = user.exibirInfos;
//exibir(); //undefined, pois o this perdeu a referência do objeto user
const exibir = function () {
  console.log(this.nome, this.email, this.nascimento, this.role, this.ativo);
};
const exibirNome = exibir.bind(user);
exibirNome();
exibir(); //undefined, pois o this perdeu a referência do objeto user
 */
