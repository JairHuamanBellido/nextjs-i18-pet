import { StrapiSectionTitle } from "../../strapi-components/model/StrapiSectionTitle.model";
import { StrapiModel } from "../../Strapi/StrapiRestApi.model";

export interface StrapiBannerCenter {
  readonly heading: StrapiModel<StrapiSectionTitle>
}
