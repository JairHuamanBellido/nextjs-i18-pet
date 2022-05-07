import { StrapiHero } from "../../strapi-collection-types/model/StrapiHero.model";
import { StrapiComponent, StrapiModel } from "../../Strapi/StrapiRestApi.model";

export interface StrapiSectionHero extends StrapiComponent {
  readonly section_hero: StrapiModel<StrapiHero>;
}
