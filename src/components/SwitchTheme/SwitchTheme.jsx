import styles from './SwitchTheme.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../../redux/slices/themeSlice'
const SwitchTheme = () => {
    const theme = useSelector(state => state.theme.theme)
    console.log(theme);
    const dispatch = useDispatch()
    return (
        <div className={theme ? styles.darkSwitchConteiner : styles.lightSwitchConteiner}>
            <h2 >Switch Your Theme in {theme ? 'Light' : 'Dark'}</h2>
            <button onClick={() => dispatch(toggleTheme())}>Switch Theme To {theme ? 'Light' : 'Dark'}</button>
        </div>
    )
}
export default SwitchTheme
