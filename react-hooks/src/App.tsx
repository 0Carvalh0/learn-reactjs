import "./App.css";
import UsarEfeito from "./Hooks/UsarEfeito";
import UsarEstado from "./Hooks/UsarEstado";
import UsarRef from "./Hooks/UsarRef";

function App() {
    return (
        <>
            <UsarEstado />
            <UsarEfeito />
            <UsarRef />
        </>
    );
}

export default App;
