import { Box, Flex, Stack } from "@chakra-ui/layout";
import {Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

function ParkingFooter(){
    return(

        <Box align="center" bg="#fa824c" pt="15px" pb="10px">
            <Text color="white  ">©2021 AirGarage, Inc</Text>
            <Stack align={"center"}>
                <Flex gap={"2rem"}>
                    <Link to={"/"} style={{textDecoration:"none",color:"white"}}  >Homepage</Link>
                    <Link style={{textDecoration:"none",color:"white"}} >Terms</Link>
                    <Link style={{textDecoration:"none",color:"white"}} >Contact us</Link>
                </Flex>
            </Stack>
        </Box>
    )
}
export default ParkingFooter;