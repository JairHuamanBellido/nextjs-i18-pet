import { Media } from "../../../domain/model/Media.model";

export interface StrapiPeople {
  readonly name: string;
  readonly lastname: string;
  readonly image: Media;
}
