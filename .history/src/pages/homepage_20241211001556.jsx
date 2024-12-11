import React, { useState } from 'react';
import { Box, Heading, Button, Flex, Image } from '@chakra-ui/react';
import MovieCarousel from '../components/MovieCarousel';
import CountdownTimer from '../components/CountdownTimer';

const Homepage = () => {
  const allMovies = [
    { id: 1, title: 'Cars', studio: 'Pixar', img: '/images/scale (1).webp' },
    { id: 2, title: "Kiki's Delivery Service", studio: 'Ghibli', img: '/images/kikidelivery.jpg' },
    { id: 3, title: 'Tangled', studio: 'Disney', img: '/images/scale.webp' },
    { id: 4, title: 'Princess Mononoke', studio: 'Ghibli', img: '/images/princess.jpg' },
    { id: 5, title: 'My Neighbour Totoro', studio: 'Ghibli', img: '/images/totoro.jpg' },
    { id: 6, title: 'Ratatouille', studio: 'Pixar', img: 'https://i.ebayimg.com/images/g/eeoAAOSwH2xjOJ-9/s-l1200.jpg' },
    { id: 7, title: 'The Little Mermaid', studio: 'Disney', img: 'https://images.moviesanywhere.com/3d06cecf13af56b30aae5bb5a5c8758d/028dced9-5b8b-4f7c-aa6e-3a937b0b102c.jpg' },
    { id: 8, title: 'The Wind Rises', studio: 'Ghibli', img: 'https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_.jpg' },
    { id: 9, title: 'Spirited Away', studio: 'Ghibli', img: 'https://m.media-amazon.com/images/I/61ON14PVzoL._AC_UF894,1000_QL80_.jpg' },
    { id: 10, title: 'The Lion King', studio: 'Disney', img: 'https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg' },
    { id: 11, title: 'Mulan', studio: 'Disney', img: 'https://lumiere-a.akamaihd.net/v1/images/p_mulan_20529_83d3893a.jpeg?region=0%2C0%2C513%2C810' },
    { id: 12, title: 'Brave', studio: 'Pixar', img: 'https://lumiere-a.akamaihd.net/v1/images/p_brave_20488_9e833e2b.jpeg' },
    { id: 13, title: 'Ratatouille', studio: 'Pixar', img: 'https://i.ebayimg.com/images/g/eeoAAOSwH2xjOJ-9/s-l1200.jpg' },
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

  const upcomingReleaseDate = '2024-12-2T00:00:00Z';


  return (
    <Box>
      {/* Heading for the Homepage */}
      <Heading as="h1" size="xl" textAlign="center" mt={5} mb={6} padding={10}>
        Animotion
      </Heading>

      {/* Countdown Timer for Upcoming Release */}
      <Box mt={10} mb={6}>
        <CountdownTimer releaseDate={upcomingReleaseDate} />
      </Box>

      {/* Movie Banner */}
      <Box mt={10} mb={6}>
        <Image
          src='/images/mufasa-small.jpg' 
          alt="Upcoming Movie Release"
          width="65%"
          height="auto"
          objectFit="cover"
          borderRadius="md"
          className="responsive-image" 
        />
      </Box>

      {/* Movie Carousel - Trending Movies */}
      <Box mt={10} mb={6}>
        <Heading as="h2" size="lg" textAlign="center" mb={4} padding={35} color="#d9d1ff">
         Trending Movies
        </Heading>
        <MovieCarousel movies={allMovies.slice(0, 4)} />
      </Box>

      {/* Movie Studios Filter */}
      <Box mt={10} mb={6}>
        <Heading as="h2" size="lg" textAlign="center" mb={4} padding={35} color="#d9d1ff">
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
        <Heading as="h2" size="lg" textAlign="center" mb={4} padding={35} color="#d9d1ff">
          Movies
        </Heading>
        <MovieCarousel movies={filteredMovies} />
      </Box>
    </Box>
  );
};

export default Homepage;
