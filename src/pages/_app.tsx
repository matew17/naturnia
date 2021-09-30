import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import '@styles/styles.scss';
import { defaultTheme } from '@styles/theme';
import Layout from '@components/layout';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
