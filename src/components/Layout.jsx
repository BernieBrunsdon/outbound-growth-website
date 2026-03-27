import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Outbound-Growth — Outbound SDR-as-a-Service for US &amp; UK SaaS</title>
        <meta
          name="description"
          content="Dedicated South African SDR teams for SaaS companies in the US and UK. Cold calling, email, LinkedIn, qualification—meetings booked on your calendar. Book a discovery call."
        />
        <meta
          name="keywords"
          content="SDR as a service, outbound SDR, SaaS lead generation, US UK SaaS, South Africa SDR, managed SDR, B2B outbound, discovery calls"
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
        <meta property="og:title" content="Outbound-Growth — Outbound SDR-as-a-Service for US & UK SaaS" />
        <meta property="og:description" content="Fully managed outbound SDR teams from South Africa. Pipeline for US & UK SaaS—book a discovery call." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://outbound-growth.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Outbound-Growth — Outbound SDR-as-a-Service for US & UK SaaS" />
        <meta name="twitter:description" content="Dedicated SDR teams, multi-channel outbound, meetings on your calendar. Book a discovery call." />
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
