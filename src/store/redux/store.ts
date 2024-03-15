/* libs */
import { configureStore } from "@reduxjs/toolkit";

/* reducer */
import userReducer from "./reducer/user";

// =======================================

// global store
const store = configureStore({
	reducer: {
		user: userReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
