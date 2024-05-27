import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { url, options } from "../api/apiConnection";
import { formatFilmData } from "../api/filmData";

const fetchFilmsData = createAsyncThunk(
	'films/fetchFilmsData',
	async (params) => {
		let fetchUrl;
		if (params) {
			const additionalURL = (params && params.indexOf('query') !== -1)
			? `/search?page=1&sortField=votes.kp&sortField=rating.kp&sortType=-1&sortType=-1&limit=100&${params}`
			: `?page=1&sortField=votes.kp&sortField=rating.kp&sortType=-1&sortType=-1&limit=100&${params}`;
			fetchUrl = `${url}movie${additionalURL}`;
		} else {
			fetchUrl = `${url}movie/search?page=1&limit=100`;
		}

		const response = await fetch(fetchUrl, options);
		const data = await response.json();

		console.log('fetch')

		return data.docs;
	}
);

const filmsSlice = createSlice({
	name: 'films',
	initialState: {
		loading: false,
		data: null,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFilmsData.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchFilmsData.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchFilmsData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	}
});

export { fetchFilmsData };

export default filmsSlice.reducer;