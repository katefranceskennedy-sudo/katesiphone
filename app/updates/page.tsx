import Link from 'next/link';
import type { Metadata } from 'next';
import PostsTitle from '../components/PostsTitle';

export const metadata: Metadata = { title: 'posts' };

export default function Page() {
	return (
		<main style={{ padding: '24px 16px', minHeight: '60vh' }}>
			<div className="under-header-align">
				<div className="under-header-inner" style={{ maxWidth: 920 }}>
					<PostsTitle />
				<section className="posts-list" style={{ marginTop: 18 }}>
					<article className="post-item">
						<time>November 20, 2025</time>
						<h3 className="post-title"><span className="bio-caption-highlight">Gathering Web analytics and Data analysis</span></h3>
					</article>
					<article className="post-item">
						<time>November 19, 2025</time>
						<h3 className="post-title"><span className="bio-caption-highlight">Talk on Open Strategy from Dr. Josh Morton</span></h3>
					</article>
					<article className="post-item">
						<time>November 19, 2025</time>
						<h3 className="post-title"><span className="bio-caption-highlight">“Suck it Up”: Understanding the algorithmic pattern of non-events</span></h3>
					</article>
					<article className="post-item">
						<time>November 19, 2025</time>
						<h3 className="post-title"><span className="bio-caption-highlight">Eleven Challenges of Reputation Management and PR</span></h3>
					</article>
					<article className="post-item">
						<time>November 19, 2025</time>
						<h3 className="post-title"><span className="bio-caption-highlight">An open Letter and open questions about Data Trust and Assurance practices of Flo database</span></h3>
					</article>
					<article className="post-item">
						<time>November 19, 2025</time>
						<h3 className="post-title"><span className="bio-caption-highlight">New Review: The Newman Report: Issue 1 Leadlight Magazine, Culture and Society</span></h3>
					</article>
					<article className="post-item">
						<time>November 18, 2025</time>
						<h3 className="post-title"><span className="bio-caption-highlight">My translation of edX’s Data Governance and Trust Lab and Data Management and Visualisation</span></h3>
					</article>
					<article className="post-item">
						<time>November 18, 2025</time>
						<h3 className="post-title"><span className="bio-caption-highlight">Why GDPR compliance matters</span></h3>
					</article>
					<article className="post-item">
						<time>November 18, 2025</time>
						<h3 className="post-title"><span className="bio-caption-highlight">Accredited Course on “Digital Skills” at King’s College London, Data Governance and Compliance</span></h3>
					</article>
					<article className="post-item">
						<time>November 15, 2025</time>
						<h3 className="post-title"><span className="bio-caption-highlight">New Piece: “Window of Opportunity” Inside the UN’s digital surveillance plans for the commodificated self</span></h3>
					</article>
				</section>
				</div>
			</div>
		</main>
	);
}

