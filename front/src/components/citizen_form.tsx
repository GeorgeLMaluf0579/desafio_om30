import React, { useEffect, useState } from 'react';
import CitizenProps from '../interfaces/Citizen';
import { Link, useParams } from 'react-router-dom';
import { getCitizen } from '../api/citizens';

interface CitizenFormProps {
  onSubmit: ( formData: CitizenProps) => void;
}

const CitizenForm: React.FC<CitizenFormProps> = ({onSubmit}) => {
  const { id } = useParams()

  const [formData, setFormData] = useState<CitizenProps>({
    id: 0,
    full_name: '',
    cpf: '',
    cns: '',
    email: '',
    birth_date: '',
    phone: '',
    status: 'unactive',
  });

  useEffect(() => {
    if (id) {
      getCitizen(parseInt(id, 10))
        .then((response) => {
          setFormData(response.data)
        })
    }
  }, [id])

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, type, checked } = e.target;
    setFormData((prevData) => (
      {
        ...prevData,
        [name]: type === 'checkbox' ? (checked ? 'active' : 'unactive') : value,
      }
    ))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({
      id: 0,
      full_name: '',
      cpf: '',
      cns: '',
      email: '',
      birth_date: '',
      phone: '',
      status: 'unactive',
    }) 
  }

  return(
    <form className='w3-container w3-light-grey' onSubmit={handleSubmit}>
      <input className='w3-input' name="id" type="hidden" value={formData.id} />
      <fieldset style={{border: "none"}}>
        <label>Nome Completo</label>
        <input className='w3-input w3-border w3-round'
               type="text" name="full_name" value={formData.full_name}
               onChange={handleChange} />
      </fieldset>
      <fieldset style={{border: "none"}}>
        <label>CPF</label>
        <input className='w3-input w3-border w3-round'
               type="text" name="cpf" value={formData.cpf}
               onChange={handleChange} />
      </fieldset>
      <fieldset style={{border: "none"}}>
        <label>CNS</label>
        <input className='w3-input w3-border w3-round'
               type="text" name="cns" value={formData.cns}
               onChange={handleChange} />
      </fieldset>
      <fieldset style={{border: "none"}}>
        <label>Email:</label>
        <input className='w3-input w3-border w3-round'
               type="text" name="email" value={formData.email}
               onChange={handleChange} />
      </fieldset>
      <fieldset style={{border: "none"}}>
        <label>Data Nasc.:</label>
        <input className='w3-input w3-border w3-round'
               type="date" name="birth_date" value={formData.birth_date}
               onChange={handleChange} />
      </fieldset>
      <fieldset style={{border: "none"}}>
        <label>Telefone:</label>
        <input className='w3-input w3-border w3-round'
               type="text" name="phone" value={formData.phone}
               onChange={handleChange} />
      </fieldset>
      <fieldset style={{border: "none"}}>
        <input className="w3-check" type="checkbox" name="status" checked={formData.status === 'active'}
               onChange={handleChange} />
        <label>Ativo</label>
      </fieldset>

      <button className='w3-button w3-border w3-indigo w3-hover-blue' type="submit">Salvar</button>
      &nbsp;&nbsp;
      <Link to='/' className='w3-button w3-border'>Cancelar</Link>
      <br></br>
    </form>
  )
}

export default CitizenForm;