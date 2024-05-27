import { FormControl, InputLabel, MenuItem, Select, OutlinedInput } from "@mui/material";

import { useState } from "react";

const menuProps = {
	PaperProps: {
		style: {
			maxHeight: 64 * 4.5 + 8,
		},
}};

export const FilmFilterSelect = ({ data, nameFor, label, mainClassName, className, filterFun }) => {
	const [selectChecked, setSelectCheked] = useState("");

	const handleChangeSelect = (e) => {
		const {
      target: { value },
    } = e;

    setSelectCheked(value);
		filterFun(value);
	};

	return (
		<div className={`${mainClassName}-select ${className}`}>
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
          value={selectChecked}
          onChange={handleChangeSelect}
          input={<OutlinedInput sx={{color: 'primary.light'}} />}
          MenuProps={menuProps}
					sx={{
						color: 'primary.light',
						bgcolor: 'primary.dark',
						textAlign: 'left'
					}}
				>
					<MenuItem value="">
            Нет
          </MenuItem>
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