import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushQuery } from "../../../store/searchParamsSlice";

export const SearchInput = () => {
	const dispatch = useDispatch();
	const stateValue = useSelector(state => state.searchParams.query);
	const [value, setValue] = useState('');

	useEffect(() => {
		if (!!stateValue && Array.isArray(stateValue)) {
			setValue(stateValue[0] ? stateValue[0] : '');
		}
		console.log(stateValue)
	}, [stateValue]);

	const handleOnChange = (e) => {
		setValue(e.target.value);
	};

	const handleOnBlur = (e) => {
		if (value !== '' || value !== stateValue[0]) {
			dispatch(pushQuery(value));
		}
		console.log('blur')
	};

	return (
		<div className="search-input">
			<TextField
				fullWidth
				placeholder="Найти..."
				size="small"
				sx={{
					backgroundColor: 'primary.dark', 
					borderRadius: 1,
					"& input": {color: 'primary.light'}
				}} 
				variant="outlined"
				value={value}
				onChange={handleOnChange}
				onBlur={handleOnBlur}
			/>
		</div>
	)
};