import { StrapiSectionStory } from "../../strapi-collection-types/model/StrapiSectionStory.model";
import { StrapiComponent, StrapiModel } from "../../Strapi/StrapiRestApi.model";

export interface StrapiComponentSectionStory extends StrapiComponent {
  readonly section_story: StrapiModel<StrapiSectionStory>;
}
