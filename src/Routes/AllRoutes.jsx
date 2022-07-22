import { Route, Routes } from "react-router-dom";
import Home from "./Home";
// import TalktoSales from "./TalktoSales";

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<TalktoSales />} /> */}
        </Routes>
    
    )
}
export default AllRoutes;