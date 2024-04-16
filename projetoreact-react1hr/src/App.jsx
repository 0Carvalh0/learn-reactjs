import Titulo from './Titulo'
import './App.css'

function App() {
  return (
    <div>
      <Titulo cor="red" />
      <h1>Olá Mundo</h1>
      <Titulo />
      <Titulo cor="cyan" />
      <Titulo cor="orange" />
    </div>
  )
}

export default App
