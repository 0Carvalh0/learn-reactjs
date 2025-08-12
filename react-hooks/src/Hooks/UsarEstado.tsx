import { useState } from "react";

const UsarEstado = () => {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount((prevState: number) => prevState + 1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Adicionar</button>
        </>
    );
};

export default UsarEstado;
