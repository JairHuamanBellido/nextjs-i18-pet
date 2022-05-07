import { NavigationItem } from "./NavigationItem.model";

export interface Navigation {
  readonly id: string;
  readonly navigation_items: NavigationItem[];
}
