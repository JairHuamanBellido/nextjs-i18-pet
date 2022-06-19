import { HttpClient } from "../../core/api/api";

export class HttpRestApiBlog {
  public static async findAll(locale: string = "es") {
    const { data } = await HttpClient.get("/blogs", {
      params: { locale: locale },
    });

    return data;
  }
}
