
# App Selector - Deep Link Popup  

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/wellbees/app-selector/blob/master/LICENSE)

When entering a website from a mobile device, it is a React component that offers the user two options through a popup.

Options:

- **Continue in the Browser:** The user continues using the website in the mobile browser.
- **Open the App:** It opens the relevant page within the mobile app using deep linking.

## Example Usage

[Show Demo in CodeSandBox](https://codesandbox.io/s/app-selector-dpldf6)

## Screenshots

![IOS App Screenshot](/images/safari-example.gif)
![Android App Screenshot](/images/chrome-example.gif)

## Installation 

Install the package in your project directory

```bash 
  npm install @wellbees/app-selector

  # or

  yarn add @wellbees/app-selector
```

## Usage/Examples

**Provider Usage**
```js
import React from 'react'
import { AppSelectorProvider } from '@wellbees/app-selector'
import selectorConfig from './selectorConfig' // Below is an example

const App = () => {
  return (
    <AppSelectorProvider config={selectorConfig}>

      App Layout

    </AppSelectorProvider>
  )
}

export default App
```

**Deep Link Setting for Single Page**
```js
import React, { useEffect } from 'react'
import { useDeepLinkSettings } from '@wellbees/app-selector'

const Page = () => {
  const { setDeepLink } = useDeepLinkSettings();

  useEffect(() => {
    setDeepLink({
      visible: true,
      commonUrl: 'appName://.....',
      androidUrl: 'appName://.....',
      iosUrl: 'appName://.....',
      huaweiUrl: 'appName://.....'
    });
  }, [setDeepLink]);

  return (
    <div>

      Page Layout

    </div>
  )
}

export default Page

```

**Example App Selector Config Value**
```js
const selectorConfig = {
	appStoreUrl: 'https://apps.apple.com/app/.....',
	playStoreUrl: 'https://play.google.com/store/apps/details?id=.....',
	appGalleryUrl: 'https://appgallery.huawei.com/app/.....',
	appLogo: '/assets/images/logo.svg',
	appName: 'App Name',
	popupTitle: 'See in app...',
	openButtonText: 'Open',
	openButtonColor: '#fec435',
	continueButtonText: 'Continue',
	continueButtonColor: '#dfdfdf',
	isDeepLinkEnabled: true,
	isDeepLinkEnabledForAndroid: true,
	isDeepLinkEnabledForIOS: true,
	isDeepLinkEnabledForHuawei: true,
	continueBrowserCookieHours: 1,
	popupStartTime: 1500
}
```

## Props

**Config Settings**
| Name | Type | Default | Description | 
| --- | --- | --- | --- |
| appStoreUrl | String | | Apple Store Link of the Application |
| playStoreUrl | String | | Play Store Link of the Application |
| appGalleryUrl | String | | App Gallery Link of the Application |
| appLogo | String | | Application Logo |
| appName | String | | Application Name |
| popupTitle | String | `See in app...` | Text in Popup Title |
| openButtonText | String | `Open` | Text on the open button |
| continueButtonText | String | `Continue` | Text on the continue button |
| openButtonColor | String | `#fec435` | Background color of the open button |
| continueButtonColor | String | `#dfdfdf` | Background color of the continue button |
| isDeepLinkEnabled | Boolean | `true` | Popup visibility setting |
| isDeepLinkEnabledForAndroid | Boolean | `true` | Popup visibility setting for Android |
| isDeepLinkEnabledForIOS | Boolean | `true` | Popup visibility setting for IOS |
| isDeepLinkEnabledForHuawei | Boolean | `true` | Popup visibility setting for Huawei |
| continueBrowserCookieHours | Number | `1` | Setting how many hours to hide |
| popupStartTime | Number | `1500` | Time until the pop-up window start |

**DeepLink Settings for Single Page**
| Name | Type | Default | Description | 
| --- | --- | --- | --- |
| visible | Boolean | `true` | Popup visibility setting |
| commonUrl | String | | Deep linking for all platforms |
| androidUrl | String | | Deep linking for Android Specific |
| iosUrl | String | | Deep linking for IOS Specific |
| huaweiUrl | String | | Deep linking for Huawei Specific |

### Features
- Redirect to app stores
- Redirect to application detail pages with Deep Links
- Setting Deep Links according to the page
- Managing popup based on the page
- Link redirection for Android, iOS, and Huawei
- Managing popup for Android, iOS, and Huawei

### Min React Version
React: **17.0.1**


### Packages Used
[prop-types](https://www.npmjs.com/package/prop-types)


## Keywords
`ReactJS`, `React`, `App Selector`, `Deep Link`, `Mobile`, `Browser Selector`, `User Prompt`, `Enhanced Experience`

### Feedback
If you have any feedback, please contact us at tech@wellbees.co.

### Authors
- [@azizsenturk](https://github.com/azizsenturk)


### Thanks
- [@berkayburakm](https://github.com/berkayburakm)
