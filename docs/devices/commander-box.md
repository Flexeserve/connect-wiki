---
sidebar_position: 2
sidebar_label: Commander Devices
description: Overview of Commander Mini and Commander Box devices.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Commander Devices

Commander devices act as edge gateways and supervisory controllers within the Connect/ST-Bus architecture. They provide:

- Local controller communication (ST-Bus / Modbus over RS485)
- Data acquisition and logging
- Alarm handling and device supervision
- Web-based configuration and visualisation
- Secure connectivity to Cloud Connect

<div className="row">
  <div className="col col--6 margin-bottom--lg">
    <div className="card padding--lg connect-overview-card">
      <a className="connect-overview-card__link" href="#commander-mini">
        <div className="connect-overview-card__content">
          <div className="connect-overview-card__text">
            <h3>Commander Mini</h3>
            <p>Compact edge gateway.</p>
          </div>
          <img className="connect-overview-card__image" src={useBaseUrl('/img/Performance.webp')} alt="Commander Mini icon" />
        </div>
      </a>
    </div>
  </div>
  <div className="col col--6 margin-bottom--lg">
    <div className="card padding--lg connect-overview-card">
      <a className="connect-overview-card__link" href="#commander-box">
        <div className="connect-overview-card__content">
          <div className="connect-overview-card__text">
            <h3>Commander Box</h3>
            <p>Full scale edge gateway.</p>
          </div>
          <img className="connect-overview-card__image" src={useBaseUrl('/img/RealTime.webp')} alt="Commander Box icon" />
        </div>
      </a>
    </div>
  </div>
</div>

## Commander Mini

Compact edge gateway for small-scale installations (≤5 controllers) with WiFi + Ethernet connectivity. 

### Key Capabilities

- Supports up to 5 controllers
- Integrated web server for local configuration
- WiFi + Ethernet connectivity (dual uplink options)
- Local data storage + event logging
- Real-time clock (RTC) with battery backup
- Supports both:
    - ST-Bus (RS485)
    - Modbus (RS485)

### Interfaces

#### Network

- 1x RJ45 Ethernet
- Integrated WiFi module
- SMA connector for external antenna

#### Field Communication

- ST-Bus (RS485)
- Modbus (RS485)

#### Additional I/O

- USB Type-C (Host/Device)
- Internal storage
- RTC battery (CR2032)

### Power

- 100-240V AC, 50/60 Hz
- 12-24V DC via ST-Bus (isolated)
- 5V DC via USB
- Typical consumption: ~10W

### Physical / Environmental

- Dimensions: 151.5 x 80 x 41mm
- Operating Temp: 0 to +55°C
- Storage Temp: -20 to +70°C
- Humidity: ≤75% (non-condensing)
- Protection: IP20, Class II

### Communication Characteristics

- RS485 (ST-Bus / Modbus)
    - 57600 baud
    - Max cable length: 1000m
    - Line topology required
    - 120Ω termination at both ends

### LED Status

- Green: Controllers + Cloud connected
- Orange: Controllers connected, no cloud
- Red: Alarm condition

### Functional Behaviour

#### Local Operation

- Maintains communication with controllers
- Executes logic even if cloud is unavailable
- Bufferes data during outages

#### Cloud Interaction

- Sends:
    - Telemetry
    - Events
    - Alarms

- Receives:
    - Configuration
    - Schedules
    - Updates

### Best Use Case

- Small deployments
- Limited controller count
- Sites needing WiFi connectivity
- Retrofit environments

## Commander Box

Full-scale edge gateway for larger installation (≤32 controllers) with Ethernet based connectivity and extended I/O.

### Key Capabilities

- Supports up to 32 controllers
- Integrated web server + cloud integration
- Local data logging (SD-based)
- Alarm handling (relay + buzzer)
- Advanced system monitoring via LED indicators

### Interfaces

#### Network

- 1x RJ45 Ethernet

#### Field Communication

- ST-Bus (RS485)
- Modbus (RS485)

#### Additional I/O

- USB Type-A (Host)
- Digital input (E1)
- Relay output (K1)
- Internal SD card storage
- Integrated buzzer (~85 dB)

### Power

- 100-240V AC ±10%, 50/60 Hz
- Max consumption: ~20W

### Physical / Environment

- Dimensions: 170 x 120 x 45 mm
- Operating Temp: 0 to +55°C
- Storage Temp: -20 to +70°C
- Humidity: ≤75% (non-condensing)
- Protection: IP20, Class II

### Communication Characteristics

- RS485 (ST-Bus / Modbus)
    - 57600 baud
    - Max cable length: 1000m
    - Line topology required
    - 120Ω termination at both ends

### LED Status

#### Network / Cloud

- Blue: Cloud connected
- Blinking cyan: Ethernet communication OK
- Amber: Cloud error
- Red: Ethernet/DNS/DHCP error

#### ST-Bus

- Blinking green: OK
- Red: Communication error

#### System

- Green: Operational
- Red blinking: General error
- Amber: Processing error

### Functional Behaviour

#### Local Control

- Acts as ST-Bus master
- Polls and manages all connected controllers
- Logs data locally to SD storage

#### Alarm Handling

- Physical relay output (K1)
- Integrated buzzer for on-site alerting
- Alarm aggregation across all controllers

#### Cloud Interaction

- Sames as Mini, but at larger scale
- Designed for centralised system visibility

### Best Use Case

- Large sites (multi-unit / mulit-zone)
- High controller density
- Installations needing:
    - Alarm outputs
    - Physical signaling
    - More robust monitoring