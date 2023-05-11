import { createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "common/utils/withTyeps";
import { packsApi } from "features/packs/packs.api";

const slice = createSlice({
		name: "auth",
		initialState: {
				packs: {
						cardPacks: []
				},
				MinMaxValue: [0, 110],
				CurrentPackName: null,
				isMyPacks: false

		},
		reducers: {
				setMinMaxValue: (state, action) => {
						state.MinMaxValue = action.payload;
				},
				setPackName: (state, action) => {
						state.CurrentPackName = action.payload
				},
				setUserId: (state, action) => {
						state.isMyPacks = action.payload
				},
				clearAll: (state) => {
						state.MinMaxValue = [0, 110]
						state.CurrentPackName = null
						state.isMyPacks = false
				}
		},
		extraReducers: builder => {
				builder
					.addCase(getPacks.fulfilled, (state, action) => {
							if (action.payload)
									state.packs = action.payload.packs;
					});
		}
});


export const { setMinMaxValue, setPackName, setUserId, clearAll} = slice.actions;

export const getPacks = createAppAsyncThunk("getPacks/packs", async (arg?: string, thunkAPI?: any) => {
		let { getState } = thunkAPI;
		let value = getState().packs.MinMaxValue;
		let packName = getState().packs.CurrentPackName;
		let userId = getState().packs.isMyPacks ? '6456438f2d452fbdaf721840' : ''
		const params = {packName, min: value[0], max: value[1], user_id: userId}
		try {
						const res = await packsApi.getDefaultPacks(params);
						return { packs: res.data };

		} catch (e) {
				return { packs: { cardPacks: [] } };
		}

});

export const packsReducer = slice.reducer;
