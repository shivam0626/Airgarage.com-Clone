import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/layout";
import {Text,Input, Select, Button} from "@chakra-ui/react";
function SearchParking(){
    return (
        <Container mt="40px" mb="40px" maxW="5xl">
            <Box mb="20px" align={"center"}>
                <Heading 
                    fontWeight={"500"} 
                    size="lg"
                >
                    Find parking
                </Heading>
                <Text 
                    fontSize={"14px"}
                    lineHeight={"40px"}
                >
                    100s of spots available near you.
                </Text>
            </Box>
            <Box>
                <SimpleGrid columns={[1,null,3,3]} gap="3rem">
                    <Box>
                        <Text fontSize="15px" fontWeight={"500"} >LOCATION</Text>
                        <Input w="450px" size="lg" mt="15px" variant="filled"  />
                    </Box>
                    <Box>
                        <Text fontSize="15px" fontWeight={"500"} >TYPE</Text>
                        <Select w="220px" mt="15px" fontSize={"14px"}>
                            <option>Hourly</option>
                            <option>Monthly</option>
                            <option>Airport</option>
                        </Select>
                    </Box>
                    <Box>
                        <Button 
                        size={"lg"}
                        p="0px 70px"
                        mt="35px"
                        fontSize={"14px"}
                        color="#fa824c"
                        bg="#fec"
                        >
                            SEARCH
                        </Button>
                    </Box>
                </SimpleGrid>
            </Box>
        </Container>
    )
}
export default SearchParking;