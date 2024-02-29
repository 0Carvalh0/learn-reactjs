import Image from "next/image";
import styles from "./page.module.css";
import MeuComponente from "./components/MeuComponente";
import Subtitulo from "./components/Subtitulo";
import Paragrafo from "./components/Paragrafo";
import Lista from "./components/Lista";

export default function Home() {
  return (
    <main className={styles.main}>
      <MeuComponente />
      <Subtitulo />
      <Paragrafo />
      <Lista />
    </main>
  );
}
