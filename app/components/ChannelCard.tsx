import Link from 'next/link';
import Image from 'next/image';
import type { Channel } from '../../lib/seed';

export default function ChannelCard({ channel }: { channel: Channel }) {
  return (
    <Link href={`/channels/${channel.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 12, border: '1px solid rgba(0,0,0,0.06)', borderRadius: 8, marginBottom: 12 }}>
        <Image
          src={channel.thumbnailUrl}
          alt={channel.title}
          width={140}
          height={100}
          quality={85}
          style={{ objectFit: 'cover', borderRadius: 6 }}
        />
        <div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>{channel.title}</div>
          <div style={{ fontSize: 13, color: '#666' }}>{channel.description}</div>
          <div style={{ marginTop: 8, fontSize: 12, color: '#999' }}>{channel.blockCount} blocks</div>
        </div>
      </div>
    </Link>
  );
}
