import { useState } from 'react';
import './App.css'
import Card from './components/PatientCard/Card'
import { alicia, restOfPatients } from './data'

function App() {
  const [showScore, setShowScore] = useState(false)
  return (
    <>
      <h1>Syrniki Playground</h1>
      <h2>Intro to Components</h2>

      <h3>You earned 5 🥑 Today!</h3>
      
      <div>
        Enable Mental Health Score <input type="checkbox" checked={showScore} onChange={() => setShowScore(!showScore)} />
      </div>
      
      {/* <Card 
        image="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
        name="Bogdan K."
        diagnosis="Depression / Bipolar"
        wellnessIndex="80"
        showWellnessIndex={showScore}
      /> */}

      {/* <Card
        image={alicia.image}
        name={alicia.name}
        diagnosis={alicia.diagnosis}
        wellnessIndex={alicia.wellnessIndex}
        showWellnessIndex={showScore}
      />
       */}
      {/* {restOfPatients.map((item) => (
        <Card
          image={item.image}
          name={item.name}
          diagnosis={item.diagnosis}
          wellnessIndex={item.wellnessIndex}
          showWellnessIndex={showScore}
        />
      ))} */}

     <h2>High Risk Patients</h2>
      {restOfPatients
        .filter((patient) => patient.wellnessIndex < 60)
        .map((highRiskPatient) =>
        (
          <Card
            image={highRiskPatient.image}
            name={highRiskPatient.name}
            age={highRiskPatient.age}
            sex={highRiskPatient.sex}
            diagnosis={highRiskPatient.diagnosis}
            wellnessIndex={highRiskPatient.wellnessIndex}
            showWellnessIndex={showScore}
          />
        )
      )}

     <h2>Low Risk Patients</h2>

     <h2>Female Patients</h2>
     

      <p className="read-the-docs">
        Made with ❤️ and Syrniki
      </p>
    </>
  )
}

export default App
