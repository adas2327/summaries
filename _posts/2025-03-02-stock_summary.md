---
layout: post
title: "Stocks and Diversification: Comprehensive Guide with Formulas"
date: 2025-03-12
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

#### **4. Multi-Stage Dividend Growth Model**
If dividends grow at different rates in different periods:

$$
P_0 = \sum_{t=1}^{T} \frac{D_t}{(1 + r_e)^t} + \frac{P_T}{(1 + r_e)^T}
$$

where $P_T$ is the stock price at the end of the high-growth period, calculated using the **constant growth formula**.

---

#### **5. Stock Valuation Without Dividends (Using Earnings & Growth)**
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

#### **6. Price-to-Earnings (P/E) Ratio**
The P/E ratio is derived as:

$$
P_0 = \frac{EPS_1}{r_e - g}
$$

A higher P/E ratio could indicate:
- A lower discount rate ($r_e$)
- High expected growth ($g$)
- Riskier earnings forecasts.

---

### Special Cases in Stock Valuation

#### **Stock with No Growth**
For stocks with constant earnings and no reinvestment:

$$
P_0 = \frac{EPS_1}{r_e}
$$

**Example Calculation**:
- A stock earns **$9 per year** with a **required return of 10%**.
- If **earnings are constant**, the stock price is:

$$
P_0 = \frac{9}{0.10} = 90
$$

---

## Chapter 2: Diversification & Portfolio Theory

### Expected Return & Risk in Portfolios

#### **1. Portfolio Expected Return**
The expected return of a portfolio is:

$$
E(R_p) = w_1 E(R_1) + w_2 E(R_2) + ... + w_n E(R_n)
$$

where $w_i$ is the weight of asset $i$.

---

#### **2. Portfolio Variance (Two Assets)**
For a **two-asset portfolio**, the variance is:

$$
\sigma_p^2 = w_1^2 \sigma_1^2 + w_2^2 \sigma_2^2 + 2w_1 w_2 \rho_{12} \sigma_1 \sigma_2
$$

where:
- $\rho_{12}$ = correlation between the two assets.

If **$\rho_{12} = -1$**, it is possible to construct a **zero-risk portfolio**.

---

#### **3. Minimum Variance Portfolio**
The **minimum variance portfolio** is the allocation that minimizes risk:

$$
w_1 = \frac{\sigma_2^2 - \rho \sigma_1 \sigma_2}{\sigma_1^2 + \sigma_2^2 - 2 \rho \sigma_1 \sigma_2}
$$

$$
w_2 = 1 - w_1
$$

where:
- $w_1$, $w_2$ are portfolio weights.
- $\sigma_1$, $\sigma_2$ are asset volatilities.
- $\rho$ is the correlation coefficient.

---

#### **4. Sharpe Ratio (Risk-Adjusted Return)**
Used to compare investments:

$$
S = \frac{E(R_p) - R_f}{\sigma_p}
$$

where:
- $R_f$ = risk-free rate.
- A higher Sharpe Ratio indicates a **better risk-adjusted return**.

---

#### **5. Diversification Benefit**
Adding assets with **low or negative correlation** **reduces portfolio volatility**.

**Key Observation**: As the number of assets increases, **idiosyncratic risk** (firm-specific risk) approaches zero, leaving only **systematic risk**.

---

#### **6. Efficient Frontier & CAPM**
- **Capital Market Line (CML)**: Investors should hold a **combination of the risk-free asset and the market portfolio**.
- **Security Market Line (SML)**: Expected return depends on **systematic risk (beta)**.

$$
E(R_i) = R_f + \beta_i (E(R_m) - R_f)
$$

where:
- $\beta_i$ = measure of systematic risk.
- $E(R_m)$ = expected return of the market.

---

## Key Takeaways for Exams
- **Memorize and practice the Gordon Growth Model** for dividend-paying stocks.
- **For non-dividend stocks**, use the **Earnings-based models**.
- **For portfolio risk problems**, always check correlation ($\rho$).
- **If $\rho = -1$**, a zero-risk portfolio is possible.
- **Understand CAPM & Sharpe Ratio** for risk-adjusted returns.

---

This post **comprehensively** covers all key formulas and models from your class notes and problem sets. Hope this helps! 🚀
