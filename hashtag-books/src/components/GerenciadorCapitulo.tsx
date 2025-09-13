import type { Dispatch, RefObject, SetStateAction } from "react";

type GerenciadorCapituloProps = {
  audioSrc: string;
  reference: RefObject<HTMLAudioElement | null>;
  setTempoTotal: Dispatch<SetStateAction<number>>;
  setTempoAtual: Dispatch<SetStateAction<number>>;
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
      onLoadedMetadata={() => setTempoTotal(reference.current?.duration ?? 0)}
      onTimeUpdate={() => setTempoAtual(reference.current?.currentTime ?? 0)}
    ></audio>
  );
};

export default GerenciadorCapitulo;
