import { HttpRestApiNavigation } from "../../../infrastructure/api/HttpRestApiNavigation";

export class GetNavigationService {
  public static async execute(locale: string) {
    return await HttpRestApiNavigation.findOne(locale);
  }
}
