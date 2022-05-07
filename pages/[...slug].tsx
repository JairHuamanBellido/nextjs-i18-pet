import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import { NextParsedUrlQuery } from "next/dist/server/request-meta";
import Head from "next/head";
import { QueryClient } from "react-query";
import { appComponentMapper } from "../src/core/componentFactory/appComponentMapper";
import { Page } from "../src/domain/model/Page.model";
import { GetPageService } from "../src/domain/Page/services/GetPageService";

interface PageProps {
  page: Page;
}
export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context: GetServerSidePropsContext
) => {
  const { locale, resolvedUrl } = context;

  const pathname = resolvedUrl.split("?")[0];
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(pathname, async () =>
    GetPageService.execute(locale ?? "en", pathname)
  );

  const page = queryClient.getQueryData<Page>(pathname);
  const pageNotFound = page === undefined;
  if (pageNotFound) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page: page,
    },
  };
};
const Home = ({ page }: PageProps) => {
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {page.sections.map((e: any, idx: number) => {
          const target = appComponentMapper.find((d) => d.id === e.componentId);
          if (target !== undefined) {
            const { component: Section } = target;
            return <Section key={`section-${idx}`} {...e} />;
          }
          return null;
        })}
      </main>
    </>
  );
};

export default Home;
