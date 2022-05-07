import { HttpClient } from "../../core/api/api";
import { Language } from "../../domain/model/Language.model";
import { StrapiModel } from "../Strapi/StrapiRestApi.model";

export class HttpRestApiLanguage {
  public static async findAll() {
    const { data } = await HttpClient.get<StrapiModel<Language>[]>(
      "/languages?populate=*"
    );

    return data;
  }
}
