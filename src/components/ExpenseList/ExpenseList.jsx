import styles from './ExpenseList.module.css'
import { useForm } from 'react-hook-form'
import { addExpenseList, removeExpenseItem } from '../../redux/slices/expenseListSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
const ExpenseList = () => {


    const expenseList = useSelector(state => state.expenseList.expenseList)
    const theme = useSelector(state => state.theme.theme)
    const dispatch = useDispatch()
    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (values) => {
        reset()
        dispatch(addExpenseList(values))
    }

    useEffect(() => {
        console.log(expenseList);
    }, [expenseList])

    const elements = expenseList.map((list, index) => <li className={styles.expenseItem} key={index}>{list.expense}: {list.price}$ <button onClick={() => dispatch(removeExpenseItem(index))} className={theme ? styles.lightRemoveButton : styles.darkRemoveButton}>Удалить</button></li>)

    return (
        <div className={theme ? styles.darkExpenseBlock : styles.expenseBlock}>
            <h2>My Expense List</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formExpense}>
                <label htmlFor="expenseList">
                    Expense
                    <input {...register('expense', {
                        required: 'Добавь вытраты'
                    })} type="text" />

                </label>
                {errors.expense && <p className={styles.error}>{errors.expense.message}</p>}
                <label htmlFor="price">
                    Price in $
                    <input {...register('price', {
                        required: 'Укажи цену'
                    })} type="number" />

                </label>
                {errors.price && <p className={styles.error}>{errors.price.message}</p>}
                <button className={theme ? styles.lightAddButton : styles.darkAddButton}>Добавить</button>
            </form>



            <ul>
                {elements}
            </ul>
        </div>
    )
}
export default ExpenseList