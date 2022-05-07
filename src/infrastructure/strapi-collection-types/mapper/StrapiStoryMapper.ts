import { Story } from "../../../domain/model/Story.model";
import { StrapiModel } from "../../Strapi/StrapiRestApi.model";
import { StrapiStory } from "../model/StrapiStory.model";
import { StrapiPeopleMapper } from "./StrapiPeopleMapper";

export class StrapiStoryMapper {
  public static toDomainEntity(payload: StrapiModel<StrapiStory>): Story {
    return {
      body: payload.body,
      person: StrapiPeopleMapper.toDomainEntity(payload.person),
      slogan: payload.slogan,
      title: payload.title,
    };
  }
  public static toDomainEntities(payload: StrapiModel<StrapiStory>[]) {
    return payload.map((e) => this.toDomainEntity(e));
  }
}
