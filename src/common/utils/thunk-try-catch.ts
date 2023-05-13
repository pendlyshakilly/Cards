import { BaseThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { AppDispatch, RootState } from "app/store";

export const thunkTryCatch = async (thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, null>,
                                    logic: Function) => {
    const {dispatch, rejectWithValue} = thunkAPI
    try {
        return await logic()
    } catch (e:any) {
        return rejectWithValue(e)
    }
}
