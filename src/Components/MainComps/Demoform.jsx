import { Box, Container, Heading, Stack } from "@chakra-ui/layout";
import { Button, Input } from "@chakra-ui/react";

function DemoForm(){
    return(
        <Container maxW="xl">
        <Box mt="30px" mb="50px" align={"center"}>
            <Heading mb="30px" fontSize="24px">Learn how AirGarage can maximize your earnings</Heading>
            <Stack direction="column" gap="0.5rem" maxW="350px">
                <Box>
                    <Input fontSize="14px" fontWeight="400" variant="flushed" type="text" placeholder="Name" />
                </Box>
                <Box>
                    <Input fontSize="14px" fontWeight="400" variant="flushed" type="email"  placeholder="Name@email.com" />
                </Box>
                <Box>
                    <Input fontSize="14px" fontWeight="400" variant="flushed" type="number" placeholder="415-123-4545" />
                </Box>
                <Box>
                    <Input fontSize="14px" fontWeight="400" variant="flushed" type="text"  placeholder="112 Maun Str, SanFrancisco, CA, 94110" />
                </Box>
                <Box>
                    <Button size="lg" color="white" bg="#dd703f" pl="120px" pr="120px">Get a Demo</Button>
                </Box>
            </Stack>
        </Box>
        </Container>
        
    )
}
export default DemoForm;