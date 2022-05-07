import { Navigation } from "../../../domain/model/Navigation.model";
import { StrapiModel } from "../../Strapi/StrapiRestApi.model";
import { StrapiNavigationItemMapper } from "./StrapiNavigationItemMapper";
import { StrapiNavigation } from "../model/StrapiNavigation.model";

export class StrapiNavigationMapper {
  public static toDomainEntity(
    payload: StrapiModel<StrapiNavigation>
  ): Navigation {
    return {
      id: `${payload.id}-Navigation`,
      navigation_items: StrapiNavigationItemMapper.toDomainEntities(
        payload.navigation_items
      ),
    };
  }

  public static toDomainEntites(
    payload: StrapiModel<StrapiNavigation>[]
  ): Navigation[] {
    return payload.map((e) => this.toDomainEntity(e));
  }
}
