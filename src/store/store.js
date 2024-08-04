import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./filmsSlice";
import filmSlice from "./filmSlice";
import favoriteFilmsSlice from "./favoriteFilmsSlice";
import commentsSlice from "./commentsSlice";
import searchParamsSlice from "./searchParamsSlice";
import similarFilmsSlice from "./similarFilmsSlice";

const store = configureStore({
	reducer: {
		films: filmsSlice,
		film: filmSlice,
		favoriteFilms: favoriteFilmsSlice,
		comments: commentsSlice,
		searchParams: searchParamsSlice,
		similarFilms: similarFilmsSlice
	}
});

export default store;