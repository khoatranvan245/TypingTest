import './App.css'
import Caret from './Components/Caret'
import HiddenInput from './Components/HiddenInput'
import TypeParagraph from './Components/TypeParagraph'

function App() {
  return (
    <div className="container">
      <HiddenInput />
      <TypeParagraph>
        <Caret />
      </TypeParagraph>
    </div>
  )
}

export default App
