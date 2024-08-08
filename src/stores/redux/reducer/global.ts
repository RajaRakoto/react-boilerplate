/* libs */
import { createSlice } from "@reduxjs/toolkit"; // you can import PayloadAction -> action: PayloadAction<T>

/* types */
import type { I_InitialeState } from "@/stores/redux/types";

// =======================================

// state
const initialState: I_InitialeState = {
	count_redux: 0,
	user_redux: [
		{
			id: "admin",
			email: "admin@gmail.com",
			name: "admin_name",
			admin: true,
		},
		{
			id: "user",
			email: "user@gmail.com",
			name: "user_name",
			admin: false,
		},
	],
};

// slice
const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		increment__redux: (state) => {
			state.count_redux++;
		},
		decrement__redux: (state) => {
			state.count_redux--;
		},
		reset__redux: (state) => {
			state.count_redux = 0;
		},
	},
});

export default globalSlice.reducer;
export const { increment__redux, decrement__redux, reset__redux } =
	globalSlice.actions;
