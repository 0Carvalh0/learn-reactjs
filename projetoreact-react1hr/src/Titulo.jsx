import { useState } from "react";

function Titulo({cor}) {
    const [texto, setTexto] = useState("Texto Inicial")
    const [novoTexto, setNovoTexto] = useState("")
  return (
    <div>
      <h1 style={{color: cor}}>Oi eu sou Fulano {texto}</h1>
      <input type="text" value={novoTexto} onChange={(e) => {setNovoTexto(e.target.value)}} />
      <button onClick={() => {setTexto(novoTexto)}}>Mudar</button>
    </div>
  );
}

export default Titulo;
