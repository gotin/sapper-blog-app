import type { RequestHandler } from '@sveltejs/kit'
import RepositoryFactory, { POST } from '../../repositories/RepositoryFactory'
const PostRepository = RepositoryFactory[POST]

export const get: RequestHandler = async () => {
  const posts = await PostRepository.get({})
  return {
    body: {
      posts,
    },
  }
}
