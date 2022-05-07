import { DomainLink } from "./DomainLink.model";

export interface NavigationItem {
  readonly id: string;
  readonly title: string;
  readonly link: DomainLink;
}
