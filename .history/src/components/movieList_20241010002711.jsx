import { Link } from 'react-router-dom';
import { useState } from 'react'
import "../App.css";
import { Box, Heading, Image, Text, SimpleGrid, Card, CardBody } from "@chakra-ui/react";

const movies = [
  {
    id: 1,
    title: 'Movie Title 1',
    image_url: 'https://via.placeholder.com/300x450',
    releaseDate: '2024-01-01',
    rating: 8.5,
  },
  {
    id: 2,
    title: 'Movie Title 2',
    image_url: 'https://via.placeholder.com/300x450',
    releaseDate: '2024-02-01',
    rating: 7.2,
  }
];

const MoviesList = ({ movies }) => {
  return (
    <Box bg="white" py={16}>
      <Heading as="h2" size="lg" textAlign="center" mb={8}>
        Trending In
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} spacing={6} maxW="2xl" mx="auto">
        {movies.map((movie) => (
          <Card key={movie.id} borderRadius="md" overflow="hidden" boxShadow="md">
            <CardBody>
              <Box position="relative">
                <Image
                  src={movie.image_url}
                  alt={movie.title}
                  objectFit="cover"
                  borderRadius="md"
                  height={{ base: "auto", sm: "250px", lg: "300px" }}
                />
              </Box>
              <Box mt={4} display="flex" justifyContent="space-between">
                <Box>
                  <Text fontSize="sm" color="gray.700">
                    <a href="#">
                      {movie.title}
                    </a>
                  </Text>
                  <Text mt={1} fontSize="sm" color="gray.500">
                    Release Date: {movie.releaseDate}
                  </Text>
                </Box>
                <Text fontSize="sm" fontWeight="medium" color="gray.900">
                  Rating: {movie.rating}
                </Text>
              </Box>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MoviesList;
