import React, { useContext, useEffect, useMemo, memo } from "react";
import FilmCard from "../FilmCard/FilmCard";
import "./FilmList.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchFilmsData } from "../../../store/filmsSlice";
import { FilteredFilmsContext } from "../../../pages/MainPage";


const FilmList = ({ args, isFiltered = false }) => {
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector(state => state.films) || {};
	const { filteredFilms, setFilteredFilms } = isFiltered ? useContext(FilteredFilmsContext) : [ null, null ];

	const films = (!!filteredFilms && filteredFilms.length) ? filteredFilms : data;

	useEffect(() => {
		if (args || args === '') {
			dispatch(fetchFilmsData(args))
		} else {
			dispatch(fetchFilmsData())
		}
		console.log('filmlist', args)
	}, [args]);

	useEffect(() => {
		if (isFiltered && filteredFilms === null) {
			setFilteredFilms(data)
		}
	}, [data])

	if (error) {
		return (
			<h2>Ошибка загрузки данных!</h2>
		)
	}

	if (loading) {
		return (
			<h2>Загрузка...</h2>
		)
	}

	console.log(films)
	if (!!films && films.length) {
		return (
			<section className="film-list">
				{
					films.map((film) => (
							<FilmCard 
								key={film.id}
								{...film}
							/>
					))
				}
			</section>
		)
	} else {
		return (
			<h2>Фильмов не найдено :(</h2>
		)
	}
};

export default memo(FilmList) ;