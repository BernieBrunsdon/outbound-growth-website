import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Outbound-Growth — Premium Sales Outsourcing & Consulting</title>
        <meta 
          name="description" 
          content="Boutique international sales outsourcing and consulting. Managed SDR seats from South Africa for UK & US SaaS. Dashboard access, guaranteed process, measurable growth." 
        />
        <meta 
          name="keywords" 
          content="sales outsourcing, SDR, managed SDR, lead generation, HubSpot, Apollo, sales consulting, UK sales, US sales, South Africa" 
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
        <meta property="og:title" content="Outbound-Growth — Premium Sales Outsourcing & Consulting" />
        <meta property="og:description" content="Boutique international sales outsourcing and consulting. Managed SDR seats from South Africa for UK & US SaaS." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://outbound-growth.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Outbound-Growth — Premium Sales Outsourcing & Consulting" />
        <meta name="twitter:description" content="Boutique international sales outsourcing and consulting. Managed SDR seats from South Africa for UK & US SaaS." />
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
