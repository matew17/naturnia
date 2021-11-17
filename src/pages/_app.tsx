import { useRouter } from "next/router";
import Script from "next/script";
import type { AppProps } from "next/app";

import { useEffect } from "react";

import { ThemeProvider } from "styled-components";

import "@styles/abstracts";
import { defaultTheme } from "@styles/theme";
import { GlobalStyle } from "@styles/globals";
import { ResetStyle } from "@styles/resets";
import * as gtag from "@utils/gtag";
import Layout from "@components/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            gtag.pageview(url);
        };

        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gtag.GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                        });`,
                }}
            />
            <ThemeProvider theme={defaultTheme}>
                <ResetStyle />
                <GlobalStyle />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}
