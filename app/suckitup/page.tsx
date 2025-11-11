export const metadata = { title: 'Suck It Up' }

export default function SuckItUpPage() {
  return (
    <main
        style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        padding: 0,
      }}
    >
      <article className="suck-article"
        style={{
          width: 'min(92vw,700px)',
          paddingTop: 36,
          paddingRight: 36,
          paddingBottom: 36,
          paddingLeft: 36,
          background: 'chocolate', /* chocolate background */
          color: '#fffaf0', /* light text for contrast */
          lineHeight: 1.6,
          fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
          fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontWeight: 100,
          transform: 'translateY(-100px)',
          willChange: 'transform',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 12 }}>
          <span className="suck-title">Suck it Up !!!</span>
        </div>

        <style>{`
          .suck-title {
            font-family: var(--font-inter), Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-weight: 100; /* make title thin */
            font-variation-settings: 'wght' 100;
            letter-spacing: 0.3px;
            font-size: 0.95rem;
            color: #4b0082; /* keeping purple title text */
            text-decoration: none;
            cursor: default;
            display: inline-block;
            padding: 4px 8px 8px 8px; /* add a bit more bottom space for clearer underline */
            border-radius: 4px;
            transition: background-color 120ms ease;
            background-color: #f2e9fb; /* existing highlight */
            /* blush pink dotted underline */
            background-image: radial-gradient(circle, #f4a6b4 55%, rgba(0,0,0,0) 56%);
            background-repeat: repeat-x;
            background-size: 4px 3px;
            background-position: 0 calc(100% - 2px);
          }

          .suck-title:hover {
            background-color: #ebe0fb; /* keep hover highlight */
            /* lighter blush solid underline on hover (thicker for visibility) */
            background-image: linear-gradient(#f8c5cf,#f8c5cf);
            background-size: 100% 3px;
            background-position: 0 calc(100% - 2px);
            background-repeat: no-repeat;
          }

          .suck-title:focus-visible {
            outline: 2px solid #cfeedb;
            outline-offset: 2px;
          }

          /* make article paragraphs thin/non-bold and avoid synthetic bolding */
          .suck-article,
          .suck-article p {
            font-weight: 100;
            font-variation-settings: 'wght' 100;
            font-synthesis: none;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
          }

          /* underline treatment throughout the body text */
          .suck-article p,
          .suck-article p *:not(svg) {
            text-decoration-line: underline;
            text-decoration-style: dotted;
            text-decoration-color: #f4a6b4; /* blush pink */
            text-decoration-thickness: 2px;
            text-underline-offset: 3px;
          }

          .suck-article p:hover,
          .suck-article p:hover *:not(svg) {
            text-decoration-style: solid;
            text-decoration-color: #f8c5cf; /* lighter blush on hover */
            text-decoration-thickness: 3px;
          }

          /* make links follow the same underline styling */
          .suck-article a {
            color: inherit;
            text-decoration: inherit;
          }
        `}</style>
        <p>
          When people in England say, “you’ve made your bed, now lie in it,” as Joan Didion once put it, they may think they are quoting Jane Austen. But when Austen annexed those seductive words from Samuel Johnson’s The Rambler No. 32, fictionising whole paragraphs in her pages and borrowing from it one of the 18th century’s most reflective titles Johnson did not mean, literally, that all experiences are the same or that all fortunes are to be suffered equally. He meant that, in Georgian society under the reign of George II, we would all be losers if we lost a sense of basic respect for one another. It was a matter of both solidarity and self-interest: stand by your friends now, or be shamed (and deserted in your turn) later on.
        </p>

        <p>
          One month ago, the grisly events that filled London involved no struggle, no sacrifice, no great principle. They were random and pointless. Those who marched with Tommy Robinson were not soldiers in any cause. I’m also not promoting that they were not funded by our enemies, the same, not martyrs. And yet, from this vacuum of personhood came an exhausting national online sob-fest from the most recent non-event.
        </p>

        <p>
          Enter the tech billionaire E. Musk, who ordered the chimes of nationalism to be spat by ordinary Middle Men before announcing the “four years we have left of modern civilization.” Four years? Yes. “We are here to fight,” he declared. For a billionaire to equate 100,000 gatherers in an orgy of “oneness” with a crusade for civilisation's survival was probably the stupidest thing that happened last month, though not by a wide margin. Almost everyone in the country seems to have taken this non-event as permission to talk about starkest nonsense. And why not? Since the rally changed no real issues, it was a blank slate on which any class could doodle racist bigotry.
        </p>

        <p>
          Take a more recent example: Tommy Robinson’s warm welcome in Tel Aviv. Here is how the bells tolled for them at another national seat of power. Try this, from the fourth day of breathless media coverage. The person being quoted is Lindsay Hilsum:
        </p>

        <p>
          “Addressing the global response since October 7th, Robinson said, ‘There’s a massive attack against Israel, a propaganda war being fought by Iran and certainly by Qatar. They’re influencing every major Western nation.’ He argued that Western universities have been overtaken by Islamist organizations such as Hizb ut-Tahrir, spreading hatred through education systems.”
        </p>

        <p>
          Yes, it’s always hatred, isn’t it? When piffle like this gets respectful treatment from the media, it’s not because of the profundity of the emotion but because of its extreme shallowness. But the quest for a united self-identity is unstoppable. Will British Muslims now be more “targeted”? (Thanks for putting the idea into the head of some nutcase on the internet, Hilsum but really, what a threat to the British from Robbinson!)
        </p>

        <p>
          On Monday morning, I listened, disgusted, as the President of the United States delivered his marathon speech at the Gaza summit, of course on the grounds that this was a time for jokes and satire. What? No words of courage? Everyone in the room knew it was a dismal cop-out for peace, but everyone also knew that their own profession was co-responsible. Had the President actually performed his duty as the leader of a democracy, the press corps would have feigned shock and accused him of being too cheerful. So this was indeed a moment of unity, everyone united in mawkishness, sloppiness, and false sentiment.
        </p>

        <p>
          From now on, any president who wants to duck an occasion needs only to employ Tweeting thumbs. In any given week, there will be a school shooting, homeless refugees, a perverted priest or a maimed orphan. Best to be prepared in advance to surrender all critical faculties and either whip out a meme or politely move on.
        </p>

        <p>
          It was my university lecturer who first pointed out this tendency toward what she called planned obsolescence, the capital gain of becoming obsolete. I suppose in this sense, the profit of what isn’t being spoken about.
        </p>

        <p>
          Since these ongoing events, I have been struck by the way crowds show up online for the livelihoods of people they never knew, posting pictures on their digital stories and otherwise proving that (as well as needing to get a life) they seem bizarrely obsolete emotionally. The same hysteria that follows online activism suggests a wider surrender to the overwhelming need to manage the emotions of your online peers. I say: resist the need to emote.
        </p>

        <p>
          I suppose co-responsibility may be the keyword here. What, for instance, explains this dismal rush to grieve people you don’t know, all the damned time? One should, of course, express decent sympathy for the families and friends of the dead. But that sympathy ought to be accompanied by a decent reticence and it certainly doesn’t belong on social media. Save it for moments of real crisis. Not to feed the algorithm. Online slack-tivism alas for poor humanity is a calamity with no implications beyond itself. Is it just a theatre of algorithmic war? Should it be considered a non-habit from this day forward?
        </p>

        <p>
          As Amis once observed, “The internet does not argue; it emits. It’s a static of grievance disguised as dialogue, a place where noise mistakes itself for consequence.” And I say it’s time we grew up and faced it. In the name of revolution, the more it matters, the less you should interact with it online. To me, in the meantime, and in anticipation of sterner tests to our composure, we might try nailing our colours to the mast of half the population, dare I say, women’s rights, if the phrase still means anything. Better that than rehearsing the other side of that shabby coin, a permanent dress rehearsal for bigotry and masochism.
        </p>
        </article>
    </main>
  )
}
