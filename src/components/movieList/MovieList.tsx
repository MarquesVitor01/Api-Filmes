'use client';

import { useEffect, useState } from 'react'
import './MovieList.scss';
import axios from 'axios';
import { MovieCard } from '../movieCard/movieCard';
import { Movie } from '@/types/movie';
import ReactLoading from 'react-loading';


export const MovieList = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        await axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'd46884d42ad6c8dd271cf37e9342350b',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results);
        }). catch(error => {
            console.error('Ocorreu um erro:', error.message )
        })

        setIsLoading(false);
    }

    if (isLoading) {
        return (
            <div className='loading-container'>
                <ReactLoading type="spin" color="#6046ff" height={'5%'} width={'5%'} />
            </div>
        )
    }

    return (
        <div className="movie-list">
            {movies.map((movie) =>
                <MovieCard 
                    key={movie.id}
                    movie={movie}    
                />
            )}
        </div>
    )
}