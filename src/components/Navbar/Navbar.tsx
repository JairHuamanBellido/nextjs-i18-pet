import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { GetNavigationService } from "../../domain/Navigation/service/GetNavigationService";
import LanguageContainer from "../LanguageSelector/LanguageSelector";
import { StyledLink, StyledNavbar, StyledNavigationList } from "./index.styles";
export default function Navbar() {
  const { locale, asPath } = useRouter();

  const { data: navigation, isSuccess } = useQuery(`navigation-${locale}`, () =>
    GetNavigationService.execute(locale ?? "en")
  );

  const isCurrentPathname = (url: string) => url === asPath;
  if (isSuccess) {
    return (
      <StyledNavbar>
        <h2 style={{ lineHeight: "150%" }}>Hola</h2>
        <div className="flex h-full relative">
          <StyledNavigationList>
            {navigation.navigation_items.map((e) => (
              <Link
                key={`${e.title}-${e.id}`}
                href={e.link.url}
                locale={locale}
                passHref
              >
                <StyledLink isSelected={isCurrentPathname(e.link.url)}>
                  {e.title}
                </StyledLink>
              </Link>
            ))}
          </StyledNavigationList>
          <div className="relative h-full flex items-center">
            <LanguageContainer />
          </div>
        </div>
      </StyledNavbar>
    );
  }
  return null;
}
