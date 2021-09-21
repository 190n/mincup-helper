import '../styles/globals.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className="column is-10-desktop is-offset-1-desktop is-8-widescreen is-offset-2-widescreen">
            <Component {...pageProps} />
        </main>
    );
}

export default MyApp;
