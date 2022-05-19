import { createSlice } from "@reduxjs/toolkit";

//merging action and reducer
export const MoviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
    },
    reducers:{
        setMoviesData: (state, {payload}) => {
            state.movies = payload
        },
        addMovie: (state, {payload}) => {
            //classic to toolkit, redux saga =>  state.movies=[...state.movies, payload]
            state.movies.push(payload)
        },
        likeMovie: (state, {payload}) => {
            state.movies = state.movies.map(movie => {
                if(movie.id === payload.id){
                    return ({
                            ...movie, 
                            likeEnum: payload.likeEnum,
                             likes: payload.likeEnum === 'like' && movie.likeEnum !== 'like' ? movie.likes + 1 : payload.likeEnum !== 'like' && movie.likeEnum === 'like' ? movie.likes - 1 : state.movies.likes,
                             dislikes: payload.likeEnum === 'dislike' && movie.likeEnum !== 'dislike' ? movie.dislikes + 1 : payload.likeEnum !== 'dislike' && movie.likeEnum === 'dislike' ? movie.dislikes - 1 : movie.dislikes,
                        })
                }else {
                    return movie
                }
            })
        },
        deleteMovies: (state, {payload}) => {
            state.movies = state.movies.filter(movie => movie.id !== payload)
        },

    }
}) 

//the action and the reducer in the same place
export const {setMoviesData, addMovie, deleteMovies, likeMovie} =  MoviesSlice.actions
export default MoviesSlice.reducer
