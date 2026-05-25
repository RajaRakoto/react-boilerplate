/* libs */
import { useDispatch, useSelector } from "react-redux";

/* store */
import type { RootState, AppDispatch } from "@/stores/redux/store";

// =======================================

export const useStoreSelector = useSelector.withTypes<RootState>();
export const useStoreDispatch = useDispatch.withTypes<AppDispatch>();
