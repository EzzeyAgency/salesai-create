import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Check,
  ClipboardCheck,
  FileText,
  Gauge,
  MapPin,
  Menu,
  PhoneCall,
  Search,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Wrench,
  X,
} from "lucide-react";

const demoUrl = "https://salesai.com/demo";

const stats = [
  {
    value: "78%",
    copy: "of homeowners search online before contacting an HVAC company, and 52% choose the first company they contact.",
    context: "Reported by Marketing LTB. The article does not publish study methodology.",
    source: "Marketing LTB, 2026",
    href: "https://marketingltb.com/blog/statistics/hvac-marketing-statistics/",
  },
  {
    value: "91%",
    copy: "of 400 homeowner respondents rated online reviews as important when choosing an HVAC contractor.",
    context: "HVAC-specific homeowner research.",
    source: "ACHR News and Clear Seas Research, 2024",
    href: "https://www.achrnews.com/articles/155206-91-of-homeowners-rely-on-online-reviews-before-picking-contractors",
  },
  {
    value: "47%",
    copy: "of surveyed U.S. consumers would not use a business with fewer than 20 reviews. Another 31% would only use one rated 4.5 stars or higher.",
    context: "General local-business consumer research.",
    source: "BrightLocal, 2026",
    href: "https://www.brightlocal.com/research/local-consumer-review-survey/",
  },
  {
    value: "88%",
    copy: "of surveyed U.S. consumers would use a business that responds to positive and negative reviews, versus 47% for one that never responds.",
    context: "General local-business consumer research.",
    source: "BrightLocal, 2024",
    href: "https://www.brightlocal.com/research/local-consumer-review-survey-2024/",
  },
  {
    value: "2.7×",
    copy: "more likely to be considered reputable when customers find a complete Business Profile on Google Search and Maps.",
    context: "Google-hosted Business Profile guidance also reports customers are 70% more likely to visit.",
    source: "Google Business Profile Help Community, 2024",
    href: "https://support.google.com/business/thread/298203073/profile-says-incomplete?hl=en",
  },
  {
    value: "88%",
    copy: "of smartphone users who looked up local information took action within a day.",
    context: "The Google and Ipsos study separately reported calls and visits among common actions.",
    source: "Google and Ipsos, 2011",
    href: "https://www.gstatic.com/ads/research/en/2011_TheMobileMovement.pdf",
  },
];

const benefits = [
  { title: "Be easier to find when local homeowners need HVAC help", icon: Search },
  { title: "Build reviews that give homeowners more reason to choose you", icon: Star },
  { title: "Reach homeowners looking for the service and replacement work you provide", icon: PhoneCall },
  { title: "Know what is being done, why it matters, and what comes next", icon: FileText },
  { title: "Build a local presence that is not dependent on shared leads", icon: Target },
  { title: "Get marketing support without having to manage it yourself", icon: TrendingUp },
];

const stages = [
  {
    number: "01",
    title: "Get Found Locally",
    summary: "Put the essentials in place so homeowners in your service area can find clear business information, see a credible local presence, and contact your company.",
    included: [
      "Google Business Profile improvements that make key company information easier for homeowners to find and use",
      "Ongoing local visibility work handled for you each month",
      "Accurate company information across local search and directory sites",
      "A review-request process for completed jobs",
      "A monthly owner update showing completed work and local visibility activity",
      "A service-area competitor review to identify gaps in how your company is presented online",
    ],
    icon: Gauge,
  },
  {
    number: "02",
    title: "Build Trust Before the Call",
    summary: "Build the review and local-search foundation that can help your company present more credibly when homeowners compare AC repair, furnace replacement, and maintenance providers.",
    included: [
      "All Stage 1 work",
      "A review-request and response process designed to support local trust",
      "Automatic review requests after completed jobs, so asking does not depend on your team remembering",
      "Review responses that show homeowners an active, accountable company",
      "Local-search work focused on the HVAC services and communities where you want more qualified opportunities",
    ],
    icon: Search,
  },
  {
    number: "03",
    title: "Build Trust and Track Inquiries",
    summary: "Make it easier for homeowners to find useful service information while giving you clearer visibility into the marketing sources behind phone inquiries.",
    included: [
      "All Stage 1 and Stage 2 work",
      "Call-source tracking to show which marketing sources generated phone inquiries",
      "Service and replacement information that helps homeowners understand what you offer before they call",
      "Dedicated pages for priority HVAC services and communities, making relevant information easier to find",
      "Local credibility work that supports how your company is discovered online",
    ],
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Expand What Works",
    summary: "Once the core work is in place, add paid media and automation around the services, areas, and priorities that matter most to your company.",
    included: [
      "All Stage 1, Stage 2, and Stage 3 work",
      "Paid advertising focused on the services and communities that fit your growth priorities",
      "Automation that reduces routine marketing coordination for your team",
      "A market plan matched to your service mix, service area, and capacity",
    ],
    icon: TrendingUp,
  },
];

const timeline = [
  {
    days: "DAYS 1 TO 30",
    title: "Make It Easier to Be Found and Trusted Locally",
    copy: "We improve the business information homeowners see when they search for HVAC help, so they can quickly understand your services, service area, and how to contact you. We make your business details more consistent across relevant local listings, set up a simple way to request reviews after completed jobs, and provide a plainspoken monthly update showing what we completed, what changed, and what we will prioritize next.",
  },
  {
    days: "DAYS 31 TO 60",
    title: "Focus Your Visibility on the HVAC Work You Want More Of",
    copy: "We finish extending consistent business details across relevant local listings, begin sending review requests after completed jobs, and focus local visibility work on the HVAC services and service areas that matter most to your business.",
  },
  {
    days: "DAYS 61 TO 90",
    title: "Make It Easier for Ready-to-Hire Homeowners to Contact You",
    copy: "We review the business details homeowners see, the way reviews are answered, and the information they use to compare HVAC companies, then make it easier for them to contact you. Your 90-day update shows the work completed, the visibility data available, and the next priorities for the service areas you want to grow.",
  },
];

function BrandMark() {
  return (
    <div className="brand-lockup" aria-label="SalesAI Create">
      <svg className="brand-icon" viewBox="0 0 40 40" aria-hidden="true">
        <path d="M9 5h22v22h-7V12H9V5Z" fill="currentColor" />
        <path d="M5 9h15v7H12v12h12v7H5V9Z" fill="currentColor" opacity=".82" />
        <circle cx="18" cy="26" r="4.5" fill="#07120f" />
      </svg>
      <span className="brand-word">SalesAI</span>
      <span className="brand-divider" />
      <span className="brand-product">Create</span>
    </div>
  );
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>
      <span className="eyebrow-dot" />
      {children}
    </div>
  );
}

function DemoButton({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`button button-primary ${compact ? "button-compact" : ""}`} href={demoUrl} target="_blank" rel="noreferrer">
      Book a 15-Minute Demo <ArrowUpRight size={compact ? 15 : 18} />
    </a>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const ActiveIcon = stages[activeStage].icon;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement-bar">
        <span>SalesAI Create is built for HVAC companies.</span>
        <a href="#guarantee">See how the 90-day visibility guarantee works <ArrowUpRight size={13} /></a>
      </div>
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="nav-wrap">
          <a href="#top" className="nav-brand" onClick={closeMenu} aria-label="SalesAI Create home">
            <BrandMark />
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#benefits">Be Found and Trusted</a>
            <a href="#program">Your Visibility Plan</a>
            <a href="#timeline">First 90 days</a>
            <a href="#guarantee">90-Day Visibility Guarantee</a>
          </nav>
          <div className="desktop-cta"><DemoButton compact /></div>
          <a className="mobile-header-cta" href={demoUrl} target="_blank" rel="noreferrer">Book a 15-Minute Demo</a>
          <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#benefits" onClick={closeMenu}>Be Found and Trusted</a>
            <a href="#program" onClick={closeMenu}>Your Visibility Plan</a>
            <a href="#timeline" onClick={closeMenu}>First 90 days</a>
            <a href="#guarantee" onClick={closeMenu}>90-Day Visibility Guarantee</a>
            <a href={demoUrl} target="_blank" rel="noreferrer">Book a 15-Minute Demo <ArrowUpRight size={15} /></a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="hero-grid-pattern" />
          <div className="container hero-inner">
            <div className="hero-copy reveal-up">
              <Eyebrow>SalesAI Create for HVAC Companies</Eyebrow>
              <h1>More Homeowners Finding Your HVAC Company in <span>90 Days. Guaranteed.</span></h1>
              <p className="hero-lede">If your Google Business Profile views do not increase in your first 90 days, we keep doing the visibility work at no additional service fee until they do. No contracts. No hidden fees.</p>
              <div className="hero-actions">
                <DemoButton />
                <a className="text-link text-link-light" href="#guarantee">See how the guarantee works <ArrowDown size={16} /></a>
              </div>
              <div className="hero-trust">
                <span><Check size={14} /> Built for HVAC companies</span>
                <span><Check size={14} /> Less marketing work on your plate</span>
                <span><Check size={14} /> Clear monthly accountability</span>
              </div>
            </div>

            <div className="hero-visual reveal-up reveal-delay">
              <div className="hvac-card">
                <img src="/manus-storage/hvac-hero-optimized_3515bfec.webp" alt="HVAC technician inspecting a residential air-conditioning unit" width="1200" height="1500" fetchPriority="high" />
                <div className="hvac-card-shade" />
                <div className="hvac-card-top">
                  <span className="live-pill"><span /> Helping homeowners find you locally</span>
                  <Wrench size={20} />
                </div>
                <div className="hvac-card-bottom">
                  <div><small>SALESAI CREATE</small><strong>Built for HVAC</strong></div>
                  <div><small>GUARANTEE MEASURE</small><strong>Google Business Profile views</strong></div>
                </div>
              </div>
              <div className="floating-card floating-card-one">
                <div className="float-icon"><MapPin size={17} /></div>
                <div><span>Priority areas</span><strong>Where you want more work</strong></div>
              </div>
              <div className="floating-card floating-card-two">
                <div className="float-icon purple"><ClipboardCheck size={17} /></div>
                <div><span>Monthly accountability</span><strong>Work clearly documented</strong></div>
              </div>
            </div>
          </div>
          <div className="hero-marquee" aria-label="HVAC Create capabilities">
            <div className="marquee-track">
              <span>BE EASIER TO FIND ON GOOGLE</span><i />
              <span>SHOW UP FOR LOCAL HVAC SEARCHES</span><i />
              <span>BUILD TRUST THROUGH HVAC REVIEWS</span><i />
              <span>FOCUS ON AREAS YOU WANT TO GROW</span><i />
              <span>TARGET QUALIFIED SERVICE &amp; REPLACEMENT OPPORTUNITIES</span><i />
              <span>CLEAR MARKETING ACCOUNTABILITY</span><i />
              <span>BE EASIER TO FIND ON GOOGLE</span><i />
              <span>SHOW UP FOR LOCAL HVAC SEARCHES</span><i />
            </div>
          </div>
        </section>

        <section className="problem-section" id="problem">
          <div className="container problem-layout">
            <div className="problem-intro">
              <Eyebrow dark>The problem</Eyebrow>
              <h2>Great HVAC Work Is Not Enough If Homeowners <em>Cannot Find and Trust You.</em></h2>
            </div>
            <div className="problem-copy">
              <p>You know the pattern: July is packed, then shoulder season leaves open slots. Larger competitors can outspend you. Shared-lead programs can send the same homeowner inquiry to several companies. And a marketing report is not enough if it cannot show whether your investment is creating qualified service and replacement opportunities.</p>
              <p>When homeowners need AC repair, furnace replacement, or maintenance, they often search nearby companies, read reviews, and decide who to call. If your company is hard to find or does not look trustworthy in local search, you can lose the opportunity before your team has a chance to earn the job. Create helps you show up more credibly in the service areas you want to serve.</p>
              <p>The goal is to make your company easier to find directly when homeowners search, so shared lead sellers are not your only path to new work.</p>
            </div>
          </div>
        </section>

        <section className="data-section" id="data">
          <div className="container">
            <div className="section-heading dark-heading">
              <div>
                <Eyebrow>The data</Eyebrow>
                <h2>The Numbers Behind Every HVAC Job You Win or Lose</h2>
              </div>
              <p>Published industry research and platform data show how homeowners and local consumers choose service businesses. Visibility and reputation are not nice-to-haves. They decide who gets the call.</p>
            </div>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <article className={`stat-card ${index === 1 || index === 4 ? "stat-card-accent" : ""}`} key={stat.source}>
                  <span className="stat-index">0{index + 1}</span>
                  <strong>{stat.value}</strong>
                  <p>{stat.copy}</p>
                  <small>{stat.context}</small>
                  <a href={stat.href} target="_blank" rel="noreferrer">{stat.source} <ArrowUpRight size={12} /></a>
                </article>
              ))}
            </div>
            <div className="data-closing">
              <p>Create is built to move every one of these numbers in your favor: visibility, review volume, review responses, and a complete, active Google Business Profile.</p>
              <DemoButton />
            </div>
          </div>
        </section>

        <section className="benefits-section" id="benefits">
          <div className="container">
            <div className="benefits-heading">
              <Eyebrow dark>What Create does</Eyebrow>
              <h2>Build a Stronger Local Presence for Your HVAC Business</h2>
              <p>Create helps make your HVAC company easier to find and trust in the service areas you want to serve. We handle the ongoing marketing work so you can focus on crews, customers, and the schedule.</p>
            </div>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <article className="benefit-card" key={benefit.title}>
                    <span>0{index + 1}</span>
                    <Icon size={24} />
                    <h3>{benefit.title}</h3>
                  </article>
                );
              })}
            </div>
            <p className="benefits-bridge">Focus your local presence on the service, maintenance, and replacement opportunities you want in the areas you can serve profitably.</p>
          </div>
        </section>

        <section className="program-section" id="program">
          <div className="program-glow" />
          <div className="container">
            <div className="program-heading">
              <Eyebrow>A Four-Stage Plan</Eyebrow>
              <h2>Four Stages. One Purpose. <em>Help More Local Homeowners Find and Choose Your HVAC Company.</em></h2>
            </div>
            <div className="stage-tabs" role="tablist" aria-label="SalesAI Create stages">
              {stages.map((stage, index) => (
                <button key={stage.number} className={`stage-tab ${activeStage === index ? "stage-tab-active" : ""}`} onClick={() => setActiveStage(index)} role="tab" aria-selected={activeStage === index}>
                  <span>{stage.number}</span>{stage.title}
                </button>
              ))}
            </div>
            <div className="stage-panel">
              <div className="stage-copy">
                <div className="stage-icon"><ActiveIcon size={27} /></div>
                <span>STAGE {stages[activeStage].number}</span>
                <h3>{stages[activeStage].title}</h3>
                <p>{stages[activeStage].summary}</p>
                <strong>Included</strong>
                <ul>{stages[activeStage].included.map((item) => <li key={item}><Check size={14} /> {item}</li>)}</ul>
              </div>
              <div className="operations-card" aria-label="Illustrative monthly owner dashboard">
                <div className="operations-top"><BrandMark /><span>Monthly owner update</span></div>
                <div className="operations-kicker">YOUR SERVICE-AREA PLAN</div>
                <h4>See what was handled and the local visibility indicators we monitor.</h4>
                <div className="operations-metrics">
                  <div><small>GOOGLE PROFILE</small><strong>Updated</strong><span><Check size={12} /> Key details easier to review</span></div>
                  <div><small>LOCAL BUSINESS INFO</small><strong>Managed</strong><span><TrendingUp size={12} /> Across key local sites</span></div>
                  <div><small>OWNER UPDATE</small><strong>Monthly</strong><span><ClipboardCheck size={12} /> Work and signals summarized</span></div>
                </div>
                <div className="operations-list">
                  <div><span><Search size={15} /> Local search presence</span><strong>Work underway</strong></div>
                  <div><span><Star size={15} /> Review follow-up</span><strong>Active</strong></div>
                  <div><span><BarChart3 size={15} /> Owner update</span><strong>Scheduled</strong></div>
                  <div><span><MapPin size={15} /> Priority service areas</span><strong>Monitored</strong></div>
                </div>
                <p className="operations-note">We show you what was handled and which local visibility indicators changed. Those indicators are not the same as booked jobs, revenue, or ROI.</p>
              </div>
            </div>
            <div className="program-cta">
              <p>Book a 15-Minute Demo to review your service area, priorities, and the stage that fits your business.</p>
              <DemoButton />
            </div>
          </div>
        </section>

        <section className="timeline-section" id="timeline">
          <div className="container">
            <div className="timeline-heading">
              <Eyebrow dark>The first 90 days</Eyebrow>
              <h2>What Happens in Your First 90 Days</h2>
            </div>
            <div className="timeline-grid">
              {timeline.map((item, index) => (
                <article className={`timeline-card ${index === 1 ? "timeline-card-active" : ""}`} key={item.days}>
                  <div className="timeline-top"><span>0{index + 1}</span><small>{item.days}</small></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <div className="timeline-result"><Check size={15} /> Clear progress and next steps</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="guarantee-section" id="guarantee">
          <div className="guarantee-glow" />
          <div className="container guarantee-wrap">
            <div className="guarantee-card">
              <div className="guarantee-icon"><ShieldCheck size={34} /></div>
              <Eyebrow>Our 90-Day Visibility Guarantee</Eyebrow>
              <h2>More Google Business Profile visibility in 90 days, or we keep working at no additional service fee until you get it.</h2>
              <p>If your Google Business Profile views do not increase during your first 90 days with Create, we will continue the visibility work included in your plan at no additional service fee until they do. Eligibility requirements, customer responsibilities, and exclusions apply.</p>
              <p className="guarantee-start-date">The 90-day guarantee period begins on the date we receive usable access to your verified Google Business Profile.</p>
              <strong>No contracts. No hidden fees.</strong>
              <DemoButton />
            </div>
            <div className="guarantee-explainer">
              <h3>What the guarantee measures</h3>
              <p>We measure Google Business Profile views using Google Business Profile performance data. Views show visibility, not calls, booked jobs, sales, or revenue. We compare the final 30 complete days of your first 90 days with the 30 complete days immediately before the guarantee start date.</p>
              <h3>What it does not promise</h3>
              <p>This is a continued-work guarantee, not a money-back guarantee. It does not promise a specific position or any increase in leads, calls, sales, revenue, or another business result.</p>
              <p className="legal-note">Guarantee subject to <Link href="/terms-of-service">Terms of Service</Link>, eligibility requirements, and customer responsibilities. <Link href="/terms-of-service#visibility-guarantee">See full guarantee terms for details.</Link></p>
            </div>
          </div>
        </section>

        <section className="fit-section" id="fit">
          <div className="container fit-grid">
            <div className="fit-heading">
              <Eyebrow dark>Who Create is for</Eyebrow>
              <h2>Built for HVAC Owners Who Want to Run the Business, <em>Not the Marketing</em></h2>
            </div>
            <div className="fit-copy">
              <p className="fit-lede">Create is for established HVAC companies that want help getting found and chosen locally, without taking the owner away from crews, customers, and the work that keeps the business moving.</p>
              <p className="fit-alignment">Create is best for owners who want marketing support aligned with their priority services, service areas, seasonal needs, and current capacity.</p>
              <strong>You are a fit if you want:</strong>
              <ul>
                <li><Check size={16} /> More qualified service and replacement opportunities from the areas you serve</li>
                <li><Check size={16} /> Clear accountability for your marketing investment and confidence it is supporting your business</li>
                <li><Check size={16} /> Reviews that help homeowners feel confident choosing your company</li>
                <li><Check size={16} /> A steadier schedule with more service and replacement opportunities outside peak season</li>
                <li><Check size={16} /> More time to run the business without building an in-house marketing department</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="final-cta" id="contact">
          <div className="final-cta-orb" />
          <div className="container final-cta-inner">
            <div>
              <Eyebrow>For Established HVAC Companies</Eyebrow>
              <h2>Make Your HVAC Company <em>Easier to Find and Trust Locally</em></h2>
            </div>
            <div className="final-cta-copy">
              <p>Create helps make your company easier to find and trust in the service areas that matter most. When homeowners need HVAC service or replacement, they have more reason to consider you. You can see the work completed and how your Google Business Profile visibility is changing, without taking on the marketing yourself.</p>
              <DemoButton />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <BrandMark />
          <p>Helping HVAC companies get found and trusted for service and replacement work in the areas they serve.</p>
          <div className="footer-links"><a href={demoUrl}>Book a 15-Minute Demo</a></div>
        </div>
        <div className="container source-list">
          <p><strong>Industry data sources, reviewed September 14, 2026.</strong> Statistics are published research or platform guidance, not SalesAI client results.</p>
          <ol>
            {stats.map((stat, index) => <li key={stat.href}><a href={stat.href} target="_blank" rel="noreferrer">[{index + 1}] {stat.source}</a></li>)}
          </ol>
          <p className="footer-legal">Guarantee subject to <Link href="/terms-of-service">Terms of Service</Link>, eligibility requirements, and customer responsibilities. <Link href="/terms-of-service#visibility-guarantee">See full guarantee terms for details.</Link></p>
          <small>© {new Date().getFullYear()} SalesAI. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
}
