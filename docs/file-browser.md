---
sidebar_position: 5
---

# File Browser

File browser page allows you to browse files and folders on your device. You can also create, rename, delete, upload, download files and folders.

## Volumes

When you open the file browser, it displays a list of volumes. Volumes are user-visible storage devices on the device. They include:

* Internal storage (shows their localized names)
* SD cards (shows their volume names)
* USB drives (shows their model names)

Tap on a volume to open it.

At any time, tap <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" style={{verticalAlign:"middle"}} viewBox="0 0 16 16"><path fill="currentColor" d="m13.854 7.854l-1.969-4.127V3.72A1.233 1.233 0 0 0 10.75 3h-5.5a1.234 1.234 0 0 0-1.134.72v.007l-1.97 4.127A1.5 1.5 0 0 0 2 8.5v2A1.5 1.5 0 0 0 3.5 12h9a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-.146-.646ZM5.25 4h5.5a.24.24 0 0 1 .226.14L12.339 7H3.661l1.362-2.857A.24.24 0 0 1 5.25 4ZM13 10.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v2Zm-1-1a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"/></svg> **Volumes** button to return to the list of volumes.

## Command bar

The command bar has the following buttons:

* **New folder**: create a new folder here. To create nested folders, you can include `/` in the folder name.
* **Upload**: upload files to this folder. Multiple files can be selected at once.
* **Download**: download selected files and folders. If multiple files or a folder is selected, they will be downloaded as a zip file.
* **Rename**: rename the selected item.
* **Delete**: permanently delete the selected items. There will be a confirmation dialog before deleting. Deleted files can't be recovered.
* **Details**: show details of the selected item.

## Filesystem root

Filesystem root (`/` folder) is the root folder of all files and folders on the device. It contains system files that are critical to the device, and the above volumes.

Generally, system files are protected from being modified or deleted. And you shouldn't modify or delete them unless you know what you are doing.

Tap <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" style={{verticalAlign:"middle"}} viewBox="0 0 16 16"><path d="M4 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2z" fill="currentColor" fill-rule="nonzero"/></svg> button, then tap **Go to root folder** to open the filesystem root.

## Files and folders

After entering a volume or filesystem root, you will see a list of files and folders.

Tap on a folder will open it. Tap on a file will not do anything, you need to download and open it on your computer.

Tap the checkbox to select it to enable options in the command bar.

Tap <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" style={{verticalAlign:"middle"}} viewBox="0 0 16 16"><path d="M4 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2z" fill="currentColor" fill-rule="nonzero"/></svg> button on the right to open the menu for this item. The menu has the same options as the command bar.

## Tricks

### Create a bookmark for a folder

The page url contains the serial number of the device and the path of the current folder. You can bookmark it to quickly open the folder next time.
