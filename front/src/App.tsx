import { useEffect, useState } from 'react'
import 'w3-css/w3.css'
import { getAllCitizens } from './api/citizens';
import CitizenProps from './interfaces/Citizen'
import CitizenList from './components/citizen_list';

function App() {
  const [citizens, setCitizens] = useState<CitizenProps[]>([]);

  useEffect(() => {
    getAllCitizens()
      .then((response) => {
          setCitizens(response.data)
        })
      .catch((error) => console.error('Error fetching citizens: ', error));
  }, []);
  return (
    <div className='w3-container'>
      <h1>Cadastro de Municipes</h1>
      <CitizenList citizens={citizens} />
    </div>
  )
}

export default App
