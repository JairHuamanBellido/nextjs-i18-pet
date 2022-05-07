import { CardBlog } from "../../../domain/model/CardBlog.model";
import { StrapiCardBlog } from "../model/StrapiCardBlog.model";

export class StrapiCardBlogMapper {
  public static toDomainEntity(strapiCardBlog: StrapiCardBlog): CardBlog {
    return {
      blog: {
        id: 1,
        slug: strapiCardBlog.blog.slug,
        title: strapiCardBlog.blog.title,
      },
    };
  }
  public static toDomainEntities(strapiCardsBlog: StrapiCardBlog[]) {
    return strapiCardsBlog.map((e) => this.toDomainEntity(e));
  }
}
