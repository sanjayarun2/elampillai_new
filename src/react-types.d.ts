// src/types/react-types.d.ts
import React from 'react';

// Augment existing types to resolve conflicts
declare module 'react' {
  // Ensure consistent type definitions
  interface Component<P = {}, S = {}, SS = any> {
    refs?: {
      [key: string]: React.ReactInstance;
    };
  }

  // Additional type augmentations if needed
  type FC<P = {}> = React.FC<P>;
}

// Resolve potential LibraryManagedAttributes conflict
declare module '@types/react' {
  interface LibraryManagedAttributes<C, P> {
    // Add any specific augmentations if needed
  }
}