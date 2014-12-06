# PubNub JavaScript APIs Example: Super Simple Chat Demo

This is a super simple chat web app, built with using [PubNub JavaScript APIs][pubnub].

## Live Demo

Try this [chat room demo][demo] on multiple browser windows.

## Send and Receive Messages with PubNub APIs

Tasks like sending and receiving data through PubNub take a single function call. The basic *send* functionality happens through a `publish()` call. And to *receive* all of the sent messages on a specific channel, simply make a `subscribe()` call. All of the network infrastructure and scaling is taken care of for you, so you spend time building your app, not the infrastructure.

```
// Send a message
PUBNUB.publish({ channel: 'chat', message: "hello!" });
```

```
// Receive messages
PUBNUB.subscribe({ channel: 'chat', callback: function(m){console.log(m)}});
```

Super easy!

## Debugging using PubNub Console

Go to [Console][console], and enter your channel name (for this example demo, *mchat*), and your subscribe/publish keys to see if your code is sending and receiving data to/from PubNub service correctly! 

## OK, So What is PubNub?

PubNub is a globally distributed *data stream* network, a cloud service that developers use to build and scale real-time applications. We connect to over 250 million devices with billions of monthly real-time transactions for financial services, social apps, online auctions, multi-player games, telecom infrastructure, retail apps etc. PubNub also enables many Internet of Things (IoT) solutions for home automation, connected cars, retail, transportation and many others.

Are you looking for the SDKs in different languages? visit our [developers page]!
PubNub creates and supports over 50 languages and development platforms with our SDKs, inluding node.js, ruby, python, Objective-C, etc, etc!

Happy hacking :-)

[Demo]: http://pubnub.github.io/super-simple-chat/index.html
[pubnub]: http://www.pubnub.com/docs/javascript/javascript-sdk.html
[dev]: http://www.pubnub.com/developers/
[console]: http://www.pubnub.com/console/