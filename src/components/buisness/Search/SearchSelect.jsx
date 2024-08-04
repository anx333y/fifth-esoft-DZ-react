import { FormControl, InputLabel, MenuItem, Select, OutlinedInput } from "@mui/material";

import { useEffect, useState } from "react";
import { SearchSelectChipList } from "./SearchSelectChipList";
import { pushSearchParamFromSelects, switchParamName } from "../../../store/searchParamsSlice";
import { useDispatch, useSelector } from "react-redux";
import { switchTypes } from "../../../api/typeData";

const menuProps = {
	PaperProps: {
		style: {
			maxHeight: 64 * 4.5 + 8,
		},
}};

export const SearchSelect = ({ data, nameFor, label }) => {
	const dispatch = useDispatch();
	const thisParams = useSelector(state => state.searchParams.params[switchParamName(nameFor)]);

	const [selectChecked, setSelectCheked] = useState([]);

	useEffect(() => {
		if (!!thisParams && Array.isArray(thisParams)) {
			if (thisParams.length && selectChecked.length === 0) {
				setSelectCheked(
					thisParams.map(param =>
						nameFor === 'types' ? switchTypes(param) : param
				));
			} else if (thisParams.length === 0 && selectChecked.length !== 0) {
				setSelectCheked([]);
			}
		}
	}, [thisParams]);

	useEffect(() => {
		const newParams = {
			"name": nameFor,
			"params": selectChecked,
		};

		dispatch(pushSearchParamFromSelects(newParams));
	}, [selectChecked])

	const handleChangeSelect = (e) => {
		const {
      target: { value },
    } = e;

    setSelectCheked(
      typeof value === 'string' ? value.split(',') : value,
    );
	};

	return (
		<div className="search-select">
			<FormControl
				sx={{
					width: 1,
					color: 'primary.light' 
				}}
			>
				<InputLabel
					id={`${nameFor}-label`}
					sx={{
						color: 'primary.light',
						'&.Mui-focused': {color: 'primary.light'}
					}}
				>
					{label}
				</InputLabel>
				<Select
					labelId={`${nameFor}-label`}
					id={`${nameFor}-select`}
          multiple
          value={selectChecked}
          onChange={handleChangeSelect}
          input={<OutlinedInput sx={{color: 'primary.light'}} />}
          renderValue={(selected) => (
						<SearchSelectChipList selected={selected} />
					)}
          MenuProps={menuProps}
					sx={{
						color: 'primary.light',
						bgcolor: 'primary.dark'
					}}
				>
					{data.map(item => (
						<MenuItem
							key={item.slug}
							value={item.name}
							sx={{
								fontWeight:
									selectChecked.indexOf(item.name) === -1 
									? 'regular'
									: 'medium', color: 'primary.dark'
							}}
						>
							{item.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	)
};