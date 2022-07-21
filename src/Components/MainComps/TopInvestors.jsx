import { Box, Container, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";

function TopInvestors(){
    return(
        <Container maxW="5xl">
            <Box mt="50px">
                <Heading>Backed by Top Investors</Heading>
                <br />
                <Text color="#a1a6af" >AirGarage has raised funding from top-tier venture capital firms to bring high quality technology to parking operations.</Text>
            </Box>
            <Box mb="70px">
            <SimpleGrid mt="40px" columns={3} >
                <Box align={"center"} >
                    <Image 
                    src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/6168686def0a2b1a9e995403_ah1.png"
                    w="112px"
                    h="73px"
                    pt="10px"
                    />
                </Box>
                <Box align={"center"}>
                    <Image 
                    src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/6168695773df3879cbf63900_fg2.png"
                    w="181px"
                    h="56px"
                    pt="10px"
                    mt="10px" />
                </Box>
                <Box align={"center"}>
                    <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/6168686da00c2e2a53e67785_ff1.png"
                    w="181px"
                    pt="10px"
                    mt="25px" />
                </Box>
                <Box align={"center"}>
                    <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/6168686d880bec12bd5ee39a_wk1.png"
                    w="181px"
                    pt="10px" />
                </Box>
                <Box align={"center"}>
                    <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/6168695750e45f30d1c3a249_wl2.png"
                    w="181px"
                    pt="10px"
                    mt="10px" />
                </Box>
                <Box align={"center"}>
                    <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/6168686d73df385629f62d0b_av1.png"
                    w="181px"
                    pt="10px"
                    mt="25px" />
                </Box>
            </SimpleGrid>
            </Box>

        </Container>
       
    )
}
export default TopInvestors;