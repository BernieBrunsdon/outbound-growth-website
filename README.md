# Outbound-Growth Website

A modern, responsive website for Outbound-Growth - Premium Sales Outsourcing & Consulting. Built with Next.js and styled with Tailwind CSS, featuring a WriterAccess-inspired design.

## Features

- 🎨 **Modern Design**: Clean, professional layout inspired by WriterAccess
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Built with Next.js for optimal speed
- 🔧 **Easy Content Management**: JSON-based content system
- 📧 **Contact Form**: Client-side submissions via [EmailJS](https://www.emailjs.com/)
- 🔒 **Admin Panel**: Simple admin interface for managing submissions
- 🐳 **Docker Ready**: Complete Docker setup for easy deployment
- ♿ **Accessible**: WCAG compliant with keyboard navigation
- 🔍 **SEO Optimized**: Meta tags, sitemap, and structured data

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: JavaScript
- **Email**: EmailJS (`emailjs-com`)
- **Deployment**: Docker

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional)

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp env.example .env
   ```
   Edit `.env` with your configuration:
   ```env
   PORT=3000
   WEBHOOK_URL=your-webhook-url
   NEXT_PUBLIC_ADMIN_PASS=your-admin-password
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## Docker Deployment

### Using Docker Compose (Recommended)

1. **Set up environment:**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

2. **Build and run:**
   ```bash
   docker-compose up -d
   ```

### Using Docker

1. **Build the image:**
   ```bash
   docker build -t outbound-growth .
   ```

2. **Run the container:**
   ```bash
   docker run --env-file .env -p 3000:3000 outbound-growth
   ```

## Content Management

All website content is stored in `content/site.json`. To update content:

1. Edit `content/site.json`
2. The changes will be reflected immediately in development
3. For production, rebuild the application

### Available Content Sections

- **Site Meta**: Title, description, company info
- **Hero**: Main headline and CTAs
- **Services**: Service offerings and features
- **Process**: Step-by-step process description
- **Case Studies**: Success stories and results
- **Testimonials**: Client testimonials

## Admin Panel

Access the admin panel at `/admin` to:
- View contact submissions that were stored via Firebase (legacy) or local `data/contacts.json`
- Export data as CSV

New submissions use **EmailJS** in the browser and are **not** written to Firestore by this app. Default admin password is set in `NEXT_PUBLIC_ADMIN_PASS`.

## API Endpoints

- `GET /api/admin/contacts` - Get contact submissions (admin; Firebase or local file only)
- `GET /api/sitemap` - Generate sitemap.xml
- `GET /sitemap.xml` - Sitemap for search engines

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port | No (default: 3000) |
| `WEBHOOK_URL` | Optional server webhook (unused by default contact flow) | No |
| `NEXT_PUBLIC_ADMIN_PASS` | Admin panel password | Yes |
| `FIREBASE_PROJECT_ID` | Firebase project ID for Firestore | No* |
| `FIREBASE_CLIENT_EMAIL` | Firebase service account client email | No* |
| `FIREBASE_PRIVATE_KEY` | Firebase service account private key | No* |

\* If Firebase is omitted, the admin panel reads local `data/contacts.json` if present. The live contact form sends through **EmailJS**; configure service, template, and public key in `src/lib/contactSubmit.js` and `src/pages/_app.js`.

### Firebase setup (optional, recommended for production)

1. In Firebase Console, open your project and enable Firestore Database.
2. Go to Project Settings -> Service accounts -> Generate new private key.
3. Add the service account values to your deployment environment:
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_CLIENT_EMAIL`
   - `FIREBASE_PRIVATE_KEY` (keep escaped `\n` line breaks in env var format)

## File Structure

```
outbound-growth/
├── public/
│   ├── images/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ServicesGrid.jsx
│   │   ├── ProcessSteps.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Layout.jsx
│   │   └── CookieBanner.jsx
│   ├── pages/
│   │   ├── api/
│   │   │   ├── admin/
│   │   │   │   └── contacts.js
│   │   │   └── sitemap.js
│   │   ├── admin.js
│   │   ├── index.js
│   │   └── _app.js
│   └── styles/
│       └── globals.css
├── content/
│   └── site.json
├── data/
│   └── contacts.json (auto-created)
├── tailwind.config.js
├── next.config.js
├── package.json
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Customization

### Design Tokens

The design system uses these custom tokens (defined in `tailwind.config.js`):

- **Primary Color**: `#0B63D6` (bright medium blue)
- **Accent Color**: `#06A77D` (teal green)
- **Text Color**: `#0F1724` (dark ink)
- **Muted Color**: `#6B7280` (gray)
- **Background**: `#FFFFFF` (white)
- **Border Radius**: `12px`
- **Font**: Inter, system fonts

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/pages/index.js`
3. Update navigation in `src/components/Header.jsx`

### Modifying Styles

- Global styles: `src/styles/globals.css`
- Component styles: Use Tailwind classes
- Custom CSS: Add to `globals.css` or component files

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Node.js:
- Netlify
- AWS
- Google Cloud
- DigitalOcean
- Heroku

## Integrations

### Calendly Integration

- Update Calendly links in `content/site.json`
- Replace `https://calendly.com/outbound-growth/consult` with your Calendly URL

### HubSpot Integration

- Add HubSpot tracking code to `src/components/Layout.jsx`
- Update contact form to send data to HubSpot API

### Email (EmailJS)

The contact form and “Book a discovery call” modal send mail through **EmailJS** from the browser. Adjust **public key** (in `src/pages/_app.js`), **service ID**, and **template ID** (in `src/lib/contactSubmit.js`) to match your EmailJS dashboard. Template parameters: `name`, `email`, `phone`, `company`, `message`.

## Support

For questions or support:
- Email: bernie@outbound-growth.com
- Phone: +27 82 555 0123

## License

© 2025 Outbound-Growth. All rights reserved.
