import React from "react";
import CitizenProps from "../interfaces/Citizen";
import { Link } from "react-router-dom";

interface CitizenListProps {
  citizens: CitizenProps[];
}

const CitizenList: React.FC<CitizenListProps> = ({citizens}) => {
  return (
    <div className='w3-container'>
      <table className='w3-table w3-bordered w3-striped'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>CNS</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {citizens.length === 0 ? (
            <tr>
              <td colSpan={4}>Sem municipes cadastrados</td>
            </tr>
          ) : (
            citizens.map((citizen) => (
              <tr key={citizen.id}>
                <td>{citizen.full_name}</td>
                <td>{citizen.cpf}</td>
                <td>{citizen.cns}</td>
                <td>
                  <Link to={`/edit/${citizen.id}`} className='w3-button w3-amber w3-hover-yellow'>
                    Editar
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CitizenList;