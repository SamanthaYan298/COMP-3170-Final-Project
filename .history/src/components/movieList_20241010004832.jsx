import { Link } from 'react-router-dom';
import { useState } from 'react'
import "../App.css";
import { Box, Heading, Image, Text, SimpleGrid, Card, CardBody, Stack } from "@chakra-ui/react";

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

const MoviesList = () => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
      {movies.map((movie) => (
        <Card key={movie.id} width="120px" height="200px">
          <CardBody>
            <Image
              src={movie.image_url}
              borderRadius='lg'
              width="100px" 
              height="180px"
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{movie.title}</Heading>
              <Text>
                Release Date: {movie.releaseDate}
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                Rating: {movie.rating}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
      

    
    // <div className="bg-white">
    //     <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Trending In</h2>
    //     {movies.map((movie) => (
    //         <div key={movie.id} className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
        
    //         <div className="sm:grid-cols-2">
    //             <div className="group relative">
    //             <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
    //                 <img 
    //                     src={movie.image_url} 
    //                     alt={movie.title} 
    //                     className="h-full w-full object-cover object-center lg:h-full lg:w-full"
    //                 />
    //             </div>
    //             <div className="mt-4 flex justify-between">
    //                 <div>
    //                 <h3 className="text-sm text-gray-700">
    //                     <a href="#">
    //                     <span aria-hidden="true" className="absolute inset-0"></span>
    //                     {movie.title}
    //                     </a>
    //                 </h3>
    //                 <p className="mt-1 text-sm text-gray-500">Release Date: {movie.releaseDate}</p>
    //                 </div>
    //                 <p className="text-sm font-medium text-gray-900">Rating: {movie.rating}</p>
    //             </div>
    //             </div>
    //         </div>
    //         </div>
    //     ))}
    // </div>

    )

}

export default MoviesList;
