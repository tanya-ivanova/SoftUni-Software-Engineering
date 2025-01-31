import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
//import {movies as movieData} from './movies';

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/movies.json')
            .then(res => res.json())
            .then(moviesData => {
                setMovies(moviesData);
            });
    }, []);

    const onMovieDelete = (id) => {
        setMovies(state => state.filter(x => x.id !== id));
    };

    const onMovieSelect = (id) => {
        setMovies(state => state.map(x => ({...x, selected: x.id === id})));
    };

    return (
        <div>
            <h1>Movie collection</h1>

            <MovieList 
                movies={movies} 
                onMovieDelete={onMovieDelete}
                onMovieSelect={onMovieSelect} 
            />
        </div>
    );
}

export default App;
