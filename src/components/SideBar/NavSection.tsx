import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

type NavSectionprops = {
    title: string;
    children: React.ReactNode;
}

export function NavSection({title, children}: NavSectionprops) {
    return(
        <Box>
        <Text fontWeight='bold' color='gray.400' fontSize='small'>{title}</Text>
        <Stack spacing='4' mt='8' align='stretch'>
            {children}
        </Stack>
    </Box>
    );
}