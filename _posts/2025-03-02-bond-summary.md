---
title: "Comprehensive Guide to Bond, Annuity, and Perpetuity Formulas"
layout: post
date: 2025-03-14
use_math: true
categories: [Finance]
---

# Bond, Annuity, and Perpetuity Formulas

This guide provides all the essential formulas for bonds, annuities, and perpetuities, including their growing variations. 

## **Bond Valuation**

### **Zero-Coupon Bond**
A zero-coupon bond pays no periodic interest and is valued using:

$$ B = \frac{F}{(1 + r)^N} $$

where:
- $B$ = price of the bond
- $F$ = face value
- $r$ = discount rate per period
- $N$ = number of periods until maturity

### **Coupon Bond**
A bond that pays periodic coupons can be valued as the sum of the present values of its annuity payments and final face value:

$$ B = \sum_{t=1}^{N} \frac{C}{(1+r)^t} + \frac{F}{(1+r)^N} $$

or using the annuity formula:

$$ B = C \cdot \frac{1 - (1 + r)^{-N}}{r} + \frac{F}{(1 + r)^N} $$

where:
- $C$ = coupon payment
- $F$ = face value
- $N$ = number of periods
- $r$ = discount rate per period

## **Annuities**

### **Ordinary Annuity (Fixed Payments, Fixed Period)**

$$ PV = C \cdot \frac{1 - (1 + r)^{-N}}{r} $$

### **Growing Annuity**
For an annuity where payments grow at a constant rate $g$:

$$ PV = \frac{C}{r - g} \times \left(1 - \left(\frac{1+g}{1+r}\right)^N \right) $$

where:
- $C$ = first payment
- $r$ = discount rate per period
- $g$ = growth rate per period
- $N$ = number of periods

## **Perpetuities**

### **Regular Perpetuity**
For a perpetual stream of fixed payments:

$$ PV = \frac{C}{r} $$

### **Growing Perpetuity**
For payments that grow at a constant rate $g$:

$$ PV = \frac{C}{r - g} $$

### **Continuously Growing Perpetuity**
When payments grow continuously rather than at discrete intervals:

$$ PV = \frac{C e^{g t}}{r - g} $$

where:
- $C$ = initial payment
- $r$ = discount rate
- $g$ = continuous growth rate
- $t$ = time period

### **Difference Between Discrete and Continuous Growth Perpetuities**
- The **growing perpetuity formula** assumes payments grow at fixed intervals (e.g., annually, quarterly).
- The **continuously growing perpetuity formula** assumes payments grow at every instant, leading to an exponential growth pattern.
- If growth is continuous, a larger upfront contribution is needed to sustain increasing payments.

## **Key Comparisons**

| Formula Type         | Growth | Finite (Annuity) or Infinite (Perpetuity)? |
|----------------------|--------|-------------------------------------------|
| Zero-Coupon Bond    | No     | Finite (Maturity Date)                    |
| Coupon Bond        | No     | Finite                                    |
| Annuity            | No     | Finite                                    |
| Growing Annuity    | Yes    | Finite                                    |
| Perpetuity         | No     | Infinite                                  |
| Growing Perpetuity | Yes    | Infinite                                  |
| Continuously Growing Perpetuity | Yes (Exponential) | Infinite |

This post consolidates all the bond, annuity, and perpetuity formulas, making it easy to reference in financial calculations.
