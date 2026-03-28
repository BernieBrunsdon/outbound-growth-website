import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import siteContent from '../../content/site.json';

export default function Layout({ children }) {
  const { title, description } = siteContent.site;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="OG Pulse, outbound transparency dashboard, SDR as a service, outbound cell, B2B SaaS outbound, cybersecurity SaaS, AI SaaS, US UK SaaS, South Africa SDR, Apollo CRM outbound, discovery calls"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" 
          rel="stylesheet" 
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://outbound-growth.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
