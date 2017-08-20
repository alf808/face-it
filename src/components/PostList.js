import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostList extends Component {

	// componentDidMount() {
	// 	ReadableAPI.getCategories().then((categories) => {
	// 		this.setState({ categories })
	// 	})
	// }

	render() {
		return (
			<ol className="post-list">
		 	 {this.props.posts.map((post) => (
		 		 <li key={post.id}>
		 			 <Link to={`/post/${post.id}`}>{post.title}</Link>
		 			 <h4>{post.author}</h4>
		 			 <h5>{post.body}</h5>
		 		 </li>
		 	 ))}
		  </ol>

		)
	}
}

export default PostList
