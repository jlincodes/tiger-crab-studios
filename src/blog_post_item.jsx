import React from 'react';

const BlogPostItem = (prop) => {
  let post = prop.post;
  if (!post) {
    return (
      <div>Loading</div>
    );
  } else {
    // console.log(post);
    let el = document.createElement('div');
    el.innerHTML = post.content;
    let text = el.textContent;
    
    return (
      <li>
        <h3>{post.title}</h3>
        <div>{text}</div>
      </li>
    );
  }

};

export default BlogPostItem;
