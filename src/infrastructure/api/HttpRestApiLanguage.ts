import { HttpClient } from "../../core/api/api";
import { Language } from "../../domain/model/Language.model";

export class HttpRestApiLanguage {
  public static async findAll() {
    const { data } = await HttpClient.get<Language[]>(
      "/languages?populate=*"
    );

    return data;
  }
}
