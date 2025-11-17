export const metadata = { title: 'The Newman Report' }

export default function NewmanReportPage() {
  return (
    <main
      style={{
        background: '#fff',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* ✅ Move global style block here so it applies to all elements */}
      <style>{`
        .newman-title {
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          font-weight: 300;
          font-size: 0.95rem;
          color: #00a9f8ff;
          text-decoration: none;
          display: inline-block;
          padding: 4px 8px 6px 8px;
          border-radius: 4px;
          transition: background-color 120ms ease;
          background-color: #fff9c4;
          --dot-color: #ffd60a;
          --dot-size: 4px 2px;
          background-image: radial-gradient(circle, var(--dot-color) 60%, rgba(0,0,0,0) 61%);
          background-repeat: repeat-x;
          background-size: var(--dot-size);
          background-position: 0 calc(100% - 3px);
        }

        .newman-title:hover {
          background-image: linear-gradient(#e6b800, #e6b800);
          background-size: 100% 3px;
          background-position: 0 calc(100% - 3px);
          background-repeat: no-repeat;
          background-color: #ffeb3b;
        }

        .newman-title:focus-visible {
          outline: 2px solid #fff3bf;
          outline-offset: 2px;
        }

        .thinlined { font-weight: 100; }
        .thinlined strong { font-weight: 100; letter-spacing: 0.3px; }
        .thinlined p { font-weight: 100; }

            .blue-blurb {
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          font-weight: 700; /* make all text bold on this page */
          font-variation-settings: "wght" 700;
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          line-height: 1.45;
          letter-spacing: 0.25px;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
              text-align: left;
          width: min(92vw,700px);
          background: #0b1e3d; /* navy blue solid background */
          border-radius: 0;
          padding: 12px 14px;
              color: #add8e6 !important; /* baby blue text, force override */
          text-decoration-line: underline;
          text-decoration-style: dotted;
          text-decoration-thickness: 2px;
          text-decoration-color: #c8d9ff; /* pastel underline */
          text-underline-offset: 3px;
          transition: background 120ms ease, text-decoration 120ms ease, color 120ms ease;
        }

  .blue-blurb:hover {
          text-decoration-style: solid;
          text-decoration-color: #b0c8ff; /* slightly deeper pastel on hover */
          background: #0d264b;
          color: #b7e2f3; /* slightly brighter baby blue on hover */
        }
            .blue-blurb p, .blue-blurb strong, .blue-blurb b, .blue-blurb span, .blue-blurb em, .blue-blurb a { color: inherit !important; font-weight: 700; font-variation-settings: "wght" 700; }
      `}</style>

      <div style={{ maxWidth: 1100, width: '100%', margin: '0 auto', background: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 40, flexDirection: 'column', alignItems: 'center', transform: 'translateY(-220px)' }}>
          <h1 style={{ width: 'min(92vw,700px)', margin: '0 0 24px 0', textAlign: 'center' }}>
            <span className="newman-title">The Newman Report</span>
          </h1>

          {/* Full article wrapped in blue-blurb */}
          <article className="thinlined blue-blurb" style={{ marginTop: 0 }}>
            <p>I first met Frej Newman in London about four years ago and have cordially disliked her ever since. She&apos;s younger than me, smarter than me, and makes it all look too easy. I prayed for Newman to create a magazine, write a bad essay, and send it to me over WhatsApp to revel in her misfortune. How typical that only half my prayer has been answered.</p>
            <p>For decades, King&apos;s College London has been dominated by a beaming dolt named The Tab (awful name). I mentally divide its student reporters into two camps: those who play it safe, and those heroic few who have never abandoned their opinion that The Tab is a giant meeting for the feebleminded student. (There was also a third camp, whose members thought the Editor in Chief was cute but that&apos;s too big a digression for now.)</p>
            <p>In her first issue of Leadlight Magazine (great name, great), Freja offers a lens into how we see the world, with culture, science, and art living side by side. In her personal essay &apos;How to Erase Yourself&apos;, she reflects on how old journals, drawings, and mementos revealed that her memory of the past was incomplete. A sketch, built on growing pains rather than the full truth. This is the strength and weakness of the essay: it delights the reader. How often can you say that these days? Funny, ironic, mordant, and clever, Newman&apos;s eye catches memory as fraud and windbag.</p>
            <p>For instance:</p>
            <p><strong>“For a lot of my life, I was reminded of what a pain I was as a child (all in jest, but jokes have to come from somewhere). I was a pain to the point where none of my parents’ friends volunteered to babysit me, or if they did, they endured warnings or pats on the back for their brave sacrifice. Apparently, I just threw the worst tantrums. If something didn’t go my way, or I was thrown out of balance in the slightest, I would resign to screaming on the floor and never stopping. Honestly, if I had to babysit my younger self, I would resent it too.”</strong></p>
            <p>I&apos;m sorry, but that&apos;s bloody funny. It&apos;s also a good encapsulation of Newman&apos;s Australian style. Observant and perfectly timed. It illustrates her belief that both past and present memories overrate their own importance in the most grotesque manner. Leadlight also feature&apos;s an interview with the Academic Trent Newman. Akin to Frej, whose uncle built whole relationships in languages other than English. The interview&apos;s are rare and telling. A genius detour into linguistic anthropology.</p>
            <p>Everything about Newman is designed to madden the plodder. In her early twenties, she&apos;s already interned at UNICEF twice, worked as a gallery associate guarding my favourite publishing rights to Martin Parr, and fallen inexplicably in love with New York as a Publishing associate. Yet she says mildly she sometimes wishes she had stayed at JUMP!, the swim school where she taught lessons four years ago.</p>
            <p><strong>“The memory of her, my younger self, became a punching bag on which all my present-day insecurities were projected.”</strong></p>
            <p>Ok. We could all have said that. It&apos;s obvious. But nobody says it. Not in the years of Fielding, Keyes, Alderton, Rooney, when &apos;womanhood&apos; became a rallying cry again. Newman blends semiotic analysis with personal memory and self-reflection, smuggling moral narrative into semiotics whether you like her point or not.</p>
            <p><strong>"Only through memory was I able to rediscover the parts of myself I was taught to lose… That was my mistake, thinking my memory was a reflection of my past, rather than a sketch. Every time I clean my room and reconnect with old diaries, stories, photographs, and footage, I'm reminded of just how mistaken I was… I think a part of me knew I would lose myself at some point and would need these trinkets, these writings, and these scribbles to capture fragments of myself in time; fragments I could eventually piece together."</strong></p>
            <p>Newman is no foe of sentimentality. When Zadie Smith guest-edited The New Yorker, she asked: Who is deemed above criticism? Who gets away with a spotless reputation? Newman follows that precept keenly. As does Martin Amis in his column The War Against Cliché? A comic masterpiece. Lena Dunham’s Notes on Fear and Allowing? Smug self-indulgence masquerading as wit and feminism. My test for the fearlessly irreverent: Popularism. Then there’s Lili Pratt, who owns The Vulnerability Project. Rejecting Popularist interactions with technology. Under her, Leadlight drifts from science and culture toward art, embracing Newman’s favourites. One of Newman’s most spirited segments ‘on closed doors’ was sparked by Pratt’s desire to extend a branch to others rather than to heal herself.</p>
            <p><strong>“Don't we all just want empathy and rich connection and love and to be seen?”</strong></p>
            <p>Lili’s prose is safe, integral, and convincing. She reflects on her family conversations: cathartic, no frills, no exaggeration. She’s the grand antagonist of dialogue, not to be written off. Her demeanour leaves space for conversation, simultaneously documenting her own battles for personal space in Sydney’s own social world (whatever that is I can hear her say). To the reader, it seems she’s sought instead for a battle of empathy exchange.</p>
            <p>You find the same sharpness elsewhere in the issue: Kate Spatt’s When Did I Become Bound by the Shackles of My iPhone? rails against attention currencies and capitalism’s theft of time. Another piece asks, If traditional meaning authorities no longer hold cultural capital, where should we look for guidance? Influencers? Podcasters? Kate’s humour is American and equal parts Chomsky and RuPaul but it travels.</p>
            <p>Leadlight is neither liberal nor conservative. Newman delights in debunking both ideologies. Her early work at The Tab sharpened her scorn for authenticity in an age where "No human sorrow is alien to Conservatism." is the truth. First we need to 'know more.' Knowing more will lead to a government program, and soon the problem will be solved" (she says sarcastically with an aperol in her hand). But her motto, If you're scared to go too far, you won't go far enough, serves her magazine well.</p>
          </article>
        </div>
      </div>
    </main>
  )
}
