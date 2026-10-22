# Gamified HR Engagement System — Implementation Plan

## Product and scope

Build a beginner-friendly React demo of the requested HR engagement system. The UI covers employee and HR manager experiences with clickable sections and realistic sample data. Points, challenge completions, kudos, reward redemptions, survey answers, comments, team actions and messages update in the browser and persist locally in `localStorage`; this is a single-browser demo, not shared company data.

The starter has no managed server or database enabled, and the request does not name HR, fitness, chat, or identity providers. Therefore this version does not connect to real HR systems, fitness devices, or employee accounts. Integration entry points are clearly presented as demo/sample states. Engagement, satisfaction, performance, and turnover-risk analytics use sample data and are not presented as real predictive results. This keeps the first version useful without implying private employee data has been connected.

## Implementation approach

Use the existing React 19, TypeScript, Vite, Tailwind/CSS, and `lucide-react` setup. Keep the code readable for a first-year React student: straightforward components, arrays of sample data, `useState`, small event handlers, plain CSS, and no new dependencies or elaborate abstractions. Use a single app route (`/`) with a sidebar that switches the visible section, so the route manifest remains simple.

- **Overview:** earned points, badges and completed challenges; pending tasks; progress toward a reward; an engagement trend; and a leaderboard with department/team filters.
- **Challenges:** daily/weekly learning, feedback, wellness, and performance-goal challenges, plus team challenges with visible progress and actions that award points.
- **Recognition:** peer kudos that award demo points to colleagues, recent recognition, a top-performer spotlight, and redeemable sample rewards.
- **Learning:** level-based training modules, completion rewards, skill badges, and an interactive quiz that awards points.
- **Wellness:** step, yoga and mindfulness challenges, an activity log with matching point values, and a clearly labeled sample fitness-app connection state.
- **Social:** achievement feed, comments, reactions, and a simple team discussion/chat demo.
- **HR Hub:** demo leave-request form, benefits and payslip information cards, plus an incentivized survey/poll whose answer is saved in local demo state.
- **Insights:** engagement and satisfaction trends, sample performance and turnover-risk indicators, participation/productivity/redemption summaries, and a downloadable sample CSV report.

Keep sample people and analytics fictional. Use local browser state to make the interactions feel real while making the demo-only boundary clear. Keep the existing static development setup; no database, server, or external APIs are needed for this prototype.

## Design

**Three candidate directions:** warm people-first editorial dashboard (0.08); bright neo-brutalist workplace arcade (0.05); quiet wellness-inspired utility (0.03). **Chosen:** warm people-first editorial dashboard.

- **Design movement:** contemporary editorial SaaS, borrowing the warmth and clear hierarchy of a well-designed workplace journal.
- **Core principles:** human and encouraging; useful before playful; clear progress without pressure; sample data is visibly labeled.
- **Color philosophy:** soft paper neutrals keep the interface calm, evergreen signals growth and trust, and restrained golden/coral accents celebrate progress without turning work into a noisy game.
- **Layout paradigm:** a compact left navigation with a spacious, left-aligned working canvas; use a flexible dashboard layout rather than a centered marketing grid.
- **Signature elements:** a small leaf/spark mark for the brand; rounded progress tracks with a distinct goal marker; warm badge chips that read like small achievement stamps.
- **Interaction philosophy:** every main action gives clear feedback (points, progress, or confirmation); controls stay obvious and forgiving; avoid competitive pressure by pairing rankings with personal/team progress.
- **Animation:** brief, subtle hover and progress-fill transitions only; no looping decoration or motion that delays tasks.
- **Typography system:** system sans-serif for UI and data, with a restrained serif display face for headline moments; keep sizes and contrast accessible.
- **Brand essence:** a friendly HR companion that makes everyday growth visible; **encouraging, clear, people-first**.
- **Brand voice:** upbeat, specific and respectful. Examples: “Small steps count. Your week is already taking shape.” “A little recognition goes a long way.”
- **Wordmark & logo:** “Bloom” as a compact wordmark paired with a simple two-leaf/spark SVG mark, not a generic emoji.
- **Signature brand color:** evergreen (`#2F6B55`), used for active navigation, primary actions and positive progress.

## Project structure

- `client/src/App.tsx`: the single `/` route and app providers.
- `client/src/pages/Home.tsx`: the app shell, navigation, local demo state, and action handlers.
- `client/src/components/hr/SectionViews.tsx`: readable section views, forms, and reusable dashboard pieces.
- `client/src/data/demoData.ts`: sample content, types, and localStorage load/save helpers.
- `client/src/index.css`: visual system, responsive layout, and section styles.
- `client/public/brand-mark.svg`: the leaf-and-spark site mark.
- `app.config.ts`: the project logo URL; `plan.md` and `TODO.md`: approved plan and outcome progress.

The initialized project also contains an unused Express/tRPC/Drizzle starter. Leave that infrastructure untouched for this demo; adding live accounts, shared persistence, fitness/HR integrations, or reliable predictive analytics would need a separately scoped backend and provider/data decisions.