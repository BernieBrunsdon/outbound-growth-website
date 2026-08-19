export default function handler(req, res) {
  const baseUrl = 'https://outbound-growth.com';
  const now = new Date().toISOString();

  const pages = [
    { loc: '', priority: '1.0', changefreq: 'weekly' },
    { loc: '/sdr-outsourcing', priority: '0.9', changefreq: 'monthly' },
    { loc: '/sdr-as-a-service', priority: '0.9', changefreq: 'monthly' },
    { loc: '/sales-outsourcing', priority: '0.9', changefreq: 'monthly' },
    { loc: '/lead-generation', priority: '0.9', changefreq: 'monthly' },
    { loc: '/cold-calling', priority: '0.9', changefreq: 'monthly' },
    { loc: '/south-african-sdrs', priority: '0.9', changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url>
    <loc>${baseUrl}${p.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(sitemap);
}
