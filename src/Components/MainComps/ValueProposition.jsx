import { Box,Image,Heading,Text } from "@chakra-ui/react";

function ValuePropostion({
    icon,
    heading,
    description

}){
    return(
        <Box 
            border={"1px solid #a1a6af"}
            borderRadius="10px" 
            p="1rem 0.5rem 5rem"
            m="2rem 1rem 1rem 0rem" 
            w="32%"
        >
            <Image 
                src={icon}
                w="45px"
                alt="icon1" />
            <Heading size="md" lineHeight="4rem">{heading}</Heading>
            <Text color="#a1a6af">{description}</Text>
    </Box>  
    )
}
export default ValuePropostion;