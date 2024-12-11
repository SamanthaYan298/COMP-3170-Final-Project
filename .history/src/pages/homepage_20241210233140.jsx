import React, { useState } from 'react';
import { Box, Heading, Button, Flex, Image, useBreakpointValue } from '@chakra-ui/react';
import MovieCarousel from '../components/MovieCarousel';
import CountdownTimer from '../components/CountdownTimer';

const Homepage = () => {
  const allMovies = [
    { id: 1, title: 'Cars', studio: 'Pixar', img: '/images/scale (1).webp' },
    { id: 2, title: "Kiki's Delivery Service", studio: 'Ghibli', img: '/images/kikidelivery.jpg' },
    { id: 3, title: 'Tangled', studio: 'Disney', img: '/images/scale.webp' },
    // more movie data...
  ];

  const [filteredMovies, setFilteredMovies] = useState(allMovies);

  const studios = ['All', 'Disney', 'Pixar', 'Ghibli'];

  const filterMovies = (studio) => {
    if (studio === 'All') {
      setFilteredMovies(allMovies);
    } else {
      setFilteredMovies(allMovies.filter(movie => movie.studio === studio));
    }
  };

  // Make sure upcomingReleaseDate is defined
  const upcomingReleaseDate = '2024-12-25T00:00:00Z'; // Example date, replace with dynamic data

  // If the date is undefined, set a fallback date or handle the error
  if (!upcomingReleaseDate) {
    console.error('Upcoming release date is missing!');
  }

  // Responsive image logic
  const posterSrc = useBreakpointValue({
    base: '/images/mufasa-small.jpg', // mobile
    sm: '/images/mufasa-big.jpeg', // tablet and larger
  });

  return (
    <Box>
      {/* Heading for the Homepage */}
      <Heading as="h1" size="lg" textAlign="center" mt={4} mb={6} padding={35}>
        Animotion
      </Heading>

      {/* Countdown Timer for Upcoming Release */}
      <Box mt={10} mb={6}>
        <Heading as="h3" size="lg" textAlign="center" mb={4} padding={35} color="#d9d1ff">
          Countdown to Upcoming Movie Release
        </Heading>
        {/* Only render CountdownTimer if a valid date exists */}
        {upcomingReleaseDate ? (
          <CountdownTimer releaseDate={upcomingReleaseDate} />
        ) : (
          <div>Release date not available.</div>
        )}
      </Box>

      {/* Movie Banner */}
      <Box mt={10} mb={6}>
        <Image
          src={posterSrc}  // Use the responsive image source
          alt="Upcoming Movie Release"
          width="50%" // Full width for responsiveness
          height="auto"
          objectFit="cover"
          borderRadius="md"
        />
      </Box>

      {/* Movie Carousel - Trending Movies */}
      <Box>
        <MovieCarousel movies={allMovies.slice(0, 4)} />
      </Box>

      {/* Movie Studios Filter */}
      <Box mt={10} mb={6}>
        <Heading as="h3" size="lg" textAlign="center" mb={4} padding={35} color="#d9d1ff">
          Movie Studios
        </Heading>
        <Flex justify="center" gap={6} wrap="wrap">
          {studios.map((studio, index) => (
            <Button
              key={index}
              onClick={() => filterMovies(studio)}
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

      {/* Filtered Movie Carousel */}
      <Box mt={10} mb={6}>
        <Heading as="h3" size="lg" textAlign="center" mb={4} padding={35} color="#d9d1ff">
          Movies
        </Heading>
        <MovieCarousel movies={filteredMovies.length > 0 ? filteredMovies : allMovies.slice(0, 4)} />
      </Box>
    </Box>
  );
};

export default Homepage;
