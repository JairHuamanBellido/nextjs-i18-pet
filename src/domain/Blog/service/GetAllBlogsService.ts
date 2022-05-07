import { HttpRestApiBlog } from "../../../infrastructure/api/HttpRestApiBlog";
import { Blog } from "../../model/Blog.model";

export class GetAllBlogsService {
  public static async execute(locale: string): Promise<Blog[]> {
    return await HttpRestApiBlog.findAll(locale);
  }
}
