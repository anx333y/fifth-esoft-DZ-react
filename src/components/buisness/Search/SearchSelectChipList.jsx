import { Box, Chip } from "@mui/material"

export const SearchSelectChipList = ({ selected, ...props }) => {

	return (
		<Box sx={{
			display: 'flex',
			flexWrap: 'wrap', gap: 0.5 
		}}
		>
			{
				selected.map((value) => (
					<Chip key={value} label={value} sx={{bgcolor: 'primary', color: 'primary.light'}}/>
				))
			}
		</Box>
	)
}