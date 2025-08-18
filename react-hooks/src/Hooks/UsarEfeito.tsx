import { useEffect, useState } from "react";

type Post = { id: number; title: string; body: string };
type Comment = { id: number; name: string; email: string; body: string };
type Todo = { id: number; title: string; completed: boolean };

type Resource = Post | Comment | Todo;

const UsarEfeito = () => {
    const [resourceType, setResourceType] = useState("posts");
    const [list, setList] = useState<Resource[]>([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then((res) => res.json())
            .then((jsonData) => {
                setList(jsonData);
            });
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

            <div>
                {list.map((item) => (
                    <li key={item.id}>
                        {"name" in item
                            ? item.name
                            : "title" in item
                            ? item.title
                            : JSON.stringify(item)}
                    </li>
                ))}
            </div>
        </>
    );
};

export default UsarEfeito;
