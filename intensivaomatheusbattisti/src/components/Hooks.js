import React, { useState } from "react";

function Hooks() {
  let idade = 20;
  let [novaIdade, setNovaIdade] = useState(30);

  function changeAge() {
    idade = idade + 5;
    console.log(idade);
  }

  function changeNewAge() {
    setNovaIdade(novaIdade + 5);
  }

  return (
    <div>
      <p>Idade: {idade}</p>
      <button onClick={changeAge}>Mudar Idade</button>
      <p>Nova Idade: {novaIdade}</p>
      <button onClick={changeNewAge}>Mudar Nova Idade</button>
    </div>
  );
}

export default Hooks;
