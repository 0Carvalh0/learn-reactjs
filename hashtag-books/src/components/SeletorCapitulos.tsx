type SeletorCapitulosProps = {
    capituloId: number;
};

const SeletorCapitulos = ({ capituloId }: SeletorCapitulosProps) => {
    return (
        <button className="seletor">
            <i className="bi bi-list-ul"></i>
            <p>Capítulo {capituloId}</p>
        </button>
    );
};

export default SeletorCapitulos;
