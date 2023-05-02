import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArgLoginType, ArgRegisterType1, authApi, ProfileType } from "features/auth/auth.api";
import { AppDispatch, RootState } from "app/store";
import { createAppAsyncThunk } from "common/utils/withTyeps";


// const register = createAsyncThunk("auth/register", (arg: ArgRegisterType1) => {
//   authApi.register(arg).then((res) => {
//     console.log("register: ", res.data);
//   });
// });
// const login = createAsyncThunk("auth/login", (arg: ArgLoginType) => {
//   return authApi.login(arg).then((res) => {
//     return { profile: res.data };
//   });
// });
// const register = createAsyncThunk<void, ArgRegisterType1, {
//   state: RootState
//   dispatch: AppDispatch
//   rejectValue: unknown
// }>
// ("auth/register", async (arg) => {
//   await authApi.register(arg);
// });
//
//
// const login = createAsyncThunk<{ profile: ProfileType }, ArgLoginType, {
//   state: RootState
//   dispatch: AppDispatch
//   rejectValue: unknown
// }>
// ("auth/login", async (arg, thunkAPI) => {
//   const res = await authApi.login(arg);
//   return { profile: res.data };
// });

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null,
  },
  reducers: {
    // setProfile: (state, action: PayloadAction<{ profile: ProfileType }>) => {
    //   state.profile = action.payload.profile;
    // }
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.profile = action.payload.profile;

    });
  }
});

const register = createAppAsyncThunk<void, ArgRegisterType1>
("auth/register", async (arg) => {
  await authApi.register(arg);
});


const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>
("auth/login", async (arg, thunkAPI) => {
  const res = await authApi.login(arg);
  return { profile: res.data };
});

export const authReducer = slice.reducer;
// export const authAction = slice.actions;
export const authThunks = { register, login };
