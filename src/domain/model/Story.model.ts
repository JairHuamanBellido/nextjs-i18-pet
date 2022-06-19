import { LinkStory } from "./LinkStory.model";
import { Media } from "./Media.model";
import { People } from "./People.model";

export interface Story {
  readonly title: string;
  readonly slogan: string;
  readonly body: string;
  readonly person: People;
  readonly link_story: LinkStory;
  readonly image: Media;
  readonly slug: string;
}
