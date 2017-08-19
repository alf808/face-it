import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CategoryList extends Component {
	render() {
		return (
			<ul className="category-list">
			{this.props.categories.items.map((category) =>(
				<li key={category.name}>
					<Link to={`/:${category.path}/posts`}>
						{category.name}
					</Link>
				</li>
			))}
		</ul>
		)
	}
}

export default CategoryList
