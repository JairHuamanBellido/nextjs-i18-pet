import { StrapiModel } from "../../Strapi/StrapiRestApi.model";
import { StrapiLink } from "./StrapiLink";

export interface StrapiNavigationItem {
  readonly title: string;
  readonly link: StrapiModel<StrapiLink>;
}
