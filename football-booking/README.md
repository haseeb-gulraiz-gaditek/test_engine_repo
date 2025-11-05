# Football Ground Booking App

A modern web application for browsing and booking football grounds. Built with Next.js 16, this single-page application provides an intuitive interface for users to explore available pitches and make reservations through a streamlined modal booking flow.

## Features

- Browse available football grounds with details (location, surface type, capacity, price)
- Interactive booking modal with date and time selection
- Real-time availability checking
- Responsive design with Tailwind CSS
- Clean, modern UI with success notifications

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19.2.0
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Fonts:** Geist Sans & Geist Mono
- **Linting:** ESLint 9 with Next.js config

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository and navigate to the project directory:
```bash
cd football-booking
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will auto-reload when you edit `app/page.tsx` or other source files.

## Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
football-booking/
├── app/
│   ├── page.tsx          # Main booking page (client component)
│   ├── layout.tsx        # Root layout with font configuration
│   └── globals.css       # Global styles and Tailwind imports
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## Current Implementation

This is currently a frontend-only application with the following characteristics:

- **Data Storage:** Ground data is hardcoded in `app/page.tsx`
- **State Management:** React hooks (`useState`) for local state
- **Booking Flow:** Client-side simulation with success notifications
- **Persistence:** Bookings are not saved (no backend integration yet)

## Development Notes

- The app uses TypeScript path alias `@/*` mapping to the root directory
- Ground images are currently emoji placeholders
- Color scheme: Green/blue theme with Tailwind utilities
- All form validation and booking logic happens client-side

## Future Enhancements

- Backend API integration for persistent bookings
- User authentication and account management
- Real-time availability updates
- Payment processing integration
- Admin dashboard for ground management
- Email confirmations and booking reminders

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [React Documentation](https://react.dev) - React library
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/docs) - JavaScript with types

## Deploy on Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
