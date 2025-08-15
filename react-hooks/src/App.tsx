import "./App.css";
import UsarEfeito from "./Hooks/UsarEfeito";
import UsarEstado from "./Hooks/UsarEstado";
import UsarRef from "./Hooks/UsarRef";
import UsarRedutor from "./Hooks/UsarRedutor";

function App() {
    return (
        <>
            <UsarEstado />
            <UsarEfeito />
            <UsarRef />
            <UsarRedutor />
        </>
    );
}

export default App;
