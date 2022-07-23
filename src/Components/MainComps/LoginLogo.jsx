import { Box } from "@chakra-ui/layout";
import {Image} from "@chakra-ui/react";

function LoginLogo(){
    return (
        <Box bg="#ffeecc">
            <Box>
                <Image src="https://dashboard.airgarage.com/static/media/AirGarage.919cc784.png"
                    w="190px"
                    p="15px 20px" />
            </Box>
            <Box pb="140px">
                <Image src="https://dashboard.airgarage.com/static/media/money_machine.b5d474b0.png"
                    w="450px"
                    h="290px"
                    m="120px 0px 0px 30px"
                    
                 
                />
            </Box>
        </Box>
    )
}
export default LoginLogo;