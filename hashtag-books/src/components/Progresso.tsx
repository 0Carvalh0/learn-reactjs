interface ProgressoProps {
    tempoTotal: number;
    tempoAtual: number;
}

const Progresso = ({ tempoTotal, tempoAtual }: ProgressoProps) => {
    const formatarTempo = (segundos: number) => {
        if (!segundos || isNaN(segundos)) return "00:00";

        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = Math.floor(segundos % 60);
        return `${minutos.toString().padStart(2, "0")}:${segundosRestantes
            .toString()
            .padStart(2, "0")}`;
    };

    return (
        <section className="container-progresso">
            <div className="progresso-total">
                <div className="progresso-atual" style={{
                    width: `${(tempoAtual * 100) / tempoTotal}%`
                }}></div>
                <div className="marcador-posicao" style={{
                    left: `${(tempoAtual * 100) / tempoTotal}%`
                }}></div>
            </div>
            <div className="metricas-tempo">
                <p>{formatarTempo(tempoAtual)}</p>
                <p>{formatarTempo(tempoTotal)}</p>
            </div>
        </section>
    );
};

export default Progresso;
