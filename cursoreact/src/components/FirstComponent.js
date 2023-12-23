import AnotherComponent from "./AnotherComponent"

function FirstComponent() {
    // Algum Comentário
    const name = "João Victor"

    return (
        <div className="firstcomponent">
            {/* Comentário no JSX */}
            <p>Primeiro Componente</p>
            {2 + 2}
            <p>Nome: {name}</p>
            <AnotherComponent />
        </div>
    )
}

export default FirstComponent