"use client";
import Header from "./Header";
import ReloadRedirect from './ReloadRedirect';
import SidebarScroll from './sidebarScroll';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReloadRedirect />
      <Header />
      <SidebarScroll />
      <div style={{ marginLeft: 0 }}>{children}</div>
    </>
  );
}
