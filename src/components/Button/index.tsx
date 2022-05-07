import Link from "next/link";
import { useRouter } from "next/router";
import { HtmlHTMLAttributes } from "react";
import { IButtonProps } from "../../domain/model/Button.model";

type Props = HtmlHTMLAttributes<HTMLButtonElement> & IButtonProps;

export default function Button({ link, label, ...props }: Props) {
  const { locale } = useRouter();
  return (
    <button>
      <Link href={link.url} locale={locale} passHref>
        {label}
      </Link>
    </button>
  );
}
