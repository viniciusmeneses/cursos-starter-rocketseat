import React, { Component } from 'react'
import api from '../../services/api'

import './styles.css'

export default class Product extends Component {
  state = {
    product: {}
  }

  async componentDidMount() {
    // Para receber os parametros passados na URL
    // acessamos eles através do props.match.params
    const { id } = this.props.match.params

    const response = await api.get(`products/${id}`)
    this.setState({
      product: response.data
    })
  }

  render() {
    const { product } = this.state

    return (
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <p>
          URL: <a href={product.url} target="_blank" rel='noopener noreferrer'>{product.url}</a>
        </p>
      </div>
    )
  }
}