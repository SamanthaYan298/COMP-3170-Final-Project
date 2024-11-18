import React, { useState } from 'react';
import { Box, Heading, Button, Divider, Text } from '@chakra-ui/react';
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
      <Box maxW="600px" mx="auto" p={5}>
        <Box display="flex" justifyContent="center">
          <Box
            borderRadius="50%"
            boxSize="130px"
            bg="gray.200"
            bgImage="url('/images/profile-pic.jpeg')"
            bgSize="cover"
            margin="1rem"
          />
          <Box ml={4}>
            <Heading as="h2" fontSize="26px" mt="2.5rem">
              Digi Girl🍿
            </Heading>
            <Text as="h3" fontSize="20px" mt="0.6">
              @movieLover123
            </Text>
          </Box>
        </Box>
        <Text as="h4" fontSize="22px" mt="0.6" fontWeight="300">
          Animated movie enthusiast, always on the lookout for the next favorite to add to my collection.
        </Text>
        <Divider my={6} />

        <Box display="flex" justifyContent="space-between" alignItems="left" gap={4}>
          {/* Friend Requests Section */}
          <Box flex="1">
            <Heading as="h2" size="lg" mb={4} textAlign="left">
              Friend Requests
            </Heading>
            {requests.length ? (
              requests.map((request) => (
                <Box key={request} mb={4} display="flex" alignItems="left">
                  <Text fontSize="18px" fontWeight="600" mb={2}  textAlign="left" >
                    {request}
                  </Text>
                  <Button
                    backgroundColor="rgba(221, 184, 255, 0.8)"
                    size="md"
                    onClick={() => handleAddFriend(request)}
                    ml={25}
                  >
                    Accept
                  </Button>
                </Box>
              ))
            ) : (
              <Text>No friend requests</Text>
            )}
          </Box>

          {/* My Friends Section */}
          <Box flex="1">
            <Heading as="h2" size="lg" mb={4} textAlign="left">
              My Friends
            </Heading>
            <Button backgroundColor="rgba(221, 184, 255, 0.8)" onClick={toggleFriendsList} mb={4} textAlign="left" display="block">
              {showFriends ? 'Hide Friends List' : 'View Friends List'}
            </Button>
            {showFriends && (
              <Box>
                {friends.map((friend) => (
                  <Text key={friend} mb={2}>
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
        <Divider my={6} />

        <Box
          display="flex"
          flexDirection="column"
          backgroundColor="rgba(221, 184, 255, 0.8)"
          borderRadius={30}
          width="100%"
          padding={3}
          marginTop="2rem"
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
