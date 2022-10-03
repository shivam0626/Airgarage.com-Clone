import { Container, SimpleGrid } from "@chakra-ui/react";
import DealSubComponent from "./DealSubComponent";
import Links from "./Links";


function Deal(){
    return(
       <Container 
            maxW={"5xl"}
            mt="40px"
            mb="100px"
       >
        <a href="/talktosales">
            <Links 
                heading={"Get a better deal today."}
                desc={"Send us your parking management contract and get a counter offer in 24 hours."}
            />
        </a>
       
        <SimpleGrid columns={[1,null,1,2]} gap="3rem" mt="70px">
            <DealSubComponent 
            image={"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad7c7bc5cb09481db5a7b3_Image%20from%20iOS%20(4)-p-500.jpeg"}
            heading={"Increase Parking Revenue"}
            description={"Other parking operators nickel and dime owners by passing through every cost of their operation from uniforms to phone bills. AirGarage operates on a revenue share model so that we only make money if you do."}
            />
            <DealSubComponent
                image={"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad7c7bb4dc18e48c224f8e_Image%20from%20iOS%20(5)-p-500.jpeg"}
                heading={"Multifaceted Enforcement"}
                description={"The combined power of AirGarage's network of enforcement officers and our Automatic License Plate Recognition cameras means no illegally parked vehicle will slip through the cracks unnoticed."}
            />
        </SimpleGrid>
       </Container>
       
            
        
       
    )
}
export default Deal;