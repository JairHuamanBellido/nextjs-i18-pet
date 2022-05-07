import { Blog } from "../../../domain/model/Blog.model";
import { StrapiModel } from "../../Strapi/StrapiRestApi.model";
import { StrapiBlog } from "../model/StrapiBlog.model";

export class StrapiBlogMapper {
  public static toDomainEntity(strapiBlog: StrapiModel<StrapiBlog>): Blog {
    return {
      id: strapiBlog.id,
      slug: strapiBlog.slug,
      title: strapiBlog.title,
    };
  }
  public static toDomainEntities(strapiBlogs: StrapiModel<StrapiBlog>[]) {
    return strapiBlogs.map((e) => this.toDomainEntity(e));
  }
}
