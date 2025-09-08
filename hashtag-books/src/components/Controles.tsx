type ControlesProps = {
    isPlaying: boolean;
    setPlayPause: () => void;
};

const Controles = ({ isPlaying, setPlayPause }: ControlesProps) => {
    return (
        <div className="caixa-botoes">
            <button>
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
            <button>
                <i className="bi bi-skip-end"></i>
            </button>
        </div>
    );
};

export default Controles;
