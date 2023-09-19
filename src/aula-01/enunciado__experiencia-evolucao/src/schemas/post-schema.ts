import Joi from "joi";
import DateExtension from '@joi/date';
import { CreatePost } from "../repositories/post-repository";

Joi.extend(DateExtension);

export const postSchema = Joi.object<CreatePost>({
  username: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  createdAt: Joi.date().format('YYYY-MM-DD'),
})