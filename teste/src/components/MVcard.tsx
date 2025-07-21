interface Movie {
    title: string;
    overview: string;
    poster_path?: string;
}

const MVcard = ({ title, overview, poster_path }: Movie) => {
    return (
        <div className="card my-2 p-2">
            <h2>{title}</h2>
            <p>{overview}</p>
            {poster_path && (
                <img
                    src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                    alt={title}
                />
            )}
        </div>
    );
};

export default MVcard;
