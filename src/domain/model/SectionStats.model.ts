import { Media } from "./Media.model";
import { Stats } from "./Stats.model";

export interface SectionStats {
  readonly title: string;
  readonly tag: string | null;
  readonly stats: Stats[];
  readonly body: string;
  readonly componentId: string;
  readonly media: Media
  readonly reverse: boolean;
}
