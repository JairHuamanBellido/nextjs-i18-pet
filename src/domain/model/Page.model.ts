import { SectionBannerCenter } from "./SectionBannerCenter.model";
import { SectionHero } from "./SectionHero.model";

export interface Section<T> {}
export interface Page {
  id: number;
  title: string;
  sections: Section<SectionBannerCenter | SectionHero>[];
}
