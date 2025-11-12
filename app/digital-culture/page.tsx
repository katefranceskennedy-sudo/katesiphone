export const metadata = {
  title: 'Digital Culture',
  description: 'Digital Culture — essays, projects and teaching',
};

import TopEmojisAnchor from "../components/TopEmojisAnchor";

export default function DigitalCulturePage() {
  return (
  // the pastel purple sits only inside the centered content column
  <main id="digital-culture-column" style={{ padding: '28px 12px', maxWidth: 'min(44vw,520px)', margin: '0 auto', textAlign: 'center', background: 'rgba(60,34,15,0.70)', color: '#f9f5f2', minHeight: '100vh', borderRadius: 12 }}>
      {/* Top emojis row (Digital Culture page only) — anchored under the About link via client measurement */}
      <TopEmojisAnchor />

      {/* content removed per request — this colored column represents the space between header items */}
    </main>
  );
}
