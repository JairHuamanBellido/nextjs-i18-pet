import { StrapiStats } from "../../strapi-collection-types/model/StrapiStats.model";
import { StrapiComponent, StrapiModel } from "../../Strapi/StrapiRestApi.model";

export interface StrapiSectionStats extends StrapiComponent {
  stats: StrapiModel<StrapiStats>;
}
