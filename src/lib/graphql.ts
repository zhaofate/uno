import { ApolloClient, InMemoryCache,} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

// const client = ...

export default client;