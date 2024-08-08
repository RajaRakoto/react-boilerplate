/* libs */
import { create } from "zustand";

/* types */
import type { CreateStore } from "@/stores/zustand/types";

// =======================================

const useZustandStore = create<CreateStore>((set) => ({
	count_zustand: 0,
	user_zustand: [
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
	increment__zustand: (): void =>
		set((state) => ({ count_zustand: state.count_zustand + 1 })),
	decrement__zustand: (): void =>
		set((state) => ({ count_zustand: state.count_zustand - 1 })),
	reset__zustand: (): void => set({ count_zustand: 0 }),
}));

export default useZustandStore;
