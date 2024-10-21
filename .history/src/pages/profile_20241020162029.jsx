import '../App.css';
import React from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, Stack, Divider, Text, Center } from '@chakra-ui/react';
import MovieCarousel from '../components/MovieCarousel';

const Profile = () => {
  return (
    <Box maxW="600px" mx="auto" p={5}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        My Profile
      </Heading>
      
        <Box
          borderRadius="50"
          boxSize="80px"
          bg="white"
          border="2px solid #ccc" // Optional: add a border for better visibility
          marginLeft="11rem"
          marginTop="1.5rem"
        />
        <Box ml={4}>
          <Heading as="h2" size="lg">John Doe</Heading> {/* Replace with actual user name */}
          <Text>@movieLover123</Text> {/* Replace with actual username */}
        </Box>
   
      <Divider my={6} />

      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Help & Support
      </Heading>
      <Text textAlign="center" mb={4}>
        Need help? Reach out at{' '}
        <a href="mailto:support@movieapp.com">support@movieapp.com</a>.
      </Text>

      <Divider my={6} />

      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Movies Visited History
      </Heading>
      <Stack spacing={2}>
        <Text>Movie 1</Text>
        <Text>Movie 2</Text>
        <Text>Movie 3</Text>
      </Stack>
    </Box>
  );
};

export default Profile;

