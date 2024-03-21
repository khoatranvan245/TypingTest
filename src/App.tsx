import './App.css'
import Caret from './Components/Caret'
import HiddenInput from './Components/HiddenInput'
import ResetButton from './Components/ResetButton'
import TypeParagraph from './Components/TypeParagraph'

function App() {
  return (
    <div className="container">
      <HiddenInput />
      <TypeParagraph>
        <Caret />
      </TypeParagraph>
      <ResetButton/>
    </div>
  )
}

export default App
