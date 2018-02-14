import React from 'react';
import BlogPostItem from './blog_post_item';

export default class BlogFeed extends React.Component {
  constructor() {
    super();
    this.state = { posts: null };
    this.getPosts = this.getPosts.bind(this);
  }

  componentWillMount() {
    this.getPosts();
  }

  getPosts() {
    let url = 'https://www.googleapis.com/blogger/v3/blogs/5286042365565724381/posts?key=';
    const apiKey = 'AIzaSyBOL8CuBD84Uk5IDQYUGzE49U4fUhE562I';
    url += apiKey;

    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        // console.log(request.response);
        const data = JSON.parse(request.responseText);
        const postsArr = data.items.slice(0,3);
        this.setState({ posts: postsArr });
      }
    };

    request.open('GET', url, true);
    request.send();
  }

  render() {
    let posts = this.state.posts;

    if (!this.state.posts) {
      return (
        <div>Loading...</div>
      );
    } else {
      return (
        <ul className='blog-post-list'>
          {
            posts.map( (post, idx) => (
              <BlogPostItem key={idx} post={post} />
            ))
          }
        </ul>
      );
    }
  }
}
