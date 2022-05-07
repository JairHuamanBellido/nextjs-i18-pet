import { LinkProps } from "next/link";
import { useRouter } from "next/router";
import Link from "next/link";
import { StyledLink } from "./indes.styles";

interface ICustomLinkComponent extends LinkProps {
  label: string;
}

export default function CustomLinkComponent({
  href,
  label,
}: ICustomLinkComponent) {
  const { locale } = useRouter();
  return (
    <Link href={href} passHref locale={locale}>
      <StyledLink>{label}</StyledLink>
    </Link>
  );
}
