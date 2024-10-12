import { Link } from 'react-router-dom';
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
  // ... other movie objects
];

const MoviesList = () => {
  return (
    <SimpleGrid
      columns={{ base: 2, sm: 3, md: 4 }} // Adjust number of columns for different breakpoints
      spacing={4}
      padding={4}
    >
      {movies.map((movie) => (
        <Card key={movie.id} className='cards'>
          <CardBody>
            <Image
              src={movie.image_url}
              borderRadius='1em'
              width="180px" 
              height="260px"
              objectFit="cover" // Ensures the image fits nicely
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md' className='movie-title'>
                <Link to="#" className='title-sm'>{movie.title}</Link>
              </Heading>
              <Text className='movie-title font'>
                {movie.info}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default MoviesList;
