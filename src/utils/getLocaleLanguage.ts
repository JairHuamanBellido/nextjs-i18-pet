import { GetServerSidePropsContext } from "next";

export const getLocaleLanguage = (context: GetServerSidePropsContext) => {
  const language =
    context.req.headers["accept-language"]?.split(",")[0] || "en-US";
  return language;
};
