import { SectionStats } from "../../../domain/model/SectionStats.model";
import { StrapiStatsMapper } from "../../strapi-collection-types/mapper/StrapiStatMapper";
import { StrapiSectionStats } from "../model/StrapiSectionStats.model";

export class StrapiSectionStatsMapper {
  public static toDomainEntity(payload: StrapiSectionStats): SectionStats {
    return {
      title: payload.stats.heading.title,
      body: payload.stats.heading.body,
      componentId: payload.__component,
      stats: StrapiStatsMapper.toDomainEntites(payload.stats.stats),
      tag: payload.stats.heading.tag,
      media: payload.stats.image,
      reverse: payload.stats.reverse,
    };
  }

  public static toDomainEntities(
    payload: StrapiSectionStats[]
  ): SectionStats[] {
    return payload.map((e) => this.toDomainEntity(e));
  }
}
