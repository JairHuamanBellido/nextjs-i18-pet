import { HttpClient } from "../../core/api/api";
import { StrapiModel } from "../Strapi/StrapiRestApi.model";
import { StrapiPageMapper } from "../strapi-collection-types/mapper/StrapiPageMapper";
import { StrapiPage } from "../strapi-collection-types/model/StrapiPage";

export class HttpRestApiPage {
  public static async findOne(locale: string, slug: string) {
    const { data } = await HttpClient.get<StrapiModel<StrapiPage>>("/pages", {
      params: { locale: locale, path: slug },
    });
    return StrapiPageMapper.toDomainEntity(data);
  }
}
