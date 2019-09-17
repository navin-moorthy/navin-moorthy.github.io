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
