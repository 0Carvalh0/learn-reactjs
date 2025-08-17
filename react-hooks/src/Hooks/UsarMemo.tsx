import { useMemo, useState } from "react";

const UsarMemo = () => {
    const [number, setNumber] = useState(1);
    const [text, setText] = useState("");

    const slowFunction = (number: number): number => {
        console.log("DEVAGAR!");
        for (let i = 0; i <= 10000; i++) {}
        return number * 2;
    };

    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);

    return (
        <>
            <p>{number}</p>
            <p>{doubleNumber}</p>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => setNumber(2)}>Increment</button>
            <p>text: {text}</p>
        </>
    );
};

export default UsarMemo;
