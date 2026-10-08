import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../css/style.css';
const sports = ['All', 'NFL', 'NBA', 'MLB', 'NHL'];
const matchups = [
  { sport: 'NFL', time: 'Sun · 4:25 PM', home: 'Kansas City', homeMark: 'KC', away: 'Buffalo', awayMark: 'BUF', spread: '-1.5', total: '47.5', move: '+0.5', trend: 'positive' },
  { sport: 'NFL', time: 'Sun · 1:00 PM', home: 'Baltimore', homeMark: 'BAL', away: 'Cincinnati', awayMark: 'CIN', spread: '-2.5', total: '44.5', move: '-0.5', trend: 'negative' },
  { sport: 'NBA', time: 'Tonight · 7:30 PM', home: 'Boston', homeMark: 'BOS', away: 'New York', awayMark: 'NYK', spread: '-4.5', total: '219.5', move: '+1.0', trend: 'positive' },
  { sport: 'NBA', time: 'Tonight · 8:00 PM', home: 'Denver', homeMark: 'DEN', away: 'Phoenix', awayMark: 'PHX', spread: '-2.5', total: '224.5', move: '—', trend: 'neutral' },
  { sport: 'MLB', time: 'Today · 7:10 PM', home: 'New York', homeMark: 'NYY', away: 'Boston', awayMark: 'BOS', spread: '-1.5', total: '8.5', move: '-0.5', trend: 'negative' },
  { sport: 'MLB', time: 'Today · 9:40 PM', home: 'Los Angeles', homeMark: 'LAD', away: 'San Diego', awayMark: 'SD', spread: '-1.5', total: '8.0', move: '+0.5', trend: 'positive' },
  { sport: 'NHL', time: 'Tonight · 7:00 PM', home: 'New York', homeMark: 'NYR', away: 'New Jersey', awayMark: 'NJD', spread: '-1.5', total: '6.0', move: '—', trend: 'neutral' },
  { sport: 'NHL', time: 'Tonight · 9:30 PM', home: 'Edmonton', homeMark: 'EDM', away: 'Vancouver', awayMark: 'VAN', spread: '-1.5', total: '6.5', move: '+0.5', trend: 'positive' },
];
function Header() {
  const [activeSection, setActiveSection] = useState(() => window.location.hash || '#top');
  useEffect(() => {
    const updateSection = () => setActiveSection(window.location.hash || '#top');
    window.addEventListener('hashchange', updateSection);
    return () => window.removeEventListener('hashchange', updateSection);
  }, []);
  const links = [{ href: '#top', label: 'Overview' }, { href: '#markets', label: 'Markets' }, { href: '#about', label: 'About' }];
  return <header className="topbar"><a className="brand" href="#top" aria-label="Hard 9 Stats home"><span className="brand-mark">H9</span><span className="brand-name">hard9<span>stats</span></span></a><nav className="main-nav" aria-label="Main navigation">{links.map(({ href, label }) => <a className={`nav-link${activeSection === href ? ' is-active' : ''}`} href={href} key={href}>{label}</a>)}</nav><a className="open-source" href="#about"><span>●</span> OPEN SOURCE</a></header>;
}
const leagueRepositories = [
  { league: 'MLB', href: 'https://github.com/BinarySyrup/hard9stats-mlb-playoffs' },
  { league: 'NFL', href: null },
  { league: 'NBA', href: null },
  { league: 'NHL', href: null },
];
function LeagueRepos() {
  return (
    <nav className="league-repo-grid" aria-label="League GitHub repositories">
      {leagueRepositories.map(({ league, href }) => {
        const cardContent = (
          <>
            <span className="league-repo-arrow" aria-hidden="true">{href ? '↗' : '—'}</span>
            <span className="league-repo-title">{league}</span>
            <span className="league-repo-meta">{href ? 'View GitHub project' : 'Repository coming soon'}</span>
          </>
        );
        return href
          ? <a className="league-repo-card" href={href} key={league} target="_blank" rel="noopener noreferrer">{cardContent}</a>
          : <div className="league-repo-card is-pending" key={league}>{cardContent}</div>;
      })}
    </nav>
  );
}
function Snapshot() {
  return <section className="snapshot" aria-label="Project snapshot"><div className="snapshot-intro"><span className="section-kicker">THE PROJECT</span><span className="snapshot-title">Sports data, made open.</span></div><div className="snapshot-stat"><strong>1</strong><span>LEAGUE</span></div><div className="snapshot-stat"><strong>{matchups.length}</strong><span>MATCHUPS THIS MONTH</span></div><div className="snapshot-stat"><strong>100<span className="percent">%</span></strong><span>OPEN SOURCE</span></div></section>;
}
function MatchupCard({ matchup }) {
  return <article className="game-card"><div className="game-card-top"><span className="league-tag">{matchup.sport}</span><span>{matchup.time}</span><span className={`market-move ${matchup.trend}`}>MOVE {matchup.move}</span></div><div className="teams"><div className="team"><span className="team-mark">{matchup.homeMark}</span><span>{matchup.home}</span></div><span className="at-symbol">VS</span><div className="team"><span className="team-mark alt">{matchup.awayMark}</span><span>{matchup.away}</span></div></div><div className="odds-head"><span>SPREAD</span><span>MONEYLINE</span><span>OVER / UNDER</span></div><div className="odds-values"><span>{matchup.spread}</span><span>—</span><span>{matchup.total}</span></div></article>;
}
function Markets() {
  const [selectedSport, setSelectedSport] = useState('MLB');
  const visibleMatchups = selectedSport === 'All' ? matchups : matchups.filter(({ sport }) => sport === selectedSport);
  return <section className="markets-section" id="markets"><div className="section-heading"><div><p className="eyebrow"><span /> THE BOARD</p><h2>Markets at a glance.</h2><p className="section-description">A simple look at sample lines across the leagues. Explore the layout; connect a data source later.</p></div><div className="data-notice"><span>⚠</span> FICTIONAL SAMPLE DATA — NOT LIVE ODDS</div></div><div className="market-toolbar"><div className="sport-filters" role="group" aria-label="Filter matchups by league">{sports.map((sport) => <button aria-pressed={selectedSport === sport} className={`filter-button${selectedSport === sport ? ' is-selected' : ''}`} key={sport} onClick={() => setSelectedSport(sport)} type="button">{sport}</button>)}</div><p aria-live="polite" className="matchup-count">SHOWING {visibleMatchups.length} MATCHUPS</p></div><div className="game-grid">{visibleMatchups.map((matchup) => <MatchupCard key={`${matchup.sport}-${matchup.homeMark}`} matchup={matchup} />)}</div></section>;
}
function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-shell" id="top">
        <Header />
        <main id="main">
          <section className="hero">
            <div>
              <p className="eyebrow"><span /> OPEN SPORTS DATA</p>
              <h1>Know the game.<br /><em>See the numbers.</em></h1>
              <p className="hero-description">An open-source look at sportsbook market stats across the leagues. Built for fans who want to explore the numbers behind the game.</p>
              <a className="primary-link" href="#markets">Explore the board <span>↗</span></a>
            </div>
            <LeagueRepos />
          </section>
          <Snapshot />
          <Markets />
          <section className="about-section" id="about">
            <div className="about-mark">H9</div>
            <div><p className="eyebrow"><span /> BUILT IN THE OPEN</p><h2>Stats for the love of the game.</h2></div>
            <p>Hard 9 Stats is an open-source project exploring sports-market data.</p>
          </section>
        </main>
        <footer className="footer">
          <a className="footer-brand" href="#top">hard9stats</a>
          <span>Open-source sports stats · Sample data only</span>
          <a href="#about">About the project</a>
        </footer>
      </div>
    </>
  );
}
createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
