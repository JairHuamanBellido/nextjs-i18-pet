import { StrapiBannerCenter } from "./StrapiBannerCenter.model";
import { StrapiComponent, StrapiModel } from "../../Strapi/StrapiRestApi.model";

export interface StrapiSectionBannerCenter extends StrapiComponent {
  banner_center: StrapiModel<StrapiBannerCenter>;
}
