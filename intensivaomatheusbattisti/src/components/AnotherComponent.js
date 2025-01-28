const AnotherComponent = () => {
  const clickEvent = () => {
    console.log("Cliquei no botão!");
  }

  return (
    <div>
      <p>Segundo Componente!</p>
      <button onClick={clickEvent}>Evento de Clique</button>

      <button onClick={() => console.log("Cliquei no outro Botão!")}>Evento no elemento</button>
    </div>
  )
}

export default AnotherComponent;