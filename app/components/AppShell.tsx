"use client";
import Header from "./Header";
import ReloadRedirect from './ReloadRedirect';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReloadRedirect />
      <Header />
      <div style={{ marginLeft: 0, position: 'relative' }}>
        {children}
      </div>
    </>
  );
}
