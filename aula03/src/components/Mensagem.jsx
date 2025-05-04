import React from 'react';

const Mensagem = ({ tipo }) => {
  // Verifica se o tipo é válido
  if (!tipo || !['sucesso', 'erro', 'aviso'].includes(tipo)) {
    return null; // Ou você pode retornar uma mensagem padrão
  }

  // Define o conteúdo baseado no tipo
  const conteudo = {
    sucesso: <h1>Operação realizada com sucesso!</h1>,
    erro: <h2>Ocorreu um erro na operação.</h2>,
    aviso: <h3>Atenção! Verifique os dados.</h3>
  };

  return <div className={`mensagem-${tipo}`}>{conteudo[tipo]}</div>;
};

export default Mensagem;