import { useState } from 'react';
import './App.css'
import Card from './components/Card'
import { alicia, patients } from './data'

function App() {
  const [showScore, setShowScore] = useState(false)
  return (
    <>
      <h1>Dasha's 🥑 Playground</h1>
      <h2>Intro to Components</h2>
      
      <div>
        Enable Mental Health Score <input type="checkbox" checked={showScore} onChange={() => setShowScore(!showScore)} />
      </div>
      
      <Card 
        image="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
        title="Bogdan K."
        date="Depression / Bipolar"
        wellnessIndex="80"
        showWellnessIndex={showScore}
      />

      {/* <Card
        image={alicia.image}
        title={alicia.title}
        date={alicia.date}
        wellnessIndex={alicia.wellnessIndex}
        showWellnessIndex={showScore}
      /> */}
      
      {/* {patients.map((item) => (
        <Card
          image={item.image}
          title={item.title}
          date={item.date}
          wellnessIndex={item.wellnessIndex}
          showWellnessIndex={showScore}
        />
      ))} */}

      <p className="read-the-docs">
        Made with ❤️ and Syrniki
      </p>
    </>
  )
}

export default App
