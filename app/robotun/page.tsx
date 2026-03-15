import Link from 'next/link'

export const metadata = { title: 'Window of Opportunity' }

export default function RobotUnPage(){
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
  const renderWrapped = (node: string | JSX.Element, maxWords = 8) => {
    let text = ''
    let isEm = false
    if (typeof node === 'string') text = node
    else if (node && typeof node === 'object' && 'props' in node && typeof (node as any).props.children === 'string') {
      text = (node as any).props.children
      if ((node as any).type === 'em' || (node as any).type === 'i') isEm = true
    } else {
      // fallback: render as-is if structure is unexpected
      return <p>{node}</p>
    }

    const lines = splitToLines(text, maxWords)

    // regex to detect quoted substrings (curly and straight quotes)
    const quoteRegex = /(‘[^’]+’|“[^”]+”|"[^"]+"|'[^']+')/

    return (
      <p>
        {lines.map((l, i) => {
          const parts = l.split(/(‘[^’]+’|“[^”]+”|"[^"]+"|'[^']+')/g).filter(Boolean)
          return (
            <span key={i} style={{ display: 'block' }}>
              {parts.map((part, j) => {
                if (quoteRegex.test(part)) {
                  const content = part
                  const inner = isEm ? <em key={j}>{content}</em> : content
                  return (
                    <span key={j} className="dotted-quote" style={{ textDecoration: 'underline dotted', textDecorationColor: 'currentColor' }}>
                      {inner}
                    </span>
                  )
                }
                return isEm ? <em key={j}>{part}</em> : <span key={j}>{part}</span>
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
        <div style={{ padding: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent' }}>
          <h2 style={{ margin: 0, marginLeft: 50, fontFamily: 'var(--font-open-sans), system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 400 }}>Window of Opportunity</h2>
          <div style={{ padding: 0 }} />
        </div>

        <div style={{ padding: 24, maxWidth: 920, margin: '0 auto', lineHeight: 1.6, color: '#050505', fontFamily: 'var(--font-open-sans), system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 300, letterSpacing: '0.3px' }}>
          <div style={{ width: 220, margin: '0 auto 18px', background: 'transparent', boxSizing: 'border-box' }}>
            <img src="/robotun.gif" alt="Robot Un" style={{ width: '100%', height: 'auto', display: 'block', background: 'transparent', border: 'none' }} />
          </div>
          <article>
            {renderWrapped("Reaction to the recent release of Dove’s ‘Post-Human Code Book’ campaign, endorsed by UNICEF, has largely centred on a winsomely innocent reverence for dismantling beauty standards in the age of AI. Yet the playbook reveals a different UNICEF: savvy, manipulative, disingenuous, and stripped of the humanity for which it was once so admired.")}

            {renderWrapped("If there were a competition for the headline most unlikely to appear in a UNICEF press release, the winning entry would surely be “hottest bots” or “bots that are hot according to bots.” Digital governance of women, and even posthumously has always somehow fallen to UNICEF to set the tone. This is an exciting task in governance, especially when one considers that UNICEF had to raise the tone on AI without ever openly admitting that the tone needed raising for women. Yet it was always implicitly acknowledged that a dash of UNICEF was necessary for women. Of course a little leaven leaves the whole lump of matter, refining the rather coarse mixture of the recent hurrah and the bootleg version of the original UNICEF mission.")}

            {renderWrapped("The ‘new’ UNICEF, a digital governance, somewhat empowering, nonetheless possesses just that hint of trust that commands respect from the masses. Yet now, reading and listening to the endorsements and ambassadors of UNICEF, I am once again visited by a vague feeling that this lovely window has actually lowered the tone for the natal value of self-love. Much of the endorsement of Dove’s “Keeping It Real With The Code” has focused on a self-subordinating, near-doormat attitude that women have come to accept as their own path within the complex landscape at the intersection of AI and beauty.")}

            {renderWrapped("Endorsed by UNICEF, the promotional video is vocally enhanced by a not so unexpected composition reminiscent of a great Disney film. In the material, the actress is wrongly confined to loneliness, in the dark, subjected to an awful kind of Victorian beauty. She is visibly upset by her lonely doom scrolling. Then enters Dove. She seeks refuge in Dove. Gallivant Dove. Protruding the Kardashian-afied and proliferating a ‘dovified' version of beauty. Keeping the code of language firmly under their control.")}

            {renderWrapped("In the promotion, the actress uses an AI engine to search for '‘Hottest woman according to Dove’'. The output disregards generational beauty standards labelled a breed of moral monsters. The tradition of strong womanhood is expressed in visual imagery. Bambi-like looks notwithstanding, it was clear that the AI bots directed her antennae along a sexualised channel and a quite savvy one at that. Clichés they may be, It is slightly off-putting to find Dove so eagerly searching for the bitch-slap put-down of other women in their promotional material. But when examined carefully and in context, the pouting refusal to accept any positive beauty standards except those supplied by Dove’s standards turns out not to be evidence of winsome innocence, but rather a softer cover for a specific knowingness and calculation, simultaneously the viewer is in on the calculation and kept in the dark?")}

            {renderWrapped("While Dove has not always been wrong when it comes to portraying a thumbnail of self-choice drawing on its experience as a company that has, in many ways, challenged beauty standards (partnering with UNICEF), it is based also on the recent experience of the actress accepting the role of generative AI’s subservient figure and distinctly relishing it, as well as Dove’s own acceptance of the role of insider to women, similarly relishing it. Actress Lupita Nyong’o, who has guided this delicate craft of control, should not be overlooked when she says in the Times:")}

            {renderWrapped(<em>“The promotional videos reveal Dove’s psychological pursuit as a major player in the masquerade of beauty”.</em>)}

            {renderWrapped("Sometimes it feels like celebrating difference only goes as far as including the “right kind” of difference. Yet it certainly makes it difficult, if not impossible, to accept that the foundations of the beauty industry rely not on overt coercion but on presenting themselves as female allies in order to push their commercial agenda.")}

            {renderWrapped("If Dove is a major player in targeting consumer data from the inside out paradoxically exacerbating the very anxieties they claim to alleviate and is backed by the popular reputation of the UNICEF administration, then with its remarkable professional visibility, UNICEF could influence the AI image-coding categorisation to help women access an enlightened and disciplined version of themselves, not only through economic transactions. By failing to do so, UNICEF becomes complicit in sustaining the continual production of cosmetics and perpetuates subtle forms of commodified surveillance disguised as disciplined AI-driven characteristics.")}

            {renderWrapped("I suppose it depends on what makes you cringe. Why would tough babes like Lupita Nyong’o and Priyanka Chopra seem to care so deeply about the politics of the beauty standards they champion? I speculate that such ardent attachment reflects the lasting impact of Dove’s decade-long “Beauty is a State of Mind” campaigns. Perhaps I can say this because, as a special treat, I have been let in one the salacious surveillance Dove maintains. This represents the rawest and raunchiest underside of consumer power. It raises the question: how much else does Dove know? It also makes one wonder how much UNICEF knows about Dove’s consumption of data, data that is quite profitable and how often UNICEF closes its eyes or ears as these datafied beauty standards relentlessly follow endorsements and ambassador roles.")}

            {renderWrapped("This dynamic raises the question: are women truly aesthetic entrepreneurs, or merely puppets reinforcing a wider cultural system? With aesthetic ownership, women are “called on to be autonomous and self-regulating in the pursuit of beauty, managing its demands, risks, and injuries as well as enjoying its pleasures.” Yet it is deeply ironic that the very industry promising quick fixes for effortless empowerment and elegance simultaneously imposes strenuous corporeal labour to sustain it.")}

            {renderWrapped("You don’t have to be a cynic to detect something stale and contrived. Relentless milking. A tale as old as time. The tale of ‘Emperor’s New Clothes' and its chief architect: Surveillance. In recent years, Dove and L’Oréal have quietly retreated from the spotlight, while the old guard of liars, their so-called bodyguards, have slowly unravelled, ‘willing at least to wound themselves with their own swords in desperate attempts to fend off unwelcome revelations about what truly transpired behind the scenes’. Today, Dove’s standing among NGOs and various federations is arguably the most obstructive and politically charged of them all.")}

            {renderWrapped("For some people, the lineage of Dove campaigns, down to the most trivial and tangential details such as “wrong scents”, raises the question: when did the “wrong scent” begin to cling to business? The wrong fit, the right fit? Women are now expected to be accountable for studying the latest trends, remaining up to date with shifting ideals, and investing in the latest and best quality products. The pursuit of beauty has morphed into a personal responsibility that requires cultural literacy, self-awareness, and financial investment to adhere to systemic demands. In such contexts, the female self is continuously under construction and constant vigilance, managed with the rigour of civic duty. Failure to maintain appearance is interpreted as a personal shortcoming. A moral and individual failure rather than a flaw of the system itself. Again, it turns out that full and proper credit is due to the very element that founded UNICEF given so many chances to uphold a gold standard all to discard it in favour of the reverse now on show.")}
          </article>
        </div>
      </div>
    </main>
  )
}
