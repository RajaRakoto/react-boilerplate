/* libs */
import { configureStore } from "@reduxjs/toolkit";

/* reducer */
import globalReducer from "./reducer/global";

// =======================================

// global store
const store = configureStore({
	reducer: {
		global: globalReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
