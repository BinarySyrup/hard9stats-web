import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import reversedWordmark from '../img/h9s-logo/hard9stats-logo-reversed.svg';
import diceIcon from '../img/h9s-icons/favicon-dice.svg';
import '../css/style.css';
const sports = ['MLB', 'NFL', 'NHL', 'NBA'];
const comingSoonMessages = {
  NFL: ['The stats are in the huddle.', 'We’re building your board.'],
  NHL: ['The stats are on the bench...for now.', 'We’re getting the board ready.'],
  NBA: ['The numbers are warming up.', 'Tip-off is coming soon.'],
};
const postseasonRounds = [
  { number: 'ROUND 01', name: 'Wild Card Series' },
  { number: 'ROUND 02', name: 'Division Series' },
  { number: 'ROUND 03', name: 'League Championship Series' },
  { number: 'ROUND 04', name: 'World Series' },
];
function Header() {
  const [activeSection, setActiveSection] = useState(() => window.location.hash || '#top');
  useEffect(() => {
    const updateSection = () => setActiveSection(window.location.hash || '#top');
    window.addEventListener('hashchange', updateSection);
    return () => window.removeEventListener('hashchange', updateSection);
  }, []);
  const links = [{ href: '#top', label: 'Overview' }, { href: '#markets', label: 'Markets' }, { href: '#about', label: 'About' }];
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Hard9Stats home">
        <img className="brand-logo" src={reversedWordmark} alt="" />
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        {links.map(({ href, label }) => <a className={`nav-link${activeSection === href ? ' is-active' : ''}`} href={href} key={href}>{label}</a>)}
      </nav>
      <a className="open-source" href="#about"><span>●</span> OPEN SOURCE</a>
    </header>
  );
}
const leagueRepositories = [
  { league: 'MLB', href: 'https://github.com/BinarySyrup/hard9stats-mlb-playoffs' },
  { league: 'NFL', href: null },
  { league: 'NHL', href: null },
  { league: 'NBA', href: null },
];
function LeagueRepos({ onSelectLeague }) {
  return (
    <nav className="league-repo-grid" aria-label="Explore league sections">
      {leagueRepositories.map(({ league, href }) => {
        return (
          <div className="league-repo-card" key={league}>
            <a className="league-repo-market" href="#markets" onClick={() => onSelectLeague(league)} aria-label={league === 'MLB' ? 'View MLB postseason round reports' : `View ${league} markets`}>
              <span className="league-repo-title">{league}</span>
              <span className="league-repo-meta">{league === 'MLB' ? 'Postseason round reports' : 'Markets at a glance'}</span>
            </a>
            {href
              ? <a className="league-repo-github" href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${league} GitHub repository in a new tab`}>
                <svg aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11.03 11.03 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.16c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" /></svg>
              </a>
              : <span className="league-repo-status">Repo coming soon</span>}
          </div>
        );
      })}
    </nav>
  );
}
function Snapshot() {
  return <section className="snapshot" aria-label="Project snapshot"><div className="snapshot-intro"><span className="section-kicker">THE PROJECT</span><span className="snapshot-title">Sports data, made open.</span></div><div className="snapshot-stat"><strong>1</strong><span>LEAGUE</span></div><div className="snapshot-stat"><strong>{postseasonRounds.length}</strong><span>POSTSEASON ROUNDS</span></div><div className="snapshot-stat"><strong>100<span className="percent">%</span></strong><span>OPEN SOURCE</span></div></section>;
}
function Markets({ selectedSport, onSelectSport }) {
  const isMlb = selectedSport === 'MLB';
  const sectionDescription = isMlb
    ? 'Follow the MLB postseason round by round. A PDF report for each round is on the way.'
    : 'League-specific stats are still in development.';
  return <section className="markets-section" id="markets"><div className="section-heading"><div><p className="eyebrow"><span /> {isMlb ? 'POSTSEASON TRACKER' : 'THE BOARD'}</p><h2>{isMlb ? 'Postseason, round by round.' : 'Markets at a glance.'}</h2><p className="section-description">{sectionDescription}</p></div></div><div className="market-toolbar"><div className="sport-filters" role="group" aria-label="Filter by league">{sports.map((sport) => <button aria-pressed={selectedSport === sport} className={`filter-button${selectedSport === sport ? ' is-selected' : ''}`} key={sport} onClick={() => onSelectSport(sport)} type="button">{sport}</button>)}</div></div>{isMlb ? <div className="report-grid">{postseasonRounds.map(({ number, name }) => <article className="report-card" key={name}><span className="report-round">{number}</span><h3>{name}</h3><span className="report-status">PDF REPORT COMING SOON</span></article>)}</div> : <div className="coming-soon" role="status"><span className="coming-soon-label">{selectedSport} / COMING SOON</span><p>{comingSoonMessages[selectedSport][0]}<br />{comingSoonMessages[selectedSport][1]}</p></div>}</section>;
}
function App() {
  const [selectedSport, setSelectedSport] = useState('MLB');
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-shell" id="top">
        <Header />
        <main id="main">
          <section className="hero">
            <div>
              <p className="eyebrow"><span /> STATS FOR NERDS</p>
              <h1>Less hype.<br /><em>More data.</em></h1>
              <p className="hero-description">Open-source sports-market stats for people who want the numbers behind the game.</p>
              <a className="primary-link" href="#markets">Explore the board <span>↗</span></a>
            </div>
            <LeagueRepos onSelectLeague={setSelectedSport} />
          </section>
          <Snapshot />
          <Markets selectedSport={selectedSport} onSelectSport={setSelectedSport} />
          <section className="about-section" id="about">
            <img className="about-dice" src={diceIcon} alt="" />
            <div><p className="eyebrow"><span /> BUILT IN THE OPEN</p><h2>Stats for the love of the game.</h2></div>
            <p>Hard 9 Stats is an open-source project exploring sports-market data.</p>
          </section>
        </main>
        <footer className="footer">
          <a className="footer-brand" href="#top" aria-label="Hard9Stats home"><img className="footer-brand-logo" src={reversedWordmark} alt="" /></a>
          <span>Open-source sports-market stats</span>
          <a href="#about">About the project</a>
        </footer>
      </div>
    </>
  );
}
createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
