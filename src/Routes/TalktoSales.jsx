import { Container,Flex } from "@chakra-ui/layout";
import {Image} from "@chakra-ui/react";
import AllinOne from "../Components/MainComps/AllinOne";
import Automated from "../Components/MainComps/Automated";
import DemoForm from "../Components/MainComps/Demoform";
import FeaturedImage from "../Components/MainComps/FeaturedImage";
import Links from "../Components/MainComps/Links";
import NoFees from "../Components/MainComps/NoFees";
import ParkingOperations from "../Components/MainComps/ParkingOpertions";
import Partners from "../Components/MainComps/Partners";
import PaymentCollection from "../Components/MainComps/PaymentCollection";
import Revenue from "../Components/MainComps/Revenue";
import TopInvest from "../Components/MainComps/TopInvest";

function TalktoSales(){
    return(
        <Container maxW="5xl" centerContent>
            <Flex mt="70px" mb="40px" gap="10rem">
                <ParkingOperations />
                <DemoForm />
            </Flex>
            < Partners />
            <Revenue />
            <Links heading={"Find out how much you could be earning"}
                desc={"Talk to our team today"}
            />
            <Automated />
            <PaymentCollection />
            <NoFees />
            <AllinOne />
            <FeaturedImage />
            <TopInvest />
            <Links heading={"Find out how much you could be earning"}
                desc={"Talk to our team today"}
            />
            <Image w="160px" src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f8a49a649a59aab64b1c_airgarage-logo.png" />
        </Container>
            
        
    )
}
export default TalktoSales;