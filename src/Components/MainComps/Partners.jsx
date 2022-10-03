import { 
    Container,
    Flex,
    Box,
    Image,
    Heading,
    Text,
    SimpleGrid
} from "@chakra-ui/react";

function Partners(){
    return(
        <Container maxW="5xl">
             <SimpleGrid columns={[1,null,2,2]} gap="2rem">
                    <Box>
                        <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60a6d928e7187f18da1ab8c1_color-garage-p-500.png"
                         alt="Partner with air Garage"
                         maxW="436px"
                         maxH="301.23px"
                         pt="10px"
                         borderBottomRadius="5px"
                        />
                    </Box>
                    <Box>
                        <Heading fontSize="32px">Partner with AirGarage</Heading>
                        <br />
                        <Text color="#a1a6af">AirGarage is a full service parking operator. We handle all of the day-to-day logistics that go into making your parking lot or garage the most successful version of itself.</Text>   
                        <Text  color="#a1a6af">We operate hundreds of parking lots and garages across the United States and Canada on behalf of landlords, property managers, and other real estate operators. Our focus is using technology to lower operational overhead and increase your net parking income.</Text>
                        <Text fontSize="14px">We're already maximizing returns for top-tier real estate owners</Text>
                        <Flex gap="3rem" m="1.5rem">
                            <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5ff4db28ba55b4f84383d98f_1200px-Starwood_Hotels_and_Resorts_logo.svg-p-500.png" 
                                alt="logo1"
                                maxW="65px" />
                            <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a3a18e780fad25095c2c4_marriot-p-500.png"
                                 alt="logo2"
                                 maxW="65px" />
                            <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f173b38239bc4f42286ffab_hilton-p-500.png"
                                 alt="logo3"
                                 maxW="65px" />
                        </Flex>
                    </Box>
                </SimpleGrid>
        </Container>
    )
}
export default Partners;