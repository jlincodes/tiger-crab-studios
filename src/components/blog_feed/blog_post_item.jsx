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
    let text = el.textContent.split('').slice(0, 500).join('');
    // console.log(text);
    // console.log(text.split('').slice(0, 300).join(''));
    let url = post.url;

    return (
      <li className='blog-post'>
        <h3>{post.title}</h3>
        <div>{text}...</div>
        <span>
          <a href={url}>Read more...</a>
        </span>
      </li>
    );
  }

};

export default BlogPostItem;
