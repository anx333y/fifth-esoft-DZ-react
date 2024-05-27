import { createSlice } from "@reduxjs/toolkit";

const favoriteFilmsSlice = createSlice({
	name: 'favoriteFilms',
	initialState: {
		data: [],
	},
	reducers: {
		addFavoriteFilm: (state, action) => {
			state.data.push(action.payload);
		},
		deleteFavoriteFilm: (state, action) => {
			state.data = state.data.filter(film => film.id !== action.payload);
		}
	}
});

export const {
	addFavoriteFilm,
	deleteFavoriteFilm,
} = favoriteFilmsSlice.actions;

export default favoriteFilmsSlice.reducer;