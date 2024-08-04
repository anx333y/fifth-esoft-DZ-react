import "./FavoriteFilms.css";
import { useState } from "react";
import { deleteFavoriteFilm } from "../../../store/favoriteFilmsSlice";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { IconButton } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import { Clear } from "@mui/icons-material";

export const FavoriteFilms = () => {
	const dispatch = useDispatch();
	const { data: favoriteFilms } = useSelector(state => state.favoriteFilms);

	const [menuActive, setMenuActive] = useState(false);

	const onDeleteClick = (id) => {
		dispatch(deleteFavoriteFilm(id));
	};

	const onClickSwitchButton = () => {
		setMenuActive(active => !active);
	};


	return (
		<section className={
			menuActive
			? "favorite-films active"
			: "favorite-films"
		}>
			<IconButton 
				className="switch-menu-button"
				onClick={onClickSwitchButton}
			>
				<Favorite
					fontSize="large"
					sx={
						menuActive
						? {color: 'secondary.main' }
						 : { color: 'primary.light' }
				}/>
			</IconButton>
			<h2 className="favorite-films-title">Любимые фильмы</h2>
			<div className="favorite-films-list">
				{ favoriteFilms.length
					? favoriteFilms.map((film) => (
						<div
							className="favorite-films-list__item"
							key={film.id}
						>
							<Link 
								className="favorite-films-link link"
								to={`/film/${film.id}`}
							>
								{film.name}
							</Link>
							<IconButton 
								onClick={() => onDeleteClick(film.id)}
							>
								<Clear sx={{color: 'primary.light'}}/>
							</IconButton>
						</div>
					))
					: (<h5>Избранных фильмов нет</h5>)
				}
			</div>
		</section>
	)
};