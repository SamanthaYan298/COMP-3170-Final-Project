import '../App.css';
import React from 'react';
import { Box, Heading, Button, Stack, Divider, Text, Center } from '@chakra-ui/react';
import MovieCarousel from '../components/MovieCarousel';

const Profile = () => {
  return (
    <Box maxW="600px" mx="auto" p={5}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        My Profile
      </Heading>
  {/* static profile circle */}
        <Box
          borderRadius="50"
          boxSize="90px"
          bg="white"
          border="2px solid #ccc" // Optional: add a border for better visibility
          marginLeft="10.5rem"
          marginTop="1.5rem"
        />
        <Box ml={4}>

          <Heading as="h2" fontSize="26px" marginBottom="0">Digi Girl🍿</Heading> {/* Replace with actual user name */}
          <Text as="h3" fontSize="20px" marginTop="0.6">@movieLover123</Text> {/* Replace with actual username */}
        </Box>
   
      <Divider my={6} />

    

      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Movies Visited History
      </Heading>
        
      <Divider my={6} />

      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Help & Support
      </Heading>
      <Text textAlign="center" mb={4} fontSize="17.5px" fontWeight="600">
        Need help? Reach out at{' '}
        <a href="mailto:support@movieapp.com">support@movieapp.com</a>.
      </Text>
    </Box>
  );
};

export default Profile;

