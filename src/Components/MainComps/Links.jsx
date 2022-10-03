import { Box, Heading, Text } from "@chakra-ui/layout";
import {Link} from "react-router-dom";
function Links({heading,desc}){
    return(
    <Box textAlign={"center"}
        bg="#F7F7F7"
        pt="40px"
        pb="40px"
        mb="70px"
        borderRadius="10px"
    >
        <Link to={"/takltosales"}
            style={{textDecoration:"none"}} 
            lineHeight="42px"
            >
                <Heading>{heading}</Heading>
                <Text color="#a1a6af">{desc}</Text>
        </Link>
    </Box>
    )
}
export default Links;