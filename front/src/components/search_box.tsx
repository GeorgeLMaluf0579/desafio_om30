import React, { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

interface SearchBoxProps {
  onSearchChange: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({onSearchChange}) => {
  return (
    <div className='w3-container'>
      <div className='w3-left'>
        <input
          type="text"
          placeholder='Procurar...'
          onChange={(e: ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)}
        />
      </div>
      <Link className='w3-button w3-right w3-indigo w3-hover-blue' to='/new'>Novo</Link>
    </div>
  )
}

export default SearchBox;