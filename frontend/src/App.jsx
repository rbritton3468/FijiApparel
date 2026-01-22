const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const STRIPE_PRICING_TABLE_ID = import.meta.env.VITE_STRIPE_PRICING_TABLE_ID;

export default function App() {
  const path = window.location.pathname;
  const missingStripeConfig = !STRIPE_PUBLISHABLE_KEY || !STRIPE_PRICING_TABLE_ID;

  if (path === '/success') {
    return (
      <div className="page">
        <header className="hero">
          <nav className="nav">
            <div className="logo">Fiji Apparel</div>
          </nav>
          <div className="hero-content">
            <div>
              <p className="eyebrow">Thank you</p>
              <h1>Your order is confirmed.</h1>
              <p className="hero-copy">Stripe emailed your receipt. We will ship your tee soon.</p>
              <button className="cta" onClick={() => (window.location.href = '/')}>Back to store</button>
            </div>
          </div>
        </header>
      </div>
    );
  }

  if (path === '/cancel') {
    return (
      <div className="page">
        <header className="hero">
          <nav className="nav">
            <div className="logo">Fiji Apparel</div>
          </nav>
          <div className="hero-content">
            <div>
              <p className="eyebrow">Checkout canceled</p>
              <h1>No worries, we saved your spot.</h1>
              <p className="hero-copy">Come back anytime and finish your order.</p>
              <button className="cta" onClick={() => (window.location.href = '/')}>Return to store</button>
            </div>
          </div>
        </header>
      </div>
    );
  }

  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="logo">Fiji Apparel</div>
          <a className="nav-link" href="#drops">Drops</a>
          <a className="nav-link" href="#story">Story</a>
        </nav>
        <div className="hero-content">
          <div>
            <p className="eyebrow">Island-built essentials</p>
            <h1>Soft tees, bold color, effortless days.</h1>
            <p className="hero-copy">
              Everything ships from our Fiji studio. Limited runs, small batches, big energy.
            </p>
            <button className="cta" onClick={() => document.getElementById('drops').scrollIntoView({ behavior: 'smooth' })}>
              Shop the drop
            </button>
          </div>
          <div className="hero-card" id="story">
            <h2>Built for heat + ocean air</h2>
            <p>
              Every shirt uses breathable cotton blends and prints designed to hold color under
              the sun.
            </p>
            <div className="hero-stat">
              <span>48-hour drop windows</span>
              <strong>Next ship: Friday</strong>
            </div>
          </div>
        </div>
      </header>

      <section className="featured" id="drops">
        <div className="section-head">
          <h2>Latest drop</h2>
          <p>Direct from your Stripe catalog. Update a product there and it appears here.</p>
        </div>

        {missingStripeConfig ? (
          <div className="status error">
            Missing Stripe config. Set `VITE_STRIPE_PUBLISHABLE_KEY` and
            `VITE_STRIPE_PRICING_TABLE_ID` in `frontend/.env`.
          </div>
        ) : (
          <div className="pricing-table">
            <stripe-pricing-table
              pricing-table-id={STRIPE_PRICING_TABLE_ID}
              publishable-key={STRIPE_PUBLISHABLE_KEY}
            ></stripe-pricing-table>
          </div>
        )}
      </section>

      <footer className="footer">
        <p>Fiji Apparel · Crafted on the islands</p>
      </footer>
    </div>
  );
}
