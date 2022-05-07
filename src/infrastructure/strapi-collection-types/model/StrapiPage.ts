import { StrapiSectionBannerCenter } from "./StrapiSectionBannerCenter.model";
import { StrapiSectionHero } from "../../strapi-components/model/StrapiSectionHero.model";
import { StrapiSectionStats } from "../../strapi-components/model/StrapiSectionStats.model";
import { StrapiComponent } from "../../Strapi/StrapiRestApi.model";
import { StrapiComponentSectionStory } from "../../strapi-components/model/StrapiComponentSectionStory.model";

export interface StrapiPage {
  Title: string;
  slug: string;
  sections: (
    | StrapiSectionBannerCenter
    | StrapiSectionHero
    | StrapiSectionStats
    | StrapiComponentSectionStory
  )[];
}
