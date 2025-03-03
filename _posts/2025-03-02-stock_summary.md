---
layout: post
title: "Stock Valuation Summary"
date: 2025-03-02
use_math: true
---
## Stock Valuation Summary
### 1. Equity Securities
- Stocks represent ownership in a company.
- Shareholders have voting rights and may receive dividends (not fixed or guaranteed).
- Stocks are riskier than bonds due to their residual claim on earnings.

### 2. Stock Transactions
- **Buying (Long Position)**: Investors buy stocks expecting price appreciation.
- **Selling**: Done for liquidity needs or to cut losses.
- **Short Selling**: Borrowing shares, selling them, and buying back later at a lower price (high-risk strategy).

### 3. Stock Valuation Models

#### 3.1 One-Year Holding Model
$$
P_0 = \frac{D_1 + P_1}{1 + r_e}
$$
- **$$P_0$$**: Stock price today  
- **$$D_1$$**: Expected dividend  
- **$$P_1$$**: Expected price after one year  
- **$$r_e$$**: Expected return  

#### 3.2 Dividend Discount Model (DDM)
- Extending the one-year model:
$$
P_0 = \sum_{t=1}^{\infty} \frac{D_t}{(1 + r_e)^t}
$$
- If dividends grow at a constant rate $$g$$, it simplifies to:
$$
P_0 = \frac{D_1}{r_e - g}
$$
*(Gordon Growth Model)*

### 4. Growth and Earnings Valuation

#### 4.1 No-Growth Case
If earnings remain constant and all are paid as dividends:
$$
P_0 = \frac{EPS_1}{r_e}
$$

#### 4.2 Growth Case
$$
P_0 = \frac{(1 - b) \cdot EPS_1}{r_e - (b \cdot r_{ROI})}
$$
- **$$ b $$** = Plowback ratio (retained earnings)  
- **$$ r_{ROI} $$** = Return on new investments  
- **Key Insight**: Stock value increases only if **$$ r_{ROI} > r_e $$** (profitable growth).  

### 5. Alternative Valuation Methods for Non-Dividend Stocks

#### 5.1 Discounted Free Cash Flow (DCF) Model
Used when companies do not pay dividends. Values a firm based on its free cash flows (FCF):

$$
V_0 = \sum_{t=1}^{T} \frac{FCF_t}{(1 + r)^t} + \frac{V_T}{(1 + r)^T}
$$

- **Enterprise Value Calculation:**
$$
\text{Enterprise Value} = \sum \frac{FCF_t}{(1 + r)^t} + \frac{V_T}{(1 + r)^T}
$$

- **Market value of equity:**
$$
\text{Market value of equity} = \text{Enterprise value} + \text{Cash} - \text{Debt}
$$

- **Stock price calculation:**
$$
P_0 = \frac{V_0 + \text{Cash} - \text{Debt}}{\text{Shares outstanding}}
$$

#### 5.2 Price-Earnings (P/E) Ratio Method
$$
P_0 = EPS_1 \times P/E
$$
- **Higher P/E**: Growth stock with expected future earnings increase.  
- **Lower P/E**: Mature company with stable earnings.  

#### 5.3 Enterprise Value (EV) Multiples
$$
EV = \frac{FCF_1}{r - g}
$$
- Used when firms have different capital structures.

### 6. Payout Methods: Dividends vs. Buybacks
- **Dividends**: Paid to shareholders, stock price drops by the dividend amount.
- **Share Buybacks**: Reduces shares outstanding, increasing per-share earnings.

### 7. Summary of Valuation Approaches

| **Method** | **Key Focus** | **Formula** |
|------------|--------------|------------|
| Dividend Discount Model | Future dividends | $$ P_0 = \frac{D_1}{r_e - g} $$ |
| P/E Ratio Method | Market comparison | $$ P_0 = EPS \times P/E $$ |
| Free Cash Flow Model | Total firm value (EV) | $$ EV = \sum \frac{FCF_t}{(1 + r)^t} $$ |

This document summarizes the key stock valuation models covered in the class notes.
