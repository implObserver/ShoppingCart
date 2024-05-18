import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { saveKeywords } from "../../api/localStorage/saveKeywords";

const keywordsSlice = createSlice({
    name: 'keywords',
    initialState,
    reducers: {
        addKeyword: (state: Keywords, action: PayloadAction<string>) => {
            state.keywords.unshift(action.payload);
            saveKeywords(state.keywords);
        },
        removeKeyword: (state: Keywords, action: PayloadAction<string>) => {
            const index = state.keywords.indexOf(action.payload);
            state.keywords.splice(index, 1);
        }
    }
})

export const actions = keywordsSlice.actions;
export default keywordsSlice.reducer;