import '../App.css';
import React from 'react';
import { Box, Heading, Button, Stack, Divider, Text, Center } from '@chakra-ui/react';
import MovieCarousel from '../components/MovieCarousel';

const Profile = () => {
    const visitedMovies = [
        { id: 1, title: 'Whisper of the Heart', img: '/images/whisper-of-the-heart.png' },
        { id: 2, title: 'The Boy and the Heron', img: '/images/boy-and-heron.png' },
        { id: 3, title: 'My Neighbour Totoro', img: '/images/totoro.jpg' },
        { id: 4, title: 'Kiki\'s Delivery Service', img: '/images/kiki.jpg' },
        { id: 5, title: 'Spirited Away', img: '/images/spirited-away.jpg' },
      ];

  return (
    <div className='profile-container'>
         <div className='top-nav'>
            <svg className='menu' width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2H30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 10.1667H30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 18.3333H30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1>My Profile</h1>
            <svg className='search' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 23L30 30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 14C2 20.6274 7.37258 26 14 26C17.3194 26 20.3242 24.6522 22.4966 22.474C24.6616 20.3034 26 17.308 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
    <Box maxW="600px" mx="auto" p={5}>
      
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
        <Heading as="h2" size="xl" textAlign="center" mt={4} mb={10}>
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
    </div>
  );
};

export default Profile;

