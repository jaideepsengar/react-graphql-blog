import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ListGroup } from 'reactstrap';

import Blog from '../component/blog'

const Blogs = () => (
  <Query
    query={gql`
      {
        blogs {
          id
          title
          description
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.blogs.map((blog) => (
        <ListGroup>
          <Blog blog={blog} />
        </ListGroup>
      ));
    }}
  </Query>
);

export default Blogs;