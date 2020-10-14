import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Post from '../component/post'

const Posts = () => (
  <Query
    query={gql`
      {
        posts {
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
      return data.posts.map((post) => (
        <Post post={post} />
      ));
    }}
  </Query>
);

export default Posts;