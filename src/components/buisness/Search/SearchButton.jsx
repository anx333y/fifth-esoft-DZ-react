import { Button } from "@mui/material";

export const SearchButton = ({ children, ...props }) => {
	return (
		<div className="search-button">
			<Button
				{...props}
				color="button"
				variant="contained"
				sx={{
					width: 1,
					alignSelf: 'stretch'
				}}
			>
					{children}
			</Button>
		</div>
	)
};