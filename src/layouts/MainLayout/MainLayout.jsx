import { Outlet } from "react-router-dom";
import { Header } from "../../components/buisness/Header/Header";
import { FavoriteFilms } from "../../components/buisness/FavoriteFilms/FavoriteFilms";

export const MainLayout = () => {

	return (
		<>
			<Header />
			<FavoriteFilms />
			<Outlet />
		</>
	)
}