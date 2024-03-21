import { useEffect, useRef } from 'react'
import styles from './HiddenInput.module.css'
import { useDispatch } from 'react-redux'
import { updateInput } from '../Redux/state/keyboardInput'

const HiddenInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const dispatch = useDispatch()

  if (document.activeElement !== inputRef.current) console.log('lose focus!')

  const handleInputChange = (keyboardInput: string) => {
    dispatch(updateInput(keyboardInput))
  }

  return (
    <>
      <input
        className={styles.hiddenInput}
        type="text"
        onChange={(e) => handleInputChange(e.target.value)}
        ref={inputRef}
      />
    </>
  )
}

export default HiddenInput
