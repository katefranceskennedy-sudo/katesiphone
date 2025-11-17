"use client";
import ReloadRedirect from './ReloadRedirect';
import Header from './Header';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReloadRedirect />
      <Header />
      <div style={{ marginLeft: 0, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {children}
      </div>
    </>
  );
}
