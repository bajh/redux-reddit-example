import React, { PropTypes, Component } from 'react'

export default class Posts extends Component {

  render() {
    let noPostsMessage
    if (this.props.posts.length == 0) {
      noPostsMessage = (
        <div>No posts!</div>
      )
    }

    return (
      <div className="posts">
        {noPostsMessage}
        <ul className="post-list">
          {this.props.posts.map((post, i) =>
            <li key={i}>{post.title}</li>
          )}
        </ul>
      </div>
    )
  }

}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
