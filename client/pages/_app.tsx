import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { AppRoot } from "@components/AppRoot";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        fontFamily: "Roboto, sans-serif",
        headings: {
          fontFamily: "Montserrat, sans-serif",
        },
        components: {
          Anchor: {
            styles: {
              root: {
                fontFamily: "Montserrat, sans-serif",
              },
            },
          },
        },
        globalStyles: (theme) => ({
          body: {
            backgroundColor: "#F7F7F7",
            padding: "1.5rem",
          },
          ".disabled": {
            pointerEvents: "none",
            cursor: "default",
            opacity: 0.5,
          },
          ".blog-content p": {
            fontSize: 18,
            lineHeight: "32px",
          },
          ".blog-content h2": {
            fontSize: "2.5rem",
            lineHeight: "38px",
          },
          ".blog-content ul, ol": {
            fontSize: 18,
            lineHeight: "40px",
          },
          ".blog-content a": {
            fontSize: 18,
            color: "red",
          },
          ".blog-content img": {
            width: "100%",
            height: "auto",
          },
        }),
      }}
    >
      <AppRoot>
        <Component {...pageProps} />
      </AppRoot>
    </MantineProvider>
  );
}

export default MyApp;
