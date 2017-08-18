const headers = {
	'Authorization': 123456789
}

export const getCategories = () =>
	fetch(`http://localhost:5001/categories`, { headers })
		.then(res => res.json())
		.then(data => data.categories)
