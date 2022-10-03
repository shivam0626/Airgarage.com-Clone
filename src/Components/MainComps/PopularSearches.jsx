import { Box, Container, Heading,SimpleGrid} from "@chakra-ui/layout";
import {Image, Text} from "@chakra-ui/react";

function PopularSearches(){
    return(
        <Container maxW={"5xl"}>
            <Box align="center">
                <Heading size={"md"} fontWeight="500" >Popular searches</Heading>
            </Box>
            <Box mt="40px" mb="40px">
                <SimpleGrid columns={[1,null,2,4]} gap="2rem">
                    <Box align="center">
                        <Image src="https://parking.airgarage.com/static/media/hollywood.3cda80f5.png"
                            // w="220px"
                            // mb="20px"
                        />
                        <Heading 
                        fontSize={"24px"}
                        fontWeight="500"
                        >
                            Los Angeles
                        </Heading>
                        <Text color="#a1a6af" lineHeight={"50px"} >15 Spots Available</Text>
                    </Box>
                    <Box align="center">
                        <Image src="https://parking.airgarage.com/static/media/omaha.47180892.png"
                            // w="220px"
                            // mb="20px"
                        />
                        <Heading 
                        fontSize={"24px"}
                        fontWeight="500"
                        >
                            Omaha
                        </Heading>
                        <Text color="#a1a6af" lineHeight={"50px"} >14 Spots Available</Text>
                    </Box>
                    <Box align="center">
                        <Image src="https://parking.airgarage.com/static/media/a2.29e68f98.png"
                            // w="220px"
                            // mb="20px"
                        />
                        <Heading 
                        fontSize={"24px"}
                        fontWeight="500"
                        >
                            Ann Arbor
                        </Heading>
                        <Text color="#a1a6af" lineHeight={"50px"} >12 Spots Available</Text>
                    </Box>
                    <Box align="center">
                        <Image src="https://parking.airgarage.com/static/media/cacti.0300cb19.png"
                            // w="220px"
                            // mb="20px"
                        />
                        <Heading 
                        fontSize={"24px"}
                        fontWeight="500"
                        >
                            Tempe
                        </Heading>
                        <Text color="#a1a6af" lineHeight={"50px"} >21 Spots Available</Text>
                    </Box>
                </SimpleGrid>
            </Box>

        </Container>
    )
}
export default PopularSearches;
