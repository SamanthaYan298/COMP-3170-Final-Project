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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true, 
    centerPadding: '15px', 
  };

  return (
    <Box maxW="900px" mx="auto">
      <Slider {...trendingSettings}>
        {movies.map((movie) => (
          <Box key={movie.id} p={2} className="movie-container">
            <Box
              as="img"
              className="movie-img"
              alt={movie.title}
              borderRadius="15px"
              boxShadow="lg"
              w="100%"
              h="250px"
              objectFit="cover"
              src={movie.img} 
            />
            <Text mt={10} textAlign="center" fontSize="20px" fontWeight="bold">
              {movie.title}
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default MovieCarousel;
