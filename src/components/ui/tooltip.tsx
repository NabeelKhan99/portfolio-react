// src/components/ui/tooltip.tsx
import * as React from 'react';

// Define the TooltipProvider component
export const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

// Define the Tooltip component
export const Tooltip = ({ children, content }: { children: React.ReactNode; content: string }) => {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltip-content">{content}</span>
    </div>
  );
};

// Export the components
export default { TooltipProvider, Tooltip };