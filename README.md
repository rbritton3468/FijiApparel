# Fiji Apparel Storefront

Static React storefront that embeds Stripe Pricing Table (no backend) and uses Stripe Checkout.

## Structure
- `frontend/` React (Vite) storefront

## Stripe setup
1. Create products + prices in your Stripe dashboard.
2. Create a Pricing Table in Stripe and copy its ID.
3. Copy your Stripe publishable key.

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Set Stripe config in `frontend/.env`:

```bash
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
VITE_STRIPE_PRICING_TABLE_ID=prctbl_...
```

The Pricing Table pulls products directly from Stripe and routes checkout through Stripe Checkout.
