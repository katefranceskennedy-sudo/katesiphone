import HoverScaleImg from './components/HoverScaleImg';
import Link from 'next/link';

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
          left: 0,
          overflow: 'hidden',
          minHeight: 'calc(1024px - 200px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 28,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          {/* Left column: stacked row start */}
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
              {/* Combined row: all tiles */}
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
                      style={{ width: '100%', height: 'auto', display: 'block' }}
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
                      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 0 }}
                      hoverScale={1.08}
                    />
                  </Link>
                  <h3 className="article-title">The Dotted Lines across Silicon Valley</h3>
                </div>

                {/* Tile 3 */}
                <div style={{ width: 'min(37.5vw,217px)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Link href="/window-of-opportunity" aria-label="Open Window of Opportunity page">
                    <HoverScaleImg
                      src="/robotun.gif"
                      alt="Robot Un"
                      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 0 }}
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
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                      hoverScale={1.08}
                    />
                  </Link>
                  <h3 className="article-title">The Newman Report: Review of Issue 1 — LeadLight Magazine</h3>
                </div>

                {/* Tile 5 */}
                <div style={{ width: 'min(37.5vw,217px)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Link href="/fannys" aria-label="View fannys">
                    <HoverScaleImg
                      src="/fannys.gif"
                      alt="Fannys"
                      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 0 }}
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
            Thank you for visiting my independently built Website!! Sourced from a mixture of Open Source Software and Closed Source editing applications including Github, Microsoft Visual Code, Canva, Figma, G-Suite and Adobe Premiere Pro and Audition. I work across both windows and Mac0s systems. I am a Digital Media and culture Graduate from King’s College London, based between London and Manchester. I have strong experience in PR, Marketing and Project Management. I have worked in both professional and volunteer settings, with a focus on accessible collaboration, audience engagement and creative campaigning.
          </p>
          <p>
            This website is a creative space featuring topics and ideas that have recently caught my interest. I aim to continue to develop my skills through collaborations with established creative companies and publications, perhaps organisations aiming to produce authentic, informative and accessible storytelling. I love to Write! I offer a British voice, viciously moulded by the major voices of my favourite authors, poets, artists and ‘Wilde’ conversations with my dearest friends and family. I am open to all opportunities in campaigning, copywriting, feature Articles/Columns, PR, Website Building and research.
          </p>
          <p style={{ marginBottom: 0 }}>Thank you, Kate xxx</p>
        </div>
      </main>
    </>
  );
}
