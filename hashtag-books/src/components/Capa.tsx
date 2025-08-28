interface ICapaProps {
    coverImg: string;
    altText: string;
}

const Capa = ({ coverImg, altText }: ICapaProps) => {
    return <img className="capa" src={coverImg} alt={altText} />;
};

export default Capa;
