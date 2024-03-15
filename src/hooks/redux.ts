/* libs */
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

/* store */
import type { RootState, AppDispatch } from "../store/redux/store";

// =======================================

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useStoreDispatch = (): AppDispatch => useDispatch<AppDispatch>();
