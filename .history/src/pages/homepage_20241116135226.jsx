import React from 'react';
import { Box, Heading, SimpleGrid, Button } from '@chakra-ui/react';
import MovieCarousel from '../components/MovieCarousel'; 

const Homepage = () => {
  const trendingMovies = [
    { id: 1, title: 'Cars', img: '/images/scale (1).webp' },
    { id: 2, title: "Kiki's Delivery Service", img: '/images/kikidelivery.jpg' },
    { id: 3, title: 'Tangled', img: '/images/scale.webp' },
    { id: 4, title: 'Princess Mononoke', img: '/images/princess.jpg' },
  ];

  const studios = ['Disney', 'Pixar', 'Ghibli', 'Paramount', 'Sony', 'Dreamworks'];

  const trendingMoviesTwo = [
    { id: 1, title: 'Trending Movie 1', img: '/images/totoro.jpg' },
    { id: 2, title: 'Trending Movie 2', img: '/images/trending2.jpg' },
    { id: 3, title: 'Trending Movie 3', img: '/images/trending3.jpg' },
    { id: 4, title: 'Trending Movie 4', img: '/images/trending4.jpg' },
    { id: 5, title: 'Trending Movie 5', img: '/images/trending5.jpg' },
  ];

  return (
    <Box>
      {/* Main Carousel */}
      <Box>
        <Heading as="h1" size="lg" textAlign="center" mt={4} mb={6} padding={35}>
          Amimotion
        </Heading>
        <MovieCarousel movies={trendingMovies} /> 
      </Box>

      {/* Movie Studios Buttons */}
      <Box mt={10} mb={6}>
        <Heading as="h2" size="lg" textAlign="center" mb={4} padding={35}>
          Movie Studios
        </Heading>
        <SimpleGrid columns={[2, null, 3]} spacing={4} rowGap={10} maxW="600px" mx="auto">
          {studios.map((studio, index) => (
            <Button
            key={index}
            bg="rgba(221, 184, 255, 0.8)" 
            color="white"
            height="60px" 
            width="120px" 
            fontSize="md"
            borderRadius="md"
            _hover={{
              bg: "rgba(221, 184, 255, 1)",
            }}
            >
              {studio}
            </Button>
          ))}
        </SimpleGrid>
      </Box>

      {/* Trending Movies Carousel */}
      <Box mt={10} mb={6}>
        <Heading as="h2" size="lg" textAlign="center" mb={4} padding={35}>
          Trending Movies
        </Heading>
        <MovieCarousel movies={trendingMoviesTwo} /> 
      </Box>
    </Box>
  );
};

export default Homepage;
