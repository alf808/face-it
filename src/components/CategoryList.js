import React, { Component } from 'react'

class CategoryList extends Component {
	render() {
		return (
			<ol>
			{this.props.categories.items.map((category) =>(
				<li key={category.path}>
					{category.name}
				</li>
			))}
			</ol>
		)
	}
}

export default CategoryList
