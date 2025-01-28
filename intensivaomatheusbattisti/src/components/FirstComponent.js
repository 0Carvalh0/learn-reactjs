import AnotherComponent from "./AnotherComponent";

function FirstComponent() {
  const name = "João";

  return (
    <div>
      <p>Olá para o React!</p>
      <p>Seu nome é: {name}</p>
      <AnotherComponent />
      <p>A soma de 2 + 2 é: {2 + 2}</p>
    </div>
  );
}

export default FirstComponent;
