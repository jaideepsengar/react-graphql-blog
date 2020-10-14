import React from 'react';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const Blog = (props) => (
    <ListGroupItem key={props.blog.id}>
        <ListGroupItemHeading>{props.blog.title}</ListGroupItemHeading>
        <ListGroupItemText>{props.blog.description}</ListGroupItemText>
    </ListGroupItem>
);

export default Blog;