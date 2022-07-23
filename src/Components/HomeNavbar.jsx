import {Image, Flex, Spacer, Container} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const links = [
    {
        to:"/findparking",
        title:"Find Parking"
    },
    {
        to:"/login",
        title:"Login"
    },
    {
        to:"/talktosales",
        title:"Talk to Sales"
    },
    
]

function HomeNavbar(){
    return (
        <Container maxW="62rem">
            <Flex gap="1.2rem" fontSize="14px" mt="25px"  >
                <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f8a49a649a59aab64b1c_airgarage-logo.png" 
                    alt="Air_logo" 
                    maxW="138px" 
                    maxH="45px"
                />
                <Spacer />
                {links.map((item) => (
                    <NavLink
                        to={item.to}
                        key={item.to}
                    >
                        {item.title}
                    </NavLink>
            ))}
            </Flex>
        </Container>
    )
}
export default HomeNavbar;