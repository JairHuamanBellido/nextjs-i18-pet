import { HttpClient } from "../../core/api/api";

import { Blog } from "../../domain/model/Blog.model";
import { StrapiModel } from "../Strapi/StrapiRestApi.model";
import { StrapiBlogMapper } from "../strapi-collection-types/mapper/StrapiBlogMapper";
import { StrapiBlog } from "../strapi-collection-types/model/StrapiBlog.model";

export class HttpRestApiBlog {
  public static async findAll(locale: string = "es"): Promise<Blog[]> {
    const { data } = await HttpClient.get<StrapiModel<StrapiBlog>[]>(
      "/blogs",
      {
        params: { locale: locale },
      }
    );

    return StrapiBlogMapper.toDomainEntities(data);
  }
}
