---
sidebar_position: 2
sidebar_label: Commander Box
description: Full-scale edge gateway for larger installations (≤32 controllers) with Ethernet-based connectivity, local logging, and alarm output.
---

# Commander Box

:::info[Overview]
Full-scale edge gateway for larger installations **(≤32 controllers)** with Ethernet-based connectivity and extended I/O.

**Primary Role:** Serve as the master controller and supervisory gateway for large ST-Bus networks.
:::

---

## Key Capabilities

| Capability | Detail |
|------------|--------|
| Controller Capacity | Up to 32 controllers |
| Connectivity | Integrated web server + cloud integration |
| Storage | Local data logging via SD card |
| Alerting | Alarm handling via relay output + buzzer |
| Monitoring | Advanced system monitoring via LED indicators |

---

## Interfaces

### Network

| Interface | Connector |
|-----------|-----------|
| Ethernet | 1x RJ45 |

### Field Communication

| Interface | Bus |
|-----------|-----|
| ST-Bus | RS485 |
| Modbus | RS485 |

### Additional I/O

| Interface | Details |
|-----------|---------|
| USB | Type-A (Host) |
| Digital Input | E1 |
| Relay Output | K1 |
| Storage | Internal SD card |
| Buzzer | Integrated (~85 dB) |

---

## Power

| Parameter | Value |
|-----------|-------|
| Input Voltage | 100–240V AC ±10%, 50/60 Hz |
| Max Consumption | ~20W |

---

## Physical / Environmental

| Parameter | Value |
|-----------|-------|
| Dimensions | 170 x 120 x 45 mm |
| Operating Temperature | 0 to +55°C |
| Storage Temperature | -20 to +70°C |
| Humidity | ≤75% non-condensing |
| Protection Rating | IP20, Class II |

---

## Communication Characteristics

| Parameter | Value |
|-----------|-------|
| Protocol | RS485 (ST-Bus / Modbus) |
| Baud Rate | 57,600 |
| Max Cable Length | 1,000m |
| Topology | Line (required) |
| Termination | 120Ω at both ends |

:::warning[Wiring Requirement]
Line topology is **required**. Both ends of the RS485 bus must be terminated with **120Ω resistors** for reliable communication.
:::

---

## LED / Status Indicators

### Network / Cloud

| Indicator | Status |
|-----------|--------|
| 🔵 Blue (solid) | Cloud connected |
| 🔵 Blinking cyan | Ethernet communication OK |
| 🟠 Amber | Cloud error |
| 🔴 Red | Ethernet / DNS / DHCP error |

### ST-Bus

| Indicator | Status |
|-----------|--------|
| 🟢 Blinking green | Communication OK |
| 🔴 Red | Communication error |

### System

| Indicator | Status |
|-----------|--------|
| 🟢 Green (solid) | Operational |
| 🔴 Blinking red | General error |
| 🟠 Amber | Processing error |

---

## Functional Behavior

### Local Control

- Acts as ST-Bus master
- Polls and manages all connected controllers
- Logs data locally to SD storage

### Alarm Handling

- Physical relay output (K1) for external alarm devices
- Integrated buzzer (~85 dB) for on-site alerting
- Alarm aggregation across all connected controllers

### Cloud Interaction

- Full cloud integration at scale
- Designed for centralized system visibility across large deployments

---

## Best Use Case

:::tip[Ideal Deployment]
The Commander Box is best suited for **large, high-density sites** that require robust monitoring, physical alarm outputs, and centralized cloud visibility.
:::

- Large sites (multi-unit / multi-zone)
- High controller density (e.g., Circle K scale)
- Installations requiring:
  - Physical alarm relay output
  - On-site audio signaling
  - Advanced system monitoring
