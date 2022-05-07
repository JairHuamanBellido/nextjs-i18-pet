import Link from "next/link";
import { useRouter } from "next/router";

export default function Internal() {
  const { locale } = useRouter();
  return (
    <div>
      <p>Hubo no existe</p>
      <Link href={"/"} locale={locale}>
        Ir al home
      </Link>
    </div>
  );
}
