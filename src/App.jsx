import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
	<header> Sass och React </header>
	<main>
	  <p> Färgas med Sass </p>
	</main>
	<footer></footer>
    </div>
  )
}

export default App
