import React from 'react';
import { Box, HStack, IconButton } from '@chakra-ui/react';
import { HomeIcon, StarIcon, SearchIcon, InfoIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
  return (
    <Box 
      position="fixed" 
      bottom="0" 
      left="0" 
      right="0" 
      bg="white" 
      boxShadow="md"
      zIndex="10"
    >
      <HStack justifyContent="space-around" p={2}>
        <Link to="/">
          <IconButton 
            icon={<HomeIcon />} 
            aria-label="Home" 
            variant="ghost" 
            size="lg" 
          />
        </Link>
        <Link to="/favourites">
          <IconButton 
            icon={<StarIcon />} 
            aria-label="Favorites" 
            variant="ghost" 
            size="lg" 
          />
        </Link>
        <Link to="/search">
          <IconButton 
            icon={<SearchIcon />} 
            aria-label="Search" 
            variant="ghost" 
            size="lg" 
          />
        </Link>
        <Link to="/profile">
          <IconButton 
            icon={<InfoIcon />} 
            aria-label="Profile" 
            variant="ghost" 
            size="lg" 
          />
        </Link>
      </HStack>
    </Box>
  );
};

export default BottomNavigation;