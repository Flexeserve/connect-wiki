---
sidebar_position: 3
sidebar_label: Installation
---

# Installation

Connect offers a straightforward installation process, designed to get you up and running with minimal effort.

Whether you're setting up in a single location or across multiple sites, the installation guide provides clear, step-by-step instructions to ensure a smooth setup experience.

Follow the guide to quickly integrate Connect into your store environment and start benefiting from centralized control and real-time visibility.

## Device Installation

Guidance for physically installing Connect-compatible devices and bringing them online safely.

## Firmware Updates

Instructions for validating current firmware versions and applying approved updates.

## Configuration

### Hardware Requirements

You should provide a stable high-speed internet connection. Preferable by using DSL or better fiver, in this case you need:
- Wired connection (should always be preferred).
- An Ethernet cable (at least CAT5E) to connect to the device.
- A router to establish internet connection or an access point to your local network.
- A switch (often already part of the router) that is able to work as a DHCP server.

In case you want to use broadband cellular network for mobile web access (4G LTE. 5G) you need:
- A mobile router.
- A network provider contract this is not limited in network data.

### Port Configuration & Firewall Rules

Make sure to open the following ports in your firewall and other blocking applications:

Port `1194` UDP on:
- vpn1.commander-cloud.eu
- vpn2.commander-cloud.eu
- vpn3.commander-cloud.eu
- vpn4.commander-cloud.eu
- vpn5.commander-cloud.eu

Port `8883` TCP on:
- mqtt.gateway.commander-cloud.eu

### Service Requirements

The default configuration of the device uses DHCP to get its IP address, thus the easiest way is to provide a DHCP server in your local network. Otherwise you have to configure the device to use a static IP address.

Internet connection (recommended are fiber or DSL):
- Minimum Speed: 300kBit/s (up and download).
- Minimum latency: < 80ms (ping)
