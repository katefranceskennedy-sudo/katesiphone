import Link from 'next/link';
import type { Metadata } from 'next';
import PostsTitle from '../components/PostsTitle';

export const metadata: Metadata = { title: 'posts' };

export default function Page() {

	const posts = [
		{ date: '2025-11-21', title: 'Lessons from a Failed International Athletic Board Interview', subheading: true },
		{ date: '2025-11-21', title: 'Teamwork and Collaboration in Multilingual Spaces' },
		{ date: '2025-11-21', title: 'Thriving Under Pressure and Tight Deadlines' },
		{ date: '2025-11-21', title: 'The AI Bubble: Why Fact-Checking Will Define Tomorrow’s Affairs' },
		{ date: '2025-11-21', title: 'What’s the Social Media narrative atm?' },
		{ date: '2025-11-21', title: 'Tracking Nvidia’s Story Development' },
		{ date: '2025-11-21', title: 'Artistic coding: Digital Storytelling by TikTok Creators' },
		{ date: '2025-11-21', title: 'Innovation in UX: The Incompatibility of pitching Original Ideas at University' },
		{ date: '2025-11-21', title: 'The discipline of Multitasking: Balancing Career, Education, and Side Hustles' },
		{ date: '2025-11-21', title: 'Fast-Paced Newsrooms: Reality vs. Romanticism at BBC News Open Day' },
		{ date: '2025-11-21', title: 'Global Perspectives and Social Media: Is This an Impossible Balance?' },
		{ date: '2025-11-21', title: 'Audience Engagement: Strategies That Work' },
		{ date: '2025-11-21', title: 'My Journey developing Innovative E-Commerce?' },
		{ date: '2025-11-21', title: 'What does history teach us about Journalistic Integrity?' },
		{ date: '2025-11-20', title: 'Gathering Web analytics and Data analysis' },
		{ date: '2025-11-19', title: 'Talk on Open Strategy from Dr. Josh Morton' },
		{ date: '2025-11-19', title: 'Suck it Up: Understanding the algorithmic pattern of non-events' },
		{ date: '2025-11-19', title: 'Eleven Challenges of Reputation Management and PR' },
		{ date: '2025-11-19', title: 'An open Letter and open questions about Data Trust and Assurance practices of Flo database' },
		{ date: '2025-11-19', title: 'New Review: The Newman Report: Issue 1 Leadlight Magazine, Culture and Society' },
		{ date: '2025-11-18', title: "My translation of edX's Data Governance and Trust Lab and Data Management and Visualisation" },
		{ date: '2025-11-18', title: 'Why GDPR compliance matters' },
		{ date: '2025-11-18', title: 'Accredited Course on Digital Skills at King\'s College London, Data Governance and Compliance' },
		{ date: '2025-11-15', title: 'New Piece: Window of Opportunity Inside the UN’s digital surveillance plans for the commodificated self' }
	];

	const renderTitle = (title: string) => {
		const words = title.split(/\s+/).filter(Boolean);
		const chunks: string[] = [];
		for (let i = 0; i < words.length; i += 5) {
			chunks.push(words.slice(i, i + 5).join(' '));
		}
		return chunks.map((c, idx) => (
			<span key={idx}>
				{c}
				{idx < chunks.length - 1 ? <br /> : null}
			</span>
		));
	};

	return (
		<main style={{ padding: '24px 16px', minHeight: '60vh' }}>
			<div className="under-header-align">
				<div className="under-header-inner" style={{ maxWidth: 920, marginTop: 72, transform: 'translateY(-125px)' }}>
					<div style={{ marginLeft: -280, transform: 'translateY(30px)', opacity: 1, visibility: 'visible' as const, zIndex: 2 }}>
						<PostsTitle />
					</div>
                    
					<section className="posts-list" style={{ marginTop: 18, marginLeft: -280, opacity: 1, visibility: 'visible' as const, zIndex: 2 }}>
						{posts
							.slice()
							.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
							.map((p) => (
								<article className="post-item" key={`${p.date}-${p.title}`}>
									<time>{new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
									{p.subheading && (
										<div className="posts-subheading" style={{ marginLeft: -280, padding: '2px 6px', opacity: 1, visibility: 'visible' as const, zIndex: 3 }}>
											500 words or less
										</div>
									)}
									<h3 className="post-title">
										<span className="bio-caption-highlight">{renderTitle(p.title)}</span>
									</h3>
								</article>
							))}
					</section>
				</div>
			</div>
		</main>
	);
}

