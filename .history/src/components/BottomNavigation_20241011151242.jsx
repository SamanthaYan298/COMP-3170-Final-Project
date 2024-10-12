import React from 'react';
import { Box, HStack, IconButton } from '@chakra-ui/react';
import { AddIcon, StarIcon, SearchIcon, SettingsIcon } from '@chakra-ui/icons'; 
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
  return (
    <Box 
      position="fixed" 
      bottom="0" 
      width="100%" 
    
      bgGradient="linear(to-t, teal.500, blue.500)" 
      boxShadow="md" 
      zIndex="10"
    >
      <HStack justifyContent="space-around" p={4}>
        {/* Home Button */}
        <Link to="/">
          <IconButton
            icon={<AddIcon boxSize={6} />}
            aria-label="Home"
            colorScheme="blue"
          />
        </Link>

        {/* Favourites Button */}
        <Link to="/favorites">  {/* Changed to point to favorites page */}
          <IconButton
            icon={<StarIcon boxSize={6} color="yellow.500" />}
            aria-label="Favourites"
            colorScheme="blue"
          />
        </Link>

        {/* Search Button */}
        <Link to="/movies">
          <IconButton
            icon={<SearchIcon boxSize={6} />}
            aria-label="Search"
            colorScheme="blue"
          />
        </Link>

        {/* Profile Button */}
        <Link to="/profile">  {/* Changed to point to profile page */}
          <IconButton
            icon={<SettingsIcon boxSize={6} />}
            aria-label="Profile"
            colorScheme="blue"
          />
        </Link>
      </HStack>
    </Box>
  );
};

export default BottomNavigation;
