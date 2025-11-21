
import Link from 'next/link';

export const metadata = { title: 'Publications' };

export default function PublishedWorkPage() {
  return (
    <main style={{ minHeight: '100vh', padding: 36 }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', marginBottom: 18 }}>Publications</h1>
        <p style={{ marginBottom: 8 }}>Selected pieces (quick links):</p>
        <ul style={{ paddingLeft: 18 }}>
          <li>
            <Link href="/robotun" className="window-link">Window of Opportunity</Link>
          </li>
          <li>
            <Link href="/leadlightmag" className="leadlight-link">The Newman Report</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
