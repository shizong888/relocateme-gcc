# RelocateMe GCC

A professional website for RelocateMe, a relocation and corporate services company specializing in the Gulf Cooperation Council (GCC) region.

## About

RelocateMe provides comprehensive relocation services, professional services, and immigration support for individuals and companies moving to the GCC region, including the United Arab Emirates, Saudi Arabia, Qatar, Bahrain, Oman, and Kuwait.

## Features

- **Modern Next.js Architecture**: Built with Next.js 15 and React 19
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Beautiful motion effects using Framer Motion
- **Service Pages**:
  - Relocation Services
  - Corporate Services
  - Contact Page
- **Component Library**: Custom UI components built with shadcn/ui
- **Form Handling**: Integrated contact forms for lead generation

## Tech Stack

- **Framework**: Next.js 15.1.2
- **React**: 19.0.0
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shizong888/relocateme-gcc.git
cd relocateme-gcc
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
relocate-me-gcc/
├── app/                          # Next.js app directory
│   ├── contact/                  # Contact page
│   ├── corporate-services/       # Corporate services page
│   ├── relocation/               # Relocation services page
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── blocks/                   # Feature blocks
│   ├── sections/                 # Page sections
│   └── ui/                       # UI components
├── lib/                          # Utility functions
└── public/                       # Static assets
```

## Key Pages

- **Homepage**: Hero section with geometric shapes, local expertise, services overview, and testimonials
- **Relocation Services**: Comprehensive relocation support including home search, school selection, and settling-in services
- **Corporate Services**: Business setup, PRO services, and corporate support
- **Contact**: Contact form for inquiries

## Deployment

The site is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/shizong888/relocateme-gcc)

Or deploy manually:

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Development

- **Linting**: `npm run lint`
- **Type Checking**: TypeScript is configured for strict type checking

## Brand Colors

The site uses a custom brand color scheme defined in CSS variables:
- Primary Brand Color: HSL-based color system
- Configurable through `globals.css`

## Contributing

This is a private project for RelocateMe. For any changes or updates, please contact the development team.

## License

All rights reserved. This project is proprietary and confidential.

---

Built with ❤️ for RelocateMe
