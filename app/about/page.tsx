export const metadata = { title: 'bio' }; 

import BioTitle from "../components/BioTitle";
import CenteredTextOverlay from "../components/CenteredTextOverlay";

export default function AboutPage() {
  return (
    <main className="about-page" style={{ maxWidth: 1440, margin: '0 auto', padding: '8px 32px 32px', fontSize: 16, lineHeight: 1.6 }}>
      <BioTitle />
      <CenteredTextOverlay />
    </main>
  );
}
 