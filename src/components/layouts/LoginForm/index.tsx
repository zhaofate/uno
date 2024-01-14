import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  extendTheme,
  Box,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});
const Login = () => {
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
        </Box>
        <Link href="/layout/register">
          Chakra Design system <ExternalLinkIcon mx="2px" />
        </Link>
      </ChakraProvider>
    </>
  );
};
export default Login;
