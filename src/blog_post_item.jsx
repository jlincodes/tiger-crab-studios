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
    let url = post.url;

    return (
      <li className='blog-post'>
        <h3>{post.title}</h3>
        <div>{text}</div>
        <span>
          <a href={url}>Read more...</a>
        </span>
      </li>
    );
  }

};

export default BlogPostItem;
