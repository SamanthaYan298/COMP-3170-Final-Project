import '../App.css';
import React from 'react';
import { Box, Heading, Button, Stack, Divider, Text, Center } from '@chakra-ui/react';
import MovieCarousel from '../components/MovieCarousel';

const Profile = () => {
    const visitedMovies = [
        { id: 1, title: 'Princess Mononoke', img: '/images/princess-monoke.jpg' },
        { id: 2, title: 'The Boy and the Heron', img: '/images/boy-and-heron.png' },
        { id: 3, title: 'My Neighbour Totoro', img: '/images/totoro.jpg' },
        { id: 4, title: 'Kiki\'s Delivery Service', img: '/images/kiki.jpg' },
        { id: 5, title: 'Trending Movie 5', img: '/images/trending5.jpg' },
      ];

  return (
    <Box maxW="600px" mx="auto" p={5}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        My Profile
      </Heading>
  {/* static profile circle */}
        <Box
          borderRadius="50"
          boxSize="100px"
          bg="white"
          marginLeft="10rem"
          marginTop="1.5rem"
        />
        <Box ml={4}>

          <Heading as="h2" fontSize="26px" marginBottom="0">Digi Girl🍿</Heading> {/* Replace with actual user name */}
          <Text as="h3" fontSize="20px" marginTop="0.6">@movieLover123</Text> {/* Replace with actual username */}
        </Box>
   
      <Divider my={6} />
     {/* visited Carousel */}
     <Box>
        <Heading as="h2" size="xl" textAlign="center" mt={4} mb={6}>
        Visiting History
        </Heading>
        <MovieCarousel movies={visitedMovies} /> 
      </Box>
        
      <Divider my={6} />

      <Heading as="h2" size="lg" textAlign="center" marginTop="2rem" marginBottom="0" mb={4}>
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

