---
sidebar_position: 2
sidebar_label: Commander Box
description: Commander Box description goes in here
---

# Commander Box

## Summary

Full-scale edge gateway for larger installations (≤32 controllers) with Ethernet-based connectivity and extended I/O.

**Primary Role:** Serve as the master controller and supervisory gateway for large ST-Bus networks.

---

## Key Capabilities

- Supports up to 32 controllers
- Integrated web server + cloud integration
- Local data logging (SD-based)
- Alarm handling (relay + buzzer)
- Advanced system monitoring via LED indicators

---

## Interfaces

### Network

| Interface | Details |
|-----------|---------|
| Ethernet | 1x RJ45 |

### Field Communication

| Interface | Details |
|-----------|---------|
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
| Input | 100–240V AC ±10%, 50/60 Hz |
| Max Consumption | ~20W |

---

## Physical / Environmental

| Parameter | Value |
|-----------|-------|
| Dimensions | 170 x 120 x 45 mm |
| Operating Temp | 0 to +55°C |
| Storage Temp | -20 to +70°C |
| Humidity | ≤75% (non-condensing) |
| Protection | IP20, Class II |

---

## Communication Characteristics

| Parameter | Value |
|-----------|-------|
| Protocol | RS485 (ST-Bus / Modbus) |
| Baud Rate | 57600 |
| Max Cable Length | 1000m |
| Topology | Line (required) |
| Termination | 120Ω at both ends |

---

## LED / Status Indicators

### Network / Cloud

| Color | Meaning |
|-------|---------|
| Blue (solid) | Cloud connected |
| Blinking cyan | Ethernet communication OK |
| Amber | Cloud error |
| Red | Ethernet / DNS / DHCP error |

### ST-Bus

| Color | Meaning |
|-------|---------|
| Blinking green | Communication OK |
| Red | Communication error |

### System

| Color | Meaning |
|-------|---------|
| Green | Operational |
| Blinking red | General error |
| Amber | Processing error |

---

## Functional Behavior

### Local Control

- Acts as ST-Bus master
- Polls and manages all connected controllers
- Logs data locally to SD storage

### Alarm Handling

- Physical relay output (K1)
- Integrated buzzer for on-site alerting
- Alarm aggregation across all controllers

### Cloud Interaction

- Same as Mini, but at larger scale
- Designed for centralized system visibility

---

## Best Use Case

- Large sites (multi-unit / multi-zone)
- High controller density (e.g., Circle K scale)
- Installations needing:
  - Alarm outputs
  - Physical signaling
  - More robust monitoring
