import { 
    Container,
    Heading,
    Box,
    Text,
    Image,
    Flex
    } from "@chakra-ui/react";
import ValuePropostion from "./ValueProposition";

function IncreaseRevenue(){
    return(
        <Container maxW="5xl">
            <Box mt="60px">
                <Heading fontSize="32px">Increase Your Net Revenue</Heading>
                <br />
                <Text color="#a1a6af">Our proprietary technology enables us to offer lower operating costs to our partners meaning they take home up to 50% more every month than when they worked with our competition</Text>
                <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/619bf3a972f16c08c2a24729_stack-ag-p-1600.png" 
                alt="revenue"
                m="2rem" />
                <Heading fontSize="32px">Our value proposition</Heading>
                <br />
                <Text color="#a1a6af">We've built the operating system for parking management, infusing technology into every facet of the business.</Text>
                <Flex>
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
                </Flex>
            </Box>
        </Container>
    )
}
export default IncreaseRevenue;