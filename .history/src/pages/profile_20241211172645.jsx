import React, { useState } from 'react';
import { Box, Heading, Button, Divider, Text, Textarea, Input, Icon } from '@chakra-ui/react';
import MovieCarousel from '../components/MovieCarousel';
import '../App.css';
import { EditIcon } from '@chakra-ui/icons';

const Profile = () => {
  const visitedMovies = [
    { id: 1, title: 'Whisper of the Heart', img: '/images/whisper-of-the-heart.png' },
    { id: 2, title: 'The Boy and the Heron', img: '/images/boy-and-heron.png' },
    { id: 3, title: 'My Neighbour Totoro', img: '/images/totoro.jpg' },
    { id: 4, title: "Kiki's Delivery Service", img: '/images/kiki.jpg' },
    { id: 5, title: 'Spirited Away', img: '/images/spirited-away.jpg' },
  ];

  const [friends, setFriends] = useState(['@animeFan99', '@totoroLover', '@ghibliGuru']);
  const [requests, setRequests] = useState(['@studioGhibliFan']);
  const [showFriends, setShowFriends] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Digi Girl🍿',
    username: '@movieLover123',
    description: 'Animated movie enthusiast, always on the lookout for the next favorite to add to my collection. Add me as a friend!',
  });
  const [tempProfile, setTempProfile] = useState({ ...profile });

  // Accept a friend request
  const handleAddFriend = (newFriend) => {
    setFriends((prevFriends) => [...prevFriends, newFriend]);
    setRequests((prevRequests) => prevRequests.filter((request) => request !== newFriend));
  };

  // Decline a friend request
  const handleDeclineRequest = (declinedRequest) => {
    setRequests((prevRequests) => prevRequests.filter((request) => request !== declinedRequest));
  };

  // Toggle visibility of the friends list
  const toggleFriendsList = () => {
    setShowFriends((prev) => !prev);
  };

  // Edit profile input change handler
  const handleInputChange = (field, value) => {
    setTempProfile({ ...tempProfile, [field]: value });
  };

  // Save changes to profile
  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
  };

  // Cancel profile edits
  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="top-nav">
        <svg
          className="menu"
          width="32"
          height="20"
          viewBox="0 0 32 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 2H30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 10.1667H30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 18.3333H30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h1>My Profile</h1>
        <svg
          className="search"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23 23L30 30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M2 14C2 20.6274 7.37258 26 14 26C17.3194 26 20.3242 24.6522 22.4966 22.474C24.6616 20.3034 26 17.308 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14Z"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Box maxW="600px" mx="auto" p={5}>
        {/* Profile Info Section */}
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
            {isEditing ? (
              <>
                <Input
                  value={tempProfile.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Name"
                  mt={2}
                />
                <Input
                  value={tempProfile.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  placeholder="Username"
                  mt={2}
                />
              </>
            ) : (
              <>
                <Heading as="h2" fontSize="26px" mt=".5rem" mb={0.2}>
                  {profile.name}
                </Heading>
                <Text as="h3" fontSize="20px" mt={0}>
                  {profile.username}
                </Text>
              </>
            )}
          </Box>
        </Box>
        
        <Box display="flex" justifyContent="center" mb={2}>
  {!isEditing && (
    <Button
      backgroundColor="rgba(221, 184, 255, 0.8)"
      fontSize="18px"
      onClick={() => setIsEditing(true)}
      leftIcon={<EditIcon boxSize="20px" />}
      iconSpacing="0"
      p="6px"
    />
  )}
</Box>
        {/* Profile Description */}
        {isEditing ? (
          <Textarea
            value={tempProfile.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            fontSize="16px"
            fontWeight="300"
            resize="none"
            width="100%"
            textAlign="left"
            borderRadius={10}
            bg="white"
            color="black"
            p={3}
          />
        ) : (
          <Text fontSize="18px" fontWeight="400">{profile.description}</Text>
        )}
        <Divider my={1} />
        
        {isEditing && (
          <Box display="flex" justifyContent="space-between" mt={4}>
            <Button colorScheme="green" onClick={handleSave}>Save</Button>
            <Button colorScheme="red" onClick={handleCancel}>Cancel</Button>
          </Box>
        )}
        <Divider my={6} />

        {/* Friend Requests Section */}
        <Box flex="1">
          <Heading as="h2" size="lg" mb={0} textAlign="center">
            Friend Requests
          </Heading>
          {requests.length ? (
            requests.map((request) => (
              <Box
                key={request}
                mb={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Text fontSize="18px" fontWeight="600" textAlign="left">
                  {request}
                </Text>
                <Box display="flex" alignItems="center">
                  <Button
                    backgroundColor="rgba(221, 184, 255, 0.8)"
                    onClick={() => handleAddFriend(request)}
                    fontSize="18px"
                    mr={6}
                  >
                    Accept
                  </Button>
                  <Button
                    backgroundColor="rgba(150, 0, 10, 0.8)"
                    onClick={() => handleDeclineRequest(request)}
                    fontSize="18px"
                  >
                    Decline
                  </Button>
                </Box>

              </Box>
            ))
          ) : (
            <Text textAlign="left">No friend requests</Text>
          )}
        </Box>

        {/* Friends List Section */}
        <Box flex="1" textAlign="left">
          <Heading as="h2" size="lg" mb={18}>
            My Friends
          </Heading>
          <Button
            backgroundColor="rgba(221, 184, 255, 0.8)"
            fontSize="18px"
            onClick={toggleFriendsList}
            mb={4}
          >
            {showFriends ? 'Hide Friends List' : 'View Friends List'}
          </Button>
          {showFriends && (
            <Box>
              {friends.map((friend) => (
                <Text key={friend} mb={2} textAlign="left" fontSize="18px">
                  {friend}
                </Text>
              ))}
            </Box>
          )}
        </Box>
        <Divider my={6} />

        {/* Visiting History Section */}
        <Heading as="h2" size="lg" mt={20} mb={15} textAlign="left">
          Visiting History
        </Heading>
        <MovieCarousel movies={visitedMovies} />
      </Box>
      <Divider my={60} />
    </div>
  );
};

export default Profile;
