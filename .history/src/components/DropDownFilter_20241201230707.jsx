import React from 'react';
import { Select } from '@chakra-ui/react';
import '../App.css';

const DropdownFilter = ({ onChange }) => {
  return (
    <Select 
      placeholder="Select" 
      onChange={onChange} 
      className="dropdown-filter"
      iconColor="transparent"
    >
      <option value="low">Low Rating</option>
      <option value="high">High Rating</option>
      <option value="all">All Movies</option>
    </Select>
  );
};

export default DropdownFilter;