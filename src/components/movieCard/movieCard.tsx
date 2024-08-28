import { useState } from 'react';
import { Movie } from "@/types/movie";
import { StarRating } from "../startRating/StarRating";
import './movieCard.scss';

export interface Props {
    movie: Movie;
}

export const MovieCard = (props: Props) => {
    const movie = props.movie;
    const [showDetails, setShowDetails] = useState(false);

    const handleShowDetails = () => {
        setShowDetails(true);
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
    };

    return (
        <div>
            <li className='movie-card'>
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className="movie-infos">
                    <p>{movie.title}</p>
                    <StarRating rating={parseFloat(movie.vote_average)} />
                    <div className="hidden-content">
                        {movie.overview && (
                            <p className="description">
                                {movie.overview.length > 100
                                    ? `${movie.overview.substring(0, 100)}...`
                                    : movie.overview}
                            </p>
                        )}
                        <button className="btn-dafault" onClick={handleShowDetails}>
                            Ver Mais
                        </button>
                    </div>
                </div>
                <p>{movie.vote_average}</p>
            </li>

            {showDetails && (
                <div className="movie-details-overlay active" onClick={handleCloseDetails}>
                    <div className="movie-details" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={handleCloseDetails}>X</button>
                        <h2>{movie.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                        <p>{movie.overview}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
