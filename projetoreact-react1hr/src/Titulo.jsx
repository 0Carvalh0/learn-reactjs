function Titulo({ nome, paragrafo, cor }) {
  return (
    <div>
      <h1 style={{color: cor}}>Oi eu sou {nome ? nome : "Fulano"}</h1>
      {paragrafo ? <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid esse id dolorem deleniti molestiae libero maiores. Delectus magni totam similique pariatur reiciendis, hic natus dolor, quas ipsa exercitationem alias consectetur.</p> : <p></p>}
    </div>
  );
}

export default Titulo;
