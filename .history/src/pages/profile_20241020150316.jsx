// pages/ProfilePage.js
import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, Stack, Divider, Text } from '@chakra-ui/react';

// Profile Page Component
const Profile = () => {
  // State to hold user information (In a real-world scenario, this would be fetched from a database)
  const [userInfo, setUserInfo] = useState({
    email: 'user@example.com',
    username: 'movieLover123',
  });

  // State to track visited movies (Example data)
  const [visitedMovies, setVisitedMovies] = useState([
    'Movie 1',
    'Movie 2',
    'Movie 3',
  ]);

  // Handler for form inputs (for updating user information)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  // Handler for submitting profile changes
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you'd send the updated info to your backend or database
    alert('Profile updated successfully!');
  };

  return (
    <Box maxW="600px" mx="auto" p={5}>
      {/* Profile Section */}
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        My Profile
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Save Changes
          </Button>
        </Stack>
      </form>

      {/* Divider */}
      <Divider my={6} />

      {/* Help/Support Section */}
      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Help & Support
      </Heading>
      <Text textAlign="center" mb={4}>
        If you need any help, feel free to reach out to our support team at{' '}
        <a href="mailto:support@movieapp.com">support@movieapp.com</a>.
      </Text>

      {/* Divider */}
      <Divider my={6} />

      {/* User Info Section - Movies Visited History */}
      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Movies Visited History
      </Heading>
      <Stack spacing={2}>
        {visitedMovies.length ? (
          visitedMovies.map((movie, index) => (
            <Text key={index}>{movie}</Text>
          ))
        ) : (
          <Text>No movies visited yet.</Text>
        )}
      </Stack>
    </Box>
  );
};

export default Profile;
