import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/components/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyle } from "../src/theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme/Theme";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
