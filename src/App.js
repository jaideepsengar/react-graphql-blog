import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// import { ApolloProvider } from "react-apollo";
import { Container, Row, Col } from 'reactstrap';

import './App.css';
import Blogs from './container/blogs'
import Nav from './global/nav'

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <Container>
      <Row>
        <Col><Nav/></Col>
      </Row>
      <Row>
        <Col><Blogs /></Col>
      </Row>
    </Container>
  </ApolloProvider>
);

export default App;
