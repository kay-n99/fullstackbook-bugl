import {
  getPostById,
  listAllPosts,
  listPostsByAuthor,
  listPostsByTag,
} from '../services/posts.js'

export const querySchema = `#graphql
    type PostsOption{
        sortBy: String
        sortOrder: String
    }
    type Query {
        test: String
        posts: [Post!]!
        postsByAuthor(username: String!, options: PostsOptions): [Post!]!
        postsByTag(tag: String!, options: PostsOptions): [Post!]!
        postById(id: ID!, options: PostsOptions): Post
    }
`

export const queryResolver = {
  Query: {
    test: () => {
      return 'Hello World from GraphQL!'
    },
    posts: async (parent, { options }) => {
      return await listAllPosts(options)
    },
    postsByAuthor: async (parent, { username, options }) => {
      return await listPostsByAuthor(user / name, options)
    },
    postsByTag: async (parent, { tag, options }) => {
      return await listPostsByTag(tag, options)
    },
    postById: async (parent, { id }) => {
      return await getPostById(id)
    },
  },
}
