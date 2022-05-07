import { StrapiLink } from "../../strapi-collection-types/model/StrapiLink";
import { StrapiModel } from "../../Strapi/StrapiRestApi.model";

export interface StrapiButton {
  readonly label: string;
  readonly link: StrapiModel<StrapiLink>;
}
