import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Spacer,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ArrowForwardIcon,ExternalLinkIcon } from "@chakra-ui/icons";
import theme from "../../../theme.ts";
import { Link as ReactRouterLink,useNavigate, } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const register = () =>{
    navigate("/login")
  }
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box w="15rem">
          <FormControl mb="1rem" variant="floating" id="name">
            <Input placeholder="账号" />
            <FormLabel>账号</FormLabel>
          </FormControl>
          <FormControl mb="1rem" variant="floating" id="keyword">
            <Input placeholder="密码" />
            <FormLabel>密码</FormLabel>
          </FormControl>
          <Flex>
            <Spacer />
            <Button
              w="40%"
              rightIcon={<ArrowForwardIcon />}
              colorScheme="blue"
              variant="outline"
              onClick={register}
            >
              注 册
            </Button>
          </Flex>
        </Box>
        <ChakraLink color='blue.500' fontSize='xs' as={ReactRouterLink} to="/login">
          已有有账号？点击登录 <ExternalLinkIcon mx='2px' /> </ChakraLink>
        </ChakraProvider>
    </>
  );
};
export default Register;
