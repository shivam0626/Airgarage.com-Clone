import { Container, Flex } from "@chakra-ui/layout";
import AutomatedSubPart from "./AutomatedSubPart";
import AutoSubPart from "./AutoSubPart";

function Automated(){
    return(
        <Container 
            bg="#f7f7f7"
            maxW={"5xl"}
            pt="80px"
            pb="50px"
         >
        <Flex gap="8rem">
        <AutomatedSubPart 
            heads={"Automated Enforcement"}
            subheads={"AirGarage automates parking enforcement with our network of enforcers who scan your lot daily and take action against repeat violators."}
            img={"https://assets.website-files.com/5d572dda83100b681dfd4413/60b00d2fd95ae153be623d8c_enforcement-view.png"}
            />
        <AutoSubPart img={"https://assets.website-files.com/5d572dda83100b681dfd4413/60b00d2fd95ae153be623d8c_enforcement-view.png"} />
        </Flex>
        
        </Container>
    )

}
export default Automated;