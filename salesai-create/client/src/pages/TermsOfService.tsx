import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const demoUrl = "https://salesai.com/demo";

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

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service | SalesAI Create";
    const id = window.location.hash.slice(1);
    if (!id) {
      window.scrollTo(0, 0);
      return;
    }
    window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, []);

  return (
    <div className="terms-page">
      <div className="terms-announcement">
        <span>SalesAI Create is built for HVAC companies.</span>
        <a href="/#guarantee">View the visibility guarantee</a>
      </div>
      <header className="terms-header">
        <div className="terms-header-inner">
          <Link href="/" className="terms-brand" aria-label="SalesAI Create home"><BrandMark /></Link>
          <Link href="/" className="terms-back-link">Back to Create</Link>
          <a className="button button-primary button-compact" href={demoUrl} target="_blank" rel="noreferrer">Book a 15-Minute Demo <ArrowUpRight size={15} /></a>
        </div>
      </header>

      <main>
        <section className="terms-hero">
          <div className="terms-hero-inner">
            <div className="eyebrow"><span className="eyebrow-dot" />SalesAI Create</div>
            <h1>Terms of Service</h1>
            <p className="terms-effective">Effective Date: September 15, 2026</p>
            <p className="terms-intro">These Terms of Service govern participation in SalesAI Create. The following 90-Day Visibility Guarantee Terms explain the result SalesAI measures, how the measurement is made, who qualifies, and the remedy available if the guaranteed result is not achieved.</p>
          </div>
        </section>

        <div className="terms-layout">
          <nav className="terms-nav" aria-label="Terms sections">
            <strong>On this page</strong>
            <a href="#guarantee">1. The guarantee</a>
            <a href="#result">2. Guaranteed result</a>
            <a href="#start-date">3. Start date</a>
            <a href="#measurement">4. Measurement</a>
            <a href="#eligibility">6. Eligibility</a>
            <a href="#responsibilities">7. Responsibilities</a>
            <a href="#remedy">11. Continued work</a>
            <a href="#review">14. Review</a>
          </nav>

          <article className="terms-content">
            <h2 id="visibility-guarantee">SalesAI Create 90-Day Visibility Guarantee Terms</h2>

            <section id="guarantee">
              <h3>1. The guarantee</h3>
              <p>SalesAI guarantees that an eligible customer’s Google Business Profile views will increase during the first 90 days of SalesAI Create. If the guaranteed increase is not achieved, SalesAI will continue the visibility work included in the customer’s Create plan at no additional service fee until the guaranteed result is achieved.</p>
              <p>This is a continued-work guarantee. It is not a money-back guarantee and does not provide a refund.</p>
            </section>

            <section id="result">
              <h3>2. What counts as the guaranteed result</h3>
              <p>The guaranteed result is any increase in Google Business Profile views during the measurement period when compared with the baseline period.</p>
              <p>Google Business Profile views measure visibility. They do not establish or guarantee a specific search position, number of leads, calls, booked jobs, sales, revenue, return on investment, or other business result.</p>
            </section>

            <section id="start-date">
              <h3>3. Guarantee start date</h3>
              <p>The 90-day guarantee period begins on the date SalesAI receives usable access to the customer’s verified Google Business Profile. SalesAI will record this date as the guarantee start date.</p>
              <p>If the access provided does not permit SalesAI to perform the included work or obtain the required performance data, the guarantee period will not begin until usable access is provided.</p>
            </section>

            <section id="measurement">
              <h3>4. Baseline and measurement period</h3>
              <p>The baseline period is the 30 complete consecutive days immediately before the guarantee start date.</p>
              <p>The measurement period is the final 30 complete days of the customer’s initial 90-day guarantee period. SalesAI will compare the Google Business Profile views recorded during the measurement period with the views recorded during the baseline period.</p>
              <p>The guarantee is achieved if the measurement-period total is greater than the baseline-period total.</p>
            </section>

            <section>
              <h3>5. Controlling data source</h3>
              <p>SalesAI will use the performance data available through the customer’s Google Business Profile as the controlling source for the baseline and measurement-period totals.</p>
              <p>SalesAI will retain a record of the baseline, guarantee start date, and evaluation result. Google may change the names, definitions, availability, or calculation of its performance metrics. If Google replaces the views metric, SalesAI may use the closest reasonably equivalent successor metric and will document that change.</p>
            </section>

            <section id="eligibility">
              <h3>6. Eligibility requirements</h3>
              <p>To qualify for the guarantee, the customer must meet all of the following requirements on the guarantee start date:</p>
              <ol>
                <li>The customer must have a verified, active Google Business Profile that is not suspended or disabled.</li>
                <li>The Google Business Profile must have at least 10 published Google reviews.</li>
                <li>The customer must provide SalesAI with usable access to the Google Business Profile.</li>
                <li>The customer must provide accurate business information and the materials reasonably required to perform the included Create work.</li>
                <li>The customer must not have launched a new website, completed a material website redesign, changed domains, or made another material structural website change during the 90 days before the guarantee start date.</li>
                <li>The customer must not have received a Google review rated three stars or fewer during the 90 days before the guarantee start date.</li>
                <li>The customer must disclose any other marketing provider, search optimization provider, paid advertising campaign, or third party that has access to or is making changes to the Google Business Profile, website, or local business listings.</li>
              </ol>
              <p>A public street address is not required. An eligible service-area business may qualify without displaying its address publicly.</p>
              <p>SalesAI will evaluate eligibility during onboarding. If a customer does not qualify, SalesAI will disclose that determination promptly. The customer may choose to proceed with Create without the guarantee if that choice is confirmed in writing.</p>
            </section>

            <section id="responsibilities">
              <h3>7. Customer responsibilities during the guarantee period</h3>
              <p>The customer must maintain usable Google Business Profile access throughout the guarantee period and any continued-work period. The customer must provide requested information and approvals within a reasonable time. The customer must keep its business information accurate and comply with applicable Google Business Profile policies.</p>
              <p>The customer must notify SalesAI before allowing another person or provider to change the Google Business Profile, website, tracking configuration, local listings, business name, primary category, address, service area, phone number, or other information that could materially affect visibility or measurement.</p>
              <p>If the customer removes access, delays required information or approvals, supplies inaccurate information, violates platform policies, or permits conflicting third-party changes, SalesAI may pause the guarantee. SalesAI will notify the customer in writing of the reason for the pause and what is required to resume the guarantee.</p>
            </section>

            <section>
              <h3>8. Reviews, website changes, and other material events</h3>
              <p>A material negative-review event, Google Business Profile suspension, website launch, website migration, major redesign, business relocation, change of ownership, change of business name, material change in services, or other event outside the included Create work may affect visibility.</p>
              <p>If such an event occurs during the guarantee period, SalesAI will review its effect. SalesAI may pause the guarantee, establish a new baseline, or determine that the guarantee no longer applies when the event prevents a fair comparison. SalesAI will provide the customer with written notice and the reason for the decision.</p>
            </section>

            <section>
              <h3>9. Seasonal businesses and market-wide changes</h3>
              <p>Search demand may change because of seasonality, weather, market conditions, economic events, regulatory events, or changes in customer behavior. SalesAI will identify material seasonality during onboarding when reasonably possible.</p>
              <p>For a clearly seasonal business, SalesAI may use the corresponding 30-day period from the previous year instead of the immediately preceding 30-day period. Any different baseline must be disclosed to the customer in writing before the guarantee start date.</p>
              <p>SalesAI may also consider reliable market-demand data when a substantial market-wide decline makes the standard comparison misleading. SalesAI will not apply a seasonality or market exception solely because the customer’s own performance declined. Any exception must be supported by documented market evidence and communicated to the customer.</p>
            </section>

            <section>
              <h3>10. Paid advertising and third-party activity</h3>
              <p>The guarantee is intended to measure the visibility affected by the included Create work. The customer must disclose Google Ads, Local Services Ads, or other paid campaigns that may affect Google Business Profile performance data.</p>
              <p>When paid or third-party activity materially affects the controlling metric, SalesAI will use a reasonable like-for-like comparison when the data permits. If the effect cannot be separated reliably, SalesAI may postpone the evaluation, establish a documented alternative comparison, or determine before the guarantee start date that the customer is not eligible.</p>
            </section>

            <section id="remedy">
              <h3>11. The continued-work remedy</h3>
              <p>If the measurement-period total does not exceed the baseline-period total, SalesAI will continue the visibility work included in the customer’s Create plan without charging an additional Create service fee.</p>
              <p>The continued-work period lasts until one complete subsequent 30-day reporting period shows Google Business Profile views greater than the baseline-period total, provided the customer remains eligible and satisfies the customer responsibilities in these terms.</p>
              <p>The continued-work remedy covers only the visibility work included in the customer’s existing Create plan. It does not include advertising spend, third-party charges, taxes, optional services, website development, reputation-management services, or work outside the Create plan unless SalesAI agrees otherwise in writing.</p>
              <p>Regular Create service billing resumes with the next billing cycle after the guaranteed result is achieved.</p>
            </section>

            <section>
              <h3>12. Events outside SalesAI’s control</h3>
              <p>SalesAI does not control Google’s algorithms, products, policies, reporting systems, platform availability, suspensions, metric definitions, or decisions about how and when a Business Profile appears.</p>
              <p>SalesAI is not responsible for delays or measurement problems caused by platform outages, unavailable or incomplete Google data, unlawful activity, customer or third-party interference, force majeure events, or other circumstances outside SalesAI’s reasonable control. When reasonably possible, SalesAI will document the issue and use a fair alternative evaluation date or method rather than relying on an undisclosed exception.</p>
            </section>

            <section>
              <h3>13. Exclusive guarantee remedy</h3>
              <p>Continued performance of the included Create visibility work at no additional service fee is the customer’s sole remedy under this guarantee. The guarantee does not entitle the customer to a refund, reimbursement, credit for prior service fees, or payment for alleged lost revenue or opportunities.</p>
              <p>Nothing in these guarantee terms changes any right or obligation that cannot lawfully be limited under applicable law.</p>
            </section>

            <section id="review">
              <h3>14. Guarantee review</h3>
              <p>SalesAI will review the controlling Google Business Profile data after the initial 90-day period. A customer may request a review of the calculation or eligibility decision through the customer’s SalesAI account contact.</p>
              <p>SalesAI will provide the baseline period, measurement period, recorded view totals, and the reason for its decision upon reasonable request.</p>
            </section>

            <section>
              <h3>15. Relationship to the remaining Terms of Service</h3>
              <p>These guarantee terms form part of the SalesAI Create Terms of Service. If another provision conflicts with these guarantee terms concerning the 90-Day Visibility Guarantee, these guarantee terms control for that issue.</p>
            </section>
          </article>
        </div>
      </main>

      <footer className="terms-footer">
        <div className="terms-footer-inner">
          <div className="terms-footer-top">
            <Link href="/" className="terms-brand" aria-label="SalesAI Create home"><BrandMark /></Link>
            <p>Helping HVAC companies get found and trusted for service and replacement work in the areas they serve.</p>
            <a className="button button-primary button-compact" href={demoUrl} target="_blank" rel="noreferrer">Book a 15-Minute Demo <ArrowUpRight size={15} /></a>
          </div>
          <div className="terms-footer-meta">
            <span>© 2026 SalesAI. All rights reserved.</span>
            <Link href="/">Return to SalesAI Create</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
