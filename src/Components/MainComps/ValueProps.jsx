import { 
    Container,
    Heading,
    Box,
    Text,
    SimpleGrid
    } from "@chakra-ui/react";
import ValuePropostion from "./ValueProposition";

function ValuePropos(){
    return(
        <Container maxW="5xl">
            <Box mt="60px">
                <Heading fontSize="32px">Our value proposition</Heading>
                <br />
                <Text color="#a1a6af">We've built the operating system for parking management, infusing technology into every facet of the business.</Text>
                <SimpleGrid columns={[1,null,2,3]} gap='2rem'>
                   <ValuePropostion 
                        icon={"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f28039ee32a88bdfae6_cover.png"}
                        heading={"Best-in-class Economics"}
                        description={"Increase Net Operating Income at your property by up to 50% vs other parking operators."} 
                    />
                     <ValuePropostion 
                        icon={"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2937a53c7a2bfb65b7_slider.png"}
                        heading={"You're in Control"}
                        description={"Need to reserve spaces for customers or validate employee vehicles? Our system was built with multi-use cases in mind."} 
                    />
                     <ValuePropostion 
                        icon={"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2957e7c929611df3bb_secure.png"}
                        heading={"Always On Enforcement"}
                        description={"AirGarage's proprietary network of enforcement officers scans day and night so you don't have to stress about violators."} 
                    />
                </SimpleGrid>
            </Box>
        </Container>
    )
}
export default ValuePropos;