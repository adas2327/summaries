---
layout: post
title: "Stocks and Diversification: Key Formulas and Concepts"
date: 2025-03-12
categories: finance investing
---

## Chapter 1: Stocks

### Definition of Stocks
A **stock** represents ownership in a company and gives the shareholder voting rights. Stocks provide returns through **dividends** and **capital appreciation**.

### Stock Valuation Formulas

#### **1. One-Year Valuation Formula**
For an investor holding a stock for one year:

$$
P_0 = \frac{D_1 + P_1}{1 + r_e}
$$

where:
- $P_0$ = current stock price
- $D_1$ = expected dividend at year-end
- $P_1$ = expected stock price at year-end
- $r_e$ = required rate of return

#### **2. Dividend Discount Model (DDM)**
If an investor holds the stock indefinitely, the **infinite horizon DDM** applies:

$$
P_0 = \sum_{t=1}^{\infty} \frac{D_t}{(1 + r_e)^t}
$$

where $D_t$ is the dividend expected at time $t$.

#### **3. Constant Growth Dividend Model (Gordon Growth Model)**
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

#### **4. Stock Price and Earnings Relationship**
$$
P_0 = \frac{\text{EPS}_1}{r_e} + PV(\text{Growth Opportunities})
$$

where:
- $\text{EPS}$ = earnings per share
- $PV(\text{Growth Opportunities})$ = Present value of future investment opportunities.

**Key Nuance**: A **higher P/E ratio** may indicate:
- A low discount rate ($r_e$)
- High expected growth ($g$)
- A riskier stock with uncertain earnings.

### Important Considerations
- Stocks are riskier than bonds because shareholders receive residual cash flows after debt holders.
- **Short Selling**: Selling borrowed stock, requiring margin accounts and repayment of dividends.
- **Stock Market Indices**: Measure performance (e.g., S&P 500, NASDAQ, Dow Jones).

---

## Chapter 2: Diversification

### Portfolio Return and Risk

#### **1. Expected Return of a Portfolio**
$$
E(R_p) = w_1 E(R_1) + w_2 E(R_2) + ... + w_n E(R_n)
$$

where $w_i$ is the weight of asset $i$.

#### **2. Portfolio Variance**
For a two-asset portfolio:

$$
\sigma_p^2 = w_1^2 \sigma_1^2 + w_2^2 \sigma_2^2 + 2w_1w_2 \rho_{12} \sigma_1 \sigma_2
$$

where:
- $\sigma_p^2$ = variance of portfolio
- $\rho_{12}$ = correlation between assets.

#### **3. Minimum Variance Portfolio**
When two assets are **perfectly negatively correlated** ($\rho = -1$), it is possible to construct a **risk-free portfolio**.

$$
w_1 = \frac{\sigma_2}{\sigma_1 + \sigma_2}, \quad w_2 = \frac{\sigma_1}{\sigma_1 + \sigma_2}
$$

#### **4. Sharpe Ratio (Risk-Adjusted Return)**
$$
S = \frac{E(R_p) - R_f}{\sigma_p}
$$

where:
- $R_f$ = risk-free rate.
- A higher **Sharpe Ratio** means a better risk-adjusted return.

#### **5. Diversification Effect**
- Adding assets with low or negative correlation reduces portfolio volatility.
- **Key Observation**: As the number of assets increases, **idiosyncratic risk** (firm-specific risk) approaches zero, leaving only **systematic risk**.

---

## Key Takeaways for Exams
- **Memorize and practice the Gordon Growth Model**, as it is a common question type.
- **Be cautious with stock growth assumptions**: if $g > r_e$, the model breaks down.
- **For portfolio risk problems**, always check correlation $ \rho $. If $\rho = -1$, a zero-risk portfolio is possible.
- **If dividends are irregular**, use multi-stage models for stock valuation.
- **Sharpe Ratio is crucial**: Always compare investments on a risk-adjusted basis.

This summary captures the most essential **formulas and concepts** needed for problem sets and exams. Happy studying!
