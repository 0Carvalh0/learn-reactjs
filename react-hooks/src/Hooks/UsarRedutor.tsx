import { useReducer } from "react";

const reducer = (
    state: { counter: number },
    action: { type: "increment" } | { type: "decrement" }
) => {
    switch (action.type) {
        case "increment":
            return { counter: state.counter + 1 };
        case "decrement":
            return { counter: state.counter - 1 };
        default:
            return state;
    }
};

const UsarRedutor = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    return (
        <>
            <p>{state.counter}</p>
            <button onClick={() => dispatch({ type: "increment" })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>
                Decrement
            </button>
        </>
    );
};

export default UsarRedutor;
