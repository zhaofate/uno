import { gql } from "@apollo/client";

// 登录
export const LOGIN = gql`
  mutation ($user: String!, $password: String!) {
    playerLogin(playerName: $user, password: $password) {
      success
      message
    }
  }
`;

// 注册
export const REGISTER = gql`
  mutation ($user: String!, $password: String!) {
    playerRegister(playerName: $user, password: $password) {
      success
      message
    }
  }
`;

// 登录注册表单值类型
export interface FormValues {
  user: string;
  password: string;
}

export interface PlayerInfoFeedback {
  success: boolean;
  message: string;
}
