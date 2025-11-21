
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
        
        {/* Subsections with headings and links for quick access */}
        <section style={{ marginTop: 28 }}>
          <h2 style={{ marginBottom: 8 }}>Window of Opportunity</h2>
          <p style={{ marginTop: 0, marginBottom: 12 }}>A special feature exploring the digital surveillance ecosystem. <Link href="/robotun" className="window-link">Read the piece</Link>.</p>

          <h2 style={{ marginBottom: 8 }}>The Newman Report</h2>
          <p style={{ marginTop: 0 }}>A review and essays collection. <Link href="/leadlightmag" className="leadlight-link">Read the report</Link>.</p>
        </section>
      </div>
    </main>
  );
}
