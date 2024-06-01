import "./Film.css";
import { FilmRating } from "../FilmRating/FilmRating";
import { SwitchFavorite } from "../SwitchFavorite/SwitchFavorite";
import { useEffect, useLayoutEffect, useRef } from "react";

import { useParams} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { fetchFilmData } from "../../../store/filmSlice";
import { fetchPoster } from "../../../api/apiConnection";


export const Film = () => {
	const routeParams = useParams();
	let filmId = parseInt(routeParams.filmId);

	const dispatch = useDispatch();
	const { data: film, loading, error } = useSelector(state => state.film);

	const posterRef = useRef();

	useEffect(() => {
		console.log(film)
		if (film) {
			const posterUrl = film.poster
				? film.poster.previewUrl
					? film.poster.previewUrl
					: film.poster.url
				: null;

			if (posterUrl) {
				fetchPoster(posterUrl)
				.then(response => {
					if (response && response.status === 200) {
						posterRef.current.src = posterUrl;
					}
				});
			}
		}
	}, [film])

	useEffect(() => {
		let filmId = parseInt(routeParams.filmId);
	}, [routeParams])

	useEffect(() => {
		dispatch(fetchFilmData(filmId));
	}, [filmId]);


	if (error) {
		return (
			<h2 className="error">Произошла ошибка загрузки.</h2>
		)
	}

	if (loading) {
		return (
			<h2 className="loading">Loading...</h2>
		)
	}

	if (film) {
		return (
			<>
				<section className="film-page">
							<img
								ref={posterRef}
								src="/defaultImages/noPoster.svg"
								alt={film.name}
								className="film-page__image"
							/>
							<div className="film-page__main-block">
								<div className="film-page__main-block__title-block">
									<h2 className="film-page__film-title">
										{film.name}
									</h2>
									<div className="film-page__main-block__title-block__right">
										<div className="film-page__film-rating-block">
											<span className="film-page__film-rating-block__count">
												{film.rating.kp.toFixed(2)}
											</span>
											<FilmRating
												id={filmId}
												rating={film.rating.kp}
												className="film-page__film-rating__rating"
											/>
										</div>
										<SwitchFavorite 
											className="switch-favorite"
											filmData={{
												name: film.name,
												id: film.id
											}}
										/>
									</div>
								</div>
								<div className="film-page__film-info">
									<h3 className="film-page__film-info__title">О фильме</h3>
									<span className="film-page__film-info__some-info">
										{[film.type, film.countries && film.countries.join(", "), film.isSeries ? film.seriesLength : film.movieLength].join(", ")}
									</span>
									<p className="film-page__film-info__description">
										{film.description}
									</p>
									<span className="film-page__film-info__genres">
										{`Жанр: ${film.genres.join(", ")}`}
									</span>
									<span className="film-page__film-info__actors">
										{film.persons && `В главных ролях: ${film.persons.join(", ")}`}
									</span>
								</div>
							</div>
				</section>
			</>
		)
	} else {
		return (<h2 className="no-film">Фильм не найден.</h2>)
	}
};