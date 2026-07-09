import styles from './page.module.css';

export const metadata = { title: 'cv' };

export default function CVPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.name}>Kate Kennedy</h1>
      <p className={styles.subtitle}>Digital Media &amp; Communications</p>
      <hr className={styles.divider} />

      {/* EXPERIENCE */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>

        <div className={styles.role}>
          <div className={styles.roleHeader}>
            <span className={styles.roleTitle}>PPC Executive</span>
            <span className={styles.roleDates}>Jun 2026 – Present</span>
          </div>
          <p className={styles.roleOrg}>McCann Manchester</p>
          <ul className={styles.bullets}>
            <li>Specialised in PPC, advancing from a planning executive to a PPC exec on the recommendation of my manager.</li>
            <li>Head finance and billing, scheduling, reporting, and budget monitoring across multiple accounts.</li>
            <li>Constant evaluation and data collection with manual optimisations.</li>
          </ul>
        </div>

        <div className={styles.role}>
          <div className={styles.roleHeader}>
            <span className={styles.roleTitle}>Digital Media Planning Executive</span>
            <span className={styles.roleDates}>Feb 2026 – Present</span>
          </div>
          <p className={styles.roleOrg}>McCann Manchester</p>
          <ul className={styles.bullets}>
            <li>Lead reporting, account management, and finance systems.</li>
            <li>Head scheduling, bookings, and DCO.</li>
            <li>Established key relationships with stakeholders.</li>
          </ul>
        </div>

        <div className={styles.role}>
          <div className={styles.roleHeader}>
            <span className={styles.roleTitle}>Communications &amp; Consultancy Press and Publicity Coordinator</span>
            <span className={styles.roleDates}>Apr 2024 – Apr 2025</span>
          </div>
          <p className={styles.roleOrg}>Bland PR Consultancy</p>
          <ul className={styles.bullets}>
            <li>Advanced from Account Intern to permanent Press and Publicity Coordinator, managing all B2B communications and achieving over £25,000 in earned media value (EAV) for clients including Pierre Marcolini and Nutravita through brand collaboration, influencer outreach, and effective public relations.</li>
            <li>Designed and executed automated email marketing campaigns across multichannels including Mailchimp, boosting customer retention with a 4% increase in open rates and a 6% increase in weekly click-through rates; drafted and distributed high-impact press releases to boost online presence and brand equity.</li>
            <li>Managed CRM campaigns facilitated by DV360 and The Trade Desk to track weekly intelligence and optimise product ROI.</li>
            <li>Analysed social analytics using Google Analytics and management extension tools to monitor real-time engagement, conduct sentiment analysis, and inform campaign optimisation — resulting in a 25% improvement in campaign ROI and a 45% reduction in response times on public queries.</li>
            <li>Managed media buying and influencer marketing using social insights tools such as Buffer across Instagram, TikTok, X, LinkedIn, Facebook, and YouTube; tracked total follower growth of 10% and increased average post engagement rates by 32%.</li>
            <li>Developed and implemented content marketing strategies utilising multi-channel campaigns, content creation, and editorial planning.</li>
            <li>Produced original press releases, sponsored content, and campaign assets leveraging digital PR, cross-functional collaboration, and digital storytelling to enhance brand awareness.</li>
            <li>Integrated owned and earned media with paid media, resulting in a 40% increase in website traffic and measurable improvement in brand sentiment.</li>
            <li>Coordinated product send-outs using Amazon DSP and in-store activations, facilitating press events and physical campaign integration during peak periods.</li>
            <li>Directly managed directors&apos; diaries, coordinated executive travel, and ensured smooth delivery of client meetings through precise scheduling and strategic preparation.</li>
            <li>Streamlined reputation management through online review monitoring, proactive feedback management, and crisis communication protocols, leveraging social listening and issue escalation processes to safeguard brand reputation.</li>
          </ul>
        </div>

        <div className={styles.role}>
          <div className={styles.roleHeader}>
            <span className={styles.roleTitle}>Sports Campaign Assistant</span>
            <span className={styles.roleDates}>Nov 2024 – Apr 2025</span>
          </div>
          <p className={styles.roleOrg}>ROAR</p>
          <ul className={styles.bullets}>
            <li>Delivered digital education campaigns and in-person workshops for clients such as the British Army and the FA, focusing on female athlete health, ethical tracking, and inclusion.</li>
            <li>Presented visual research findings from Looker Studio in partnership with Optimise Foundation.</li>
            <li>Monitored media trends and policy proposals utilising cross-functional teamwork to identify multicultural advocacy opportunities.</li>
            <li>Collected and managed social media assets and digital content to drive effective campaign performance across platforms.</li>
            <li>Analysed engagement metrics and prepared reports, briefings, and presentations to inform strategy and boost client satisfaction.</li>
          </ul>
        </div>

        <div className={styles.role}>
          <div className={styles.roleHeader}>
            <span className={styles.roleTitle}>Consultancy Intern</span>
            <span className={styles.roleDates}>May 2024 – Jun 2024</span>
          </div>
          <p className={styles.roleOrg}>Picturehouse UK</p>
          <ul className={styles.bullets}>
            <li>Led an intern team presenting weekly briefs and audits identifying personas and opportunities within the UK film industry, proposing future policy to the internal communications team.</li>
            <li>Conducted data analysis and market research, producing a comprehensive 40-page report on U25 membership KPIs.</li>
            <li>Produced 10 in-depth analytical reviews of P&amp;L movements, articulating trends using Powtoon, Microsoft Office Suite, Azure, and The Trade Desk.</li>
          </ul>
        </div>

        <div className={styles.role}>
          <div className={styles.roleHeader}>
            <span className={styles.roleTitle}>Multi-Media Web Producer</span>
            <span className={styles.roleDates}>Sep 2025 – Present</span>
          </div>
          <p className={styles.roleOrg}>Kate.网站 (Personal Site)</p>
          <ul className={styles.bullets}>
            <li>Designed and implemented a personalised, minimalist UX/UI leveraging Canva, Adobe Premiere Pro, CapCut, and Microsoft Visual Studio.</li>
            <li>Built responsive front-end components using HTML, CSS, and optimised configurations; architected back-end workflows using open-source code and GitHub repositories.</li>
            <li>Resolved technical challenges involving encrypted web crawlers, broken links, site performance, and malformed markdown by refactoring site structure and implementing automated input validation and server-side XSS/data sanitisation.</li>
            <li>Monitored analytics and performance metrics to ensure uptime, reliability, and scalable hosting; proactively remediated accessibility and mobile compatibility issues in compliance with GDPR.</li>
            <li>Designed, executed, and optimised Google AdSense and Facebook ad programmatic campaigns, including A/B testing and local trend analysis for business profile optimisation.</li>
          </ul>
        </div>
      </section>

      {/* EDUCATION */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>

        <div className={styles.eduItem}>
          <p className={styles.eduOrg}>King&apos;s College London</p>
          <p className={styles.eduDetail}>BA Digital Media and Culture — Upper Second Class Honours (2:1)</p>
          <p className={styles.eduDates}>Sep 2022 – Jul 2025</p>
        </div>

        <div className={styles.eduItem}>
          <p className={styles.eduOrg}>The Henley College</p>
          <p className={styles.eduDetail}>Photography (A*), Sociology (A), Applied Psychology (B)</p>
          <p className={styles.eduDates}>Sep 2019 – Jul 2021</p>
        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Qualifications &amp; Certifications</h2>
        <ul className={styles.certList}>
          <li>Google Analytics Qualified Individual</li>
          <li>HubSpot Content Marketing Certification</li>
          <li>Meta Certified Digital Marketing Associate</li>
          <li>Responsive Web Design Certification</li>
          <li>Trade Desk Academy Programmatic Ads Certification</li>
        </ul>
      </section>

      {/* VOLUNTEERING */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Volunteering</h2>

        <div className={styles.role}>
          <div className={styles.roleHeader}>
            <span className={styles.roleTitle}>Digital Content Officer &amp; Project Developer</span>
            <span className={styles.roleDates}>Apr 2024 – Present</span>
          </div>
          <p className={styles.roleOrg}>WeAndAI</p>
          <ul className={styles.bullets}>
            <li>Conducting ethnographic and usability research on how barriers at the intersection of AI can nurture care, solidarity, and imagination.</li>
            <li>Proposed solution-orientated data visualisation for digital campaign materials (infographics, interactive visuals, blog articles, newsletters).</li>
            <li>Operated and facilitated interactive Chatbot Workshops, training over 100 diverse participants on conversational AI systems and implementation best practices.</li>
            <li>Leveraged Trello for project management, KPI tracking, and performance reporting, consistently delivering projects on time using agile methodology.</li>
          </ul>
        </div>

        <div className={styles.role}>
          <div className={styles.roleHeader}>
            <span className={styles.roleTitle}>UN Women Delegate</span>
            <span className={styles.roleDates}>Apr 2022 – Apr 2023</span>
          </div>
          <ul className={styles.bullets}>
            <li>Invited and hosted senior business leaders — including CEOs of General Electric, WPP, and Managing Directors — for talks and panel discussions on gender equality and women&apos;s empowerment.</li>
          </ul>
        </div>

        <div className={styles.role}>
          <div className={styles.roleHeader}>
            <span className={styles.roleTitle}>Viewpoint &amp; Opinion Writer; Charities Officer</span>
            <span className={styles.roleDates}>Jul 2022 – Aug 2025</span>
          </div>
          <p className={styles.roleOrg}>Strand Magazine</p>
          <ul className={styles.bullets}>
            <li>Led content creation including interviews, blog writing, copywriting, features, news writing, and persuasive storytelling.</li>
            <li>Acquired £1,500 in charitable and corporate sponsorships and negotiated a Tate partnership, enabling broader cross-sector event development.</li>
            <li>Executed cross-cultural outreach initiatives and volunteer coordination for large-scale events including the Wargrave Regatta, providing logistical support for 150+ students.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
