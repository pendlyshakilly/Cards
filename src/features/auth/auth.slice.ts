import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArgLoginType, ArgRegisterType1, authApi, CreatePassType, ProfileType } from "features/auth/auth.api";
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk";
import { thunkTryCatch } from "common/utils";
import { appActions } from "app/app.slice";


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
				isAuth: false,
				isInitialized: false
		},
		reducers: {

				isAuthMe: (state, action: PayloadAction<{ isAuth: boolean }>) => {
						state.isAuth = true
				},
				setIsInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
						state.isAuth = action.payload.isInitialized;
				},


		},
		extraReducers: builder => {
				builder
					.addCase(login.fulfilled, (state, action) => {
							state.profile = action.payload.profile;
							state.isInitialized = true
							state.isAuth = true

					})
					.addCase(logOut.fulfilled, (state, action) => {
							state.profile = null;
							state.isAuth = action.payload.isAuth;
							state.isInitialized = true

					})
					.addCase(authMeAPI.fulfilled, (state, action) => {
							state.profile = action.payload.profile;
							state.isAuth = action.payload.isAuth;
					})
					.addCase(authMeAPI.rejected, (state, action) => {
							state.isInitialized = true
							state.isAuth = false

					})

		}
});


//
// const register = createAppAsyncThunk<void, ArgRegisterType1>
// ("auth/register", async (arg) => {
//   await authApi.register(arg);
//
// });
const register = createAppAsyncThunk<void, ArgRegisterType1>
("auth/register", async (arg: ArgRegisterType1, thunkAPI) => {
		return thunkTryCatch(thunkAPI, async () => {
				const res = await authApi.register(arg);
				console.log("ok", res);
		});
});

const login = createAppAsyncThunk<{ profile: ProfileType, }, ArgLoginType>
("auth/login", async (arg, thunkAPI) => {

		return thunkTryCatch(thunkAPI, async () => {
				const res = await authApi.login(arg);
				return await { profile: res.data, };

		const res = await authApi.login(arg);
		return { profile: res.data, isAuth: true };



		});
});

const forgotPassword = createAppAsyncThunk<any, string>
("auth/forgotPassword", async (arg, thunkAPI) => {
		return thunkTryCatch(thunkAPI, async () => {
				const { dispatch } = thunkAPI;
				const whereLetter = {
						email: arg,
						from: "test-front-admin <ai73a@yandex.by>",
						message: `<div style="background-color: cornflowerblue; padding: 15px">password recovery link: 
											<a href="http://localhost:3000/create-new-password/$token$">link</a></div>`

				};
				const res = await authApi.forgotPassword(whereLetter);
				dispatch(isAuthMe({ isAuth: true }));
				console.log(res);
				return { res };
		});

		};
		const res = await authApi.forgotPassword(whereLetter);
		dispatch(isAuthMe({ isAuth: true }));
		return { res };
});

const createPassword = createAppAsyncThunk<void, CreatePassType>
("auth/createPassword", async (arg, thunkAPI) => {
		return thunkTryCatch(thunkAPI, async () => {
				const { dispatch } = thunkAPI;
				await authApi.createPassword(arg);
				dispatch(isAuthMe({ isAuth: true }));
		});

});

const logOut = createAppAsyncThunk<{ isAuth: boolean}, void>
("auth/logOut", async (arg, thunkAPI) => {
		return thunkTryCatch(thunkAPI, async () => {
				await authApi.logOut();
				// const { dispatch } = thunkAPI;
				// dispatch(appActions.setIsAppInitialized({isAppInitialized:true}))
				return { isAuth: false };
		});

});

const updateDataProfile = createAppAsyncThunk<void, string>
("auth/updateDataProfile", async (arg, thunkAPI) => {

		return thunkTryCatch(thunkAPI, async () => {
				const payload = {
						name: arg,
						avatar: "https//avatar-url.img" // url or base64
				};
				const res = await authApi.updateDataProfile(payload);
				console.log(res);
				await authApi.updateDataProfile(payload);
		});


});

const authMeAPI = createAppAsyncThunk<{ profile: ProfileType, isAuth: boolean }, void>("auth/authMeAPI", async (arg, thunkAPI) => {
		return thunkTryCatch(thunkAPI, async () => {
				const res = await authApi.authMe();
				return { profile: res.data, isAuth: true };
		});


		const payload = {
				name: arg,
				avatar: "https//avatar-url.img" // url or base64
		};
		const res = await authApi.updateDataProfile(payload);
		await authApi.updateDataProfile(payload);
});

const authMeAPI = createAppAsyncThunk<{ profile: ProfileType, isAuth: boolean }, void>("auth/authMeAPI", async () => {
		const res = await authApi.authMe();
		// await authApi.authMe();
		return { profile: res.data, isAuth: true };


});

export const authReducer = slice.reducer;
export const { isAuthMe } = slice.actions;
 export const authAction = slice.actions;
export const authThunks = {
		register,
		login,
		forgotPassword,
		createPassword,
		logOut,
		updateDataProfile,
		authMeAPI
};
//
// export const isAuthTC = ()=> (dispatch:Dispatch)=>{
//   dispatch(isAuthMe({isAuth:true}))
//   authApi.authMe({})
//     .then((res)=>{
//
//       console.log(res);
//       dispatch(isAuthMe({isAuth:true}))
//     })
// }
