import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import "@styles/abstracts";
import { defaultTheme } from "@styles/theme";
import { GlobalStyle } from "@styles/globals";
import { ResetStyle } from "@styles/resets";
import Layout from "@components/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <ResetStyle />
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
