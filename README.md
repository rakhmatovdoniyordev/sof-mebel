# Sof Mebel - Premium Furniture E-commerce Website

A modern, responsive e-commerce website for Sof Mebel - a premium furniture company offering high-quality, stylish furniture solutions for homes and offices.

##🪑 Overview

Sof Mebel is a comprehensive furniture e-commerce platform built with React and TypeScript. The website showcases premium furniture collections with interactive features including product browsing, shopping cart functionality, and wishlist management.

### Key Features

- **Responsive Design**: Fully mobile-friendly with adaptive layouts
- **Interactive UI**: Smooth animations and hover effects using AOS library
- **Product Showcase**: Detailed furniture catalog with pricing and descriptions
- **Shopping Features**: Add to cart, wishlist functionality, and stock management
- **Modern Styling**: Tailwind CSS with custom color palette and typography
- **Performance Optimized**: Built with Vite for fast development and production builds

##🛠️ Technology Stack

### Frontend

- **React 19.2.0** - Modern UI library with hooks and functional components
- **TypeScript 5.9.3** - Type-safe JavaScript development
- **Tailwind CSS 3.4.19** - Utility-first CSS framework
- **Vite 7.3.1** - Next-generation frontend tooling
- **React Icons 5.5.0** - Comprehensive icon library
- **AOS 2.3.4** - Animate On Scroll library for smooth animations

### Development Tools

- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **SWC** - Fast JavaScript/TypeScript compiler

## 🎨 Design System

### Color Palette

- **Primary**: `#2E4936` (Forest Green)
- **Secondary**: `#ECE7DC` (Cream)
- **Accent**: `#F39C12` (Orange)
- **Text**: `#2E4936` (Dark Green)

### Typography

- **Primary Font**: Playfair Display (Serif)
- **Base Size**: 16px
- **Responsive scaling** across all devices

##📁 Project Structure

```
src/
├── components/
│   ├── About/          # Company information section
│   ├── Features/       # Key features and statistics
│   ├── Footer/         # Website footer with navigation
│   ├── Furniture/      # Product catalog display
│   ├── Header/         # Navigation and top bar
│  └── Hero/           # Main landing section
├── static/             # Data and content
├── types/              # TypeScript interfaces
├── App.css             # Global styles
├── App.tsx             # Main application component
├── index.css           # Tailwind imports
└── main.tsx            # Application entry point
```

##🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/sof-mebel.git
cd sof-mebel
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint code analysis

##📱 Responsive Features

The website is fully responsive and optimized for:

- **Mobile devices** (320px+)
- **Tablets** (768px+)
- **Desktops** (1024px+)
- **Large screens** (1280px+)

##🔧ization

### Adding New Products

Modify `src/static/index.ts` to add new furniture items:

```typescript
{
  id: 7,
  name: 'New Furniture Item',
  category: 'Category',
  price: 1500000,
  originalPrice: 2000000,
  image: 'image-url',
  description: 'Product description',
  inStock: true
}
```

### Theme Customization

Update colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'main': '#your-color',
      'second': '#your-secondary-color'
    }
  }
}
```

##🌐 Deployment

### Production Build

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service.
