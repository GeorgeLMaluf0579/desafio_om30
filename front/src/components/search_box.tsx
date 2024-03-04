import React, { ChangeEvent } from 'react';

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
    </div>
  )
}

export default SearchBox;