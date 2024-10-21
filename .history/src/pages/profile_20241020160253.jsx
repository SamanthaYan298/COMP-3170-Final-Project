import '../App.css';
import React from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, Stack, Divider, Text } from '@chakra-ui/react';
import MovieCarousel from '../components/MovieCarousel';

const Profile = () => {
  return (
    <Box maxW="600px" mx="auto" p={5}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        My Profile
      </Heading>
      <form>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="user@example.com" />
          </FormControl>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type="text" placeholder="movieLover123" />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Save Changes
          </Button>
        </Stack>
      </form>

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

