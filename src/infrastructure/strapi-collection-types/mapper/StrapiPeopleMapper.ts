import { People } from "../../../domain/model/People.model";
import { StrapiModel } from "../../Strapi/StrapiRestApi.model";
import { StrapiPeople } from "../model/StrapiPeople.model";

export class StrapiPeopleMapper {
  public static toDomainEntity(payload: StrapiModel<StrapiPeople>): People {
    return {
      image: payload.image,
      lastname: payload.lastname,
      name: payload.name,
    };
  }

  public static toDomainEntities(payload: StrapiModel<StrapiPeople>[]) {
    return payload.map((e) => this.toDomainEntity(e));
  }
}
