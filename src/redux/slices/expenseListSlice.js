import { createSlice } from "@reduxjs/toolkit"

const getInitialExpenseList = () => {
    const stored = localStorage.getItem('expenseList');
    return stored ? JSON.parse(stored) : [];
};

const initialState = {
    expenseList: getInitialExpenseList(),
};
const expenseListSlice = createSlice({
    name: 'expenseList',
    initialState,
    reducers: {
        addExpenseList: (state, action) => {
            // state.expenseList = [...state.expenseList, action.payload]

            state.expenseList.push(action.payload)
            // push возвращает длину массива, а не сам массив. Метод push мутирует исходный массив
        },
        removeExpenseItem: (state, action) => {
            state.expenseList = state.expenseList.filter((_, index) => index !== action.payload)
        }
    }
})

export default expenseListSlice.reducer
export const { addExpenseList, removeExpenseItem } = expenseListSlice.actions