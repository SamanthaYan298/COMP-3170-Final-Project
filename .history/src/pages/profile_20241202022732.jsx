import React, { useState } from 'react';
import { Box, Heading, Button, Divider, Text, Textarea, Input } from '@chakra-ui/react';
import MovieCarousel from '../components/MovieCarousel';
import '../App.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Digi Girl🍿',
    username: '@movieLover123',
    description: 'Animated movie enthusiast, always on the lookout for the next favorite to add to my collection. Add me as a friend!',
    profilePic: '/images/profile-pic.jpeg',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState({ ...profile });

  const handleInputChange = (field, value) => {
    setTempProfile({ ...tempProfile, [field]: value });
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
    // TODO: Implement API call to persist profile data
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <Box maxW="600px" mx="auto" p={5}>
        <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
          <Box
            borderRadius="50%"
            boxSize="150px"
            bg="gray.200"
            bgImage={`url(${tempProfile.profilePic})`}
            bgSize="cover"
            marginBottom="1rem"
          />
          {isEditing && (
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    handleInputChange('profilePic', reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          )}
          <Box>
            {isEditing ? (
              <>
                <Input
                  value={tempProfile.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Name"
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
        {isEditing ? (
          <Textarea
            value={tempProfile.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            fontSize="13px"
            fontWeight="300"
            resize="none"
            width="100%"
            textAlign="left"
            borderRadius={10}
            bg="white"
            p={6}
          />
        ) : (
          <Text>{profile.description}</Text>
        )}
        <Divider my={1} />

        {isEditing ? (
          <Box display="flex" justifyContent="space-between" mt={4}>
            <Button colorScheme="green" onClick={handleSave}>Save</Button>
            <Button colorScheme="red" onClick={handleCancel}>Cancel</Button>
          </Box>
        ) : (
          <Button colorScheme="blue" onClick={() => setIsEditing(true)}>Edit Profile</Button>
        )}

        <Divider my={6} />
        <Heading as="h2" size="lg" mt={20} mb={15} textAlign="left">
          Visiting History
        </Heading>
        <MovieCarousel movies={[]} />
      </Box>
    </div>
  );
};

export default Profile;
