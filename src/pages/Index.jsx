import { Box, Flex, VStack, HStack, Text, Image, Button, Link } from "@chakra-ui/react";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaList, FaBookmark, FaUser, FaEllipsisH, FaStar } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} height="100vh">
      {/* Left Sidebar */}
      <VStack
        as="nav"
        spacing={4}
        align="stretch"
        width={{ base: "full", md: "20%" }}
        p={4}
        bg="gray.100"
        borderRight="1px solid"
        borderColor="gray.200"
      >
        <Link><Button leftIcon={<FaHome />} variant="ghost" justifyContent="flex-start">Home</Button></Link>
        <Link><Button leftIcon={<FaHashtag />} variant="ghost" justifyContent="flex-start">Explore</Button></Link>
        <Link><Button leftIcon={<FaBell />} variant="ghost" justifyContent="flex-start">Notifications</Button></Link>
        <Link><Button leftIcon={<FaEnvelope />} variant="ghost" justifyContent="flex-start">Messages</Button></Link>
        <Link><Button leftIcon={<FaList />} variant="ghost" justifyContent="flex-start">Lists</Button></Link>
        <Link><Button leftIcon={<FaBookmark />} variant="ghost" justifyContent="flex-start">Bookmarks</Button></Link>
        <Link><Button leftIcon={<FaStar />} variant="ghost" justifyContent="flex-start">Communities</Button></Link>
        <Link><Button leftIcon={<FaStar />} variant="ghost" justifyContent="flex-start">Premium</Button></Link>
        <Link><Button leftIcon={<FaUser />} variant="ghost" justifyContent="flex-start">Profile</Button></Link>
        <Link><Button leftIcon={<FaEllipsisH />} variant="ghost" justifyContent="flex-start">More</Button></Link>
      </VStack>

      {/* Central Feed */}
      <Box flex="1" p={4}>
        <Text fontSize="2xl" mb={4}>Home!</Text>
        {/* Example Post */}
        <Box p={4} bg="white" borderRadius="md" boxShadow="sm" mb={4}>
          <HStack spacing={4}>
            <Image
              borderRadius="full"
              boxSize="50px"
              src="https://via.placeholder.com/50"
              alt="Profile Picture"
            />
            <VStack align="start" spacing={1}>
              <Text fontWeight="bold">User Name</Text>
              <Text>@username</Text>
            </VStack>
          </HStack>
          <Text mt={4}>This is an example post in the feed area.</Text>
        </Box>
      </Box>

      {/* Right Sidebar */}
      <VStack
        spacing={4}
        align="stretch"
        width={{ base: "full", md: "20%" }}
        p={4}
        bg="gray.100"
        borderLeft="1px solid"
        borderColor="gray.200"
      >
        <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
          <Text fontWeight="bold" mb={2}>Subscribe to Premium</Text>
          <Button colorScheme="blue">Subscribe</Button>
        </Box>
        <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
          <Text fontWeight="bold" mb={2}>Who to follow</Text>
          <VStack align="start" spacing={2}>
            <HStack spacing={2}>
              <Image
                borderRadius="full"
                boxSize="30px"
                src="https://via.placeholder.com/30"
                alt="Profile Picture"
              />
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">User Name</Text>
                <Text fontSize="sm">@username</Text>
              </VStack>
            </HStack>
            <HStack spacing={2}>
              <Image
                borderRadius="full"
                boxSize="30px"
                src="https://via.placeholder.com/30"
                alt="Profile Picture"
              />
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">User Name</Text>
                <Text fontSize="sm">@username</Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>
        <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
          <Text fontWeight="bold" mb={2}>Trends</Text>
          <VStack align="start" spacing={2}>
            <Text>#TrendingTopic1</Text>
            <Text>#TrendingTopic2</Text>
            <Text>#TrendingTopic3</Text>
          </VStack>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Index;