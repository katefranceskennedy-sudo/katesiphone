import Link from 'next/link'

export const metadata = { title: 'The Newman Report' }

export default function NewmanReportPage(){
  return (
    <main style={{ background: '#fff', minHeight: '100vh', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
  <div style={{ maxWidth: 1100, width: '100%', margin: '0 auto', background: '#fff', boxShadow: 'none', borderRadius: 0, overflow: 'hidden' }}>
        <div style={{ padding: 0, borderBottom: 'none', background: '#fff', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Link href="/" aria-label="Home">
            <img src="/Home1.gif" alt="Home" className="home-arrow" />
          </Link>
        </div>

        <div style={{ padding: 0 }}>
          {/* layout: GIF on left, article text on right (stacks on small screens) */}
          <div className="newman-layout">
            <div className="gif-frame" style={{ width: 'min(384px, 43vw)', flex: '0 0 auto', marginTop: 20 }}>
              <Link href="/Newman (1).gif" target="_blank" rel="noopener noreferrer" aria-label="Open Newman gif in new tab" style={{ display: 'block' }}>
                <img src="/Newman (1).gif" alt="Newman" />
              </Link>
            </div>

            <div className="newman-text">
              <p>I first met Frej Newman in London about four years ago and have cordially disliked her ever since. She&apos;s younger than me, smarter than me, and makes it all look too easy. I prayed for Newman to create a magazine, write a bad essay, and send it to me over WhatsApp to revel in her missfotune. How typical that only half my prayer has been answered.</p>

              <p>For decades, King&apos;s College London has been dominated by a beaming dolt named The Tab (awful name). I mentally divide its student reporters into two camps: those who play it safe, and those heroic few who have never abandoned their opinion that The Tab is a giant meeting for the feebleminded student. (There was also a third camp, whose members thought the Editor in Chief was cute but that&apos;s too big a digression for now.)</p>

              <p>In her first issue of Leadlight Magazine (great name, great), Freja offers a lens into how we see the world, with culture, science, and art living side by side. In her personal essay &apos;How to Erase Yourself&apos;, she reflects on how old journals, drawings, and mementos revealed that her memory of the past was incomplete. A <q>sketch</q>, built on growing pains rather than the full truth. This is the strength and weakness of the essay: it delights the reader. How often can you say that these days? Funny, ironic, mordant, and clever, Newman&apos;s eye catches memory as fraud and windbag.</p>
            </div>
          </div>

          <div className="newman-fulltext">
            <p>For instance:</p>

            <p><strong>“For a lot of my life, I was reminded of what a pain I was as a child (all in jest, but jokes have to come from somewhere). I was a pain to the point where none of my parents’ friends volunteered to babysit me, or if they did, they endured warnings or pats on the back for their brave sacrifice. Apparently, I just threw the worst tantrums. If something didn’t go my way, or I was thrown out of balance in the slightest, I would resign to screaming on the floor and never stopping. Honestly, if I had to babysit my younger self, I would resent it too.”</strong></p>

            <p>I&apos;m sorry, but that&apos;s bloody funny. It&apos;s also a good encapsulation of Newman&apos;s Australian style. Observant and perfectly timed. It illustrates her belief that both past and present memories overrate their own importance in the most grotesque manner. Leadlight also feature&apos;s an interview with the Academic Trent Newman. Akin to Frej, whose uncle built whole relationships in languages other than English. The interview&apos;s are rare and telling. A genius detour into linguistic anthropology.</p>

            <p>Everything about Newman is designed to madden the plodder. In her early twenties, she&apos;s already interned at UNICEF twice, worked as a gallery associate guarding my favourite publishing rights to Martin Parr, and fallen inexplicably in love with New York as a Publishing associate. Yet she says mildly she sometimes wishes she had stayed at JUMP!, the swim school where she taught lessons four years ago.</p>

            <p><strong>“The memory of her, my younger self, became a punching bag on which all my present-day insecurities were projected.”</strong></p>

            <p>Ok. We could all have said that. It&apos;s obvious. But nobody says it. Not in the years of Fielding, Keyes, Alderton, Rooney, when &apos;womanhood&apos; became a rallying cry again. Newman blends semiotic analysis with personal memory and self-reflection, smuggling moral narrative into semiotics whether you like her point or not.</p>

            <p><strong>&quot;Only through memory was I able to rediscover the parts of myself I was taught to lose… That was my mistake, thinking my memory was a reflection of my past, rather than a sketch. Every time I clean my room and reconnect with old diaries, stories, photographs, and footage, I&apos;m reminded of just how mistaken I was… I think a part of me knew I would lose myself at some point and would need these trinkets, these writings, and these scribbles to capture fragments of myself in time; fragments I could eventually piece together.&quot;</strong></p>

            <p>Newman is no foe of sentimentality. When Zadie Smith guest-edited The New Yorker, she asked: Who is deemed above criticism? Who gets away with a spotless reputation? Newman follows that precept keenly. As does Martin Amis in his column The War Against Cliché? A comic masterpiece. Lena Dunham’s Notes on Fear and Allowing? Smug self-indulgence masquerading as wit and feminism. My test for the <q>fearlessly irreverent</q>: Popularism. Then there’s Lili Pratt, who owns The Vulnerability Project. Rejecting Popularist interactions with technology. Under her, Leadlight drifts from science and culture toward art, embracing Newman’s favourites. One of Newman’s most spirited segments ‘on closed doors’ was sparked by Pratt’s desire to extend a branch to others rather than to heal herself.</p>

            <p><strong>“Don&apos;t we all just want empathy and rich connection and love and to be seen?”</strong></p>

            <p>Lili’s prose is safe, integral, and convincing. She reflects on her family conversations: cathartic, no frills, no exaggeration. She’s the grand antagonist of dialogue, not to be written off. Her demeanour leaves space for conversation, simultaneously documenting her own battles for personal space in Sydney’s own social world (<q>whatever that is</q> I can hear her say). To the reader, it seems she’s sought instead for a battle of empathy exchange.</p>

            <p>You find the same sharpness elsewhere in the issue: Kate Spatt’s When Did I Become Bound by the Shackles of My iPhone? rails against attention currencies and capitalism’s theft of time. Another piece asks, <q>If traditional meaning authorities no longer hold cultural capital, where should we look for guidance? Influencers? Podcasters?</q> Kate’s humour is American and equal parts Chomsky and RuPaul but it travels.</p>

            <p>Leadlight is neither liberal nor conservative. Newman delights in debunking both ideologies. Her early work at The Tab sharpened her scorn for authenticity in an age where <strong>&quot;No human sorrow is alien to Conservatism.&quot;</strong> is the truth. First we need to &apos;know more.&apos; Knowing more will lead to a government program, and soon the problem will be solved&quot; (she says sarcastically with an aperol in her hand). But her motto, If you&apos;re scared to go too far, you won&apos;t go far enough, serves her magazine well.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
