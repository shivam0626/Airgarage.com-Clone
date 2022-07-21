import { Box,Flex,Image,Text,Container, Spacer, Link, Divider,} from "@chakra-ui/react";

function Footer(){
    return(
        <Box bg="#ffeecc">
            <Container maxW="5xl">
            <Flex>
                 <Image 
                    mt="30px"
                    mb="50px"
                    pt="20px"
                    pb="50px"
                    w="137px"
                    src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f8a49a649a59aab64b1c_airgarage-logo.png"
                 />
                <Spacer />
                    <Text pb="50px" pt="20px" mb="50px"  mt="30px" color="#a1a6af">21st Century Parking Operator</Text>
            </Flex>
            <Flex gap="13.5rem">
                <Box pb="50px">
                    <Text color="#a1a6af">Company</Text>
                    <Link style={{textDecoration:"none"}} color="#dd703f" fontSize="12px">About</Link><br />
                    <Link style={{textDecoration:"none"}} color="#dd703f" fontSize="12px">Careers</Link><br />
                    <Link style={{textDecoration:"none"}} color="#dd703f" fontSize="12px">FAQ</Link><br />
                    <Link style={{textDecoration:"none"}} color="#dd703f" fontSize="12px">Contact us</Link><br />
                    <Link style={{textDecoration:"none"}} color="#dd703f" fontSize="12px">Privacy Policy</Link><br />
                </Box>
                <Box pb="50px">
                    <Text color="#a1a6af">Uses</Text>
                    <Link style={{textDecoration:"none"}} color="#dd703f" fontSize="12px">Hotels</Link><br />
                    <Link style={{textDecoration:"none"}} color="#dd703f" fontSize="12px">Garages</Link><br />
                    <Link style={{textDecoration:"none"}} color="#dd703f" fontSize="12px">Surface Lots</Link><br />
                    <Link style={{textDecoration:"none"}} color="#dd703f" fontSize="12px">Airports</Link><br />
                </Box>
                <Box pb="50px">
                    <Text color="#a1a6af">Features</Text>
                    <Link style={{textDecoration:"none"}} color="#dd703f" fontSize="12px">Access control</Link><br />
                    <Link style={{textDecoration:"none"}} color="#dd703f" fontSize="12px">Parking management</Link><br />
                    <Link style={{textDecoration:"none"}} color="#dd703f" fontSize="12px">Payment collection</Link><br />
                    <Link style={{textDecoration:"none"}} color="#dd703f" fontSize="12px">Gate arm altrnative</Link><br />
                </Box>
                <Box pb="50px" textAlign="right">
                    <Text color="#a1a6af">Find Parking</Text>
                    <Link style={{textDecoration:"none"}} color="#dd703f" fontSize="12px">on iOS app</Link><br />
                    <Link style={{textDecoration:"none"}} color="#dd703f" fontSize="12px">on Android app</Link><br />
                    <Link style={{textDecoration:"none"}} color="#dd703f" fontSize="12px">on web</Link><br />
                </Box>
            </Flex>  
            <Divider borderColor="#dd703f" />
            <Text pb="10px" pt="30px" color="#a1a6af">© 2022 AirGarage Inc</Text>
            </Container>
        </Box>
    )
}
export default Footer;