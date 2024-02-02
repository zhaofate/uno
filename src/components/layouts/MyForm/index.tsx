import React from "react";
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Spacer,
  Flex,
  FormErrorMessage,
  Link as ChakraLink,
  useToast,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import theme from "../../../theme.ts";
import {
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
  FieldInputProps,
} from "formik";
import { Link as ReactRouterLink, useNavigate} from "react-router-dom";
import { LOGIN, REGISTER,FormValues,PlayerInfoFeedback} from "../../../lib/gql.ts";
import { useMutation } from "@apollo/client";


// 其他参数值类型
interface OtherProps {
  isRegister: boolean; // 判断是否为注册表单
  submitBtnHandle: (values: FormValues) => Promise<void>; // 传一个异步执行函数
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  // FormikProps 提供很多属性
  const { touched, errors,isRegister } = props;

  return (
    <Box w="15rem">
      <Form onSubmit={props.handleSubmit}>
        <Field name="user" >
          {({ field }: { field: FieldInputProps<string> }) => (
            <FormControl
              h="3rem"
              m="1.5rem 0"
              variant="floating"
              id="user"
              isInvalid={!!errors.user && touched.user}
            >
              <Input {...field} placeholder="user" />
              <FormLabel>user</FormLabel>
              <FormErrorMessage>{errors.user}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        <Field name="password" >
          {({ field }: { field: FieldInputProps<string> }) => (
            <FormControl
              h="3rem"
              variant="floating"
              id="password"
              isInvalid={!!errors.password && touched.password}
            >
              <Input {...field} placeholder="password" />
              <FormLabel>password</FormLabel>
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        <Flex>
        <Spacer />
        <Button
          w="40%"
          rightIcon={<ArrowForwardIcon />}
          colorScheme="blue"
          variant="outline"
          type="submit"
        >
          { isRegister? "注册":"登录"}
        </Button>
      </Flex>
      </Form>
    </Box>
  );
};

interface MyFormProps {
  isRegister: boolean;
  submitBtnHandle: (values: FormValues) => Promise<void>;
}

// 定义组件中的属性
const MyForm = withFormik<MyFormProps, FormValues>({
  // 可以初始化表单内容，方便我每次进去
  mapPropsToValues: () => {
    return {
      user: "zhaolan1",
      password: "zln1234",
    };
  },

  // 校验规则
  validate: (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    // 正则表达式匹配 6-16 个字母和数字
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/;
  const userRegex = /^.{2,8}$/;

    if (!values.user) {
      errors.user = "Required";
    }else if(!userRegex.test(values.user)) {
      errors.user = "用户名长度2~8个字符";
    }

    if (!values.password) {
      errors.password = "Required";
    }else if(!passwordRegex.test(values.password)) {
      errors.password = "密码由6-16 个字母和数字组成";
    }
    return errors;
  },

  handleSubmit: async (values: FormValues, { setSubmitting, props }) => {  
    await props.submitBtnHandle(values);
    setSubmitting(false);
  },
})(InnerForm);


const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();// 显示通知

  interface Data {
    playerLogin: PlayerInfoFeedback;
  }

  // 处理数据
  const onCompleted = (data:Data) => {
   const {success,message} = data.playerLogin; 
    if(success) {
      toast({
        title: message,
        status: 'success',
        duration: 1000,
        isClosable: true,
      });
      setTimeout(()=>navigate("/home"),1000) 
    }
  };
  
  // 处理错误
  const onError = (error: unknown) => {
    console.log(error);
  };

  // 将 onCompleted 和 onError 回调添加到了 useMutation 的配置对象中。当 mutation 完成时，onCompleted 回调将被触发，并接收到返回的数据。
  const [playerLogin] = useMutation(LOGIN,{onCompleted,
    onError});

  // 登录按钮
  const loginBtnHandle = async (values: FormValues) => {
    try {
      await playerLogin({ variables: values });
    }catch(e){
      console.log(e);
    }
  };


  return (
    <>
      <ChakraProvider theme={theme}>
        <MyForm isRegister={false} submitBtnHandle={loginBtnHandle} />
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

const Register = () => {
  const navigate = useNavigate();
  const toast = useToast();// 显示通知

  interface Data {
    playerRegister: PlayerInfoFeedback;
  }

  // 处理数据
  const onCompleted = (data:Data) => {
   const {success,message} = data.playerRegister; 
    if(success) {
      toast({
        title: message,
        status: 'success',
        duration: 1000,
        isClosable: true,
      });
      setTimeout(()=>navigate("/login"),1000) 
    }
    else{
      toast({
        title: message,
        status: 'error',
        duration: 1000,
        isClosable: true,
      });
    }
  };
  
  // 处理错误
  const onError = (error: unknown) => {
    console.log(error);
  };

  // 将 onCompleted 和 onError 回调添加到了 useMutation 的配置对象中。当 mutation 完成时，onCompleted 回调将被触发，并接收到返回的数据。
  const [playerRegister] = useMutation(REGISTER,{onCompleted,
    onError});

  // 登录按钮
  const RegisterBtnHandle = async (values: FormValues) => {
    try {
      await playerRegister({ variables: values });
    }catch(e){
      console.log(e);
    }
  };

  return (
    <>
      <ChakraProvider theme={theme}>
      <MyForm isRegister={true} submitBtnHandle={RegisterBtnHandle} />
        <ChakraLink color='blue.500' fontSize='xs' as={ReactRouterLink} to="/login">
          已有有账号？点击登录 <ExternalLinkIcon mx='2px' /> </ChakraLink>
        </ChakraProvider>
    </>
  );
};
export {Login,Register};
