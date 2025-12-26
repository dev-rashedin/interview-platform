import { ReactNode } from 'react';
import { SidebarProvider } from '@/components/SidebarToggleContext';

export default function QnaPageLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <main className="min-h-screen">{children}</main>
    </SidebarProvider>
  );
}
