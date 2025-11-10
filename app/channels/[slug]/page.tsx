import AppShell from '../../components/AppShell';
import BlockCard from '../../components/BlockCard';
import { channels, blocksByChannel } from '../../../lib/seed';

type Props = { params: { slug: string } };

// Accept a permissive props shape to avoid generated Next.js type mismatches
export default function ChannelDetailPage(props: any) {
  const slug = props?.params?.slug as string;
  const channel = channels.find((c) => c.slug === slug);
  if (!channel) {
    return (
      <AppShell>
        <div style={{ padding: 28 }}>
          <h2>Channel not found</h2>
        </div>
      </AppShell>
    );
  }

  const blocks = blocksByChannel[slug] || [];

  return (
    <AppShell>
      <div style={{ padding: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <img src={channel.thumbnailUrl} alt={channel.title} style={{ width: 180, height: 120, objectFit: 'cover', borderRadius: 6 }} />
          <div>
            <h1 style={{ margin: 0 }}>{channel.title}</h1>
            <p style={{ marginTop: 8, color: '#666' }}>{channel.description}</p>
          </div>
        </div>

        <div style={{ marginTop: 24, columnCount: 3, columnGap: 16 }}>
          {blocks.map((b) => (
            <BlockCard key={b.id} block={b} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
