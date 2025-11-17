
export const metadata = { title: 'Publications' };

import PublicationsTitle from "../components/PublicationsTitle";

export default function PublishedWorkPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 36 }}>
      <div className="publications-page-shift">
        <PublicationsTitle />
      </div>
    </main>
  );
}
