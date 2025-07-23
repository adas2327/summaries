---
title: "EV Charging Basics"
layout: post
date: 2025-07-23
categories: [EV, Charging, Interoperability]
---

# EV Charging Basics

This page is for me to rehearse key concepts, protocols, and test areas before my interview.

---

## 1. EV Charging Basics
- **AC Charging (Level 1 & Level 2)**
  - Power comes through the vehicle’s onboard charger.
  - Slower charging (3–20 kW).
  - Used at homes, offices, or parking garages.
- **DC Fast Charging (Level 3)**
  - Power conversion is handled by the charger itself.
  - High power (50 kW up to 350 kW for passenger vehicles, higher for heavy duty).
  - Used for highway corridors and public stations.

---

## 2. Key Charging Protocols & Standards
- **OCPP (Open Charge Point Protocol)** – Defines communication between charger and backend management system.
- **OCPI (Open Charge Point Interface)** – Used for roaming and network-to-network data exchange.
- **ISO 15118** – Governs vehicle-to-charger communication, Plug & Charge authentication, and future V2G.
- **SAE J1772** – Connector standard for AC charging in North America.
- **SAE J3068** – Three-phase AC charging for commercial and industrial vehicles.
- **SAE J3400 (NACS)** – North American Charging Standard (Tesla’s connector now adopted by others).
- **IEC 61851** – International standard for conductive charging systems.
- **IEC 62196** – Defines connectors, plugs, and couplers.
- **DIN 70121** – Earlier standard for high-level communication before ISO 15118 maturity.
- **Megawatt Charging System (MCS)** – Emerging standard for heavy-duty high power charging.

Relevancy:
- Vehicle ↔ Charger communication: ISO 15118, DIN 70121.
- Charger ↔ Backend: OCPP.
- Network roaming: OCPI.
- Physical interfaces: SAE J1772, J3400, IEC 62196.

---

## 3. Real-Life Interoperability Issues (Passenger Cars)
- **Failed handshakes:** Vehicle unable to start session due to firmware mismatch.
- **Inconsistent Plug & Charge experiences:** Some vehicles support it, some chargers don’t.
- **Connector incompatibility:** CCS vs NACS availability at stations.
- **Payment failures:** Backend errors causing declined sessions.
- **Uptime issues:** Stations out of service due to poor remote diagnostics.

**Example:** Early 2024 reports show certain Hyundai Ioniq 5 models having difficulty initiating sessions at specific older ChargePoint DC stations because of legacy OCPP implementations.

**Another example:** Plug & Charge enabled on some Mercedes-Benz EQS models works only at specific networks like Electrify America due to backend certification differences.

---

## 4. Industry Initiatives
- **CharIN:** Industry alliance working on CCS and MCS standards.
- **SAE efforts:** Aligning J3400 (NACS) with existing standards.
- **IONNA-type JVs:** Cross-OEM ventures to deploy standardized networks.
- **UL and certification labs:** Pushing for rigorous interoperability test programs before deployment.

---

## 5. Steps for Vehicle vs Charger Testing
1. **Pre-test planning:** Define test matrix (different vehicles, charger models, power levels).
2. **Functional handshake tests:** Plug-in, handshake initiation, authorization.
3. **Load tests:** Verify current ramp-up, sustained operation, thermal behavior.
4. **Edge case simulation:** Unplug mid-session, communication dropouts, emergency stops.
5. **Payment and backend validation:** Ensure backend correctly logs and bills session.
6. **Regression & automation:** Automate scenarios for repeated firmware builds.

---

## 6. Stakeholders Involved
- **OEMs (Vehicle Manufacturers):** Ensure vehicles comply with standards.
- **Charging Network Operators:** Deploy and maintain stations.
- **Backend Platform Providers (CPMS vendors):** Manage data, billing, and updates.
- **Test Labs & Certification Bodies:** UL, TÜV, CharIN test events.
- **Suppliers:** Cable manufacturers, power electronics suppliers.
- **Regulators & Standards Bodies:** SAE, ISO, IEC.

---

## 7. Plug & Charge Overview
- Part of **ISO 15118**.
- Vehicle and charger authenticate automatically using digital certificates.
- Removes need for RFID cards or apps.
- Improves user experience but requires secure certificate management.
- Adoption growing: Mercedes EQ series, Ford Mustang Mach‑E (with specific networks).

---

## 8. Summary
- .

---

*Review and rehearse these sections before the interview to strengthen your technical narrative and confidence.*
