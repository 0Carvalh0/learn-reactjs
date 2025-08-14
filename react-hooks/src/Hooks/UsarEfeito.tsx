import { useEffect, useState } from "react";

const UsarEfeito = () => {
    const [resourceType, setResourceType] = useState("posts");

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then((res) => res.json())
            .then((jsonData) => console.log(jsonData));
    }, [resourceType]);

    function handleSwitch(resourceType: string) {
        setResourceType(resourceType);
    }

    return (
        <>
            <h1>{resourceType}</h1>
            <button onClick={() => handleSwitch("posts")}>Posts</button>
            <button onClick={() => handleSwitch("comments")}>Comments</button>
            <button onClick={() => handleSwitch("todos")}>Todos</button>
        </>
    );
};

export default UsarEfeito;
