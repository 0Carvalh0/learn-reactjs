import { useEffect, useRef, useState } from "react";

const UsarRef = () => {
    const [name, setName] = useState("");
    const previousName = useRef("");

    const renders = useRef(0);

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        renders.current = renders.current + 1;
    });

    useEffect(() => {
        previousName.current = name
    }, [name])

    const handleFocus = () => {
        inputRef.current?.focus();
    };

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Hello my name is {name}</p>
            <p>Renderização atrazada: {previousName.current}</p>
            <p>Renderizações: {renders.current}</p>
            <button onClick={handleFocus}>Input Focus</button>
        </div>
    );
};

export default UsarRef;
