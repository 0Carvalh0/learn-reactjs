import "./App.css";
import UsarEfeito from "./Hooks/UsarEfeito";
import UsarEstado from "./Hooks/UsarEstado";
import UsarRef from "./Hooks/UsarRef";
import UsarRedutor from "./Hooks/UsarRedutor";
import UsarRedutorB from "./Hooks/UsarRedutorB";

function App() {
    return (
        <>
            <UsarEstado />
            <UsarEfeito />
            <UsarRef />
            <UsarRedutor />
            <UsarRedutorB />
        </>
    );
}

export default App;
