import React, { useState } from 'react';
import { Box, Heading, Button, Divider, Text, Textarea } from '@chakra-ui/react';
import MovieCarousel from '../components/MovieCarousel';
import '../App.css';

const Profile = () => {
  const visitedMovies = [
    { id: 1, title: 'Whisper of the Heart', img: '/images/whisper-of-the-heart.png' },
    { id: 2, title: 'The Boy and the Heron', img: '/images/boy-and-heron.png' },
    { id: 3, title: 'My Neighbour Totoro', img: '/images/totoro.jpg' },
    { id: 4, title: 'Kiki\'s Delivery Service', img: '/images/kiki.jpg' },
    { id: 5, title: 'Spirited Away', img: '/images/spirited-away.jpg' },
  ];

  const [friends, setFriends] = useState(['@animeFan99', '@totoroLover', '@ghibliGuru']);
  const [requests, setRequests] = useState(['@studioGhibliFan']);
  const [showFriends, setShowFriends] = useState(false);

  const handleAddFriend = (newFriend) => {
    setFriends((prevFriends) => [...prevFriends, newFriend]);
    setRequests((prevRequests) =>
      prevRequests.filter((request) => request !== newFriend)
    );
  };

  const toggleFriendsList = () => {
    setShowFriends((prev) => !prev);
  };

  return (
    <div className="profile-container">
         <div className='top-nav'>
            <svg className='menu' width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2H30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 10.1667H30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 18.3333H30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1>My Profile</h1>
            <svg className='search' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 23L30 30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 14C2 20.6274 7.37258 26 14 26C17.3194 26 20.3242 24.6522 22.4966 22.474C24.6616 20.3034 26 17.308 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
    <Box maxW="600px" mx="auto" p={5}></Box>
      <Box maxW="600px" mx="auto" p={5}>
        <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
          <Box
            borderRadius="50%"
            boxSize="150px"
            bg="gray.200"
            bgImage="url('/images/profile-pic.jpeg')"
            bgSize="cover"
            marginBottom="1rem"

          />
          <Box>
            <Heading as="h2" fontSize="26px" mt=".5rem" mb={0.2}>
              Digi Girl🍿
            </Heading>
            <Text as="h3" fontSize="20px" mt={0}>
              @movieLover123
            </Text>
          </Box>
        </Box>
        <Textarea
    placeholder="Animated movie enthusiast, always on the lookout for the next favorite to add to my collection."
    fontSize="22px"
    fontWeight="300"
    resize="none"
    width="80%"
    textAlign="center"
    bg="gray.100"
    p={4}
    borderRadius="md"
  />
        <Divider my={1} />

        <Box display="flex" justifyContent="space-between" alignItems="left" gap={4}>
          {/* Friend Requests Section */}
          <Box flex="1">
            <Heading as="h2" size="lg" mb={10} textAlign="left">
              Friend Requests
            </Heading>
            {requests.length ? (
              requests.map((request) => (
                <Box key={request} mb={4} display="flex" alignItems="center">
  <Text fontSize="18px" fontWeight="600" textAlign="left">
    {request}
  </Text>
  <Button
    backgroundColor="rgba(221, 184, 255, 0.8)"
    onClick={() => handleAddFriend(request)}
    ml={25} // Adjust the spacing between the text and button
  >
    Accept
  </Button>
</Box>
              ))
            ) : (
              <Text textAlign="left">No friend requests</Text>
            )}
          </Box>

          {/* My Friends Section */}
          <Box flex="1" ml={50} textAlign="right">
            <Heading as="h2" size="lg" mb={18} >
              My Friends
            </Heading>
            <Button backgroundColor="rgba(221, 184, 255, 0.8)" onClick={toggleFriendsList} mb={4}>
              {showFriends ? 'Hide Friends List' : 'View Friends List'}
            </Button>
            {showFriends && (
              <Box>
                {friends.map((friend) => (
                  <Text key={friend} mb={2} textAlign="right">
                    {friend}
                  </Text>
                ))}
              </Box>
            )}
          </Box>
        </Box>

        <Divider my={6} />

        <Heading as="h2" size="lg" mt={20} mb={15} textAlign="left">
          Visiting History
        </Heading>
        <MovieCarousel movies={visitedMovies} />
        <Divider my={30} />

        <Box
          display="flex"
          flexDirection="column"
          backgroundColor="rgba(221, 184, 255, 0.8)"
          borderRadius={30}
          width="100%"
          padding={3}
          marginTop={10}
          marginBottom={45}
        >
          <Heading as="h2" size="lg" textAlign="center" mt={10} mb={4}>
            Help & Support
          </Heading>
          <Text textAlign="center" mb={4} fontSize="17.5px" fontWeight="600">
            Need help? Reach out at{' '}
            <a href="mailto:support@movieapp.com">support@movieapp.com</a>.
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Profile;
