import AppShell from '../components/AppShell';
import ChannelCard from '../components/ChannelCard';
import { channels } from '../../lib/seed';

export default function ChannelsPage() {
  return (
    <AppShell>
      <div style={{ padding: 28 }}>
        <h1 style={{ marginBottom: 12 }}>Channels</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', maxWidth: 900 }}>
          {channels.map((c) => (
            <ChannelCard key={c.id} channel={c} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
