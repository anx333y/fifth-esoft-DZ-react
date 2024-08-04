import { useEffect, useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import Favorite from '@mui/icons-material/Favorite';
import { FavoriteBorder } from '@mui/icons-material';

import { useDispatch, useSelector } from "react-redux";
import { addFavoriteFilm, deleteFavoriteFilm } from "../../../store/favoriteFilmsSlice";

export const SwitchFavorite = ({
	 className,
	 checked,
	 onChange,
	 filmData,
	 ...props
}) => {
	const dispatch = useDispatch();
	const favoriteFilms = useSelector(state => state.favoriteFilms.data);
	
	const [isFilmInFavorite, setIsFilmInFavorite] = useState(() => checkFilmInFavorite());
	const [checkboxChecked, setCheckboxChecked] = useState(isFilmInFavorite);

	const onFavoriteChecked = () => {
		dispatch(addFavoriteFilm(filmData))
	};

	const onFavoriteUnchecked = () => {
		dispatch(deleteFavoriteFilm(filmData.id))
	};

	function checkFilmInFavorite () {
		return favoriteFilms.some(film => film.id === filmData.id)
	}

	const handleChange = (e) => {
		setCheckboxChecked(e.target.checked);
	};

	useEffect(() => {
		setIsFilmInFavorite(checkFilmInFavorite);
	}, [favoriteFilms]);

	useEffect(() => {
		if (checkboxChecked !== isFilmInFavorite) {
			checkboxChecked
			? onFavoriteChecked()
			:	onFavoriteUnchecked();
		}
	}, [checkboxChecked]);

	useEffect(() => {
		setCheckboxChecked(isFilmInFavorite);
	}, [isFilmInFavorite]);

	return (
		<div className={className}>
			<Checkbox 
				{...props}
				size='large'
				icon={
					<FavoriteBorder
						sx={{ color: "primary.light" }}
					/>
				}
				checkedIcon={
					<Favorite 
						sx={{ color: "secondary.main" }}
					/>
				}
				checked={checkboxChecked}
				onChange={e => handleChange(e)}
			/>
		</div>
	)
};