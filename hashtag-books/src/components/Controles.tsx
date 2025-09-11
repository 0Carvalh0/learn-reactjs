type ControlesProps = {
  isPlaying: boolean;
  setPlayPause: () => void;
  retrocederFaixa: () => void;
  avancarFaixa: () => void;
  avancar15s: () => void;
  retroceder15s: () => void;
};

const Controles = ({
  isPlaying,
  setPlayPause,
  retrocederFaixa,
  avancarFaixa,
  avancar15s,
  retroceder15s,
}: ControlesProps) => {
  return (
    <div className="caixa-botoes">
      <button onClick={retrocederFaixa}>
        <i className="bi bi-skip-start"></i>
      </button>
      <button onClick={retroceder15s}>
        <i className="bi bi-arrow-counterclockwise"></i>
      </button>
      <button onClick={setPlayPause}>
        <i className={`bi bi-${isPlaying ? "pause" : "play"}-circle-fill`}></i>
      </button>
      <button onClick={avancar15s}>
        <i className="bi bi-arrow-clockwise"></i>
      </button>
      <button onClick={avancarFaixa}>
        <i className="bi bi-skip-end"></i>
      </button>
    </div>
  );
};

export default Controles;
