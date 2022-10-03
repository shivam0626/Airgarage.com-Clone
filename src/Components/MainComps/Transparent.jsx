import { Box, Container, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import ValuePropostion from "./ValueProposition";

function Transparent(){
    return(
        <Container maxW="5xl">
            <Box>
                <Heading>Transparent and Data Driven</Heading>
                <Text color="#a1a6af">We share all of our data with you in real time, so you’re always aware what’s happening on your property.</Text>
                <SimpleGrid columns={[1,null,2,3]} gap='2rem'>
                    <ValuePropostion
                        icon={"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ac207311fbe70d9afcad50_bar.png"}
                        heading={"Reporting & Analytics"}
                        description={"Forecast occupancy and maximize your revenue with transparent data."}
                    
                    />
                    <ValuePropostion
                        icon={"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ac207363f6b974468c3cab_pie.png"}
                        heading={"Historical trends"}
                        description={"View your property's performance over time and track its progress."}
                    
                    />
                    <ValuePropostion
                        icon={"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ac20734d588b250051fd79_fast.png"}
                        heading={"Real-time updates"}
                        description={"Your dashboard updates with each parking rental as it happens. No more waiting for end of month reports."}
                    
                    />
                </SimpleGrid>
            </Box>
        </Container>
    )

}
export default Transparent;
