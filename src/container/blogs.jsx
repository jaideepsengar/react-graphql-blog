import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { ListGroup } from 'reactstrap';

import Blog from '../component/blog'

const GET_BLOGS = gql`
  query GetBlogs {
    blogs {
      id
      title
      description
    }
  }
`;

const Blogs = () => {
  const { loading, error, data } = useQuery(GET_BLOGS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return data.blogs.map((blog) => (
    <ListGroup>
      <Blog blog={blog} />
    </ListGroup>
  ));
};

export default Blogs;