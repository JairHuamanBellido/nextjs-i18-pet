import { HttpRestApiPage } from "../../../infrastructure/api/HttpRestApiPage";
import { Page } from "../../model/Page.model";

export class GetPageService {
  public static async execute(locale: string, slug: string): Promise<Page> {
    return await HttpRestApiPage.findOne(locale, slug);
  }
}
