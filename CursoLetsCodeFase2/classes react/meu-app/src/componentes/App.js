/**
 * O que é escrito dentro do return, que pode ser misturado com componentes HTML e JavaScript
 * é  um " dialeto" chamado JSX. Ele nos permite escrever html e js fora de strings e se for usado
 * uma tag que tenha o mesmo nome de um componente ele será renderizado onde a tag estiver.
 * Não precisamos construir um arquivo html. Colocamos junto com o código dentro das classes e funções
 * que serve para construir os componetes.
 */

import React from 'react';
class App extends React.Component{
  render(){
    return(
      <>
      <p>
        Meu primeiro parágrafo.
      </p>
      <p>
        Meu segundo parágrafo.
      </p>
      <p>
        {new Date().toLocaleDateString('pt-BR')}
      </p>
      </>
  
    );
  }
}
export default App;
