import { useState } from 'react';
import "../App.css";
import { Box, Heading, Image, Text, SimpleGrid, Card, CardBody, Stack, Button } from "@chakra-ui/react";
import { FaBookmark } from 'react-icons/fa';

const initialMovies = [
    { id: 1, title: 'The Little Mermaid', image_url: 'https://images.moviesanywhere.com/3d06cecf13af56b30aae5bb5a5c8758d/028dced9-5b8b-4f7c-aa6e-3a937b0b102c.jpg', info: '1989 · 83 mins', rating: 7.3 },
    { id: 2, title: 'Tangled', image_url: 'https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_FMjpg_UX1000_.jpg', info: '2010 · 100 mins', rating: 7.7 },
    { id: 3, title: 'Cars', image_url: 'https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg', info: '2006 · 117 mins', rating: 7.2 },
    { id: 4, title: 'Ratatouille', image_url: 'https://i.ebayimg.com/images/g/eeoAAOSwH2xjOJ-9/s-l1200.jpg', info: '2007 · 111 mins', rating: 8.1 },
    { id: 5, title: 'Brave', image_url: 'https://lumiere-a.akamaihd.net/v1/images/p_brave_20488_9e833e2b.jpeg', info: '2012 · 93 mins', rating: 7.1 },
    { id: 6, title: 'Maleficent', image_url: 'https://images.moviesanywhere.com/5fa9431755bcbdf9971417e8f8e86af2/1f2c00bb-d7b6-412f-915f-65c9267d7a4d.jpg', info: '2014 · 87 mins', rating: 6.9 },
    { id: 7, title: 'Ponyo', image_url: 'https://m.media-amazon.com/images/M/MV5BZDkzMzQ5ZmQtOTA3MC00MjhiLTk5M2UtNzk0MjEzZmVjN2UxXkEyXkFqcGc@._V1_.jpg', info: '2008 · 103 mins', rating: 7.6 },
    { id: 8, title: 'Spirited Away', image_url: 'https://m.media-amazon.com/images/I/61ON14PVzoL._AC_UF894,1000_QL80_.jpg', info: '2001 · 125 mins', rating: 8.6 },
    { id: 9, title: 'The Lion King', image_url: 'https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg', info: '1994 · 88 mins', rating: 8.5 },
    { id: 10, title: 'From Up on Poppy Hill', image_url: 'https://upload.wikimedia.org/wikipedia/en/c/c9/From_Up_on_Poppy_Hill.png', info: '2011 · 92 mins', rating: 7.7 },
    { id: 11, title: 'Mulan', image_url: 'https://lumiere-a.akamaihd.net/v1/images/p_mulan_20529_83d3893a.jpeg?region=0%2C0%2C513%2C810', info: '1998 · 88 mins', rating: 7.7 },
    { id: 12, title: 'Pocahontas', image_url: 'https://lumiere-a.akamaihd.net/v1/images/p_pocahontas_19873_d84f7162.jpeg', info: '1995 · 81 mins', rating: 6.7 },
];

const MovieListWithRemoveButton = () => {
  const [movies, setMovies] = useState(initialMovies);

  const handleRemove = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <SimpleGrid templateColumns='repeat(auto-fill, minmax(200px, 1fr))' spacing={4}>
      {movies.map((movie) => (
        <Card key={movie.id} className='cardsWRB'>
          <CardBody>
            <Image src={movie.image_url} borderRadius='1em' width="180px" height="260px" />
            <Stack mt='6' spacing='3'>
              <Heading size='md' className='movie-title-WRB'>
                <a href="#" className='title-sm-WRB'>{movie.title}</a>
              </Heading>
              <Text className='movie-title font-WRB'>{movie.info}</Text>
              <Button
                className="remove-btn"
                leftIcon={<FaBookmark />}
                colorScheme="purple"
                variant="solid"
                onClick={() => handleRemove(movie.id)}
                sx={{
                  fontSize: { base: '12px', md: '14px', lg: '16px' },
                  padding: { base: '4', md: '6', lg: '8' },
                }}
              >
                Remove
              </Button>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export default MovieListWithRemoveButton;