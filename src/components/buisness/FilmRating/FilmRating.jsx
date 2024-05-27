import { Rating } from "@mui/material"
import StarIcon from "@mui/icons-material/Star"
import { blue } from "@mui/material/colors";

export const FilmRating = ({id, rating, className, ...props}) => {
	return (
		<Rating
			name={"name" + id}
			defaultValue={parseFloat(rating) / 2}
			precision={0.1}
			className={className}
			emptyIcon={<StarIcon sx={{color: 'primary.light'}} style={{opacity: 1 }} fontSize="inherit" />}
			readOnly
			{...props}
		/>
	)
};