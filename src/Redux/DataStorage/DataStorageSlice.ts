import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Movie {
    title: string;
  }
  
  interface MoviesState {
    movies: Movie[];
  }
  
  const initialState: MoviesState = {
    movies: [],
  };




export const counterSlice = createSlice({
  name: 'movie_name',
  initialState,
  reducers: {
    
    movietitleByStore: (state, action: PayloadAction<Movie>) => {
    //   state.action += action.payload.action;
    //   state.query+=action.payload.query;
    state.movies.push(action.payload);

   
    

    },
  },
});

export const { movietitleByStore } = counterSlice.actions;

export default counterSlice.reducer;
