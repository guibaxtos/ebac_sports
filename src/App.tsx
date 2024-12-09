import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import Produtos from './containers/Produtos'
import Header from './components/Header'
import GlobalStyle from './styles/global_style'

function App() {
  const produtos = [
    {
      id: 1,
      nome: 'Produto A',
      preco: 100,
      imagem: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      nome: 'Produto B',
      preco: 200,
      imagem: 'https://via.placeholder.com/150'
    }
  ]

  const favoritos = [
    {
      id: 1,
      nome: 'Produto A',
      preco: 100,
      imagem: 'https://via.placeholder.com/150'
    }
  ]

  const adicionarAoCarrinho = (id: number) => {
    console.log(`Produto ${id} adicionado ao carrinho!`)
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </Provider>
  )
}

export default App
export type Produto = {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}
