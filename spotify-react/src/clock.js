import { useEffect, useState } from "react";

const Clock = () => {
    const [greetingText, setGreetingText] = useState("");
    const [hora] = useState(new Date().getHours());

    useEffect(() => {
        if (hora >= 5 && hora < 12) {
            setGreetingText("Bom Dia");
        } else if (hora >= 12 && hora < 18) {
            setGreetingText("Boa Tarde");
        } else {
            setGreetingText("Boa Noite");
        }
    }, [hora]);

    return <h1 id="greeting">{greetingText}</h1>;
};

export default Clock;
