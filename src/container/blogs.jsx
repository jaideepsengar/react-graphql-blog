import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Blog from '../component/blog'

const Blogs = () => (
  <Query
    query={gql`
      {
        allBlogs {
          id
          title
          author
          description
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.allBlogs.map((blog) => (
        <Blog blog={blog} />
      ));
    }}
  </Query>
);

export default Blogs;