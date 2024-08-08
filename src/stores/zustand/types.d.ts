/* types */
import type { I_User } from "@/@types";

export interface CreateStore {
	count_zustand: number;
	user_zustand: I_User[];
	increment__zustand: () => void;
	decrement__zustand: () => void;
	reset__zustand: () => void;
}
