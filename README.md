# mrpipes

mrpipes is an event-driven HTTP proxy for routing requests to web servers
based upon arbitrary rules.

## Status

Alpha

## Overview

mrpipes lets you glue multiple backend web applications together. It was
written with event-driven backend servers in mind, such as those built on
[node](http://nodejs.org). It allows you to map requests to any number of 
backend servers based upon arbitrary rules that you define.

Being event-driven, mrpipes has the potential to scale in a way that more
traditional servers cannot -- particularly in the realm of things like
WebSockets and Server-Sent events. It was written specifically with
[eventserver](http://github.com/shinetech) in mind.

## Installation

1. Ensure you have **nodejs 0.4.x**
2. Grab this project from github.
3. Tweak **config.js** to your liking.
4. Implement your routes in **routes.js**.
4. Run **bin/mrpipes**.

## Usage

TODO

## License

This software is available to you under the terms of the
[MIT License](http://en.wikipedia.org/wiki/MIT_License).

## Support

Please log defects and feature requests using the github issue tracker.

## About

mrpipes was originally written by [Tom Lee](http://tomlee.co) as an
employee of [Shine Technologies](http://www.shinetech.com).

Follow me on [Twitter](http://www.twitter.com/tglee),
[LinkedIn](http://au.linkedin.com/pub/thomas-lee/2/386/629).

You might also be interested in reading
[Shine's Blog](http://blog.shinetech.com).

