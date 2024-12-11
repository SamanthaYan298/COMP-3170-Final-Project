import React, { useState } from 'react';
import { Box, Heading, Button, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import MovieCarousel from '../components/MovieCarousel'; 

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
  const [searchQuery, setSearchQuery] = useState('');

  const studios = ['All', 'Disney', 'Pixar', 'Ghibli'];

  const filterMovies = (studio) => {
    if (studio === 'All') {
      setFilteredMovies(allMovies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase())));
    } else {
      setFilteredMovies(allMovies.filter(movie => movie.studio === studio && movie.title.toLowerCase().includes(searchQuery.toLowerCase())));
    }
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setFilteredMovies(allMovies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <Box>
      {/* Trending Movies */}
      <Box>
        <Heading as="h2" size="lg" textAlign="center" mt={4} mb={6} padding={35}>
          Animotion
        </Heading>
        <MovieCarousel movies={allMovies.slice(0, 4)} />
      </Box>

      {/* Search Bar */}
      <Box mt={6} mb={6} padding={5} textAlign="center">
        <InputGroup maxWidth="500px" margin="0 auto">
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={handleSearchChange}
            borderRadius="full"
            bg="gray.100"
            _focus={{ borderColor: 'purple.400' }}
            _placeholder={{ color: 'gray.500' }}
            height="50px"
            fontSize="16px"
            boxShadow="lg"
          />
        </InputGroup>
      </Box>

      {/* Movie Studios */}
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

      {/* Filtered Movies */}
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
