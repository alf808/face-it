export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'

// I will be using the API functions I set up in utils/api.js
// export function fetchCategories( categories ) {
//   return {
//     type: FETCH_CATEGORIES,
//     categories
//   }
// }

export function fetchPosts( posts ) {
  return {
    type: FETCH_POSTS,
    posts
  }
}
