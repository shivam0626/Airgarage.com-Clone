import { Box, Heading, Image, Text } from "@chakra-ui/react";

function DealSubComponent({
    image,
    heading,
    description
}){
    return(
        <Box w="50%">
            <Image 
                src={image}
                borderBottomRadius="10px"
                mb="15px"
            />
            
            <Heading 
                fontSize="24px"
                mb="15px"
            >
                {heading}
            </Heading>
           
            <Text color="#a1a6af" >{description}</Text>
        </Box>
    )
}
export default DealSubComponent;