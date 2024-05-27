import "./FilmFilter.css";
import { useContext, useEffect, useState } from "react";
import { FilteredFilmsContext } from "../../../pages/MainPage";
import { FilmFilterSelect } from "./FilmFilterSelect";

import { useSelector } from "react-redux";
import { switchTypes } from "../../../api/typeData";


const typeData = [
  {
    "name": "Мульт-сериал",
    "slug": "animated-series"
  },
  {
    "name": "Аниме",
    "slug": "anime"
  },
  {
    "name": "Мультфильм",
    "slug": "cartoon"
  },
  {
    "name": "Фильм",
    "slug": "movie"
  },
  {
    "name": "ТВ-шоу",
    "slug": "tv-series"
  }
];

const sortData = [
  {
    "name": "По убыванию рейтинга",
    "slug": "descending-rating"
  },
  {
    "name": "По возрастанию рейтинга",
    "slug": "ascending-rating"
  },
];


export const FilmFilter = () => {
	const films = useSelector(state => state.films.data);
	const { filteredFilms, setFilteredFilms } = useContext(FilteredFilmsContext);
	const [filterSettings, setFilterSettings] = useState({
		sort: "",
		filter: ""
	});

	useEffect(() => {
		setFilteredFilms(films);
	}, [films]);

	useEffect(() => {
		if (!films) {
			return;
		}

		let tempFilteredFilms = [...films];

		if (filterSettings.filter) {
			tempFilteredFilms = tempFilteredFilms.filter(film => film.type === switchTypes(filterSettings.filter));
		}

		if (filterSettings.sort) {
			switch (filterSettings.sort) {
				case "":
					tempFilteredFilms = films;
					break;
				case "По убыванию рейтинга":
					tempFilteredFilms.sort((a, b) => a.rating.kp < b.rating.kp ? 1 : -1);
					break;
				case "По возрастанию рейтинга":
					tempFilteredFilms.sort((a, b) => a.rating.kp > b.rating.kp ? 1 : -1);
					break;
			}
		}
		
		setFilteredFilms(() => tempFilteredFilms);
	}, [filterSettings])

	const sort = (sortSelect) => {
		setFilterSettings(settings => ({...settings, sort: sortSelect}));
	};

	const filter = (filterSelect) => {
		setFilterSettings(settings => ({...settings, filter: filterSelect}));
	};

	return (
		<div className="film-filter">
			<FilmFilterSelect
				data={sortData}
				nameFor="sort"
				label="Сортировка"
				mainClassName="film-sort"
				className="film-filter-select"
				filterFun={sort}
			/>
			<FilmFilterSelect
				data={typeData}
				nameFor="types"
				label="Фильтр по типу"
				mainClassName="film-types"
				className="film-filter-select"
				filterFun={filter}
			/>
		</div>
	)
};