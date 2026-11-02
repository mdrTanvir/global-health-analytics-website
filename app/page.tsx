const repo = "https://github.com/mdrTanvir/SDG-Health-Analytics";

const groups = [
  { number: "01", title: "Highest pressure", copy: "High maternal mortality and shorter life expectancy point to a need for focused health-system support.", tone: "coral" },
  { number: "02", title: "Transitioning outcomes", copy: "Progress is visible, yet outcomes remain uneven. These countries benefit from targeted, sustained investment.", tone: "gold" },
  { number: "03", title: "Strong health outcomes", copy: "Low maternal mortality and longer life expectancy show what resilient care systems can achieve.", tone: "mint" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top"><span>03</span> HEALTH ANALYTICS</a>
        <div className="navlinks"><a href="#findings">Findings</a><a href="#meaning">Why it matters</a><a href="#methods">Methods</a><a href={repo} target="_blank" rel="noreferrer">GitHub ↗</a></div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow">GLOBAL HEALTH · SDG GOAL 3</div>
        <div className="hero-grid">
          <div>
            <h1>Health data<br />that makes the<br /><em>gap visible.</em></h1>
            <p className="hero-copy">This project turns maternal mortality and life expectancy data into a clear view of where health outcomes are strongest, where pressure is greatest, and why targeted action matters.</p>
            <a className="button" href="#findings">Explore the findings ↓</a>
          </div>
          <aside className="signal-card" aria-label="Analysis summary">
            <span className="card-label">THE CORE FINDING</span>
            <strong>3</strong>
            <h2>distinct health<br />profiles</h2>
            <p>Countries with similar health outcomes and patterns sit together, making global differences easier to understand.</p>
            <div className="signal-bars"><i /><i /><i /></div>
          </aside>
        </div>
        <div className="hero-rule"><span>MATERNAL MORTALITY + LIFE EXPECTANCY</span><span>207 COUNTRIES ANALYSED</span></div>
      </section>

      <section className="finding-section" id="findings">
        <div className="shell">
          <div className="eyebrow light">01 · THE FINDING</div>
          <div className="section-intro"><h2>One global picture.<br /><em>Three very different</em><br />health realities.</h2><p>The analysis groups countries by their health outcomes and direction of change. It does not rank people or countries—it reveals patterns that averages can hide.</p></div>
          <div className="group-grid">
            {groups.map((group) => <article key={group.number} className={`group ${group.tone}`}><b>{group.number}</b><span className="group-line" /><h3>{group.title}</h3><p>{group.copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="meaning shell" id="meaning">
        <div className="eyebrow">02 · WHY THIS MATTERS</div>
        <div className="meaning-top"><h2>Behind every number<br />is a question of <em>care.</em></h2><p>Health analytics is useful when it turns information into better decisions—where to look closer, which gaps need attention, and how to learn from countries facing similar conditions.</p></div>
        <div className="benefit-grid">
          <article><span>01</span><h3>See what averages miss.</h3><p>A single national score can hide sharp differences. Comparing health profiles makes the gaps easier to see.</p></article>
          <article><span>02</span><h3>Ask better questions.</h3><p>Patterns help policymakers, researchers, and communities identify where an outcome needs more investigation.</p></article>
          <article><span>03</span><h3>Focus action where it counts.</h3><p>Different health profiles need different responses. Evidence supports more practical, tailored choices.</p></article>
        </div>
      </section>

      <section className="evidence">
        <div className="shell evidence-layout">
          <div><div className="eyebrow light">03 · EVIDENCE AT A GLANCE</div><h2>The pattern is<br /><em>measurable.</em></h2><p>Two grouping methods were compared using the same health features. The selected approach produced the clearest separation between country profiles.</p></div>
          <div className="score-panel"><div><strong>0.393</strong><span>Selected clustering score</span></div><div><strong>207</strong><span>Countries with sufficient data</span></div><div><strong>3</strong><span>Health profiles</span></div></div>
        </div>
      </section>

      <section className="method-shell shell" id="methods">
        <div className="eyebrow">04 · UNDER THE HOOD</div>
        <div className="method-top"><h2>Simple inputs.<br /><em>Careful interpretation.</em></h2><p>For people who want the technical view, the analysis is transparent and reproducible in the project repository.</p></div>
        <div className="method-grid">
          <article><b>INPUTS</b><h3>Two indicators</h3><p>Maternal mortality and life expectancy provide complementary signals about health outcomes.</p></article>
          <article><b>PREPARATION</b><h3>Comparable features</h3><p>Values are standardised and maternal mortality is transformed so extreme values do not dominate the grouping.</p></article>
          <article><b>GROUPING</b><h3>K-Means, k = 3</h3><p>K-Means is compared with hierarchical clustering, then the clearer result is selected using silhouette score.</p></article>
          <article><b>BOUNDARY</b><h3>Insight, not diagnosis</h3><p>The analysis identifies patterns. It does not explain every cause or replace local health expertise.</p></article>
        </div>
        <a className="button dark" href={repo} target="_blank" rel="noreferrer">View the analysis on GitHub ↗</a>
      </section>

      <footer><div className="shell"><span>SDG GOAL 3 · GLOBAL HEALTH ANALYTICS</span><a href={repo} target="_blank" rel="noreferrer">Open project source ↗</a></div></footer>
    </main>
  );
}
