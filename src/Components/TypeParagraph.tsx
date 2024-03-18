import styles from './TypeParagraph.module.css'
import { convertStringToArray } from '../Utils/ConvertStringToArray'
import { RootState } from '../Redux/store'
import { useSelector } from 'react-redux'
import { ReactNode } from 'react'

const TypeParagraph = ({children} : {children: ReactNode}) => {
  const testStringArray = convertStringToArray(
    'this is a test string, if you want to test it type on your keyboard to give it a try haha it not that difficult'
  )

  const keyboardInput = useSelector((state: RootState) => state.keyboardInput.value)

  const keyboardInputArray = convertStringToArray(keyboardInput)

  document.querySelectorAll('span').forEach((span) => {
    span.classList.remove(styles.correct, styles.wrong)
  })

  keyboardInputArray.forEach((letter, index) => {
    const currentLetter = document.querySelector<HTMLElement>(`.span${index}`)
    if (letter === testStringArray[index]) {
      currentLetter?.classList.add(styles.correct)
    } else {
      currentLetter?.classList.add(styles.wrong)
    }
  })

  return (
    <p className={styles.paragraph}>
      {testStringArray.map((letter, index) => {
        return (
          <span
            key={index}
            className={`span${index}`}
          >
            {letter}
          </span>
        )
      })}
      {children}
    </p>
  )
}

export default TypeParagraph
