import { Search } from "@mui/icons-material"
import { IconButton, TextField } from "@mui/material"
import { Link } from "react-router-dom"
import "./Header.css";
import { HeaderSearch } from "./HeaderSearch";

export const Header = () => {

	return (
		<header>
			<h1 className="main-title">Каталог фильмов</h1>
			<nav>
				<Link to="/" className="nav-link link">Главная</Link>
				<Link to="/search" className="nav-link link">Поиск</Link>
				<HeaderSearch />
			</nav>
		</header>
	)
}