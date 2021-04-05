---
title: Understanding webRTC
date: "2021-02-10T22:12:03.284Z"
description: "WEBRTC Browser API"
---

Web RealTime Communication offers realtime communication natively from a web browser.
webRTC is a media engine with JavaScript API's.

## How

API - used in setting up the connection
Identify - client identification.
Type of data.
Network Address Translation(NAT) - Establishes a connection between the clients.
Security - Encyrption of data.

### Challenges facing webRTC

+ Not fully compatible with all browsers.
+ No standard signaling protocol.
+ Works via UDP

### Why webRTC

+ Removes the need of extra apps.
+ Embedded in web technologies.
+ Secure

### Main API's from webRTc

+ **getUserMedia** - It represents a stream of audio/video.gaining access to camera, microphone and screen.
+ **peerConnection** - does everything.encodes, decodes and sends data over.signal processing,codec handling,peer to peer communication, security, bandwidth management.
+ **dataChannel** - send arbitrary data directly between browsers in a bidirectional way.ultra low latencym,secure.

### Servers for webRTC

Signaling - always needed.
NAT traversal - needed for production.
Media - depends on the app.
Gateway - depends on the app.
Permissions and sessions
