import React from 'react';
import Mensagem from './Mensagem';

const App = () => {
  return (
    <div>
      <h1>Exemplo de Mensagens</h1>
      
      {/* Exemplos corretos */}
      <Mensagem tipo="sucesso" />
      <Mensagem tipo="erro" />
      <Mensagem tipo="aviso" />
      
      {/* Exemplo que NÃO será exibido (tipo inválido) */}
      <Mensagem tipo="outro" />
      
      {/* Exemplo que NÃO será exibido (tipo não especificado) */}
      <Mensagem />
    </div>
  );
};

export default App;