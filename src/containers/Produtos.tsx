import React from 'react';
import styled from 'styled-components';

type ProdutoType = {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
};

type Props = {
  produtos: ProdutoType[];
  favoritos: ProdutoType[];
  adicionarAoCarrinho: (id: number) => void;
};

const ProdutosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px;
`;

const ProdutoCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  text-align: center;

  img {
    max-width: 100%;
    border-radius: 4px;
  }

  h3 {
    font-size: 18px;
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    color: #666;
  }

  button {
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Produtos = ({ produtos, favoritos, adicionarAoCarrinho }: Props) => {
  return (
    <ProdutosWrapper>
      {produtos.map((produto) => (
        <ProdutoCard key={produto.id}>
          <img src={produto.imagem} alt={produto.nome} />
          <h3>{produto.nome}</h3>
          <p>R$ {produto.preco.toFixed(2)}</p>
          <button onClick={() => adicionarAoCarrinho(produto.id)}>Adicionar ao Carrinho</button>
        </ProdutoCard>
      ))}
    </ProdutosWrapper>
  );
};

export default Produtos;

