import Link from 'next/link'

export const metadata = { title: 'The Reticence' }

export default function FannysPage(){
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
            <div className="gif-frame" data-border="pink" style={{ width: 'min(384px, 43vw)', flex: '0 0 auto', marginTop: 10 }}>
              <a href="/paglia.gif" target="_blank" rel="noopener noreferrer" aria-label="Open paglia gif in new tab" style={{ display: 'block' }}>
                <img src="/paglia.gif" alt="Paglia" />
              </a>
            </div>

            <div className="newman-text">
              <p>The very term ‘libertarian’ was probably coined by the dissident Leanord Reed, to denote a uniquely western thought of anti-absolutism that essentially sought to zhoosh up private life and the individual conscience. Jean-Jacques Rousseau’s early classic, ‘The Social Contract’, foreshadowed the image of “noble savages” in which our primitive identities in civilisation have become hypocritical due to our conformist identities. A natural surplus of brute authoritarianism needing to be disposed of no matter what. As with concepts, so with consequences as criticised in Balzac’s The wild Ass’s Skin.</p>

              <p>To me, the most brilliant and the most engaging of these libertarian intellectuals is Camilla Paglia, the New York born Italian who is just the most fabulous figure in the cause against the hostile relations between the Crats and Republicans. By contrast the not generally accepted verdict that we associate with the name of ms. Camellia Paglia’s ideology is that their feminist character eclipses any of the ostensible differences between her ‘left’ and ‘right’ soul and is one that few wish to dispute.</p>
            </div>
          </div>

          <div className="newman-fulltext">
            <p>Another way in which a distinction might be drawn in this: we have no real records of any “dissident” writing by the minority of intellectuals who were drawn to National Feminism and Antiquities. Indeed, were it not for a certain sick fascination with the great Amelia Earhart whose ferocious missions entrusted and empowered Paglia from a tender youth.</p>

            <p>Badly impoverished since childhood, a zinging co-parent, and famous for the scornfulness of the new wave feminist movement, Paglia is easy to portray as a thwarted and unfeminine personage. But her correspondence shows her to have been an active and ardent lover, as well as a woman constantly distracted from politics by her humanism and her love for nature and literature. In an open letter to her comrades at The Harvard Crimson, written as a guest commentator in 1994, there are tender and authentic reflections on the failures of elitist faculties; some crisp appraisals of the style of Marshall McLuhan; and some extended observations on the ingenious habits of the liberal versus conservative argument, as observed through the windows of sexual personae. The same letter is saturated with their common addictions to the poems of Allen Ginsberg and goes on to offer a spirited hypothesis of ‘boring french theorists’, based on the figure of the unquenchable post-modernist critic of the Fauscaltian mob. Her favourite word of current pop culture would be barbaric, and it becomes plain that by this she intended no ordinary academic slogan, but an intense conviction that Popular culture itself was becoming majorly chaste and cerebral.</p>

            <p>Her individualism is so strong that she despises anything to do with less or “absolutistist” identities. This had led her to oppose any senseless claims made by her fellow working class and fellow women (in retrospect, perhaps a somewhat questionable position for any Female writer to have been taking). In her “Battle of the Bitches” fax war with Julie Birchill she wrote rebunkingly:</p>

              <blockquote className="quoted">
                <p>"A friend of mine calls a style like yours, which we have seen a thousand examples of “alcoholic prose.” There is a heavy, grinding ponderousness pull on the sinking syntax, a noisy blathering sound, a bitter, maudlin self pity breaking through the false bravado and cynical posturing. It is probably a style you learned at home. It is palpably 30 years out of date."</p>
              </blockquote>

              <p>In which Birchill stroke:</p>

              <blockquote className="quoted">
                <p>“Dear Professor Paglia,
Fuck off you crazy old dyke.
Always,
Julie Birchil”</p>
              </blockquote>

            <p>To me, Birchil’s bitch-slap delivers best, in the context of a conscience-stricken Tabloidist writing in Conservative Britain of Sir John Major.</p>

            <p>On the topic of Julie Birchill, I'd like to appreciate her “extermination order” against woke snobbery in what now is the impeachment of the middle class. One feels another crackle of premonition when reading about this. Notwithstanding the current running atrocity in the press corp being the decline of British Values. I’m with Birchill when she says woke snobbery has conducted hideous social experiments on the underprivileged and oppressed, the same fickle group calling itself the Labour party, the same seeds which fuel the genocidal IDF. I find it difficult to be like Paglia, who understands the hecatomb of hypocrisy is partly a projection of the natural brutality of empires. Her prompting is always to enlarge the picture: the concept of the force of the cosmics in political relations does not intimidate her as written in ‘A post-war and pre-Sex, Art, and American Culture’, which is almost entirely devoted to a rhapsodic review of Poetry.</p>

              <blockquote className="quoted">
                <p>“Capitalism is an art form, an Apollonian fabrication to rival nature.”</p>
              </blockquote>

            <p>The dry closing sentences, I submit, acquit the message of dynamism and makes it register to a society at the hands of patriarchal torture more like that of Dostoevsky. It also assists in pointing up the deep contrast with contemporary feminist, who famously distrust the patriarchy and tries its best to silence the appeals of nature and art. My last premonition is the most sobering of all, accompanied by the abdication of absolutism. Paglia has always been propelled into the centre of right-wing feminism and journalism as a writer. But had America gone the other way, is it completely fanciful to imagine an outcome that would have preempted not just to loss of female autonomy by precept and example, Trumpism too? However debatable it might be, one cannot read the writings of Camile Pagalia, even at this distance, without an acute yet mournful awareness of what could have been.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
