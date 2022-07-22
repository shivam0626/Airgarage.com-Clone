import Navbar from "../Components/HomeNavbar";
import Deal from "../Components/MainComps/Deal";
import Footer from "../Components/MainComps/Footer";
import ParkingOperations from "../Components/MainComps/ParkingOpertions";
import Partners from "../Components/MainComps/Partners";
import PartnerSpotLight from "../Components/MainComps/PartnerSpotlight";
import ProgressBar from "../Components/MainComps/ProgresBar";
import Revenue from "../Components/MainComps/Revenue";
import TopInvestors from "../Components/MainComps/TopInvestors";
import Transparent from "../Components/MainComps/Transparent";
import ValuePropos from "../Components/MainComps/ValueProps";

function Home(){
    return(
        <div>
            <Navbar />
            <ParkingOperations />
            <Partners />
            <Revenue />
            <ValuePropos />
            <Deal />
            <Transparent />
            <ProgressBar />
            <TopInvestors />
            <PartnerSpotLight />
            <Footer />
        </div>
    )
}
export default Home;
