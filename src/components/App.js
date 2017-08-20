import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import * as ReadableAPI from '../utils/api'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { Route } from 'react-router-dom'
import CategoryList from './CategoryList'
import PostList from './PostList'

class App extends Component {
	state = {
		categories: [],
		posts: [],
	}

	componentDidMount() {
		ReadableAPI.getCategories().then((categories) => {
			this.setState({ categories })
		})
		.then(ReadableAPI.getAllPosts().then((posts) => {
			this.setState({ posts })
		}))
	}

	render() {
		const { categories, posts } = this.state

		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<div className="main-body">
					<div className="nav-left">
						<CategoryList categories={categories} />
					</div>
					<Route exact path="/" render={() => (
						<div className="content">
							<PostList posts={posts} />
						</div>
					)} />
				</div>
			</div>
		);
	}
}

function mapStateToProps ({ categories, posts }) {
	return { categories, posts: posts.items }
}

// function mapDispatchToProps (dispatch) {
// 	return {
		// getCategoriesFromReadableAPI: () => {
		// 	getCategories().then((data) => {
		// 		dispatch(fetchCategories(data))
		// 	})
		// },
		// getAllPostsFromReadableAPI: () => {
		// 	getAllPosts().then((data) => {
		// 		dispatch(fetchPosts(data))
		// 	})
		// }
// 	}
// }

export default connect(mapStateToProps)(App)
