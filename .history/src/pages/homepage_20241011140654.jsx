import React from 'react';
import { Box, Heading, SimpleGrid, Button, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Homepage = () => {
  
// Trending Movies carousel settings
  const trendingSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const trendingMovies = [
    { id: 1, title: 'Trending Movie 1', img: 'https://m.media-amazon.com/images/I/71eOCcHVtNL._AC_UF1000,1000_QL80_.jpg' },
    { id: 2, title: 'Trending Movie 2', img: '/images/trending2.jpg' },
    { id: 3, title: 'Trending Movie 3', img: '/images/trending3.jpg' },
    { id: 4, title: 'Trending Movie 4', img: '/images/trending4.jpg' },
    { id: 5, title: 'Trending Movie 5', img: '/images/trending5.jpg' },
  ];

  const studios = ['Warner Bros', 'Universal', 'Disney', 'Paramount', 'Sony', '20th Century Fox'];

  return (
    <Box>
      {/* Main Carousel */}
      <Box>
        <Heading as="h1" size="xl" textAlign="center" mt={4} mb={6}>
          Featured Movies
        </Heading>
        <Carousel />
      </Box>

      {/* Movie Studios Buttons */}
      <Box mt={10} mb={6}>
        <Heading as="h2" size="lg" textAlign="center" mb={4}>
          Movie Studios
        </Heading>
        <SimpleGrid columns={[2, null, 3]} spacing={4} maxW="600px" mx="auto">
          {studios.map((studio, index) => (
            <Button key={index} colorScheme="blue" size="lg">
              {studio}
            </Button>
          ))}
        </SimpleGrid>
      </Box>

      {/* Trending Movies Carousel */}
      <Box mt={10} mb={6}>
        <Heading as="h2" size="lg" textAlign="center" mb={4}>
          Trending Movies
        </Heading>
        <Box maxW="1200px" mx="auto">
          <Slider {...trendingSettings}>
            {trendingMovies.map((movie) => (
              <Box key={movie.id} p={2}>
                <Box
                  as="img"
                  src={movie.img}
                  alt={movie.title}
                  borderRadius="md"
                  boxShadow="lg"
                  w="100%"
                  h="300px"
                  objectFit="cover"
                />
                <Text mt={2} textAlign="center" fontSize="lg" fontWeight="bold">
                  {movie.title}
                </Text>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;