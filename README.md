node-red-contrib-nexmo (beta)
===========================

<a href="http://nodered.org" target="_new">Node-RED</a> nodes for Nexmo APIs

## Features

- [Voice API](https://developer.nexmo.com/voice/voice-api/overview) - Make and receive calls, use text to speech, recording, and DTMF input, forward calls to other destinations
- [SMS](https://developer.nexmo.com/messaging/sms/overview) - Send and receive SMS globally
- [Verify](https://developer.nexmo.com/verify/overview) - Verify a phone number with SMS and voice fallback
- [Number Insight](https://developer.nexmo.com/number-insight/overview) - Get details and formatting of phone numbers

## Installation

While this version (3.0) is in beta it is recommended to install directly from the npm command line. Once we exit beta and publish to NPM it will appear as Nexmo within the Node Red pallete.

For now, you can install by running the following command from your node-red home directory (eg `~/.node-red`)

`npm install git+https://git@github.com/nexmo/nexmo-nodered.git`

## Account Setup
The first time you use a node you will need to create Nexmo authentication parameters.
The SMS, Insight and Verify Nodes simply use your Nexmo API key and secret.

The voice API uses a concept of [Applications](https://developer.nexmo.com/concepts/guides/applications) that are authenticated with JWTs generated by a private key. This is a little more complex to setup but we've tried to make it as easy as possible in node-red.
<img src="https://static.nexmodev.com/nodered-voiceapp.gif" width="400" />

## Warnings
While this package is in beta when you create an application your request will be routed from your browser through an AWS lambda function run by the Nexmo Developer Relations team, we are not logging any of your details in this function it is purely a temporary wrapper around the Nexmo API.
