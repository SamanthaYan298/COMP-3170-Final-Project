import React from 'react';
import { Select } from '@chakra-ui/react';
import '../App.css';

const DropdownFilter = ({ onChange }) => {
    return (
      <Select
        placeholder="Select Filter"
        onChange={onChange}
        className="dropdown-filter"
        iconColor="transparent"
        maxWidth="300px"
        width="100%" 
        overflowY="auto"
      >

        <optgroup label="Filter by Rating">
          <option value="low">Low Rating</option>
          <option value="high">High Rating</option>
          <option value="all">All Movies</option>
        </optgroup>
  
        <optgroup label="Filter by Studio">
          <option value="Studio Ghibli">Studio Ghibli</option>
          <option value="Pixar Animation Studios">Pixar Animation Studios</option>
          <option value="Walt Disney Animation Studios">Walt Disney Animation Studios</option>
        </optgroup>
      </Select>
    );
  };

export default DropdownFilter;
