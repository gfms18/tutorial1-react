import React, { useState } from 'react';
import "./App.css";

const App = () => {
  // let message = 'hello world!'; 
  const [message, setMessage] = useState('hello word') //message virou um state, setmessage serve para atualizar o state
                                             //esse hello world é o valor inicial
  return (
    <>
      <div className="container">{message}</div>
      <button onClick={() => setMessage("iae pae")}>Mudar mensagem</button>
    </> //como parametro, estamos setando o valor novo que queremos 
  )
};

export default App; //exportar a funcao app 






 //quando retornamos algo na função, no componente react, 
 //a gente so pode retornar um elemento POR ISSO TEMOS QUE RENDERIZAR TUDO EM UMA DIV SO

 // <> é fragments, podemos colocar isso al inves de <div></div>

//a variavel normal com let quando alterada nao atualiza o componente, o state sim

