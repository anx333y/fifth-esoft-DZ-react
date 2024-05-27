import { createContext, useState } from "react";
import { FilmFilter } from "../components/buisness/FilmFilter/FilmFilter";
import FilmList from "../components/buisness/FilmList/FilmList";

export const FilteredFilmsContext = createContext();

export const MainPage = () => {
	const [filteredFilms, setFilteredFilms] = useState(null);

	return (
		<FilteredFilmsContext.Provider value={{ filteredFilms, setFilteredFilms }}>
			<FilmFilter />
			<FilmList isFiltered={true}/>
		</FilteredFilmsContext.Provider>
	)
};