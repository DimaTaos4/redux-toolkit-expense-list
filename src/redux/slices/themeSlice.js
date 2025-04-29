import { createSlice } from "@reduxjs/toolkit"

const getInitialTheme = () => {
    const stored = localStorage.getItem('theme');
    return stored ? JSON.parse(stored) : false; // по умолчанию false
};

const initialState = {
    theme: getInitialTheme(),
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: state => {
            state.theme = !state.theme
        }
    }
})
export default themeSlice.reducer
export const { toggleTheme } = themeSlice.actions 