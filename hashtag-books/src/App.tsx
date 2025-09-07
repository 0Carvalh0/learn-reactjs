import { useState } from "react";

import coverImg from "./assets/bras_cubas.jpeg";

import "bootstrap-icons/font/bootstrap-icons.css";

import Capa from "./components/Capa";
import SeletorCapitulos from "./components/SeletorCapitulos";
import Controles from "./components/Controles";

import "./App.css";

interface IBookInfos {
    nome: string;
    autor: string;
    totalCapitulos: number;
    capa: string;
    textoAlternativo: string;
}

function App() {
    const [isPlaying, setIsPlaying] = useState(false);

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

            <SeletorCapitulos capituloId={1} />

            <Controles isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </>
    );
}

export default App;
