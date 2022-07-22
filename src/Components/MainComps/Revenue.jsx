import { Box, Container,} from "@chakra-ui/layout";
import { Heading,Text,Image} from "@chakra-ui/react";

function Revenue(){
    return(
        <Container maxW="5xl">
            <Box mt="60px">
            <Heading fontSize="32px">Increase Your Net Revenue</Heading>
                <br />
                <Text color="#a1a6af">Our proprietary technology enables us to offer lower operating costs to our partners meaning they take home up to 50% more every month than when they worked with our competition</Text>
                <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/619bf3a972f16c08c2a24729_stack-ag-p-1600.png" 
                alt="revenue"
                m="2rem" />
            </Box>
        </Container>
    )
}
export default Revenue;