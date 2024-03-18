import { useEffect, useRef } from 'react'
import styles from './Caret.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../Redux/store'
import { updatePosition } from '../Redux/state/caretPosition'

const Caret = () => {
  const caretRef = useRef<HTMLDivElement>(null)
  const caretPosition = useSelector((state: RootState) => state.caretPostion)
  const keyboardInput = useSelector((state: RootState) => state.keyboardInput.value)
  const dispatch = useDispatch()

  const currentLetter = document.querySelector<HTMLElement>(`.span${keyboardInput.length - 1}`)
  console.log(currentLetter)

  useEffect(() => {
    if (currentLetter !== null) {
      dispatch(
        updatePosition({
          top: currentLetter.offsetTop + 'px',
          left: currentLetter.offsetLeft + currentLetter.offsetWidth + 'px',
        })
      )
    } else {
      dispatch(
        updatePosition({
          top: '0px',
          left: '0px',
        })
      )
    }
  }, [currentLetter])

  useEffect(() => {
    caretRef.current!.style.top = caretPosition.top
    caretRef.current!.style.left = caretPosition.left
  }, [caretPosition])

  return (
    <div
      className={styles.caret}
      ref={caretRef}
    ></div>
  )
}

export default Caret
