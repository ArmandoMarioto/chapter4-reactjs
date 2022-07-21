import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
    return(
        <Flex align='center'>
            <Box mr='4' textAlign='right'>
                <Text>
                    Armando Marioto
                </Text>
                <Text fontSize='small' color='gray.300'>
                    armandomarioto@gmail.com
                </Text>
            </Box>
            <Avatar size='md' name='Armando Marioto'src='https://github.com/armandomarioto.png'/>
        </Flex>
    );
}