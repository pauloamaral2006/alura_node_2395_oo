import Admin from "./Admin.js";
import Docente from "./Docente.js";
import User from "./User.js";

const novoUser = new User("Mariana", "m@m.com", "10/10/1990");
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Rodrigo", "r@r.com", "10/10/1985");
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.name);
novoAdmin.name = "André";
console.log(novoAdmin.name);

const novoDocente = new Docente("Guilherme", "g@g.com", "10/10/1980");
console.log(novoDocente.exibirInfos());
