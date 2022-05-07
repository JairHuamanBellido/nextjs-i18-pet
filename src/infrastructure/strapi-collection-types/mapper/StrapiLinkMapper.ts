import { DomainLink } from "../../../domain/model/DomainLink.model";
import { StrapiModel } from "../../Strapi/StrapiRestApi.model";
import { StrapiLink } from "../model/StrapiLink";

export class StrapiLinkMapper {
  public static toDomainEntity(payload: StrapiModel<StrapiLink>): DomainLink {
    return {
      title: payload.title,
      url: payload.url,
      id: `${payload.id}-strapiLink`,
    };
  }
  public static toDomainEntities(
    payload: StrapiModel<StrapiLink>[]
  ): DomainLink[] {
    return payload.map((e) => this.toDomainEntity(e));
  }
}
