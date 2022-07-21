import { Box,
        Container,
        Image,
        Heading,
        Text,
        Button,
        } from "@chakra-ui/react";

function ParkingOperations(){
    return (
        <Container maxW="4xl" centerContent>
            <Box>
                <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ba98799d47da0806a85703_ag-p-500.png"
                 alt="AirGarage Parking"
                 maxW="300px"
                 maxH="250px"
                 m="20px 0px 0px"
                 p="10px 0px 0px 40px"
                />
            </Box>
            <Box textAlign="center">
                <Heading m="40px 0px 10px 0px">Parking Operations for the 21st Century</Heading>
                <Text>AirGarage modernizes parking assets with one streamlined service covering enforcement, payment collection, maintenance and more.</Text>
                <Button size="lg"
                    mt="2rem"
                    mb="3rem"
                    p="1.8rem"
                    bg=" #fec"
                    color="#fa824c">
                    TALK TO SALES
                    </Button>
            </Box>
        </Container>
    )
}
export default ParkingOperations;

