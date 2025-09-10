type GerenciadorCapituloProps = {
    audioSrc: string;
    reference: React.RefObject<HTMLAudioElement | null>;
    setTempoTotal: Dispatch<SetStateAction<string>>;
    setTempoAtual: Dispatch<SetStateAction<string>>;
};

const GerenciadorCapitulo = ({
    audioSrc,
    reference,
    setTempoTotal,
    setTempoAtual,
}: GerenciadorCapituloProps) => {
    return (
        <audio
            src={audioSrc}
            ref={reference}
            onLoadedMetadata={() =>
                setTempoTotal(reference.current?.duration || 0)
            }
            onTimeUpdate={() => setTempoAtual(reference.current?.currentTime)}
        ></audio>
    );
};

export default GerenciadorCapitulo;
