import Titulo from './Titulo'
import './App.css'

function App() {
  return (
    <div>
      <Titulo nome="João Victor" cor="red" />
      <h1>Olá Mundo</h1>
      <Titulo nome="Ricardo" paragrafo={true} />
      <Titulo nome="Roger" cor="blue" />
      <Titulo cor="orange" />
    </div>
  )
}

export default App
