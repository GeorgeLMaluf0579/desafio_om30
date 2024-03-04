import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import CitizenProps from './interfaces/Citizen'
import CitizenList from './components/citizen_list';

function App() {
  const [citizens, setCitizens] = useState<CitizenProps[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/citizens')
         .then((response) => {
          setCitizens(response.data)
         })
  }, []);
  return (
    <>
      <h1>Cadastro de Municipes</h1>
      <CitizenList citizens={citizens} />
    </>
  )
}

export default App
