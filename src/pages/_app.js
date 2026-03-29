import '../styles/globals.css';
import Layout from '../components/Layout';
import CookieBanner from '../components/CookieBanner';
import { BookDemoModalProvider } from '../context/BookDemoModalContext';

export default function App({ Component, pageProps }) {
  return (
    <BookDemoModalProvider>
      <Layout>
        <Component {...pageProps} />
        <CookieBanner />
      </Layout>
    </BookDemoModalProvider>
  );
}
