# Dasha's React Playground 🎮

Welcome to Dasha's educational React playground! This project is designed to help you learn React fundamentals through hands-on practice with components, props, and data management.

## 🎯 What You'll Learn

- **React Components**: How to create and use reusable components
- **Props**: Passing data between components
- **TypeScript**: Type safety with interfaces
- **CSS Styling**: Component-specific styling
- **Data Management**: Working with arrays and objects
- **Modern React**: Using React 19 with Vite

## 🏥 Project Overview

This playground simulates a patient management system where you can:
- Display patient information in card components
- Show wellness indices for each patient
- Practice with different data structures
- Experiment with component composition

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Card.tsx          # Patient card component
│   └── card.css          # Card-specific styles
├── data.js               # Sample patient data
├── App.tsx               # Main application component
├── App.css               # Global styles
└── main.tsx              # Application entry point
```

## 🧩 Key Components

### Card Component (`src/components/Card.tsx`)
A reusable component that displays patient information:
- Patient image
- Name
- Condition/date
- Wellness index

**Props Interface:**
```typescript
interface TransactionsCardProps {
    title: string;      // Patient name
    date: string;       // Condition or date
    image: string;      // Image URL
    wellnessIndex: string; // Wellness score
}
```

### Data Structure (`src/data.js`)
Contains sample patient data:
- Individual patient object (`alicia`)
- Array of patients (`patients`)

## 🎨 Styling

The project uses:
- **Component-scoped CSS**: Each component has its own CSS file
- **Flexbox**: For responsive layouts
- **Modern CSS**: Border radius, shadows, and transitions
- **Responsive Design**: Cards adapt to different screen sizes

## 🛠️ Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 🎓 Learning Exercises

### Beginner Level
1. **Uncomment the Alicia card** in `App.tsx` (lines 18-23)
2. **Change patient data** in `data.js`
3. **Modify card styling** in `card.css`

### Intermediate Level
1. **Uncomment the patients array** in `App.tsx` (lines 25-32)
2. **Add a new patient** to the `patients` array
3. **Create a new component** for displaying patient statistics

### Advanced Level
1. **Add state management** to filter patients
2. **Implement search functionality**
3. **Add form components** for adding new patients
4. **Create a patient detail view**

## 🐛 Common Issues & Solutions

### Component Not Rendering
- Check that the component is properly imported
- Verify the component is exported correctly
- Ensure all required props are passed

### TypeScript Errors
- Make sure all props match the interface definition
- Check that imported types are correct
- Verify file extensions (.tsx for components)

### Styling Issues
- Check CSS class names match between component and CSS file
- Verify CSS file is imported in the component
- Use browser dev tools to inspect styles

## 🎯 Next Steps

Once you're comfortable with this playground, consider exploring:
- React Hooks (useState, useEffect)
- State management libraries (Redux, Zustand)
- Routing (React Router)
- API integration
- Testing (Jest, React Testing Library)

## 💡 Tips for Learning

1. **Experiment freely** - This is a playground, so break things and fix them!
2. **Read the code** - Understanding existing code is as important as writing new code
3. **Use browser dev tools** - Inspect elements and debug issues
4. **Ask questions** - Don't hesitate to ask for help when stuck
5. **Build incrementally** - Start small and add features gradually

## 🍰 Made with Syrniki

This playground was created with love and syrniki (Ukrainian pancakes) to make learning React fun and delicious! 🥞

---

Happy coding, Dasha! 🚀