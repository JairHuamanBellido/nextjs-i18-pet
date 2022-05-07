import { NavigationItem } from "../../../domain/model/NavigationItem.model";
import { StrapiModel } from "../../Strapi/StrapiRestApi.model";
import { StrapiLinkMapper } from "./StrapiLinkMapper";
import { StrapiNavigationItem } from "../model/StrapiNavigationItem";

export class StrapiNavigationItemMapper {
  public static toDomainEntity(
    payload: StrapiModel<StrapiNavigationItem>
  ): NavigationItem {
    return {
      id: `${payload.id}-strapiNavigationItem`,
      link: StrapiLinkMapper.toDomainEntity(payload.link),
      title: payload.title,
    };
  }

  public static toDomainEntities(payload: StrapiModel<StrapiNavigationItem>[]) {
    return payload.map((e) => this.toDomainEntity(e));
  }
}
