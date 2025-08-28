import coverImg from "./assets/bras_cubas.jpeg";

import Capa from "./components/Capa";

import "./App.css";

interface IBookInfos {
    nome: string;
    autor: string;
    totalCapitulos: number;
    capa: string;
    textoAlternativo: string;
}

function App() {
    const bookInfos: IBookInfos = {
        nome: "Memórias Póstumas de Brás Cubas",
        autor: "Machado de Assis",
        totalCapitulos: 2,
        capa: coverImg,
        textoAlternativo: "Capa do livro Memórias Póstumas de Brás Cubas.",
    };

    return (
        <>
            <Capa
                coverImg={bookInfos.capa}
                altText={bookInfos.textoAlternativo}
            />
        </>
    );
}

export default App;
