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
    image_url: 'https://via.placeholder.com/300x450',
    info: '1988 · 86 mins',
    rating: 7.2,
  }
];

const MoviesList = () => {
  return (
    <SimpleGrid templateColumns='repeat(auto-fill, minmax(200px, 1fr))' spacing={4}>
      {movies.map((movie) => (
        <Card key={movie.id}>
          <CardBody>
            <Image
              src={movie.image_url}
              borderRadius='lg'
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
