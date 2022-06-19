import { HttpClient } from "../../core/api/api";
import { Navigation } from "../../domain/model/Navigation.model";

export class HttpRestApiNavigation {
  public static async findOne(locale: string = "en"): Promise<Navigation> {
    const { data } = await HttpClient.get("/navigation", {
      params: { locale: locale },
    });

    return data;
  }
}
