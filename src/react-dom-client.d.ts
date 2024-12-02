declare module 'react-dom/client' {
    import { ReactNode } from 'react';
    export function createRoot(container: Element): Root;
    interface Root {
      render(children: ReactNode): void;
    }
  }
  