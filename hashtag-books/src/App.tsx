import { useEffect, useRef, useState } from "react";

import livro from "./assets/audio/livro";
import coverImg from "./assets/bras_cubas.jpeg";

import "bootstrap-icons/font/bootstrap-icons.css";

import Capa from "./components/Capa";
import Controles from "./components/Controles";
import GerenciadorCapitulo from "./components/GerenciadorCapitulo";
import SeletorCapitulos from "./components/SeletorCapitulos";

import "./App.css";

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
    const [capituloAtual, setCapituloAtual] = useState(0);
    const refAudioTag = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (isPlaying) {
            refAudioTag.current?.play();
        }
    }, [capituloAtual]);

    const bookInfos: IBookInfos = {
        nome: "Memórias Póstumas de Brás Cubas",
        autor: "Machado de Assis",
        totalCapitulos: livro.length,
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

    function avancarFaixa() {
        if (capituloAtual === bookInfos.totalCapitulos - 1) {
            setCapituloAtual(0);
        } else {
            setCapituloAtual(capituloAtual + 1);
        }
    }

    function retrocederFaixa() {
        if (capituloAtual === 0) {
            setCapituloAtual(bookInfos.totalCapitulos - 1);
        } else {
            setCapituloAtual(capituloAtual - 1);
        }
    }

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

            <Controles
                isPlaying={isPlaying}
                setPlayPause={setPlayPause}
                retrocederFaixa={retrocederFaixa}
                avancarFaixa={avancarFaixa}
            />
        </>
    );
}

export default App;
