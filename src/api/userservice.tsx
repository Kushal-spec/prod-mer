import React, { useEffect, useState } from 'react';
import MovieDetails from '../Pages/MovieDetails';

const Userservice: React.FC = () => {
  const [movieTitle, setMovieTitle] = useState<string>('');

  useEffect( () => {
    // Get latest movie title from storage
    chrome.storage.local.get(['latestMovie'], (result) => {
      console.log('Storage fetch result:', result);
      if (result.latestMovie) {
        setMovieTitle(result.latestMovie);
        console.log('State updated with:', result.latestMovie);
      }
    });

    // Listen for storage changes
    chrome.storage.onChanged.addListener((changes, areaName) => {
      if (areaName === 'local' && changes.latestMovie?.newValue) {
        console.log('Storage changed:', changes.latestMovie.newValue);
        setMovieTitle(changes.latestMovie.newValue);
        console.log('State updated with:', changes.latestMovie.newValue);
      }
    });







  }, []);

  return (
    <div className="App">
     <MovieDetails movie_state={movieTitle}/>
    </div>
  );
};

export default Userservice;
