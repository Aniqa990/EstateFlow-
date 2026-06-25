import { Link } from 'react-router-dom';
import './Landing.css';

const signupState = { signUp: true };

function LogoIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="7" width="6" height="8" rx="1" fill="white" opacity=".9" />
      <rect x="9" y="4" width="6" height="11" rx="1" fill="white" />
      <path d="M8 2L1 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 2L15 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRightSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 7h8M8 4l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightMedium() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const pipelineSteps = [
  { status: 'done', icon: '✓', label: 'Security & PII check', badge: '45 ms', badgeClass: 'badge-done' },
  { status: 'done', icon: '✓', label: 'Issue classified — Plumbing', badge: '2.3 s', badgeClass: 'badge-done' },
  { status: 'done', icon: '✓', label: 'Priority: High · SLA 24 h', badge: '120 ms', badgeClass: 'badge-done' },
  { status: 'done', icon: '✓', label: 'Compliance flags reviewed', badge: '60 ms', badgeClass: 'badge-done' },
  { status: 'active', icon: '5', label: 'Matching nearest vendor…', badge: 'Running', badgeClass: 'badge-active' },
  { status: 'pending', icon: '6', label: 'Governance & approval', pending: true },
  { status: 'pending', icon: '7', label: 'WhatsApp vendor alert', pending: true },
  { status: 'pending', icon: '8', label: 'Report & audit ledger', pending: true },
] as const;

const howSteps = [
  {
    title: 'Tenant submits',
    description:
      'Text or image, any language. Security agents redact PII and screen for duplicates before anything moves forward.',
  },
  {
    title: 'AI classifies & prioritises',
    description:
      'Trade, category, and urgency are determined in seconds — with a rule-based fallback so the pipeline never stalls.',
  },
  {
    title: 'Nearest vendor assigned',
    description:
      'Geolocation scoring weights distance, rating, and workload so no single vendor gets overwhelmed.',
  },
  {
    title: 'Manager signs off (when needed)',
    description:
      'Critical or high-urgency jobs pause for human approval. Everything else goes straight to dispatch.',
  },
] as const;

const features = [
  {
    title: 'Multi-language intake',
    description:
      'Tenants write in English, Urdu, or Roman Urdu. The AI understands all three and responds accordingly.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path d="M11 2L3 7v13h5v-5h6v5h5V7L11 2z" stroke="#0d4a4a" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Geolocation vendor matching',
    description:
      'Haversine scoring finds the nearest, highest-rated, least-loaded vendor within a configurable radius.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <circle cx="11" cy="11" r="3" stroke="#0d4a4a" strokeWidth="1.5" />
        <path d="M11 2v3M11 17v3M2 11h3M17 11h3" stroke="#0d4a4a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Human-in-the-loop gates',
    description:
      'Critical jobs pause for manager sign-off. A one-click approval resumes the full pipeline instantly.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <rect x="3" y="5" width="16" height="14" rx="2" stroke="#0d4a4a" strokeWidth="1.5" />
        <path d="M7 5V3M15 5V3M3 9h16" stroke="#0d4a4a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Immutable audit trail',
    description:
      'Every agent decision is timestamped and stored. Compliance-ready reports generated as signed PDFs.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path d="M4 6h14M4 10h10M4 14h7" stroke="#0d4a4a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Predictive maintenance',
    description:
      'Weekly forecasts detect recurring issues before they escalate. Managers get risk alerts automatically.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path
          d="M3 17l4-4 4 3 4-6 4-4"
          stroke="#0d4a4a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'RAG knowledge base',
    description:
      'Managers query maintenance history in plain language. Answers are grounded in real ticket data, not guesswork.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path
          d="M6 2v4M16 2v4M3 9h16M5 14h.01M11 14h.01M17 14h.01M5 18h.01M11 18h.01"
          stroke="#0d4a4a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect x="3" y="5" width="16" height="15" rx="2" stroke="#0d4a4a" strokeWidth="1.5" />
      </svg>
    ),
  },
] as const;

const stats = [
  { value: <>10<span>+</span></>, label: 'AI agents per maintenance request' },
  { value: <>&lt;<span>5</span>s</>, label: 'Average end-to-end pipeline time' },
  { value: <>99<span>%</span></>, label: 'Pipeline success rate with fallback' },
  { value: <>3<span>×</span></>, label: 'Languages supported out of the box' },
] as const;

const roles = [
  {
    title: 'Tenants',
    description: 'Submit issues via text or photo. Track live pipeline progress and get vendor updates on WhatsApp.',
    tags: ['Submit requests', 'Live status', 'WhatsApp alerts'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <circle cx="11" cy="8" r="4" stroke="white" strokeWidth="1.5" />
        <path d="M4 19c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Property Managers',
    description: 'Approve high-urgency requests, review AI-generated reports, and query maintenance history by chat.',
    tags: ['Approvals queue', 'RAG chat', 'Analytics'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="white" strokeWidth="1.5" />
        <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="white" strokeWidth="1.5" />
        <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="white" strokeWidth="1.5" />
        <rect x="12" y="12" width="7" height="7" rx="1.5" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Inspectors',
    description: 'Run AI-assisted property inspections with risk scoring. Failed items auto-generate work orders.',
    tags: ['Risk assessment', 'Work orders', 'Reports'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path d="M11 3l2 6h6l-5 3.5 2 6L11 15l-5 3.5 2-6L3 9h6L11 3z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Vendors',
    description:
      'Receive job alerts on WhatsApp, confirm availability, and get load-balanced assignments to prevent overload.',
    tags: ['WhatsApp jobs', 'Fair scheduling', 'Reply flow'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path d="M4 17l4-4m0 0l4-4m-4 4l-4-4m8 4l4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="4" r="2" stroke="white" strokeWidth="1.5" />
        <circle cx="4" cy="4" r="2" stroke="white" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="2" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
] as const;

export default function Landing() {
  return (
    <div className="landing-page">
      <nav>
        <Link className="nav-logo" to="/">
          <div className="nav-logo-icon">
            <LogoIcon />
          </div>
          EstateFlow
        </Link>

        <ul className="nav-links">
          <li><a href="#how">How it works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#roles">Who&apos;s it for</a></li>
        </ul>

        <div className="nav-cta">
          <Link className="btn-ghost" to="/login">Sign in</Link>
          <Link className="btn-primary" to="/login" state={signupState}>
            Get started
            <ArrowRightSmall />
          </Link>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            AI-Powered Property Management
          </div>

          <h1>
            Maintenance requests,
            <br />
            <em>handled end-to-end.</em>
          </h1>

          <p className="hero-sub">
            From tenant submission to vendor dispatch — EstateFlow&apos;s 10-agent AI pipeline classifies,
            prioritises, and resolves every issue without the back-and-forth.
          </p>

          <div className="hero-actions">
            <Link className="btn-primary-lg" to="/login" state={signupState}>
              Start for free
              <ArrowRightMedium />
            </Link>
            <a className="btn-outline-lg" href="#how">
              See how it works
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-header">
              <div className="hero-card-header-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2 4h10M2 7h7M2 10h5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span>TKT-00418 · Kitchen pipe leak</span>
              <span className="hero-card-header-sub">Processing…</span>
            </div>

            <div className="pipeline">
              {pipelineSteps.map((step) => (
                <div key={step.label} className={`pipeline-step ${step.status}`}>
                  <div className={`step-icon ${step.status}`}>{step.icon}</div>
                  <span className={`step-label${'pending' in step && step.pending ? ' pending-text' : ''}`}>{step.label}</span>
                  {'badge' in step && (
                    <span className={`step-badge ${step.badgeClass}`}>{step.badge}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="float-badge">
            <div className="float-badge-icon">📍</div>
            <div>
              <div className="float-badge-text">Vendor found · 3.2 km away</div>
              <div className="float-badge-sub">★ 4.8 · Available now</div>
            </div>
          </div>
        </div>
      </div>

      <section className="how" id="how">
        <div className="section-inner">
          <div className="section-label">How it works</div>
          <h2 className="section-title">A request in. A resolution out.</h2>
          <p className="section-sub">
            Tenants describe an issue — in English, Urdu, or Roman Urdu — and the pipeline does the rest.
          </p>

          <div className="how-grid">
            <div className="how-steps">
              {howSteps.map((step, index) => (
                <div key={step.title} className="how-step">
                  <div className="how-step-num">{index + 1}</div>
                  <div className="how-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="how-illustration">
              <div className="how-illus-top">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <rect x="1" y="2" width="12" height="10" rx="2" stroke="white" strokeWidth="1.4" />
                  <path d="M4 6h6M4 8.5h4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <span>Ticket TKT-00418</span>
              </div>

              <div className="how-illus-body">
                <div className="ticket-info">
                  <div className="ticket-field">
                    <label>Category</label>
                    <span><span className="ticket-badge badge-plumbing">Plumbing</span></span>
                  </div>
                  <div className="ticket-field">
                    <label>Urgency</label>
                    <span><span className="ticket-badge badge-critical">High</span></span>
                  </div>
                  <div className="ticket-field">
                    <label>SLA target</label>
                    <span>24 hours</span>
                  </div>
                  <div className="ticket-field">
                    <label>Vendor</label>
                    <span>Ali Plumbing Co.</span>
                  </div>
                  <div className="ticket-field">
                    <label>Distance</label>
                    <span>3.2 km</span>
                  </div>
                  <div className="ticket-field">
                    <label>Rating</label>
                    <span>★ 4.8 / 5</span>
                  </div>
                </div>

                <div className="mini-pipeline">
                  <div className="mini-pipeline-label">Agent pipeline</div>
                  <div className="mini-steps">
                    <span className="mini-step ms-done">Security</span>
                    <span className="mini-step-arrow">›</span>
                    <span className="mini-step ms-done">Classify</span>
                    <span className="mini-step-arrow">›</span>
                    <span className="mini-step ms-done">Priority</span>
                    <span className="mini-step-arrow">›</span>
                    <span className="mini-step ms-active">Vendor</span>
                    <span className="mini-step-arrow">›</span>
                    <span className="mini-step ms-pending">Dispatch</span>
                    <span className="mini-step-arrow">›</span>
                    <span className="mini-step ms-pending">Report</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="section-inner">
          <div className="section-label">Built for real operations</div>
          <h2 className="section-title">Everything a property team needs</h2>

          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="section-inner">
          <div className="section-label">By the numbers</div>
          <h2 className="section-title">Designed for speed and reliability</h2>
          <p className="section-sub">
            Every request runs through a 10-agent pipeline with fallback at every step — so nothing ever stalls.
          </p>

          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <div className="stat-num">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roles">
        <div className="section-inner">
          <div className="section-label">Built for every role</div>
          <h2 className="section-title">One platform, every stakeholder</h2>
          <p className="section-sub">
            Role-based access ensures each person sees exactly what they need — nothing more, nothing less.
          </p>

          <div className="roles-grid">
            {roles.map((role) => (
              <div key={role.title} className="role-card">
                <div className="role-card-icon">{role.icon}</div>
                <div className="role-card-body">
                  <h3>{role.title}</h3>
                  <p>{role.description}</p>
                  <div className="role-tags">
                    {role.tags.map((tag) => (
                      <span key={tag} className="role-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-label">Get started today</div>
        <h2 className="section-title">Ready to automate your property maintenance?</h2>
        <p className="section-sub">Set up takes minutes. No credit card required.</p>
        <div className="cta-actions">
          <Link className="btn-primary-lg" to="/login" state={signupState}>
            Create your account
            <ArrowRightMedium />
          </Link>
          <Link className="btn-outline-lg" to="/login">Sign in</Link>
        </div>
      </section>

      <footer>
        <Link className="nav-logo" to="/">
          <div className="nav-logo-icon">
            <LogoIcon />
          </div>
          EstateFlow
        </Link>
        <p>© {new Date().getFullYear()} EstateFlow. Built for Pakistan.</p>
      </footer>
    </div>
  );
}
