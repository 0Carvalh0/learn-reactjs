type ControlesProps = {
    isPlaying: boolean;
    setPlayPause: () => void;
    retrocederFaixa: () => void;
    avancarFaixa: () => void;
};

const Controles = ({ isPlaying, setPlayPause, retrocederFaixa, avancarFaixa }: ControlesProps) => {
    return (
        <div className="caixa-botoes">
            <button onClick={retrocederFaixa}>
                <i className="bi bi-skip-start"></i>
            </button>
            <button>
                <i className="bi bi-arrow-counterclockwise"></i>
            </button>
            <button onClick={setPlayPause}>
                <i
                    className={`bi bi-${
                        isPlaying ? "pause" : "play"
                    }-circle-fill`}
                ></i>
            </button>
            <button>
                <i className="bi bi-arrow-clockwise"></i>
            </button>
            <button onClick={avancarFaixa}>
                <i className="bi bi-skip-end"></i>
            </button>
        </div>
    );
};

export default Controles;
