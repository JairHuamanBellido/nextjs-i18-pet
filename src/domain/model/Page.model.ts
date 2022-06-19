import { ISectionBannerCenter } from "../../components/SectionBannerCenter";
import { ISectionHeroComponent } from "../../components/SectionHero";
import { ISectionStatsComponent } from "../../components/SectionStats";

export interface Section<T> {}
export interface Page {
  id: number;
  title: string;
  sections: Section<
    ISectionHeroComponent | ISectionBannerCenter | ISectionStatsComponent
  >[];
}
