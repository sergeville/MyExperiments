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
  { name: 'A/C Condensers', x: 678, y: 430 },
  { name: 'Step Bumpers', x: 670, y: 304 },
  { name: 'Tail Lights', x: 680, y: 170 },
  { name: 'Tailgates', x: 604, y: 94 },
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