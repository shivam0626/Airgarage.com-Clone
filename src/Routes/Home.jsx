import Navbar from "../Components/HomeNavbar";
import IncreaseRevenue from "../Components/MainComps/IncreaseRevenue";
import ParkingOperations from "../Components/MainComps/ParkingOpertions";
import Partners from "../Components/MainComps/Partners";

function Home(){
    return(
        <div>
            <Navbar />
            <ParkingOperations />
            <Partners />
            <IncreaseRevenue />
        </div>
    )
}
export default Home;
