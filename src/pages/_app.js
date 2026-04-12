import { useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../styles/globals.css';
import Layout from '../components/Layout';
import CookieBanner from '../components/CookieBanner';
import { BookDemoModalProvider } from '../context/BookDemoModalContext';

const EMAILJS_PUBLIC_KEY = 'z9yVG8CREydEyfAaS';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <BookDemoModalProvider>
      <Layout>
        <Component {...pageProps} />
        <CookieBanner />
      </Layout>
    </BookDemoModalProvider>
  );
}
