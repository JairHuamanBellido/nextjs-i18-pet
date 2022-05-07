import { StrapiModel } from "../../Strapi/StrapiRestApi.model";
import { StrapiPeople } from "./StrapiPeople.model";

export interface StrapiStory {
  readonly title: string;
  readonly slogan: string;
  readonly body: string;
  readonly person: StrapiModel<StrapiPeople>;
}
