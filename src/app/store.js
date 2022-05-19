import {configureStore} from '@reduxjs/toolkit'
import MoviesReducer from '../feature/movies.slice'

export default configureStore({
    reducer: {
        movies: MoviesReducer
    }
})