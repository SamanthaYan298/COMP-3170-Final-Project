import { Link } from 'react-router-dom';
import "../App.css";
import { Box, Heading, Image, Text, SimpleGrid, Card, CardBody, Stack, Button } from "@chakra-ui/react";

const MovieList = ({ filter }) => {
  const [sortOrder, setSortOrder] = useState('asc');
  const movies = [
    {
      id: 1,
      title: 'Castle in the Sky',
      image_url: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Castle_in_the_Sky_%281986%29.png',
      info: '1986 · 124 mins',
      rating: 8.5,
      studio: 'Studio Ghibli',
    },
    {
      id: 2,
      title: 'Tangled',
      image_url: 'https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_FMjpg_UX1000_.jpg',
      info: '2010 · 100 mins',
      rating: 7.7,
      studio: 'Walt Disney Animation Studios',
    },
    {
      id: 3,
      title: "Kiki's Delivery Service",
      image_url: 'https://m.media-amazon.com/images/M/MV5BOTFhYWI1NGUtZWFhZS00MTdkLWIzZTItMDBhNWNiZDNlMjYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      info: '1989 · 102 mins',
      rating: 7.9,
      studio: 'Studio Ghibli',
    },
    {
      id: 4,
      title: 'Ratatouille',
      image_url: 'https://i.ebayimg.com/images/g/eeoAAOSwH2xjOJ-9/s-l1200.jpg',
      info: '2007 · 111 mins',
      rating: 8.1,
      studio: 'Pixar Animation Studios',
    },
    {
      id: 5,
      title: 'Brave',
      image_url: 'https://lumiere-a.akamaihd.net/v1/images/p_brave_20488_9e833e2b.jpeg',
      info: '2012 · 93 mins',
      rating: 7.1,
      studio: 'Pixar Animation Studios',
    },
    {
      id: 6,
      title: 'Only Yesterday',
      image_url: 'https://upload.wikimedia.org/wikipedia/en/4/46/OYpost.jpg',
      info: '1991 · 118 mins',
      rating: 7.8,
      studio: 'Studio Ghibli',
    },
    {
      id: 7,
      title: 'The Lion King',
      image_url: 'https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg',
      info: '1994 · 88 mins',
      rating: 8.5,
      studio: 'Walt Disney Animation Studios',
    },
    {
      id: 8,
      title: 'Princess Mononoke',
      image_url: 'https://m.media-amazon.com/images/I/51Xl0K7PlUL._AC_UF894,1000_QL80_.jpg',
      info: '1997 · 133 mins',
      rating: 8.4,
      studio: 'Studio Ghibli',
    },
    {
      id: 9,
      title: 'Mulan',
      image_url: 'https://lumiere-a.akamaihd.net/v1/images/p_mulan_20529_83d3893a.jpeg?region=0%2C0%2C513%2C810',
      info: '1998 · 88 mins',
      rating: 7.7,
      studio: 'Walt Disney Animation Studios',
    },
    {
      id: 10,
      title: 'Spirited Away',
      image_url: 'https://m.media-amazon.com/images/I/61ON14PVzoL._AC_UF894,1000_QL80_.jpg',
      info: '2001 · 125 mins',
      rating: 8.6,
      studio: 'Studio Ghibli',
    },
    {
      id: 11,
      title: "Howl's Moving Castle",
      image_url: 'https://resizing.flixster.com/5MzJJLj-uhEv1FgWtuRAtm3OJT0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p36095_p_v8_ae.jpg',
      info: '2004 · 119 mins',
      rating: 8.2,
      studio: 'Studio Ghibli',
    },
    {
      id: 12,
      title: 'Pocahontas',
      image_url: 'https://lumiere-a.akamaihd.net/v1/images/p_pocahontas_19873_d84f7162.jpeg',
      info: '1995 · 81 mins',
      rating: 6.7,
      studio: 'Walt Disney Animation Studios',
    },
    {
      id: 13,
      title: 'From Up on Poppy Hill',
      image_url: 'https://upload.wikimedia.org/wikipedia/en/c/c9/From_Up_on_Poppy_Hill.png',
      info: '2011 · 92 mins',
      rating: 7.7,
      studio: 'Studio Ghibli',
    },
    {
      id: 14,
      title: 'The Wind Rises',
      image_url: 'https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_.jpg',
      info: '2013 · 126 mins',
      rating: 7.8,
      studio: 'Studio Ghibli',
    },
    {
      id: 15,
      title: 'The Boy and the Heron',
      image_url: 'https://m.media-amazon.com/images/S/pv-target-images/bcf6eb4b77050e9cb02ca3ae0b9939fc18f897c5a36344e74aad1b4f2942b89e.jpg',
      info: '2023 · 124 mins',
      rating: 8.2,
      studio: 'Studio Ghibli',
    },
  ];

  const filteredMovies = movies.filter(movie => {
    if (filter === 'low') {
      return movie.rating < 8;
    } else if (filter === 'high') {
      return movie.rating >= 8;
    } else if (filter === 'Studio Ghibli' || filter === 'Pixar Animation Studios' || filter === 'Walt Disney Animation Studios') {
      return movie.studio === filter;
    } else {
      return true;
    }
  });

  const sortedMovies = filteredMovies.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <Box>
      <Button onClick={() => setSortOrder('asc')} mr={4}>⬆️</Button>
      <Button onClick={() => setSortOrder('desc')} >⬇️</Button>
      <SimpleGrid templateColumns="repeat(auto-fill, minmax(175px, 2fr))" spacing={10}>
        {filteredMovies.map((movie) => (
          <Card key={movie.id} className="cards">
            <CardBody>
              <Image
                src={movie.image_url}
                borderRadius="1em"
                width="180px"
                height="260px"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" className="movie-title">
                  <Link
                    to={{
                      pathname: `/movieInfo`,
                    }}
                    state={{ movie }}
                    className="title-sm"
                  >
                    {movie.title}
                  </Link>
                </Heading>
                <Text className="movie-title font">
                  {movie.info}
                </Text>
                <Text className="movie-title font">
                  ⭐ {movie.rating} / 10
                </Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default MovieList;