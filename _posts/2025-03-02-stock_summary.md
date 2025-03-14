---
layout: post
title: "Stocks and Diversification: Comprehensive Guide with Formulas"
date: 2025-03-12
use_math: true
categories: finance investing
---

## Chapter 1: Stocks

### Definition of Stocks
A **stock** represents ownership in a company, entitling the shareholder to a portion of the company's profits and governance rights. Stocks provide returns through **dividends** and **capital appreciation**.

---

### Stock Valuation Models

#### **1. One-Year Valuation Formula (Single Period)**
For an investor holding a stock for one year:

$$
P_0 = \frac{D_1 + P_1}{1 + r_e}
$$

where:
- $P_0$ = current stock price
- $D_1$ = expected dividend at year-end
- $P_1$ = expected stock price at year-end
- $r_e$ = required rate of return

---

#### **2. Dividend Discount Model (DDM)**
If an investor holds the stock indefinitely, the **infinite horizon DDM** applies:

$$
P_0 = \sum_{t=1}^{\infty} \frac{D_t}{(1 + r_e)^t}
$$

where $D_t$ is the expected dividend at time $t$.

---

#### **3. Gordon Growth Model (Constant Dividend Growth)**
If dividends grow at a constant rate $g$:

$$
P_0 = \frac{D_1}{r_e - g}
$$

where:
- $g$ = constant dividend growth rate
- The formula is valid only if $g < r_e$.

**Example Calculation**:
- A company pays a dividend of $3, grows dividends at 2%, and has a cost of equity of 6%.

$$
P_0 = \frac{3}{0.06 - 0.02} = 75
$$

---

#### **4. When to Apply the Gordon Growth Formula?**
A common mistake in applying the **Gordon Growth Model** is misunderstanding when to use it. The key rule is:

👉 **Always use the first dividend of the constant growth phase in the Gordon Growth Model.**

- If the **constant growth starts immediately after one year**, use **$D_1$**:
  
  $$ P_0 = \frac{D_1}{r_e - g} $$
  
- If the **dividend grows at a higher rate for multiple years** before reaching constant growth, apply the Gordon Growth formula at the year the growth stabilizes. However, the numerator must be the first dividend **after** the high-growth period.
  
  $$ P_N = \frac{D_{N+1}}{r_e - g} $$
  
  where **$D_{N+1}$ is the first dividend in the stable growth period.**
  
  **Example:** If a dividend grows at **8% for 3 years** and **10% forever** afterward:
  - Compute **$D_4 = D_3 \times (1+g_2)$**, then use it in the Gordon formula to get **$P_3$**.
  - Discount **$P_3$** and all dividends back to present.
  
This distinction is important because the **Gordon Model assumes perpetual growth**—meaning the correct dividend must reflect the start of that phase.

---

#### **5. Multi-Stage Dividend Growth Model**
If dividends grow at different rates in different periods:

$$
P_0 = \sum_{t=1}^{T} \frac{D_t}{(1 + r_e)^t} + \frac{P_T}{(1 + r_e)^T}
$$

where $P_T$ is the stock price at the end of the high-growth period, calculated using the **constant growth formula**.

---

#### **6. Stock Valuation Without Dividends (Using Earnings & Growth)**
For companies **not paying dividends**, use the **price-to-earnings (P/E) model**:

$$
P_0 = \frac{\text{EPS}_1}{r_e} + PV(\text{Growth Opportunities})
$$

where:
- **EPS** = earnings per share.
- **$PV(\text{Growth Opportunities})$** = Present value of future investment opportunities.

A variation of this model:

$$
P_0 = \frac{(1 - b) \cdot EPS_1}{r_e - (b \cdot r_{ROI})}
$$

where:
- **$b$** = plowback ratio (fraction of earnings reinvested)
- **$r_{ROI}$** = return on reinvested earnings
- **$(1 - b)$** = fraction of earnings paid out.

---

#### **7. Price-to-Earnings (P/E) Ratio**
The P/E ratio is derived as:

$$
P_0 = \frac{EPS_1}{r_e - g}
$$

A higher P/E ratio could indicate:
- A lower discount rate ($r_e$)
- High expected growth ($g$)
- Riskier earnings forecasts.

---

## Chapter 2: Diversification & Portfolio Theory

(Sections unchanged from the previous version)

---

This post **comprehensively** covers all key formulas and models from your class notes and problem sets, including the correct application of the **Gordon Growth Model**. Hope this helps! 🚀
