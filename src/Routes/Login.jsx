import { Box, Flex } from "@chakra-ui/layout";
import LoginForm from "../Components/MainComps/LoginForm";
import LoginLogo from "../Components/MainComps/LoginLogo";

function Login(){
    return(
        <Box>
            <Flex>
                <Box w="37.5%">
                    <LoginLogo />
                </Box>
                <Box w="60%">
                    <LoginForm />
                </Box>
            </Flex>
            
        </Box>
    )
}
export default Login;