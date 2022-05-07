import { Media } from "../../../domain/model/Media.model";
import { StrapiButton } from "../../strapi-components/model/StrapiButton.model";
import { StrapiSectionTitle } from "../../strapi-components/model/StrapiSectionTitle.model";
import { StrapiModel } from "../../Strapi/StrapiRestApi.model";
import { StrapiStory } from "./StrapiStory.model";

export interface StrapiSectionStory {
  heading: StrapiModel<StrapiSectionTitle>;
  stories: StrapiModel<StrapiStory>[];
  image: Media;
  reverse: boolean;
  button: StrapiModel<StrapiButton>;
}
