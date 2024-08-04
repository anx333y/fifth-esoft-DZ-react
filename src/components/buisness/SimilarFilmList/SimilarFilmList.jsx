import { useDispatch, useSelector } from "react-redux";
import "./SimilarFilmList.css";
import { fetchSimilarFilmsData } from "../../../store/similarFilmsSlice";
import { useLayoutEffect } from "react";
import FilmCard from "../FilmCard/FilmCard";

export const SimilarFilmList = ({id, genres}) => {
	const dispatch = useDispatch();
	const { data: films, loading, error } = useSelector(state => state.similarFilms);

	useLayoutEffect(() => {
		dispatch(fetchSimilarFilmsData({id, genres}))
	}, [id]);


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
			<>
				<h2 className="similar-film-list__title">Похожие фильмы:</h2>
				<section className="similar-film-list">
					{
						films.map((film) => (
								<FilmCard
									key={film.id}
									className="similar-film-list__item"
									{...film}
								/>
						))
					}
				</section>
			</>
		)
	} else {
		return (
			<h2>Похожих фильмов не найдено :(</h2>
		)
	}
};