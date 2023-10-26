---
sidebar_position: 1
slug: /
---

# Introduction

Tango is a Web app for controlling Android devices. It's built on the open-sourced [Tango library](https://github.com/yume-chan/ya-webadb).

Tango works on latest versions of Chromium-based browsers, including Google Chrome, Microsoft Edge and Opera. It also works on Android versions of those browsers, but not on iOS devices.

## Data security

Tango works entirely in your browser. All data is transferred directly between your device and your browser. Besides of some anonymous analytics data, Tango doesn't send any data to the server.

After first loading the page, Tango can work offline. You can disconnect from the Internet and continue using Tango.

## Quick Start

1. [Enable Developer options and USB debugging](./prepare.md) on the device you want to control.
2. Connect the device to your computer using a USB cable. For running Tango on Android, use a C-to-C or OTG cable, Tango can't control the device from itself.
3. Open [Tango](https://tangoapp.dev) in a supported browser on your computer.
4. Tap "Pair Device" button, from the popup, select the device you want to control.
5. A new device card will appear in the device list. Tap "Connect" button on the card to connect to the device.
6. The first time you connect to a device, you will be asked to authorize the connection on the device. Follow the instructions on the device to authorize the connection.

Having issues while connecting? See [Troubleshooting](./troubleshooting.md).

## Features

* [**Device Overview**](./overview.md): Display basic information of the device like IP address, battery level, storage and memory usages.
* [**File Browser**](./file-browser.md): Browse, download and upload files on device.
* [**App Manager**](./app-manager.md): List, install and uninstall apps on device.
* [**Screen Mirror**](./screen-mirror.md): Mirror device screen and control the device using mouse and keyboard.
* Logcat and bugreport tools for debugging the device or apps on it.
* More features are coming soon.
