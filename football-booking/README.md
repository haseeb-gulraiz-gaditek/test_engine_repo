# Football Ground Booking

A modern web application for browsing and booking football grounds, built with Next.js 16, React 19, and Tailwind CSS 4.

## Overview

Football Ground Booking is a single-page application that allows users to browse available football grounds and book them for specific time slots. The application provides an intuitive interface for viewing ground details including location, pricing, size, and surface type.

## Features

- Browse multiple football grounds with detailed information
- View ground specifications (size, surface type, location)
- Interactive booking system with modal interface
- Date and time slot selection
- Real-time booking confirmation
- Responsive design for desktop and mobile devices
- Modern gradient UI with smooth transitions

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Geist (Vercel's font family)
- **Linting**: ESLint with Next.js configuration

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Navigate to the project directory:
```bash
cd football-booking
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page auto-updates as you edit files. Start by modifying `app/page.tsx`.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run the linter to check code quality:

```bash
npm run lint
```

## Project Structure

```
football-booking/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main application page
│   └── globals.css      # Global Tailwind styles
├── public/              # Static assets
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Architecture

This application uses Next.js 16's App Router architecture with a client-side rendered single-page application approach. All state management is handled through React's `useState` hooks, and the application currently uses hardcoded data for ground listings.

### Ground Data Model

Each football ground includes:
- Name and location
- Pricing per hour
- Size (e.g., "11-a-side", "7-a-side")
- Surface type (e.g., "Natural Grass", "Artificial Turf")
- Visual representation

## Current Limitations

- No backend persistence (bookings are not saved)
- Hardcoded ground data in frontend
- No user authentication
- No payment integration
- Single-page application with no routing

## Future Enhancements

Potential improvements for the application:
- Backend API integration for ground data and bookings
- Database persistence
- User authentication and profiles
- Payment gateway integration
- Multi-page routing with detailed ground pages
- Search and filter functionality
- Availability calendar view
- Email confirmation system

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [React Documentation](https://react.dev) - React library documentation
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/docs) - TypeScript language documentation

## Deploy on Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

For detailed development guidelines and architecture information, see the [CLAUDE.md](../CLAUDE.md) file in the repository root.

## License

This project is private and not licensed for public use.
