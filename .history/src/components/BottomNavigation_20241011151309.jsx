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
      height="60px" // Set the height here
      bgGradient="linear(to-t, teal.500, blue.500)" // Linear gradient from teal to blue
      boxShadow="md" 
      zIndex="10"
    >
      <HStack justifyContent="space-around" h="full"> {/* Set HStack to fill the height */}
        {/* Home Button */}
        <Link to="/">
          <IconButton
            icon={<AddIcon boxSize={6} />}
            aria-label="Home"
            colorScheme="whiteAlpha" // Change button color scheme if needed
          />
        </Link>

        {/* Favourites Button */}
        <Link to="/favorites">
          <IconButton
            icon={<StarIcon boxSize={6} color="yellow.500" />}
            aria-label="Favourites"
            colorScheme="whiteAlpha" 
          />
        </Link>

        {/* Search Button */}
        <Link to="/movies">
          <IconButton
            icon={<SearchIcon boxSize={6} />}
            aria-label="Search"
            colorScheme="whiteAlpha" 
          />
        </Link>

        {/* Profile Button */}
        <Link to="/profile">
          <IconButton
            icon={<SettingsIcon boxSize={6} />}
            aria-label="Profile"
            colorScheme="whiteAlpha" 
          />
        </Link>
      </HStack>
    </Box>
  );
};

export default BottomNavigation;
