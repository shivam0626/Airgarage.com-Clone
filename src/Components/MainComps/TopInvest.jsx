import { Container, Heading, SimpleGrid } from "@chakra-ui/layout";
import {Image,Text} from "@chakra-ui/react";

function TopInvest(){
    return(
        <Container maxW="5xl">
            <Heading fontSize={"32px"}>Backed by Top Investors</Heading>
            <Text color="#a1a6af">AirGarage has raised funding from top-tier venture capital firms to bring high quality technology to parking operations.</Text>
            <SimpleGrid columns={[1,null,2,3]} gap="4rem" mt="50px" mb="80px">
                <Image w="120px" h="41.5px" mt="30px" src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad93309384147e56f64e9e_floodgate-new.svg" />
                <Image w="110px" h="21.5px"  mt="35px" src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5e7d3ade7c1a807645aa1a57_founders%20fund.png" />
                <Image w="120px" h="110px" src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5e7d3cdee57332865a7b4278_abstract.png" />
                <Image w="140px" h="102px" src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60a702d8d9619be789258fc3_Screen%20Shot%202021-05-20%20at%205.46.06%20PM.png" />
                <Image w="140px" h="110px" src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60a6dd4185b03927673c448e_worklife.jpeg" />
                <Text color="#a1a6af" mt="45px" >& more</Text>
            </SimpleGrid>
        </Container>
    )
}
export default TopInvest;