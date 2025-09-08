import { useRef, useState } from "react";

import livro from "./assets/audio/livro";
import coverImg from "./assets/bras_cubas.jpeg";
import livro from "./assets/audio/livro";

import "bootstrap-icons/font/bootstrap-icons.css";

import Capa from "./components/Capa";
import Controles from "./components/Controles";
import SeletorCapitulos from "./components/SeletorCapitulos";

import "./App.css";
import GerenciadorCapitulo from "./components/GerenciadorCapitulo";

interface IBookInfos {
    nome: string;
    autor: string;
    totalCapitulos: number;
    capitulos: string[];
    capa: string;
    textoAlternativo: string;
}

function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [capituloAtual] = useState(0);
    const refAudioTag = useRef<HTMLAudioElement | null>(null);

    const bookInfos: IBookInfos = {
        nome: "Memórias Póstumas de Brás Cubas",
        autor: "Machado de Assis",
        totalCapitulos: 2,
        capitulos: livro,
        capa: coverImg,
        textoAlternativo: "Capa do livro Memórias Póstumas de Brás Cubas.",
    };

    const setPlayPause = () => {
        const isCurrentlyPlaying = !isPlaying;
        setIsPlaying(isCurrentlyPlaying);

        if (isCurrentlyPlaying) {
            refAudioTag.current?.play();
        } else {
            refAudioTag.current?.pause();
        }
    };

    return (
        <>
            <Capa
                coverImg={bookInfos.capa}
                altText={bookInfos.textoAlternativo}
            />

            <SeletorCapitulos capituloId={capituloAtual + 1} />

            <GerenciadorCapitulo
                audioSrc={bookInfos.capitulos[capituloAtual]}
                reference={refAudioTag}
            />

            <Controles isPlaying={isPlaying} setPlayPause={setPlayPause} />
        </>
    );
}

export default App;
