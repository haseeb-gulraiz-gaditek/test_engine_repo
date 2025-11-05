# Football Ground Booking Application

A modern web application for browsing and booking football grounds, built with Next.js 16, React 19, and TypeScript.

## Features

- **Ground Browsing**: View available football grounds with detailed information including:
  - Ground name and location
  - Hourly pricing
  - Ground size (in square meters)
  - Surface type (grass, artificial turf, etc.)
- **Easy Booking**: Simple booking interface with date and time selection
- **Responsive Design**: Modern UI built with Tailwind CSS v4
- **Type-Safe**: Full TypeScript implementation for reliability

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Frontend**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Mono (via next/font/google)

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd test_engine_repo
```

2. Navigate to the application directory:
```bash
cd football-booking
```

3. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The application will automatically reload when you make changes to the code.

### Building for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
football-booking/
├── app/
│   ├── page.tsx        # Main booking page (client component)
│   ├── layout.tsx      # Root layout with metadata
│   └── globals.css     # Global Tailwind styles
├── public/             # Static assets
├── next.config.ts      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Current Implementation

The application currently features:

- **Single-Page Interface**: All functionality on one page
- **Hardcoded Data**: 4 football grounds with preset information
- **Client-Side State**: Uses React useState hooks for state management
- **No Backend**: All data is managed client-side (no persistence)
- **Modal-Based Booking**: Interactive booking form with success notifications

## Architecture Notes

- Uses Next.js App Router architecture
- Client-side rendering for interactive components
- No global state management library (uses local component state)
- Tailwind CSS v4 with PostCSS for styling
- Path alias `@/*` configured for imports

## Development Guidelines

For developers working on this project, please refer to `CLAUDE.md` for detailed development guidelines and architectural decisions.

## Future Enhancements

Potential improvements for the application:
- Backend API integration for data persistence
- User authentication system
- Real-time availability checking
- Payment processing
- Booking management dashboard
- Search and filter functionality
- Reviews and ratings system

## License

This project is private and not licensed for public use.

## Support

For issues or questions, please contact the development team.
