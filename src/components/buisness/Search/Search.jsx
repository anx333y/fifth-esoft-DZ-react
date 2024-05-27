import "./Search.css";
import { SearchSelect } from "./SearchSelect";
import { SearchInput } from "./SearchInput";
import { SearchButton } from "./SearchButton";

import { genresData } from "../../../api/genresData";
import { countriesData } from "../../../api/countriesData";
import { typeData } from "../../../api/typeData";

export const Search = ({ submitFun, resetFun }) => {

	const onSubmit = (e) => {
		e.preventDefault();
		submitFun();
	};

	const onReset = () => {
		resetFun();
	};

	return (
		<section className="search">
			<form className="search-form" id="search-form" onSubmit={onSubmit} onReset={onReset}>
				<SearchInput />
				<div className="search-buttons">
					<SearchButton type="submit" form="search-form">Найти</SearchButton>
					<SearchButton type="reset" form="search-form">Сбросить</SearchButton>
				</div>
				<div className="search-selects">
					<SearchSelect data={genresData} nameFor="genres" label="Жанры"/>
					<SearchSelect data={countriesData} nameFor="countries" label="Страны"/>
					<SearchSelect data={typeData} nameFor="types" label="Типы"/>
				</div>
			</form>
		</section>
	)
};