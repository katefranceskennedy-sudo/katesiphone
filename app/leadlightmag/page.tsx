import Link from 'next/link'

export const metadata = { title: 'The Newman Report' }

export default function LeadlightMagPage(){
  return (
    <main style={{ background: '#fff', minHeight: '100vh', padding: 36, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div style={{ width: 'min(92vw,1000px)', background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.06)', borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ padding: 12, borderBottom: '1px solid rgba(0,0,0,0.06)', background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontFamily: 'Playfair Display, serif' }}>The Newman Report: Review of Issue 1 — LeadLight Magazine</h2>
          <Link href="/" aria-label="Home">
            <img src="/Home1.gif" alt="Home" className="home-arrow" />
          </Link>
        </div>
        <img src="/leadlightmag.gif" alt="Leadlight Magazine" style={{ width: '100%', display: 'block' }} />
      </div>
    </main>
  )
}
