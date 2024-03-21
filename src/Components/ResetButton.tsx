import { useDispatch } from 'react-redux'
import styles from './ResetButton.module.css'
import { updateInput } from '../Redux/state/keyboardInput'
const ResetButton = () => {
  const dispatch = useDispatch()

  const resetInput = () => {
    dispatch(updateInput(''))
    document.querySelector('input')!.value = ''
    document.querySelector('input')!.focus()
  }
  return (
    <>
      <button
        className={styles.resetButton}
        onClick={resetInput}
      >
        <i className="fa-solid fa-arrow-rotate-right"></i>
      </button>
    </>
  )
}

export default ResetButton
