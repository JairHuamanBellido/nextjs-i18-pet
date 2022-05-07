import { HttpClient } from "../../core/api/api";
import { Navigation } from "../../domain/model/Navigation.model";
import { StrapiModel } from "../Strapi/StrapiRestApi.model";
import { StrapiNavigationMapper } from "../strapi-collection-types/mapper/StrapiNavigationMapper";
import { StrapiNavigation } from "../strapi-collection-types/model/StrapiNavigation.model";

export class HttpRestApiNavigation {
  public static async findOne(locale: string = "en"): Promise<Navigation> {
    const { data } = await HttpClient.get<StrapiModel<StrapiNavigation>>(
      "/navigation",
      {
        params: { locale: locale },
      }
    );

    return StrapiNavigationMapper.toDomainEntity(data);
  }
}
