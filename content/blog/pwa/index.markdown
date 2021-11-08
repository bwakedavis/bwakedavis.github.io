---
title: progressive web apps(PWA)
date: "2020-09-03T22:12:03.284Z"
description: "progressive web applications"
---


+ A PWA should be **capable** of taking advantage of HTML5 APIs to provide the an app experience that is close to native as possible.

+ A PWA should be **reliable** to provide some level of functionality when offline. It should provide a better performance than a typical website.Service Workers and Caching should make assets load faster.

+ A PWA should be **installable**. Should have a registered Service Worker, a ```web manifest``` file, meets an engagement heurastic, pases the lighthouse test.

+ A PWA should be **secure**. Must run on HTTPS except on localhost.

+ A PWA should be **responsive**. The UI must be designed to work on the device where it's installed.

+ It should be **acessible**, meetinng the WCAG 2.0 requirements and work with any input device.

+ It should be **discoverable**. A PWA should have a good SEO. Use Lighthouse SEO to test.


## Web manifest file
 
 can be called ```web.manifest``` or ```manifest.json```.
 Sould be linked in every HTML file.

```html
<link rel="manifest" href="/manifest.json">
```

#### Manifest required properties

+ "name" and/or "short_name".
+ array of "icons"

```json
{
    "src" : "/img/icon-192x192.png",
    "sizes": "192*192",
    "type": "image/png",
    "purpose": "maskable"
}
```

+ relative "start_url"
+ "display" browser, fullscreen, *standalone*, minimal-ui.

#### Optional Properties

+ "background_color" - a hex value
+ "theme_color" - a hex value.
+ "description"
+ "orientation"
   + any, natural, landscape, landscape-primary, landscape-secondary, potrait, potrait-primary, potrait-secondary
+ "lang" eg "en-US"
+ "prefer_related_applications" - Boolean
+ "related_applications. If you have a native app.
  
```json
{
    "platform": "play",
    "url": "playstore url",
    "id": "com.example.appli"
}, {
    "platform": "itunes",
    "url": "itunes url"
}
```

+ "screenshots" - if youre publishing in a store.

```json
{
    "src": "screenshot1.webp",
    "sizes": "1280*720",
    "type": "image/webp"
}
```

+ "shortcuts"

```json
{
    "name": "Today's agenda",
    "url": "/today",
    "description": "List of events planned for today",
    "icons": []
}
```

sample ```manifest.json```.

```json
{
  "name": "My Progressive Web Application",
  "short_name": "Progressive",
  "start_url": "/?home=true",
  "icons": [
    {
      "src": "/icons/icon36.png",
      "sizes": "36x36",
      "type": "image/png"
    },
    {
      "src": "/icons/icon48.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "/icons/icon60.png",
      "sizes": "60x60",
      "type": "image/png"
    },
    {
      "src": "/icons/icon72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "/icons/icon76.png",
      "sizes": "76x76",
      "type": "image/png"
    },
    {
      "src": "/icons/icon96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "/icons/icon120.png",
      "sizes": "120x120",
      "type": "image/png"
    },
    {
      "src": "/icons/icon152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "/icons/icon180.png",
      "sizes": "180x180",
      "type": "image/png"
    },
    {
      "src": "/icons/icon192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#000000",
  "background_color": "#FFFFFF",
  "display": "fullscreen",
  "orientation": "portrait"
}
```

Online, Offline or undecided