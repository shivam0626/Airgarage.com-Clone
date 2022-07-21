import Navbar from "../Components/HomeNavbar";
import Deal from "../Components/MainComps/Deal";
import Footer from "../Components/MainComps/Footer";
import IncreaseRevenue from "../Components/MainComps/IncreaseRevenue";
import ParkingOperations from "../Components/MainComps/ParkingOpertions";
import Partners from "../Components/MainComps/Partners";
import PartnerSpotLight from "../Components/MainComps/PartnerSpotlight";
import TopInvestors from "../Components/MainComps/TopInvestors";
import Transparent from "../Components/MainComps/Transparent";

function Home(){
    return(
        <div>
            <Navbar />
            <ParkingOperations />
            <Partners />
            <IncreaseRevenue />
            <Deal />
            <Transparent />
            <TopInvestors />
            <PartnerSpotLight />
            <Footer />
        </div>
    )
}
export default Home;
