import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Updates' };

export default function Page() {
	return (
		<main style={{ padding: '24px 16px', minHeight: '60vh' }}>
			<div style={{ maxWidth: 920, margin: '0 auto' }}>
				<h1 style={{ marginTop: 0 }}>Updates</h1>
				<p>This section is under construction.</p>
				<p>
					Head back to the <Link href="/">home page</Link> while I finish wiring this up.
				</p>
			</div>
		</main>
	);
}

