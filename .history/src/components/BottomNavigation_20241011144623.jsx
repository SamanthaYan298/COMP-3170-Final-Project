// src/components/BottomNavigation.jsx
import React from 'react';
import { Box, HStack, IconButton } from '@chakra-ui/react';
import { HomeIcon, StarIcon, SearchIcon, AddIcon } from '@chakra-ui/icons'; 
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
  return (
    <Box position="fixed" bottom="0" width="100%" bg="white" boxShadow="md">
      <HStack justifyContent="space-around" p={4}>
        <Link to="/">
          <IconButton icon={<HomeIcon />} aria-label="Home" />
        </Link>
        <Link to="/favourites">
          <IconButton icon={<StarIcon />} aria-label="Favourites" />
        </Link>
        <Link to="/search">
          <IconButton icon={<SearchIcon />} aria-label="Search" />
        </Link>
        <Link to="/profile">
          <IconButton icon={<AddIcon />} aria-label="Profile" />
        </Link>
      </HStack>
    </Box>
  );
};

export default BottomNavigation;
