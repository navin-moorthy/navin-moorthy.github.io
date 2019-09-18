---
title: Service Workers by Dave Geddes
date: "2019-09-17"
description: Notes taken while learning about Service Workers
---

## 🚀 [Service Workers](https://serviceworkies.mastery.games/)

![Hero Image](images/service-worker.jpg)

👨‍💻 By [Dave Geddes](http://gedd.ski/)

### 🎈 CHAPTER 1: LIFECYCLE

To register as a Service Worker with the js file - `navigator.serviceWorker.register("/game/kolohe.js")`

Four stages of Service Worker

- Install
- Wait
- Activate
- Terminate

Once the Service Worker is installed in the browser, it cannot be updated when the same site's Service Worker code is updated

A new Service Worker is created for the new code.

When a new service worker is created, it will be in the "waiting phase" as the active service worker will still be active.

When you edit the service worker code with new line of code, service worker will terminate the new waiting service worker and creates a new waiting service worker.

Simple refresh cannot affect the active service worker.

Now with the new code, closing the internet will terminate the active service worker and waiting service worker will become active and stopped.

#### 🌹 Extra Read

> [Service workers and the Cache Storage API](https://web.dev/service-workers-cache-storage)

[Service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

It's still recommended that you configure the `Cache-Control` headers on your web server, even when you know that you're using the [`Cache Storage API`](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage). You can usually get away with setting `Cache-Control: no-cache` for **unversioned URLs**, and/or `Cache-Control: max-age=31536000` for **URLs that contain versioning information**, like hashes.

- [HandsOn with Service Workers Basic](https://web.dev/codelab-service-workers)
- [Glitch Example](https://glitch.com/~service-worker-starter)

> [Service Worker Overview](https://developers.google.com/web/fundamentals/primers/service-workers/)

Access the service Workers using Chrome Internal - `chrome://serviceworker-internals/` & `chrome://inspect/#service-workers`

Access the service Workers using Firefox Internal - `about:debugging#/runtime/this-firefox`

[More Service Worker Resources](https://jakearchibald.github.io/isserviceworkerready/resources.html)
