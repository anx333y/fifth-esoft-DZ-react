import { createTheme } from "@mui/material";

const appTheme = createTheme({
	palette: {
		primary: {
			main: "#0F1A20",
			dark: "#283740",
			light: "#D9E6EA",
		},
		secondary: {
			main: "#F42C04",
			dark: "#fff",
			light: "#fff",
		},
		button: {
			main: "#283740",
			dark: "#0F1A20",
		},
	}
});

export default appTheme;