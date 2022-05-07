import { Stats } from "../../../domain/model/Stats.model";
import { StrapiModel } from "../../Strapi/StrapiRestApi.model";
import { StrapiStat } from "../model/StrapiStat.model";

export class StrapiStatsMapper {
  public static toDomainEntity(payload: StrapiModel<StrapiStat>): Stats {
    return {
      id: `${payload.id}-Stats`,
      label: payload.label,
      value: payload.value,
    };
  }

  public static toDomainEntites(payload: StrapiModel<StrapiStat>[]): Stats[] {
    return payload.map((e) => this.toDomainEntity(e));
  }
}
