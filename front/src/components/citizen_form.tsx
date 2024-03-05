import React, { useEffect, useState } from 'react';
import CitizenProps from '../interfaces/Citizen';
import { Link, useParams } from 'react-router-dom';
import { getCitizen } from '../api/citizens';

interface CitizenFormProps {
  onSubmit: ( formData: CitizenProps) => void;
}

interface CitizenFormErrors {
  full_name: boolean;
  cpf: boolean;
  cns: boolean;
  email: boolean;
  birth_date: boolean;
  phone: boolean;
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

  const [errors, setErrors] = useState<CitizenFormErrors>({
    full_name: false,
    cpf: false,
    cns: false,
    email: false,
    birth_date: false,
    phone: false
  })

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
    let err = validate()
    if (!(err)) {
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
  }

  const validate = () => {
    let isError = false
    const validationErrors = {
      full_name: false,
      cpf: false,
      cns: false,
      email: false,
      birth_date: false,
      phone: false
    }

    if (formData.full_name === '') {
      validationErrors.full_name = true;
      isError = true
    }

    if (formData.cpf === '') {
      validationErrors.cpf = true;
      isError = true
    }

    if (formData.cns === '') {
      validationErrors.cns = true
      isError = true
    }

    if (formData.email === '') {
      validationErrors.email = true
      isError = true
    }

    if (formData.birth_date === '') {
      validationErrors.birth_date = true
      isError = true
    }

    if (formData.phone === '') {
      validationErrors.phone = true;
      isError = true
    }

    setErrors(validationErrors)
    return isError;
  }

  return(
    <form className='w3-container w3-light-grey' onSubmit={handleSubmit}>
      <input className='w3-input' name="id" type="hidden" value={formData.id} />
      <fieldset style={{border: "none"}}>
        <label>Nome Completo</label>
        <input className='w3-input w3-border w3-round'
               type="text" name="full_name" value={formData.full_name}
               onChange={handleChange} />
        <span className={`w3-red w3-small ${errors.full_name ? 'w3-show' : 'w3-hide'}`}>Informe o nome completo</span>
      </fieldset>
      <fieldset style={{border: "none"}}>
        <label>CPF</label>
        <input className='w3-input w3-border w3-round'
               type="text" name="cpf" value={formData.cpf}
               onChange={handleChange} />
        <span className={`w3-red w3-small ${errors.cpf ? 'w3-show' : 'w3-hide'}`}>Informe o CPF</span>
      </fieldset>
      <fieldset style={{border: "none"}}>
        <label>CNS</label>
        <input className='w3-input w3-border w3-round'
               type="text" name="cns" value={formData.cns}
               onChange={handleChange} />
        <span className={`w3-red w3-small ${errors.cns ? 'w3-show' : 'w3-hide'}`}>Informe o CNS</span>
      </fieldset>
      <fieldset style={{border: "none"}}>
        <label>Email:</label>
        <input className='w3-input w3-border w3-round'
               type="text" name="email" value={formData.email}
               onChange={handleChange} />
        <span className={`w3-red w3-small ${errors.email ? 'w3-show' : 'w3-hide'}`}>Informe o email</span>
      </fieldset>
      <fieldset style={{border: "none"}}>
        <label>Data Nasc.:</label>
        <input className='w3-input w3-border w3-round'
               type="date" name="birth_date" value={formData.birth_date}
               onChange={handleChange} />
        <span className={`w3-red w3-small ${errors.birth_date ? 'w3-show' : 'w3-hide'}`}>Informe a data de nascimento</span>
      </fieldset>
      <fieldset style={{border: "none"}}>
        <label>Telefone:</label>
        <input className='w3-input w3-border w3-round'
               type="text" name="phone" value={formData.phone}
               onChange={handleChange} />
        <span className={`w3-red w3-small ${errors.phone ? 'w3-show' : 'w3-hide'}`}>Informe o telefone</span>
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