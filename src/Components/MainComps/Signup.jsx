import { Box, Flex, Heading } from "@chakra-ui/layout";
import LoginLogo from "./LoginLogo";
import { Button, Checkbox, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { AtSignIcon, InfoIcon, LockIcon } from "@chakra-ui/icons";

function Signup(){
    return(
        <Box>
            <Flex>
                <Box w="37.5%">
                    <LoginLogo />
                </Box>
                <Box w="60%">
                <Box align="center" mt="40px" >
                <Heading fontSize={"26px"} fontWeight={"500"}>Sign up for AirGarage</Heading>
            </Box>
            <Box w="50%" ml="25%" mt="30px">
                <Text fontSize="14px" fontWeight="500" mb="15px" >First Name</Text>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<InfoIcon color='gray.300' />}
                    />
                    <Input
                    variant="filled" 
                    size="lg" 
                    type='text' 
                    placeholder='First Name'
                    fontSize={"14px"}
                    mb="10px"
                     />
                </InputGroup>
                <Text fontSize="14px" fontWeight="500" mb="15px" >Last Name</Text>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<InfoIcon color='gray.300' />}
                    />
                    <Input 
                    variant="filled" 
                    size="lg" 
                    type='text' 
                    placeholder='Last Name'
                    fontSize={"14px"}
                    mb="10px"
                     />
                </InputGroup>
                <Text fontSize="14px" fontWeight="500" mb="15px" >Email</Text>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<AtSignIcon color='gray.300' />}
                    />
                    <Input 
                    variant="filled" 
                    size="lg" 
                    type='email' 
                    placeholder='Email'
                    fontSize={"14px"}
                    mb="10px"
                     />
                </InputGroup>
                <Text fontSize="14px" fontWeight="500" mb="15px" >Password</Text>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<LockIcon color='gray.300' />}
                    />
                    <Input 
                    variant="filled" 
                    size="lg" 
                    type='password' 
                    placeholder='Password'
                    fontSize={"14px"}
                    mb="10px"
                     />
                </InputGroup>
                <Text>I Agree to:</Text>
                <Checkbox size='sm' colorScheme='red'>
                    Lot Owner Service Agreement
                </Checkbox>
                <Button size="lg" 
                    p="0px 180px" 
                    mt="20px" 
                    fontSize="15px" 
                    color="#fa824c" 
                    bg="#fec"
                >
                    SUBMIT
                </Button>
            </Box>
                </Box>
            </Flex>
        </Box>
    )
}
export default Signup;