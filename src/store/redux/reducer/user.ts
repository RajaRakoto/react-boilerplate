/* libs */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* types */
import { I_User } from "../../../types";

// =======================================

// state
const initialState: I_User[] = [
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
];

// slice
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		get__user: (state, action: PayloadAction<string>) => {
			const result = initialState.find((user) => user.id === action.payload);
			console.log(result);
		},
	},
});

export default userSlice.reducer;
export const { get__user } = userSlice.actions;
