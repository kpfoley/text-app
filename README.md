# Text Chrome App

This is a fork of the [Chrome Text App](https://github.com/GoogleChromeLabs/text-app) with deliberately limited functionality to provide a distraction-free writing environment for classroom use. To install visit the [Chrome Web Store page](https://chrome.google.com/webstore/detail/deopdfdoagnlnhjagfpnpfeealdkafkf). Specifically, the following features have been deliberately removed or obfuscated:

* Settings menu
* Window controls (maximize button, minimize button)
* Some hotkeys, including Ctrl-+/- (resize font)
* Syntax highlighting

The app launches in full screen mode with a dark theme and a default font size of 14px. The app is meant to run in either kiosk mode (on a [kiosk-enabled chromebook](https://support.google.com/chromebook/answer/3134673?hl=en)) or as a regular Chrome app. Note that running the app in kiosk mode is only possible on older (pre-2017) Chromebooks with Kiosk mode enabled at first boot or on devices managed by a school or other organization.

## Getting the code

You can download the whole source code [as one archive](https://github.com/kpfoley/text-app/archive/master.zip), or get it from the repository using git:

    git clone --recursive git://github.com/kpfoley/text-app.git

## Running the development version

* Check `Developer Mode` in `chrome://extensions`
* Click "Load unpacked extension..." in `chrome://extensions` and select the `text-app` directory.


