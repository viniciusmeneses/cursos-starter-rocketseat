import axios from 'axios'

class Api {
  static async getUserInfo(username) {
    // Quando usamos ASYNC e AWAIT, utilizamos try catch para
    // capturar os erros da Promise (como se fosse .catch())
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`)
      console.log(response)
    } catch(err) {
      console.log('Erro na API')
    }
  }
}

Api.getUserInfo('viniciusmeneses')