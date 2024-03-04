import React from "react";
import CitizenProps from "../interfaces/Citizen";

interface CitizenListProps {
  citizens: CitizenProps[];
}

const CitizenList: React.FC<CitizenListProps> = ({citizens}) => {
  return (
    <>
      {citizens.map((citizen) => (
        citizen.full_name
      ))}
    </>
  )
}

export default CitizenList;