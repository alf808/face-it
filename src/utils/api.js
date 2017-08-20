const API_URL = "http://localhost:5001"

const headers = {
	'Authorization': 123456789
}

// code below is myreads API
export const getCategories = () =>
	fetch(`${API_URL}/categories`, { headers })
		.then(res => res.json())
		.then(data => data.categories)

export const getAllPosts = () =>
	fetch(`${API_URL}/posts`, { headers })
  	.then(res => res.json())
		// .then(data => data.posts)

// export const getPostsByCategory = (category) =>
// fetch(`${API_URL}/:${category}/posts`, { headers })
//   .then(res => res.json())
