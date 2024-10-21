import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, Stack, Divider, Text, Image, Flex } from '@chakra-ui/react';
import MovieCarousel from '../components/MovieCarousel'; // You can import your own carousel here

const Profile = () => {
  const [showForm, setShowForm] = useState(false);

  const handleProfileClick = () => {
    setShowForm(!showForm);
  };

  return (
    <Box maxW="600px" mx="auto" p={5}>
      {/* Profile Header */}
      <Flex align="center" mb={6} onClick={handleProfileClick} cursor="pointer">
        <Image
          borderRadius="full"
          boxSize="80px"
          src="/images/profile-picture.jpg" // Replace with the actual profile image source
          alt="Profile Image"
        />
        <Box ml={4}>
          <Heading as="h2" size="lg">John Doe</Heading> {/* Replace with actual user name */}
          <Text>@movieLover123</Text> {/* Replace with actual username */}
        </Box>
      </Flex>

      {/* Profile Form */}
      {showForm && (
        <form>
          <Stack spacing={4} mb={6}>
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
      )}

      <Divider my={6} />

      {/* Movies Visited History (Movie Carousel) */}
      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Movies Visited History
      </Heading>
      <MovieCarousel /> {/* Use your own carousel component here */}

      <Divider my={6} />

      {/* Help & Support Section */}
      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Help & Support
      </Heading>
      <Text textAlign="center" mb={4}>
        Need help? Reach out at{' '}
        <a href="mailto:support@movieapp.com">support@movieapp.com</a>.
      </Text>
    </Box>
  );
};

export default Profile;
