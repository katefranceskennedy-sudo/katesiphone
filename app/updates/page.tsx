import Link from 'next/link';
import type { Metadata } from 'next';
import PostsTitle from '../components/PostsTitle';

export const metadata: Metadata = { title: 'posts' };

export default function Page() {
	return (
		<main style={{ padding: '24px 16px', minHeight: '60vh' }}>
			<div style={{ maxWidth: 920, margin: '0 auto' }}>
				<PostsTitle />
			</div>
		</main>
	);
}

