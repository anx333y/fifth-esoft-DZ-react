import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
	name: "comments",
	initialState: {
		data: {},
	},
	reducers: {
		getComments: (state, action) => {
			return state.data[action.payload];
		},
		addComment: (state, action) => {
			if (!state.data[action.payload.id]) {
				state.data[action.payload.id] = [];
			}
			state.data[action.payload.id].push(action.payload.content);
		},
		deleteComment: (state, action) => {
			state.data[action.payload] = null;
		}
	},
});

export const {
	getComments,
	addComment,
	deleteComment
} = commentsSlice.actions;

export default commentsSlice.reducer;