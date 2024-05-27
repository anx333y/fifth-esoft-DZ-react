import { createSlice } from "@reduxjs/toolkit";
import { switchTypes } from "../api/typeData";


const names = {
	"types": "type",
	"countries": "countries.name",
	"genres": "genres.name",
	"type": "types",
	"countries.name": "countries",
	"genres.name": "genres",
}

export const switchParamName = (name) => {
	return (name in names) ? names[name] : name;
};

const searchParamsSlice = createSlice({
	name: 'searchParams',
	initialState: {
		params: {
			"type": [],
			"genres.name": [],
			"countries.name": []
		},
		query: [],
	},
	reducers: {
		pushSearchParamFromSelects: (state, action) => {
			const { name: payloadName, params: payloadParams } = action.payload;
			if (payloadParams.length !== 0 || state.params[switchParamName(payloadName)].length !== 0) {
				const params = payloadName === 'types' ? payloadParams.map(param => switchTypes(param)) : payloadParams;
				state.params[switchParamName(payloadName)] = params;
			}
		},
		pushQuery: (state, action) => {
			const payloadInputValue = action.payload;
			state.query = payloadInputValue ? [payloadInputValue] : [];
		},
		pushSearchParamFromURL: (state, action) => {
			const paramsFromUrl = action.payload;
			if (!!paramsFromUrl && paramsFromUrl.toString() !== state.params.toString()) {
				state.params = paramsFromUrl;
			}
		},
		resetState: (state, action) => {
			action.payload.isParams && (
				state.params = {
					"type": [],
					"genres.name": [],
					"countries.name": [],
				});
			action.payload.isQuery && (
				state.query = []
			);
			console.log('reset')
		}
	},
});

export const {
	pushSearchParamFromSelects,
	pushQuery,
	pushSearchParamFromURL,
	resetState,
} = searchParamsSlice.actions;

export default searchParamsSlice.reducer;