import { ApolloClient, InMemoryCache,ApolloLink,HttpLink } from "@apollo/client";

const graphUrl = "http://localhost:9000/graphql";

// 区分开发/测试环境与生产环境，此处的 process.env.mode 为 webpackDefinePlugin 自定义内容；实际情况自行按需编写
// if (process.env.NODE_ENV === 'development' || process.env.mode === 'dev') {
//   graphUrl = '//somethingcool-test.com/graphql'
// }


// 创建一个自定义的中间件，用于处理请求
const middlewareLink = new ApolloLink((operation, forward) => {
  // operation.setContext(({ headers = {} }) => ({
  //   headers: {
  //     ...headers,
  //     // 添加自定义请求头部
        
  //     // Authorization: `Bearer ${localStorage.getItem('authToken')}`
  //     'Content-Type': 'Json'
  //   }
  // }))

  // 设置请求方法
  operation.setContext(({ fetchOptions }: { fetchOptions: RequestInit }) => ({
    fetchOptions: {
      ...fetchOptions,
      method: 'POST'
    }
  }))

  return forward(operation)
})

const httpLink = new HttpLink({ uri: graphUrl })

const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache(),
  credentials: 'include', //服务端需要获得cookie的话，需要配置 credentials: 'include' 
})

export default client;
