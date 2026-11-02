const repo = "https://github.com/mdrTanvir/SDG-Health-Analytics";

const countries = [
  { name: "Australia", band: "High score", color: "green", note: "Highest predicted achievement · ~88" },
  { name: "Albania", band: "Orange", color: "orange", note: "Meaningful, incomplete progress" },
  { name: "Malaysia", band: "Orange", color: "orange", note: "Meaningful, incomplete progress" },
  { name: "Morocco", band: "Red", color: "red", note: "Improving, with structural challenges" },
  { name: "Thailand", band: "Red", color: "red", note: "Improving, with structural challenges" },
];

export default function Home() {
  return <main>
    <nav className="nav wrap"><a className="brand" href="#top"><b>03</b> HEALTH ANALYTICS</a><div><a href="#findings">Findings</a><a href="#forecast">Forecast</a><a href={repo} target="_blank" rel="noreferrer">Repository ↗</a></div></nav>

    <section className="hero wrap" id="top">
      <p className="kicker">NOTEBOOK RESULTS · SDR 2024 DATA · 2013–2022</p>
      <div className="hero-grid"><div><h1>The findings,<br />not just the<br /><i>framework.</i></h1><p className="lead">An evidence-led view of global health progress: the country clusters that emerged, the strength of the prediction model, and what 2024 forecasts reveal.</p><a className="cta" href="#findings">See the results ↓</a></div><aside className="hero-result"><span>PRIMARY RESULT</span><strong>3</strong><h2>health<br />profiles</h2><p>Country groups consistently emerge across maternal mortality and life expectancy.</p><div className="result-line"><i /><i /><i /></div></aside></div>
      <div className="hero-bottom"><span>CLUSTERING ANALYSIS + 2024 FORECASTING</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="finding-intro" id="findings"><div className="wrap"><p className="kicker inverse">01 · GLOBAL CLUSTERING FINDING</p><div className="intro-grid"><h2>Three health<br />worlds surfaced<br /><i>from the data.</i></h2><p>Both maternal mortality and life expectancy settle into three clear groups. The groups mirror the income and dashboard-rating patterns already visible in the Sustainable Development Report—but make the separation measurable.</p></div><div className="clusters"><article><b>01</b><span className="bar red"/><h3>Persistent<br />pressure</h3><p>High maternal mortality and lower life expectancy.</p><small>Predominantly low-income countries</small></article><article><b>02</b><span className="bar orange"/><h3>Progress in<br />transition</h3><p>Moderate outcomes with uneven improvement.</p><small>Upper-middle income countries</small></article><article><b>03</b><span className="bar green"/><h3>Established<br />health gains</h3><p>Low mortality and long life expectancy.</p><small>Well-resourced health systems</small></article></div></div></section>

    <section className="performance wrap"><p className="kicker">02 · MODEL PERFORMANCE</p><div className="performance-head"><h2>The model holds up<br /><i>where it matters.</i></h2><p>Cross-validation shows that health indicators explain most of the variation in SDG 3 achievement. Forecast confidence is strongest for life expectancy, while mortality remains more volatile.</p></div><div className="metrics"><article><strong>0.97</strong><span>Mean CV R²</span><p>Goal achievement model</p><div className="meter"><i style={{width:"97%"}} /></div></article><article><strong>0.95</strong><span>Mean CV R²</span><p>Life expectancy forecast</p><div className="meter"><i style={{width:"95%"}} /></div></article><article><strong>0.76—0.79</strong><span>Mean CV R²</span><p>Mortality forecasts</p><div className="meter warm"><i style={{width:"78%"}} /></div></article></div><p className="source-note">R² measures how much variation the model explains. Higher values indicate a closer fit to the observed data.</p></section>

    <section className="forecast" id="forecast"><div className="wrap"><div className="forecast-top"><p className="kicker inverse">03 · 2024 FORECASTS</p><span className="all-up">↑ ALL 10 COUNTRIES<br />PREDICTED TO IMPROVE</span></div><div className="forecast-title"><h2>Improvement is<br /><i>not the same</i><br />as arrival.</h2><p>The 2024 forecasts point upward for every selected country. Yet the predicted dashboard bands show how differently that progress is distributed.</p></div><div className="country-list">{countries.map((country, index) => <article key={country.name}><b>0{index + 1}</b><h3>{country.name}</h3><span className={`badge ${country.color}`}>{country.band}</span><p>{country.note}</p></article>)}</div><div className="forecast-foot"><div><strong>~88</strong><span>Australia’s highest predicted achievement score</span></div><div><strong>5</strong><span>Countries remain in the red band despite improvement</span></div><div><strong>4</strong><span>Countries fall in the orange band</span></div></div></div></section>

    <section className="meaning wrap"><p className="kicker">04 · WHAT THE RESULTS MEAN</p><div className="meaning-grid"><h2>Use the gaps to<br /><i>target action.</i></h2><div><p>The most valuable cases are countries whose maternal mortality and life-expectancy clusters do not align. A country can make progress on one dimension while lagging badly on another.</p><p>That is the signal for focused, indicator-specific intervention—not a one-size-fits-all health strategy.</p><a className="cta dark" href={repo} target="_blank" rel="noreferrer">View the notebooks ↗</a></div></div></section>
    <footer><div className="wrap"><span>SDG GOAL 3 · GLOBAL HEALTH ANALYTICS</span><a href={repo} target="_blank" rel="noreferrer">GitHub repository ↗</a></div></footer>
  </main>;
}
