import { useEffect, useState } from 'react'
import 'w3-css/w3.css'
import { getAllCitizens } from './api/citizens';
import CitizenProps from './interfaces/Citizen'
import CitizenList from './components/citizen_list';
import SearchBox from './components/search_box';

function App() {
  const [citizens, setCitizens] = useState<CitizenProps[]>([]);
  const [query, setQuery] = useState<string>('*');
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    getAllCitizens(query, limit, offset)
      .then((response) => {
          setTotal(response.data.total)
          setLimit(response.data.limit)
          setOffset(response.data.offset)
          setCitizens(response.data.citizens)
        })
      .catch((error) => console.error('Error fetching citizens: ', error));
  }, []);

  const handleSearchChange = (value: string) => {
    setQuery(value === '' ? '*' : `${value}*`)
    getAllCitizens(value === '' ? '*' : `${value}*`, limit, offset)
      .then((response) => {
        setTotal(response.data.total)
        setLimit(response.data.limit)
        setOffset(response.data.offset)
        setCitizens(response.data.citizens)
      })
      .catch((error) => console.error('Error fetching citizens: ', error));
  }

  return (
    <div className='w3-container'>
      <h1>Cadastro de Municipes</h1>
      <SearchBox onSearchChange={handleSearchChange} /> 
      <CitizenList citizens={citizens} />
    </div>
  )
}

export default App
