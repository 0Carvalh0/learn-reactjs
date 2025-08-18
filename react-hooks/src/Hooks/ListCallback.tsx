import { useEffect, useState } from "react";

type Post = { id: number; title: string; body: string };
type Comment = { id: number; name: string; email: string; body: string };
type Todo = { id: number; title: string; completed: boolean };

type Resource = Post | Comment | Todo;

type ListCallbackProps = {
    getItems: () => Promise<Resource[]>;
};

const ListCallback = ({ getItems }: ListCallbackProps) => {
    const [items, setItems] = useState<Resource[]>([]);

    useEffect(() => {
        getItems().then((res) => setItems(res));
    }, [getItems]);

    return (
        <>
            {items.map((item) => (
                <p key={item.id}>
                    {"name" in item
                        ? item.name
                        : "title" in item
                        ? item.title
                        : JSON.stringify(item)}
                </p>
            ))}
        </>
    );
};

export default ListCallback;
