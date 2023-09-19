import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

import postService from "../services/post-service";
import { CreatePost } from "../repositories/post-repository";

async function getPosts(req: Request, res: Response, next: NextFunction) {
  try{
  const posts = await postService.getPosts();
  res.send(posts);
  }
  catch (err) {
    next(err);
  }
}

async function getPost(req:Request, res: Response) {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) res.sendStatus(httpStatus.BAD_REQUEST);
  const post = await postService.getPost(id)
  res.send(post)
}

async function createPost(req: Request, res: Response) {
  const body = req.body as CreatePost;
  await postService.createPost(body);

  res.sendStatus(httpStatus.CREATED);
}

async function updatePost(req: Request, res: Response) {
  const body = req.body as CreatePost;
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) res.sendStatus(httpStatus.BAD_REQUEST);
  await postService.updatePost(id, body);
  res.sendStatus(httpStatus.OK);
}

async function deletePost(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) res.sendStatus(httpStatus.BAD_REQUEST);

  await postService.deletePost(id);

  res.sendStatus(httpStatus.OK)
}

const postController = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
}

export default postController;