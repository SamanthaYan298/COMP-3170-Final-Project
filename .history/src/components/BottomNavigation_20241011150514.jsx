
import React from 'react';
import { Box, HStack, IconButton } from '@chakra-ui/react';
import { AddIcon, StarIcon, Search2Icon, SettingsIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
  return (
    <Box position="fixed" bottom="0" width="100%" bg="white" boxShadow="md" zIndex="10">
      <HStack justifyContent="space-around" p={4}>
        {/* Home Button */}
        <Link to="/">
          <IconButton
            icon={<AddIcon boxSize={6} />} // Adjust the boxSize as needed
            aria-label="Home"
            colorScheme="blue" // Optional: use color scheme for styling
          />
        </Link>

        {/* Favourites Button */}
        <Link to="/">
          <IconButton
            icon={<StarIcon boxSize={6} color="yellow.500" />} // Customize color
            aria-label="Favourites"
            colorScheme="blue" 
          />
        </Link>

        {/* Search Button */}
        <Link to="/movies">
          <IconButton
            icon={<Search2Icon boxSize={6} />} // Default size
            aria-label="Search"
            colorScheme="blue" 
          />
        </Link>

        {/* Profile Button */}
        <Link to="/">
          <IconButton
            icon={<SettingsIcon boxSize={6} />} // Default size
            aria-label="Profile"
            colorScheme="blue" 
          />
        </Link>
      </HStack>
    </Box>
  );
};

export default BottomNavigation;