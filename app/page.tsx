const repo = "https://github.com/mdrTanvir/SDG-Health-Analytics";

const findings = [
  ["01", "Health outcomes form three clear patterns.", "Countries fall into high-pressure, transitioning, and strong-outcome groups when maternal mortality, life expectancy, and direction of change are considered together."],
  ["02", "Progress is not the same as equity.", "A country can improve on one indicator while still carrying a large health gap. Looking at both indicators makes that easier to see."],
  ["03", "Similar patterns support better questions.", "Comparing countries with similar health profiles helps focus attention on practical actions rather than one-size-fits-all solutions."],
];

const steps = [
  ["Gather", "Use internationally comparable health records for maternal mortality and life expectancy."],
  ["Compare", "Look at each country as a health profile, not as one number in isolation."],
  ["Group", "Use the shared patterns to form three clear, interpretable country groups."],
  ["Interpret", "Translate the patterns into questions health planners, researchers, and the public can use."],
];

export default function Home() {
  return <main>
    <nav className="nav shell"><a className="brand" href="#top"><span>03</span> HEALTH ANALYTICS</a><div className="navlinks"><a href="#question">The research</a><a href="#findings">Findings</a><a href="#how">How it works</a><a href="#technical">Technical notes</a></div></nav>

    <section className="hero shell" id="top">
      <div className="eyebrow">FOR PEOPLE WHO WANT THE STORY FIRST</div>
      <div className="hero-grid"><div><h1>What can health<br />data tell us about<br /><em>where care is needed?</em></h1><p className="hero-copy">This project makes a complex global health analysis understandable: the question it asks, the patterns it finds, and why those patterns matter to everyday lives.</p><a className="button" href="#question">Start with the research question ↓</a></div><aside className="signal-card"><span className="card-label">IN ONE GLANCE</span><strong>3</strong><h2>health patterns<br />across countries</h2><p>One clear way to see unequal outcomes—and to ask where focused attention can help.</p><div className="signal-bars"><i /><i /><i /></div></aside></div>
      <div className="hero-rule"><span>THE PLAIN-LANGUAGE RESEARCH STORY</span><span>TECHNICAL DETAILS BELOW ↓</span></div>
    </section>

    <section className="question" id="question"><div className="shell"><div className="eyebrow light">01 · THE RESEARCH QUESTION</div><div className="question-grid"><div><span className="small-label">WE ASKED</span><h2>Can health data reveal meaningful groups of countries—and help us understand <em>where health gaps are largest?</em></h2></div><div className="answer"><span className="small-label">IN PLAIN LANGUAGE</span><p>Yes. Instead of treating every country as a single score, the analysis looks for countries that share similar health outcomes.</p><p>That gives a clearer picture of the global health gap: who faces the greatest pressure, who is making a difficult transition, and who has strong outcomes to learn from.</p></div></div></div></section>

    <section className="findings shell" id="findings"><div className="eyebrow">02 · WHAT THE ANALYSIS FOUND</div><div className="findings-top"><h2>Three findings that<br /><em>make the picture clearer.</em></h2><p>These are not labels for people or nations. They are practical patterns in the data that invite more focused questions and action.</p></div><div className="finding-list">{findings.map(([number, title, copy]) => <article key={number}><b>{number}</b><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>

    <section className="why"><div className="shell why-grid"><div><div className="eyebrow light">03 · WHY IT MATTERS</div><h2>Better questions<br />can lead to <em>better care.</em></h2></div><div><p>Health numbers can feel abstract. In real life, they speak to whether a person can safely give birth, whether families can access care, and whether communities can expect longer, healthier lives.</p><p>This analysis does not prescribe a single answer. It helps make the gaps visible so decisions can be more informed, more local, and more humane.</p></div></div></section>

    <section className="how shell" id="how"><div className="eyebrow">04 · HOW THE RESEARCH WAS DONE</div><div className="how-top"><h2>From health records<br />to a <em>clearer story.</em></h2><p>The process is designed to be simple to explain, even though it uses data-science methods behind the scenes.</p></div><div className="step-grid">{steps.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="technical" id="technical"><div className="shell"><div className="technical-banner"><div><div className="eyebrow light">FOR TECHNICAL READERS</div><h2>Under the hood.</h2><p>The research story ends above. This section explains the implementation, decisions, and limits for people who want to inspect the method.</p></div><a className="button pale" href={repo} target="_blank" rel="noreferrer">Open the code on GitHub ↗</a></div><div className="tech-grid"><article><b>DATA</b><h3>Two health indicators</h3><p>Maternal mortality and life expectancy are selected as complementary measures of health outcomes.</p></article><article><b>FEATURES</b><h3>Outcome + direction</h3><p>Each country is represented by current indicator values plus recent direction of change. Maternal mortality is log-transformed before scaling.</p></article><article><b>MODEL SELECTION</b><h3>K-Means is selected</h3><p>K-Means and Ward hierarchical clustering are evaluated on the same standardised features. K-Means has the stronger silhouette score: 0.393 versus 0.381.</p></article><article><b>VALIDATION</b><h3>Time-aware forecasting</h3><p>Short-horizon approaches are tested by withholding the last observation per country. Persistence outperforms the tested linear trends for both indicators.</p></article><article><b>REPRODUCIBILITY</b><h3>Open notebooks</h3><p>The repository contains executed notebooks, source links, requirements, and a refresh script for the analysis.</p></article><article><b>LIMITATION</b><h3>Pattern, not cause</h3><p>Clustering describes similarity. It cannot establish causality or replace country context, policy knowledge, or health expertise.</p></article></div></div></section>

    <footer><div className="shell"><span>SDG GOAL 3 · GLOBAL HEALTH ANALYTICS</span><a href={repo} target="_blank" rel="noreferrer">View research repository ↗</a></div></footer>
  </main>;
}
