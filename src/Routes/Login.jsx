import { Box, SimpleGrid } from "@chakra-ui/layout";
import LoginForm from "../Components/MainComps/LoginForm";
import LoginLogo from "../Components/MainComps/LoginLogo";

function Login(){
    return(
        <Box>
            <SimpleGrid columns={[1,null,1,2]} gap='8rem'>
                <Box >
                    <LoginLogo />
                </Box>
                <Box >
                    <LoginForm />
                </Box>
            </SimpleGrid>
            
        </Box>
    )
}
export default Login;