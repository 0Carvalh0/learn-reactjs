import { useCallback, useState } from "react";

import ListCallback from "./ListCallback";

const UsarCallback = () => {
    const [resourceType, setResourceType] = useState("posts");
    const [text, setText] = useState("");

    const getItems = useCallback(() => {
        console.log("Função Chamada");
        return fetch(
            `https://jsonplaceholder.typicode.com/${resourceType}`
        ).then((res) => res.json());
    }, [resourceType]);

    return (
        <>
            <h1>{resourceType}</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => setResourceType("posts")}>Posts</button>
            <button onClick={() => setResourceType("comments")}>
                Comments
            </button>
            <button onClick={() => setResourceType("todos")}>Todos</button>

            <ListCallback getItems={getItems} />
        </>
    );
};

export default UsarCallback;
