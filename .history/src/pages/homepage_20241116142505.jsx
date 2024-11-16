import React from 'react';
import { Box, Heading, Button, Flex } from '@chakra-ui/react';
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
    { id: 1, title: 'My Neighbout Totoro', img: '/images/totoro.jpg' },
    { id: 2, title: 'Ratatouille', img: 'https://m.media-amazon.com/images/I/51Xl0K7PlUL._AC_UF894,1000_QL80_.jpg' },
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

      {/* Movie Studios */}
      <Box mt={10} mb={6}>
        <Heading as="h2" size="lg" textAlign="center" mb={4} padding={35} color="#d9d1ff">
          Movie Studios
        </Heading>
        <Flex justify="center" gap={18} wrap="wrap" direction="row">
          {studios.map((studio, index) => (
            <Button
              key={index}
              bg="rgba(221, 184, 255, 0.8)" 
              color="white"
              height="70px" 
              width="120px" 
              fontSize="18px"
              fontWeight="bold"
              borderRadius="md"
              _hover={{
                bg: "rgba(221, 184, 255, 1)",
              }}
            >
              {studio}
            </Button>
          ))}
        </Flex>
      </Box>

      {/* Trending Movies Carousel */}
      <Box mt={10} mb={6}>
        <Heading as="h2" size="lg" textAlign="center" mb={4} padding={35} color="#d9d1ff">
          Trending Movies
        </Heading>
        <MovieCarousel movies={trendingMoviesTwo} /> 
      </Box>
    </Box>
  );
};

export default Homepage;
