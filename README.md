### pm-shhh

A Chrome extension for hiding senstive Postman collection/environment variables during livestreams.

<img src="https://user-images.githubusercontent.com/9841162/140598814-2cd327fd-c2b9-4449-af6b-721014e1d8e3.png" height="300px">

#### How to install

I'm too lazy to publish this on the Chrome webstore. You can install it locally instead.

##### 1. Download the code in this repo

In directory of your choice:

`git clone git@github.com:clairefro/pm-shhh.git`

##### 2. Open Chrome extensions menu

In Chrome URL bar, navigate to: `chrome://extensions/`

##### Make sure Dev mode is enabled in upper right

<img src="https://user-images.githubusercontent.com/9841162/140598902-99206513-d9d5-4670-b693-95b58208220a.png" height="100px">

##### Click "Load unpacked" in upper left

<img src="https://user-images.githubusercontent.com/9841162/140598928-71d4bbdf-ace3-4d5a-adcd-8e3ddba6957c.png" height="300px">

##### Select the pm-shhh file folder to unpack

##### That's it.

You should now have the extension in your menu:

<img src="https://user-images.githubusercontent.com/9841162/140598951-44548352-05dd-4c4d-859e-3d1c1b8469d8.png" height="300px">

##### \[Optional\] Pin the extentsion

For easy access, pun the extension to your extensions bar. Click the puzzle piece icon in the Chrome extensions bar, and then the blue pin next to `pm-shhh`

#### Usage

##### Enabled

When the "Censor vars" setting is checked, values in the "Current Value" column of collection and environment variables will be hidden.

![image](https://user-images.githubusercontent.com/9841162/140598997-fa906865-c275-4692-ab46-8855f9c5e28b.png)

WARNING! Clicking to edit a value will reveal the value:

![image](https://user-images.githubusercontent.com/9841162/140599014-9270c0b0-2bc6-4b5b-9c45-fd6eac4f6e2d.png)

But it will be hidden again when you click away. Maybe in the future someone can add an option to hide this too...

##### Disabled

Unchecking the "Censor" setting will reveal the Current Value column values. This is normal Postman behavior.

#### Disclaimer

Hasn't been extensively tested. Don't sue me if you flash your sensitives to the world :O
