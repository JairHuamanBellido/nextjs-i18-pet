import { IButtonProps } from "../../../domain/model/Button.model";
import { StrapiLinkMapper } from "../../strapi-collection-types/mapper/StrapiLinkMapper";
import { StrapiModel } from "../../Strapi/StrapiRestApi.model";
import { StrapiButton } from "../model/StrapiButton.model";

export class StrapiButtonMapper {
  public static toDomainEntity(
    button: StrapiModel<StrapiButton>
  ): IButtonProps {
    return {
      label: button.label,
      link:
       StrapiLinkMapper.toDomainEntity(button.link)
    };
  }
}
