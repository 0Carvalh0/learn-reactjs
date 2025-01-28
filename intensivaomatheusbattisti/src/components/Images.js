import Img002 from "../assets/img002.jpg";

const Images = () => {
  return (
    <div>
      <img src="/img001.jpg" alt="Imagem em /public" />
      <img src={Img002} />
    </div>
  )
}

export default Images;