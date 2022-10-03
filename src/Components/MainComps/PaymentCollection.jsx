import { Container,SimpleGrid } from "@chakra-ui/layout";
import AutomatedSubPart from "./AutomatedSubPart";
import AutoSubPart from "./AutoSubPart";

function PaymentCollection(){
    return(
        <Container
        bg="#f7f7f7"
        maxW={"5xl"}
        pt="80px"
        pb="50px"
        >
            <SimpleGrid columns={[1,null,1,2]} gap='2rem'>
                <AutoSubPart img={"https://assets.website-files.com/5d572dda83100b681dfd4413/60b1761dbb78e3c8d231f49b_app-p-500.png"} />
                <AutomatedSubPart 
                heads={"Payment Collection and Dynamic Pricing"}
                subheads={"Maximize revenue with demand-based pricing."}
                />
            </SimpleGrid>
        </Container>
    )

}
export default PaymentCollection;