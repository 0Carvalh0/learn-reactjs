import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./MVcard.css";

interface Movie {
    id: number;
    poster_path?: string;
    title: string;
    release_date: string;
    vote_average: number;
}

const MVcard = ({ id, poster_path, title, release_date, vote_average }: Movie) => {
    return (
        <div className="mv__card">
            {poster_path && (
                <Link to={`/more/${id}`}>
                    <img
                        className="mv__img"
                        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                        alt={title}
                    />
                </Link>
            )}
            <h2 className="mv__title">{title}</h2>
            <div className="mv__description">
                <p className="mv__text">{release_date.split("-")[0]}</p>
                <div className="mv__vote-average">
                    <IconContext.Provider value={{ color: "yellow" }}>
                        <FaStar />
                    </IconContext.Provider>
                    <p className="mv__text">{vote_average.toFixed(1)}</p>
                </div>
            </div>
        </div>
    );
};

export default MVcard;
