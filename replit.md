# SpaceArchitect - Materials Engineering for Space Applications

## Overview

SpaceArchitect is a comprehensive web application for space materials engineering and mission planning. The application provides tools for analyzing material performance in various space environments, comparing materials, exploring space missions and their components, and making informed material selection decisions for aerospace applications.

The system features a modern React frontend with a Node.js/Express backend, utilizing PostgreSQL for data persistence and Drizzle ORM for database management. The application focuses on providing engineers and researchers with detailed material property data, environmental condition analysis, and performance calculations for space-grade materials.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client is built with React 18 using TypeScript and implements a component-based architecture with:
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **UI Framework**: Radix UI primitives with shadcn/ui components for consistent design
- **Styling**: Tailwind CSS with custom design tokens for space-themed aesthetics
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
The server follows a RESTful API design using:
- **Framework**: Express.js with TypeScript for type safety
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **API Structure**: Modular route handlers with validation using Zod schemas
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Hot reload with tsx for rapid development cycles

### Data Storage Solutions
The application uses PostgreSQL as the primary database with:
- **Schema Management**: Drizzle migrations for version-controlled database changes
- **Data Modeling**: Comprehensive schema covering environments, materials, missions, components, and performance metrics
- **Relationships**: Well-defined foreign key relationships between entities
- **Validation**: Zod schemas for runtime type checking and data validation

### Key Data Models
- **Environments**: Space environments (Earth, LEO, Moon, Mars) with physical properties
- **Materials**: Engineering materials with detailed properties and performance characteristics
- **Material Categories**: Organizational structure for material classification
- **Missions**: Space missions with environment associations
- **Components**: Mission components with material assignments
- **Performance Analytics**: Calculated performance metrics for material-environment combinations

### Component Design Pattern
The frontend implements a modular component structure:
- **Tab-based Navigation**: Organized feature access through TabNavigation component
- **Environment Analysis**: EnvironmentSelector for space environment simulation
- **Material Selection**: MaterialSelector with search and filtering capabilities
- **Performance Calculation**: Real-time material performance analysis
- **Comparison Tools**: Side-by-side material comparison functionality
- **Data Export**: CSV export capabilities for analysis results

### Business Logic Layer
Core calculations and utilities include:
- **Material Performance Calculations**: Temperature resistance, radiation tolerance, structural integrity analysis
- **Export Utilities**: Data transformation for CSV and other formats
- **Material Recommendations**: Algorithm-based material selection guidance
- **Environmental Simulation**: Real-time condition override and analysis

## External Dependencies

### Database Infrastructure
- **Neon Database**: PostgreSQL-compatible serverless database platform
- **Connection Pooling**: @neondatabase/serverless for optimized database connections
- **Session Management**: connect-pg-simple for PostgreSQL-based session storage

### UI and Styling Libraries
- **Radix UI**: Comprehensive set of low-level UI primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework with custom space-themed configuration
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel component

### Development and Build Tools
- **TypeScript**: Static type checking across the entire codebase
- **Vite**: Fast build tool with HMR support and optimized production builds
- **ESBuild**: Fast JavaScript bundler for server-side code
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### Data Management
- **TanStack React Query**: Server state management with intelligent caching
- **React Hook Form**: Form handling with validation
- **Date-fns**: Date manipulation and formatting utilities
- **Zod**: Runtime type validation and schema definition

### Specialized Libraries
- **Class Variance Authority**: Type-safe CSS class generation
- **CLSX/Tailwind Merge**: Conditional CSS class composition
- **CMDK**: Command palette interface component
- **Nanoid**: Unique ID generation for database records