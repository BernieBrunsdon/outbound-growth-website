# Outbound-Growth Website

A modern, responsive website for Outbound-Growth - Premium Sales Outsourcing & Consulting. Built with Next.js and styled with Tailwind CSS, featuring a WriterAccess-inspired design.

## Features

- 🎨 **Modern Design**: Clean, professional layout inspired by WriterAccess
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Built with Next.js for optimal speed
- 🔧 **Easy Content Management**: JSON-based content system
- 📧 **Contact Form**: Functional contact form with email notifications
- 🔒 **Admin Panel**: Simple admin interface for managing submissions
- 🐳 **Docker Ready**: Complete Docker setup for easy deployment
- ♿ **Accessible**: WCAG compliant with keyboard navigation
- 🔍 **SEO Optimized**: Meta tags, sitemap, and structured data

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: JavaScript
- **Email**: Nodemailer
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
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-email
   SMTP_PASS=your-password
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
- **Integrations**: Supported tools and platforms

## Admin Panel

Access the admin panel at `/admin` to:
- View contact form submissions
- Export data as CSV
- Manage form data

Default admin password is set in `NEXT_PUBLIC_ADMIN_PASS` environment variable.

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/admin/contacts` - Get contact submissions (admin)
- `GET /api/sitemap` - Generate sitemap.xml
- `GET /sitemap.xml` - Sitemap for search engines

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port | No (default: 3000) |
| `SMTP_HOST` | SMTP server for emails | No |
| `SMTP_PORT` | SMTP port | No (default: 587) |
| `SMTP_USER` | SMTP username | No |
| `SMTP_PASS` | SMTP password | No |
| `WEBHOOK_URL` | Webhook for form submissions | No |
| `NEXT_PUBLIC_ADMIN_PASS` | Admin panel password | Yes |

## File Structure

```
outbound-growth/
├── public/
│   ├── images/
│   │   └── integrations/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ServicesGrid.jsx
│   │   ├── ProcessSteps.jsx
│   │   ├── IntegrationsGrid.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Layout.jsx
│   │   └── CookieBanner.jsx
│   ├── pages/
│   │   ├── api/
│   │   │   ├── contact.js
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

### Email Configuration

Configure SMTP settings in `.env`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Support

For questions or support:
- Email: bernie@outbound-growth.com
- Phone: +27 82 555 0123

## License

© 2025 Outbound-Growth. All rights reserved.
