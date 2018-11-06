// ASYNC e AWAIT
const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK')
  }, 2000)
})

// minhaPromise()
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => {

//   })

// TRANSFORMANDO PROMISE COM .THEN EM ASYNC E AWAIT
// Async só pode ser usado numa função
async function executaPromise() {
  // Await só pode ser usado dentro de uma função com async
  // A próxima linha dessa função com async só será executada depois de a promessa
  // com await for resolvida ou rejeitada
  const response = await minhaPromise()
  console.log(response)
}

// Uma função async automaticamente vira um promise que pode ser usada com await ou .then()
// executaPromise().then()
// await executaPromise()
executaPromise()