import React from 'react';
import Slider from 'react-slick';
import { Box, Text } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const MovieCarousel = ({ movies }) => {
  // Trending Movies carousel settings
  const trendingSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true, 
    centerPadding: '15px', 
  };

  return (
    <Box>
      <Slider {...trendingSettings}>
        {movies.map((movie) => (
          <Box key={movie.id} p={2}>
            <Box
              as="img"
              src={movie.img}
              alt={movie.title}
              borderRadius="md={4}"
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
  );
};

export default MovieCarousel;
