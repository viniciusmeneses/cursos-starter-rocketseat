// Importando as duas funções de export normal
// import { soma, sub } from './functions'

// Trocando o nome de uma função com export normal
// import { soma as somaFunction, sub } from './functions'

// Um export default (só pode um) e vários export normais
// import soma, { sub } from './functions'

// Caso exista vários exports normais, podemos importar todos com * (todos) nomeando para (as) algum outra variável,
// que será um objeto com todos os exports disponíveis
import * as functions from './functions'

// Export default só pode ter um dentro do arquivo JS e o objeto/função... exportado será chamado sem { }
// import somaFunction from './soma'

console.log(functions.soma(2, 2))
// console.log(sub(4, 2))