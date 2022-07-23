import { Box, Container, Flex, Heading, Image,Text } from "@chakra-ui/react";
import Links from "./Links";

function PartnerSpotLight(){
    
    return(
        <Container maxW={"5xl"}>
            <Box>
                <Heading mb="20px">Partner Spotlight</Heading>
            </Box>
            <Flex mb="60px">
                <Box>
                    <Heading 
                    fontSize={"24px"}
                    fontWeight={"400"}
                    mb="10px"
                    >
                        TRANSFORMING AN OUTDATED OPERATION TO A MODERN SYSTEM
                    </Heading>
                    <Text color="#a1a6af">After a long vetting process, learn why this organization chose AirGarage to bring together the previous fractured pieces of their parking system.</Text>
                    <Text color="tomato">Read more...</Text>
                </Box>
                <Box>
                    <Image 
                    src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60a6e0cbe639633bbd39e7c2_garage-case.png"
                    mt="-40px"
                    maxW={"lg"} 
                    />
                </Box>
            </Flex>
            <a href="/talktosales">
            <Links 
                heading={"Learn how we work for you"}
                desc={"Talk to sales today"} />
            </a>
        </Container>
    )
}
export default PartnerSpotLight;