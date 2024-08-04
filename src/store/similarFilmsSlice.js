import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { url, options } from "../api/apiConnection";

const fetchSimilarFilmsData = createAsyncThunk(
	'similarFilms/fetchSimilarFilmsData',
	async (params) => {
		let fetchUrl;
		if (params.id && params.genres) {
			const additionalURL = new URLSearchParams();
			params.genres.forEach(genre => {
				additionalURL.append("genres.name", genre)
			});
			fetchUrl = `${url}movie?${additionalURL.toString()}&sortField=votes.kp&sortField=rating.kp&sortType=-1&sortType=-1&limit=3&id=%21${params.id}`;
			console.log(fetchUrl)
		} else {
			return;
		}

		const response = await fetch(fetchUrl, options);
		const data = await response.json();

		console.log('fetch')

		return data.docs;
	}
);

const SimilarFilmsSlice = createSlice({
	name: 'similarFilms',
	initialState: {
		loading: false,
		data: null,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSimilarFilmsData.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchSimilarFilmsData.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchSimilarFilmsData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	}
});

export { fetchSimilarFilmsData };

export default SimilarFilmsSlice.reducer;