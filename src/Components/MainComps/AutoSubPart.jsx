import {Box, Image} from "@chakra-ui/react";

function AutoSubPart({
    img
}){
    return(
        <Box w="40%">
           <Image src={img} />
        </Box>
    )

}
export default AutoSubPart;