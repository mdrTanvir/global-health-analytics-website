const projectUrl = "https://github.com/mdrTanvir/SDG-Health-Analytics";

const indicators = [
  { label: "Maternal mortality", short: "MMR", level: "high" },
  { label: "Life expectancy", short: "LEB", level: "mid" },
  { label: "SDG 3 achievement", short: "SDG", level: "low" },
];

const countries = ["Albania", "Morocco", "Australia", "Malaysia", "Thailand", "Uruguay"];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="SDG 3 analytics home">
          <span className="brand-mark">03</span>
          <span>Health / Analytics</span>
        </a>
        <div className="nav-links">
          <a href="#method">Method</a>
          <a href="#findings">Findings</a>
          <a href="#work">Project</a>
        </div>
        <a className="repo-link" href={projectUrl} target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> SDG 3 · Good Health & Well-being</p>
          <h1>Mapping the<br /><em>shape</em> of global<br />health progress.</h1>
          <p className="intro">A machine-learning study that clusters country health trajectories and forecasts progress towards the 2030 health goal.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore the analysis <span aria-hidden="true">↓</span></a>
            <a className="button text" href={projectUrl} target="_blank" rel="noreferrer">Open on GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract visualisation of country health trajectories" role="img">
          <div className="orbital orbit-a" />
          <div className="orbital orbit-b" />
          <div className="orbital orbit-c" />
          <div className="globe">
            <div className="latitude lat-a" /><div className="latitude lat-b" /><div className="latitude lat-c" />
            <div className="longitude long-a" /><div className="longitude long-b" />
            <i className="dot dot-a" /><i className="dot dot-b" /><i className="dot dot-c" /><i className="dot dot-d" /><i className="dot dot-e" />
          </div>
          <div className="art-label label-a"><b>2013</b><span>baseline</span></div>
          <div className="art-label label-b"><b>2030</b><span>target</span></div>
          <div className="art-key"><i /> Health trajectory</div>
        </div>
        <div className="hero-foot"><span>01 / 03</span><p>From global patterns<br />to country-level insight</p><a href="#method" aria-label="Scroll to method">↓</a></div>
      </section>

      <section className="statement"><div className="shell statement-grid">
        <p className="section-num">01</p>
        <h2>Health outcomes are not<br /><em>moving at the same pace.</em></h2>
        <p>Most countries remain orange or red on SDG 3. This analysis uses the Sustainable Development Report to understand the structural patterns behind that progress—and the distance still to travel.</p>
      </div></section>

      <section className="method shell" id="method">
        <div className="section-head"><p className="eyebrow"><span /> The approach</p><p className="section-num">02</p></div>
        <div className="method-title"><h2>Two lenses.<br /><em>One health story.</em></h2><p>From 2013–2022 country indicators to 2024 outcome forecasts, the work combines unsupervised and supervised learning into one coherent view.</p></div>
        <div className="method-cards">
          <article className="method-card dark-card">
            <p className="card-index">PHASE 01</p><h3>Find the<br />patterns</h3>
            <p>Cluster countries by maternal mortality and life expectancy trajectories.</p>
            <div className="cluster-vis" aria-label="Three country clusters"><i className="c1" /><i className="c2" /><i className="c3" /><i className="c4" /><i className="c5" /><i className="c6" /><i className="c7" /><i className="c8" /><i className="c9" /></div>
            <div className="chip-row"><span>K-Means</span><span>Hierarchical</span><span>Silhouette score</span></div>
          </article>
          <article className="method-card light-card">
            <p className="card-index">PHASE 02</p><h3>Project<br />forward</h3>
            <p>Forecast 2024 SDG 3 achievement levels for a diverse group of countries.</p>
            <div className="line-vis"><svg viewBox="0 0 300 110" aria-hidden="true"><path d="M4 92 C44 89 51 70 79 72 S112 51 141 60 S180 28 205 40 S253 12 296 15"/><path className="faint" d="M4 101 L296 101"/><circle cx="205" cy="40" r="4"/><circle cx="296" cy="15" r="4"/></svg><span>2024 forecast</span></div>
            <div className="chip-row"><span>Linear regression</span><span>R² ≈ 0.97</span></div>
          </article>
        </div>
      </section>

      <section className="findings" id="findings"><div className="shell">
        <div className="section-head"><p className="eyebrow light"><span /> What emerged</p><p className="section-num light-num">03</p></div>
        <div className="findings-main"><h2>Three distinct<br /><em>health worlds.</em></h2><p>Country groupings closely align with income levels and the Sustainable Development Report&apos;s red, orange, and green rating bands.</p></div>
        <div className="cluster-row">
          <article><b className="cluster-no">01</b><span className="cluster-line red" /><h3>Structural<br />pressure</h3><p>High maternal mortality and lower life expectancy</p></article>
          <article><b className="cluster-no">02</b><span className="cluster-line orange" /><h3>Transition<br />in motion</h3><p>Improving outcomes with uneven pace of change</p></article>
          <article><b className="cluster-no">03</b><span className="cluster-line green" /><h3>Established<br />health gains</h3><p>Low maternal mortality and longer life expectancy</p></article>
        </div>
      </div></section>

      <section className="work shell" id="work">
        <div><p className="eyebrow"><span /> The project</p><h2>Built to make the<br /><em>evidence inspectable.</em></h2></div>
        <div className="work-side"><p>Explore the notebooks, source data, and reproducible analysis behind the study.</p><a className="button primary" href={projectUrl} target="_blank" rel="noreferrer">Browse the repository <span aria-hidden="true">↗</span></a></div>
        <div className="work-grid">
          <article className="data-card"><p>DATASET</p><b>Sustainable Development Report</b><span>2024 panel data · 2013—2022</span></article>
          <article className="data-card"><p>FOCUS</p><b>Maternal mortality · Life expectancy</b><span>Key SDG 3 health indicators</span></article>
          <article className="data-card"><p>TOOLKIT</p><b>Python · Pandas · scikit-learn</b><span>Matplotlib · Seaborn · SciPy · Jupyter</span></article>
        </div>
        <div className="country-strip"><span>Forecast countries</span><div>{countries.map((country) => <b key={country}>{country}</b>)}</div></div>
      </section>

      <footer><div className="shell footer-inner"><a className="brand" href="#top"><span className="brand-mark">03</span><span>Health / Analytics</span></a><p>Global health through a data lens.</p><a href={projectUrl} target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>
    </main>
  );
}
