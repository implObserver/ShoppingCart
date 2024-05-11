import { RootState } from "@/app/model/store/Store";

export const selectFavorites = (state: RootState) => state.favorites;