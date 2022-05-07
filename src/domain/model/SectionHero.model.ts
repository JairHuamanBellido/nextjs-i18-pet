import { Media } from "./Media.model";

export interface SectionHero {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image?: Media;
  readonly componentId: string;
}
