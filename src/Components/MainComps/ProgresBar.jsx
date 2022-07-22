import { Container, Flex } from "@chakra-ui/layout";
import { Button,Image } from "@chakra-ui/react";

function ProgressBar(){
    return(
        <Container mt="50px" mb="50px" maxW="5xl">
            <Flex ml="15px" gap="2rem">
            <Button bg="transparent" fontSize="17px" fontWeight="400" >Dashboard</Button>
            <Button bg="transparent" fontSize="17px" fontWeight="400" >Daily Performance</Button>
            <Button bg="transparent" fontSize="17px" fontWeight="400" >Online Listing Aggregation</Button>
            </Flex>
            <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad548421171b59d3dec8b7_dash.png" />
        </Container>
    )
}
export default ProgressBar;