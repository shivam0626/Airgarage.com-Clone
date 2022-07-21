import {Link,Image, Flex, Spacer, Container } from "@chakra-ui/react";

function Navbar(){
    return (
        <Container maxW="62rem">
            <Flex gap="1rem" fontSize="14px" m="0px 0px 30px 0px"  >
                <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f8a49a649a59aab64b1c_airgarage-logo.png" 
                    alt="Air_logo" 
                    maxW="138px" 
                    maxH="45px"
                    p="10px 0px 0px"
                />
                <Spacer />
                <Link 
                    variant="ghost" 
                    fontWeight="light"
                    m="1.2rem" 
                    style={{textDecoration:"none" }}>
                        Find parking
                </Link>
                <Link 
                    variant="ghost" 
                    m="1.2rem" 
                    fontWeight="light"
                    style={{textDecoration:"none"}}>
                        Log in
                </Link>
                <Link 
                    variant="ghost" 
                    m="1.2rem" 
                    fontWeight="bold"
                    style={{textDecoration:"none"}}>
                        Talk to Sales
                </Link>
            </Flex>
        </Container>
    )
}
export default Navbar;