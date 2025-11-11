import HoverScaleImg from './components/HoverScaleImg';
import Link from 'next/link';
import TopEmojisAnchor from './components/TopEmojisAnchor';

export default function HomePage() {
  return (
    <>
      <main
        style={{
          padding: '18px 12px',
          maxWidth: 1440,
          marginLeft: 'auto',
          marginRight: 0,
          position: 'relative',
          top: '-185px', // moved down 25px so tiles layer over other content by 25px
          overflow: 'hidden',
          minHeight: 'calc(1024px - 200px)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Move the actual Digital Culture column onto the homepage, absolutely positioned to the right
            and layered behind content. This uses the same structure as `app/digital-culture/page.tsx` so
            TopEmojisAnchor can detect the column (it looks for #digital-culture-column). */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 12,
            top: 20,
            width: 'min(44vw,520px)',
            /* allow the column to extend vertically; keep it behind content */
            zIndex: 1,
            pointerEvents: 'none',
            /* moved down 400px: previously top:20 + translateY(-20px) == 0; now translateY(380px) == +400px */
            transform: 'translateY(380px)',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <main
            id="digital-culture-column"
            style={{
              padding: '28px 12px',
              maxWidth: 'min(44vw,520px)',
              margin: 0,
              textAlign: 'center',
              background: 'rgba(243,232,255,0.6)',
              /* make text in the purple column a dark pink */
              color: '#ad1457',
              minHeight: '100vh',
              borderRadius: 12,
              pointerEvents: 'none',
            }}
          >
            {/* Top emojis row (moved from the Digital Culture page) */}
            <TopEmojisAnchor />

            {/* content intentionally left out (matches Digital Culture page where content was removed) */}
          </main>
        </div>
        <div
          style={{
            display: 'flex',
            gap: 28,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <div style={{ position: 'relative', marginLeft: 0, marginTop: 25 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 28,
                position: 'relative',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: 28,
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}
              >
                {/* Tile 1 */}
                <div style={{ width: 'min(37.5vw,217px)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Link href="/suckitup" aria-label="Open Suck it up page">
                    <HoverScaleImg
                      src="/two.gif"
                      alt="Two"
                      style={{ width: '100%', height: 'auto', display: 'block', border: '2px solid black' }}
                      hoverScale={1.08}
                    />
                  </Link>
                  <h3 className="article-title">Suck it up!</h3>
                </div>

                {/* Tile 2 */}
                <div style={{ width: 'min(37.5vw,217px)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Link href="/tedsrightmind" aria-label="View teds right mind">
                    <HoverScaleImg
                      src="/tedsrightmind.gif"
                      alt="Teds Right Mind"
                      style={{ width: '100%', height: 'auto', display: 'block', border: '2px solid black' }}
                      hoverScale={1.08}
                    />
                  </Link>
                  <h3
                    className="article-title"
                    style={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                      textDecorationThickness: '3px',
                    }}
                  >
                    The Dotted Lines across Silicon Valley
                  </h3>
                </div>

                {/* Tile 3 */}
                <div style={{ width: 'min(37.5vw,217px)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Link href="/window-of-opportunity" aria-label="Open Window of Opportunity page">
                    <HoverScaleImg
                      src="/robotun.gif"
                      alt="Robot Un"
                      style={{ width: '100%', height: 'auto', display: 'block', border: '2px solid black' }}
                      hoverScale={1.08}
                    />
                  </Link>
                  <h3 className="article-title">Window of Opportunity</h3>
                </div>

                {/* Tile 4 */}
                <div style={{ width: 'min(37.5vw,217px)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Link href="/newmanreport" aria-label="Open Newman Report page">
                    <HoverScaleImg
                      src="/leadlightmag.gif"
                      alt="Leadlight Magazine"
                      style={{ width: '100%', height: 'auto', display: 'block', border: '2px solid black' }}
                      hoverScale={1.08}
                    />
                  </Link>
                  <h3 className="article-title">
                    The Newman Report: Review of Issue 1 — LeadLight Magazine
                  </h3>
                </div>

                {/* Tile 5 */}
                <div style={{ width: 'min(37.5vw,217px)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Link href="/fannys" aria-label="View fannys">
                    <HoverScaleImg
                      src="/fannys.gif"
                      alt="Fannys"
                      style={{ width: '100%', height: 'auto', display: 'block', border: '2px solid black' }}
                      hoverScale={1.08}
                    />
                  </Link>
                  <h3 className="article-title">The Reticence</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Homepage blurb */}
        <div className="home-blurb">
          <p>
            Thank you for visiting my independently built Website!! Sourced from a mixture of Open Source
            Software and Closed Source editing applications including Github, Microsoft Visual Code, Canva,
            Figma, G-Suite and Adobe Premiere Pro and Audition. I work across both windows and macOS systems.
            I am a Digital Media and Culture Graduate from King&apos;s College London, based between London and
            Manchester. I have strong experience in PR, Marketing and Project Management. I have worked in both
            professional and volunteer settings, with a focus on accessible collaboration, audience engagement
            and creative campaigning.
          </p>
          <p>
            This website is a creative space featuring topics and ideas that have recently caught my interest.
            I aim to continue to develop my skills through collaborations with established creative companies
            and publications, perhaps organisations aiming to produce authentic, informative and accessible
            storytelling. I love to Write! I offer a British voice, viciously moulded by the major voices of my
            favourite authors, poets, artists and &apos;Wilde&apos; conversations with my dearest friends and
            family. I am open to all opportunities in campaigning, copywriting, feature Articles/Columns, PR,
            Website Building and research.
          </p>
          <p style={{ marginBottom: 0 }}>Thank you, Kate xxx</p>
        </div>
      </main>
    </>
  );
}
