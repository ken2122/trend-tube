import { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../src/assets/styles/global.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../src/assets/theme';
import Header from '../src/components/Header/Header';
import ScrollableTab from '../src/components/Header/ScrollableTab';
import { PageProps } from '../src/types/type';

type AppPageProps = Omit<AppProps<PageProps>, 'pageProps'> & {
    pageProps: PageProps;
};

export default function App({
    Component,
    pageProps,
}: AppPageProps): JSX.Element {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>デモECサイト</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Header />
                <ScrollableTab />
                <main className={'mt-28'}>
                    <Component {...pageProps} />
                </main>
            </ThemeProvider>
        </React.Fragment>
    );
}
