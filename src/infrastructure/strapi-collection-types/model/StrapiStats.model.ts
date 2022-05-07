import { Media } from "../../../domain/model/Media.model";
import { StrapiSectionTitle } from "../../strapi-components/model/StrapiSectionTitle.model";
import { StrapiModel } from "../../Strapi/StrapiRestApi.model";
import { StrapiStat } from "./StrapiStat.model";

export interface StrapiStats {
  heading: StrapiModel<StrapiSectionTitle>;
  image: Media;
  reverse: boolean;
  stats: StrapiModel<StrapiStat>[];
}
