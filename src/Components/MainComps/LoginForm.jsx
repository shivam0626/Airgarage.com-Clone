import { Box, Heading } from "@chakra-ui/layout";
import {Button, Input, InputGroup, InputLeftElement, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {EmailIcon} from "@chakra-ui/icons";

function LoginForm(){
    return(
         <Box>
            <Box align="center" mt="130px" >
                <Heading fontSize={"26px"} fontWeight={"500"}>Log in to AirGarage</Heading>
                <Text lineHeight={"24px"}>Or</Text>
                <Link to="/signup" style={{textDecoration:"none", color:"blue"}}>signup</Link>
               
            </Box>
            <Box mt="30px">
                <Text fontSize="14px" fontWeight="500" mb="15px" >Email or Phone Number</Text>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<EmailIcon color='gray.300' />}
                    />
                    <Input 
                    variant="filled" 
                    size="lg" 
                    type='email' 
                    placeholder='Email'
                    fontSize={"14px"}
                     />
                </InputGroup>
                <Button size="lg" 
                    p="0px 120px" 
                    mt="20px" 
                    fontSize="15px" 
                    color="#fa824c" 
                    bg="#fec"
                >
                    GET VERIFICATON CODE
                </Button>
            </Box>
            

        </Box>
    )
}
export default LoginForm;