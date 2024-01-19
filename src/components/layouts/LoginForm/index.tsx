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
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import theme from "../../../theme.ts";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/home");
  }
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box w="15rem">
          <FormControl mb="1rem" variant="floating" id="name">
            <Input placeholder=" " />
            <FormLabel>账号</FormLabel>
          </FormControl>
          <FormControl mb="1rem" variant="floating" id="keyword">
            <Input placeholder=" " />
            <FormLabel>密码</FormLabel>
          </FormControl>
          <Flex>
            <Spacer />
            <Button
              w="40%"
              rightIcon={<ArrowForwardIcon />}
              colorScheme="blue"
              variant="outline"
              onClick={login}
            >
              登 录
            </Button>
          </Flex>
        </Box>
        <ChakraLink
          color="blue.500"
          fontSize="xs"
          as={ReactRouterLink}
          to="/login/register"
        >
          还没有账号？点击注册 <ExternalLinkIcon mx="2px" />
        </ChakraLink>
      </ChakraProvider>
    </>
  );
};
export default Login;
