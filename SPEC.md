# SaaSSpend — Product Specification

## 1. Concept & Vision

SaaSSpend is a no-nonsense SaaS spend tracker built for small teams (under 50 people) drowning in subscriptions. Where enterprise tools like Torii and Zluri start at $95/month and assume you have an IT department, SaaSSpend delivers the essentials — spend visibility, renewal tracking, zombie app detection — at $19/month. It's the anti-enterprise tool: fast, focused, affordable.

**Tagline:** Know what you're actually paying for your SaaS.

---

## 2. Design Language

### Aesthetic Direction
Clean, data-forward, enterprise-grade but approachable. Think Linear meets Stripe Docs — precise typography, generous whitespace, subtle depth through shadows not gradients. Data is the hero.

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| Background | `#f8fafc` | Page background |
| Surface | `#ffffff` | Cards, modals |
| Border | `#e2e8f0` | Dividers, card borders |
| Primary | `#2563eb` | CTA buttons, links, accent |
| Danger | `#dc2626` | Overspend indicators, zombie alerts |
| Warning | `#f59e0b` | Renewal warnings, attention |
| Text | `#0f172a` | Headings, body |
| Muted | `#64748b` | Secondary text, captions |

### Typography
- **Font:** Inter (Google Fonts)
- **Headings:** Bold, tight letter-spacing
- **Body:** Regular, 16px base
- **Data:** Monospace-feel for numbers in dashboard preview

### Spatial System
- Base unit: 4px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Card padding: 24px
- Gap between grid items: 24px

### Motion Philosophy
- Subtle entrance animations (fade + slight translate-y) on scroll
- Button hover: scale(1.02) + shadow lift
- No distracting animations — data should breathe

---

## 3. Layout & Structure

### Page Sections (top to bottom)

1. **NavBar** — Sticky. Logo left | Features | Pricing | Login (ghost) | Start Free (primary CTA) right
2. **Hero** — Centered headline + subheadline + two CTA buttons + trust badge line
3. **Dashboard Preview** — Mock dashboard UI showing total spend, subscription count, renewal timeline, zombie alerts
4. **Features Grid** — 6 cards in 3x2 grid (desktop), 1 column (mobile)
5. **How It Works** — 4 horizontal steps with icons and descriptions
6. **Stats Bar** — 3 key metrics in a horizontal strip
7. **Testimonials** — 3 cards: startup founders / ops managers
8. **Pricing** — 2 tiers side by side, Starter $19/mo, Team $49/mo
9. **CTA Banner** — Final conversion push
10. **Footer** — Logo, nav links, copyright

### Responsive Strategy
- Mobile-first breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- NavBar collapses to hamburger on mobile
- Grids adjust columns at breakpoints

---

## 4. Features & Interactions

### NavBar
- Sticky on scroll with subtle shadow
- Logo: "SaaSSpend" wordmark in primary blue + a small chart icon
- "Start Free" button scrolls to pricing or links to signup
- "Login" is a ghost/text button

### Hero
- Headline: "Know what you're actually paying for your SaaS"
- Subheadline: "Track renewals, kill zombie subscriptions, and stop overspending — without the enterprise price tag."
- Primary CTA: "Start Free" → scrolls to pricing
- Secondary CTA: "See how it works" → scrolls to how-it-works
- Trust line: "No credit card required · Setup in 5 minutes · Cancel anytime"

### Dashboard Preview
Mock dashboard card with:
- Total spend: "$4,218" (large number)
- Active subscriptions: "38" with a trend indicator
- Renewal timeline: mini calendar strip showing next 3 renewals
- Zombie app alerts: 3 apps with "Last login: 94 days ago" in danger red

### Features Grid (6 cards)
1. **Card Feed Sync** — Icon: CreditCard. Automatically import charges from your card statement.
2. **Renewal Calendar** — Icon: Calendar. Never get surprised by a renewal again.
3. **Zombie App Detection** — Icon: Ghost/Zombie. We flag apps nobody's logged into in 90 days.
4. **Per-Seat Utilization** — Icon: Users. See who's actually using each tool.
5. **Budget Alerts** — Icon: Bell. Get warned when you're heading toward an overspend.
6. **Export for Finance** — Icon: FileText. CSV export ready for your finance team.

### How It Works (4 steps)
1. Connect your card → links to your charges automatically
2. See all charges → we categorize and display every SaaS subscription
3. Set alerts → choose renewal warnings and budget limits
4. Stop waste → cancel what you don't need, track what you do

### Stats Bar
- "1,200+ teams tracking $14M+ in SaaS spend"
- "Average team saves $840/year by killing zombie apps"
- "Setup in under 5 minutes"

### Testimonials (3 cards)
1. "We were paying for 12 tools nobody on the team used. SaaSSpend caught them all in week one." — Priya S., Ops Lead at a 22-person startup
2. "Finally, something that doesn't need an IT department. We saved $2,400 in the first month." — Marcus T., Founder of a 15-person agency
3. "The renewal calendar alone is worth the price. No more surprise charges." — Anika R., Head of Operations at a 35-person fintech

### Pricing
| | Starter | Team |
|---|---|---|
| Price | $19/mo | $49/mo |
| Cards | 1 | 5 |
| Subscriptions | 20 | Unlimited |
| Alerts | Yes | Yes |
| Seat Utilization | No | Yes |
| Priority Support | No | Yes |
| CTA | Start Free | Start Free |

### CTA Banner
"Ready to stop overpaying for SaaS? Start free today."

### Footer
- Logo + tagline left
- Nav links: Features, Pricing, About, Blog, Privacy, Terms
- Copyright line

---

## 5. Component Inventory

### Button
- **Primary:** bg-primary text-white, rounded-lg, px-6 py-3, hover:shadow-lg hover:scale-[1.02]
- **Ghost:** border border-border text-text, rounded-lg, px-6 py-3, hover:bg-gray-50
- **States:** default, hover, active, disabled (opacity-50 cursor-not-allowed)

### Card
- bg-surface, border border-border, rounded-xl, shadow-sm, p-6
- Hover: shadow-md transition-shadow

### Badge
- Small pill, bg-gray-100 text-muted text-xs

### Section Header
- Eyebrow: uppercase tracking-widest text-xs text-muted
- Headline: text-3xl/4xl font-bold text-text
- Subheadline: text-lg text-muted max-w-2xl

### NavBar
- bg-surface/80 backdrop-blur, border-b border-border, h-16 flex items-center

---

## 6. Technical Approach

- **Framework:** Next.js 15 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (with `@import "tailwindcss"` and `@theme {}` for CSS variables)
- **Icons:** Lucide React
- **Font:** Inter via `next/font/google`
- **Deployment:** Vercel (npx vercel --yes)
- **No external API calls** — static marketing page
- **No backend required** — landing page only
