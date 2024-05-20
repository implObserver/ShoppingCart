import { loadKeywords } from "../../api/localStorage/loadKeywords"

export const initialState: Keywords = {
    keywords: loadKeywords(),
} 