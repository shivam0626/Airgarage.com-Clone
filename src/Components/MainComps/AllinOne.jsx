import { 
    Container,
    Heading,
    Box,
    SimpleGrid
    } from "@chakra-ui/react";
import ValuePropostion from "./ValueProposition";
function AllinOne(){
    return(
            <Container maxW="5xl">
                <Box mt="60px">
                    <Heading fontSize="34px">All-in-one system</Heading>
                    <br />
                    <SimpleGrid columns={[1,null,2,3]} gap='2rem'>
                       <ValuePropostion 
                            icon={"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f28039ee32a88bdfae6_cover.png"}
                            heading={"Best-in-class Economics"}
                            description={"Increase Net Operating Income at your property by up to 50% vs other parking operators."} 
                        />
                         <ValuePropostion 
                            icon={"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2937a53c7a2bfb65b7_slider.png"}
                            heading={"You're in Control"}
                            description={"Need to reserve spaces for customers or validate employee vehicles? Our system was built with multi-use cases in mind."} 
                        />
                         <ValuePropostion 
                            icon={"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2957e7c929611df3bb_secure.png"}
                            heading={"Always On Enforcement"}
                            description={"AirGarage's proprietary network of enforcement officers scans day and night so you don't have to stress about violators."} 
                        />
                    </SimpleGrid>
                    <SimpleGrid columns={[1,null,2,3]} gap='2rem' >
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
export default AllinOne;