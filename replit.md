# Anchal Enterprise Property Advisory

## Overview

Anchal Enterprise is a premium residential property advisory platform built as a modern single-page application. The application showcases multiple residential projects including Lucky Homes, Calista Heights, Radhika Group, and Maharishi properties, providing transparent pricing information, detailed property specifications, and flexible payment plans to potential buyers.

The platform features a clean, modern design with a focus on user experience, making it easy for visitors to browse properties, understand pricing structures, and submit contact inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, built using Vite for optimal development experience and build performance.

**Routing**: Wouter is used for lightweight client-side routing. The application currently has a single main route (Home) with a 404 fallback page.

**UI Component Library**: Shadcn/ui components built on top of Radix UI primitives. This provides accessible, customizable components following the "new-york" style preset with a neutral color scheme. Components are styled using Tailwind CSS with CSS variables for theming.

**State Management**: TanStack Query (React Query) handles server state management and API calls. The application uses a custom query client configured for controlled refetching behavior.

**Styling**: Tailwind CSS with custom design tokens defined in the theme configuration. The design follows a light, minimalist aesthetic with soft pastels, rounded corners, and subtle shadows. Custom CSS variables enable theme consistency across components.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Development Server**: Custom Vite middleware integration for hot module replacement during development. The production build serves static assets from the compiled frontend.

**API Design**: RESTful API with JSON payloads. Currently implements two endpoints:
- POST `/api/contact` - Submit contact inquiries
- GET `/api/contact` - Retrieve all contact inquiries (for admin purposes)

**Request Handling**: Express middleware handles JSON parsing with raw body access, logging, and error handling.

### Data Storage

**Current Implementation**: In-memory storage using a custom `MemStorage` class that implements the `IStorage` interface. This stores users and contact inquiries in Map data structures.

**Database Schema**: Drizzle ORM schema is defined for PostgreSQL with two tables:
- `users` table with id, username, and password fields
- `contact_inquiries` table with id, name, email, phone, and message fields

**Migration Strategy**: Drizzle Kit is configured to generate and manage database migrations in the `./migrations` directory, though the application currently uses in-memory storage.

**Future Database Integration**: The architecture is prepared for PostgreSQL integration via Neon serverless driver (`@neondatabase/serverless`). The storage layer uses an interface pattern to enable swapping from in-memory to database persistence without changing application logic.

### External Dependencies

**UI Components**: 
- Radix UI primitives for accessible headless components (@radix-ui/*)
- Lucide React for iconography
- Embla Carousel for image carousels
- CMDK for command palette functionality

**Form Handling**:
- React Hook Form for form state management
- Zod for schema validation
- @hookform/resolvers for integrating Zod with React Hook Form
- Drizzle-Zod for generating Zod schemas from database schema

**Database & ORM**:
- Drizzle ORM for type-safe database queries
- @neondatabase/serverless for PostgreSQL connectivity
- connect-pg-simple for PostgreSQL session storage

**Styling**:
- Tailwind CSS for utility-first styling
- class-variance-authority for component variant management
- tailwind-merge and clsx for conditional class composition

**Build Tools**:
- Vite for frontend bundling and development server
- esbuild for server-side bundling
- TypeScript for type safety across the stack

**Development Tools**:
- @replit/vite-plugin-* for Replit-specific integrations (cartographer, dev banner, runtime error modal)

**Date Utilities**: date-fns for date formatting and manipulation

**Session Management**: Connect-pg-simple is configured for PostgreSQL-backed sessions, indicating planned authentication features.