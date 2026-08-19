import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import siteContent from '../../content/site.json';

export default function Layout({ children, seo }) {
  const defaults = siteContent.site;
  const router = useRouter();
  const isHome = router.pathname === '/';

  const pageTitle = seo?.title || defaults.title;
  const pageDesc = seo?.description || defaults.description;
  const canonical = seo?.canonical || `https://outbound-growth.com${router.asPath === '/' ? '' : router.asPath}`;
  const ogImage = seo?.ogImage || null;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonical} />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta property="og:title" content={seo?.ogTitle || pageTitle} />
        <meta property="og:description" content={seo?.ogDescription || pageDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo?.ogTitle || pageTitle} />
        <meta name="twitter:description" content={seo?.ogDescription || pageDesc} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
      </Head>
      <div className={`min-h-screen flex flex-col ${isHome ? 'bg-transparent' : 'bg-bg'}`}>
        <Header />
        <main className="flex-grow relative z-10">{children}</main>
        {!isHome ? <Footer /> : null}
      </div>
    </>
  );
}
