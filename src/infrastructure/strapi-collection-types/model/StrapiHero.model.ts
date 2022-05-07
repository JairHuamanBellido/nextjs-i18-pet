import { Media } from "../../../domain/model/Media.model";

export interface StrapiHero {
  readonly title: string;
  readonly description: string;
  readonly image: Media;
}
