import { Media } from "./Media.model";
import { Story } from "./Story.model";
import { IButtonProps } from "./Button.model";
export interface SectionStory {
  readonly tag: string | null;
  readonly title: string;
  readonly body: string;
  readonly stories: Story[];
  readonly image: Media;
  readonly reverse: boolean;
  readonly componentId: string;
  readonly button: IButtonProps;
}
