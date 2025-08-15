import { useReducer, useState } from "react";

type Task = {
    name: string,
    isCompleted: boolean
}

type Action = {
    type: "add-task";
    payload: string
}

const reducer = (
    state: { tasks: Task[]; tasksCount: number },
    action: Action
) => {
    switch (action.type) {
        case "add-task":
            return {
                tasks: [
                    ...state.tasks,
                    { name: action.payload, isCompleted: false },
                ],
                tasksCount: state.tasksCount + 1,
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
                    <p key={index}>{task.name}</p>
                ))}
            </div>
        </>
    );
};

export default UsarRedutorB;
