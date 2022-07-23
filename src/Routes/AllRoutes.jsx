import { Route, Routes } from "react-router-dom";
import FindParking from "./FindParking";
import Login from "./Login";
import Home from "./Home";
import TalktoSales from "./TalktoSales";
import Signup from "../Components/MainComps/Signup";

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/talktosales" element={<TalktoSales />} />
            <Route path="/findparking" element={<FindParking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    
    )
}
export default AllRoutes;