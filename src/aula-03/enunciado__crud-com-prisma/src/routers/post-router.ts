import { Router } from "express";

import postController from "../controllers/post-controller";
import { postSchema } from "../schemas/post-schema";
import { validateSchemaMiddleware } from "../middlewares/schema-middleware";

const postsRouter = Router();

postsRouter.get("/posts", postController.getPosts);
postsRouter.get("/posts/:id", postController.getPost);
postsRouter.post("/posts", validateSchemaMiddleware(postSchema), postController.createPost);
postsRouter.put("/posts/:id", postController.updatePost);
postsRouter.delete("/posts/:id", postController.deletePost);

export default postsRouter;