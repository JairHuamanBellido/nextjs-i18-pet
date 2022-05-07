import { People } from "./People.model";

export interface Story {
  readonly title: string;
  readonly slogan: string;
  readonly body: string;
  readonly person: People;
}
