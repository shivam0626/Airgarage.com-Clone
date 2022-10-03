import { Container, SimpleGrid } from "@chakra-ui/layout";
import AutomatedSubPart from "./AutomatedSubPart";
import AutoSubPart from "./AutoSubPart";

function NoFees(){
    return(
        <Container 
            bg="#f7f7f7"
            maxW={"5xl"}
            pt="80px"
            pb="50px"
         >
        <SimpleGrid columns={[1,null,1,2]} gap="rem">
        <AutomatedSubPart 
            heads={"No Fees, No Setup Costs"}
            subheads={"We operate purely on a revenue share model, meaning our incentives are aligned to maximize your lots utilization and earnings."}
            />
        <AutoSubPart img={"https://assets.website-files.com/5d572dda83100b681dfd4413/606d5cb798cbd12b843329e1_graphs-p-500.png"} />
        </SimpleGrid>
        
        </Container>
    )
}
export default NoFees;