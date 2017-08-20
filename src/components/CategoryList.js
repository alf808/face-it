import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryList ({ categories }) {

	return (
		<ul className="category-list">
	 	 {categories.map((category) => (
	 	 <li key={category.name}>
	 		 <Link to={`/:${category.path}/posts`}>
	 			 {category.name}
	 		 </Link>
	 	 </li>
	 	 ))}
	  </ul>
	)
}
