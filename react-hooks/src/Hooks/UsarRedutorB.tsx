import { useReducer, useState } from "react";

type Task = {
    name: string;
    isCompleted: boolean;
};

type Action =
    | { type: "add-task"; payload: string }
    | { type: "toggle-task"; payload: number };

const reducer = (
    state: { tasks: Task[]; tasksCount: number },
    action: Action
) => {
    switch (action.type) {
        case "add-task":
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    { name: action.payload, isCompleted: false },
                ],
                tasksCount: state.tasksCount + 1,
            };
        case "toggle-task":
            return {
                ...state,
                tasks: state.tasks.map((item, index) =>
                    index === action.payload
                        ? { ...item, isCompleted: !item.isCompleted }
                        : item
                ),
            };
        default:
            return state;
    }
};

const UsarRedutorB = () => {
    const [state, dispatch] = useReducer(reducer, {
        tasks: [] as Task[],
        tasksCount: 0,
    });

    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch({ type: "add-task", payload: inputValue });
                    setInputValue("");
                }}
            >
                Adicionar Task
            </button>
            <p>Quant. de Tasks: {state.tasksCount}</p>
            <div>
                {state.tasks.map((task, index) => (
                    <p
                        key={index}
                        onClick={() =>
                            dispatch({
                                type: "toggle-task",
                                payload: index,
                            })
                        }
                        style={{
                            textDecoration: task.isCompleted
                                ? "line-through"
                                : "none",
                        }}
                    >
                        {task.name}
                    </p>
                ))}
            </div>
        </>
    );
};

export default UsarRedutorB;
