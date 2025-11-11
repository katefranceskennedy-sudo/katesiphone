import Link from 'next/link'

export const metadata = { title: "Hold on, if art is the answer, you&apos;re home" }

export default function BooksPage(){
  return (
    <main style={{ background: '#fff', minHeight: '100vh', padding: 36, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div style={{ width: 'min(92vw,1000px)', background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.06)', borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ padding: 0, borderBottom: '1px solid rgba(0,0,0,0.06)', background: '#fff' }} />
        <img src="/books.gif" alt="Books" style={{ width: '100%', display: 'block' }} />
      </div>
    </main>
  )
}
