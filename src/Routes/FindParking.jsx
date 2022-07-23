import {Image} from "@chakra-ui/react";
import ParkingFooter from "../Components/MainComps/ParkingFooter";
import PopularSearches from "../Components/MainComps/PopularSearches";
import SearchParking from "../Components/MainComps/SearchParking";
function FindParking(){
    return(
        <div>
            <Image src="https://parking.airgarage.com/static/media/AirGarage.919cc784.png"
                w="195px"
                mt="20px"
                ml="30px"
            />
            <SearchParking />
            <PopularSearches />
            <ParkingFooter />
        </div>
    )
}
export default FindParking;