interface CitizenProps {
  id: number,
  full_name: string,
  cpf: string,
  cns: string,
  email: string,
  birth_date: string,
  phone: string,
  status: string,
  address_attributes?: {
    id: number,
    street: string,
    building_number: string,
    neighborhood: string,
    complement: string,
    zip_code: string,
    city: string,
    state: string,
    ibge_code: string,
  }
}

export default CitizenProps;