// Exercício 1
class Usuario {
  constructor(email, password) {
      this.email = email
      this.password = password
      this.admin = false
  }

  isAdmin() {
      return this.admin
  }
}

class Admin extends Usuario {
  constructor(email, password) {
      super(email, password)
      this.admin = true
  }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

// Exercicio 2
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const userGoogle = usuarios.find(usuario => usuario.empresa === 'Google')
console.log(userGoogle)

//Exercicio 4
const empresa = {
  nome: 'Rocketseat',
  endereco: {
      cidade: 'Rio do Sul',
      estado: 'SC',
  }
};

const { nome, endereco: { cidade, estado } } = empresa

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
 
 
function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 })


//Exercício 5
const arr = [1, 2, 3, 4, 5, 6]
const [ x, ...y ] = arr
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
      cidade: 'Rio do Sul',
      uf: 'SC',
      pais: 'Brasil',
  }
};

let usuario2 = {
  ...usuario,
  nome: 'Gabriel'
}
let usuario3 = {
  ...usuario
}
usuario3.endereco.cidade = 'Lontras'
console.log(usuario3)