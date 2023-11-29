---
sidebar_position: 7
---

# Screen Mirror

Screen mirror page allows you to see the device screen in real time, and control the device using mouse and keyboard.

## Options

### Create virtual display

On Android 11 or higher, Tango can create a virtual display and mirror it instead. The virtual display can run apps and accept inputs independently from the main display, allowing you to use multiple apps at the same time.

To mirror a virtual display, scroll to **Video** section, then select **Virtual Extended Display (Experimental)** in **Source** dropdown.  You can also customize the resolution and density of the virtual display below.

### Mirror camera

On Android 12 or higher, Tango can mirror the camera instead, so you don't need to open the camera app, and there will be no camera UI on the screen.

By default, Tango will mirror the camera at the highest resolution and frame rate. If the video is laggy or the device is overheating, you can reduce the resolution via **Limit Resolution** option.

To mirror a camera, scroll to **Video** section, then select **Camera (Experimental)** in **Source** dropdown. You can also choose front or back camera below.

### Use H.265 codec

On supported device and browser, use H.265 codec can improve video quality and reduce latency.

If your device supports H.265 encoding and your browser supports H.265 decoding, the **H.265** option will be available in **Video** section's **Codec** dropdown.

### Reduce resolution and frame rate

If your device or computer is not powerful enough, reducing resolution and frame rate can improve performance and prevent device from overheating.

In **Video** section, check **Limit Resolution** and **Limit FPS** to enable them. The **Max Resolution** option limits the resolution by its longer side while keeping the aspect ratio. For example, if device resolution is 1920x1080, and **Max Resolution** is set to 720, the resolution will be limited to 1280x720. The **Max FPS** option limits the frame rate.

### Forward audio

On Android 11 or higher, Tango can forward audio from the device to your computer. However, there are some limitations:

* Only audio produced by apps will be forwarded. Ringtone, notification, alarms and call voice will not be forwarded.
* It doesn't work if a wired or Bluetooth headset is connected to the device.
* The audio is only played on your computer. It will not be played on the device.

To enable this, check **Enable Audio Forwarding** option in **Audio** section.

## Usage

### Mouse

The mouse inputs are translated to touch events on the device. You can use mouse to tap, drag, scroll, and zoom.

Some apps (like Chrome for Android) can also responds to right clicks and mouse wheel, but most apps are only designed for touch input, so they will not behave correctly.

### Keyboard

The keyboard inputs are sent to the device as is. Except:

* Some keys are handled by the computer itself, like the **Windows** key on Windows.
* Android only supports key code in US layout keyboards. To type other characters, you need to use the IME on the device.

### Touch

If your computer (or tablet) has a touch screen, you can use it to control the device. The touch inputs are sent to the device as is. Multi-touch is also supported.

### App switcher

If enabled in the **Panels** section, an app switcher will be displayed on the top side of the screen.

It shows the list of running apps on the current display (either physical or virtual). Tap on an app to switch to it.

## Troubleshooting

### The screen is black on lock screen or Netflix

For privacy, security or copyright protection reasons, apps can prevent screen to be captured. This will result in a black screen in Tango, and there is nothing we can do.

While you can't see the screen content, you can still control the device using mouse and keyboard. For example, you can use keyboard to enter the PIN to unlock the device.

## Tricks

### Show PowerPoint presentation on virtual displays

Some apps, like Microsoft Office, can display different content on multiple displays. For example, if Tango is mirroring a virtual display, start a PowerPoint presentation will show the presentation at full screen on the virtual display, while the main display shows the presentation controls.

If the app launcher is showing on the virtual display and covers the presentation, you can tap **Back** button in the command bar to close it.

### Create multiple virtual displays

On computers, you can open the device in multiple Tango tabs. Each time screen mirror starts, it creates a new virtual display. Android apps don't support running on multiple virtual displays, but you can run different apps on each of them.
