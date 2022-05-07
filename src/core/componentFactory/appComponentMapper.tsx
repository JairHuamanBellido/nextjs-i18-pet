import SectionCenterBannerComponent from "../../components/SectionBannerCenter";
import SectionHeroComponent from "../../components/SectionHero";
import SectionStatsComponent from "../../components/SectionStats";
import SectionStoryComponent from "../../components/SectionStory";
interface AppComponent {
  id: string;
  component: (props: any) => JSX.Element;
}
export const appComponentMapper: AppComponent[] = [
  { id: "section.section-hero", component: SectionHeroComponent },
  {
    id: "section.section-banner-center",
    component: SectionCenterBannerComponent,
  },
  { id: "section.section-stats", component: SectionStatsComponent },
  { id: "section.section-story", component: SectionStoryComponent },
];
