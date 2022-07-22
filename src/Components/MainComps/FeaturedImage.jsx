import { Box, Container, Flex, Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

function FeaturedImage(){
    return(
        <Container mt="80px" mb="80px" maxW={"5xl"}>
            <Flex>
                <Box>
                    <Image 
                    src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60a6df6c85c237b1e7006aca_Screen%20Shot%202021-05-20%20at%203.14.25%20PM-p-500.png"
                    w="480px"
                    h="322px"
                    />
                </Box>
                <Box bg="#fec" w="50%">
                    <Heading m="130px 30px 0px 30px" size="md">"It was an obvious choice to partner with AirGarage given their business model is aligned to maximize our revenue."</Heading>
                </Box>
            </Flex>
        </Container>
    )
} 
export default FeaturedImage;