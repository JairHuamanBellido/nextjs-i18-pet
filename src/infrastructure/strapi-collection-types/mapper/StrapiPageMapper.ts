import { Page, Section } from "../../../domain/model/Page.model";
import { SectionBannerCenter } from "../../../domain/model/SectionBannerCenter.model";
import { SectionHero } from "../../../domain/model/SectionHero.model";
import { StrapiSectionBannerCenterMapper } from "./StrapiSectionBannerCenterMapper";
import { StrapiSectionBannerCenter } from "../model/StrapiSectionBannerCenter.model";
import { StrapiSectionHeroMapper } from "../../strapi-components/mapper/StrapiSectionHeroMapper";
import { StrapiSectionHero } from "../../strapi-components/model/StrapiSectionHero.model";
import { StrapiModel } from "../../Strapi/StrapiRestApi.model";
import { StrapiPage } from "../model/StrapiPage";
import { StrapiSectionStats } from "../../strapi-components/model/StrapiSectionStats.model";
import { StrapiSectionStatsMapper } from "../../strapi-components/mapper/StrapiSectionStatsMapper";

export class StrapiPageMapper {
  public static toDomainEntity(strapiPage: StrapiModel<StrapiPage>): Page {
    return {
      id: strapiPage.id,
      title: strapiPage.Title,
      sections: this.toSectionDomainEntities(strapiPage.sections),
    };
  }

  public static toSectionDomainEntities(
    sections: (
      | StrapiSectionBannerCenter
      | StrapiSectionHero
      | StrapiSectionStats
    )[]
  ): Section<SectionBannerCenter | SectionHero>[] {
    return sections.map((section) => {
      switch (section.__component) {
        case "section.section-hero":
          return StrapiSectionHeroMapper.toDomainEntity(
            section as StrapiSectionHero
          );
        case "section.section-banner-center":
          return StrapiSectionBannerCenterMapper.toDomainEntity(
            section as StrapiSectionBannerCenter
          );
        case "section.section-stats":
          return StrapiSectionStatsMapper.toDomainEntity(
            section as StrapiSectionStats
          );
        default:
          return [];
      }
    });
  }

  public static toDomainEntities(
    strapiPages: StrapiModel<StrapiPage>[]
  ): Page[] {
    return strapiPages.map((e) => this.toDomainEntity(e));
  }
}
