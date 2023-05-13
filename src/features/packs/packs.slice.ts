import { createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "common/utils/withTyeps";
import { packsApi } from "features/packs/packs.api";


const getPacksWithParam = createAppAsyncThunk("getPacksWithParam/packs", async (arg, thunkAPI) => {
		const { getState } = thunkAPI;
		let packs = getState().packs;
		const param = `${packs.packName ? `packName=${packs.packName}` : ``}
		&min=${packs.minMaxValue[0]}&max=${packs.minMaxValue[1]}
		${packs.userId ? `&user_id=${packs.userId}` : ``}${packs.sortMode ? `&` + packs.sortMode : ``}
		${packs.pageCount ? `&pageCount=${packs.pageCount}` : ``}
		${packs.currentPage ? `&page=${packs.currentPage}` : ``}`;

		const response = await packsApi.getPacksWithParam(param);

		return response;
});
const getDefaultPacks = createAppAsyncThunk("getDefaultPacks/packs", async () => {

		const response = await packsApi.getDefaultPacks();

		return response;
});

const slice = createSlice({
		name: "auth",
		initialState: {
				data: null,
				packName: null,
				minMaxValue: [0, 110],
				userId: null,
				sortMode: null,
				pageCount: null,
				currentPage: null,
				disabledMode: []
		},
		reducers: {
				setMinMaxValue: (state, action) => {
						state.minMaxValue = action.payload;
				},
				setPackName: (state, action) => {
						state.packName = action.payload;
				},
				setUserId: (state, action) => {
						state.userId = action.payload;
				},
				setSortMode: (state, action) => {
						state.sortMode = action.payload;
				},
				setPageCount: (state, action) => {
						state.pageCount = action.payload;
				},
				setCurrentPage: (state, action) => {
						state.currentPage = action.payload;
				},
				setDisabledMode: (state: any, action) => {
						state.disabledMode.push(action.payload);
				}
		},
		extraReducers: builder => {
				builder
					.addCase(getPacksWithParam.fulfilled, (state, action) => {
							state.data = action.payload.data;
							state.disabledMode = [];
					})
					.addCase(getDefaultPacks.fulfilled, (state, action) => {
							state.data = action.payload.data;
							state.disabledMode = [];
					});
		}
});

export const {
		setMinMaxValue,
		setPackName,
		setUserId,
		setSortMode,
		setPageCount,
		setCurrentPage,
		setDisabledMode
} = slice.actions;


export const packsThunks = {
		getDefaultPacks,
		getPacksWithParam
};

export const packsReducer = slice.reducer;
