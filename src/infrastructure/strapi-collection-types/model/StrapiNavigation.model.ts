import { StrapiModel } from "../../Strapi/StrapiRestApi.model";
import { StrapiNavigationItem } from "./StrapiNavigationItem";

export interface StrapiNavigation {
  readonly navigation_items: StrapiModel<StrapiNavigationItem>[];
}
