import './App.css'
import Card from './components/Card'
import { alicia, patients } from './data'

function App() {
  return (
    <>
      <h1>Dasha's Playground</h1>
      <h2>Intro to Components</h2>
      
      <Card 
        image="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
        title="Bogdan K."
        date="Depression / Bipolar"
        wellnessIndex="80"
      />

      {/* <Card
        image={alicia.image}
        title={alicia.title}
        date={alicia.date}
        wellnessIndex={alicia.wellnessIndex}
      /> */}
      
      {/* {patients.map((item) => (
        <Card
          image={item.image}
          title={item.title}
          date={item.date}
          wellnessIndex={item.wellnessIndex}
        />
      ))} */}

      <p className="read-the-docs">
        Made with ❤️ and Syrniki
      </p>
    </>
  )
}

export default App
