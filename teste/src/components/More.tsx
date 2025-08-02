import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

import "./More.css";

const readToken = import.meta.env.VITE_READ_TOKEN;
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${readToken}`,
    },
};

interface MovieDetails {
    title: string;
    overview: string;
    poster_path?: string;
    release_date: string;
    vote_average: number;
    genres: { id: number; name: string }[];
    runtime: number;
}

const More = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState<MovieDetails | null>(null);

    useEffect(() => {
        if (!id) return;

        fetch(
            `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
            options
        )
            .then((res) => res.json())
            .then((data) => setMovie(data))
            .catch((err) => console.error("Erro ao buscar detalhes:", err));
    }, [id]);

    if (!movie) return <p>Carregando detalhes do filme...</p>;

    return (
        <>
            <button className="button__back" onClick={() => navigate("/")}>
                <FaHome />
            </button>
            <div className="mv__details">
                <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    className="details__img"
                />
                <div>
                    <h1 className="details__title">{movie.title}</h1>
                    <p className="details__release-date">
                        <strong>Lançamento:</strong> {movie.release_date}
                    </p>
                    <p className="details__runtime">
                        <strong>Duração:</strong> {movie.runtime} min
                    </p>
                    <p className="details__vote-average">
                        <strong>Nota:</strong> {movie.vote_average.toFixed(1)}
                    </p>
                    <p className="details__genres">
                        <strong>Gêneros:</strong>{" "}
                        {movie.genres.map((g) => g.name).join(", ")}
                    </p>
                    <p className="details__overview">
                        <strong>Descrição:</strong> {movie.overview}
                    </p>
                </div>
            </div>
        </>
    );
};

export default More;
