import { Box, Heading } from "@chakra-ui/layout";

function AutomatedSubPart({
    heads,
    subheads,
}){
    return(
        <Box>
            <Heading>{heads}</Heading>
            <Heading size="md">{subheads}</Heading>
        </Box>
    )

}
export default AutomatedSubPart;