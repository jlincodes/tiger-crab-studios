import React from 'react';

const BlogPostItem = (prop) => {
  if (!prop) {
    return (
      <div>Loading</div>
    );
  } else {
    console.log(prop.post.title);
    return (
      <div>loaded</div>
    );
  }

};

export default BlogPostItem;
