type GerenciadorCapituloProps = {
    audioSrc: string;
    reference: React.RefObject<HTMLAudioElement | null>;
};

const GerenciadorCapitulo = ({
    audioSrc,
    reference,
}: GerenciadorCapituloProps) => {
    return <audio src={audioSrc} ref={reference}></audio>;
};

export default GerenciadorCapitulo;
