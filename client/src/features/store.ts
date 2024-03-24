import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auth.slice";
import coursesReducer from "./courses/courses.slice"

import { authApi } from "./api/auth.api";

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		auth: authReducer,
		courses: coursesReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware),
	devTools: true,
});
