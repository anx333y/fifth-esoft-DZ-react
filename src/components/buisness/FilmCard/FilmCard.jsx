import "./FilmCard.css"
import { SwitchFavorite } from "../SwitchFavorite/SwitchFavorite"
import { FilmRating } from "../FilmRating/FilmRating";

import { Link } from "react-router-dom";

import { memo, useRef, useState } from "react";
import { useLayoutEffect } from "react";
import { fetchPoster } from "../../../api/apiConnection";
import { formatFilmData } from "../../../api/filmData";


const FilmCard = ({className = '', ...props}) => {
	const [filmData, setFilmData] = useState(null);

	const posterRef = useRef();

	useLayoutEffect(() => {
		const posterUrl = props.poster 
			? props.poster.previewUrl 
				? props.poster.previewUrl
				: props.poster.url
			: null;

		if (posterUrl) {
			fetchPoster(posterUrl)
			.then(response => {
				if (response && response.status === 200) {
					posterRef.current.src = posterUrl;
				}
			});
		}
		setFilmData(() => formatFilmData(props));
	}, [])

if (filmData) {
	return (
		<div className={['film-card', ...className.split()].join(' ')}>
			<SwitchFavorite 
				className="switch-favorite"
				filmData={{name: filmData.name, id: filmData.id}}
			/>
			<Link to={"/film/" + filmData.id}>
				<img
					ref={posterRef}
					src="/defaultImages/noPoster.svg"
					alt={filmData.name}
					className="film-card__image"
					/>
			</Link>
			<div className="film-card__info">
				<h3 className="film-card__title">
					{filmData.name}
				</h3>
				<span className="film-card__year">
					{filmData.year}
				</span>
				<span className="film-card__some-info">
					{[filmData.type, filmData.countries && filmData.countries[0], props.isSeries ? filmData.seriesLength : filmData.movieLength].join(", ")}
				</span>
				<p className="film-card__description">
					{filmData.shortDescription}
				</p>
				<span className="film-card__genres">
					{filmData.genres && `Жанр: ${filmData.genres.join(", ")}`}
				</span>
				<FilmRating
					id={filmData.id}
					rating={filmData.rating.kp}
					className="film-card__rating"
				/>
			</div>
		</div>
	)
}};

export default memo(FilmCard);