import Link from 'next/link'
import SentenceGaps from '../components/SentenceGaps'

export const metadata = { title: 'Window of Opportunity' }

export default function WindowOfOpportunityPage(){
  return (
    <main style={{ background: '#fff', minHeight: '100vh', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
  <div style={{ maxWidth: 1100, width: '100%', margin: '0 auto', background: '#fff', boxShadow: 'none', borderRadius: 0 }}>
        <div style={{ padding: 0, borderBottom: 'none', background: '#fff' }} />

        <div style={{ padding: 0 }}>
          <div style={{ padding: '20px 20px 0', maxWidth: 920, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', transform: 'translateY(-120px)' }}>
            <h1 style={{ margin: '0 0 6px 0', textAlign: 'center' }}>
              <span className="window-title">Window of Opportunity</span>
              <style>{`
                .window-title {
                  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                  font-weight: 300;
                  font-size: 0.95rem;
                  color: #b80565ff;
                  text-decoration: none;
                  display: inline-block;
                  padding: 4px 8px 6px 8px;
                  border-radius: 4px;
                  transition: background-color 120ms ease;
                  background-color: #ffffff; /* ensure contrast behind underline on dark bg */
                  /* black dotted underline */
                  --dot-color: #000; /* black dots */
                  --dot-size: 5px 3px; /* slightly larger for visibility */
                  background-image: radial-gradient(circle, var(--dot-color) 62%, rgba(0,0,0,0) 63%);
                  background-repeat: repeat-x;
                  background-size: var(--dot-size);
                  background-position: 0 calc(100% - 2px);
                }

                .window-title:hover {
                  background-color: #ffffff; /* keep white so black line stays visible */
                  /* black solid underline on hover */
                  background-image: linear-gradient(#000, #000);
                  background-size: 100% 3px; /* a touch thicker on hover */
                  background-position: 0 calc(100% - 2px);
                  background-repeat: no-repeat;
                }

                .window-title:focus-visible {
                  outline: 2px solid #cfeedb;
                  outline-offset: 2px;
                }
              `}</style>
            </h1>
          </div>

          <article className="thin-window" style={{ padding: '8px 20px 28px', maxWidth: 920, margin: '0 auto', color: '#ffffff', lineHeight: 1.7, fontWeight: 700, fontVariationSettings: '"wght" 700', letterSpacing: '0.3px', transform: 'translateY(-50px)', background: '#000' }}>
            <style>{`
              .thin-window, .thin-window p, .thin-window strong, .thin-window b {
                font-weight:700 !important;
                font-variation-settings:'wght' 700;
                font-family: var(--font-inter), Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              }
              .thin-window strong { letter-spacing:0.35px; }
              /* remove paragraph-level highlight; we highlight sentences instead */
              .thin-window p { padding: 0; margin: 0 0 0.2em 0; }

              .sentence-block {
                display: inline-block; /* keeps highlight to text width */
                margin: 0 0 1.7em 0; /* whole-line gap between sentences (matches line-height ~1.7) */
                background: rgba(255, 250, 150, 0.88); /* brighter, far less transparent yellow highlight */
                padding: 2px 4px 4px 4px;
                border-radius: 0; /* squared edges */
                line-height: 1.5;
                transition: background-color 140ms ease;
              }
              .sentence-block:hover { background: rgba(255, 235, 59, 0.95); }
              .sentence-block:last-child { margin-bottom: 0; }
            `}</style>
            <SentenceGaps />
            <p><strong>Reaction to the recent release of Dove&apos;s &apos;Post-Human Code Book&apos; campaign, endorsed by UNICEF, has largely centered on a winsomely innocent reverence for dismantling beauty standards in the age of AI. Yet the playbook reveals a different UNICEF: savvy, manipulative, disingenuous, and stripped of the humanity for which it was once so admired.</strong></p>

            <p><strong>If there were a competition for the headline most unlikely to appear in a UNICEF press release, the winning entry would surely be “hottest bots” or “bots that are hot according to bots.”</strong> Digital governance of women, and even posthumously has always somehow fallen to UNICEF to set the tone. This is an exciting task in governance, especially when one considers that UNICEF had to raise the tone on AI without ever openly admitting that the tone needed raising for women. Yet it was always implicitly acknowledged that a dash of UNICEF was necessary for women. Of course a little leaven leaves the whole lump of matter, refining the rather coarse mixture of the recent hurrah and the bootleg version of the original UNICEF mission.</p>

            <p><strong>The &apos;new&apos; UNICEF, a digital governance, somewhat empowering, nonetheless possesses just that hint of trust that commands respect from the masses.</strong> Yet now, reading and listening to the endorsements and ambassadors of UNICEF, I am once again visited by a vague feeling that this lovely window has actually lowered the tone for the natal value of self-love. Much of the endorsement of Dove&apos;s “Keeping It Real With The Code” has focused on a self-subordinating, near-doormat attitude that women have come to accept as their own path within the complex landscape at the intersection of AI and beauty.</p>

            <p><strong>Endorsed by UNICEF, the promotional video is vocally enhanced by a not so unexpected composition reminiscent of a great Disney film.</strong> In the material, the actress is wrongly confined to loneliness, in the dark, subjected to an awful kind of Victorian beauty. She is visibly upset by her lonely doom scrolling. Then enters Dove. She seeks refuge in Dove. Gallivant Dove. Protruding the Kardashian-afied and proliferating a &apos;dovified&apos; version of beauty. Keeping the code of language firmly under their control.</p>

            <p>In the promotion, the actress uses an AI engine to search for <strong>&apos;Hottest woman according to Dove&apos;</strong>. The output disregards generational beauty standards labelled a breed of moral monsters. The tradition of strong womanhood is expressed in visual imagery. Bambi-like looks notwithstanding, it was clear that the AI bots directed her antennae along a sexualised channel and a quite savvy one at that. Cliches they may be, It is slightly off-putting to find Dove so eagerly searching for the bitch-slap put-down of other women in their promotional material. But when examined carefully and in context, the pouting refusal to accept any positive beauty standards except those supplied by Dove&apos;s standards turns out not to be evidence of winsome innocence, but rather a softer cover for a specific knowingness and calculation, simultaneously the viewer is in on the calculation and kept in the dark?</p>

            <p><strong>While Dove has not always been wrong when it comes to portraying a thumbnail of self-choice drawing on its experience as a company that has, in many ways, challenged beauty standards (partnering with UNICEF), it is based also on the recent experience of the actress accepting the role of generative AI&apos;s subservient figure and distinctly relishing it, as well as Dove&apos;s own acceptance of the role of insider to women, similarly relishing it.</strong> Actress Lupita Nyong’o, who has guided this delicate craft of control, should not be overlooked when she says in the Times: <strong>&quot;The promotional videos reveal Dove&apos;s psychological pursuit as a major player in the masquerade of beauty&quot;.</strong></p>

            <p>Sometimes it feels like celebrating difference only goes as far as including the <strong>“right kind” of difference.</strong> Yet it certainly makes it difficult, if not impossible, to accept that the foundations of the beauty industry rely not on overt coercion but on presenting themselves as female allies in order to push their commercial agenda.</p>

            <p><strong>If Dove is a major player in targeting consumer data from the inside out paradoxically exacerbating the very anxieties they claim to alleviate and is backed by the popular reputation of the UNICEF administration, then with its remarkable professional visibility, UNICEF could influence the AI image-coding categorisation to help women access an enlightened and disciplined version of themselves, not only through economic transactions.</strong> By failing to do so, UNICEF becomes complicit in sustaining the continual production of cosmetics and perpetuates subtle forms of commodified surveillance disguised as disciplined AI-driven characteristics.</p>

            <p>I suppose it depends on what makes you cringe. Why would tough babes like Lupita Nyong&apos;o and Priyanka Chopra seem to care so deeply about the politics of the beauty standards they champion? I speculate that such ardent attachment reflects the lasting impact of Dove&apos;s decade-long &quot;Beauty is a State of Mind&quot; campaigns. Perhaps I can say this because, as a special treat, I have been let in on the salacious surveillance Dove maintains. This represents the rawest and raunchiest underside of consumer power. It raises the question: how much else does Dove know? It also makes one wonder how much UNICEF knows about Dove&apos;s consumption of data, data that is quite profitable and how often UNICEF closes its eyes or ears as these datafied beauty standards relentlessly follow endorsements and ambassador roles.</p>

            <p><strong>This dynamic raises the question: are women truly aesthetic entrepreneurs, or merely puppets reinforcing a wider cultural system?</strong> With aesthetic ownership, women are “called on to be autonomous and self-regulating in the pursuit of beauty, managing its demands, risks, and injuries as well as enjoying its pleasures.” Yet it is deeply ironic that the very industry promising quick fixes for effortless empowerment and elegance simultaneously imposes strenuous corporeal labour to sustain it.</p>

            <p>You don&apos;t have to be a cynic to detect something stale and contrived. Relentless milking. A tale as old as time. The tale of &apos;Emperor&apos;s New Clothes&apos; and its chief architect: Surveillance. In recent years, Dove and L’Oréal have quietly retreated from the spotlight, while the old guard of liars, their so-called bodyguards, have slowly unravelled, &apos;willing at least to wound themselves with their own swords in desperate attempts to fend off unwelcome revelations about what truly transpired behind the scenes&apos;. Today, Dove&apos;s standing among NGOs and various federations is arguably the most obstructive and politically charged of them all.</p>

            <p><strong>For some people, the lineage of Dove campaigns, down to the most trivial and tangential details such as “wrong scents”, raises the question: when did the “wrong scent” begin to cling to business?</strong> The wrong fit, the right fit? Women are now expected to be accountable for studying the latest trends, remaining up to date with shifting ideals, and investing in the latest and best quality products. The pursuit of beauty has morphed into a personal responsibility that requires cultural literacy, self-awareness, and financial investment to adhere to systemic demands. In such contexts, the female self is continuously under construction and constant vigilance, managed with the rigour of civic duty. Failure to maintain appearance is interpreted as a personal shortcoming. A moral and individual failure rather than a flaw of the system itself. Again, it turns out that full and proper credit is due to the very element that founded UNICEF given so many chances to uphold a gold standard all to discard it in favour of the reverse now on show.</p>

          </article>
        </div>
      </div>
    </main>
  )
}
