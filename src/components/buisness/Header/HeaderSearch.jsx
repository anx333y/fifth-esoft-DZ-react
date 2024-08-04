import { useRef } from "react";

import { TextField, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

export const HeaderSearch = () => {
	const navigate = useNavigate();
	const inputRef = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
		const value = inputRef.current.value;
		if (value) {
			const searchParams = new URLSearchParams({query: value});
			navigate(`/search?${searchParams}`);
			inputRef.current.value = '';
		}
	};

	return (
		<form className="header-seacrh" id="header-search" onSubmit={onSubmit}>
					<TextField
						placeholder="Найти..."
						size="small"
						sx={{
							backgroundColor: 'primary.dark', 
							borderRadius: 1,
							"& input": {color: 'primary.light'}
						}}
						inputRef={inputRef}
						variant="outlined" 
					/>
					<IconButton
						type="submit"
						form="header-search"
					>
						<Search sx={{color: 'primary.light'}} />
					</IconButton>
		</form>
	)
};