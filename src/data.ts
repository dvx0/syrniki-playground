type Patient = {
    image: string
    name: string
    diagnosis: string
    wellnessIndex: number
    sex: string
    age: number
}

type Patients = Patient[]

const alicia:Patient = {
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a",
    name: "Alicia P.",
    diagnosis: "Bipolar",
    wellnessIndex: 60,
    sex: "Female",
    age: 22,
  }

  const restOfPatients:Patients = [
    {
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        name: "Julia L.",
        diagnosis: "Depression",
        wellnessIndex: 50,
        age: 25,
        sex: "Female",
    },
    {
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
        name: "Bogdan K.",
        diagnosis: "Depression / Bipolar",
        wellnessIndex: 80,
        age: 30,
        sex: "Male",
    },
    { 
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
        name: "Larry O.",
        diagnosis: "Bipolar",
        wellnessIndex: 32,    
        age: 40,
        sex: "Male",
    },
    { 
        image: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a",
        name: "Kelly W.",
        diagnosis: "Depression",
        wellnessIndex: 12,
        age: 25,
        sex: "Female",
    },
    { 
        image: "",
        name: "Sarah H.",
        diagnosis: "Bipolar",
        wellnessIndex: 66,
        age: 42,
        sex: "Female",
    },
  ]

  export { alicia, restOfPatients}
  export type { Patient, Patients }