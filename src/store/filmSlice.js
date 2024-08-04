import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { url, options } from "../api/apiConnection";
import { formatFilmData } from "../api/filmData";

const fetchFilmData = createAsyncThunk(
	'film/fetchFilmData',
	async (id) => {
		if (id < 250 || id > 7000000) {
			return;
		}
		const response = await fetch(`${url}movie/${id}`, options);
		const data = await response.json();

		console.log(data)
		
		return formatFilmData(data);
	}
);

const filmSlice = createSlice({
	name: 'film',
	initialState: {
		loading: false,
		data: null,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFilmData.pending, (state) => {
				state.loading = true;
				state.error = false;
			})
			.addCase(fetchFilmData.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchFilmData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	}
});

export { fetchFilmData };

export default filmSlice.reducer;