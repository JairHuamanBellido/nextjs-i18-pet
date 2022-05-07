import { StrapiBlog } from "../../strapi-collection-types/model/StrapiBlog.model";
import { StrapiModel } from "../../Strapi/StrapiRestApi.model";

export interface StrapiCardBlog {
  blog: StrapiModel<StrapiBlog>;
}
