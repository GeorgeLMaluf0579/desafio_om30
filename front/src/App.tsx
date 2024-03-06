import { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { getAllCitizens, createCitizen, updateCitizen } from './api/citizens';
import CitizenProps from './interfaces/Citizen'
import CitizenList from './components/citizenList';
import SearchBox from './components/search_box';
import CitizenForm from './components/citizenForm';
import Pagination from './components/pagination';

import 'w3-css/w3.css'

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

  const handleCreateCitizen = (formData: CitizenProps) => {
    createCitizen(formData)
      .then((response) => {
        if (response.status === 201) {
          window.location.href = '/'
        }
      })
      .catch((error) => console.error('Error save citizen: ', error))
  }

  const handleUpdateCitizen = (formData: CitizenProps) => {
    debugger
    updateCitizen(formData)
      .then((response) =>{
        if (response.status === 200) {
          window.location.href = '/'
        }
      })
      .catch((error) => console.error('Error update citizen: ', error))
  }

  const handleNextPage = () => {
    if (!((offset + limit) > total)) {
      const newOffset = offset + limit
      setOffset(newOffset)
      getAllCitizens(query, limit, newOffset)
        .then((response) => {
          setCitizens(response.data.citizens)
        })
        .catch((error) => console.error('Error fetching citizens: ', error))
    }
  }

  const handlePreviuosPage = () => {
    if (!((offset - limit) < 0)) {
      const newOffset = offset - limit
      setOffset(newOffset)
      getAllCitizens(query, limit, newOffset)
        .then((response) => {
          setCitizens(response.data.citizens)
        })
        .catch((error) => console.error('Error fetching citizens: ', error))
    }
  }

  return (
    <div className='w3-container'>
      <h1>Cadastro de Municipes</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <div className='w3-container'>
              <SearchBox onSearchChange={handleSearchChange} /> 
              <CitizenList citizens={citizens} />
              <br />
              <Pagination total={total} limit={limit} offset={offset} onPrev={handlePreviuosPage} onNext={handleNextPage} />
            </div>
          }/>          
          <Route path='/new' element={<CitizenForm onSubmit={handleCreateCitizen} />} />
          <Route path='/edit/:id' element={<CitizenForm onSubmit={handleUpdateCitizen} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;