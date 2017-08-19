import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class CategoryList extends Component {
	render() {
		return (
			<ul className="category-list">
			{this.props.categories.items.map((category) =>(
				<li key={category.name}>
						{category.name}
				</li>
			))}
		</ul>
		)
	}
}

export default CategoryList
