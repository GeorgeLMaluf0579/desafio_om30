import React, { useEffect, useState } from 'react';
import CitizenProps from '../interfaces/Citizen';
import { Link, useParams } from 'react-router-dom';
import { getCitizen } from '../api/citizens';
import { CitizenFormProps } from './interfaces/citizenFormProps';
import { CitizenFormErrors } from './interfaces/citizenFormErrors';

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
    address: {
      building_number: '',
      city: '',
      complement: '',
      ibge_code: '',
      id: 0,
      neighborhood: '',
      state: '',
      street: '',
      zip_code: ''
    }
  });

  const [errors, setErrors] = useState<CitizenFormErrors>({
    full_name: false,
    cpf: false,
    cns: false,
    email: false,
    birth_date: false,
    phone: false,
    city: false,
    neighborhood: false,
    state: false,
    street: false,
    zip_code: false
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
    const { name, value, type, checked } = e.target;
    const isAddressField = name.startsWith("address_");
  
    setFormData((prevData) => ({
      ...prevData,
      ...(isAddressField ? {
            address_attributes: {
              ...prevData.address_attributes,
              [name.substring(8)]: value,
            },
          }
        : {
            [name]: type === 'checkbox' ? (checked ? 'active' : 'unactive') : value,
          }),
    }));
    console.log(formData)
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
        address_attributes: {
          building_number: '',
          city: '',
          complement: '',
          ibge_code: '',
          id: 0,
          neighborhood: '',
          state: '',
          street: '',
          zip_code: '',
        }
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
      phone: false,
      city: false,
      complement: false,
      ibge_code: false,
      neighborhood: false,
      state: false,
      street: false,
      zip_code: false
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

    if (formData.address_attributes?.city === '') {
      validationErrors.city = true
      isError = true
    }

    if (formData.address_attributes?.neighborhood === '') {
      validationErrors.neighborhood = true
      isError = true
    }

    if (formData.address_attributes?.state === '') {
      validationErrors.state = true
      isError = true
    }

    if (formData.address_attributes?.street === '') {
      validationErrors.street = true
      isError = true
    }

    if (formData.address_attributes?.zip_code === '') {
      validationErrors.zip_code = true
      isError = true
    }

    setErrors(validationErrors)
    return isError;
  }

  return(
    <form className='w3-container w3-light-grey' onSubmit={handleSubmit}>
      <input className='w3-input' name="id" type="hidden" value={formData.id} />
      <div className="w3-row">
        <div className="w3-twothird">
          <fieldset style={{border: "none"}}>
            <label>Nome Completo</label>
            <input className='w3-input w3-border w3-round'
                   type="text" name="full_name" value={formData.full_name}
                   onChange={handleChange} />
            <span className={`w3-red w3-small ${errors.full_name ? 'w3-show' : 'w3-hide'}`}>Informe o nome completo</span>
          </fieldset>
        </div>
        <div className="w3-third">
          <fieldset style={{border: "none"}}>
            <input className="w3-check" type="checkbox" name="status" checked={formData.status === 'active'}
                   onChange={handleChange} />
            <label>Ativo</label>
          </fieldset>          
        </div>
      </div>
      <div className="w3-row">
        <div className="w3-half">
          <fieldset style={{border: "none"}}>
            <label>CPF</label>
            <input className='w3-input w3-border w3-round'
                   type="text" name="cpf" value={formData.cpf}
                   onChange={handleChange} />
            <span className={`w3-red w3-small ${errors.cpf ? 'w3-show' : 'w3-hide'}`}>Informe o CPF</span>
          </fieldset>
        </div>
        <div className="w3-half">
          <fieldset style={{border: "none"}}>
            <label>CNS</label>
            <input className='w3-input w3-border w3-round'
                   type="text" name="cns" value={formData.cns}
                   onChange={handleChange} />
            <span className={`w3-red w3-small ${errors.cns ? 'w3-show' : 'w3-hide'}`}>Informe o CNS</span>
          </fieldset>
        </div>
      </div>
      <fieldset style={{border: "none"}}>
        <label>Email:</label>
        <input className='w3-input w3-border w3-round'
               type="text" name="email" value={formData.email}
               onChange={handleChange} />
        <span className={`w3-red w3-small ${errors.email ? 'w3-show' : 'w3-hide'}`}>Informe o email</span>
      </fieldset>
      <div className="w3-row">
        <div className="w3-half">
          <fieldset style={{border: "none"}}>
            <label>Data Nasc.:</label>
            <input className='w3-input w3-border w3-round'
                   type="date" name="birth_date" value={formData.birth_date}
                   onChange={handleChange} />
            <span className={`w3-red w3-small ${errors.birth_date ? 'w3-show' : 'w3-hide'}`}>Informe a data de nascimento</span>
          </fieldset>
        </div>
        <div className="w3-half">
          <fieldset style={{border: "none"}}>
            <label>Telefone:</label>
            <input className='w3-input w3-border w3-round'
                   type="text" name="phone" value={formData.phone}
                   onChange={handleChange} />
            <span className={`w3-red w3-small ${errors.phone ? 'w3-show' : 'w3-hide'}`}>Informe o telefone</span>
          </fieldset>
        </div>
      </div>
      <input className='w3-input' name="address_id" type="hidden" value={formData.address_attributes?.id} />
      <div className="w3-row">
        <div className="w3-twothird">
          <fieldset style={{border: "none"}}>
            <label>Endereço:</label>
            <input className='w3-input w3-border w3-round'
                   type="text" name="address_street" value={formData.address_attributes?.street}
                   onChange={handleChange} />
            <span className={`w3-red w3-small ${errors.street ? 'w3-show' : 'w3-hide'}`}>Informe o endereço</span>
          </fieldset>
        </div>
        <div className="w3-third">
          <fieldset style={{border: "none"}}>
            <label>Número:</label>
            <input className='w3-input w3-border w3-round'
                   type="text" name="address_building_number" value={formData.address_attributes?.building_number}
                   onChange={handleChange} />
          </fieldset>
        </div>
      </div>
      <fieldset style={{border: "none"}}>
        <label>Complemento:</label>
        <input className='w3-input w3-border w3-round'
               type="text" name="address_complement" value={formData.address_attributes?.complement}
               onChange={handleChange} />
      </fieldset>
      <fieldset style={{border: "none"}}>
        <label>Bairro:</label>
        <input className='w3-input w3-border w3-round'
               type="text" name="address_neighborhood" value={formData.address_attributes?.neighborhood}
               onChange={handleChange} />
        <span className={`w3-red w3-small ${errors.neighborhood ? 'w3-show' : 'w3-hide'}`}>Informe o bairro</span>
      </fieldset>
      <div className='w3-row'>
        <div className='w3-half'>
          <fieldset style={{border: "none"}}>
            <label>CEP:</label>
            <input className='w3-input w3-border w3-round'
                   type="text" name="address_zip_code" value={formData.address_attributes?.zip_code}
                   onChange={handleChange} />
            <span className={`w3-red w3-small ${errors.zip_code ? 'w3-show' : 'w3-hide'}`}>Informe o CEP</span>
          </fieldset>
        </div>
        <div className='w3-half'>
          <fieldset style={{border: "none"}}>
            <label>Codigo IBGE:</label>
            <input className='w3-input w3-border w3-round'
                   type="text" name="address_ibge_code" value={formData.address_attributes?.ibge_code}
                   onChange={handleChange} />
          </fieldset>
        </div>
      </div>
      <div className='w3-row'>
        <div className='w3-twothird'>
          <fieldset style={{border: "none"}}>
            <label>Cidade:</label>
            <input className='w3-input w3-border w3-round'
                   type="text" name="address_city" value={formData.address_attributes?.city}
                   onChange={handleChange} />
            <span className={`w3-red w3-small ${errors.city ? 'w3-show' : 'w3-hide'}`}>Informe a Cidade</span>
          </fieldset>
        </div>
        <div className='w3-third'>
          <fieldset style={{border: "none"}}>
            <label>UF:</label>
            <input className='w3-input w3-border w3-round'
                   type="text" name="address_state" value={formData.address_attributes?.state}
                   onChange={handleChange} />
            <span className={`w3-red w3-small ${errors.state ? 'w3-show' : 'w3-hide'}`}>Informe a UF</span>
          </fieldset>
        </div>
      </div>
      <button className='w3-button w3-border w3-indigo w3-hover-blue' type="submit">Salvar</button>
      &nbsp;&nbsp;
      <Link to='/' className='w3-button w3-border'>Cancelar</Link>
      <br></br>
    </form>
  )
}

export default CitizenForm;