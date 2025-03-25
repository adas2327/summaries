---
layout: post
title: "Littlefield Lab Simulation - Step-by-Step Guide"
date: 2025-03-25
use_math: true
tags: [operations-management, simulation, inventory, scheduling, optimization]
---

# **Littlefield Lab Simulation - Step-by-Step Guide**

## **Step 1: Understand the Lab Process**
The lab consists of three stations:
1. **Sample Preparation (Station 1)**
2. **Testing (Station 2)**
3. **Final Testing & Results (Station 3)**

Each station has a certain number of machines, each with a specific processing time per job, which determines the station's capacity and utilization.

### **Finding the Processing Time per Job:**
- **Check the Simulation Manual** – The processing time per job is often listed.
- **Observe Machine Dashboard** – Look for data under "Machine Performance."
- **Use the Formula:**
  
  $$
  \text{Processing Time per Job} = \frac{1}{\text{Service Rate per Machine}}
  $$
  
  - Example: If **Service Rate** = 40 jobs/hour, then **Processing Time** = $1/40$ hours = **1.5 minutes/job**.

---

## **Step 2: Calculate Capacity for Each Station**
Each machine has a fixed processing time. To determine capacity:

### **Capacity per Machine:**
$$
\text{Capacity per Machine} = \frac{1}{\text{Processing Time per Job}}
$$

### **Total Capacity for the Station:**
$$
\text{Total Capacity} = \text{Capacity per Machine} \times \text{Number of Machines}
$$

### **Example Calculation:**
- If **Processing Time** = 1.5 min and **Machines** = 3:
  - **Capacity per Machine** = $1/1.5 = 0.67$ jobs/min
  - **Total Capacity** = $0.67 \times 3 = 2$ jobs/min

---

## **Step 3: Determine Utilization**
Utilization indicates if a station is overloaded.

### **Formula:**
$$
\text{Utilization} = \frac{\text{Arrival Rate} \times \text{Processing Time}}{\text{Number of Machines}}
$$

### **Example Calculation:**
- If **Arrival Rate** = 1.5 jobs/min and **Processing Time** = 1.5 min:
  
  $$
  \text{Utilization} = \frac{1.5 \times 1.5}{3} = 0.75 \text{ (or 75%)}
  $$

💡 **If utilization approaches 100%, queues will build up. Add machines if necessary.**

---

## **Step 4: Calculate Economic Order Quantity (EOQ)**
EOQ minimizes total inventory costs.

### **Formula:**
$$
EOQ = \sqrt{\frac{2DS}{H}}
$$
Where:
- $D$ = Annual demand for test kits
- $S$ = Ordering cost per order
- $H$ = Holding cost per unit per year

### **Example Calculation:**
- If $D = 10,000$, $S = 50$, and $H = 2$:
  
  $$
  EOQ = \sqrt{\frac{2(10,000)(50)}{2}} = \sqrt{500,000} = 707 \text{ kits}
  $$

---

## **Step 5: Determine Reorder Point (ROP)**
ROP ensures you order inventory before stockouts occur.

### **Formula:**
$$
ROP = (\text{Daily Demand} \times \text{Lead Time}) + \text{Safety Stock}
$$

### **Example Calculation:**
- If **Daily Demand** = 50 kits and **Lead Time** = 4 days, **Safety Stock** = 100:
  
  $$
  ROP = (50 \times 4) + 100 = 300 \text{ kits}
  $$

---

## **Step 6: Calculate Lead Time & Bottlenecks**
To ensure customer satisfaction, manage lead times.

### **Formula:**
$$
\text{Lead Time} = \frac{1}{\mu - \lambda}
$$
Where:
- $\mu$ = Service Rate (jobs per hour per machine)
- $\lambda$ = Arrival Rate (jobs per hour)

### **Example Calculation:**
- If **Service Rate** = 10 jobs/hour and **Arrival Rate** = 7 jobs/hour:
  
  $$
  \text{Lead Time} = \frac{1}{10 - 7} = \frac{1}{3} = 0.33 \text{ hours}
  $$

---

## **Step 7: Optimize Scheduling**
Use **Little’s Law** to estimate system congestion.

### **Formula:**
$$
L = \lambda W
$$
Where:
- $L$ = Average number of jobs in the system
- $\lambda$ = Arrival rate of jobs
- $W$ = Average time per job

### **Example Calculation:**
- If **Arrival Rate** = 5 jobs/hour and **Avg Time per Job** = 0.5 hrs:
  
  $$
  L = 5 \times 0.5 = 2.5 \text{ jobs in the system}
  $$

---

## **Final Takeaways:**
1. **Monitor Utilization** – If close to 100%, add machines.
2. **Optimize Inventory** – Use EOQ and reorder at ROP.
3. **Manage Lead Time** – If too high, increase machines.
4. **Adjust Scheduling** – Prioritize urgent orders.
5. **Track Profitability** – Maximize cash balance.

Following these steps ensures **success in the Littlefield Lab Simulation! 🚀**
