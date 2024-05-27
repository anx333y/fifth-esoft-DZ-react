import { parseActors, parseNames } from "./apiConnection";
import { switchTypes } from "./typeData";

export const formatFilmData = (filmData) => {
	let newData = {
		...filmData,
		"id": filmData.id,
		"name": filmData.name 
			? filmData.name
			: filmData.alternativeName 
				? filmData.alternativeName
				: "Безымянный",
		"type": filmData.type
			? switchTypes(filmData.type)
			: "Что-то неизведанное...",
		"year": filmData.year 
			? filmData.year
			: '',
		"description": filmData.description
			? filmData.description
			: "Нема дескрипшна(",
		"shortDescription": filmData.shortDescription,
		"rating": {
				"kp": filmData.rating.kp 
					? filmData.rating.kp 
					: 0,
		},
		"movieLength": filmData.movieLength 
			? `${filmData.movieLength} мин.`
			: '',
		"seriesLength": filmData.seriesLength 
			? `${filmData.seriesLength} мин.`
			: '',
		"poster": filmData.poster,
		"genres": (filmData.genres && filmData.genres.length) 
			? parseNames(filmData.genres) 
			: null,
		"countries": (filmData.countries && filmData.countries.length)
			? parseNames(filmData.countries)
			: null,
		"persons": (filmData.persons && parseActors(filmData.persons))
			? parseActors(filmData.persons)
			: null,
	};

	newData.shortDescription = newData.shortDescription ? newData.shortDescription : newData.description;

	return newData;


};