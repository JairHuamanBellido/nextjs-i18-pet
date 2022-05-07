import { SectionHero } from "../../../domain/model/SectionHero.model";
import { StrapiSectionHero } from "../model/StrapiSectionHero.model";

export class StrapiSectionHeroMapper {
  public static toDomainEntity(payload: StrapiSectionHero): SectionHero {
    return {
      id: `${payload.id}-sectionHero`,
      title: payload.section_hero.title,
      description: payload.section_hero.description,
      image: payload.section_hero.image,
      componentId: payload.__component,
    };
  }
}
