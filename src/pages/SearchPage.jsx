import { useEffect } from "react";
import { Search } from "../components/buisness/Search/Search";
import FilmList from "../components/buisness/FilmList/FilmList";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { pushQuery, pushSearchParamFromURL, resetState } from "../store/searchParamsSlice";

const SearchPage = () => {
	const dispatch = useDispatch();
	const params = useSelector(state => state.searchParams.params);
	const query = useSelector(state => state.searchParams.query);

	const location = useLocation();
	const [search, setSearch] = useSearchParams();

	const refreshArgs = () => {
		if (!!query && Array.isArray(query) && query.length) {
			setSearch({query: query});
			dispatch(resetState({
				isParams: true,
				isQuery: false,
			}));
		} else {
			setSearch(params);
		}
	};

	const resetArgs = () => {
		dispatch(resetState({
			isParams: true,
			isQuery: true,
		}))
	};

	console.log(query);

	useEffect(() => {
		if (search.keys()) {
			let nowSearchParams = {};
			for (let key of search.keys()) {
				if (key !== 'query') {
					nowSearchParams[key] = search.getAll(key);
				} else {
					dispatch(pushQuery(search.get('query')))
				}
			}
			dispatch(pushSearchParamFromURL(nowSearchParams));
		}
		setSearch(params);
	}, [])

	useEffect(() => {
		console.log(query)
	}, [query])

	return (
		<>
			<h2>Страница поиска</h2>
			<Search submitFun={refreshArgs} resetFun={resetArgs} />
			<FilmList args={location.search.toString().slice(1)} />
		</>
	)
};

export default SearchPage;