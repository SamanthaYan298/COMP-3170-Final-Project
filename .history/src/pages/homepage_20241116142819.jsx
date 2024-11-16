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
    { id: 2, title: 'Ratatouille', img: 'https://i.ebayimg.com/images/g/eeoAAOSwH2xjOJ-9/s-l1200.jpg' },
    { id: 3, title: 'The Little Mermaid', img: 'https://images.moviesanywhere.com/3d06cecf13af56b30aae5bb5a5c8758d/028dced9-5b8b-4f7c-aa6e-3a937b0b102c.jpg' },
    { id: 4, title: 'The Wind Rises', img: 'https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_.jpg' },
    { id: 5, title: 'Spirited Away', img: 'https://m.media-amazon.com/images/I/61ON14PVzoL._AC_UF894,1000_QL80_.jpg' },
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
