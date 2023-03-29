import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '../config/validateEnv';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
