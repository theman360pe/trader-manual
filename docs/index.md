---
title: "TA‑Only Trading Manual"
version: "1.0"
date: "2025-11-05"
description: "A clear, step‑by‑step technical analysis manual focused on price action, market structure, and volume tools."
---

<a id="taonly-trading-manual"></a>
# TA‑Only Trading Manual

> **Scope & Origin.** Converted from _TA‑Only Trading Manual v1.0 (Nov 5, 2025)_. The manual uses **only** technical analysis—price action, market structure, and volume‑based tools. _No fundamentals, no psychology, and no money management_ (those are out of scope). fileciteturn0file0

**Goal:** take a novice from a blank chart to a confident **Trade / No‑Trade** decision using a consistent, repeatable process.

---

## Table of Contents

- [Glossary: SMC vs Classical Terms](#glossary-smc-vs-classical-terms)
- [Quick‑Start Checklist](#quick-start-checklist)
- [Trade/No‑Trade Flowchart](#tradenotrade-flowchart)
- [Core Trading Recipe](#core-trading-recipe)
- [Setup Playbook Library](#setup-playbook-library)
  1. [Break‑Retest at HTF Level](#break-retest-at-htf-level)
  2. [Reversion to VWAP](#reversion-to-vwap)
  3. [Value‑Area Rotation & LVN Rejection](#value-area-rotation--lvn-rejection)
  4. [Channel Break + Retest](#channel-break--retest)
  5. [BOS/CHOCH at HTF S/R](#boschoch-at-htf-sr)
  6. [Liquidity Sweep / SFP Reversal](#liquidity-sweep--sfp-reversal)
  7. [FVG / OB / Breaker Variants (Mitigation & Inducement)](#fvg--ob--breaker-variants-mitigation--inducement)
  8. [WM Weekly/Monthly Pivots](#wm-weeklymonthly-pivots)
  9. [Camarilla Break & Mean‑Reversion (CMR)](#camarilla-break--mean-reversion-cmr)
  10. [EMA 21/55 Flag Continuation](#ema-2155-flag-continuation)
  11. [Pin‑Bar + Trendline (Continuation / Reversal)](#pin-bar--trendline-continuation--reversal)
  12. [Source Index](#source-index)
- [1. Fibonacci Pullback/Extension](#1-fibonacci-pullbackextension)
  - [Purpose & Ideal Conditions](#purpose--ideal-conditions)
  - [Preconditions](#preconditions)
  - [How to Draw](#how-to-draw)
  - [Confirmation](#confirmation)
  - [Entry Triggers](#entry-triggers)
  - [Invalidation](#invalidation)
  - [Exits & Targets](#exits--targets)
  - [Fibonacci Levels — Quick Reference](#fibonacci-levels--quick-reference)
  - [Trap Alerts](#trap-alerts)
  - [Case Study: AAPL 15m](#case-study-aapl-15m)
- [2. Linear Regression + Market Profile (LRMP)](#2-linear-regression--market-profile-lrmp)
  - [Purpose & Ideal Market Conditions](#purpose--ideal-market-conditions)
  - [Preconditions](#preconditions-1)
  - [How to Draw](#how-to-draw-1)
  - [Confirmation](#confirmation-1)
  - [Entry Triggers](#entry-triggers-1)
  - [Invalidation](#invalidation-1)
  - [Exits & Targets](#exits--targets-1)
  - [Confluence Checklist](#confluence-checklist)
  - [Trap Alerts](#trap-alerts-1)
  - [Case Study: Weekly Inside Breakout (BTC)](#case-study-weekly-inside-breakout-btc)
- [3. Market Profile — Initial Balance & Value Migration Plays](#3-market-profile--initial-balance--value-migration-plays)
  - [Purpose & Ideal Conditions](#purpose--ideal-conditions-1)
  - [Preconditions](#preconditions-2)
  - [How to Draw](#how-to-draw-2)
  - [Confirmation](#confirmation-2)
  - [Entry Triggers](#entry-triggers-2)
  - [Invalidation](#invalidation-2)
  - [Exits & Targets](#exits--targets-2)
  - [Confluence Checklist](#confluence-checklist-1)
  - [Trap Alerts](#trap-alerts-2)
  - [Case Study 1 – Trend Day (ES)](#case-study-1--trend-day-es)
  - [Case Study 2 – Range Reversion (ES)](#case-study-2--range-reversion-es)
- [Liquidity Sweep Reversal (Stop-Run at Prior High/Low)](#liquidity-sweep-reversal-stop-run-at-prior-highlow)
- [Weekly/Monthly Pivot Plays (Rotation & Rejection)](#weeklymonthly-pivot-plays-rotation--rejection)
- [Camarilla Pivot Setups (Reversal or Breakout)](#camarilla-pivot-setups-reversal-or-breakout)
- [Market Profile: IB and Value Area Setups](#market-profile-ib-and-value-area-setups)
- [High-Low Chart Method (Trend Clarity & Fakeout Filter)](#high-low-chart-method-trend-clarity--fakeout-filter)
- [Fibonacci Confluence Setup (Key Retracement Zones)](#fibonacci-confluence-setup-key-retracement-zones)
- [Orderflow & Absorption Setup (CVD Divergence Reversal)](#orderflow--absorption-setup-cvd-divergence-reversal)
- [Beginner‑to‑Expert Progression](#beginner-to-expert-progression)
  1. [Introduction & Overview](#introduction--overview)
  2. [Module 1 — Market Swings & Structure](#module-1--market-swings--structure)
  3. [Module 2 — High Time‑Frame Support/Resistance](#module-2--high-timeframe-sr)
  4. [Module 3 — VWAP (Volume‑Weighted Average Price)](#module-3--vwap--volume-weighted-average-price)
  5. [Module 4 — Volume Profile (Auction Concepts)](#module-4--volume-profile--auction-concepts)
  6. [Module 5 — Fair Value Gaps & Order Blocks](#module-5--fair-value-gaps--order-blocks)
  7. [Module 6 — Range Deviations & Reclaims (False Breakouts)](#module-6--range-deviations--reclaims-false-breakouts)
  8. [Module 7 — Full Setup Application (HTF → LTF)](#module-7--full-setup-application-htf--ltf)
  9. [Personal Pre‑Trade Checklist](#personal-pretrade-checklist)
- [Appendices](#appendices)
- [Sources](#sources)

---

<a id="glossary-smc-vs-classical-terms"></a>
## Glossary: SMC vs Classical Terms

In modern trading communities (especially **SMC/ICT‑style** analysis), several popular terms correspond to long‑standing classical price‑action ideas. This section maps terms and clarifies how they’re used in the manual. fileciteturn0file0

<a id="camarilla-break--mean-reversion-cmr"></a>
### Break of Structure (**BOS**)
A confirmed **trend break**. Price makes a **new significant swing high/low** beyond the prior swing, typically with a **body close** through that level—signaling that the trend has **shifted**.

### Change of Character (**CHOCH**)
A **preliminary** structure shift—often the **first hint** of trend change. It’s a minor break **against** the prevailing trend. A later BOS confirms the new trend.

<a id="fvg--ob--breaker-variants-mitigation--inducement"></a>
### Order Block (**OB**)
A **supply/demand zone**: the last **bearish** candle before a sharp up‑move (bullish OB) or the last **bullish** candle before a sharp drop (bearish OB). Price often **returns** to these zones and reacts. Think “institutional order cluster.”

### Fair Value Gap (**FVG**)
A **price imbalance** (often a 3‑candle pattern) where one side dominated and left a **void**. Price tends to **revisit** these gaps to “seek fair value.”

<a id="liquidity-sweep--sfp-reversal"></a>
### Swing Failure Pattern (**SFP**) / Liquidity Sweep
A **false breakout**: price **runs a prior swing high/low** (stops get taken) and then **closes back within** the range, often reversing.

### Liquidity Pool
Areas of **clustered stops** (equal highs/lows, notable swings) that price may **target**.

### Optimal Trade Entry (**OTE**)
A **deep pullback** entry—commonly around the **61.8–79%** retracement zone (often cited ~**70.5%**).

### Breaker Block
An **order block that fails**, then later flips to act as **support/resistance** from the opposite side.

### Premium / Discount (50% Range Concept)
Divide a range with its **50%** level. Above = **premium** (expensive); below = **discount** (cheap). A practical way to gauge whether price is at a favorable location. fileciteturn0file0

> _Note:_ “SMC” denotes Smart Money Concepts—community jargon for concepts that also exist in traditional technical analysis.

[Back to top ↑](#taonly-trading-manual)

---

<a id="quick-start-checklist"></a>
## Quick‑Start Checklist

Run this list before every trade. It condenses the core process into high‑impact checkpoints. Aim for **3+ independent confluences**; if you can’t honestly check the boxes, **stand aside**. fileciteturn0file0

- [ ] **Bias** — Determine the **higher‑timeframe (HTF)** bias (Daily/4H; 1H for intraday). Trade **with** the trend unless you’re at a **clear extreme** with a proper reversal signal.
- [ ] **Level** — Mark the **obvious** HTF **support/resistance** zones (prior day/week highs/lows, major pivots, clear OBs). Trade **at levels**, not mid‑range.
- [ ] **Trend / Range** — Identify market condition. In **trends**, favor **continuations** (pullbacks/breakouts). In **ranges**, favor **reversals** at extremes.
- [ ] **Volume Profile – POC** — Note the **Point of Control** (highest volume price). Acts like a **magnet**/S‑R. Confluence with your level strengthens the case.
- [ ] **Volume Profile – LVN/HVN** — **LVNs** (valleys) often mean **fast moves** or sharp rejections; **HVNs** (peaks) act as **sticky S‑R** clusters.
- [ ] **VWAP** — Check **where price sits** relative to session/day/week **VWAP**. **Right side** of VWAP for trend strength; **far deviations** suggest **mean reversion** ideas.
- [ ] **Session / Timing** — Consider **London** and **New York** behavior (e.g., sweeps near opens). Avoid forcing breakouts in **dead sessions**.
- [ ] **Confluence** — Stack **independent** signals (HTF bias + level + volume context + VWAP + trigger). More **agreement** → higher **probability**.
- [ ] **Trap check** — Ask “**Whose stops** are nearby?” Watch for **fakeouts/stop‑hunts** (e.g., range break & quick reclaim). Have a **clear invalidation**.

[Back to top ↑](#taonly-trading-manual)

---

<a id="tradenotrade-flowchart"></a>
## Trade/No‑Trade Flowchart

Use the flow below **sequentially**. Any “No” routes you to **No Trade**—protecting you from low‑quality, impulsive entries. fileciteturn0file0

```mermaid
flowchart TD
  A[Start: Clean Chart] --> B{HTF Bias Clear?}
  B -- No clear trend --> Z[No Trade – Wait for clarity]
  B -- Bullish or Bearish --> C[Mark Key HTF Levels]
  C --> D{Price at a Key Level?}
  D -- No --> Z
  D -- Yes --> E[Volume Profile Context]
  E --> F{At HVN/POC or LVN?}
  F -- Major LVN and far from VWAP --> G[Consider Mean Reversion Setup]
  F -- At HVN/POC or minor LVN --> H[Proceed with Setup]
  G --> H
  H --> I{Trend or Range?}
  I -- Trending --> J[Setup: Trend Continuation]
  I -- Ranging --> K[Setup: Range Reversal]
  J --> L{All Trend Preconditions Met? (e.g. pullback, not overextended)}
  L -- No --> Z
  L -- Yes --> N
  K --> M{At Range Extreme + Reversal Signal?}
  M -- No --> Z
  M -- Yes --> N[Look for Entry Trigger]
  N --> O{Valid Entry Trigger? (pattern, SFP, etc.)}
  O -- No trigger --> Z
  O -- Yes --> P[Place Trade]
  P --> Q[Set Stop at TA Invalidation]
  Q --> R[Execute Trade & Log]
  R --> S{Trade Management Needed?}
  S -- Monitor & Manage --> T[Trail stop or exit at target]
  S -- Immediate Win/Loss --> U[Record Outcome]
  T --> U[Record Outcome]
  Z --> U[Stand Aside & Review Later]
```

**How to use it:** If **HTF bias** isn’t clear, stop—**no trade**. If bias is clear **and** price is at a **meaningful level** with supportive **volume/VWAP** context, choose a setup that **matches the environment** (trend continuation or range reversal). Wait for a **valid trigger**, place the **stop at invalidation**, execute, then **log**. fileciteturn0file0

[Back to top ↑](#taonly-trading-manual)

---

<a id="core-trading-recipe"></a>
## Core Trading Recipe

A step‑by‑step “from naked chart to close” process. Follow in order; **skip nothing**. fileciteturn0file0

### 1) Start with a Clean Chart
- Remove clutter; begin on a **blank** chart.  
- Pick your **HTF** (Daily/4H for swing; 1H for intraday) and **zoom out ≈200 bars** to see the major swings.

### 2) Determine HTF Bias
- Uptrend = **higher highs & higher lows**; downtrend = **lower lows & lower highs**.  
- If **sideways**, bias is **neutral**—either **wait** for breakout or use **range** tactics. Prefer trading **with** bias.

### 3) Mark Key Support/Resistance
- Plot the **obvious** horizontal S/R: swing **highs/lows**, consolidation boundaries, prior **day/week** levels, big figures, clear **OB**/supply‑demand **zones**.  
- Mark **zones**, not razor‑thin lines. Keep to **2–5** key levels per chart.

### 4) Add Volume Profile & VWAP Layers
- Apply **Volume Profile** (session/recent/composite) to identify **POC**, **HVNs**, **LVNs**.  
- Check **VWAP** (day/week, and optionally **anchored** from significant highs/lows).  
- Use **confluence**: e.g., support aligning with **yesterday’s POC**; note **distance from VWAP** (mean‑reversion potential vs balance).

### 5) Identify Trend or Range Conditions
- **Trending** → consider **pullbacks** and **breakouts** in trend direction; dynamic S/R (e.g., MAs) can help.  
- **Ranging** → prefer **edge reversals**; oscillators can assist confirmation if that’s in your plan.

### 6) Define Your Setup Preconditions
- Choose the setup that fits context (e.g., **Break & Retest** in an uptrend; **VWAP mean reversion** on large deviations).  
- List **must‑have conditions** before any entry (e.g., breakout + rising volume + clean retest for break‑retest).

### 7) Watch for an Entry Trigger
- Examples: **reversal candles** (hammer/engulfing), lower‑TF **BOS** in your favor, **SFP** wick, or a defined indicator event.  
- “**No trigger, no trade**”: prevents early entries and FOMO.

### 8) Place Stop‑Loss at TA Invalidation
- Put the stop **just beyond** the level that **must hold** if your idea is right (below support, above resistance/OB, beyond sweep low/high).  
- **Structure‑based** stops define **invalidation** and the **position size** you can afford. **Never widen** a stop.

### 9) Execute the Trade & Manage It
- Enter promptly when the **trigger** fires; pre‑define **target(s)** (e.g., next S/R or **2:1 R:R**).  
- Manage according to trade type: scale partials at **logical trouble areas**; trail stops as the market allows; avoid **micromanaging noise**.

### 10) Document & Learn (Evidence Capture)
- Save **screenshots** with entries/stops/targets/outcomes; write **why** you took it and **what happened**.  
- Over time, your journal reveals **edge concentration** (what works best for you) and common **pitfalls** to fix.

> _Plan the trade. Trade the plan. Then study the result._ fileciteturn0file0

[Back to top ↑](#taonly-trading-manual)

---

<a id="setup-playbook-library"></a>
## Setup Playbook Library

Use the **Core Trading Recipe** as the backbone; the setups below are **applications** with tailored criteria. (Detailed examples to be maintained alongside your journal.) fileciteturn0file0

- **Break & Retest (HTF Level)**
- **VWAP Mean Reversion**
- **Value‑Area Rotation**
- **Channel Breakout**
- **HTF S/R Structure Shift**
- **Liquidity Sweep (SFP) Reversal**
- **Fair Value Gap (FVG) Entry Model**
- **Order Block (OB) / Breaker Setup**
- **Weekly & Monthly Pivot Plays**
- **Camarilla Pivot Mean‑Reversion**
- **EMA 21/55 Pullback (“Flag”)**
- **Pin Bar at Trendline**
- **Fibonacci Retracement Confluence**
- **London Reversal & Mid‑Week Pattern**
- **Initial Balance (Market Profile) Plays**
- **Range Deviation Reclaim**
- **Iron Forged Trend Model (OTE)**
- **CMR Strategy (Contraction & Breakout)**

[Back to top ↑](#taonly-trading-manual)

---

<a id="beginner-to-expert-progression"></a>
## Beginner‑to‑Expert Progression

Practice sequence to build competence: fileciteturn0file0

1. **Module 1 – Chart Marking Drills**  
2. **Module 2 – Pattern Recognition Drills**  
3. **Module 3 – Multi‑Timeframe Analysis**  
4. **Module 4 – Volume Profile Practice**  
5. **Module 5 – Strategy Simulation & Journaling**  

[Back to top ↑](#taonly-trading-manual)

---

<a id="appendices"></a>
## Appendices

- **Glossary of Terms**  
- **TradingView Tips & Tools**  
- **Source Files (Curated List)**  fileciteturn0file0

[Back to top ↑](#taonly-trading-manual)

---

<a id="source-index"></a>
<a id="sources"></a>
## Sources

Curated references listed in the original manual: fileciteturn0file0

- *The Price Action Trading Strategy Guide* — TradingwithRayner: https://www.tradingwithrayner.com/the-price-action-trading-strategy-guide/  
- *Volume Profile Indicator Explained (A Beginner's Guide)* — City Traders Imperium: https://citytradersimperium.com/what-is-volume-profile-indicator/  
- Additional internal notes/files referenced:  
  - _Farouk - Trading Knowledge.md_  
  - _Atif Hussain - Liquidity Trading Strategy.txt_  
  - _Liquidity_Sweep_Model_ Individual 2.pdf_  
  - _Iron Forged Swing Trading Model.pdf_  
  - _Price Action Trading - 6 Things To Look For Before You Place A Trade.pdf_  
  - _Trading Images – Knowledge.docx_  
  - _Koroush AK - Trading Knowledge.pdf_  

---

### Change Log
- **v1.0 (2025‑11‑05):** Initial release and Markdown conversion.

> **Tip:** Pair this manual with a personal **trade checklist** and a **screenshot journal** to compound learning.




---
title: "Setup Playbook Library — Markdown Edition"
subtitle: "Professional Trading Setups"
version: "1.0"
last_updated: "2025-11-06"
---

# Setup Playbook Library
**Use:** skim the table of contents, jump to any setup, and work through the same repeatable structure each time: context → preconditions → drawing → confirmation → entry → invalidation → targets → confluence → traps → worked example.

## How to Use This Playbook

- **Trade with trend** unless a setup explicitly targets a reversal.  
- **Respect sessions:** many entries form near London/NY opens; avoid thin liquidity.  
- **Risk:** place stops at *structural invalidation*, not at arbitrary distances.  
- **Confluence > conviction:** stack levels, volume, VWAP/EMA, profile, time-of-day.  
- **Process:** Pre‑plan → Alert → Execute → Manage → Debrief.

> [!TIP]
> Print the *Preconditions Checklist* for the setups you actually trade and keep it beside your screens.

---

<a id="break-retest-at-htf-level"></a>
## Break‑Retest at HTF Level

**Purpose & Context** — Trend continuation after a decisive break of a **higher‑timeframe** S/R where the level flips role on retest.

### ✅ Preconditions (checklist)
- Bias aligned with HTF trend (e.g., weekly up → favor long retests).
- A **well‑defined** HTF level (daily/weekly S/R, trendline, pivot) is **broken on momentum** and *closes* beyond the level.
- Session context supportive (e.g., break in London → retest near NY).
- Optional: volume profile confluence (POC/VA boundary), fib 50–61.8% of the breakout leg.

### ✍️ Drawing
- Mark the broken HTF level; box the **retest zone** (include wick extremes).  
- Fib the breakout leg to locate 50–61.8%.

### 🔎 Confirmation
- High volume on the **break**, lighter on the **pullback**; volume rises as price taps level again.  
- Momentum stays with the trend (e.g., RSI holds above/below midline).

### 🎯 Entries
- Rejection signal at retest (pin/engulf) — best pins often wick through and close back inside.  
- Or a micro BOS/CHOCH on 5–15m in favor of the trend.

### ⛔ Invalidation
- LTF/HTF *close back through* the level (failed flip) or a sharp counter‑move slicing cleanly through.

### 📌 Targets
- Next structure in trend direction, measured‑move of prior consolidation/flag, or fib extensions 127.2–161.8%.

### 🧩 Confluence
- Volume node/POC, VWAP/anchored VWAP, HTF EMAs (21/50), supportive session timing.

### ⚠️ Traps
- Weak breakout volume → fakeout risk.  
- Lingering, low‑vol retests that “sit” on level → failure risk.  
- End‑of‑session tests lacking follow‑through.

### 🧪 Worked Example
BTCUSD breaks multi‑day range resistance near **30k** on volume (NY). Asia retests 30k on light volume; H4 hammer prints; London adds volume → long from 30k; stop ~29.5k; push to **32k** weekly resistance ≈ **+4R**.

---

<a id="reversion-to-vwap"></a>
## Reversion to VWAP
*pp. 2–4*

**Purpose & Context** — Mean‑reversion to **VWAP** in balanced markets or **pullback‑to‑VWAP** entries within trends.

### ✅ Preconditions
- Decide regime: **range** (flat VWAP) → revert to mean; **trend** (sloped VWAP) → buy/sell pullbacks.  
- Session rhythms: midday drifts to daily VWAP; weekly VWAP tags often mid‑week.

### ✍️ Drawing
- Apply session/anchored/weekly VWAP as appropriate.  
- Mark deviation extremes (σ bands or % distance) and areas where VWAP aligns with structure or fibs.

### 🔎 Confirmation
- Extremes show tapering momentum/volume (range) or oversold/overbought into a trending VWAP.  
- Divergence or CVD shift at the touch is common.

### 🎯 Entries
- Range: fade extremes back to VWAP once rejection prints or VWAP is **reclaimed**.  
- Trend: quick dip through VWAP that **closes back above** (long) / below (short); pattern break or mini LTF trendline break is a clean trigger.

### ⛔ Invalidation
- Strong hold beyond VWAP with slope flip; breakout day riding bands.

### 📌 Targets
- Range: VWAP (first), opposite band if momentum.  
- Trend: prior swing high/low, value area rotations (VAH/VAL).

### 🧩 Confluence
- VWAP + fib (0.5/0.618), VWAP + prior S/R, multiple timeframe VWAP clusters, climactic volume at extremes.

### ⚠️ Traps
- Midday low‑vol drifts (weak signals).  
- Fakeouts around VWAP resets (new session).

### 🧪 Worked Example
EUR/JPY rallies, then mid‑week drop tags **weekly VWAP** + 50% retrace; H4 pin; long toward prior high → full mean‑reversion of the swing.

---

<a id="value-area-rotation--lvn-rejection"></a>
## Value‑Area Rotation & LVN Rejection


**Purpose & Context** — Trade rotations within prior **Value Area** (VAH↔VAL) and use **LVNs** as rejection/speed zones; includes the classic “**80% rule**.”

### ✅ Preconditions
- Non‑trending or slow‑trend context; prior day’s value area/POC mapped.  
- Acceptance *inside* value (e.g., two 30‑min closes) increases odds of full rotation.

### ✍️ Drawing
- Plot VAH/VAL/POC of the reference session or composite; mark **LVNs** (profile valleys).

### 🔎 Confirmation
- Time + volume as acceptance signal; rotation usually traverses POC.  
- Light volume through LVNs; accumulation in an LVN negates rejection idea.

### 🎯 Entries
- Short from **acceptance below VAH** → POC → VAL; or long from **acceptance above VAL**.  
- Rejection at LVN/value extremes (SFP‑style wicks).

### ⛔ Invalidation
- Exit back out of value in entry direction; initiative orderflow overwhelming rotation.

### 📌 Targets
- Opposite value extreme; partial at POC; extend to overlapping multi‑day value edges when applicable.

### 🧩 Confluence
- Overlap with prior highs/lows, fib 50%, migration of value (stable → better rotations).

### ⚠️ Traps
- Brief “peek in” then reverse → wait for sustained acceptance.  
- News can blow through profile logic.

### 🧪 Worked Example
ES opens in value; two 30‑min closes confirm acceptance; long from near VAL → traverse POC → VAH, with an LVN acting as a brief “fast lane”.

---

<a id="channel-break--retest"></a>
## Channel Break + Retest

**Purpose & Context** — Breakout from **trend** or **range** channel, then retest the boundary from outside (diagonal version of break‑retest).

### ✅ Preconditions
- Clear channel (3+ touches each side).  
- Break on **momentum/volume**; ideally aligns with horizontal S/R or MA (e.g., 200 EMA).

### ✍️ Drawing
- Trendline channel (parallel lines) or horizontal range; extend lines forward.  
- Optional: project **flagpole** or channel width for measured move.

### 🔎 Confirmation
- Volume surge on break, dry on retest; momentum burst (RSI/MACD shift).  
- 21 EMA hold for continuation flags.

### 🎯 Entries
- Rejection on first **touch** of the broken line; pin/engulf or micro LH/HL.  
- Momentum entry from a small consolidation *outside* the channel.

### ⛔ Invalidation
- Re‑entry and close back **inside** the channel; sloppy, low‑energy breaks often fail.

### 📌 Targets
- Range height/channel width projection; next HVN/daily level.

### 🧩 Confluence
- Horizontal S/R + diagonal break, fib 50/61.8% at retest, volume‑profile context.

### ⚠️ Traps
- Low‑momentum pokes; overshoots; insistence on a “perfect touch” can miss valid shallow retests.

### 🧪 Worked Example
AUD/USD breaks a rising channel on high volume; NY retest aligns with daily pivot + 50% of break; bearish pin at underside → short; price declines ≈ channel width.

---

<a id="boschoch-at-htf-sr"></a>
## BOS/CHOCH at HTF S/R

**Purpose & Context** — Wait for **market‑structure shift** (BOS/CHOCH) on LTF **at** a major HTF level to confirm a reversal (or significant retrace).

### ✅ Preconditions
- Meaningful HTF level/zone (monthly/weekly S/R, OB, liquidity).  
- Clean trend into the level (structure to break); timing near active sessions/news.

### ✍️ Drawing
- Mark HTF zone; on LTF map the last LH/HL to define **minor** vs **major** structure (CHOCH vs BOS).  
- Identify the **flip zone** (origin of displacement).

### 🔎 Confirmation
- Volume spike on structure break; momentum turn; multi‑TF alignment (e.g., H1 BOS + H4 engulfing).

### 🎯 Entries
- Pullback to the **flip**/OB/FVG after BOS; or partial on break, add on retrace.

### ⛔ Invalidation
- New lows/highs beyond the reversal point; weak, overlapping post‑break price action.

### 📌 Targets
- Next HTF levels; 38.2–61.8% retrace of prior leg; trail below/above successive HL/LH.

### 🧩 Confluence
- Divergence/exhaustion into HTF level, liquidity sweep then CHOCH, LTF counter‑trendline break.

### ⚠️ Traps
- Anticipating before break; signals on too low a TF against a dominant daily trend; news whipsaw.

### 🧪 Worked Example
USD/JPY tags monthly **150**; H1 shows CHOCH then BOS; short on retest of flip ~149.20; target weekly low ~147.50.

---

<a id="liquidity-sweep-reversal-stop-run-at-prior-highlow"></a>
## Liquidity Sweep / SFP Reversal

**Purpose & Context** — Trade reversals after a **stop‑run** beyond obvious highs/lows (SFP), then a **fast return** back inside.

### ✅ Preconditions
- Map buy/sell‑side liquidity (equal highs/lows, prior day/week extremes).  
- Expect quick displacement into the pool (spiky, news/session‑driven moves are common).

### ✍️ Drawing
- Highlight the swept swing; note the wick extreme and the reclaim level; mark any immediate FVG/OB created by the reversal.

### 🔎 Confirmation
- Volume climax on the sweep; long rejection wick; momentum divergence; delta flip.

### 🎯 Entries
- After **close back inside** the level, enter on first pullback (wick mid/FVG/OB) or on an aggressive engulfing.

### ⛔ Invalidation
- “No sweep, no trade”; stop beyond the sweep extreme; consolidation **above/below** the taken level = genuine breakout.

### 📌 Targets
- Opposite side of the local range; next liquidity pool; measured impulse extensions (100–161.8%).

### 🧩 Confluence
- Occurs at HTF level, session timing (London close/NY open), LVN pierce + snap, multiple highs/lows taken.

### ⚠️ Traps
- Double‑sweeps; mini SFPs at insignificant levels; counter‑trend SFPs in raging trends.

### 🧪 Worked Example
Gold dips under a weekly low near **$1,900** at London; snaps back above and leaves a 15m OB; long on first pullback; stop below sweep; squeeze to prior highs.

---

## FVG / OB / Breaker Variants (Mitigation & Inducement)

**Purpose & Context** — Enter **with** institutional orderflow on pullbacks to **FVGs** and **Order Blocks**; use **breakers** when OBs fail; watch **inducement** (internal liquidity).

### ✅ Preconditions
- Clear displacement/BOS creating a fresh FVG or meaningful OB that caused the move.  
- Inducement (e.g., equal lows before demand OB) often precedes mitigation.

### ✍️ Drawing
- Box the FVG (candle 1→3 wick gap); mark OB (last down/up candle before rally/drop); note 50% (“OTE”) lines; annotate inducement highs/lows.  
- Flip failed OBs into **breaker** zones.

### 🔎 Confirmation
- Original move left quickly (valid OB); returning price reacts promptly; micro CHOCH in the zone; VWAP/mean alignment.

### 🎯 Entries
- Limit at OB/50% FVG (risk best) **or** confirmation candle in the zone.  
- Breaker: retest the violated OB from the other side.

### ⛔ Invalidation
- Close through the OB or full fill of the imbalance without reaction; reclamation of breaker level.

### 📌 Targets
- Next liquidity, opposing OB/FVG, measured leg, or trend continuation objectives.

### 🧩 Confluence
- OB + FVG overlap, inducement swept, OB in discount/premium (fib 0.5+), session “killzones”.

### ⚠️ Traps
- Stale/previously mitigated OBs; news blasts; over‑marking minor OBs without BOS context.

### 🧪 Worked Examples
- **Bullish FVG**: 4H FVG + H1 OB confluence; inducement swept; 15m bull engulf → continuation.  
- **Breaker**: Bullish OB fails; retest from below + FVG fill → short continuation.

---

<a id="wm-weeklymonthly-pivots"></a>
## WM Weekly/Monthly Pivots

**Purpose & Context** — Use **weekly/monthly pivots** for bias and targets: hold **above** pivot → trend to R‑levels; **below** → trend to S‑levels; or fade extremes for mean‑reversion.

### ✅ Preconditions
- Where is price vs **weekly** and **monthly** PP? Early‑week test often sets weekly bias.  
- Note clustering (weekly PP ≈ monthly PP), R1/S1 for first reactions; R3/S3 as extremes.

### ✍️ Drawing
- Plot PP, S1–S3, R1–R3 (weekly/monthly); add last week’s high/low; mark overlap zones.

### 🔎 Confirmation
- Repeated holds/rejections at PP; volume surges at pivots; trend strength (ADX) for breakout runs.

### 🎯 Entries
- **Trend‑following:** pullback to PP (hold) or minor retest after clearing R1/S1.  
- **Mean‑reversion:** reversal prints at R2/R3 or S2/S3, target back to PP/R1/S1.

### ⛔ Invalidation
- Flip of PP (support → resistance) or strong overshoots when you expected fades.

### 📌 Targets
- Stair‑step via R1→R2→R3 (or S1→S2→S3); magnet behavior of PP in range weeks.

### 🧩 Confluence
- Pivot overlaps with fibs, prior highs/lows, monthly pivots, session opens.

### ⚠️ Traps
- Monday head‑fakes around PP; mid‑week bias flips; over‑reliance on one pivot when monthly context disagrees.

### 🧪 Worked Example
Weekly PP at **0.9690** in USD/CHF holds Monday; long to R1/R2; later mean‑reverts back to PP by Friday.

---

## Camarilla Break & Mean‑Reversion (CMR)

**Purpose & Context** — Trade **inside‑day** Camarilla breakouts (H4/L4) or **revert** within H3–L3 on normal days.

### ✅ Preconditions
- Detect **Inside Camarilla Day**: today’s H3/L3 inside yesterday’s H3/L3 → breakout probability rises.  
- Use a trend filter (e.g., linear regression slope) to prefer breakout direction.

### ✍️ Drawing
- Plot H1–H4 / L1–L4 (and optional H5/L5); mark prior day’s Camarilla levels and “inside” status.

### 🔎 Confirmation
- Contraction early; volume/momentum surge on H4/L4 break; regression slope aligned.

### 🎯 Entries
- **Mean‑reversion:** short H3, long L3 on rejection; stops beyond H4/L4.  
- **Breakout (inside day):** close beyond H4/L4 with retest or second 15m confirmation.

### ⛔ Invalidation
- Range fades fail on decisive H4/L4 breaks; breakouts fail if price falls back inside quickly.

### 📌 Targets
- Revert to mid/pivot or opposite band; for breakouts, H5/H6 or multiples of the inside‑day range.

### 🧩 Confluence
- Align with prior highs/lows, standard pivots, profile context, session opens.

### ⚠️ Traps
- Overnight, low‑vol “pseudo‑breaks”; fighting trend on non‑inside days; conflicting pivot systems.

### 🧪 Worked Example
SPX inside‑day: morning inside H3–L3; post‑lunch breakout above H4 with volume; run to H5/H6.

---

<a id="ema-2155-flag-continuation"></a>
## EMA 21/55 Flag Continuation

**Purpose & Context** — Join strong trends using **21/55 EMA** as dynamic support/resistance during **flags/pennants**.

### ✅ Preconditions
- 21 EMA **well above** 55 EMA (uptrend) or below (downtrend); healthy pullback (≈38–50% of impulse).

### ✍️ Drawing
- Channel the flag; shade the EMA zone (21→55); fib the impulse (flagpole).

### 🔎 Confirmation
- Volume **declines** during flag; **spikes** on breakout; bullish engulf/pin off 21/55 EMA.

### 🎯 Entries
- Conservative: break and close above flag resistance (or below for shorts).  
- Aggressive: signal candle at 21/55 EMA; add on flag break.

### ⛔ Invalidation
- Close beyond 55 EMA against trend; false break back into flag; 21/55 cross against you.

### 📌 Targets
- Flagpole projection from breakout; prior swing high/low; extensions if momentum persists.

### 🧩 Confluence
- Multi‑TF EMA alignment, fib 50/61.8 at flag end, trendline support, RSI reset (40–50) then turn.

### ⚠️ Traps
- “Flags” that are actually distribution; news‑driven wicks; EMAs too stretched → deeper pullback to 55.

### 🧪 Worked Example
EUR/JPY H1: clean bull flag to 21/55; pin on 55 + 50% fib; add on flag break; push ≈ flagpole to 145.0.

---

<a id="pin-bar--trendline-continuation--reversal"></a>
## Pin‑Bar + Trendline (Continuation / Reversal)

**Purpose & Context** — Combine **pin‑bar** rejection with a **trendline**: bounce in trend, or failed retest after a trendline **break**.

### ✅ Preconditions
- Established trendline (2–3+ touches).  
- Pin‑bar with long wick (≥ 2/3 bar), ideally through the line then closing back in.

### ✍️ Drawing
- Trendline (and channel if relevant); mark pin high/low as trigger reference; extend a **broken** line forward for retests.

### 🔎 Confirmation
- Volume spike on the pin; liquidity sweep of prior swing; oscillator support (oversold/overbought turn).

### 🎯 Entries
- **Continuation:** next‑bar break of pin high/low or enter on close; stop beyond wick.  
- **Reversal (post‑break):** pin at underside/overside of the broken line; enter on close or on breach of pin low/high.

### ⛔ Invalidation
- Close beyond pin wick against setup; reclaim of broken trendline.

### 📌 Targets
- Next swing or channel edge; pattern‑based projections; 200 EMA magnet on fresh reversals.

### 🧩 Confluence
- Horizontal S/R + trendline, fib 61.8%, divergence for reversal pins, round numbers, multi‑TF alignment.

### ⚠️ Traps
- Tiny/news‑only pins; sloppy internal “trendlines”; counter‑trend pins into strong momentum.

### 🧪 Worked Examples
- USD/CAD bearish pin at underside of retested down‑trendline + daily resistance → drop next sessions.  
- AAPL hammer at rising trendline + 200MA → continuation to new highs.

---



<a id="1-fibonacci-pullbackextension"></a>
# Fibonacci Pullback & Extension — Confluence Setup

`Trend-Following` · `Confluence` · `Fibonacci` · `Market Profile` · `Linear Regression` · `Intraday` · `Swing`

> **Principle:** Fibonacci retracements are a *confluence tool*, not a standalone signal. Use them to join a prevailing trend on a pullback or to project extension targets—*only* when they align with strong support/resistance or other technical levels.

---

## 1. Fibonacci Pullback/Extension

<a id="purpose--ideal-conditions"></a>
<a id="purpose--ideal-market-conditions"></a>
<a id="purpose--ideal-conditions-1"></a>
### Purpose & Ideal Conditions
Use Fibonacci retracements as **secondary confirmation** to join trends on pullbacks or to estimate **extension targets**. Best used in **trending markets** (after a breakout or during sustained trend) with **clear swing points**. Avoid in **choppy, unclear trends**.

<a id="preconditions"></a>
<a id="preconditions-1"></a>
<a id="preconditions-2"></a>
### Preconditions
- A **defined swing** to measure (e.g., in an uptrend: recent swing *low → high*).
- **Higher-timeframe bias** aligns with the direction of your trade (buy pullbacks in uptrends, sell retracements in downtrends).
- A **known S/R area** or tool (**VWAP, volume profile nodes, moving averages**) is near a Fib level to create **confluence** (e.g., a 61.8% retrace overlapping prior support).

<a id="how-to-draw"></a>
<a id="how-to-draw-1"></a>
<a id="how-to-draw-2"></a>
### How to Draw
1. In an uptrend, draw from **swing low → swing high** (reverse in downtrends).
2. Focus on **50–61.8%** (“**golden pocket**”) for entries; **38.2%** or **78.6%** are secondary depending on trend strength.
3. Mark **100% (equal move)** and **1.272 / 1.618 extensions** as potential targets.
4. Configure your tool to show **0%, 38.2%, 50%, 61.8%, 78.6%, 100%, 1.272, 1.618**.

<a id="confirmation"></a>
<a id="confirmation-1"></a>
<a id="confirmation-2"></a>
### Confirmation
Treat Fib as **secondary**:
- **Price action** at the level (e.g., hammer/engulfing near 0.618 at support).
- **Volume/VWAP**: anchored VWAP from the swing start lining up with the Fib is powerful confluence.
- **Momentum**: e.g., **RSI** oversold at a 61.8% pullback.

> **Rule:** Only act when multiple factors align. Fibonacci alone isn’t sufficient.

<a id="entry-triggers"></a>
<a id="entry-triggers-1"></a>
<a id="entry-triggers-2"></a>
### Entry Triggers
- Enter on a **clear reaction** at the confluence level: e.g., rejection wick and close back above **0.5–0.618** in an uptrend.
- **Aggressive:** limit order in the golden pocket.  
  **Conservative:** wait for a confirming candle close (e.g., back above 0.5 after wicking 0.618).
- **Stop**: just beyond the **swing extreme** (below 0% for longs; above 0% for shorts).

<a id="invalidation"></a>
<a id="invalidation-1"></a>
<a id="invalidation-2"></a>
### Invalidation
- A decisive break **beyond the key Fib** or **> 78.6%** of the move weakens/reverses trend—**invalidate**.
- **Context flips** (HTF bias changes) or **news** destroys confluence—abort.
- If the confluence **doesn’t hold on first test**, skip the trade.

<a id="exits--targets"></a>
<a id="exits--targets-1"></a>
<a id="exits--targets-2"></a>
### Exits & Targets
- First target: **retest of the swing extreme** (**100% retracement**). Take partials.
- Stretch: **1.0 / 1.272 / 1.618** **extensions**.
- **Trail stops** behind higher lows (longs) / lower highs (shorts); don’t force the 1.618 if momentum dies at 100%.

<a id="fibonacci-levels--quick-reference"></a>
### Fibonacci Levels — Quick Reference
| Level | Typical Use | Notes |
|---:|---|---|
| **0.382** | Shallow pullback | Common in strong trends |
| **0.500** | Mean reversion | Not a true Fib ratio, widely used |
| **0.618** | “Golden pocket” entry | Best with confluence |
| **0.786** | Last-defense retracement | Below often invalidates in an uptrend |
| **1.000** | Retest of prior swing | Good first target |
| **1.272** | Extension target | Ambitious take-profit |
| **1.618** | Extension target | Aggressive/strong-trend target |

<a id="trap-alerts"></a>
<a id="trap-alerts-1"></a>
<a id="trap-alerts-2"></a>
### Trap Alerts
- **Blind Fib entries** (50/61.8% without context) → wait for **confirmation**.
- **Shallow-only trends** (23–38%) → don’t insist on 61.8%; use MA/vWAP bounces.
- **Deep pullbacks > 78%** may signal **trend failure**.
- **News spikes** can pierce a Fib and reverse; confirm acceptance before acting.
- Low-volume “respect” of a level may fail when volume returns—**always use stops**.

<a id="case-study-aapl-15m"></a>
### Case Study: AAPL 15m
Downtrend sees a **downswing → bounce**. Plot Fib **high → low** and mark the **50–61.8% golden zone**. Anchor VWAP from swing start—**it descends into the same zone**. A **bearish engulfing** forms at **0.618 + VWAP** confluence → **short** with stop **above swing high**. Initial target **0% (prior low)** hits; momentum allows a **100% extension** runner. **Confluence (Fib + VWAP)** is what made it high-probability.

---

<a id="2-linear-regression--market-profile-lrmp"></a>
## 2. Linear Regression + Market Profile (LRMP)

### Purpose & Ideal Market Conditions
Combine **Market Profile value areas** (VAH/VAL/POC) with a **Linear Regression (LR) line** to trade **breakouts or reversals** with volume/statistical context. Ideal after **balance/inside** periods where a move is likely, using LR **slope** to filter direction.

### Preconditions
- A **defined balance** / **inside** value area (e.g., current VA inside previous period’s VA).
- **LR (e.g., 200‑period)** shows clear slope and price relation (**below & sloping down** = bearish bias; **above & sloping up** = bullish bias).
- Key profile levels **POC/VAH/VAL** marked; avoid conditions where **news/liquidity** distort readings.

### How to Draw
- Apply **Volume Profile** (or **TPO**) for the relevant range to identify **VAH/VAL/POC**. Mark prior period levels if multi‑day.
- Plot a **Linear Regression** line (200‑period recommended) and note **slope direction**.
- Optionally add a **range box/inside bar** to visualize the breakout boundary—your “**value box**”.

### Confirmation
- Primary confirmation comes from **profile** + **LR**. Optional: **VWAP/MAs**, **momentum (e.g., ADX)**, and **volume expansion** on the break.
- **Rule:** Only take **value area breakouts** that **align with LR bias** (e.g., don’t short a VAL break if LR slopes **up** strongly).

### Entry Triggers
- **Aggressive Breakout:** Enter as price **closes beyond VAH/VAL** in the LR direction (e.g., first 30m candle above weekly VAH).
- **Confluence Retest:** Preferably, let price **break** then **retest** VAH/VAL; enter on **hold/turn** with LR still supportive.
- Check for **nearby obstacles** (POC/HVN) that could **cap** the move before entry.

### Invalidation
- Longs above **VAH** invalidate if price **falls back inside** the prior value—place stops **just inside** the boundary.
- If **LR slope flips** or price crosses the LR **against** your trade as momentum fades → **exit**.
- Lack of **acceptance** outside value after a reasonable time suggests a **head‑fake**; abandon the setup.
- Be extra cautious with **news‑driven** breaks that retrace immediately.

### Exits & Targets
- Target **next HVN / profile level** as value **migrates**.
- Aim for **≥ 2:1 RR** or a multiple of **recent range size**.
- **Trail** behind LR or recent swings until LR **flattens** or reversal patterns appear.
- Take **partials** at obvious resistance/measured move (e.g., size of inside range projected).

<a id="confluence-checklist"></a>
<a id="confluence-checklist-1"></a>
### Confluence Checklist
- [ ] **Inside value** or clearly defined balance precedes the move.  
- [ ] **LR bias** is clear; price on the **correct side** of LR.  
- [ ] Breakout is **through VAH/VAL** in **LR direction** and clears nearby obstacles.  
- [ ] **Volume** expands on the break; participation looks genuine.  
- [ ] Adequate **room to run** (no major level just ahead).

### Trap Alerts
- **Counter‑trend breakouts** against LR slope → common **failures**.
- **Low‑volume** nudges beyond VAH/VAL (e.g., lunch‑hour) → often **fake‑outs**.
- **Gap‑touch** head‑fakes: open tags a value level and reverses quickly.
- **Inside fake‑out:** marginal breach then **snap back** inside value.  
  **Defense:** wait for **acceptance** (time + volume) and keep **tight stops**.

<a id="case-study-weekly-inside-breakout-btc"></a>
### Case Study: Weekly Inside Breakout (BTC)
Weekly futures profile shows **inside week**: VA between **\$26k (VAH)** and **\$25k (VAL)**. Daily **LR(200)** slopes **down**; price **below LR** → **bear bias**. Early week, price **breaks below VAL (\$25k)**, retests from below, and **holds**. Stop **just above VAL**. Value **migrates down** (developing **POC** shifts lower). Trail behind **lower highs**; price reaches **\$24k** near a **1.0 range extension**. LR slope remains down throughout—no early exit signal.

---

<a id="3-market-profile--initial-balance--value-migration-plays"></a>
## 3. Market Profile — Initial Balance & Value Migration Plays

### Purpose & Ideal Conditions
Use **Initial Balance (IB)** and **Value Area** dynamics to frame **intraday** trades. Two modes:
1) **Trend Day**: imbalance from open (gap/drive) and acceptance outside prior value.  
2) **Range Day**: open within/just outside prior value with no strong bias—favor **mean reversion**.

### Preconditions
- **Opening context** vs. yesterday’s value: open **above VAH** (bullish), **below VAL** (bearish), or **inside value** (balanced).
- **IB size**: narrow IB in volatile contexts often **precedes** big moves; wide IB hints at **rotation**.
- Note whether **IB** and **today’s developing value** are **inside/outside** prior ranges.
- Check multi‑day **value migration**: persistent up/down migration increases continuation odds.

### How to Draw
- Mark **yesterday’s high/low**, **VAH/VAL**, and **POC**.
- After first hour, draw **IB high/low**; optionally **mid‑IB** and **IB extensions** (e.g., 1×/1.5×/2× IB).
- Track **today’s developing profile** to visualize value **migration**.
- Include **overnight high/low** (futures) as potential magnets/turn points.

### Confirmation
- **VWAP**: trend days ride one side with slope; range days revolve around VWAP.
- **Profile shape**: **D‑shaped** (balanced) favors fades; **p/b‑shaped** can indicate trend or short‑covering dynamics.
- **Momentum & time**: rising **ADX**, sustained **IB break**; session timing (e.g., NY open) can catalyze moves.
- **Volume** is paramount: trend days show **expansion** on IB breaks; weak volume warns of failure.

### Entry Triggers

**Range Reversion Entry**
- Fade extremes when context is balanced.  
- Example triggers:  
  - Brief **poke above IB high** that **closes back inside** → **short** (failed auction).  
  - Drift to **yesterday’s VAH** printing a **long upper wick** → **sell** expecting rotation to **VWAP/POC**.  
- **Stops**: a few ticks beyond the **day’s extreme**.

**Range Breakout (Trend) Entry**
- If signs point to a trend day:  
  - Enter on a **decisive IB break** (close beyond IB with range expansion), or  
  - Wait for a **retest** of the broken level and enter on **hold/continuation**.  
- On strong **open‑drive** days, some enter early with a stop below **open/IB low**.  
- Don’t **chase far** from the break; prefer structured **pullbacks/flags**.

### Invalidation
- **Range fades**: if price **accepts outside IB** (e.g., holds above for multiple bars) → exit; day is **trending**.
- **Breakouts**: if price **re-enters prior value** after the IB break and **fails** to migrate value → **abandon** the trend idea.
- **Time‑based**: trend day that stalls and rotates around **VWAP** by mid‑session—tighten or take profits.
- **Value tells**: developing **POC** shifting **against** your position invalidates the thesis.
- **News** can flip day‑type—react, don’t hope.

### Exits & Targets
- **Range trades**: target **opposite side** of the range or internal levels (e.g., **VWAP/POC**). Leave a **runner** for full IB rotation.
- **Trend trades**: use **IB extensions** (1×, 1.5×, 2×), and **prior day/week references**.  
  As value migrates, new **profile targets** emerge (e.g., today’s developing **VAH/VAL**).
- Late in a clear trend day, some hold a portion **into the close**; exit on sharp **counter‑moves**.

### Confluence Checklist
- [ ] **Opening position** vs. yesterday’s value is clear (above VAH / below VAL / inside).  
- [ ] **IB** is set; assess **narrow vs. wide** and relation to prior range.  
- [ ] **Value migration** confirms or rejects the day’s bias.  
- [ ] **Volume & VWAP** behavior aligns with **trend** or **range** scenario.  
- [ ] **Session bias/news** considered (London/NY catalysts, scheduled events).

### Trap Alerts
- **Opening fake‑out**: gap outside value then **tucks back in** → fade the failed drive.
- **IB false break**: marginal new high on **thin volume** → quick reversal traps breakout chasers.
- **Ignoring context**: breaking into **yesterday’s high/composite POC** and stalling—wasn’t true discovery.
- **Late‑day traps**: trend‑day mean‑reversion shorts get steamrolled; late weak breakouts often **snap back**.
- **News traps**: spike → breach → **reversal**; require **acceptance** before assuming trend continuation.

<a id="case-study-1--trend-day-es"></a>
### Case Study 1 – Trend Day (ES)
- Open **above** prior value on a **strong gap** → first hour **IB = 15 pts**.  
- By **11:00 ET**, ES **breaks above IB high** with robust volume and **never looks back**.  
- Value **migrates up** (developing **POC** rises through the day).  
- Entry: **IB breakout retest**; management: **trail** behind 15‑min swing lows.  
- Outcome: day extends to **~2.5× IB**; counter‑trend fades get **steamrolled**.

<a id="case-study-2--range-reversion-es"></a>
### Case Study 2 – Range Reversion (ES)
- Next day opens **inside** prior value; **IB = 20 pts**.  
- **11:00** breakout **fails** (5 pts above IB high then sharp sell wick) → **short** back inside IB.  
- Target: **IB low** / confluence with **yesterday’s VAL**.  
- Profile forms **D‑shape**; **VWAP** flat with frequent crosses—classic **range** behavior.  
- Late bounce **stalls** near **VWAP/POC** → additional fade opportunity.



## Quick Reference

| Setup | Core Idea | Best Context | Primary Tools | Typical Triggers | First Targets |
|---|---|---|---|---|---|
| Liquidity Sweep Reversal | Fade a false breakout after stops are run beyond a prior high/low | Trending **or** ranging near obvious swing extremes; session opens | HTF bias, PDH/PDL, VWAP/Volume Profile | Swift wick through level, reclaim, BOS/CHOCH | Midpoint/VWAP, opposite liquidity |
| Weekly/Monthly Pivots | Rotate between pivots or ride momentum through a pivot | Multi-session context; indices/FX/crypto | Weekly & monthly P/R/S, mid-levels | Rejection at P/ R1/ S1; momentum close beyond pivot | Next pivot level (e.g., P → R1) |
| Camarilla Pivots | Fade S3/R3 in ranges; ride breaks beyond them in trends | Intraday futures/FX; range vs. trend day | Camarilla S1–S4 / R1–R4 | Rejection at S3/R3; strong close beyond S3/R3 | Pivot/center, then S3/R3; R4/S4 on breaks |
| Market Profile (IB/Value) | Fade failed auctions back into value; ride IB breaks on trend days | Session-based markets (e.g., ES, CL) | VAH/VAL/POC, IB H/L, VWAP | Re-entry into value; clean IB break + hold | POC, opposite value edge; IB multiples |
| High-Low Method | Track only swing highs/lows to confirm trend & filter fakeouts | Any market/timeframe with clear swings | Swing markers, HH/HL, LL/LH | Higher low buy; prior swing high break; trend change on BOS | Next swing extreme / measured move |
| Fibonacci Confluence | Trade fib levels **when** aligned with structure/volume/VWAP | Trending pullbacks or countertrend bounces | Fib retracements/extensions + confluence | Reversal signal inside zone; retest/flip | Prior swing extreme; 1.272/1.618 |
| Orderflow & Absorption | Fade climax where aggressive orders get absorbed | Intraday extremes at known levels | CVD, footprint, DOM, VWAP | Divergence + shift; break of local support/resistance | VWAP/POC, prior base or midpoint |

---

## Liquidity Sweep Reversal (Stop-Run at Prior High/Low)

### Purpose & Context
Capture sharp reversals when price takes out an obvious prior high/low (e.g., previous day’s peak or valley) and then snaps back. This setup thrives in both trending and range conditions—use the stop-run (liquidity grab) to enter against the initial breakout. Often seen around session opens or major swing extremes, it turns a false breakout into a high-R multiple trade aligned with the prevailing bias.

### Preconditions
- Identify a clear liquidity level (PDH/PDL, weekly high/low, etc.) drawing price in.  
- Establish HTF bias (e.g., in an uptrend, anticipate a **low** sweep).  
- Prefer a fast approach into the level; ideally, volume builds into it with possible momentum divergence.  
- Avoid “already chopped” levels; you want a fresh, clean sweep.  
- Bonus if aligned with value (e.g., sweep at prior value area low or daily S1).

### Drawing Method
- Mark prior day/week/month highs and lows as horizontal lines.  
- Highlight a “stop zone” beyond those levels (likely stop clusters).  
- Note confluence with VWAP deviations or low-volume nodes on volume profile.  
- Set alerts at the level so you’re ready when breached.

### Entry Triggers
- Look for a **swift** rejection: wick pierces and price snaps back within a few candles.  
- On lower TF: a quick BOS/CHOCH after the sweep; a strong reversal candle back inside; an engulfing; or a reclaim of the swept level.  
- Execute on the reversal impulse or a slight pullback/retest.  
- Edge decays if price lingers—speed matters.

### TA Invalidation
- If price **accepts** beyond the level (multiple closes holding), treat it as a true breakout—do **not** fade.  
- Shallow/slow pullback with no momentum = skip.  
- Stops belong just beyond the sweep’s extreme wick.

### Targets
- Mean reversion toward VWAP/midpoint or the opposite side of the range.  
- PDH sweep short: prior day’s close or nearby support; PDL sweep long: prior highs or 38–50% retrace of the impulse.  
- Trail a portion in case higher-timeframe trend takes over.

### Confluence Checklist
- Daily/HTF bias aligned with the post-sweep direction.  
- Volume spike on the stop-run followed by a reversal-volume flip.  
- FVG/OB left at turn; entry near that adds confirmation.  
- Major confluence (monthly level, pivot, 61.8% fib).  
- Ideal timing (London/NY open), momentum divergence supportive.

### Trap Warnings
- Don’t pre-empt the sweep; tiny peeks often fail.  
- Beware low-volume midday “noise wicks.”  
- Extremely strong trends can keep squeezing—snag quick profits or pass.  
- News spikes can overshoot and distort structure—require the **fast V-turn**.

> *Figure*: Price wicks violently above the prior session high, then plunges back below it in minutes—a textbook stop-run reversal. *(placeholder)*

---

<a id="weeklymonthly-pivot-plays-rotation--rejection"></a>
## Weekly/Monthly Pivot Plays (Rotation & Rejection)

### Purpose & Context
Leverage widely followed weekly/monthly pivots to anticipate support, resistance, and multi-session trend continuation. In ranges, pivots act as reversal points; in trends, a decisive pivot break signals rotation to the next level. Opening relative to the weekly pivot helps set bias (above = bullish tilt; below = bearish tilt).

### Preconditions
- Calculate weekly and monthly pivots (P, R1–R3, S1–S3).  
- Note start-of-week position relative to **P**; ensure space to travel.  
- Gauge recent structure: tight prior week → potential trend week on decisive cross.  
- Avoid trading pivots into imminent high-impact news.  
- Extra weight when weekly and monthly pivots cluster.

### Drawing Method
- Plot weekly/monthly pivots; emphasize **P** as equilibrium.  
- Draw horizontal bands for R1/R2 and S1/S2; include mid-levels if used.  
- Highlight overlaps with prior swings, gaps, fibs—treat as “hot zones.”

### Entry Triggers
- **Pivot rejection**: Fail to reclaim from below/above → fade back toward support/resistance (e.g., short at weekly P rejection).  
- **Rotation breakout**: Momentum close beyond a pivot (e.g., 1H close above R1) → ride to the next pivot; retest/flip entries are classic.  
- **Mid-level plays**: Use intraday patterns (flags/minor rejections) if distance is large; confirm with price action.

### TA Invalidation
- Your idea fails if price establishes **beyond** the pivot contested (e.g., multiple closes above P on a short).  
- For flips, invalid if price falls back under/over the pivot post-entry.  
- Avoid choppy indecision around levels—standing aside beats random stop-outs.

### Targets
- Use neighboring pivots as primary TPs (e.g., R1 short → P → S1).  
- If pivots align with structure (e.g., R2 ≈ last month’s high), treat it as a final target.  
- On strong trend weeks, trail beyond standard levels (R2 → R3).

### Confluence Checklist
- Weekly pivot overlaps key structure (e.g., monthly pivot ≈ last week’s high).  
- Open outside last week’s value area.  
- Pivot tests align with MAs/trendlines (e.g., P + 50MA).  
- Candlestick confirmation and volume spikes at pivots.  
- Momentum context supports rejection/rotation (divergences).  
- VWAP alignment on pullbacks.

### Trap Warnings
- **Pivot chop** near the main pivot without direction—skip.  
- Early-week whipsaw (especially Mondays).  
- Low-volatility/holiday weeks can dull pivot responses.  
- Classic stop-run beyond a pivot—prefer confirmed closes/retests.  
- Major news can invalidate levels altogether.

> *Figure*: EUR/USD rejects its weekly pivot twice (blue line), each rejection leading to a selloff toward S1—pivot rotation in action. *(placeholder)*

---

<a id="camarilla-pivot-setups-reversal-or-breakout"></a>
## Camarilla Pivot Setups (Reversal or Breakout)

### Purpose & Context
Trade intraday reversals and breakouts using Camarilla levels. S3/R3 often define the day’s reversal zones in balance; strong closes beyond S3/R3 can launch trend continuation toward S4/R4 and beyond.

### Preconditions
- Plot daily Camarilla pivots (S4–S1, R1–R4; **S3/R3** are key).  
- Determine day type: inside day → compressed volatility → breakout potential; otherwise, range/mean-reversion between S3 and R3.  
- Respect broader trend bias and session timing.

### Drawing Method
- Highlight S3/R3 as action zones; mark central pivot (midpoint).  
- Add R4/S4 as extension targets.  
- Flag when today’s R3/S3 lie inside yesterday’s (inside-day bias).  
- Include prior day’s H/L; Camarilla often aligns with them.

### Entry Triggers
- **Mean reversion**: Fade R3/S3 when push stalls (wicks/double tops/bottoms); confirmations include engulfings or lower TF LH/HL patterns.  
- **Breakout**: Strong momentum close through R3/S3; buy pullbacks holding above/below the level; consider initial breaks only with surging volume/context.  
- Prefer breakouts with the larger trend; look for flip behavior on retest.

### TA Invalidation
- Fade invalid if price **closes decisively** beyond S3/R3 (e.g., 15m wide-range close).  
- Breakout invalid if price returns **inside** (failed break).  
- Stagnation right outside the level may be a bull/bear trap—scratch quickly.

### Targets
- **Range**: From R3 → Pivot → S3 (and vice versa).  
- **Breakout**: R4/S4 standard; partial at R4/S4, trail the rest with local swing stops.  
- Measured moves work well on inside-day breaks.

### Confluence Checklist
- Inside Camarilla day increases breakout odds.  
- HTF trend + open near pivot → bias to longs (or shorts).  
- Align with prior day H/L, supply/demand zones, or MA confluences.  
- Volume/volatility context (low morning → afternoon break).  
- Trend filters (MA slope, regression) and rejection patterns at levels.  
- Oscillators: OB/OS at R3/S3 on range days; stay pegged on trend days.

### Trap Warnings
- False breaks (especially lunch-time drifts) → wait for retest/solid close.  
- Fading relentlessly in a true trend day is hazardous.  
- News can smash through levels and reverse—high risk around releases.  
- Very narrow Camarilla range → likely breakout; don’t overstay fades.

> *Figure*: Inside-day breakout—price stayed within yesterday’s Camarilla range, then exploded above R3 with volume, retested R3 as support, and trended toward R4 into the close. *(placeholder)*

---

<a id="market-profile-ib-and-value-area-setups"></a>
## Market Profile: IB and Value Area Setups

### Purpose & Context
Structure intraday trading around the Initial Balance (first-hour range) and prior Value Area. Trend days often stem from IB breaks that hold; balanced days favor rotations back into and across value.

### Preconditions
- Identify prior day’s **VAH**, **VAL**, and **POC**.  
- Note today’s open relative to value (outside → imbalance; inside → balance).  
- Mark the **IB high/low** after the first hour; compare IB width vs. normal.  
- Track developing volume distribution and value migration; note news risks.

### Drawing Method
- Draw VAH/VAL/POC and today’s IB H/L.  
- Shade regions just outside VAH/VAL (fade zones) and beyond IB H/L (breakout zones).  
- Overlay developing session profile to monitor acceptance vs. rejection.

### Entry Triggers
- **Value rotation (fade)**: Price pokes beyond VAH/VAL but quickly re-enters value → fade toward POC/opposite edge.  
- **IB break & go**: Clean break of IB that **holds** (especially if also outside prior value) → join trend; aggressive on break, conservative on retest.  
- **In-IB reversion**: On very balanced days, scalp between IB extremes with clear absorption/stagnation at edges.  
- **Value migration**: If POC drifts upward/downward persistently, buy/sell pullbacks with VWAP/value flips.

### TA Invalidation
- Fade invalid if price **accepts** outside value (quick hold beyond VAH/VAL).  
- Breakout invalid on **return into IB** or lack of follow-through (sideways drift, then slip back).  
- Low-volume “breakouts” are suspect—confirm participation.

### Targets
- Range day: POC first, then opposite value edge.  
- Trend day: multiples of the IB range; yesterday’s range expansion targets.  
- Trail under/over successive pullbacks on strong trends; consider ADR context.

### Confluence Checklist
- Gap or open out-of-value with hold above/below IB.  
- Overnight inventory context (for equities).  
- Market internals/correlations confirm balance or trend.  
- Profile tells (single prints/thin areas vs. volume bulges).  
- VWAP behavior (multiple crosses on rotation days; one-sided on trends).  
- Typical timing: genuine trend days often break from IB early.

### Trap Warnings
- Early fakeouts: Hour-2 break that reverses and the true move starts opposite.  
- Lunch-time low-volume breaks fail often.  
- Don’t fade relentlessly on trend days with rising value.  
- Opening drive can reverse sharply—confirm sustained action beyond IB.  
- News events can shatter profile norms; reassess post-event.  
- Artificially wide IB from early news → expect drift inside.

> *Figure*: Example—price opened inside prior value, tried above VAH, failed, and rotated down through POC toward VAL; later, VAL held and price re-entered value for a long back to POC. *(placeholder)*

---

<a id="high-low-chart-method-trend-clarity--fakeout-filter"></a>
## High-Low Chart Method (Trend Clarity & Fakeout Filter)

### Purpose & Context
Enhance trend clarity and validate breakouts by focusing only on swing **Highs** and **Lows**. This filters noise to confirm trend direction and avoid traps (e.g., a candle close above resistance without a true new swing high).

### Preconditions
- Define current structure: last swing high/low must be clear.  
- Works best with well-defined swings; prefer 1H/4H for swing trades to avoid noise.  
- Identify key S/R levels where “true” breaks matter.

### Drawing Method
- Emphasize highs/lows (line chart of highs/lows or manual H/L marks).  
- Connect consecutive swing highs/lows with trendlines to visualize structure.  
- Mark critical horizontal levels (prior swing high/low) for validation.

### Entry Triggers
- **Trend continuation**: Buy the next **higher low** in an uptrend (stop below last swing low).  
- **Breakout confirmation**: Wait for a **new swing high/low** to confirm before entry.  
- **Reversal**: Trend change triggers when price fails to make a new low/high and **then** takes out the prior lower high/higher low.  
- **S/R validation**: If support holds (no new low), long on rebound; short failures to break highs.

### TA Invalidation
- Structure flips against your thesis (e.g., lower low prints while long).  
- Breakout entry invalid if price returns under/over the validating swing.  
- For fakeout fades, stop above/below the wick that should not be breached.

### Targets
- For trend trades: prior swing extreme first; then measured move or next resistance/support.  
- For breakouts: project range size from break or use fib extensions.  
- Trail beneath/above successive swing lows/highs to ride trends.

### Confluence Checklist
- Align H/L signals with larger structure, fibs, VWAP/MAs, and volume.  
- Oscillator divergences at swings can reinforce entries/exits.  
- Multi-timeframe awareness: know higher TF barriers overhead/underfoot.

### Trap Warnings
- Method can lag; fast V reversals may run without perfect confirmation.  
- Beware micro-swings inside consolidations—focus on **significant** pivots.  
- Range whipsaws (slight HH then slight LL) can mislead—recognize range conditions.

> *Figure*: In a choppy uptrend, price never closed below the previous swing low; buying higher lows kept you in until a lower low warned of trend end. *(placeholder)*

---

<a id="fibonacci-confluence-setup-key-retracement-zones"></a>
## Fibonacci Confluence Setup (Key Retracement Zones)

### Purpose & Context
Find high-probability entry zones where Fibonacci retracements/extensions **align** with structure, volume nodes, and/or VWAP. Confluence—not fibs alone—creates robust turning points for trend pullbacks or tactical countertrend bounces.

### Preconditions
- Identify a meaningful swing (low→high for pullback longs; high→low for rally shorts).  
- Avoid tiny consolidations; prefer clear trend legs or sharp moves.  
- Look for structure near 38.2%, 50%, 61.8%, 78.6%; add dynamic references (anchored VWAP, MAs) and profile nodes.  
- Treat the setup as “ripe” only with **at least one or two** additional confluences.

### Drawing Method
- Apply retracements to the chosen swing; mark key fibs.  
- Overlay prior S/R, volume POC/HVN, and VWAP from swing/session start.  
- Highlight the **zone** (± a few ticks) where lines cluster; label the confluence.  
- Add extension levels (1.272, 1.618) for targets and check overlaps with historical levels.

### Entry Triggers
- **Retracement with trend**: Reversal signal **inside** the zone (hammer/engulfing) or micro-structure break signaling buyers/sellers stepping in.  
- **Extension fade**: Countertrend at 1.272/1.618 if they coincide with major resistance/support—require pattern confirmation.  
- **Continuation from confluence base**: Breakout from a base formed at the confluence zone.

### TA Invalidation
- Zone fails to hold (clean slice through or tepid bounce) → exit.  
- Place stops just beyond the zone (e.g., slightly below 78.6% for a 61.8% entry).  
- Time also matters: long churn in-zone without response weakens the level.

### Targets
- Trend-following entries: prior swing extreme first; then 1.272/1.618 or next structural level.  
- Resistance shorts: prior swing low or midpoint first, then extensions if trend resumes.  
- Countertrend extension fades: set modest targets (nearest retracement/MA).

### Confluence Checklist
- Ensure **Fib + Structure + Indicator** (e.g., 61.8% + prior breakout retest + rising VWAP + volume shelf).  
- Align with higher timeframe trend and candles at the zone.  
- Watch larger-swing fibs nearby that could cap the move.  
- Momentum/volume confirmation at the turn strengthens conviction.

### Trap Warnings
- Don’t trade “isolated fibs”—demand confluence.  
- Be mindful of front-running vs. overshoots; consider partial scale-in or slightly looser stops tied to structure.  
- Avoid excessively wide “zones” (30–50 pips); refine or skip.  
- Runaway trends may not pull back to deep fibs—adapt with smaller-degree swings.  
- Guard against confirmation bias; respect fresh data and news risk.

> *Figure*: Confluence example—61.8% pullback aligned with a prior breakout zone and a rising 50-day MA; a bullish reversal candle launched the next leg up. *(placeholder)*

---

<a id="orderflow--absorption-setup-cvd-divergence-reversal"></a>
## Orderflow & Absorption Setup (CVD Divergence Reversal)

### Purpose & Context
Use orderflow (CVD, footprint imbalances, DOM) to catch reversals where aggressive orders are absorbed at extremes. When price pushes to new highs/lows but CVD diverges (lower high/higher low), the move may be running on fumes—absorption often precedes reversal.

### Preconditions
- Define the key level (PDH/PDL, weekly resistance, round number).  
- Set up CVD/footprint/DOM; look for momentum waning into the level.  
- For shorts: higher high in price with **lower** high in CVD; footprints show large buy imbalances failing to lift; DOM shows resting sells. Reverse for longs.  
- Prefer ranges or tired trends; runaway moves are trickier.

### Drawing Method
- On footprints, circle the extreme with very high volume/imbalances; mark the wick high/low.  
- On CVD, draw divergence lines (price ↑ vs. CVD ↓, or vice versa) and note values.  
- Annotate the confirming structure level that, once broken, signals the turn.

### Entry Triggers
- **Absorption short**: After divergence, break of local support or first solid negative delta bar; or hit bid into the absorption (advanced).  
- **Absorption long**: Mirror at lows; first uptick above minor resistance with positive delta.  
- Look for the regime **shift** in orderflow (absorption side exhausted; opposite side shows aggression).  
- A strong rejection candle with delta divergence can serve as a straightforward trigger.

### TA Invalidation
- Fresh extremes beyond the absorption zone (especially on closing basis or with strengthening delta) → exit fast.  
- If price churns without the expected reversal, consider scratching—these are typically **fast** plays.  
- Post-entry, if CVD flips against you decisively, reduce early.

### Targets
- First targets: return to value—VWAP/POC, base/midpoint of the launch.  
- If a larger reversal is likely (e.g., daily double top), hold a runner with trailing stops.  
- Scale out into opposing absorption near logical support/resistance.

### Confluence Checklist
- Combine orderflow with classical TA at **major** levels (round numbers, weekly levels).  
- CVD divergence **plus** volume spike at the turn; oscillator divergence helps.  
- Finished-auction tells on footprint; inter-market divergence boosts confidence.  
- Time-of-day confluence (e.g., equities’ 10:30–11:00 ET reversals).

### Trap Warnings
- False/fragmented divergence (crypto venue fragmentation): prefer aggregated data.  
- Small divergences can fail in strong trends—don’t counter every blip.  
- Late entries after the first drop/pop risk poor prices; prefer entries near extremes.  
- Double tests of the trap zone are common; plan exits/reattempts.  
- Sudden giant order/news can overrun absorption—hard stop discipline is critical.

> *Figure*: At session high, footprints printed huge buy volume but price couldn’t lift; CVD formed a lower peak as price made a marginal higher high. Break of local support triggered a swift drop to VWAP. *(placeholder)*

---
# Beginner → Expert Progression
_A step‑by‑step, TA‑only learning path for traders_

> **Purpose**  
> Build technical analysis skills from the ground up through concise modules. Each module ends with a **Readiness Checklist** and **Practice Drills** so you can validate skills before moving on.

---

## Legend (Emoji Callouts)

| Emoji | Meaning |
|---|---|
| 📌 | **Level** — important price level or zone |
| 🧭 | **Bias** — overall market direction context |
| 📈 | **Trend** — trend direction/structure |
| 🟦 | **HVN** — High Volume Node area |
| 🟨 | **LVN** — Low Volume Node area |
| 📊 | **POC** — Point of Control (volume) |
| ⚖️ | **VWAP** — Volume‑Weighted Average Price |
| 🕒 | **Session** — time/session factor |
| ⚠️ | **Trap** — liquidity trap / false break |
| 🔗 | **Confluence** — multiple factors align |

> **Format**  
> For each module you’ll: observe, draw/mark, validate. Keep charts clean and focus on the highest‑value signals.

---

<a id="introduction--overview"></a>
## Introduction & Overview

This path moves from **market structure** to **levels**, then adds **VWAP** and **Volume Profile** context, and finally **precision entries** (FVG/OB and traps). The endpoint is a **full, top‑down setup** where HTF context guides LTF execution with confluence.

**Modules at a glance**  
1) Swings & Structure → 2) HTF S/R → 3) VWAP → 4) Volume Profile (HVN/LVN/POC) → 5) FVG & OB → 6) Range Deviations & Reclaims → 7) Full Setup (HTF→LTF).

---

<a id="module-1--market-swings--structure"></a>
## Module 1 — Market Swings & Structure

### Concept Summary
Market structure is built from **swing highs** and **swing lows**. In an uptrend, price prints **higher highs + higher lows**; downtrends print **lower highs + lower lows**. Mapping prominent pivots (“the skeleton” of price) keeps you aligned with the prevailing **📈 trend** and filters noise.

### How to Apply (Step‑by‑Step)
1. **Observe major pivots (HTF first).** On Daily/4H, mark obvious peaks (swing highs) and troughs (swing lows). Use wicks or a line chart to isolate clear turns.  
2. **Draw the sequence.** Label highs **H** and lows **L**; connect to form the zig‑zag. A clean uptrend stair‑steps upward; overlap/flatness implies range.  
3. **Set 📈 bias.** Are highs/lows rising, falling, or mixed? Note **bullish / bearish / range‑bound**.  
4. **Validate with breaks of structure (BoS).** In uptrends, fresh breaks above prior swing highs confirm continuation; the opposite for downtrends.  
5. **Multi‑time‑frame map.** Nest LTF swings inside HTF structure. Let HTF bias lead; use LTF to time entries.  
6. **Update in real time.** Track new swing formations or violations (change of character).

### Readiness Checklist
- Identify swing points quickly (ignore minor wiggles).  
- Determine trend at a glance via swing sequence.  
- Spot BoS and infer continuation vs. potential reversal.  
- Maintain HTF bias while reading LTF pullbacks.

### Practice Drills
- **Blind chart marking:** 3–6 months of swings on 5 different instruments.  
- **Trend‑change replay:** Bar‑by‑bar until the structure flips.  
- **HTF↔LTF nesting:** Compare Daily vs. 1H swings.  
- **Daily bias log:** Record bias at open/close for two weeks.  
- **Weak vs. strong highs/lows:** Label and review outcomes.

---

<a id="module-2--high-timeframe-sr"></a>
## Module 2 — High Time‑Frame S/R

### Concept Summary
**Support** is where declines tend to stall; **resistance** is where rallies exhaust. HTF levels (Daily/4H/Weekly) are decision zones many watch. Breaks can flip roles (support ↔ resistance). These are your **📌 landmarks** for planning entries/exits and anticipating reactions.

### How to Apply (Step‑by‑Step)
1. **Zoom out (HTF).** 200+ bars to see major extremes.  
2. **Mark only the obvious.** Prior swing highs/lows, multi‑touch zones, breakout origins. If you must squint, skip it.  
3. **Tune zones, not single ticks.** Shade a band that catches most touches.  
4. **Label & style.** Differentiate **HTF** levels so they stand out on LTF charts.  
5. **Study behavior at level.** Reversals? Consolidations? Fake‑outs then reclaims? Annotate character.  
6. **Think liquidity.** Key highs/lows = stop clusters. Expect either holds or stop‑runs before reversals.  
7. **Refresh periodically.** Add/remove levels as structure evolves.

### Readiness Checklist
- Rapidly mark major HTF S/R and judge relative significance.  
- Explain **S/R flips** with examples.  
- Anticipate reactions; avoid trading **into** strong S/R blindly.  
- Keep HTF levels visible and central to plans.

### Practice Drills
- **Historical mapping** → then play forward to validate.  
- **Reaction logs** at the most significant level per instrument.  
- **S/R‑flip scrapbook** with retest notes.  
- **Daily anticipation**: plan for one HTF support and one HTF resistance in play.  
- **Cross‑check** S/R against Module 1 swings for consistency.

---

<a id="module-3--vwap--volume-weighted-average-price"></a>
## Module 3 — VWAP (Volume‑Weighted Average Price)

### Concept Summary
**VWAP** is the session’s **volume‑weighted mean**. Above VWAP = bullish intraday **bias**; below = bearish. On **trend days**, price rides one side of VWAP (VWAP acts as dynamic S/R). On **range days**, price whips around VWAP. Extensions often **mean‑revert** toward VWAP; standard‑deviation bands can quantify extremes.

### How to Apply (Step‑by‑Step)
1. **Add VWAP** on your intraday chart (daily/session reset).  
2. **Note position vs VWAP** (instant intraday bias). Gauge distance (balanced vs stretched).  
3. **Treat VWAP as dynamic S/R.** Observe bounces/rejections during active sessions 🕒.  
4. **Classify day type.** One‑side ride = trend day; frequent crosses = range/low‑conviction day.  
5. **Watch deviations.** Large stretch → caution on chasing; expect pullbacks/sideways.  
6. **Anchored VWAP (optional).** Anchor from major pivots or events; treat as evolving S/R.  
7. **Blend with HTF context** and S/R for **🔗 confluence**.

### Readiness Checklist
- State intraday bias immediately from VWAP.  
- Use VWAP touches as structured entries/exits.  
- Identify day type and adapt tactics.  
- Avoid chasing far‑from‑VWAP extremes.  
- Combine VWAP with HTF levels and triggers.

### Practice Drills
- **10‑day VWAP journal** (bias, crosses, outcomes).  
- **Bounce hunt**: collect clean VWAP interactions.  
- **σ‑band experiment** for intraday extremes.  
- **Anchored VWAP case study** from a key pivot.  
- **Integrate VWAP** explicitly in 5 paper trade plans.

---

<a id="module-4--volume-profile--auction-concepts"></a>
## Module 4 — Volume Profile (Auction Concepts)

### Concept Summary
Volume Profile plots **volume by price**.  
- **🟦 HVN** = value/consensus zones; price slows/congests (magnet‑like).  
- **🟨 LVN** = rejection/imbalance zones; price often moves quickly through or sharply rejects.  
- **📊 POC** = single highest‑volume price (strongest magnet).  
The **Value Area** (around POC) offers VAH/VAL boundaries that can act as S/R.

### How to Apply (Step‑by‑Step)
1. **Choose scope.** Session, fixed range, swing, weekly/monthly composite.  
2. **Plot profile.** Identify **📊 POC**, large **🟦 HVNs**, and clear **🟨 LVNs**; annotate.  
3. **Read HVNs.** Expect balance/congestion; act as S/R and magnets (POC especially).  
4. **Read LVNs.** Expect fast traversals or sharp pivots—use context to judge.  
5. **Use Value Area (optional).** Prior VAH/VAL can guide trend vs balance expectations.  
6. **Map the path.** Anticipate travel from value to value through thin zones.  
7. **Update routinely.** Session profiles for day trade; composites for swing/HTF.

### Readiness Checklist
- Define HVN/LVN/POC and spot them quickly.  
- Infer support/resistance and likely pacing from the profile shape.  
- Plan entries/targets with POC/HVN magnets and LVN “air pockets.”  
- Distinguish value (balance) vs imbalance (trend).

### Practice Drills
- **Static profile analysis** without prices; then reveal and compare.  
- **Replay with cumulative profile**; predict path across HVN↔LVN.  
- **POC tag game:** log retests acting as S/R.  
- **Composite vs. session**: write a short report per instrument.  
- **Mix with TA levels** to find 3 strong confluences + 1 “profile‑only” insight.

---

<a id="module-5--fair-value-gaps--order-blocks"></a>
## Module 5 — Fair Value Gaps & Order Blocks

### Concept Summary
- **FVG (Fair Value Gap):** three‑candle **imbalance** where price left a void; later tends to retrace into it (magnet).  
- **OB (Order Block):** last opposite‑colored **base candle** before an impulsive, structure‑breaking move—often defended on retests.  
Use FVG/OB to **let price come to you** for high‑RR pullbacks—best when aligned with HTF bias and often overlapping for **🔗 confluence**.

### How to Apply (Step‑by‑Step)
1. **Find an impulse** that breaks structure; mark the swing.  
2. **Mark the OB** (last down candle pre‑rally for longs; last up candle pre‑dump for shorts). Draw a zone.  
3. **Mark the FVG** created by the fast move (the non‑overlap gap). Draw a zone.  
4. **Observe retrace.** Note whether price taps OB, partially/fully fills FVG, and reaction strength.  
5. **Entry at the zone.** Look for LTF confirmation (engulf, CHoCH) inside the zone; tight stop just beyond the OB or swept swing.  
6. **Stack confluence.** OB + FVG + Fib cluster + HTF S/R = higher probability.  
7. **Scale to HTF.** Weekly/daily imbalances are powerful and precise.

### Readiness Checklist
- Spot OB/FVG quickly and draw zones cleanly.  
- Explain why they work (imbalance re‑balancing and institutional defense).  
- Prefer patient pullbacks over chasing.  
- Integrate with structure and HTF S/R.  
- Place logical stops/targets around zones (tight, informed risk).

### Practice Drills
- **Imbalance library:** 10 filled FVGs + 10 reactive OBs with outcomes.  
- **Replay pullback trading** using only OB/FVG entries.  
- **Confluence scavenger hunt** (OB∩FVG±Fib±S/R±Profile).  
- **Forward journal**: track live OB/FVG setups and results.  
- **Trigger refinement:** define your confirmation rules at zone touch.

---

<a id="module-6--range-deviations--reclaims-false-breakouts"></a>
## Module 6 — Range Deviations & Reclaims (False Breakouts)

### Concept Summary
A **false breakout** (liquidity sweep/SFP) occurs when price **deviates** beyond a key level/range and **reclaims** it, trapping breakout traders (⚠️). After reclaim, price often traverses to the **opposite side** of the range—fast. This setup unites **liquidity** thinking with S/R and session timing.

### How to Apply (Step‑by‑Step)
1. **Define the range/level.** Obvious HTF range or prior day’s high/low; mark boundaries.  
2. **Watch the deviation.** Price pokes beyond but fails to accept/hold; wick‑and‑snap or close back inside. Mark the sweep extreme.  
3. **Confirm the reclaim.** Close/hold back inside the range or under/over the level.  
4. **Execute the trap trade.** Enter on reclaim; stop beyond the sweep extreme; target the other side of the range (or midpoint/next S/R).  
5. **Read volume/speed clues.** Weak breakout participation or climactic wick → higher trap odds.  
6. **Best contexts:** rangebound markets, late‑trend blow‑offs, session opens/news whipsaws.  
7. **Don’t get trapped.** Wait for reclaim confirmation instead of chasing first breaks.

### Readiness Checklist
- Pick clean levels with obvious stop pools.  
- Recognize trap behavior **in real time**.  
- Execute a predefined reclaim plan and accept the contrarian feel.  
- Tie trap power to context (HTF level, session timing, broader trend).

### Practice Drills
- **Trap archive:** 10+ bullish & bearish examples with stats.  
- **Range replay:** wait for reclaim before acting; score avoided losses/wins.  
- **LTF execution:** study 5m/15m patterns at the reclaim moment.  
- **Combine with OB/FVG** for stacked traps.  
- **Forward tracking:** mark PDH/PDL breaks and log success vs failure.

---

<a id="module-7--full-setup-application-htf--ltf"></a>
## Module 7 — Full Setup Application (HTF → LTF)

### Concept Summary
Stack everything into a **top‑down workflow**:  
**HTF 📈 bias** → **📌 S/R & liquidity** → **📊 Volume Profile & ⚖️ VWAP** context → **🕒 timing** → **LTF trigger** (⚠️ reclaim, OB/FVG pullback, or clean structure shift). Only act when **multiple reasons** align (**🔗 confluence**).

### Example Workflow (Step‑by‑Step)
1. **HTF Scan (Daily/4H).** Identify trend and likely liquidity target (“which high/low next?”). Mark key S/R, HTF OB/FVG, and profile context (HVN/LVN/POC).  
2. **HTF Plan.** Define thesis: _direction_, _area of interest_, _target(s)_.  
3. **Drill down to LTF (1H→15m→5m).** Look for aligned triggers at your location: reclaim after sweep, OB/FVG touch + LTF shift, VWAP support/resistance, session catalyst 🕒.  
4. **Execute with precision.** Enter on reclaim/trigger; stop beyond invalidation (sweep low/high or OB edge). Scale targets: interim levels → primary liquidity target.  
5. **Manage & review.** Take partials at HVNs/midpoints, trail after key breaks, and debrief post‑trade to refine which layers mattered most.

### Readiness Checklist
- Start every idea from HTF and require **confluence** before entry.  
- Adapt emphasis (e.g., traps at range edges vs OB/FVG in trends).  
- Act decisively when criteria align; skip when they don’t.  
- Be comfortable with **no‑trade** when signals conflict.

### Practice Drills
- **Weekly roadmap**: bias, levels, scenarios per market.  
- **Case‑study journals** of multi‑factor trades.  
- **Simulate & score** only high‑confluence entries.  
- **Peer/buddy review** (or self‑audit) of a live idea.

---

<a id="personal-pretrade-checklist"></a>
## Personal Pre‑Trade Checklist

Use this before every trade for a month (make it habit):

- [ ] **HTF bias clear?** (trend & likely liquidity target)  
- [ ] **Location good?** (HTF 📌 S/R, OB/FVG, profile HVN/LVN/POC)  
- [ ] **Signal present?** (⚠️ reclaim, OB/FVG touch with LTF confirmation, or structure shift)  
- [ ] **VWAP/Volume context?** (above/below; day type; extensions)  
- [ ] **Session timing considered?** (open/close/news catalysts)  
- [ ] **Risk defined?** (invalidating level; tight, logical stop)  
- [ ] **Targets mapped?** (interim → primary liquidity/level)  
- [ ] **Management plan?** (partials, trail rules, review notes)

---

### Notes
This curriculum is **TA‑focused** by design—psychology and money management are intentionally out of scope so you can master the technical craft first. Reinforce each module with its **Readiness Checklist** and **Practice Drills** before advancing.
