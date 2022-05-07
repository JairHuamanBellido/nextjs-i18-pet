import { SectionBannerCenter } from "../../../domain/model/SectionBannerCenter.model";
import { StrapiSectionBannerCenter } from "../model/StrapiSectionBannerCenter.model";

export class StrapiSectionBannerCenterMapper {
  public static toDomainEntity(
    strapiSectionBannerCenter: StrapiSectionBannerCenter
  ): SectionBannerCenter {
    return {
      id: `${strapiSectionBannerCenter.id}-sectionBannerCenter`,
      banner_center: {
        id: `${strapiSectionBannerCenter.banner_center.id}-bannerCenter`,
        body: strapiSectionBannerCenter.banner_center.heading.body,
        title: strapiSectionBannerCenter.banner_center.heading.title,
        tag: strapiSectionBannerCenter.banner_center.heading.tag,
      },
      componentId: strapiSectionBannerCenter.__component,
    };
  }

  public static toDomainEntities(
    strapiSectionsBannerCenter: StrapiSectionBannerCenter[]
  ) {
    return strapiSectionsBannerCenter.map((e) => this.toDomainEntity(e));
  }
}
