import SwitchTheme from "../SwitchTheme/SwitchTheme"
import styles from './App.module.css'
import { useSelector } from "react-redux"
import ExpenseList from "../ExpenseList/ExpenseList"
import '../../styles/reset.css'
function App() {
  const theme = useSelector(state => state.theme.theme)

  return (
    <>
      <main className={theme ? styles.darkMainContainer : styles.lightMainContainer}>
        <SwitchTheme />
        <ExpenseList />
      </main>
    </>

  )
}

export default App
