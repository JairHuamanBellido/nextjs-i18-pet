import Link from "next/link";
import { useRouter } from "next/router";
import { HtmlHTMLAttributes } from "react";
import { IButtonProps } from "../../domain/model/Button.model";
import { StyledButton } from "./index.styles";

type Props = HtmlHTMLAttributes<HTMLButtonElement> & IButtonProps;

export default function Button({ link, label, ...props }: Props) {
  const { locale } = useRouter();
  return (
    <StyledButton>
      <Link href={link.url} locale={locale} passHref>
        {label}
      </Link>
    </StyledButton>
  );
}
