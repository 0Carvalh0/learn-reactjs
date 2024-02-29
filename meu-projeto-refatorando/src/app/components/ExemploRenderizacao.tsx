"use client";

import { useState } from "react";

function ExemploRenderizacao() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
    </div>
  );
}

export default ExemploRenderizacao;
