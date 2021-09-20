import '../styles/globals.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className="column is-8-desktop is-offset-2-desktop">
            <Component {...pageProps} />
        </main>
    );
}

export default MyApp;
