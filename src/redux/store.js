import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice'
import expenseListReducer from './slices/expenseListSlice'
export const store = configureStore({
    reducer: {
        theme: themeReducer,
        expenseList: expenseListReducer,
    },
})

store.subscribe(() => {
    const state = store.getState();
    console.log(state);

    localStorage.setItem('expenseList', JSON.stringify(state.expenseList.expenseList));
    localStorage.setItem('theme', JSON.stringify(state.theme.theme)); // добавили сохранение темы
});