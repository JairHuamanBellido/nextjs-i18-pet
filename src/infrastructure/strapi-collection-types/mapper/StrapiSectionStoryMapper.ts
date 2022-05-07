import { SectionStory } from "../../../domain/model/SectionStory.model";
import { StrapiButtonMapper } from "../../strapi-components/mapper/StrapiButtonMapper";
import { StrapiComponentSectionStory } from "../../strapi-components/model/StrapiComponentSectionStory.model";
import { StrapiStoryMapper } from "./StrapiStoryMapper";

export class StrapiSectionStoryMapper {
  public static toDomainEntity(
    payload: StrapiComponentSectionStory
  ): SectionStory {
    return {
      body: payload.section_story.heading.body,
      image: payload.section_story.image,
      stories: StrapiStoryMapper.toDomainEntities(
        payload.section_story.stories
      ),
      tag: payload.section_story.heading.tag,
      title: payload.section_story.heading.title,
      reverse: payload.section_story.reverse,
      componentId: payload.__component,
      button: StrapiButtonMapper.toDomainEntity(payload.section_story.button),
    };
  }

  public static toDomainEntities(payload: StrapiComponentSectionStory[]) {
    return payload.map((e) => this.toDomainEntity(e));
  }
}
