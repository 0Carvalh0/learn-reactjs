import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <div className="movie-details">
            <h1>{movie.title}</h1>
            <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
            />
            <p>
                <strong>Lançamento:</strong> {movie.release_date}
            </p>
            <p>
                <strong>Duração:</strong> {movie.runtime} min
            </p>
            <p>
                <strong>Nota:</strong> {movie.vote_average.toFixed(1)}
            </p>
            <p>
                <strong>Gêneros:</strong>{" "}
                {movie.genres.map((g) => g.name).join(", ")}
            </p>
            <p>
                <strong>Descrição:</strong> {movie.overview}
            </p>
        </div>
    );
};

export default More;
