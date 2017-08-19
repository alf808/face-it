import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import { getCategories } from '../utils/api'
import { connect } from 'react-redux'
import { FETCH_CATEGORIES } from '../actions'
import CategoryList from './CategoryList'

class App extends Component {

	componentDidMount() {
		this.props.getCategoriesFromReadableAPI()
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<div className="main-body">
					<div className="nav-left">
						<CategoryList categories={this.props.categories} />
					</div>
					<div className="content">
						test
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps ({categories}) {
	return {categories}
}

function mapDispatchToProps (dispatch) {
	return {
		getCategoriesFromReadableAPI: () => {
			getCategories().then((categories) => {
				dispatch({type: FETCH_CATEGORIES, payload: categories})
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
