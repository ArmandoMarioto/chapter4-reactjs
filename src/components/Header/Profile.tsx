import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Armando Marioto</Text>
          <Text fontSize="small" color="gray.300">
            armandomarioto@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Armando Marioto"
        src="https://github.com/armandomarioto.png"
      />
    </Flex>
  );
}
