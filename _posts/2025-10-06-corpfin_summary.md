---
layout: post
title: "Connecting the Dots in Corporate Finance: From EBITDA to FCF and from WACC to IRR"
date: 2025-10-06
categories: finance valuation corpfin
use_math: true
---

Corporate finance often feels like a web of acronyms — **EBITDA**, **EBIT**, **EBIAT**, **FCF**, **WACC**, **IRR**, **hurdle rate** — that all seem connected but not quite clear.  
This guide stitches them together into two intuitive chains:

1. **How operating profits translate into cash flows (EBITDA → FCF)**  
2. **How investor required returns translate into project evaluation (rE → WACC → IRR)**

---

## 🧩 Part 1: From EBITDA to Free Cash Flow (FCF)

The goal of this chain is to track **how accounting profit turns into real cash** that investors can receive.

### The Income Statement Flow

| Step | Metric | Description |
|------|---------|-------------|
| **Revenue (Sales)** | Money from operations |
| – COGS, SG&A | Operating expenses |
| **= EBITDA** | *Earnings Before Interest, Taxes, Depreciation, and Amortization* — operating profit before non-cash and financing effects |
| – Depreciation & Amortization | Non-cash charges for asset usage |
| **= EBIT** | *Earnings Before Interest and Taxes* — also called *Operating Income* |
| – Taxes on EBIT | $ t_C \times EBIT $ |
| **= EBIAT (or NOPAT)** | *Earnings Before Interest After Taxes* — after-tax profit from operations |
| + Depreciation | Add back non-cash expense |
| – Δ Working Capital | Subtract additional cash tied in operations |
| – Capital Expenditures | Subtract investments in assets |
| **= Free Cash Flow (FCF)** | Cash available to all capital providers |

### Formula Summary

$$
EBIAT = EBIT \times (1 - t_C)
$$

$$
FCF = EBIAT + Dep - \Delta NWC - CapEx
$$

### Example

| Item | Amount (\$) |
|------|-------------|
| Sales | 10,000 |
| COGS + SG&A | 7,000 |
| Depreciation | 500 |
| **EBIT** | 2,500 |
| Taxes (30%) | 750 |
| **EBIAT** | 1,750 |
| + Depreciation | +500 |
| – CapEx | –800 |
| – ΔNWC | –200 |
| **Free Cash Flow** | **1,250** |

**Interpretation:**  
EBITDA shows *earnings capacity*, EBIT shows *operating profit*, EBIAT shows *after-tax operations*, and FCF shows *actual cash generation* — the foundation for firm value in DCF models.

---

## 💰 Part 2: From Cost of Capital to IRR and Hurdle Rate

Once you have FCF, you need a **discount rate** to value it.  
That’s where **cost of capital** concepts link together.

### The Investor’s Perspective

| Term | Represents | Formula / Logic |
|------|-------------|----------------|
| **Cost of Equity ($r_E$)** | Return required by shareholders | $ r_E = r_f + \beta_E (r_M - r_f) $ |
| **Cost of Debt ($r_D$)** | Interest rate paid to lenders | after-tax: $ r_D(1 - t_C) $ |
| **Weighted Average Cost of Capital (WACC)** | Firm’s overall required return | $$ WACC = \frac{E}{V}r_E + \frac{D}{V}r_D(1 - t_C) $$ |
| **Cost of Capital ($r_A$)** | Unlevered return on assets | $ r_A = \frac{E}{V}r_E + \frac{D}{V}r_D $ |
| **Internal Rate of Return (IRR)** | Project’s expected rate of return | Solves $ NPV = 0 $ |
| **Hurdle Rate** | Manager’s minimum acceptable rate | Typically ≥ WACC |

### Example

Assume:
- $r_f = 3\%$, $\beta_E = 1.2$, $(r_M - r_f) = 7\%$
- $r_D = 6\%$, $t_C = 30\%$
- $E/V = 70\%$, $D/V = 30\%$

$$
\begin{aligned}
r_E &= 3 + 1.2(7) = 11.4\% \\
r_D(1 - t_C) &= 6(1 - 0.3) = 4.2\% \\
WACC &= 0.7(11.4) + 0.3(4.2) = 9.42\%
\end{aligned}
$$

If a project’s **IRR = 12%**,  
then $ IRR > WACC $ → **accept** (NPV > 0).  

Firms often add a cushion (the “hurdle rate”), e.g. target 14%, to account for risk or strategic conservatism.

---

## 🧩 Conceptual Chain

EBITDA → EBIT → EBIAT → FCF → Firm Value  
↑ ↓  
rE, rD → WACC → Hurdle Rate → IRR → Investment Decision

**Decision rule:**

$$
IRR > WACC \implies NPV > 0 \implies \text{Value creation.}
$$

---

## 💬 Key Takeaways

- **EBITDA → FCF** traces how accounting profits become cash flows.  
- **rE / rD → WACC → IRR** traces how investor expectations become decision rules.  
- Together, they connect operations to value — the central idea of corporate finance.

> “Finance is just converting *earnings* to *cash flows* and *risk* to *discount rates* — and making sure the second exceeds the first.”

---

**Tags:** `#CorporateFinance` `#Valuation` `#WACC` `#EBITDA` `#DCF`
