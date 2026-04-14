---
sidebar_position: 1
sidebar_label: Air Connect (In-Store Wireless Network) (USA)
description: Air Connect description goes in here
---

# Air Connect (USA)

Air Connect enables Connect across stores where equipment is located in different areas or not directly networked.

- Creates a dedicated wireless network within the store
- Seamlessly connects all units back to a central point
- Designed to support real-world store layouts

It consits of two primary components:

- Air Connect Unit (Node) -> Installed at each applicance / controller
- Air Connect Commander Gateway -> Installed in back-of-house with the Commander Box.

## Air Connect Unit (Node)

The Air Connect Unit is a device-level wireless node that wireless node that connects directly to a controller (e.g. Dixell) and integrates it into the Air Connect mesh network.

### Key Capabilities

- Integrates Dixell CR30CX controllers into Air Connect mesh
- Converts:
    - RS485 / TTL -> Wireless mesh
- Provides real-time communication between controller and gateway
- Automatic pairing on power-up
- Status monitoring via onboard LED

### Interfaces

#### Controller Side

- RS485 / TTL (Controller communication)
- Modbus (via RJ45)

#### Power / Physical

- 12V DC input
- USB-C
- Molex Microfit 4-pin
- RJ45 connector

#### Wireless

- Integrated radio with:
    - SMA connector for external antenna

### Physical Specs

- PCB Size: 65 x 45 mm

### LED Status States

| State | Meaning |
| --- | --- |
| Off | Startup |
| Blue | Scanning Modbus |
| Flashing Green | Normal operation |
| Flashing Red | Air Connect unit error |
| Flashing Blue | Controller (Modbus) error |

### Functional Behaviour

#### Unit Level

- Connects directly to controller (Dixell)
- Reads:
    - Temperature
    - Status
    - Alarms
- Sends controller data into mesh network

#### Mesh Behaviour

- Acts as a mesh node
- Can:
    - Transmit data
    - Relay data from other nodes (depending on topology)

#### Important Notes

- No revese polarity protection on 12V input
- Requires proper antenna placement for reliable mesh performance
- Wireless reliability is dependant on:
    - Node density
    - Distance
    - Obstructions (metal, walls, equipment)

#### Best Use Case

- Retrofitting existing units without running communication cables
- Sites with:
    - Multiple distributed units
    - Difficult cable routing

## Air Connect Commander Gateway

The Air Connect Commander is the central wireless aggregation point that connects the Air Connect mesh network to the Commander Box.

### Key Capabilities

- Integrates Commander Box into Air Connect mesh
- Aggregates communication from all Air Connect Units
- Converts:
    - Wireless mesh -> RS485 / Modbus (wired to Commander)
- Enables full system visibility in Connect platform

### Interfaces

#### Commander Side

- Modbus / RJ45 connection to Commander Box

#### Power / Physical

- 12V DC input
- USB-C
- Molex Microfit 4-pin
- RJ45 connector

#### Wireless

- Integrated radio with:
    - SMA connector for external antenna

### Physical Specs

- PCB Size: 65 x 45 mm

### LED Status

| State | Meaning |
| --- | --- |
| Off | Startup |
| Blue | Scanning mesh network |
| Flashing White | No Air Connect units detected |
| Flashing Green | Normal operation |
| Flashing Red | Air Connect unit error |
| Flashing Blue | Commander (Modbus) error |

### Functional Behaviour

#### Mesh Aggregation

- Receives data from:
    - All Air Connect Units
- Maintains communication with mesh network

#### Gateway Conversion

- Converts wireless data into:
    - Modbus / RS485 for Commander Box

#### System Integration

- Sends all unit data to:
    - Commander Box -> Cloud Connect

#### Important Notes

- No reverse polarity protection on 12V input
- Placement is critical
    - Should be centrally located for mesh coverage
- Acts as single point of aggregation
- Mesh performance depends heavily on:
    - Gateway placement
    - Node distribution

#### Best Use Case

- Sites using:
    - Multiple wireless nodes
- Environments where:
    - Wired RS485 is not practical
- Large deployments

## Key Difference

| Component | Role |
| --- | --- |
| Air Connect Unit | Device-level wireless node (at each unit) |
| Air Connect Commander | Site-level wireless gateway (back-of-house) |
