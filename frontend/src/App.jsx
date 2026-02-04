import PricingTable from "./PriceingTable";
import Gallery from "./Gallery";

const SALE_END_DATE = "Thursday, February 12, 2026";
const saleOver = false;


export default function App() {
  const path = window.location.pathname;


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

        </nav>
        <div className="hero-content">
          <div>
            <p className="eyebrow">Texas Phi Gamma Delta Apparel</p>
            <h1>T-Shirts, Hats, and More</h1>
            <p className="hero-copy">
              All items are designed exclusively for Texas Phi Gamma Delta and printed on high-quality, Comfort Color T-Shirts.
            </p>
            <button className="cta" onClick={() => document.getElementById('pricing_table').scrollIntoView({ behavior: 'smooth' })}>
              Shop the drop
            </button>
          </div>
          <div className="hero-card" id="story">
            <h2>Made to order</h2>
            <p>
              Each item is printed and shipped after sales complete, and items will be delivered after sales ends. Items will be delivered
              within 2-3 weeks of the sale end date.
            </p>
            <div className="hero-stat">
              <span>{saleOver ? `Sale is Ended ${SALE_END_DATE}` : `Current Sale Ends: ${SALE_END_DATE}`}</span>

            </div>
          </div>
        </div>
      </header>

      <section className="featured" id="items_from_stripe">
        <div className="section-head">
          <h2>Current Sale</h2>

        </div>

         <Gallery />
          <subsection id="pricing_table">
           <PricingTable saleOver={saleOver} />
          </subsection>
      </section>

     

      <footer className="footer">
        <p>Fiji Apparel • Built By Robert Britton </p>
      </footer>
    </div>
  );
}
