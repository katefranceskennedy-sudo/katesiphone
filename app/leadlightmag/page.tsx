import Link from 'next/link'
import type { ReactNode } from 'react'

export const metadata = { title: 'The Newman Report' }

export default function LeadlightMagPage(){
  // helper: split a text string into lines of up to `maxWords` words
  const splitToLines = (text: string, maxWords = 8) => {
    const words = text.split(/\s+/).filter(Boolean)
    const lines: string[] = []
    for (let i = 0; i < words.length; i += maxWords) {
      lines.push(words.slice(i, i + maxWords).join(' '))
    }
    return lines
  }

  // render a paragraph where each line contains at most `maxWords` words
  const renderWrapped = (node: string | ReactNode, maxWords = 8) => {
    let text = ''
    let tagType: 'text' | 'em' | 'strong' = 'text'
    if (typeof node === 'string') text = node
    else if (node && typeof node === 'object' && 'props' in node && typeof (node as any).props.children === 'string') {
      text = (node as any).props.children
      const t = (node as any).type
      if (t === 'em' || t === 'i') tagType = 'em'
      if (t === 'strong' || t === 'b') tagType = 'strong'
    } else {
      return <p>{node}</p>
    }

    const lines = splitToLines(text, maxWords)
    const quoteRegex = /(‘[^’]+’|“[^”]+”|"[^"]+"|'[^']+')/

    return (
      <p>
        {lines.map((l, i) => {
          const parts = l.split(quoteRegex).filter(Boolean)
          return (
            <span key={i} style={{ display: 'block' }}>
              {parts.map((part, j) => {
                if (quoteRegex.test(part)) {
                  const inner = tagType === 'em' ? <em key={j}>{part}</em> : tagType === 'strong' ? <strong key={j}>{part}</strong> : part
                  return (
                    <span key={j} className="dotted-quote" style={{ textDecoration: 'underline dotted', textDecorationColor: 'currentColor' }}>
                      {inner}
                    </span>
                  )
                }
                return tagType === 'em' ? <em key={j}>{part}</em> : tagType === 'strong' ? <strong key={j}>{part}</strong> : <span key={j}>{part}</span>
              })}
            </span>
          )
        })}
      </p>
    )
  }

  return (
    <main style={{ minHeight: '100vh', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div style={{ width: 'min(92vw,1000px)', boxShadow: 'none', borderRadius: 0, overflow: 'hidden', background: 'transparent', marginLeft: 450 }}>
        <div style={{ padding: 0, background: 'transparent' }} />

        {/* Inserted full Newman review text for Leadlight Magazine */}
        <div style={{ padding: 24, maxWidth: 920, margin: '0 auto', lineHeight: 1.6, color: '#050505', background: 'transparent', fontFamily: 'var(--font-open-sans), system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 300, letterSpacing: '0.3px' }}>
          <h2 style={{ marginTop: 0, marginLeft: 50, fontFamily: 'var(--font-open-sans), system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 400 }}>The Newman Report</h2>

          <div style={{ width: 220, margin: '0 auto 18px', background: 'transparent', boxSizing: 'border-box' }}>
            <img src="/robotun.gif" alt="Robot Un" style={{ width: '100%', height: 'auto', display: 'block', background: 'transparent', border: 'none' }} />
          </div>

          <article>
            {renderWrapped("I first met Frej Newman in London about four years ago and have cordially disliked her ever since. She's younger than me, smarter than me, and makes it all look too easy. I prayed for Newman to create a magazine, write a bad essay, and send it to me over WhatsApp to revel in her misfortune. How typical that only half my prayer has been answered.")}

            {renderWrapped("For decades, King's College London has been dominated by a beaming dolt named The Tab (awful name). I mentally divide its student reporters into two camps: those who play it safe, and those heroic few who have never abandoned their opinion that The Tab is a giant meeting for the feebleminded student. (There was also a third camp, whose members thought the Editor in Chief was cute but that's too big a digression for now.)")}

            {renderWrapped("In her first issue of Leadlight Magazine (great name, great), Freja offers a lens into how we see the world, with culture, science, and art living side by side. In her personal essay 'How to Erase Yourself', she reflects on how old journals, drawings, and mementos revealed that her memory of the past was incomplete. A sketch, built on growing pains rather than the full truth. This is the strength and weakness of the essay: it delights the reader. How often can you say that these days? Funny, ironic, mordant, and clever, Newman's eye catches memory as fraud and windbag.")}

            {renderWrapped("For instance:")}

            {renderWrapped(<strong>“For a lot of my life, I was reminded of what a pain I was as a child (all in jest, but jokes have to come from somewhere). I was a pain to the point where none of my parents’ friends volunteered to babysit me, or if they did, they endured warnings or pats on the back for their brave sacrifice. Apparently, I just threw the worst tantrums. If something didn’t go my way, or I was thrown out of balance in the slightest, I would resign to screaming on the floor and never stopping. Honestly, if I had to babysit my younger self, I would resent it too.”</strong>)}

            {renderWrapped("I'm sorry, but that's bloody funny. It's also a good encapsulation of Newman's Australian style. Observant and perfectly timed. It illustrates her belief that both past and present memories overrate their own importance in the most grotesque manner. Leadlight also feature's an interview with the Academic Trent Newman. Akin to Frej, whose uncle built whole relationships in languages other than English. The interview's are rare and telling. A genius detour into linguistic anthropology.")}

            {renderWrapped("Everything about Newman is designed to madden the plodder. In her early twenties, she's already interned at UNICEF twice, worked as a gallery associate guarding my favourite publishing rights to Martin Parr, and fallen inexplicably in love with New York as a Publishing associate. Yet she says mildly she sometimes wishes she had stayed at JUMP!, the swim school where she taught lessons four years ago.")}

            {renderWrapped(<strong>“The memory of her, my younger self, became a punching bag on which all my present-day insecurities were projected.”</strong>)}

            {renderWrapped("Ok. We could all have said that. It's obvious. But nobody says it. Not in the years of Fielding, Keyes, Alderton, Rooney, when 'womanhood' became a rallying cry again. Newman blends semiotic analysis with personal memory and self-reflection, smuggling moral narrative into semiotics whether you like her point or not.")}

            {renderWrapped(<strong>"Only through memory was I able to rediscover the parts of myself I was taught to lose… That was my mistake, thinking my memory was a reflection of my past, rather than a sketch. Every time I clean my room and reconnect with old diaries, stories, photographs, and footage, I'm reminded of just how mistaken I was… I think a part of me knew I would lose myself at some point and would need these trinkets, these writings, and these scribbles to capture fragments of myself in time; fragments I could eventually piece together."</strong>)}

            {renderWrapped("Newman is no foe of sentimentality. When Zadie Smith guest-edited The New Yorker, she asked: Who is deemed above criticism? Who gets away with a spotless reputation? Newman follows that precept keenly. As does Martin Amis in his column The War Against Cliché? A comic masterpiece. Lena Dunham’s Notes on Fear and Allowing? Smug self-indulgence masquerading as wit and feminism. My test for the fearlessly irreverent: Popularism. Then there’s Lili Pratt, who owns The Vulnerability Project. Rejecting Popularist interactions with technology. Under her, Leadlight drifts from science and culture toward art, embracing Newman’s favourites. One of Newman’s most spirited segments ‘on closed doors’ was sparked by Pratt’s desire to extend a branch to others rather than to heal herself.")}

            {renderWrapped(<strong>“Don't we all just want empathy and rich connection and love and to be seen?”</strong>)}

            {renderWrapped("Lili’s prose is safe, integral, and convincing. She reflects on her family conversations: cathartic, no frills, no exaggeration. She’s the grand antagonist of dialogue, not to be written off. Her demeanour leaves space for conversation, simultaneously documenting her own battles for personal space in Sydney’s own social world (whatever that is I can hear her say). To the reader, it seems she’s sought instead for a battle of empathy exchange.")}

            {renderWrapped("You find the same sharpness elsewhere in the issue: Kate Spatt’s When Did I Become Bound by the Shackles of My iPhone? rails against attention currencies and capitalism’s theft of time. Another piece asks, If traditional meaning authorities no longer hold cultural capital, where should we look for guidance? Influencers? Podcasters? Kate’s humour is American and equal parts Chomsky and RuPaul but it travels.")}

            {renderWrapped("Leadlight is neither liberal nor conservative. Newman delights in debunking both ideologies. Her early work at The Tab sharpened her scorn for authenticity in an age where \"No human sorrow is alien to Conservatism.\" is the truth. First we need to 'know more.' Knowing more will lead to a government program, and soon the problem will be solved\" (she says sarcastically with an aperol in her hand). But her motto, If you're scared to go too far, you won't go far enough, serves her magazine well.")}
          </article>

          
        </div>
      </div>
    </main>
  )
}
