import { useEffect } from 'react';
import { STRINGS } from './strings.js';
import {
  SECTIONS, STATS, FLOW, STACK, FILTERS, PROJECTS, CERTS, CERT_CHIPS, LEARN_URL, SKILLS, SOCIALS, TESTIMONIALS,
} from './data.js';
import { Pin, Mail, Phone, Award, Moon, Sun, Prev, Next, Brand } from './icons.jsx';
import { initEffects } from './effects.js';

// Language is fixed for the page's lifetime (switching reloads), so App renders once
// and the GSAP/Three code in effects.js can safely work on the DOM it produces.
const lang = document.documentElement.lang in STRINGS ? document.documentElement.lang : 'en';
const t = STRINGS[lang];
const html = s => ({ __html: s });
const EMAIL = 'anwarluck@outlook.com';
const PHONE = '+974 7134 2346';

function setTheme() {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
}

function setLang(e) {
  const value = e.target.value;
  try { localStorage.setItem('lang', value); } catch (err) {}
  const u = new URL(location.href);
  value === 'en' ? u.searchParams.delete('lang') : u.searchParams.set('lang', value);
  location.href = u.toString();
}

function SectionHeader({ id, reveal = true }) {
  return (
    <div className={'section-header' + (reveal ? ' reveal' : '')}>
      <p className="section-eyebrow" dangerouslySetInnerHTML={html(t.eyebrow[id])} />
      <h2 className="section-title" dangerouslySetInnerHTML={html(t.heading[id])} />
      <div className="section-divider"></div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    document.title = t.title;
    initEffects();
  }, []);

  return (
    <>
      <canvas id="fluid-canvas"></canvas>
      <div className="grid-overlay"></div>
      <div id="scroll-progress"></div>

      <nav className="nav show" id="main-nav">
        <div className="nav-brand">AUH // D365 &amp; PP</div>
        <ul className="nav-links">
          {SECTIONS.map((s, i) => <li key={s}><a href={`#${s}-section`}>{t.nav[i]}</a></li>)}
        </ul>
        <div className="nav-actions">
          <select className="nav-lang" aria-label="Language" defaultValue={lang} onChange={setLang}>
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="fr">FR</option>
            <option value="ar">عربي</option>
          </select>
          <button className="nav-theme" aria-label="Toggle dark mode" onClick={setTheme}><Moon /><Sun /></button>
          <a href={`mailto:${EMAIL}`} className="nav-cta">{t.hire}</a>
        </div>
      </nav>

      <section id="hero">
        <canvas id="hero-canvas"></canvas>
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-content">
          <div className="hero-mcid" id="h-mcid">{t.mcid}</div>
          <div className="hero-avatar-wrap" id="h-avatar">
            <img className="hero-avatar" src="assets/images/c-1.png" alt="Anwar Ul Haq" />
            <div className="hero-avatar-ring"></div>
            <div className="hero-avatar-dot"></div>
          </div>
          <div className="hero-available" id="h-avail"><span className="avail-dot"></span> {t.avail}</div>
          <h1 className="hero-name" id="h-name">Anwar Ul Haq</h1>
          <p className="hero-role" id="h-role" dangerouslySetInnerHTML={html(t.role)} />
          <div className="hero-pills" id="h-pills">
            <span className="hero-pill"><Pin /> {t.city}</span>
            <span className="hero-pill"><Mail /> {EMAIL}</span>
            <span className="hero-pill"><Phone /> <span dir="ltr">{PHONE}</span></span>
          </div>
          <div className="hero-cert-badge" id="h-badge"><Award /> <span dangerouslySetInnerHTML={html(t.badge)} /></div>
        </div>
        <div className="hero-scroll"><div className="hero-scroll-bar"></div> {t.scroll}</div>
      </section>

      <div id="stats">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div className="stat-card reveal" key={i}>
              <div className="stat-num"><span className="counter" data-to={s.to}>0</span>{s.plus && <span className="stat-suffix">+</span>}</div>
              <div className="stat-label">{t.stats[i]}</div>
            </div>
          ))}
        </div>
      </div>

      <div id="about-section" className="section">
        <SectionHeader id="about" />
        <div className="about-grid">
          <div className="about-summary reveal">
            <p dangerouslySetInnerHTML={html(t.summary)} />
            <div className="about-flow">
              {FLOW.map(([name, bg], i) => (
                <span key={name} style={{ display: 'contents' }}>
                  {i > 0 && <span className="flow-arrow">→</span>}
                  <span className="flow-node" style={{ background: bg }}>{name}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="stack-panel reveal">
            <div className="stack-panel-title">// Power Platform Stack</div>
            {STACK.map(s => (
              <div className="stack-row" key={s.name}>
                <div className="stack-dot" style={{ background: s.dot, boxShadow: `0 0 8px ${s.glow}` }}></div>
                <div className="stack-name">{s.name}</div>
                <span className="stack-badge" style={{ background: s.bg, color: s.dot, border: `1px solid ${s.border}` }}>{s.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="experience-section" className="section">
        <SectionHeader id="exp" />
        <div className="exp-timeline">
          {t.exp.map(e => (
            <div className="exp-item reveal" key={e.period}>
              <div className="exp-dot"></div>
              <div className="exp-card">
                <div className="exp-header">
                  <h3 className="exp-role" dangerouslySetInnerHTML={html(e.role)} />
                  <span className="exp-period">{e.period}</span>
                </div>
                <div className="exp-company">{e.company}</div>
                <ul className="exp-bullets">
                  {e.bullets.map((b, i) => <li key={i} dangerouslySetInnerHTML={html(b)} />)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="projects-section" className="section">
        {/* no .reveal here: the eyebrow/title get a per-character animation instead */}
        <SectionHeader id="proj" reveal={false} />
        <div className="proj-filters reveal">
          <button className="proj-filter-btn pf-active" data-filter="all">{t.filterAll}</button>
          {FILTERS.map(([key, label]) => <button className="proj-filter-btn" data-filter={key} key={key}>{label}</button>)}
        </div>
        <div className="proj-grid" id="projGrid">
          {PROJECTS.map((p, i) => {
            const s = t.projects[i];
            return (
              <div className="proj-card reveal" data-co={p.co} key={i}>
                <div className="proj-accent"></div>
                <div className="proj-inner">
                  <div className="proj-head">
                    <h3 className="proj-title" dangerouslySetInnerHTML={html(s.title)} />
                    <span className="proj-badge">{p.badge}</span>
                  </div>
                  {s.period && <p className="proj-period">{s.period}</p>}
                  <p className="proj-body">{s.body}</p>
                  <div className="proj-tags">{p.tags.map(tag => <span className="proj-tag" key={tag}>{tag}</span>)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="certifications-section" className="section">
        <SectionHeader id="cert" />
        <div className="cert-grid">
          {CERTS.map(([code, name, kind, url]) => {
            const [a, b] = code.split('-');
            return (
              <a className="cert-card reveal" href={url} target="_blank" rel="noopener" key={code}>
                <div className={`cert-badge-wrap cb-${kind}`}>{a}<br />{b}</div>
                <div className="cert-code">{code}</div>
                <div className="cert-name">{name}</div>
              </a>
            );
          })}
        </div>
        <div className="cert-extra reveal">
          {CERT_CHIPS.map((row, i) => (
            <div className="cert-extra-row" key={i}>
              <span className="cert-extra-label">{t.certLabels[i]}</span>
              {row.items.map(c => (
                <a className={'cert-chip' + (row.prev ? ' cert-chip-prev' : '')} href={LEARN_URL} target="_blank" rel="noopener" key={c}>{c}</a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div id="skills-section" className="section">
        <SectionHeader id="skills" />
        <div className="skills-grid">
          {SKILLS.map(g => (
            <div className="skill-group-card reveal" key={g.label}>
              <div className="skill-group-label" style={{ color: g.color }}>{g.label}</div>
              <div className="skill-tags">{g.items.map(s => <span className={`s-tag ${g.tag}`} key={s}>{s}</span>)}</div>
            </div>
          ))}
        </div>
      </div>

      <div id="recommendations-section" className="section">
        <SectionHeader id="recs" />
        <div className="atest-wrap">
          <div className="atest-deck" id="atestDeck">
            {TESTIMONIALS.map(r => (
              <div className="atest-av" style={{ background: r.g }} key={r.n}>
                <img src={r.img} alt={r.n} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit', display: 'block' }} />
              </div>
            ))}
          </div>
          <div className="atest-right">
            <span className="atest-qi">&ldquo;</span>
            <p className="atest-quote" id="atestQuote"></p>
            <div className="atest-divider"></div>
            <h3 className="atest-name" id="atestName"></h3>
            <p className="atest-role" id="atestRole"></p>
            <span className="rec-linkedin-badge"><Brand.linkedin /> {t.via}</span>
            <div className="rec-controls">
              <button className="rec-btn" id="atestPrev" aria-label="Previous"><Prev /></button>
              <div className="rec-dots" id="atestDots">
                {TESTIMONIALS.map((r, i) => <span className={'rec-dot' + (i === 0 ? ' active' : '')} key={r.n}></span>)}
              </div>
              <button className="rec-btn" id="atestNext" aria-label="Next"><Next /></button>
            </div>
          </div>
        </div>
      </div>

      <div id="contact-section">
        <div className="contact-wrap reveal">
          <p className="section-eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>{t.eyebrow.contact}</p>
          <h2 className="contact-title">{t.contactTitle}</h2>
          <p className="contact-subtitle" dangerouslySetInnerHTML={html(t.contactSubtitle)} />
          <div className="contact-info">
            <div className="contact-item"><Mail /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
            <div className="contact-item"><Phone /> <span dir="ltr">{PHONE}</span></div>
            <div className="contact-item"><Pin /> {t.city}</div>
          </div>
          <div className="social-links">
            {SOCIALS.map(([key, label, url]) => {
              const Icon = Brand[key];
              return <a className="social-link" href={url} target="_blank" rel="noopener" key={key}><Icon /> {label}</a>;
            })}
          </div>
        </div>
      </div>

      <footer>
        <span>© 2026 Anwar Ul Haq · MCID: 991520706</span>
        <span><a href="https://anwarluck.github.io">anwarluck.github.io</a></span>
      </footer>
    </>
  );
}
