# Next.js Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Part 2

Certainly! Below is a detailed document outlining the steps for implementing the interactive car parts diagram with draggable points and clipboard functionality.

---
## Interactive Car Parts Diagram with Draggable Points and Clipboard Functionality

## Introduction

This guide walks you through creating an interactive car parts diagram in a React application. Users can click on different parts of the car to see their coordinates, drag these points to new positions, and copy the coordinates to the clipboard on mouse release.

## Step-by-Step Implementation

### 1. Initial Setup

Ensure you have a React environment set up. You can use Create React App for quick setup:

```bash
npx create-react-app car-parts-diagram
cd car-parts-diagram
npm start
```

### 2. Create a TypeScript Component

We will be using TypeScript for type safety. Ensure your project supports TypeScript:

```bash
npm install typescript @types/node @types/react @types/react-dom
```

### 3. Define the Car Parts and Types

Create a new component `Page.tsx` and define the car parts array and types.

```tsx
"use client"; // Use this directive to make the component a Client Component

import { useState, useRef, MouseEvent, CSSProperties } from 'react';

const carParts = [
  { name: 'Hoods', x: 200, y: 50 },
  { name: 'Header & Nose Panels', x: 100, y: 120 },
  { name: 'Radiator Supports', x: 80, y: 180 },
  { name: 'Grilles', x: 200, y: 200 },
  // Add more parts here...
];

type CarPart = {
  name: string;
  x: number;
  y: number;
};
```

### 4. Implement the Component

Define the component, manage state, and handle mouse events for dragging and copying coordinates.

```tsx
const Page = () => {
  const [parts, setParts] = useState<CarPart[]>(carParts);
  const [draggedPart, setDraggedPart] = useState<CarPart | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>, part: CarPart) => {
    event.preventDefault();
    setDraggedPart(part);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!draggedPart) return;

    const rect = containerRef.current!.getBoundingClientRect();
    const newX = ((event.clientX - rect.left) / rect.width) * 800;
    const newY = ((event.clientY - rect.top) / rect.height) * 600;

    const updatedParts = parts.map((part) =>
      part.name === draggedPart.name ? { ...part, x: newX, y: newY } : part
    );
    setParts(updatedParts);
  };

  const handleMouseUp = () => {
    if (draggedPart) {
      const formattedCoordinates = `x: ${Math.round(draggedPart.x)}, y: ${Math.round(draggedPart.y)}`;
      navigator.clipboard.writeText(formattedCoordinates)
        .then(() => {
          console.log('Coordinates copied to clipboard:', formattedCoordinates);
        })
        .catch(err => {
          console.error('Failed to copy coordinates to clipboard', err);
        });
    }
    setDraggedPart(null);
  };

  const pointStyle: CSSProperties = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    cursor: 'pointer',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    transition: 'all 0.2s ease-in-out',
  };

  return (
    <div
      style={{ textAlign: 'center', padding: '20px' }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <h1 style={{ marginBottom: '20px' }}>Interactive Car Parts Diagram</h1>
      <div
        ref={containerRef}
        style={{ position: 'relative', width: '100%', height: '600px', margin: '0 auto' }}
      >
        <img
          src="/images/car.jpeg" // Ensure this path matches your image location
          alt="Car Parts Diagram"
          style={{ width: '100%', height: '100%' }}
        />
        {parts.map((part) => (
          <div
            key={part.name}
            style={{
              ...pointStyle,
              position: 'absolute',
              top: `${(part.y / 600) * 100}%`, 
              left: `${(part.x / 800) * 100}%`,
              backgroundColor: draggedPart && draggedPart.name === part.name ? 'rgba(255, 0, 0, 0.8)' : 'rgba(255, 0, 0, 0.6)',
            }}
            onMouseDown={(e) => handleMouseDown(e, part)}
            onMouseEnter={(e) => {
              if (!draggedPart || draggedPart.name !== part.name) {
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.2)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
              }
            }}
            onMouseLeave={(e) => {
              if (!draggedPart || draggedPart.name !== part.name) {
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.6)';
              }
            }}
          />
        ))}
        {draggedPart && (
          <div
            style={{
              position: 'absolute',
              top: `${(draggedPart.y / 600) * 100}%`,
              left: `${(draggedPart.x / 800) * 100}%`,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '5px',
              transform: 'translate(-50%, -50%)',
              zIndex: 3,
            }}
          >
            <span>{`x: ${Math.round(draggedPart.x)}, y: ${Math.round(draggedPart.y)}`}</span>
          </div>
        )}
      </div>
      {draggedPart && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
          <h2>{draggedPart.name}</h2>
          <p>This is the {draggedPart.name.toLowerCase()} of the car. Drag it to a different position and click on different parts to learn more about them.</p>
        </div>
      )}
    </div>
  );
};

export default Page;
```

### 5. Usage of the App

Ensure the image path is correct by placing your image in the specified location (`/public/images/car.jpeg`).

### 6. Run the Application

Start your React application:

```bash
npm start
```

Navigate to the component to see the interactive diagram. Drag the points, and upon mouse release, the coordinates will be copied to the clipboard in the format `x: <x>, y: <y>`.

## Conclusion

This guide incorporates various features to create an engaging interactive car parts diagram, including dragging capabilities and clipboard functionality, enhancing user experience and interaction.

---

This document should help you set up and understand each step of the process to create the interactive car parts diagram with draggable points and clipboard functionality.

-----------------------------------

Last update of code:
```jsx
"use client"; // Use this directive to make the component a Client Component

import { useState, useRef, MouseEvent, CSSProperties } from 'react';

// Adjusted coordinates to align with the parts in the image
const carParts = [
  { name: 'Hoods', x: 232, y: 113 },
  { name: 'Header & Nose Panels', x: 142, y: 181 },
  { name: 'Radiator Supports', x: 95, y: 297 },
  { name: 'Grilles', x: 95, y: 375 },
  { name: 'Bumpers', x: 114, y: 496 },
  { name: 'Headlights', x: 238, y: 499 },
  { name: 'Fenders', x: 346, y: 485 },
  { name: 'Radiators', x: 460, y: 508 },
  { name: 'Doors', x: 500, y: 180 },
  { name: 'A/C Condensers', x: 720, y: 340 },
  { name: 'Step Bumpers', x: 720, y: 270 },
  { name: 'Tail Lights', x: 680, y: 170 },
  { name: 'Tailgates', x: 480, y: 50 },
  { name: 'Mirrors', x: 411, y: 74 },
];

type CarPart = {
  name: string;
  x: number;
  y: number;
};

const Page = () => {
  const [parts, setParts] = useState<CarPart[]>(carParts);
  const [draggedPart, setDraggedPart] = useState<CarPart | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>, part: CarPart) => {
    event.preventDefault();
    setDraggedPart(part);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!draggedPart) return;

    const rect = containerRef.current!.getBoundingClientRect();
    const newX = ((event.clientX - rect.left) / rect.width) * 800;
    const newY = ((event.clientY - rect.top) / rect.height) * 600;

    const updatedParts = parts.map((part) =>
      part.name === draggedPart.name ? { ...part, x: newX, y: newY } : part
    );
    setParts(updatedParts);
  };

  const handleMouseUp = () => {
    if (draggedPart) {
      const formattedCoordinates = `x: ${Math.round(draggedPart.x)}, y: ${Math.round(draggedPart.y)}`;
      navigator.clipboard.writeText(formattedCoordinates)
        .then(() => {
          console.log('Coordinates copied to clipboard:', formattedCoordinates);
        })
        .catch(err => {
          console.error('Failed to copy coordinates to clipboard', err);
        });
    }
    setDraggedPart(null);
  };

  const pointStyle: CSSProperties = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    cursor: 'pointer',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    transition: 'all 0.2s ease-in-out',
  };

  return (
    <div
      style={{ textAlign: 'center', padding: '20px' }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <h1 style={{ marginBottom: '20px' }}>Interactive Car Parts Diagram</h1>
      <div
        ref={containerRef}
        style={{ position: 'relative', width: '100%', height: '600px', margin: '0 auto' }}
      >
        <img
          src="/images/car.jpeg" // Ensure this path matches your image location
          alt="Car Parts Diagram"
          style={{ width: '100%', height: '100%' }}
        />
        {parts.map((part) => (
          <div
            key={part.name}
            style={{
              ...pointStyle,
              position: 'absolute',
              top: `${(part.y / 600) * 100}%`, // Adjust percentage based on assumed image height
              left: `${(part.x / 800) * 100}%`, // Adjust percentage based on assumed image width
              backgroundColor: draggedPart && draggedPart.name === part.name ? 'rgba(255, 0, 0, 0.8)' : 'rgba(255, 0, 0, 0.6)',
            }}
            onMouseDown={(e) => handleMouseDown(e, part)}
            onMouseEnter={(e) => {
              if (!draggedPart || draggedPart.name !== part.name) {
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.2)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
              }
            }}
            onMouseLeave={(e) => {
              if (!draggedPart || draggedPart.name !== part.name) {
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.6)';
              }
            }}
          />
        ))}
        {draggedPart && (
          <div
            style={{
              position: 'absolute',
              top: `${(draggedPart.y / 600) * 100}%`,
              left: `${(draggedPart.x / 800) * 100}%`,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '5px',
              transform: 'translate(-50%, -50%)',
              zIndex: 3,
            }}
          >
            <span>{`x: ${Math.round(draggedPart.x)}, y: ${Math.round(draggedPart.y)}`}</span>
          </div>
        )}
      </div>
      {draggedPart && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
          <h2>{draggedPart.name}</h2>
          <p>This is the {draggedPart.name.toLowerCase()} of the car. Drag it to a different position and click on different parts to learn more about them.</p>
        </div>
      )}
    </div>
  );
};

export default Page;
```
