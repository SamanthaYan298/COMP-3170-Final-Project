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

        <optgroup label="Filter by Rating" classNme="custom-dropdown">
        <option value="low" title="Low Rating">Low Rating</option>
        <option value="high" title="High Rating">High Rating</option>
        <option value="all" title="All Movies">All Movies</option>
        </optgroup>

        <optgroup label="Filter by Studio" className="custom-dropdown">
        <option value="Studio Ghibli" title="Studio Ghibli">Studio Ghibli</option>
        <option value="Pixar Animation Studios" title="Pixar Animation Studios">Pixar Animation</option>
        <option value="Walt Disney Animation Studios" title="Walt Disney Animation Studios">Disney Studios</option>
        </optgroup>

      </Select>
    );
  };

export default DropdownFilter;
