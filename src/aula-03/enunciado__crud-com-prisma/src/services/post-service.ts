import postRepository, { CreatePost } from "../repositories/post-repository";

async function getPosts() {
  const posts = await postRepository.getPosts();
  return posts;
}

async function getPost(id: number) {
  const post = await postRepository.getPost(id);
  if (!post) throw {
    name: "NotFoundError",
    message: "Post not found"
  };

  return post;
}

async function createPost(post: CreatePost) {
  return await postRepository.createPost(post);
}

async function updatePost(id: number, post: CreatePost) {
  return await postRepository.updatePost(id, post)
}

async function deletePost(id: number) {
  await getPost(id);
  return await postRepository.deletePost(id);
}

const postService = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
}

export default postService;