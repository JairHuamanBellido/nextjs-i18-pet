import { HttpClient } from "../../core/api/api";
import { Story } from "../../domain/model/Story.model";

export class HttpRestApiLinkStory {
  public static async findAll(): Promise<Story[]> {
    const { data } = await HttpClient.get<Story[]>("/stories");
    return data;
  }

  public static async findone(slug: string): Promise<Story> {
    const { data } = await HttpClient.get<Story>(`/stories/${slug}`);
    return data;
  }
}
