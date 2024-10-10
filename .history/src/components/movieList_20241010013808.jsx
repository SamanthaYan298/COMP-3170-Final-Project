import { Link } from 'react-router-dom';
import { useState } from 'react'
import "../App.css";
import { Box, Heading, Image, Text, SimpleGrid, Card, CardBody, Stack } from "@chakra-ui/react";


const movies = [
  {
    id: 1,
    title: 'Castle in the Sky',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Castle_in_the_Sky_%281986%29.png',
    info: '1986 · 124 mins',
    rating: 8.5,
  },
  {
    id: 2,
    title: 'My Neighbor Totoro',
    image_url: 'https://m.media-amazon.com/images/M/MV5BYWM3MDE3YjEtMzIzZC00ODE5LTgxNTItNmUyMTBkM2M2NmNiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    info: '1988 · 86 mins',
    rating: 7.2,
  },
  {
    id: 3,
    title: 'Grave of the Fireflies',
    image_url: 'https://img.fruugo.com/product/8/95/14465958_max.jpg',
    info: '1988 · 86 mins',
    rating: 7.2,
  },
  {
    id: 4,
    title: 'Kiki\'s Delivery Service',
    image_url: 'https://m.media-amazon.com/images/M/MV5BOTFhYWI1NGUtZWFhZS00MTdkLWIzZTItMDBhNWNiZDNlMjYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    info: '1989 · 102 mins',
    rating: 7.9,
  },
  {
    id: 5,
    title: 'Only Yesterday',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/4/46/OYpost.jpg',
    info: '1991 · 118 mins',
    rating: 7.8,
  },
  {
    id: 6,
    title: 'Whisper of the Heart',
    image_url: 'https://play-lh.googleusercontent.com/_Ws1rTGycJxK0536RF59qNfqcfdVQ4YP1Cyz_jneIxz73NL7wncByGBIpJNgJBpbVgg2e2NU3reMccJrbA',
    info: '1995 · 111 mins',
    rating: 8.0,
  },
  {
    id: 7,
    title: 'Princess Mononoke',
    image_url: 'https://m.media-amazon.com/images/I/51Xl0K7PlUL._AC_UF894,1000_QL80_.jpg',
    info: '1997 · 133 mins',
    rating: 8.4,
  },
  {
    id: 8,
    title: 'Spirited Away',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/3/30/Spirited_Away.jpg',
    info: '2001 · 125 mins',
    rating: 8.6,
  },
  {
    id: 9,
    title: 'Howl\'s Moving Castle',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/3/30/Howls_Moving_Castle.jpg',
    info: '2004 · 119 mins',
    rating: 8.2,
  },
  {
    id: 10,
    title: 'From Up on Poppy Hill',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/b/b6/From_Up_on_Poppy_Hill_poster.jpg',
    info: '2011 · 92 mins',
    rating: 7.7,
  },
  {
    id: 11,
    title: 'The Wind Rises',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/e/ed/The_Wind_Rises_poster.jpg',
    info: '2013 · 126 mins',
    rating: 7.8,
  },
  {
    id: 12,
    title: 'The Boy and the Heron',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/8/8d/The_Boy_and_the_Heron_poster.jpg',
    info: '2023 · 124 mins',
    rating: 8.2,
  },
];

const MoviesList = () => {
  return (
    <SimpleGrid templateColumns='repeat(auto-fill, minmax(200px, 1fr))' spacing={4}>
      {movies.map((movie) => (
        <Card key={movie.id} className='cards'>
          <CardBody>
            <Image
              src={movie.image_url}
              borderRadius='1em'
              width="180px" 
              height="260px"
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'className='movie-title'>
                <a href="#" className='title-sm'>{movie.title}</a>
              </Heading>
              <Text className='movie-title font'>
                {movie.info}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
    )

}

export default MoviesList;
