const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const STRIPE_PRICING_TABLE_ID = import.meta.env.VITE_STRIPE_PRICING_TABLE_ID;


export default function PricingTable({ saleOver }) {

    const missingStripeConfig = !STRIPE_PUBLISHABLE_KEY || !STRIPE_PRICING_TABLE_ID;


    if (saleOver) {
        return (    
            <div className="status info">
                The sale has ended. Please check back later!
            </div>
        );
    }
    
    return (
        <>
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
        </>
    );  
}