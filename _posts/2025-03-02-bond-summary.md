---
title: "Understanding Bond Valuation and Arbitrage"
layout: post
date: 2025-03-02
use_math: true
tags: [finance, bonds, arbitrage]
---

## Key Learnings from Bond Valuation and Arbitrage

### 1. **Present and Future Value Concepts**
- When moving **forward in time**, we **compound** (value increases):  
  $$FV = PV (1 + r)^t$$
- When moving **backward in time**, we **discount** (value decreases):  
  $$PV = \frac{FV}{(1 + r)^t}$$

### 2. **Bond Valuation Formula**
For a **coupon bond**, the present value is calculated as:

$$B_0 = \sum \frac{C}{(1+i)^t} + \frac{F}{(1+i)^N}$$

where:
- $C$ = Coupon payment
- \( i \) = Discount rate
- \( F \) = Face value
- \( N \) = Total number of periods

For a **zero-coupon bond**:

$$PV = \frac{F}{(1 + i)^N}$$

### 3. **Yield to Maturity (YTM)**
- The rate \( i \) at which the present value of all future cash flows equals the bond price.
- Can be solved using numerical methods when not explicitly given.

### 4. **Arbitrage in Bonds**
- If two bonds with **identical risk and maturity** have **different yields**, arbitrage exists.
- Example: If a **coupon bond is overpriced**, short-sell it and buy an equivalent portfolio of **zero-coupon bonds**.
- If a **coupon bond is underpriced**, buy it and short the corresponding zero-coupon bonds.

### 5. **Impact of Interest Rate Changes**
- **If rates increase**, bond prices **decrease** (discounting effect stronger).
- **If rates decrease**, bond prices **increase** (lower discounting effect).
- In a portfolio, a decrease in rates can **benefit long-term bonds**.

### 6. **Mortgage and Annuities**
- Mortgage payments are structured such that interest is **higher at the start** and principal repayment increases over time.
- Present value of an annuity formula:

$$PV = \frac{C}{i} \left[1 - \frac{1}{(1+i)^N} \right]$$

where \( C \) is the periodic payment.

### 7. **Comparing Payment Structures**
- Receiving money **in installments vs. lump sum** involves time value of money calculations.
- If given an **option between monthly payments and a year-end lump sum**, calculate the **future value** of installments to make a fair comparison.

---
This summary provides an overview of key concepts covered in bond valuation, interest rates, arbitrage, and present/future value calculations.
