import { useSelector } from "react-redux";
import { Film } from "../components/buisness/Film/Film";
import FilmComments from "../components/buisness/FilmComments/FilmComments";
import { SimilarFilmList } from "../components/buisness/SimilarFilmList/SimilarFilmList";

export const FilmPage = () => {
	const film = useSelector(state => state.film.data);

	return (
		<>
			<Film />
			{!!film && <SimilarFilmList id={film.id} genres={film.genres}/>}
			{!!film && <FilmComments filmId={film.id} />}
		</>
	)
};