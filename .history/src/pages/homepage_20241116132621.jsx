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
    <Box px={[4, 6, 8]} py={[6, 8, 10]}>
      {/* Main Carousel */}
      <Box mb={[8, 10, 12]}>
        <Heading as="h1" size={["lg", "xl", "2xl"]} textAlign="center" mb={[6, 8]}>
          Featured Movies
        </Heading>
        <MovieCarousel movies={trendingMovies} />
      </Box>

      {/* Movie Studios Buttons */}
      <Box mb={[8, 10, 12]}>
        <Heading as="h2" size={["md", "lg", "xl"]} textAlign="center" mb={[4, 6]}>
          Movie Studios
        </Heading>
        <SimpleGrid 
          columns={[2, 3, 4]} 
          spacing={[4, 6]} 
          maxW={["100%", "80%", "60%"]} 
          mx="auto"
        >
          {studios.map((studio, index) => (
            <Button
              key={index}
              bg="rgba(111, 144, 255, 0.8)"
              color="white"
              height={["50px", "60px"]} 
              width={["100px", "120px"]} 
              fontSize={["sm", "md"]}
              borderRadius="lg"
              _hover={{
                bg: "rgba(111, 144, 255, 1)",
              }}
            >
              {studio}
            </Button>
          ))}
        </SimpleGrid>
      </Box>

      {/* Trending Movies Carousel */}
      <Box mb={[8, 10, 12]}>
        <Heading as="h2" size={["md", "lg", "xl"]} textAlign="center" mb={[4, 6]}>
          Trending Movies
        </Heading>
        <MovieCarousel movies={trendingMoviesTwo} />
      </Box>
    </Box>
  );
};

export default Homepage;
