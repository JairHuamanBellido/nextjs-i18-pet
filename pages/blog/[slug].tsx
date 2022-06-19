import { GetStaticPaths, GetStaticPathsContext, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { QueryClient } from "react-query";
import StoryPage from "../../src/components/Story";
import { Story } from "../../src/domain/model/Story.model";
import { HttpRestApiLinkStory } from "../../src/infrastructure/api/HttpRestApiStory";

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(context.params?.slug as string, () =>
    HttpRestApiLinkStory.findone(context.params?.slug as string)
  );

  const story = await HttpRestApiLinkStory.findone(
    context.params?.slug as string
  );
  if (!story) {
    return { notFound: true };
  }
  return {
    props: {
      story,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const linkStories = await HttpRestApiLinkStory.findAll();
  const arraySlug = linkStories.map((e) => ({ params: { slug: e.slug } }));
  return {
    fallback: true,
    paths: arraySlug,
  };
};

const Blog = ({ story }: { story: Story }) => {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <p>localding</p>;
  }
  return (
    <>
      <Head>
        <title>{story.title}</title>
        <meta name="description" content={story.slogan} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <StoryPage story={story} />
      </main>
    </>
  );
};

export default Blog;
