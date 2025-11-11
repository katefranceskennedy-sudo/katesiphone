import Link from 'next/link'

export const metadata = { title: 'The Dotted Lines across Silicon Valley' }

export default function TedsRightMindPage(){
  return (
  <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', background: 'transparent', paddingTop: 36, paddingRight: 36, paddingBottom: 0, paddingLeft: 36 }}>
      <div style={{ width: 'min(92vw,1000px)', background: 'transparent', boxShadow: 'none', borderRadius: 0, overflow: 'visible' }}>
        <div style={{ padding: 0 }} />

        <div style={{ padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ margin: 0, fontSize: 'clamp(1.5rem, 4vw, 3rem)', fontWeight: 400, color: '#111', textAlign: 'center' }}>
            in the making <span aria-hidden="true" style={{ color: '#FFEB3B' }}>💛</span>
          </h1>
        </div>
      </div>
    </main>
  )
}
