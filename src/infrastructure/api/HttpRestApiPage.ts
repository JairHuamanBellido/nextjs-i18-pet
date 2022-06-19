import { HttpClient } from "../../core/api/api";

export class HttpRestApiPage {
  public static async findOne(locale: string, slug: string) {
    const { data } = await HttpClient.get("/pages", {
      params: { locale: locale, path: slug },
    });

    return data;
  }
}
