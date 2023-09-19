//import prisma from "../database/database";

import { posts } from "@prisma/client";
import prisma from "../database/database";
//import db from "../database/database";

//const TABLE_NAME = "posts";

export type CreatePost = Omit<posts, "id">

async function getPosts() {
    const posts = await prisma.posts.findMany()
    return posts;
  }

async function getPost(id: number) {
  const post = await prisma.posts.findUnique({where: { id }})
  return post;
}

async function createPost(post: CreatePost) {
  const { username, title, content } = post;
  return prisma.posts.create({data: post})
}

function updatePost(id: number, post: CreatePost) {
  return prisma.posts.update({
    data: post,
    where: { id }
  });
}

async function deletePost(id: number) {
  return prisma.posts.delete({where: { id }})
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost
}

export default postRepository;