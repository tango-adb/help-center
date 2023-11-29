---
sidebar_position: 8
---

# Share Device

The share device feature allows you to access the device from another computer or mobile device. This is useful if you want someone else to help you with the device, or if you want to access the device remotely.

## Start sharing

To share the device, click the **Share** button in the top right corner of the device page. A dialog will appear with some introductions and a **Start** button. Click the **Start** button will generate a link that you can share with others.

In the whole process, the device must remain plugged in, and Tango must be kept open. If you close Tango or unplug the device, the sharing will be terminated.

To stop, click the **Stop** button in the share dialog. This will terminate the sharing session, and the link will no longer work.

## Use the link

When you open the link on another computer or mobile device, you will see the same device page as the one on your computer. You can control the device as if you were using it on your computer.

The link can be opened on multiple computers at the same time, so multiple people can all access the data on the same device. However, some features might not work properly when multiple people are using the device at the same time:

* If screen mirror is set to a physical display, multiple people will see the same screen, and everyone can control the device.
* If screen mirror is set to camera, only one person can see the camera feed at a time. Starting a new screen mirror session will terminate the previous one.

:::tip

If screen mirror is set to virtual display, everyone will have their own virtual display, and can control that screen independently.

:::

## Security

The link is randomly generated, and changes every time you click the **Start** button. However, anyone who has the link can have full control of the device. So please be careful when sharing the link.

When the link is opened on another computer or mobile device, a peer-to-peer connection will be established between the two devices. The connection uses WebRTC technology, which means the data is transmitted directly between the two devices, and the server is not involved in the transmission. The server only helps to establish the connection, and does not store any data. Also, the data is encrypted during transmission, so no one else can see the data even if they can intercept the transmission.

## Speed and latency

Depending on the network conditions, the speed and latency of the connection may vary.

In normal usage scenarios, it should only use less than 1Mbps of bandwidth, and the latency is usually not noticeable. However, if the network conditions are poor, some features like file transferring and screen mirroring may not work properly.
