========================
CODE SNIPPETS
========================
TITLE: Navigate and Start Development Server
DESCRIPTION: Commands to navigate into the created module directory, open the example projects for Android and iOS, and start the Expo development server. The development server allows for hot-reloading of native code changes.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/get-started.mdx#_snippet_8

LANGUAGE: shell
CODE:
```
cd my-module
npm run open:android
npm run open:ios
```

LANGUAGE: shell
CODE:
```
cd example
npx expo start
```

----------------------------------------

TITLE: Start Expo Development Server (npx expo)
DESCRIPTION: Starts the Expo development server, allowing you to run your application on simulators, emulators, or physical devices. It provides a QR code for easy connection via Expo Go. Requires dependencies to be installed first.

SOURCE: https://github.com/expo/expo/blob/main/templates/expo-template-default/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npx expo start
```

----------------------------------------

TITLE: Initialize Project from Example with --example
DESCRIPTION: Bootstrap a project using a specific example from the expo/examples repository by providing the example name to the `--example` flag. This is a quick way to start with pre-built functionalities like Expo Router.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/more/create-expo.mdx#_snippet_5

LANGUAGE: shell
CODE:
```
npx create-expo-app --example with-router
```

----------------------------------------

TITLE: Set up Android Emulator - Step 3
DESCRIPTION: Select the desired hardware profile for your emulator, recommending testing with various devices or starting with a recent Pixel device.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/_androidEmulatorInstructions.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
<Step label="3">

Under **Select Hardware**, choose the type of hardware you'd like to emulate. We recommend testing against a variety of devices, but if you're unsure where to start, the newest device in the Pixel line could be a good choice.

<ContentSpotlight
  alt="Android Studio create virtual device hardware selection."
  src="/static/images/android-studio/select-hardware.png"
  className="max-w-[640px]"
/>

</Step>
```

----------------------------------------

TITLE: Install Watchman using Homebrew (Bash)
DESCRIPTION: Installs Watchman, a tool for watching changes in the filesystem, which is recommended for better performance. This command requires Homebrew to be installed and updated.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/_xcodeInstructions.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
brew update && brew install watchman
```

----------------------------------------

TITLE: Start Expo Development Server
DESCRIPTION: Command to start the Expo development server. This allows for live reloading and testing of changes made to the Expo application and its modules.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/get-started.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
npx expo start
```

----------------------------------------

TITLE: Step Component Usage for Guide Structure
DESCRIPTION: Illustrates the use of the `Step` component to structure a multi-step guide. Each step is clearly labeled with a number and contains descriptive text and UI elements, such as images, to explain a particular action.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/_androidEmulatorInstructions.mdx#_snippet_1

LANGUAGE: javascript
CODE:
```
import { Step } from '~/ui/components/Step';
import { ContentSpotlight } from '~/ui/components/ContentSpotlight';

<Step label="1">
On the Android Studio main screen, click **More Actions**, then **Virtual Device Manager** in the dropdown.

<ContentSpotlight
  alt="Android Studio configure."
  src="/static/images/android-studio/virtual-device.png"
  className="max-w-[640px]"
/>

</Step>
```

LANGUAGE: javascript
CODE:
```
import { Step } from '~/ui/components/Step';
import { ContentSpotlight } from '~/ui/components/ContentSpotlight';

<Step label="2">
Click the **Create device** button.

<ContentSpotlight
  alt="Android Studio create virtual device."
  src="/static/images/android-studio/create-device.png"
  className="max-w-[640px]"
/>

</Step>
```

LANGUAGE: javascript
CODE:
```
import { Step } from '~/ui/components/Step';
import { ContentSpotlight } from '~/ui/components/ContentSpotlight';

<Step label="3">
Under **Select Hardware**, choose the type of hardware you'd like to emulate. We recommend testing against a variety of devices, but if you're unsure where to start, the newest device in the Pixel line could be a good choice.

<ContentSpotlight
  alt="Android Studio create virtual device hardware selection."
  src="/static/images/android-studio/select-hardware.png"
  className="max-w-[640px]"
/>

</Step>
```

LANGUAGE: javascript
CODE:
```
import { Step } from '~/ui/components/Step';
import { ContentSpotlight } from '~/ui/components/ContentSpotlight';

<Step label="4">
Select an OS version to load on the emulator (probably one of the system images in the **Recommended** tab), and download the image.

<ContentSpotlight
  alt="Android Studio create virtual device os selection."
  src="/static/images/android-studio/select-os.png"
  className="max-w-[640px]"
/>

</Step>
```

LANGUAGE: javascript
CODE:
```
import { Step } from '~/ui/components/Step';

<Step label="5">
Change any other settings you'd like, and press **Finish** to create the emulator. You can now run this emulator anytime by pressing the Play button in the AVD Manager window.

</Step>
```

----------------------------------------

TITLE: ContentSpotlight Component Usage
DESCRIPTION: Demonstrates the usage of the `ContentSpotlight` component, which displays an image with alt text and custom styling. This component is used to visually guide users through the setup process by showing screenshots.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/_androidEmulatorInstructions.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
import { ContentSpotlight } from '~/ui/components/ContentSpotlight';

<ContentSpotlight
  alt="Android Studio configure."
  src="/static/images/android-studio/virtual-device.png"
  className="max-w-[640px]"
/>
```

LANGUAGE: javascript
CODE:
```
import { ContentSpotlight } from '~/ui/components/ContentSpotlight';

<ContentSpotlight
  alt="Android Studio create virtual device."
  src="/static/images/android-studio/create-device.png"
  className="max-w-[640px]"
/>
```

LANGUAGE: javascript
CODE:
```
import { ContentSpotlight } from '~/ui/components/ContentSpotlight';

<ContentSpotlight
  alt="Android Studio create virtual device hardware selection."
  src="/static/images/android-studio/select-hardware.png"
  className="max-w-[640px]"
/>
```

LANGUAGE: javascript
CODE:
```
import { ContentSpotlight } from '~/ui/components/ContentSpotlight';

<ContentSpotlight
  alt="Android Studio create virtual device os selection."
  src="/static/images/android-studio/select-os.png"
  className="max-w-[640px]"
/>
```

----------------------------------------

TITLE: Start Expo Project
DESCRIPTION: Run this command to start your Expo project after creation or setup. You can then view the app on a mobile device using Expo Go or in a web browser.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/router/installation.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
$ npx expo start
```

----------------------------------------

TITLE: Create New Expo Module
DESCRIPTION: Initializes a new Expo module project using the create-expo-module script. This command generates the necessary files for the module and an example application for both Android and iOS.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/get-started.mdx#_snippet_7

LANGUAGE: shell
CODE:
```
$ npx create-expo-module@latest my-module
```

----------------------------------------

TITLE: Example Usage of Documentation Components
DESCRIPTION: Demonstrates how to use documentation helper components like APIInstallSection and BoxLink to guide users on installing and learning more about the @shopify/flash-list component.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/flash-list.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
<APIInstallSection href="https://shopify.github.io/flash-list/docs/" />

<BoxLink
  title="Visit official documentation"
  description="Get full information on API and its usage."
  Icon={BookOpen02Icon}
  href="https://shopify.github.io/flash-list/"
/>
```

----------------------------------------

TITLE: Installation Link
DESCRIPTION: Provides a link to the installation guide for the datetimepicker component, often used within documentation pages to direct users to setup instructions.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/date-time-picker.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
<APIInstallSection href="https://github.com/react-native-community/react-native-datetimepicker#getting-started" />
```

----------------------------------------

TITLE: Starting Expo Development Server
DESCRIPTION: Command to start the Expo development server. Pressing 'a' during execution will automatically open the Android emulator and install Expo Go.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/androidSimulatedExpoGo.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
npx expo start
```

----------------------------------------

TITLE: Example Usage of Documentation Components
DESCRIPTION: Demonstrates how to use documentation helper components like APIInstallSection and BoxLink to guide users on installing and learning more about the @shopify/flash-list component.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v53.0.0/sdk/flash-list.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
<APIInstallSection href="https://shopify.github.io/flash-list/docs/" />

<BoxLink
  title="Visit official documentation"
  description="Get full information on API and its usage."
  Icon={BookOpen02Icon}
  href="https://shopify.github.io/flash-list/"
/>
```

----------------------------------------

TITLE: Automatic Setup with Expo Next.js Template
DESCRIPTION: Quickly start a new Expo project configured with Next.js using the provided example template. This command initializes a project that is pre-set for web development with Next.js.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/using-nextjs.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx create-expo-app -e with-nextjs
```

----------------------------------------

TITLE: Installation Link
DESCRIPTION: Provides a link to the installation guide for the datetimepicker component, often used within documentation pages to direct users to setup instructions.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v53.0.0/sdk/date-time-picker.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
<APIInstallSection href="https://github.com/react-native-community/react-native-datetimepicker#getting-started" />
```

----------------------------------------

TITLE: Install Expo Project Dependencies (npm)
DESCRIPTION: Installs all necessary project dependencies defined in package.json. This is a prerequisite for starting the Expo development server. Requires Node.js and npm/yarn to be installed.

SOURCE: https://github.com/expo/expo/blob/main/templates/expo-template-default/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm install
```

----------------------------------------

TITLE: Install Expo Modules
DESCRIPTION: Command to install Expo modules and configure Expo CLI for bundling. This step is necessary if your project does not already include the `expo` package or use Expo CLI.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/getting-started.mdx#_snippet_1

LANGUAGE: shell
CODE:
```
$ npx install-expo-modules@latest
```

----------------------------------------

TITLE: Start Expo Project
DESCRIPTION: Starts the Expo development server for a project, allowing for testing and development.

SOURCE: https://github.com/expo/expo/blob/main/guides/releasing/Quality Assurance.md#_snippet_1

LANGUAGE: shell
CODE:
```
npx expo start
```

----------------------------------------

TITLE: Run Example Project: Build and Run
DESCRIPTION: Commands to build the module and run the example project. The first command starts the TypeScript compiler to watch for changes, while the subsequent commands compile and run the example app on Android and iOS.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/third-party-library.mdx#_snippet_2

LANGUAGE: shell
CODE:
```
# Run this in the root of the project to start the TypeScript compiler
$ npm run build
```

LANGUAGE: shell
CODE:
```
$ cd example
# Run the example app on Android
$ npx expo run:android
# Run the example app on iOS
$ npx expo run:ios
```

----------------------------------------

TITLE: Install react-native-gesture-handler
DESCRIPTION: This snippet shows how to install the react-native-gesture-handler library using the provided installation guide component. It links to the official documentation for detailed setup instructions.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/gesture-handler.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
import { APIInstallSection } from '~/components/plugins/InstallSection';

<APIInstallSection href="https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation" />
```

----------------------------------------

TITLE: Prebuild Expo Application
DESCRIPTION: Command to generate or update native projects (android and ios directories) for an Expo application. This is necessary if the project does not already have native directories.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/get-started.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npx expo prebuild --clean
```

----------------------------------------

TITLE: Start Expo Project
DESCRIPTION: Starts the Expo development server for a project. This is used to test loading apps that are managed by Expo's own development workflow.

SOURCE: https://github.com/expo/expo/blob/main/guides/releasing/Quality Assurance.md#_snippet_10

LANGUAGE: bash
CODE:
```
npx expo start
```

----------------------------------------

TITLE: Start Expo Development Server
DESCRIPTION: Initiates the Expo development server. Once the server is running, pressing 'i' will automatically open the iOS Simulator and install Expo Go if needed.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/iosSimulatedExpoGo.mdx#_snippet_0

LANGUAGE: cli
CODE:
```
npx expo start
```

----------------------------------------

TITLE: Set up Android Emulator - Step 4
DESCRIPTION: Choose an Android OS version for the emulator, download the system image (preferably from the 'Recommended' tab), and proceed.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/_androidEmulatorInstructions.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
<Step label="4">

Select an OS version to load on the emulator (probably one of the system images in the **Recommended** tab), and download the image.

<ContentSpotlight
  alt="Android Studio create virtual device os selection."
  src="/static/images/android-studio/select-os.png"
  className="max-w-[640px]"
/>

</Step>
```

----------------------------------------

TITLE: Install Dependencies and Run Expo Docs Locally
DESCRIPTION: Installs project dependencies using Yarn and starts the Expo documentation development server.

SOURCE: https://github.com/expo/expo/blob/main/docs/README.md#_snippet_1

LANGUAGE: sh
CODE:
```
cd docs
yarn
yarn run dev
```

----------------------------------------

TITLE: Installation Guide
DESCRIPTION: Provides a link to the official installation guide for the masked view library.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v53.0.0/sdk/masked-view.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
<APIInstallSection href="https://github.com/react-native-masked-view/masked-view#getting-started" />
```

----------------------------------------

TITLE: Install react-native-gesture-handler
DESCRIPTION: This snippet shows how to install the react-native-gesture-handler library using the provided installation guide component. It links to the official documentation for detailed setup instructions.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v53.0.0/sdk/gesture-handler.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
import { APIInstallSection } from '~/components/plugins/InstallSection';

<APIInstallSection href="https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation" />
```

----------------------------------------

TITLE: Installation Guide
DESCRIPTION: Provides a link to the official installation guide for the masked view library.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/masked-view.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
<APIInstallSection href="https://github.com/react-native-masked-view/masked-view#getting-started" />
```

----------------------------------------

TITLE: Start React Native Project
DESCRIPTION: Starts a standard React Native development server. This is used to test loading apps that are managed by a bare React Native workflow.

SOURCE: https://github.com/expo/expo/blob/main/guides/releasing/Quality Assurance.md#_snippet_11

LANGUAGE: bash
CODE:
```
npx react-native start
```

----------------------------------------

TITLE: Manual Installation and Configuration Guide
DESCRIPTION: Provides instructions for manually installing and configuring the expo-updates library, including options for bare React Native apps and app config-based setups. It highlights the need for a remote service implementing the Expo Updates protocol.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/updates.mdx#_snippet_1

LANGUAGE: markdown
CODE:
```
## Installation

The `expo-updates` library can be automatically configured using [EAS Update](/eas-update/introduction/), which is a hosted service that manages and serves updates to your app. To get started with EAS Update, follow the instructions in the [Get started](/eas-update/getting-started/) guide.

Alternatively, it is also possible to configure the `expo-updates` library manually in cases where a different remote update service is required or configuration is only specified in native files.

<Collapsible summary="Manual installation, configuration, and custom remote update services">

<APIInstallSection hideBareInstructions />

If you're installing this library in a [bare React Native app](/bare/overview/) or a generic app with manually configured native code, follow these [installation instructions](/bare/installing-updates/).

If using [app config](/workflow/configuration/) for configuration, this library can be configured by setting at least the following app config properties:

- [`updates.url`](../config/app/#updates): a URL of a remote service implementing the [Expo Updates protocol](/technical-specs/expo-updates-1/)
- [`runtimeVersion`](../config/app/#runtimeversion): a [runtime version](#runtime-version)

The remote service must implement the [Expo Updates protocol](/technical-specs/expo-updates-1/). [EAS Update](/eas-update/introduction) is one such service, but it is also possible to use this library with a custom server.

<BoxLink
  title="Custom Expo Updates Server"
  description="Example implementation of a custom server and an app using that server"
  href="https://github.com/expo/custom-expo-updates-server"
  Icon={GithubIcon}
/>

</Collapsible>
```

----------------------------------------

TITLE: Start Local Development Server
DESCRIPTION: Command to start the local development server for an Expo project, allowing for iterative development and testing.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/getting-started.mdx#_snippet_12

LANGUAGE: bash
CODE:
```
npx expo start
```

----------------------------------------

TITLE: Install expo-dev-client Guide Link
DESCRIPTION: A UI component linking to the guide for installing and configuring 'expo-dev-client', which provides an Expo Go-style app launcher interface for debug app variants.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/bare/overview.mdx#_snippet_4

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Install expo-dev-client"
  description={
    <>
      <CODE>expo-dev-client</CODE> provides access to Expo Go-style app launcher interface into your
      debug app variants. Learn how to install and configure it in your existing React Native
      project.
    </>
  }
  Icon={BookOpen02Icon}
  href="/bare/install-dev-builds-in-bare/"
/>
```

----------------------------------------

TITLE: Reinstall Pods for iOS
DESCRIPTION: Command to reinstall native dependencies for iOS projects, particularly after adding new native files or modifying the module configuration.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/get-started.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
npx pod-install
```

----------------------------------------

TITLE: Workflow Examples Link
DESCRIPTION: Provides a link to the Expo workflows examples guide, detailing how to automate development and release processes.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas/workflows/automating-eas-cli.mdx#_snippet_9

LANGUAGE: jsx
CODE:
```
<BoxLink
  href="/eas/workflows/examples"
  title="Workflow examples"
  description="Learn how to use workflows to create development builds, publish preview updates, and create production builds."
  Icon={Dataflow03Icon}
/>
```

----------------------------------------

TITLE: Install Expo Dev Client
DESCRIPTION: Installs the expo-dev-client library, which is recommended for creating development builds for faster iteration and a more robust development environment.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build/setup.mdx#_snippet_4

LANGUAGE: shell
CODE:
```
$ npx expo install expo-dev-client
```

----------------------------------------

TITLE: Use Local Expo Module in App
DESCRIPTION: Example of importing and using a locally created Expo module within an Expo application's main component (e.g., App.tsx). It demonstrates calling a native method like 'hello()'.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/get-started.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
import MyModule from './modules/my-module';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{MyModule.hello()}</Text>
    </View>
  );
}
```

----------------------------------------

TITLE: Run Expo Example App
DESCRIPTION: Navigates to the example directory and runs the Expo app on iOS or Android. This command sequence allows for testing the example project.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/config-plugin-and-native-module-tutorial.mdx#_snippet_8

LANGUAGE: bash
CODE:
```
# Navigate to the example project
$ cd example
# Run the example app on iOS
$ npx expo run:ios
# Run the example app on Android
$ npx expo run:android
```

----------------------------------------

TITLE: Edit iOS Native Module (Swift)
DESCRIPTION: Example of modifying the native implementation of an Expo module on iOS. This involves changing the return value of a method in the Swift file.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/get-started.mdx#_snippet_6

LANGUAGE: swift
CODE:
```
func hello() -> String { "Hello world! 🌎🍎" }
```

----------------------------------------

TITLE: Expo Push Notification Setup Example
DESCRIPTION: This snippet demonstrates the basic setup for push notifications in an Expo app. It shows how to import necessary components and libraries, and outlines the prerequisites for enabling push notifications, such as user permissions and obtaining an `ExpoPushToken`.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/push-notifications/push-notifications-setup.mdx#_snippet_1

LANGUAGE: javascript
CODE:
```
import { Collapsible } from '~/ui/components/Collapsible';
import { ContentSpotlight } from '~/ui/components/ContentSpotlight';
import { Terminal } from '~/ui/components/Snippet';
import { Step } from '~/ui/components/Step';
import { Tab, Tabs } from '~/ui/components/Tabs';
import { VideoBoxLink } from '~/ui/components/VideoBoxLink';

// ... other imports and setup

// To get the client-side ready for push notifications, the following things are required:
// - The user's permission to send them push notifications.
// - The app's [`ExpoPushToken`](/versions/latest/sdk/notifications/#expopushtoken).

// Example of a collapsible section for alternative FCM/APNs usage
// <Collapsible summary="Do you want to use FCM / APNs directly, instead of the Expo push notification service?">
//   If you need finer-grained control over your notifications, communicating directly with FCM and APNs may be necessary. Expo does not lock you into using Expo Application Services, and the `expo-notifications` API is push-service agnostic. Learn how to ["Send notifications with FCM and APNs"](/push-notifications/sending-notifications-custom/).
// </Collapsible>

// Example of a video link component
// <VideoBoxLink
//   videoId="BCCjGtKtBjE"
//   title="Expo Notifications with EAS | Complete Guide"
//   description="Learn how to set up push notifications in an Expo project. This video covers configuring Firebase for FCM v1 on Android, setting up Android and iOS credentials on EAS, building with EAS Build, and testing with Expo Notifications tool."
// />

// Example of a step component with a terminal command
// <Step label="1">
// ## Install libraries
// Run the following command to install the `expo-notifications`, `expo-device` and `expo-constants` libraries:
// <Terminal cmd={['$ npx expo install expo-notifications expo-device expo-constants']} />
// - [`expo-notifications`](/versions/latest/sdk/notifications) library is used to request a user's permission and to obtain the `ExpoPushToken` for sending push notifications.
// - [`expo-device`](/versions/latest/sdk/device) is used to check whether the app is running on a physical device.
// - [`expo-constants`](/versions/latest/sdk/constants) is used to get the `projectId` value from the app config.
// </Step>
```

----------------------------------------

TITLE: Start Expo Development Server
DESCRIPTION: Command to start the local development server for your Expo project. This allows you to run and test your app on devices or simulators.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/push-notifications/push-notifications-setup.mdx#_snippet_5

LANGUAGE: bash
CODE:
```
$ npx expo start
```

----------------------------------------

TITLE: Link to Braze Expo Setup Guide
DESCRIPTION: A React component providing a link to the setup guide for integrating the Braze SDK with Expo. It includes a title, description, and the URL for the developer documentation.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/using-push-notifications-services.mdx#_snippet_4

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Braze Expo Setup"
  description="Follow this guide for a step-by-step setup on how to integrate Braze in your Expo project."
  href="https://www.braze.com/docs/developer_guide/platforms/react_native/sdk_integration"
  Icon={BookOpen02Icon}
/>
```

----------------------------------------

TITLE: Run Example App (Terminal Commands)
DESCRIPTION: Provides the necessary terminal commands to navigate to the example project directory, prebuild the application to update native files, and then run the example app on both Android and iOS devices or simulators.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/config-plugin-and-native-module-tutorial.mdx#_snippet_22

LANGUAGE: shell
CODE:
```
cd example
# execute our plugin and update native files
npx expo prebuild
# Run the example app on Android
npx expo run:android
# Run the example app on iOS
npx expo run:ios
```

----------------------------------------

TITLE: Create Expo App with TinyBase Example
DESCRIPTION: This command bootstraps a new Expo project with the TinyBase library integrated. It provides a starting point for developing local-first applications that leverage TinyBase for reactive data management and persistence.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/local-first.mdx#_snippet_1

LANGUAGE: shell
CODE:
```
$ npx create-expo-app --example with-tinybase
```

----------------------------------------

TITLE: EAS Build Profile Configuration
DESCRIPTION: Shows how to integrate custom build configurations into your eas.json file. The 'config' property within a build profile points to the custom YAML file. This example demonstrates a single config file for all platforms.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/custom-builds/get-started.mdx#_snippet_1

LANGUAGE: json
CODE:
```
{
  "build": {
    "test": {
      "config": "test.yml"
    }
  }
}
```

----------------------------------------

TITLE: iOS Setup: Install Pods
DESCRIPTION: After installing the npm package for expo-video-thumbnails, run this command to install the necessary native dependencies (pods) for iOS projects.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-video-thumbnails/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npx pod-install
```

----------------------------------------

TITLE: Install/Update EAS CLI
DESCRIPTION: Ensures you have the latest version of the EAS CLI installed, which is necessary for managing Expo Application Services (EAS) features like Workflows. This command is run in your terminal.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas/workflows/get-started.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx eas-cli@latest install
```

----------------------------------------

TITLE: YAML Example: Multiple Build Steps
DESCRIPTION: An example showcasing a multi-step build process, including checking out code, installing dependencies, and running tests.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/custom-builds/schema.mdx#_snippet_3

LANGUAGE: yaml
CODE:
```
build:
  name: Run tests
  steps:
    - eas/checkout
    - run:
        name: Install dependencies
        command: npm install
    - run:
        name: Run tests
        command: |
          echo "Running tests..."
          npm test
```

----------------------------------------

TITLE: Deploy to production with EAS Workflows
DESCRIPTION: This example guides you through setting up EAS Workflows for production deployments. It covers building and submitting apps to the app stores or deploying over-the-air updates when changes are merged into the main branch.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas/workflows/examples/introduction.mdx#_snippet_2

LANGUAGE: JavaScript
CODE:
```
<BoxLink
  title="Deploy to production"
  description="Learn how to build and submit to the app stores or send an over-the-air update when merging to main."
  href="/eas/workflows/examples/deploy-to-production"
  Icon={BookOpen02Icon}
/>
```

----------------------------------------

TITLE: Run Build and Example Project
DESCRIPTION: Commands to build the module's JavaScript bundle and run the example application on Android and iOS devices or simulators.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/native-view-tutorial.mdx#_snippet_7

LANGUAGE: bash
CODE:
```
# Run this in the root of the project to start the TypeScript compiler
$ npm run build
```

LANGUAGE: bash
CODE:
```
# Navigate to the example directory
$ cd example
# Run the example app on Android
$ npx expo run:android
# Run the example app on iOS
$ npx expo run:ios
```

----------------------------------------

TITLE: Edit Android Native Module (Kotlin)
DESCRIPTION: Example of modifying the native implementation of an Expo module on Android. This involves changing the return value of a method in the Kotlin file.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/get-started.mdx#_snippet_5

LANGUAGE: kotlin
CODE:
```
fun hello(): String = "Hello world! 🌎🤖"
```

----------------------------------------

TITLE: Link to OneSignal Expo SDK Setup Guide
DESCRIPTION: A React component that directs users to a step-by-step guide for integrating the OneSignal SDK into an Expo project. It specifies the title, description, and external URL for the setup instructions.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/using-push-notifications-services.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="OneSignal Expo SDK Setup"
  description="Follow this guide for a step-by-step setup on how to integrate OneSignal in your Expo project."
  href="https://documentation.onesignal.com/docs/react-native-expo-sdk-setup"
  Icon={BookOpen02Icon}
/>
```

----------------------------------------

TITLE: Expo Tutorial Link
DESCRIPTION: Links to the Expo Tutorial, a step-by-step guide for building Expo apps that run on Android, iOS, and web.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/overview.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Expo Tutorial"
  description="If you are new to Expo, we recommend starting with this tutorial. It provides a step-by-step guide on how to build an Expo app that runs on Android, iOS and web."
  href="/tutorial/introduction/"
  Icon={GraduationHat02DuotoneIcon}
/>
```

----------------------------------------

TITLE: Start Development Server
DESCRIPTION: Starts the Metro bundler for the development server. This command is used after installing expo-dev-client and prepares the environment for development builds.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/eas/configure-development-build.mdx#_snippet_1

LANGUAGE: shell
CODE:
```
$ npx expo start
```

----------------------------------------

TITLE: Install react-native-webview
DESCRIPTION: Demonstrates installing a library with native code that is included in Expo Go. The command installs the library, allowing the JS bundle to interact with the pre-bundled native code within Expo Go.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/development-builds/introduction.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
npx expo install react-native-webview
```

----------------------------------------

TITLE: Expo Go for Learning
DESCRIPTION: Expo Go is an application that allows users to learn React by trying it out directly on their simulator or device. It provides a quick and easy way to get started with React Native development without complex setup.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/core-concepts.mdx#_snippet_5

LANGUAGE: react
CODE:
```
<BoxLink
  title="Expo Go"
  description="Learn React by trying it on your simulator or device."
  href="/get-started/set-up-your-environment/"
  Icon={ExpoGoLogo}
/>
```

----------------------------------------

TITLE: Create Local Expo Module CLI
DESCRIPTION: Command to create a new local Expo module using the create-expo-module CLI. This command initializes the module structure and prompts for necessary information.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/get-started.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-expo-module@latest --local
```

----------------------------------------

TITLE: Install and Run Lighthouse CLI
DESCRIPTION: Installs the Lighthouse CLI globally and then runs Lighthouse against a specified URL to audit performance, accessibility, and more.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/analyzing-bundles.mdx#_snippet_8

LANGUAGE: bash
CODE:
```
# Install the lighthouse CLI
$ npm install -g lighthouse

# Run the lighthouse CLI for your site
$ npx lighthouse <url> --view
```

----------------------------------------

TITLE: Example Test File
DESCRIPTION: A simple example of a test file that can be placed in a `__tests__` directory to verify the Jest setup.

SOURCE: https://github.com/expo/expo/blob/main/packages/jest-expo/README.md#_snippet_1

LANGUAGE: javascript
CODE:
```
it('works', () => {
  expect(1).toBe(1);
});
```

----------------------------------------

TITLE: Install EAS CLI
DESCRIPTION: Command to install the EAS CLI globally using npm. This tool is essential for interacting with EAS services from your terminal. It's recommended to keep EAS CLI updated.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/getting-started.mdx#_snippet_3

LANGUAGE: shell
CODE:
```
$ npm install --global eas-cli
```

----------------------------------------

TITLE: Set up Android Emulator - Step 5
DESCRIPTION: Finalize emulator creation by adjusting settings and pressing 'Finish'. The emulator can be launched from the AVD Manager.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/_androidEmulatorInstructions.mdx#_snippet_4

LANGUAGE: jsx
CODE:
```
<Step label="5">

Change any other settings you'd like, and press **Finish** to create the emulator. You can now run this emulator anytime by pressing the Play button in the AVD Manager window.

</Step>
```

----------------------------------------

TITLE: Start Expo Development Server
DESCRIPTION: Initiates the Expo development server, allowing you to preview your application on a device or simulator. This command is essential for the live development workflow.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/get-started/start-developing.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx expo start
```

----------------------------------------

TITLE: Example: Installing Expo Modules
DESCRIPTION: Provides a link to instructions on installing the Expo Modules API and using it for native extensions. Utilizes the BoxLink component for a structured link.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/brownfield/overview.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Install Expo modules"
  description="Install the Expo Modules API and use it to add existing Expo modules or write your own native extensions."
  href="/brownfield/installing-expo-modules/"
  Icon={BookOpen02Icon}
/>
```

----------------------------------------

TITLE: Install @expo/package-manager
DESCRIPTION: Installs the @expo/package-manager library into your project using the yarn package manager. This is the initial setup step.

SOURCE: https://github.com/expo/expo/blob/main/packages/@expo/package-manager/README.md#_snippet_0

LANGUAGE: sh
CODE:
```
yarn add @expo/package-manager
```

----------------------------------------

TITLE: Running a Build with Custom Configuration
DESCRIPTION: Command to execute an EAS build using a specific profile that includes custom build configurations. The '-p' flag specifies the platform (e.g., android) and '-e' specifies the build profile name (e.g., test).

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/custom-builds/get-started.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
$ eas build -p android -e test
```

----------------------------------------

TITLE: Install Expo Font, Google Font, and Splash Screen
DESCRIPTION: Installs necessary libraries: `expo-font` for font handling, a Google Font package (`@expo-google-fonts/inter`), and `expo-splash-screen` to manage the splash screen during font loading. This setup is for the `useFonts` hook method.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/user-interface/fonts.mdx#_snippet_10

LANGUAGE: bash
CODE:
```
$ npx expo install @expo-google-fonts/inter expo-font expo-splash-screen
```

----------------------------------------

TITLE: Package.json Script for Development Server
DESCRIPTION: Provides a shortcut script in package.json to start the Expo development server with the APP_VARIANT environment variable set to 'development', simplifying the launch process for development builds.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build-reference/variants.mdx#_snippet_5

LANGUAGE: json
CODE:
```
{
  "scripts": {
    "dev": "APP_VARIANT=development npx expo start"
  }
}
```

----------------------------------------

TITLE: Run pod-install CLI
DESCRIPTION: Execute the pod-install command using npx to automatically handle common issues with CocoaPods installation and project setup.

SOURCE: https://github.com/expo/expo/blob/main/packages/pod-install/README.md#_snippet_0

LANGUAGE: sh
CODE:
```
npx pod-install
```

----------------------------------------

TITLE: Build and Run Example Project
DESCRIPTION: Commands to build the TypeScript project and run the example application on iOS and Android. This verifies the native module integration.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/native-module-tutorial.mdx#_snippet_8

LANGUAGE: bash
CODE:
```
# Run this in the root of the project to start the TypeScript compiler
$ npm run build
```

LANGUAGE: bash
CODE:
```
$ cd example
# Run the example app on Android
$ npx expo run:android
# Run the example app on iOS
$ npx expo run:ios
```

----------------------------------------

TITLE: Install EAS CLI, Initialize Project, and Install Expo Insights
DESCRIPTION: This snippet guides users through installing the EAS CLI, initializing their project with EAS, and installing the `expo-insights` library. These steps are necessary prerequisites for integrating EAS Insights into an Expo project.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-insights/introduction.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
# Install EAS CLI if you have not already
$ npm i -g eas-cli

# Initialize your project EAS if you have not already 
$ eas init

# Install the library
$ npx expo install expo-insights
```

----------------------------------------

TITLE: Install expo-background-fetch
DESCRIPTION: Installs the expo-background-fetch package into your project using the Expo CLI. This command ensures compatibility with your Expo project setup.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-background-fetch/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install expo-background-fetch
```

----------------------------------------

TITLE: Build and Run Expo Example App
DESCRIPTION: Commands to prebuild the Expo example application with a clean build, and then run it on both Android and iOS simulators or devices.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/native-view-tutorial.mdx#_snippet_10

LANGUAGE: shell
CODE:
```
# Prebuild the example app with the --clean flag to ensure a clean build
$ npx expo prebuild --clean
# Run the example app on Android
$ npx expo run:android
# Run the example app on iOS
$ npx expo run:ios
```

----------------------------------------

TITLE: Start Expo Metro Bundler
DESCRIPTION: Starts the Metro bundler for your Expo project. When `expo-dev-client` is installed, this command will automatically direct the QR code and connections to your development build instead of Expo Go.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/development-builds/expo-go-to-dev-build.mdx#_snippet_3

LANGUAGE: shell
CODE:
```
$ npx expo start
```

----------------------------------------

TITLE: Run Metro for Native Component List
DESCRIPTION: Starts the Metro bundler specifically for the native component list example, allowing you to test it with the built Expo Go app.

SOURCE: https://github.com/expo/expo/blob/main/apps/expo-go/README.md#_snippet_5

LANGUAGE: bash
CODE:
```
cd apps/native-component-list
EXPO_SDK_VERSION=UNVERSIONED npx expo start --clear
```

----------------------------------------

TITLE: Start Expo Project
DESCRIPTION: Initiates the Expo development server from the project directory, allowing selection and running of tests from an initial screen.

SOURCE: https://github.com/expo/expo/blob/main/apps/test-suite/README.md#_snippet_1

LANGUAGE: shell
CODE:
```
expo start
```

----------------------------------------

TITLE: Initialize EAS Project
DESCRIPTION: Links your local Expo project to EAS, creating an EAS project and configuring necessary files. This command is essential for using EAS services, including Workflows, and should be run in your project's root directory.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas/workflows/get-started.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
$ npx eas-cli@latest init
```

----------------------------------------

TITLE: Install and run Lighthouse CLI
DESCRIPTION: Installs the Lighthouse CLI globally and then runs it against a specified URL to audit website performance, accessibility, and SEO. Requires a production build to be served.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/analyzing-bundles.mdx#_snippet_9

LANGUAGE: bash
CODE:
```
# Install the lighthouse CLI
$ npm install -g lighthouse

# Run the lighthouse CLI for your site
$ npx lighthouse <url> --view
```

----------------------------------------

TITLE: Simulator/Emulator Build and Publish
DESCRIPTION: Commands to build Expo Go clients for simulators/emulators and publish them to S3. These builds are used for local development and testing via `expo client:install`.

SOURCE: https://github.com/expo/expo/blob/main/guides/releasing/Release Workflow.md#_snippet_17

LANGUAGE: bash
CODE:
```
et eas ios-simulator-client-build-and-publish
et eas android-apk-build-and-publish
```

LANGUAGE: bash
CODE:
```
et client-install -p {ios,android}
```

----------------------------------------

TITLE: Link to EAS Build Monorepo Setup Guide
DESCRIPTION: A BoxLink component linking to the guide on setting up EAS Build for projects utilizing a monorepo structure. It includes the necessary title, description, and icon.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/development-builds/next-steps.mdx#_snippet_5

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Set up EAS Build with a monorepo "
  description="Learn how to set up EAS Build with a monorepo."
  href="/build-reference/build-with-monorepos/"
  Icon={BuildIcon}
/>
```

----------------------------------------

TITLE: React Component Example (GreetingText)
DESCRIPTION: An example of a React PureComponent in Expo, demonstrating component structure, prop types, lifecycle methods, state management, and styling using StyleSheet. It showcases common patterns for building UI components.

SOURCE: https://github.com/expo/expo/blob/main/guides/Expo JavaScript Style Guide.md#_snippet_13

LANGUAGE: javascript
CODE:
```
import Expo from 'expo';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Log from '../log/Log';
import Colors from '../style/Colors';

export default class GreetingText extends React.PureComponent {
  static propTypes = {
    greeting: PropTypes.string.isRequired,
    ...Text.propTypes,
  };

  componentDidUpdate() {
    Log.info('The greeting was re-rendered');
  }

  render() {
    let { greeting, style, ...props } = this.props;
    return (
      <Text {...props} onPress={this._handlePress} style={[styles.greeting, style]}>
        {greeting}
      </Text>
    );
  }

  _handlePress = event => {
    alert('Congratulations!');
  };
}

const styles = StyleSheet.create({
  greeting: {
    color: Colors.energetic,
    fontSize: 30,
  },
});
```

----------------------------------------

TITLE: Install expo-image-picker
DESCRIPTION: Installs the `expo-image-picker` library using the Expo CLI. It's recommended to stop the development server before installation and restart it afterward for changes to take effect.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/image-picker.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx expo install expo-image-picker
```

----------------------------------------

TITLE: Reset Expo Project (npm)
DESCRIPTION: Resets the Expo project by moving the current starter code to an 'app-example' directory and creating a clean 'app' directory. This is useful for starting development from scratch. It's a custom script defined in package.json.

SOURCE: https://github.com/expo/expo/blob/main/templates/expo-template-default/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
npm run reset-project
```

----------------------------------------

TITLE: Displaying Android Setup Instructions
DESCRIPTION: Renders React components that provide detailed instructions for setting up an Android emulator and using Android Studio.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/androidSimulatedExpoGo.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
<AndroidStudioInstructions />
<AndroidEmulatorInstructions />
```

----------------------------------------

TITLE: Build and Run Project Locally
DESCRIPTION: Installs project dependencies using `pod-install` for iOS and then runs the project locally on either an iOS simulator or an Android emulator using `expo run`.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-updates/e2e/README.md#_snippet_9

LANGUAGE: bash
CODE:
```
npx pod-install # if testing iOS
npx expo run:<ios|android>
```

----------------------------------------

TITLE: Initialize Expo Project Equivalents
DESCRIPTION: Demonstrates three equivalent commands to initialize an Expo project, including generating native projects. These commands set up a project that can be managed with Expo's tooling.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/workflow/overview.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
$ npx create-expo-app MyApp && cd MyApp && npx expo prebuild
```

LANGUAGE: shell
CODE:
```
$ npx create-expo-app --template bare-minimum
```

LANGUAGE: shell
CODE:
```
$ npx @react-native-community/cli@latest init MyApp && cd MyApp && npx install-expo-modules
```

----------------------------------------

TITLE: Reinstall Pods
DESCRIPTION: Command to reinstall CocoaPods dependencies for an Expo module. This is useful when adding new native files or modifying the module's configuration.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/get-started.mdx#_snippet_11

LANGUAGE: shell
CODE:
```
npx pod-install
```

----------------------------------------

TITLE: Vexo Integration Example
DESCRIPTION: Provides a link to a guide for Vexo, a service that helps understand user interaction, identify friction points, and improve engagement in Expo apps.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/monitoring/services.mdx#_snippet_4

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Using Vexo"
  description="Learn how to use Vexo to monitor your app."
  href="/guides/using-vexo/"
  Icon={BookOpen02Icon}
/>
```

----------------------------------------

TITLE: Custom Build Configuration YAML
DESCRIPTION: Defines the steps for a custom build process. This YAML file specifies commands or built-in functions to execute during the build. The filename can be arbitrary, but the extension must be .yml.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/custom-builds/get-started.mdx#_snippet_0

LANGUAGE: yaml
CODE:
```
build:
  name: Hello World!
  steps:
    - run: echo "Hello, world!"
    # A built-in function (optional)
```

----------------------------------------

TITLE: Migrate from React Navigation to Expo Router Guide
DESCRIPTION: Provides instructions on migrating an existing project from React Navigation to Expo Router. This guide is essential for users transitioning their navigation setup.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/next-steps.mdx#_snippet_10

LANGUAGE: jsx
CODE:
```
import { BoxLink } from '~/ui/components/BoxLink';
import { BookOpen02Icon } from '@expo/styleguide-icons/outline/BookOpen02Icon';

<BoxLink
  title="Migrate from React Navigation"
  href="/router/migrate/from-react-navigation/"
  description="Learn how to migrate an existing project using React Navigation to Expo Router."
  Icon={BookOpen02Icon}
/>
```

----------------------------------------

TITLE: LogRocket Integration Example
DESCRIPTION: Shows how to link to a guide for integrating LogRocket, a service that records user sessions and identifies bugs in React Native apps.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/monitoring/services.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Using LogRocket"
  description="Learn how to use LogRocket to monitor your app."
  href="/guides/using-logrocket/"
  Icon={LogrocketIcon}
/>
```

----------------------------------------

TITLE: Run Expo App on Mobile and Web
DESCRIPTION: Starts the Expo development server, enabling app execution on mobile devices via QR code and on web browsers. Provides instructions for scanning the QR code and launching the web version.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/create-your-first-app.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
$ npx expo start
```

----------------------------------------

TITLE: List Builds
DESCRIPTION: Lists all past and current builds associated with the project. This command is useful for monitoring build progress and accessing build details or logs.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build/setup.mdx#_snippet_8

LANGUAGE: shell
CODE:
```
$ eas build:list
```

----------------------------------------

TITLE: Install expo-font
DESCRIPTION: Installs the expo-font library, which is a prerequisite for using the config plugin to embed fonts. This command uses npx to run the Expo CLI installer.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/user-interface/fonts.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
$ npx expo install expo-font
```

----------------------------------------

TITLE: Disable EXPO_NO_DEPENDENCY_VALIDATION for Package Installation
DESCRIPTION: Disables built-in dependency validation when installing packages using `npx expo install` and `npx expo start`. This bypasses checks for package compatibility.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/more/expo-cli.mdx#_snippet_68

LANGUAGE: env
CODE:
```
EXPO_NO_DEPENDENCY_VALIDATION=true
# Description: Disable built-in dependency validation when installing packages through `npx expo install` and `npx expo start`.
```

----------------------------------------

TITLE: Managed Project eas.json Example
DESCRIPTION: An example eas.json configuration for a managed Expo project, demonstrating base profile setup and platform-specific overrides for development, staging, and production builds.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build/eas-json.mdx#_snippet_9

LANGUAGE: json
CODE:
```
{
  "build": {
    "base": {
      "node": "12.13.0",
      "yarn": "1.22.5",
      "env": {
        "EXAMPLE_ENV": "example value"
      },
      "android": {
        "image": "default",
        "env": {
          "PLATFORM": "android"
        }
      },
      "ios": {
        "image": "latest",
        "env": {
          "PLATFORM": "ios"
        }
      }
    },
    "development": {
      "extends": "base",
      "developmentClient": true,
      "env": {
        "ENVIRONMENT": "development"
      },
      "android": {
        "distribution": "internal",
        "withoutCredentials": true
      },
      "ios": {
        "simulator": true
      }
    },
    "staging": {
      "extends": "base",
      "env": {
        "ENVIRONMENT": "staging"
      },
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "extends": "base",
      "env": {
        "ENVIRONMENT": "production"
      }
    }
  }
}
```

----------------------------------------

TITLE: Import and Usage Example
DESCRIPTION: Demonstrates importing necessary icons and components, and using BoxLink to reference external documentation for react-native-screens.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/screens.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
import { BookOpen02Icon } from '@expo/styleguide-icons/outline/BookOpen02Icon';

import { APIInstallSection } from '~/components/plugins/InstallSection';
import { BoxLink } from '~/ui/components/BoxLink';

// ...

<APIInstallSection href="https://github.com/software-mansion/react-native-screens#installation" />

<BoxLink
  title="Visit official documentation"
  description="Get full information on API and its usage."
  Icon={BookOpen02Icon}
  href="https://docs.swmansion.com/react-native-screens/"
/>
```

----------------------------------------

TITLE: Import and Usage Example
DESCRIPTION: Demonstrates importing necessary icons and components, and using BoxLink to reference external documentation for react-native-screens.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v53.0.0/sdk/screens.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
import { BookOpen02Icon } from '@expo/styleguide-icons/outline/BookOpen02Icon';

import { APIInstallSection } from '~/components/plugins/InstallSection';
import { BoxLink } from '~/ui/components/BoxLink';

// ...

<APIInstallSection href="https://github.com/software-mansion/react-native-screens#installation" />

<BoxLink
  title="Visit official documentation"
  description="Get full information on API and its usage."
  Icon={BookOpen02Icon}
  href="https://docs.swmansion.com/react-native-screens/"
/>
```

----------------------------------------

TITLE: Create EAS Configuration File
DESCRIPTION: Creates an empty `eas.json` file in the root of your project if it doesn't already exist. This file is used to configure EAS build and update settings, and is a prerequisite for defining workflows.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas/workflows/get-started.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
$ touch eas.json && echo "{}" > eas.json
```

----------------------------------------

TITLE: Sentry Integration Example
DESCRIPTION: Demonstrates linking to a guide for Sentry, a crash reporting platform that provides real-time insights into production deployments for React Native apps.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/monitoring/services.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Using Sentry"
  description="Learn how to use Sentry to monitor your app."
  href="/guides/using-sentry/"
  Icon={SentryIcon}
/>
```

----------------------------------------

TITLE: Install @react-native-segmented-control/segmented-control
DESCRIPTION: Provides instructions on how to install the segmented control component. It links to the official GitHub repository for detailed setup steps.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v53.0.0/sdk/segmented-control.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
<APIInstallSection href="https://github.com/react-native-community/segmented-control#getting-started" />
```

----------------------------------------

TITLE: Create New Expo Project
DESCRIPTION: Command to initialize a new Expo project. This is the recommended starting point for most Expo applications.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/workflow/overview.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
npx create-expo-app
```

----------------------------------------

TITLE: Install Expo Dev Client
DESCRIPTION: Installs the `expo-dev-client` library, which is essential for creating and using development builds of your Expo project.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/workflow/overview.mdx#_snippet_5

LANGUAGE: bash
CODE:
```
npm install expo-dev-client
# or
yarn add expo-dev-client
```

----------------------------------------

TITLE: Display Help with --help
DESCRIPTION: Use the `--help` option to display a comprehensive list of all available command-line options and their descriptions. This command provides guidance on how to use the tool effectively.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/more/create-expo.mdx#_snippet_7

LANGUAGE: shell
CODE:
```
npx create-expo-app@latest --help
```

----------------------------------------

TITLE: Install @react-native-segmented-control/segmented-control
DESCRIPTION: Provides instructions on how to install the segmented control component. It links to the official GitHub repository for detailed setup steps.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/segmented-control.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
<APIInstallSection href="https://github.com/react-native-community/segmented-control#getting-started" />
```

----------------------------------------

TITLE: Install Screenshot Libraries
DESCRIPTION: Installs the `react-native-view-shot` and `expo-media-library` packages required for taking screenshots and managing media.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/screenshot.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx expo install react-native-view-shot expo-media-library
```

----------------------------------------

TITLE: EAS Build Pre-install Shell Script Example
DESCRIPTION: This is a basic shell script example intended to be executed by the eas-build-pre-install hook. It serves as a placeholder for custom logic that needs to run before EAS Build installs project dependencies.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build-reference/npm-hooks.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
#!/bin/bash


```

----------------------------------------

TITLE: Install and Configure Expo Updates
DESCRIPTION: Guides on installing and configuring the `expo-updates` library to manage remote updates for your app. This enables features like PR previews and dynamic code changes.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/bare/overview.mdx#_snippet_8

LANGUAGE: markdown
CODE:
```
Learn how to install and configure `expo-updates` to manage remote updates and enable PR previews.
```

----------------------------------------

TITLE: Expo CLI Commands for Development
DESCRIPTION: Essential commands for creating a new Expo project and starting the development server. These commands are typically run in a terminal.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/development-builds/introduction.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npx create-expo-app
npx expo start
```

----------------------------------------

TITLE: Local Development Setup for JavaScript Changes
DESCRIPTION: Steps to set up local development for JavaScript changes within the app folder. This involves navigating to the package, starting the Metro bundler, and then making changes in bare-expo.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-dev-menu/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cd packages/expo-dev-menu
yarn start
```

----------------------------------------

TITLE: Configure EXPO_NO_DEPENDENCY_VALIDATION
DESCRIPTION: Disables built-in dependency validation when installing packages through `npx expo install` and `npx expo start`. Available from SDK 52+.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/more/expo-cli.mdx#_snippet_52

LANGUAGE: env
CODE:
```
EXPO_NO_DEPENDENCY_VALIDATION=true
```

----------------------------------------

TITLE: Start Development Server
DESCRIPTION: Run this command in your project's root directory to start the Expo development server. Once the server is running, you can open your project in a development client on an emulator, simulator, or physical device by pressing 'a'/'i' or scanning a QR code.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/development-builds/use-development-builds.mdx#_snippet_1

LANGUAGE: shell
CODE:
```
$ npx expo start
```

----------------------------------------

TITLE: Install Expo Modules Automatically
DESCRIPTION: Installs and configures the Expo package automatically in your React Native project using npx. This command simplifies the setup process for integrating Expo modules.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/bare/installing-expo-modules.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
npx install-expo-modules@latest
```

----------------------------------------

TITLE: Importing Android Setup Components
DESCRIPTION: Imports React components for displaying Android emulator setup instructions.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/androidSimulatedExpoGo.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
import AndroidEmulatorInstructions from './_androidEmulatorInstructions.mdx';
import AndroidStudioInstructions from './_androidStudioInstructions.mdx';
```

----------------------------------------

TITLE: Install expo-dev-client
DESCRIPTION: Installs the expo-dev-client package, which is essential for running development builds on your iOS device. Run this command in your project's root directory.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/iosPhysicalDevelopmentBuildLocal.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install expo-dev-client
```

----------------------------------------

TITLE: Install EAS CLI
DESCRIPTION: Installs the EAS CLI globally, which is necessary for interacting with EAS services from your terminal. It's recommended to keep this updated.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build/setup.mdx#_snippet_1

LANGUAGE: shell
CODE:
```
$ npm install -g eas-cli
```

----------------------------------------

TITLE: Install expo-web-browser
DESCRIPTION: Instructions for installing the expo-web-browser package using npm or yarn.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v53.0.0/sdk/webbrowser.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install expo-web-browser
```

----------------------------------------

TITLE: Expanded iOS Maestro Test Configuration (Partial)
DESCRIPTION: An example of the expanded steps for an iOS build, showing the sequence of installing Maestro and preparing the simulator environment. The full sequence would typically include installing the app and running Maestro tests.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/custom-builds/schema.mdx#_snippet_37

LANGUAGE: yaml
CODE:
```
build:
name: Build and test (iOS, expanded)
steps:
  - eas/build
  - eas/install_maestro
  # Additional steps for starting simulator, installing app, running maestro test, and uploading artifacts would follow here.
```

----------------------------------------

TITLE: Install Expo Mail Composer
DESCRIPTION: Installs the expo-mail-composer package into your project using the Expo CLI. This command ensures compatibility with your Expo project setup.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-mail-composer/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install expo-mail-composer
```

----------------------------------------

TITLE: React Native Hello World Example
DESCRIPTION: A basic React Native component demonstrating a 'Hello world!' message within a styled view. This snippet serves as an initial example for a new Expo app, showcasing fundamental JSX structure and StyleSheet usage.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/introduction.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

----------------------------------------

TITLE: GitHub Workflow for Production Builds
DESCRIPTION: This YAML file configures a GitHub Actions workflow that triggers on pushes to the 'main' branch. It includes jobs for building Android and iOS production releases for Expo projects.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas/workflows/get-started.mdx#_snippet_5

LANGUAGE: yaml
CODE:
```
name: Create Production Builds

# @info #
on:
  push:
    branches: ['main']
# @end #

jobs:
  build_android:
    type: build
    params:
      platform: android
  build_ios:
    type: build
    params:
      platform: ios
```

----------------------------------------

TITLE: Install Expo Haptics
DESCRIPTION: Installs the expo-haptics package into your project using the Expo CLI.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-haptics/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install expo-haptics
```

----------------------------------------

TITLE: Install expo-dev-client
DESCRIPTION: Installs the expo-dev-client package, which is essential for running development builds of your Expo application on simulators or physical devices.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/iosSimulatedDevelopmentBuildLocal.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
npx expo install expo-dev-client
```

----------------------------------------

TITLE: Setup Bun for Node.js Environment
DESCRIPTION: Replaces the standard Node.js setup step in a GitHub Actions workflow with the `oven-sh/setup-bun@v1` action to utilize Bun as the JavaScript runtime and package manager.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/github-actions.mdx#_snippet_1

LANGUAGE: yaml
CODE:
```
- name: Setup Bun
  uses: oven-sh/setup-bun@v1
  with:
    bun-version: latest
```

----------------------------------------

TITLE: Setup Documentation Environment
DESCRIPTION: Runs a script to set up the necessary environment and dependencies specifically for contributing to the project's documentation.

SOURCE: https://github.com/expo/expo/blob/main/CONTRIBUTING.md#_snippet_2

LANGUAGE: javascript
CODE:
```
npm run setup:docs
```

----------------------------------------

TITLE: Minimal app.json Example
DESCRIPTION: A basic example of an `app.json` file, demonstrating the essential `name` and `slug` properties required for an Expo project configuration. This file defines core metadata for your application.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/workflow/configuration.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "name": "My app",
  "slug": "my-app"
}
```

----------------------------------------

TITLE: Install and Configure expo-symbols
DESCRIPTION: Installs the expo-symbols package and configures it for iOS development. This involves adding the package to your project's dependencies and running CocoaPods for iOS setup.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-symbols/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install expo-symbols
```

LANGUAGE: bash
CODE:
```
npx pod-install
```

----------------------------------------

TITLE: Install source-map-explorer
DESCRIPTION: Installs the source-map-explorer library as a development dependency using npm.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/analyzing-bundles.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
$ npm i --save-dev source-map-explorer
```

----------------------------------------

TITLE: Install Expo Image Library
DESCRIPTION: Installs the `expo-image` library using `npx expo install`. This command ensures the library is compatible with your Expo project and adds it to your dependencies.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/build-a-screen.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx expo install expo-image
```

----------------------------------------

TITLE: Create Expo App with Legend-State Supabase Example
DESCRIPTION: This command initializes a new Expo project using a template pre-configured with Legend-State and Supabase integration. It sets up the necessary dependencies and project structure for building local-first applications with real-time synchronization.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/local-first.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
$ npx create-expo-app --example with-legend-state-supabase
```

----------------------------------------

TITLE: Install expo-camera using Expo CLI
DESCRIPTION: This command installs the expo-camera package into your project's npm dependencies. It ensures compatibility with your Expo project setup.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-camera/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install expo-camera
```

----------------------------------------

TITLE: Install Sentry using the wizard
DESCRIPTION: Use the Sentry wizard to automatically install dependencies, configure your project for Sentry, set up Metro configuration, and add initialization code. Follow the prompts to log in to your Sentry account and fetch project details.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/using-sentry.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx @sentry/wizard@latest -i reactNative
```

----------------------------------------

TITLE: Basic Usage Example
DESCRIPTION: Demonstrates how to use the StatusBar component to set the status bar text color to light. This example shows a basic setup within a React Native application.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v51.0.0/sdk/status-bar.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notice that the status bar has light text!</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
```

----------------------------------------

TITLE: Example App Usage of Expo WebView
DESCRIPTION: Demonstrates how to use the Expo WebView component within an example application. It shows how to set the `url` prop to load a webpage and how to handle the `onLoad` event to display an alert with the loaded URL.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/native-view-tutorial.mdx#_snippet_22

LANGUAGE: typescript
CODE:
```
import { WebView } from 'expo-web-view';

export default function App() {
  return (
    <WebView
      style={{ flex: 1 }}
      url="https://expo.dev"
      onLoad={event => alert(`loaded ${event.nativeEvent.url}`)}
    />
  );
}
```

----------------------------------------

TITLE: Install Dependencies with Bun
DESCRIPTION: Replaces the dependency installation step in a GitHub Actions workflow to use `bun install` instead of `yarn install`.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/github-actions.mdx#_snippet_2

LANGUAGE: yaml
CODE:
```
- name: Install dependencies
  run: bun install
```

----------------------------------------

TITLE: Install Expo Mesh Gradient
DESCRIPTION: Command to install the expo-mesh-gradient package in your Expo project. This command ensures you get the correct version compatible with your Expo SDK.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-mesh-gradient/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install expo-mesh-gradient
```

----------------------------------------

TITLE: Example Command for Constructing URL
DESCRIPTION: This snippet shows an example of how the EAS Update URL might be presented in a terminal context, illustrating the structure with placeholder values and a concrete example.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/expo-dev-client.mdx#_snippet_4

LANGUAGE: shell
CODE:
```
[slug]://expo-development-client/?url=[https://u.expo.dev/project-id]/group/[group-id]

# Example
my-app://expo-development-client/?url=https://u.expo.dev/675cb1f0-fa3c-11e8-ac99-6374d9643cb2/group/47839bf2-9e01-467b-9378-4a978604ab11
```

----------------------------------------

TITLE: Expo Start Command
DESCRIPTION: Starts a local development server that connects to the Metro bundler, allowing clients to interact with the development environment. This command is part of the Expo CLI.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/more/glossary-of-terms.mdx#_snippet_12

LANGUAGE: bash
CODE:
```
npx expo start
```

----------------------------------------

TITLE: Rebuild and Run Example App After Changes
DESCRIPTION: Commands to re-prebuild the Expo application after making changes to the module or example app, and then running the updated application on Android and iOS.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/native-view-tutorial.mdx#_snippet_15

LANGUAGE: shell
CODE:
```
$ npx expo prebuild --clean
# Run the example app on Android
$ npx expo run:android
# Run the example app on iOS
$ npx expo run:ios
```

----------------------------------------

TITLE: Customer.io Expo Plugin Integration
DESCRIPTION: Guides users on integrating Customer.io into their Expo projects. This typically involves installing the plugin and configuring it, often through app.json or similar configuration files.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/using-push-notifications-services.mdx#_snippet_5

LANGUAGE: json
CODE:
```
{
  "expo": {
    "plugins": [
      "customerio-expo-plugin"
    ]
  }
}
```

----------------------------------------

TITLE: Initialize Expo Native Module
DESCRIPTION: Initialize a new Expo module project using `create-expo-module` to set up scaffolding for Android, iOS, and TypeScript.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/config-plugin-and-native-module-tutorial.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx create-expo-module expo-native-configuration
```

----------------------------------------

TITLE: Install React and React DOM
DESCRIPTION: Command to install the `react` and `react-dom` packages using npm.

SOURCE: https://github.com/expo/expo/blob/main/packages/@expo/cli/static/canary-full/node_modules/react-dom/README.md#_snippet_0

LANGUAGE: sh
CODE:
```
npm install react react-dom
```

----------------------------------------

TITLE: Example App Component with registerRootComponent
DESCRIPTION: This TypeScript example shows a basic React Native component (`App`) being registered as the root component using `registerRootComponent`. This is the standard way to start your Expo application.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v51.0.0/sdk/register-root-component.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
import { registerRootComponent } from 'expo';
import { View } from 'react-native';

function App() {
  return <View />;
}

registerRootComponent(App);
```

----------------------------------------

TITLE: Edit iOS Native Module
DESCRIPTION: Instructions for modifying the native Swift code of an Expo module on iOS. After changing the code, the app must be rebuilt (Cmd+R) to reflect the updates.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/get-started.mdx#_snippet_10

LANGUAGE: swift
CODE:
```
import ExpoModulesCore

public class MyModule : NSObject, Expo_Module {
  public func definition() -> ModuleDefinition {
    return ModuleDefinition {
      Name("MyModule")

      Function("hello") {
        // Change this string to "Hello world! 🌎🍎"
        return "Hello world!"
      }
    }
  }
}
```

----------------------------------------

TITLE: Link to Expo Development Builds Introduction
DESCRIPTION: This JSX snippet renders a BoxLink component to introduce users to Expo development builds, explaining their benefits and how to get started, including a title, description, icon, and a link.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/third-party-overview.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Introduction to development builds"
  description="Learn why use development builds, and how to get started."
  Icon={BookOpen02Icon}
  href="/develop/development-builds/introduction/"
/>
```

----------------------------------------

TITLE: Install Expo Image Package
DESCRIPTION: Command to install the expo-image package into your project using npm or yarn. This command ensures you get the correct version compatible with your Expo SDK.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-image/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install expo-image
```

----------------------------------------

TITLE: Create New Expo App
DESCRIPTION: Command to create a new Expo project using `create-expo-app`. This is a prerequisite for using EAS Update and ensures your project is set up with Expo CLI.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/getting-started.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
$ npx create-expo-app my-app
```

----------------------------------------

TITLE: Basic GL Usage with expo-gl
DESCRIPTION: Demonstrates the fundamental usage of `GLView` from `expo-gl` for rendering graphics. It covers setting up a basic OpenGL ES context, compiling vertex and fragment shaders, linking them into a program, and drawing a simple point. This example is suitable for understanding the initial setup and rendering pipeline.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v51.0.0/sdk/gl-view.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
import { View } from 'react-native';
import { GLView } from 'expo-gl';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GLView style={{ width: 300, height: 300 }} onContextCreate={onContextCreate} />
    </View>
  );
}

function onContextCreate(gl) {
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(0, 1, 1, 1);

  // Create vertex shader (shape & position)
  const vert = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(
    vert,
    `
    void main(void) {
      gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
      gl_PointSize = 150.0;
    }
  `
  );
  gl.compileShader(vert);

  // Create fragment shader (color)
  const frag = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(
    frag,
    `
    void main(void) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
  `
  );
  gl.compileShader(frag);

  // Link together into a program
  const program = gl.createProgram();
  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);
  gl.useProgram(program);

  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.POINTS, 0, 1);

  gl.flush();
  gl.endFrameEXP();
}
```

----------------------------------------

TITLE: Add postinstall script to package.json for Monorepo Builds
DESCRIPTION: This example shows how to configure a 'postinstall' script in your package.json file. This script is essential for monorepos using EAS Build, as it ensures that all necessary dependencies from other workspaces are built after the initial installation process.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build-reference/build-with-monorepos.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "scripts": {
    "postinstall": "cd ../.. && yarn build"
  }
}
```

----------------------------------------

TITLE: Expo Updates Protocol Server Example
DESCRIPTION: A link to a GitHub repository providing an example implementation of a custom server that adheres to the Expo Updates protocol, along with an example application that utilizes this custom server.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v52.0.0/sdk/updates.mdx#_snippet_1

LANGUAGE: link
CODE:
```
https://github.com/expo/custom-expo-updates-server
```

----------------------------------------

TITLE: Usage Example: Copying and Pasting Text with expo-clipboard
DESCRIPTION: Demonstrates how to copy text to the clipboard and paste it back using `expo-clipboard`. It requires `expo-clipboard` and `react-native`. The example shows asynchronous operations for setting and getting string data.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v52.0.0/sdk/clipboard.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function App() {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = async () => {
    /* @info Copy the text to the clipboard */
    await Clipboard.setStringAsync('hello world');
    /* @end */
  };

  const fetchCopiedText = async () => {
    const text = /* @info Paste the text from the clipboard */ await Clipboard.getStringAsync();
    /* @end */
    setCopiedText(text);
  };

  return (
    <View style={styles.container}>
      <Button title="Click here to copy to Clipboard" onPress={copyToClipboard} />
      <Button title="View copied text" onPress={fetchCopiedText} />
      <Text style={styles.copiedText}>{copiedText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copiedText: {
    marginTop: 10,
    color: 'red',
  },
});
```

----------------------------------------

TITLE: React Native PagerView Component Example
DESCRIPTION: Demonstrates the basic usage of the PagerView component from react-native-pager-view. It sets up a swipeable carousel with three distinct pages, each containing simple text content. This example requires the react-native-pager-view library to be installed.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v53.0.0/sdk/view-pager.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function MyPager() {
  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0}>
        <View style={styles.page} key="1">
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

----------------------------------------

TITLE: Build and Run Expo Module Example for Publishing
DESCRIPTION: Commands to build the module's JavaScript from the project root and then run the example application. This is typically done before publishing to ensure the module functions correctly.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/use-standalone-expo-module-in-your-project.mdx#_snippet_5

LANGUAGE: bash
CODE:
```
# Build the module in the project root
npm run build

# Navigate to the example directory and run the app
cd example

# Run the example app on Android
npx expo run:android

# Run the example app on iOS
npx expo run:ios
```

----------------------------------------

TITLE: Edit Android Native Module
DESCRIPTION: Instructions for modifying the native Kotlin code of an Expo module on Android. After changing the code, the app must be rebuilt to reflect the updates.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/get-started.mdx#_snippet_9

LANGUAGE: kotlin
CODE:
```
package expo.modules.mymodule

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.Function

class MyModule : Module() {
    override fun definition() = ModuleDefinition {
        Name("MyModule")

        Function("hello") {
            // Change this string to "Hello world! 🌎🤖"
            "Hello world!"
        }
    }
}
```

----------------------------------------

TITLE: Initialize New Expo Module
DESCRIPTION: Command to create a new Expo native module project using npx. Accepts default values for prompts to quickly set up the project structure.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/native-module-tutorial.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx create-expo-module expo-settings
```

----------------------------------------

TITLE: React Native PagerView Component Example
DESCRIPTION: Demonstrates the basic usage of the PagerView component from react-native-pager-view. It sets up a swipeable carousel with three distinct pages, each containing simple text content. This example requires the react-native-pager-view library to be installed.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/view-pager.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function MyPager() {
  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0}>
        <View style={styles.page} key="1">
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

----------------------------------------

TITLE: Install Expo Font and Google Font Package
DESCRIPTION: Installs the `expo-font` library and a specific Google Font package (`@expo-google-fonts/inter`) required for embedding fonts. This is the first step for both the config plugin and useFonts hook methods.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/user-interface/fonts.mdx#_snippet_7

LANGUAGE: bash
CODE:
```
$ npx expo install expo-font @expo-google-fonts/inter
```

----------------------------------------

TITLE: Install Expo Font Libraries
DESCRIPTION: Command to install necessary libraries for custom font handling in Expo projects. `expo-font` is used for loading fonts, and `expo-splash-screen` helps manage the splash screen during font loading.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/user-interface/fonts.mdx#_snippet_6

LANGUAGE: bash
CODE:
```
$ npx expo install expo-font expo-splash-screen
```

----------------------------------------

TITLE: Platform-Specific EAS Build Profile Configuration
DESCRIPTION: Demonstrates how to specify different custom build configuration files for iOS and Android within the same EAS Build profile in eas.json. This allows for platform-tailored build customizations.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/custom-builds/get-started.mdx#_snippet_2

LANGUAGE: json
CODE:
```
{
  "build": {
    "test": {
      "ios": {
        "config": "hello-ios.yml"
      },
      "android": {
        "config": "hello-android.yml"
      }
    }
  }
}
```

----------------------------------------

TITLE: Run Expo Docs Development Server
DESCRIPTION: Instructions to start the local development server for Expo documentation. This allows you to preview changes in real-time.

SOURCE: https://github.com/expo/expo/blob/main/docs/README.md#_snippet_14

LANGUAGE: shell
CODE:
```
cd expo/docs
yarn run dev
```

----------------------------------------

TITLE: Run Expo on iOS Simulator
DESCRIPTION: Executes the Expo project on an iOS simulator. It automatically performs pod installation, npm installation, opens a simulator, clears and starts the Metro bundler, and then opens the app.

SOURCE: https://github.com/expo/expo/blob/main/apps/bare-expo/README.md#_snippet_1

LANGUAGE: shell
CODE:
```
yarn ios
```

----------------------------------------

TITLE: Expo Orbit macOS Installation Notes
DESCRIPTION: Provides instructions and considerations for installing Expo Orbit on macOS, including the option for automatic startup on login.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build/orbit.mdx#_snippet_1

LANGUAGE: markdown
CODE:
```
You can download Orbit with Homebrew for macOS, or directly from the [GitHub releases](https://github.com/expo-orbit/releases).

If you want Orbit to start when you log in automatically, click on the Orbit icon in the menu bar, then **Settings** and select the **Launch on Login** option.
```

----------------------------------------

TITLE: Content Spotlight Example
DESCRIPTION: Demonstrates the usage of the ContentSpotlight component to display a video file with a caption, often used for tutorials or feature showcases.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/review/with-orbit.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
<ContentSpotlight
  controls
  file="review/updates-with-orbit.mp4"
  caption="Expo Orbit launching an update directly from EAS dashboard to an iOS Simulator."
/>
```

----------------------------------------

TITLE: Expo CLI Commands for Prebuilding and Installation
DESCRIPTION: These commands are used to manage native code generation and install project dependencies, potentially including Expo config plugins. `npx expo prebuild` generates native directories, while `npx expo install` helps manage package installations.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/adopting-prebuild.mdx#_snippet_7

LANGUAGE: bash
CODE:
```
npx expo prebuild
```

LANGUAGE: bash
CODE:
```
npx expo install
```

----------------------------------------

TITLE: Start Expo Project and Connect Debugger
DESCRIPTION: Starts your Expo project and guides you on how to connect the React Native Debugger. It involves setting the correct port and selecting the 'Debug remote JS' option from the Expo Developer Menu.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/debugging/tools.mdx#_snippet_7

LANGUAGE: shell
CODE:
```
1. After launching React Native Debugger, ensure the port is set to 8081 (use <kbd>Cmd</kbd> + <kbd>t</kbd> or <kbd>Ctrl</kbd> + <kbd>t</kbd> for port selection).
2. Run your project: npx expo start
3. From the Expo Developer Menu, select 'Debug remote JS'.
```

----------------------------------------

TITLE: eas/start_ios_simulator API
DESCRIPTION: Documentation for the eas/start_ios_simulator function, detailing its parameters and usage for starting an iOS Simulator.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/custom-builds/schema.mdx#_snippet_74

LANGUAGE: APIDOC
CODE:
```
eas/start_ios_simulator
  Starts an iOS Simulator you can use to test your apps on. Only available when running a build for iOS.

  Parameters:
    device_identifier (string, optional): Name or UDID of the Simulator you want to start. Examples include `iPhone [XY] Pro`, `AEF997BB-222C-4379-89BA-D21070B1D787`.
      Note: Available Simulators are different for every image. If you change the image, the Simulator for a given name may become unavailable. For instance, an Xcode 14 image will have iPhone 14 Simulators, while an Xcode 15 image will have iPhone 15 simulators. In general, we encourage not providing this input. See [runner images](/build/eas-json/#selecting-a-base-image) for more information.

  Source Code:
    https://github.com/expo/eas-build/blob/main/packages/build-tools/src/steps/functions/startIosSimulator.ts
```

----------------------------------------

TITLE: Disable EAS Update Automatic Setup on iOS
DESCRIPTION: Pass an environment variable during CocoaPods installation to disable the default automatic initialization of EAS Update. This is crucial for custom setup in brownfield apps.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/integration-in-existing-native-apps.mdx#_snippet_1

LANGUAGE: shell
CODE:
```
EX_UPDATES_CUSTOM_INIT=1 npx pod-install
```

----------------------------------------

TITLE: React Navigation Screen Structure Example
DESCRIPTION: Illustrates a typical screen and navigator setup using React Navigation before migrating to Expo Router. It shows how screens and navigators were defined within a single navigation container.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/router/migrate/from-react-navigation.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    // NavigationContainer is managed by Expo Router.
    <NavigationContainer
      linking={
        /* @info Delete the linking configuration, this is managed by Expo Router. */
        {
          // ...linking configuration
        }
        /* @end */
      }
    >
      <Stack.Navigator>
        /* @info Standard screens can be moved to files. */
        <Stack.Screen name="Settings" component={Settings} />
        /* @end */
        <Stack.Screen name="Profile" component={Profile} />
        /* @info A screen that exports a navigator should be converted to a directory with a layout route. */
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{
            title: 'Home Screen',
          }}
        />
          /* @end */
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

----------------------------------------

TITLE: EAS Metadata CLI Commands
DESCRIPTION: Commands to interact with EAS Metadata for managing app store information. `eas metadata:pull` fetches existing app data into a configuration file, while `eas metadata:push` uploads the local configuration to the app stores.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas/metadata/getting-started.mdx#_snippet_1

LANGUAGE: shell
CODE:
```
$ eas metadata:pull
```

LANGUAGE: shell
CODE:
```
$ eas metadata:push
```

----------------------------------------

TITLE: Visit Official Documentation
DESCRIPTION: A link component to guide users to the official documentation for comprehensive API information and usage examples.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/screens.mdx#_snippet_1

LANGUAGE: react
CODE:
```
<BoxLink
  title="Visit official documentation"
  description="Get full information on API and its usage."
  Icon={BookOpen02Icon}
  href="https://docs.swmansion.com/react-native-screens/"
/>
```

----------------------------------------

TITLE: Visit Official Documentation
DESCRIPTION: A link component to guide users to the official documentation for comprehensive API information and usage examples.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v53.0.0/sdk/screens.mdx#_snippet_1

LANGUAGE: react
CODE:
```
<BoxLink
  title="Visit official documentation"
  description="Get full information on API and its usage."
  Icon={BookOpen02Icon}
  href="https://docs.swmansion.com/react-native-screens/"
/>
```

----------------------------------------

TITLE: Get Expo Doctor Version
DESCRIPTION: Outputs the currently installed version number of the expo-doctor package.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-doctor/README.md#_snippet_2

LANGUAGE: sh
CODE:
```
npx expo-doctor --version
```

----------------------------------------

TITLE: Link to Expo Development Builds Introduction
DESCRIPTION: This JSX snippet renders a BoxLink component to introduce users to Expo development builds, explaining their benefits and how to get started, including a title, description, icon, and a link.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v53.0.0/sdk/third-party-overview.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Introduction to development builds"
  description="Learn why use development builds, and how to get started."
  Icon={BookOpen02Icon}
  href="/develop/development-builds/introduction/"
/>
```

----------------------------------------

TITLE: App Credentials Guide Link Component
DESCRIPTION: Renders a BoxLink component to guide users to the app credentials guide.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/eas/next-steps.mdx#_snippet_13

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="App credentials"
  Icon={BookOpen02Icon}
  description="See App credentials guide to learn more about credentials requirement for Android and iOS."
  href="/app-signing/app-credentials/"
/>
```

----------------------------------------

TITLE: Expanded Android Maestro Test Configuration
DESCRIPTION: A detailed breakdown of the steps involved when `eas/maestro_test` is expanded for an Android build, including explicit installation of Maestro, starting an emulator, installing the app, running Maestro tests, and uploading artifacts.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/custom-builds/schema.mdx#_snippet_36

LANGUAGE: yaml
CODE:
```
build:
  name: Build and test (Android, expanded)
  steps:
    - eas/build
    - eas/install_maestro
    - eas/start_android_emulator:
        inputs:
          system_package_name: system-images;android-34;default;x86_64
    - run:
        command: |
          # shopt -s globstar is necessary to add /**/ support
          shopt -s globstar
          # shopt -s nullglob is necessary not to try to install
          # SEARCH_PATH literally if there are no matching files.
          shopt -s nullglob

          SEARCH_PATH="android/app/build/outputs/**/*.apk"
          FILES_FOUND=false

          for APP_PATH in $SEARCH_PATH; do
            FILES_FOUND=true
            echo "Installing \"$APP_PATH\""
            adb install "$APP_PATH"
          done

          if ! $FILES_FOUND;
            echo "No files found matching \"$SEARCH_PATH\". Are you sure you've built an Emulator app?"
            exit 1
          fi
    - run:
        command: |
          maestro test maestro/flow.yml
    - eas/upload_artifact:
        name: Upload test artifact
        if: ${ always() }
        inputs:
          type: build-artifact
          path: ${ eas.env.HOME }/.maestro/tests
```

----------------------------------------

TITLE: Create a New Expo Project
DESCRIPTION: Command to create a new Expo project using npx. This is a prerequisite for following the tutorial, allowing users to start with a fresh project or use an existing one.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/eas/introduction.mdx#_snippet_1

LANGUAGE: Shell
CODE:
```
npx create-expo-app
```

----------------------------------------

TITLE: Install Zulu JDK 17 (macOS Homebrew)
DESCRIPTION: Installs the Zulu 17 OpenJDK distribution on macOS using Homebrew Cask. This provides the necessary Java Development Kit for Expo.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/_androidStudioEnvironmentInstructions.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
$ brew install --cask zulu@17
```

----------------------------------------

TITLE: Expo Router Tabs Layout Example
DESCRIPTION: A TypeScript example demonstrating the setup of a tab navigator in `_layout.tsx` using `expo-router`. It includes importing `Tabs` and `MaterialIcons`, defining a `TabLayout` component, and configuring the 'index' tab with a title and an icon.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/router/basics/layout.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house.fill" color={color} />,
        }}
      />
      {/* Add more tabs here */}
    </Tabs>
  );
}
```

----------------------------------------

TITLE: Install Expo AuthSession and Expo Crypto
DESCRIPTION: Installs the expo-auth-session package and its peer dependency expo-crypto. Ensure both are installed for proper functionality.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v51.0.0/sdk/auth-session.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install expo-auth-session expo-crypto
# or
yarn add expo-auth-session expo-crypto
```

----------------------------------------

TITLE: Install Expo Notification Libraries
DESCRIPTION: Installs the core libraries required for handling push notifications in an Expo application. These include `expo-notifications` for notification logic, `expo-device` for device checks, and `expo-constants` for accessing app configuration like `projectId`.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/push-notifications/push-notifications-setup.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install expo-notifications expo-device expo-constants
```

----------------------------------------

TITLE: Using the Step Component for Procedural Guides
DESCRIPTION: Illustrates the recommended usage of the `Step` component from `~/ui/components/Step` for structuring procedural guides in MDX files.

SOURCE: https://github.com/expo/expo/blob/main/docs/README.md#_snippet_30

LANGUAGE: mdx
CODE:
```
import { Step } from '~/ui/components/Step';

<Step label="1">

This is some text.

</Step>
```

----------------------------------------

TITLE: Automate Submissions Guide Link Component
DESCRIPTION: Renders a BoxLink component to guide users to the automate submissions guide.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/eas/next-steps.mdx#_snippet_11

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Automate submissions"
  Icon={BookOpen02Icon}
  description="See automate submissions guide on how to enable automatic submissions with EAS Build on app stores."
  href="/build/automate-submissions/"
/>
```

----------------------------------------

TITLE: Navigation Links for EAS Build Features
DESCRIPTION: These JSX snippets represent interactive links to key features and setup guides for EAS Build. Each BoxLink component guides users to specific documentation sections, providing a title, brief description, and a link (href).

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build/introduction.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Create your first build"
  description="It should only take a few minutes in total to get up and running for iOS and/or Android."
  href="/build/setup"
  Icon={Cube01Icon}
/>
```

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Share your apps with internal testers"
  description="EAS Build can help share preview builds of your app with a single URL."
  href="/build/internal-distribution"
  Icon={Cube01Icon}
/>
```

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Automate submissions"
  description="Learn how you can have the service take your successful builds and handle uploading them to app stores for you automatically."
  href="/build/automate-submissions"
  Icon={Cube01Icon}
/>
```

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="App version management"
  description="Automate version bumps so you never have to think about them again."
  href="/build-reference/app-versions"
  Icon={Cube01Icon}
/>
```

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Run builds locally or on your own infrastructure"
  description="EAS Build is a hosted service, but you can also run it on your own machine, for example, to debug or to comply with any company security policies."
  href="/build-reference/local-builds"
  Icon={Cube01Icon}
/>
```

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Limitations"
  description="EAS Build is new and rapidly evolving, so we recommend getting familiar with the current limitations."
  href="/build-reference/limitations"
  Icon={Cube01Icon}
/>
```

----------------------------------------

TITLE: Install expo-system-ui
DESCRIPTION: Installs the `expo-system-ui` package using the Expo CLI. This command is used to add the library to your project.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-system-ui/README.md#_snippet_0

LANGUAGE: shell
CODE:
```
npx expo install expo-system-ui

```

----------------------------------------

TITLE: Start Expo Development Server with Tunnel
DESCRIPTION: Starts the Expo development server using a tunnel connection. This is useful when your development machine and device are on different networks or when facing local network issues. Note that tunnel connections can be slower.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/get-started/start-developing.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
$ npx expo start --tunnel
```

----------------------------------------

TITLE: Install jest-expo and dependencies (Windows)
DESCRIPTION: Installs `jest-expo`, `jest`, and `@types/jest` development dependencies using `npx expo install` for Windows environments.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/unit-testing.mdx#_snippet_1

LANGUAGE: shell
CODE:
```
$ npx expo install jest-expo jest @types/jest "--" --dev
```

----------------------------------------

TITLE: Setup Native Development Environment
DESCRIPTION: Executes a script to configure the native development environment for Android and iOS. This includes initializing submodules, ensuring Yarn is installed, setting up the React Native environment (including the Android NDK), and installing Node packages.

SOURCE: https://github.com/expo/expo/blob/main/CONTRIBUTING.md#_snippet_3

LANGUAGE: javascript
CODE:
```
npm run setup:native
```

----------------------------------------

TITLE: Start Bun Server for Expo
DESCRIPTION: Command to start the Bun server using the 'server.ts' entry file, which hosts the Expo application.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/router/reference/api-routes.mdx#_snippet_21

LANGUAGE: bash
CODE:
```
$ bun run server.ts
```

----------------------------------------

TITLE: Install expo-dev-client
DESCRIPTION: Install the expo-dev-client package to your project. This enables development builds with integrated UI and tooling.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/local-app-development.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
$ npx expo install expo-dev-client
```

----------------------------------------

TITLE: Define Production Build Workflow
DESCRIPTION: This YAML configuration defines a workflow named 'Create Production Builds'. It includes two jobs, `build_android` and `build_ios`, which are of type 'build' and specify the platform for creating production builds. These jobs run in parallel.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas/workflows/get-started.mdx#_snippet_3

LANGUAGE: yaml
CODE:
```
name: Create Production Builds

jobs:
  build_android:
    type: build # This job type creates a production build for Android
    params:
      platform: android
  build_ios:
    type: build # This job type creates a production build for iOS
    params:
      platform: ios
```

----------------------------------------

TITLE: Install expo-asset Library
DESCRIPTION: Installs the `expo-asset` library using the Expo CLI. This is the first step to enable local asset loading at runtime.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/user-interface/assets.mdx#_snippet_5

LANGUAGE: bash
CODE:
```
$ npx expo install expo-asset
```

----------------------------------------

TITLE: Install expo-camera
DESCRIPTION: Installs the expo-camera library into your project using the npx command. This makes the library and its associated config plugin available for use.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/config-plugins/plugins.mdx#_snippet_16

LANGUAGE: bash
CODE:
```
$ npx expo install expo-camera
```

----------------------------------------

TITLE: Install and Configure React Navigation Dev Tools
DESCRIPTION: Integrates React Navigation dev tools for inspecting navigation history and state. It supports both Expo Router and standard React Navigation setups. Install the package and pass your navigation container reference to the hook.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/debugging/devtools-plugins.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
import { useEffect, useRef } from 'react';
import { useNavigationContainerRef, Slot } from 'expo-router';
import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';

export default function Layout() {
  const navigationRef = useNavigationContainerRef();

  useReactNavigationDevTools(navigationRef);

  return <Slot />;
}
```

LANGUAGE: jsx
CODE:
```
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';

export default function App() {
  const navigationRef = useNavigationContainerRef();

  useReactNavigationDevTools(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>
  );
}
```

----------------------------------------

TITLE: Import Vendored Stylesheets
DESCRIPTION: Example of importing CSS files from installed libraries, which can then be applied app-wide. This is useful for integrating third-party styling.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v52.0.0/config/metro.mdx#_snippet_6

LANGUAGE: javascript
CODE:
```
// Applies the styles app-wide.
import 'emoji-mart/css/emoji-mart.css';
```

----------------------------------------

TITLE: Initialize Firebase Project
DESCRIPTION: Initializes a new Firebase project for hosting. It prompts for configuration settings, including the public directory and single-page app settings.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/publishing-websites.mdx#_snippet_11

LANGUAGE: shell
CODE:
```
$ firebase init
```

----------------------------------------

TITLE: Install Watchman (macOS Homebrew)
DESCRIPTION: Installs the Watchman file watching service on macOS using the Homebrew package manager. Watchman is a dependency for many development workflows.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/_androidStudioEnvironmentInstructions.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ brew install watchman
```

----------------------------------------

TITLE: pod-install CLI Options
DESCRIPTION: Details the available command-line flags for the pod-install utility, allowing customization of its behavior, such as non-interactive mode or quiet output.

SOURCE: https://github.com/expo/expo/blob/main/packages/pod-install/README.md#_snippet_1

LANGUAGE: APIDOC
CODE:
```
pod-install CLI Commands and Options:

Usage:
  npx pod-install [options]

Description:
  Automates the 'pod install' process, checks for Darwin environment, CocoaPods CLI installation, and project directory, and handles potential 'pod repo update' needs.

Options:
  --help, -h
    Show help information.

  --non-interactive [boolean]
    Description: Skip prompting to install CocoaPods with sudo.
    Input Type: boolean
    Default: process.stdout.isTTY

  --quiet [boolean]
    Description: Only print errors.
    Input Type: boolean
    Default: false

Examples:
  # Run with default settings
  npx pod-install

  # Run without interactive prompts
  npx pod-install --non-interactive

  # Run with quiet output, only showing errors
  npx pod-install --quiet

Notes:
  This package is compatible with any iOS or Xcode project using CocoaPods, including Ionic and Flutter projects.
```

----------------------------------------

TITLE: Import Vendor Stylesheets
DESCRIPTION: Example of importing CSS files from installed libraries, such as `emoji-mart`, to apply styles app-wide. This is relevant for web builds.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v51.0.0/config/metro.mdx#_snippet_5

LANGUAGE: js
CODE:
```
// Applies the styles app-wide.
import 'emoji-mart/css/emoji-mart.css';
```

----------------------------------------

TITLE: Background Location Task Example
DESCRIPTION: This React Native example shows how to set up a background location task using expo-task-manager and expo-location. It includes requesting foreground and background permissions, starting location updates, and defining the task logic to process location data received in the background.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v51.0.0/sdk/task-manager.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

const LOCATION_TASK_NAME = 'background-location-task';

const requestPermissions = async () => {
  const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
  if (foregroundStatus === 'granted') {
    const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
    if (backgroundStatus === 'granted') {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced,
      });
    }
  }
};

const PermissionsButton = () => (
  <View style={styles.container}>
    <Button onPress={requestPermissions} title="Enable background location" />
  </View>
);

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    // Error occurred - check `error.message` for more details.
    return;
  }
  if (data) {
    const { locations } = data;
    // do something with the locations captured in the background
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PermissionsButton;
```

----------------------------------------

TITLE: Build and Prebuild Expo Plugin
DESCRIPTION: Commands to build the plugin's TypeScript code and then prebuild the example application to apply the plugin's modifications.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/config-plugin-and-native-module-tutorial.mdx#_snippet_14

LANGUAGE: bash
CODE:
```
$ cd example
$ npx expo prebuild --clean
```

----------------------------------------

TITLE: Install Expo AV Package
DESCRIPTION: Installs the expo-av package using the Expo CLI. This command ensures the correct version is installed for your project.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-av/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install expo-av
```

----------------------------------------

TITLE: Install Pods for iOS
DESCRIPTION: After installing the npm package, run this command to install the necessary native dependencies for iOS projects using CocoaPods.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-media-library/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npx pod-install
```

----------------------------------------

TITLE: Install OpenJDK 17 (Windows Chocolatey)
DESCRIPTION: Installs the Microsoft OpenJDK 17 distribution on Windows using the Chocolatey package manager. This provides the Java Development Kit required for Expo.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/_androidStudioEnvironmentInstructions.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
$ choco install -y microsoft-openjdk17
```

----------------------------------------

TITLE: Basic MapView Usage
DESCRIPTION: Demonstrates how to use the MapView component from react-native-maps. This example shows a basic setup for displaying a map within a React Native application.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/map-view.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
```

----------------------------------------

TITLE: Expo CLI Usage Examples
DESCRIPTION: Examples of common commands and utilities used within the Expo CLI development process, including profiling and testing commands.

SOURCE: https://github.com/expo/expo/blob/main/packages/@expo/cli/README.md#_snippet_7

LANGUAGE: bash
CODE:
```
EXPO_PROFILE=1 npx expo start
yarn test
yarn test:e2e
yarn build
yarn test --watch config
```

----------------------------------------

TITLE: Install expo-network-addons
DESCRIPTION: Installs the expo-network-addons package using the Expo CLI.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-network-addons/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install expo-network-addons
```

----------------------------------------

TITLE: Install Expo Router Dependencies
DESCRIPTION: Install necessary libraries like `expo-router`, `react-native-safe-area-context`, `react-native-screens`, `expo-linking`, `expo-constants`, and `expo-status-bar`. This command installs versions compatible with your current Expo SDK.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/router/installation.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
$ npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

----------------------------------------

TITLE: EAS Metadata Store Configuration File
DESCRIPTION: The `store.config.json` file centralizes all app information for EAS Metadata, enabling automation of app store presence. It supports Apple App Store details like title, subtitle, description, and URLs, and can be generated by pulling existing app data.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas/metadata/getting-started.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "configVersion": 0,
  "apple": {
    "info": {
      "en-US": {
        "title": "Awesome App",
        "subtitle": "Your self-made awesome app",
        "description": "The most awesome app you have ever seen",
        "keywords": ["awesome", "app"],
        "marketingUrl": "https://example.com/en/promo",
        "supportUrl": "https://example.com/en/support",
        "privacyPolicyUrl": "https://example.com/en/privacy"
      }
    }
  }
}
```

----------------------------------------

TITLE: BugSnag Integration Example
DESCRIPTION: Shows how to link to a guide for BugSnag, a stability monitoring solution offering end-to-end error reporting and analytics for React Native applications.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/monitoring/services.mdx#_snippet_5

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Using BugSnag"
  description="Learn how to use BugSnag to monitor your app."
  href="/guides/using-bugsnag/"
  Icon={BookOpen02Icon}
/>
```

----------------------------------------

TITLE: Install Web Dependencies
DESCRIPTION: If developing for the web, install `react-native-web` and `react-dom` to enable web support for your Expo project.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/router/installation.mdx#_snippet_7

LANGUAGE: bash
CODE:
```
$ npx expo install react-native-web react-dom
```

----------------------------------------

TITLE: Manual Android Setup for registerRootComponent
DESCRIPTION: Demonstrates manual Android setup for `registerRootComponent` by modifying `MainActivity.java`. This is only required for apps not using Expo Prebuild.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v52.0.0/sdk/register-root-component.mdx#_snippet_0

LANGUAGE: java
CODE:
```
  @Override
  protected String getMainComponentName() {
+    return "main";
  }

```

----------------------------------------

TITLE: Build iOS App with EAS
DESCRIPTION: Configures an EAS build job for iOS on the main branch. This example demonstrates a basic build setup for a specific platform.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas/workflows/pre-packaged-jobs.mdx#_snippet_2

LANGUAGE: yaml
CODE:
```
name: Build iOS app

on:
  push:
    branches: ['main']

jobs:
  build_ios:
    name: Build iOS
    type: build
    params:
      platform: ios
      profile: production
```

----------------------------------------

TITLE: EAS Init Project Linking Output
DESCRIPTION: Displays the typical output when running `eas init`, showing account verification, project creation confirmation, and successful linking with a project ID.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/eas/configure-development-build.mdx#_snippet_5

LANGUAGE: bash
CODE:
```
# Output after running eas init
✔ Which account should own this project? > your-username
✔ Would you like to create a project for @your-username/sticker-smash? … yes
✔ Created @your-username/sticker-smash
✔ Project successfully linked (ID: XXXX-XX-XX-XXXX) (modified app.json)
```

----------------------------------------

TITLE: EAS Insights Integration Example
DESCRIPTION: Illustrates how to link to the EAS Insights guide, a service for tracking anonymized usage data and EAS Update adoption for Expo apps.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/monitoring/services.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="EAS Insights"
  description="Learn how to use EAS Insights to monitor your app."
  href="/eas-insights/introduction/"
  Icon={DataIcon}
/>
```

----------------------------------------

TITLE: Basic Component Usage Example
DESCRIPTION: Demonstrates the usage of core components like View, Row, Spacer, and hooks like useExpoTheme from the expo-dev-client-components library to build UI elements.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-dev-client-components/README.md#_snippet_0

LANGUAGE: tsx
CODE:
```
import { View, Spacer, Row, useExpoTheme, ChevronRightICon } from 'expo-dev-client-components';
import { Text } from 'react-native';

function ExampleRow() {
  const theme = useExpoTheme();

  return (
    <View px="small" py="large">
      <Row align="center">
        <ChevronRightIcon />
        <Spacer.Horizontal size="tiny" />
        <Text size="large" style={{ color: theme.text.default }}>
          Enter URL manually
        </Text>
      </Row>
    </View>
  );
}
```

----------------------------------------

TITLE: Install iOS Pods
DESCRIPTION: After installing the npm package, run this command to install the necessary native dependencies for iOS projects.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-av/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npx pod-install
```

----------------------------------------

TITLE: EAS Build and Test Workflow Example
DESCRIPTION: An example YAML configuration for an EAS Build workflow that includes the eas/start_ios_simulator step.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/custom-builds/schema.mdx#_snippet_73

LANGUAGE: yaml
CODE:
```
build:
  name: Build and test
  steps:
    - eas/build
    # @info #
    - eas/start_ios_simulator
    # @end #
    # ... Maestro setup and tests
```

----------------------------------------

TITLE: Start/Export Expo Project
DESCRIPTION: Commands to start the Expo development server or export the project for production. These are standard Expo CLI commands used after setting up the project structure.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/router/reference/src-directory.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo start

# Or export for production
npx expo export
```

----------------------------------------

TITLE: Pedometer Usage Example
DESCRIPTION: Demonstrates how to use the Pedometer API to check availability, get past step counts, and subscribe to real-time step updates in a React Native application.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v52.0.0/sdk/pedometer.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';

export default function App() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));

    if (isAvailable) {
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }

      return Pedometer.watchStepCount(result => {
        setCurrentStepCount(result.steps);
      });
    }
  };

  useEffect(() => {
    const subscription = subscribe();
    return () => subscription && subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text>
      <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
      <Text>Walk! And watch this go up: {currentStepCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

----------------------------------------

TITLE: Serve Web Project Locally
DESCRIPTION: Use this command to quickly test your website locally in a production-like environment. It serves the static bundle generated by the export command. Access your project via HTTP at http://localhost:8081.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/publishing-websites.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
$ npx expo serve
```

----------------------------------------

TITLE: Install react-native-keyboard-controller
DESCRIPTION: Installs the `react-native-keyboard-controller` library into your Expo project using the `npx expo install` command. This library requires a development build and `react-native-reanimated`.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/keyboard-handling.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
$ npx expo install react-native-keyboard-controller
```

----------------------------------------

TITLE: Configure ANDROID_HOME Environment Variable (Windows)
DESCRIPTION: Guide for Windows users to set the ANDROID_HOME user environment variable, pointing to the Android SDK installation directory.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/_androidStudioInstructions.mdx#_snippet_3

LANGUAGE: shell
CODE:
```
%LOCALAPPDATA%\Android\Sdk
```

----------------------------------------

TITLE: EAS Build Workflow Steps Example
DESCRIPTION: Demonstrates a basic EAS build workflow with multiple reusable steps. It shows how to use functions like 'eas/checkout' and 'eas/install_node_modules', alongside a custom 'run' command.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas/workflows/syntax.mdx#_snippet_44

LANGUAGE: yaml
CODE:
```
jobs:
  my_job:
    steps:
      # @info #
      - uses: eas/checkout
      - uses: eas/install_node_modules
      - uses: eas/prebuild
      - name: List files
        run: ls -la
      # @end #

```

----------------------------------------

TITLE: Install Expo Dev Client
DESCRIPTION: Installs the `expo-dev-client` library, which is essential for development builds. This library includes the launcher UI, dev menu, and support for over-the-air updates, enhancing the development experience.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/development-builds/expo-go-to-dev-build.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
$ npx expo install expo-dev-client
```

----------------------------------------

TITLE: Start Branch-Based Rollout
DESCRIPTION: Initiates a branch-based rollout, allowing a set of updates on a new branch to be incrementally deployed to a percentage of users. It uses an interactive guide to select channels and branches.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/rollouts.mdx#_snippet_4

LANGUAGE: shell
CODE:
```
$ eas channel:rollout
```

----------------------------------------

TITLE: Install Package
DESCRIPTION: Installs the expo-asset package using npx, which is the recommended way for Expo projects.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-asset/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install expo-asset

```

----------------------------------------

TITLE: Display Introduction Link
DESCRIPTION: Renders an 'Introduction' link using the BoxLink component, displaying a title, description, icon, and an external URL.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/third-party-overview.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Introduction to development builds"
  description="Learn why use development builds, and how to get started."
  Icon={BookOpen02Icon}
  href="/develop/development-builds/introduction/"
/>
```

----------------------------------------

TITLE: Install Web Dependencies
DESCRIPTION: Installs necessary dependencies for web development with Expo, including `react-dom`, `react-native-web`, and `@expo/metro-runtime`.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/workflow/web.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
npx expo install react-dom react-native-web @expo/metro-runtime
```

----------------------------------------

TITLE: Install Package with Expo CLI
DESCRIPTION: Install a third-party library using `npx expo install`. This command ensures Expo CLI picks a compatible version and warns about known incompatibilities, which is recommended over `npm install` or `yarn add`.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/workflow/using-libraries.mdx#_snippet_3

LANGUAGE: shell
CODE:
```
npx expo install @react-navigation/native
```

----------------------------------------

TITLE: Manual iOS Setup for registerRootComponent
DESCRIPTION: Demonstrates manual iOS setup for `registerRootComponent` by modifying `AppDelegate.(m|mm|swift)`. This is only required for apps not using Expo Prebuild.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v52.0.0/sdk/register-root-component.mdx#_snippet_1

LANGUAGE: objective-c
CODE:
```
application:didFinishLaunchingWithOptions:
    return [RCTAppSetupDefault.h rootViewWithBridge:bridge moduleName:@"main" initialProperties:initProps];

```

----------------------------------------

TITLE: Linking to Documentation
DESCRIPTION: Provides examples of effective linking strategies within documentation, emphasizing descriptive text over generic 'here' links.

SOURCE: https://github.com/expo/expo/blob/main/guides/Expo Documentation Writing Style Guide.md#_snippet_4

LANGUAGE: markdown
CODE:
```
Correct: More information on [building your own standalone app](https://docs.expo.dev/index.html) is available.
Incorrect: Information on building your own standalone app is available [here](https://docs.expo.dev/index.html).
```

----------------------------------------

TITLE: Promote Versions to Production
DESCRIPTION: Commands to manage the promotion of SDK versions through different environments, including flagging versions as beta and promoting them to the production endpoint.

SOURCE: https://github.com/expo/expo/blob/main/guides/releasing/Release Workflow.md#_snippet_21

LANGUAGE: APIDOC
CODE:
```
Command Line Tools:

`et update-versions-endpoint`
  - Updates the versions endpoint configuration.
  - Usage: `et update-versions-endpoint -s <sdk-version> -k <key> -v <value>`
  - Parameters:
    - `-s <sdk-version>`: The SDK version to target (e.g., '40.0.0').
    - `-k <key>`: The configuration key to update (e.g., 'beta').
    - `-v <value>`: The value to set for the key (e.g., 'true').
  - Example:
    `et update-versions-endpoint -s 40.0.0 -k 'beta' -v 'true'`

`et promote-versions-to-prod`
  - Promotes the currently configured versions to the production environment.
  - Requires confirmation before proceeding.
  - Usage: `et promote-versions-to-prod`
```

----------------------------------------

TITLE: Build Job Syntax Example
DESCRIPTION: Example YAML syntax for configuring the pre-packaged build job within a workflow.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas/workflows/pre-packaged-jobs.mdx#_snippet_1

LANGUAGE: yaml
CODE:
```
jobs:
  build_app:
    type: build
    params:
      platform: android # required
      profile: production # optional, default: production
```

----------------------------------------

TITLE: Create New Expo Project
DESCRIPTION: This command initializes a new Expo project using the latest version of `create-expo-app`. It sets up a default project structure. You can specify a template using the `--template` option.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/get-started/create-a-project.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx create-expo-app@latest
```

----------------------------------------

TITLE: Start EAS Update Rollback
DESCRIPTION: Initiates an interactive rollback process for EAS Update. This command guides the user through selecting the rollback type and executing the rollback to a previous version or the embedded update.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/rollbacks.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
$ eas update:rollback
```

LANGUAGE: javascript
CODE:
```
import { Terminal } from '~/ui/components/Snippet';

<Terminal cmd={['$ eas update:rollback']} />
```

----------------------------------------

TITLE: Install Prettier and ESLint Dependencies (Windows)
DESCRIPTION: Installs Prettier, `eslint-config-prettier`, and `eslint-plugin-prettier` as development dependencies using `npx expo install` for Windows systems, handling potential argument parsing differences.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/using-eslint.mdx#_snippet_5

LANGUAGE: bash
CODE:
```
npx expo install prettier eslint-config-prettier eslint-plugin-prettier "--" --dev
```

----------------------------------------

TITLE: Install Expo Dev Client and Updates
DESCRIPTION: Command to install necessary Expo packages for development client and EAS Update functionality.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/development-builds/development-workflows.mdx#_snippet_8

LANGUAGE: bash
CODE:
```
npx expo install expo-dev-client expo-updates
```

----------------------------------------

TITLE: Run Updates Server for Debugging
DESCRIPTION: Starts the `expo-updates` server in a separate terminal window, allowing for manual debugging of the update process while tests are running or being developed.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-updates/e2e/README.md#_snippet_5

LANGUAGE: bash
CODE:
```
./maestro/updates-server/start.ts
```

----------------------------------------

TITLE: Create Expo Project
DESCRIPTION: Creates a new Expo project using the latest SDK version.

SOURCE: https://github.com/expo/expo/blob/main/guides/releasing/Quality Assurance.md#_snippet_2

LANGUAGE: shell
CODE:
```
npx create-expo-app
```

----------------------------------------

TITLE: Apply Code Change in Expo Project
DESCRIPTION: Demonstrates a typical code modification within an Expo project's source files. This diff shows a change from 'Welcome!' to 'Hello World!' in the main screen component.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/get-started/start-developing.mdx#_snippet_2

LANGUAGE: diff
CODE:
```
diff --git a/app/(tabs)/index.tsx b/app/(tabs)/index.tsx
index 45cfa0e..4d1b384 100644
--- a/app/(tabs)/index.tsx
+++ b/app/(tabs)/index.tsx
@@ -17,7 +17,7 @@ export default function HomeScreen() {
      }
    >
      <ThemedView style={styles.titleContainer}>
-       <ThemedText type="title">Welcome!</ThemedText>
+       <ThemedText type="title">Hello World!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>

```

----------------------------------------

TITLE: Key-Value Storage with expo-sqlite/kv-store
DESCRIPTION: Provides examples of using `expo-sqlite/kv-store` as a drop-in replacement for `@react-native-async-storage/async-storage`. It showcases both asynchronous and synchronous APIs for setting and getting key-value pairs, leveraging SQLite as the backend.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v53.0.0/sdk/sqlite.mdx#_snippet_16

LANGUAGE: ts
CODE:
```
// Using the Store
import Storage from 'expo-sqlite/kv-store';

await Storage.setItem('key', JSON.stringify({ entity: 'value' }));
const value = await Storage.getItem('key');
const entity = JSON.parse(value);
console.log(entity); // { entity: 'value' }
```

LANGUAGE: ts
CODE:
```
// Using the Store with synchronous APIs
import Storage from 'expo-sqlite/kv-store';

Storage.setItemSync('key', 'value');
const value = Storage.getItemSync('key');
```

----------------------------------------

TITLE: Pedometer Usage Example
DESCRIPTION: Demonstrates how to use the Pedometer API to check availability, get past step counts, and subscribe to real-time step updates in a React Native application.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v51.0.0/sdk/pedometer.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';

export default function App() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));

    if (isAvailable) {
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }

      return Pedometer.watchStepCount(result => {
        setCurrentStepCount(result.steps);
      });
    }
  };

  useEffect(() => {
    const subscription = subscribe();
    return () => subscription && subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text>
      <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
      <Text>Walk! And watch this go up: {currentStepCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

----------------------------------------

TITLE: Install Canary Expo Release
DESCRIPTION: Provides instructions for installing the canary (pre-release) version of the `expo` package and its related packages, often used for testing the latest development builds.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v52.0.0/index.mdx#_snippet_2

LANGUAGE: shell
CODE:
```
# Install the alpha version of expo and its related packages
$ npm install expo@canary && npx expo install --fix
```

----------------------------------------

TITLE: Use useSafeAreaInsets Hook
DESCRIPTION: Example of using the useSafeAreaInsets hook to get direct access to safe area insets. This allows manual application of padding or margins to specific edges of a View.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/user-interface/safe-areas.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
import {
  useSafeAreaInsets
} from 'react-native-safe-area-context';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Text>Content is in safe area.</Text>
    </View>
  );
}
```

----------------------------------------

TITLE: Install expo-dev-client with Expo CLI
DESCRIPTION: Installs the `expo-dev-client` package, which is essential for running development builds of your Expo application on Android emulators. This command uses `npx` to execute the Expo CLI.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/androidSimulatedDevelopmentBuildLocal.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx expo install expo-dev-client
```

----------------------------------------

TITLE: Expo Dev Client Dependencies
DESCRIPTION: Example of specifying local paths for Expo dev client related packages in package.json. This is typically done for development or testing purposes.

SOURCE: https://github.com/expo/expo/blob/main/guides/releasing/Quality Assurance.md#_snippet_7

LANGUAGE: json
CODE:
```
{
  "dependencies": {
    "expo-dev-client": "file:../path/to/expo-dev-client",
    "expo-dev-launcher": "file:../path/to/expo-dev-launcher",
    "expo-dev-menu": "file:../path/to/expo-dev-menu",
    "expo-dev-menu-interface": "file:../path/to/expo-dev-menu-interface",
    "expo-updates": "file:../path/to/expo-updates",
    "expo-updates-interface": "file:../path/to/expo-updates-interface",
    "expo-structured-headers": "file:../path/to/expo-structured-headers",
    "expo-manifest": "file:../path/to/expo-manifest"
    /* ... other dependencies */
  }
}
```

----------------------------------------

TITLE: Start Expo Development Server
DESCRIPTION: Starts the Expo development server. This command is run from the project directory to initiate the build and serve the application for development. Press 'i' in the terminal to open on iOS Simulator.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/eas/ios-development-build-for-simulators.mdx#_snippet_3

LANGUAGE: cli
CODE:
```
$ npx expo start

```

----------------------------------------

TITLE: Install Netlify CLI
DESCRIPTION: Installs the Netlify command-line interface globally using npm. This tool is required for deploying your Expo web application to Netlify.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/publishing-websites.mdx#_snippet_3

LANGUAGE: sh
CODE:
```
$ npm install -g netlify-cli
```

----------------------------------------

TITLE: Install expo-auth-session
DESCRIPTION: Installs the expo-auth-session and expo-crypto packages using npx for managed Expo projects.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-auth-session/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install expo-auth-session expo-crypto
```

----------------------------------------

TITLE: Install expo-updates library
DESCRIPTION: Installs the necessary expo-updates library to enable OTA updates in your project.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/eas/team-development.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx expo install expo-updates
```

----------------------------------------

TITLE: Install Canary Expo Release
DESCRIPTION: Provides instructions for installing the canary (pre-release) version of the `expo` package and its related packages, often used for testing the latest development builds.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v53.0.0/index.mdx#_snippet_2

LANGUAGE: shell
CODE:
```
# Install the alpha version of expo and its related packages
$ npm install expo@canary && npx expo install --fix
```

----------------------------------------

TITLE: React Navigation Native Stack Navigator Integration
DESCRIPTION: This section highlights the integration of react-native-screens with React Navigation's createNativeStackNavigator. It guides users to external documentation for detailed setup and usage.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v51.0.0/sdk/screens.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
createNativeStackNavigator
  - Description: Provides native screen components for React Navigation.
  - Usage: Integrate with React Navigation for native stack navigation.
  - Documentation: Refer to the official React Navigation documentation for detailed API and usage instructions.
```

----------------------------------------

TITLE: Expo Initialization with registerRootComponent
DESCRIPTION: Example of a custom entry point file using `registerRootComponent` for proper Expo initialization, including `expo-updates` setup. This is the recommended approach.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/integration-in-existing-native-apps.mdx#_snippet_5

LANGUAGE: jsx
CODE:
```
import App from './App';
import { registerRootComponent } from 'expo';

registerRootComponent(App);
```

----------------------------------------

TITLE: React Navigation Native Stack Navigator Integration
DESCRIPTION: This section highlights the integration of react-native-screens with React Navigation's createNativeStackNavigator. It guides users to external documentation for detailed setup and usage.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v52.0.0/sdk/screens.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
createNativeStackNavigator
  - Description: Provides native screen components for React Navigation.
  - Usage: Integrate with React Navigation for native stack navigation.
  - Documentation: Refer to the official React Navigation documentation for detailed API and usage instructions.
```

----------------------------------------

TITLE: Initial Web App Deployment with EAS CLI
DESCRIPTION: Publishes your web app for the first time using EAS CLI. This command prompts you to select a preview subdomain for your project, which is used to create a preview URL. Upon completion, it outputs a preview URL to access your deployed app.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/deploy/web.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
$ eas deploy
```

----------------------------------------

TITLE: Get Expo Project ID and Push Token
DESCRIPTION: Retrieves the project ID from Expo config and fetches the Expo push token. Requires the 'expo-constants' library and 'expo-notifications' module.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/push-notifications/push-notifications-setup.mdx#_snippet_3

LANGUAGE: typescript
CODE:
```
const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
const pushTokenString = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
```

----------------------------------------

TITLE: FlashList Installation Component
DESCRIPTION: Imports the APIInstallSection component, likely used for displaying installation instructions or links to documentation.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v51.0.0/sdk/flash-list.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
import { APIInstallSection } from '~/components/plugins/InstallSection';
```

----------------------------------------

TITLE: iOS Expo.plist Update Channel Configuration
DESCRIPTION: Configures the update channel for iOS native projects by adding a dictionary to the Expo.plist file. Ensure 'your-channel-name' is replaced with the correct channel.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/getting-started.mdx#_snippet_11

LANGUAGE: xml
CODE:
```
<key>EXUpdatesRequestHeaders</key>
<dict>
  <key>expo-channel-name</key>
  <string>your-channel-name</string>
</dict>
```

----------------------------------------

TITLE: Unit Testing Setup and Execution
DESCRIPTION: Instructions for creating and running unit tests for Expo features. It covers file naming conventions, mocking native modules using jest-expo, and platform-specific testing strategies.

SOURCE: https://github.com/expo/expo/blob/main/CONTRIBUTING.md#_snippet_14

LANGUAGE: typescript
CODE:
```
Create test files with `*-test.ts` or `*-test.tsx` extensions in `src/__tests__`.
Exclude platforms using `.test.ios.ts`, `.test.native.ts`, or `.test.web.ts`.
```

LANGUAGE: bash
CODE:
```
yarn test
# Or to test a specific platform:
# Press 'X' and select the platform.
```

----------------------------------------

TITLE: Android Manifest Update Channel Configuration
DESCRIPTION: Specifies the update channel for Android native projects by adding metadata to the AndroidManifest.xml file. Replace 'your-channel-name' with the actual channel name.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/getting-started.mdx#_snippet_10

LANGUAGE: xml
CODE:
```
<meta-data android:name="expo.modules.updates.UPDATES_CONFIGURATION_REQUEST_HEADERS_KEY" android:value="{\"expo-channel-name\":\"your-channel-name\"}"/>
```

----------------------------------------

TITLE: Display Introduction Link
DESCRIPTION: Renders an 'Introduction' link using the BoxLink component, displaying a title, description, icon, and an external URL.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v53.0.0/sdk/third-party-overview.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Introduction to development builds"
  description="Learn why use development builds, and how to get started."
  Icon={BookOpen02Icon}
  href="/develop/development-builds/introduction/"
/>
```

----------------------------------------

TITLE: Run EAS Workflow
DESCRIPTION: Executes a defined EAS Workflow by specifying its YAML file name. This command triggers the jobs configured in the workflow, such as building your application for different platforms.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas/workflows/get-started.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
$ npx eas-cli@latest workflow:run create-production-builds.yml
```

----------------------------------------

TITLE: Log in to Expo Account
DESCRIPTION: Logs you into your Expo account using EAS CLI. This is required to authenticate your builds and access EAS services.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build/setup.mdx#_snippet_2

LANGUAGE: shell
CODE:
```
$ eas login
```

----------------------------------------

TITLE: Install Expo SDK Packages
DESCRIPTION: Installs multiple Expo SDK packages such as `expo-camera`, `expo-contacts`, and `expo-sensors` using the `npx expo install` command. This is the standard method for adding Expo functionality to your project.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v51.0.0/index.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx expo install expo-camera expo-contacts expo-sensors
```

----------------------------------------

TITLE: Build for Android App Store
DESCRIPTION: Initiates a build process for the Android platform using EAS CLI. Requires Android app signing credentials. This command builds the application package ready for distribution on the Google Play Store.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build/setup.mdx#_snippet_5

LANGUAGE: shell
CODE:
```
$ eas build --platform android
```

----------------------------------------

TITLE: Update index.js for registerRootComponent
DESCRIPTION: Demonstrates the code changes required in `index.js` to switch from React Native's `AppRegistry` to Expo's `registerRootComponent`. This ensures proper asset loading for updates.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/getting-started.mdx#_snippet_2

LANGUAGE: diff
CODE:
```
diff --git a/index.js b/index.js
index a850d03..8fb69fd 100644
--- a/index.js
+++ b/index.js
@@ -2,8 +2,7 @@
  * @forma
  */

-import {AppRegistry} from 'react-native';
+import {registerRootComponent} from 'expo';
 import App from './App';
-import {name as appName} from './app.json';

-AppRegistry.registerComponent(appName, () => App);
+export default registerRootComponent(App);
```

----------------------------------------

TITLE: Install and Build with EAS CLI
DESCRIPTION: Demonstrates the installation of the EAS CLI and commands to build and submit your application to app stores. This process automates native code signing for both Android and iOS.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/distribution/introduction.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
# Install the CLI
$ npm i -g eas-cli

# Build and submit your app
$ eas build --auto-submit

# OR -- Submit existing binaries
$ eas submit
```

LANGUAGE: shell
CODE:
```
npm i -g eas-cli && eas build --auto-submit
```

----------------------------------------

TITLE: Initialize Expo Module
DESCRIPTION: Creates a new Expo module project using the create-expo-module CLI. This command sets up the basic structure for a new native module.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/native-view-tutorial.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx create-expo-module expo-web-view
```

----------------------------------------

TITLE: LaunchDarkly React Native SDK Guide
DESCRIPTION: Explains how to integrate the LaunchDarkly React Native SDK for feature flagging in Expo projects. It covers setup and usage for managing feature flags.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/using-feature-flags.mdx#_snippet_2

LANGUAGE: javascript
CODE:
```
import { LDClient, LDUser } from 'launchdarkly-react-native';

// Initialize LaunchDarkly client (example)
const ldClient = new LDClient('YOUR_SDK_KEY');
ldClient.start();

// Define user context (example)
const user: LDUser = {
  key: 'user-id-123',
  email: 'user@example.com'
};

// Identify user (example)
ldClient.identify(user);

// Check a feature flag (example)
const isFlagEnabled = ldClient.variation('my-feature-flag', false);

if (isFlagEnabled) {
  // Show new feature
} else {
  // Show default behavior
}
```

----------------------------------------

TITLE: Configure EAS Build
DESCRIPTION: Initiates the configuration process for EAS Build within your project. This command generates necessary configuration files like eas.json.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build/setup.mdx#_snippet_3

LANGUAGE: shell
CODE:
```
$ eas build:configure
```

----------------------------------------

TITLE: Publish Demo Apps
DESCRIPTION: Publishes the `native-component-list` demo app to allow external testing. It requires setting the correct SDK version in `app.json` and using `expo publish` for specified accounts.

SOURCE: https://github.com/expo/expo/blob/main/guides/releasing/Release Workflow.md#_snippet_12

LANGUAGE: bash
CODE:
```
expo publish
```

----------------------------------------

TITLE: Example Receipt Download UI
DESCRIPTION: Illustrates using the ContentSpotlight component to display an example of the receipt download interface, directing users to a Stripe-hosted page for a given billing period.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/billing/invoices-and-receipts.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
<ContentSpotlight
  alt="Download receipt shown in the Stripe dashboard."
  src="/static/images/billing/receipts-02.png"
  className="max-w-[380px]"
/>
```

----------------------------------------

TITLE: Expo CLI Tunneling Setup
DESCRIPTION: Enable tunneling to connect remote devices to your Expo dev server over a public URL, bypassing network restrictions. This requires installing `@expo/ngrok` and using the `--tunnel` flag.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/more/expo-cli.mdx#_snippet_12

LANGUAGE: shell
CODE:
```
$ npm i -g @expo/ngrok
# Installs the ngrok package globally.

npx expo start --tunnel
# Starts the dev server with a public tunnel URL.
```

----------------------------------------

TITLE: Install expo-dev-client
DESCRIPTION: Installs the expo-dev-client library into the project using npx. This library is essential for creating custom development builds.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/eas/configure-development-build.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
$ npx expo install expo-dev-client
```

----------------------------------------

TITLE: Create New Expo App with Expo Router
DESCRIPTION: Use `create-expo-app` to quickly set up a new project with Expo Router pre-installed and configured. This is the recommended approach for new projects.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/router/installation.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx create-expo-app@latest
```

----------------------------------------

TITLE: App Configuration with TypeScript
DESCRIPTION: Demonstrates how to use TypeScript for `app.config.ts` files in Expo. This example shows a basic configuration object with `name` and `slug`, and includes the necessary `ts-node/register` import for comprehensive TypeScript setup.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/typescript.mdx#_snippet_15

LANGUAGE: ts
CODE:
```
import 'ts-node/register'; // Add this to import TypeScript files
import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'my-app',
  slug: 'my-app',
};

export default config;
```

----------------------------------------

TITLE: Run Expo CLI
DESCRIPTION: Executes the Expo CLI binary for starting development servers or running other Expo commands. This is the primary entry point for interacting with the Expo development environment.

SOURCE: https://github.com/expo/expo/blob/main/packages/@expo/cli/README.md#_snippet_0

LANGUAGE: shell
CODE:
```
npx expo
```

----------------------------------------

TITLE: Rendering Content Spotlight Component
DESCRIPTION: Shows how to use the ContentSpotlight component, likely for displaying featured content or images with associated descriptions and links. It includes parameters for accessibility (alt text), image source (src), and styling (className).

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/billing/plans.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
<ContentSpotlight
  alt="Billing page in EAS dashboard displays the current plan for an Organization account."
  src="/static/images/billing/plan-01.png"
  className="max-w-[720px]" 
/>
```

----------------------------------------

TITLE: Updating Expo Documentation
DESCRIPTION: Steps for updating the project's documentation, which is built with Next.js. It includes navigating to the docs directory, installing dependencies, starting the development server, and handling versioning and API doc generation.

SOURCE: https://github.com/expo/expo/blob/main/CONTRIBUTING.md#_snippet_16

LANGUAGE: bash
CODE:
```
cd docs
yarn
yarn dev
# Ensure Node version 22.13.1 or higher is used.
# Copy changes to docs/pages/versions/unversioned/ for older versions.
```

LANGUAGE: bash
CODE:
```
# To regenerate package API docs:
et generate-docs-api-data -p <package-name>
et generate-docs-api-data -p <package-name> -s <sdk-version-number>
```

----------------------------------------

TITLE: Basic app.json Configuration
DESCRIPTION: Demonstrates the default configuration for an Expo project's app.json file, specifying the application name, slug, and platform-specific identifiers.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build-reference/variants.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "expo": {
    "name": "MyApp",
    "slug": "my-app",
    "ios": {
      "bundleIdentifier": "com.myapp"
    },
    "android": {
      "package": "com.myapp"
    }
  }
}
```

----------------------------------------

TITLE: Run Expo on Android Emulator
DESCRIPTION: Executes the Expo project on an Android emulator. This command handles necessary installations, builds React Android binaries, starts the Metro bundler, and opens the app in the emulator.

SOURCE: https://github.com/expo/expo/blob/main/apps/bare-expo/README.md#_snippet_0

LANGUAGE: shell
CODE:
```
yarn android
```

----------------------------------------

TITLE: Example Invoice Download UI
DESCRIPTION: Demonstrates the use of the ContentSpotlight component to show an example of the invoice download interface, linking to a Stripe-hosted page for a specific billing period.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/billing/invoices-and-receipts.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
<ContentSpotlight
  alt="Download invoice shown in the Stripe dashboard."
  src="/static/images/billing/receipts-02.png"
  className="max-w-[380px]"
/>
```

----------------------------------------

TITLE: PostHog Feature Flag Integration Guide
DESCRIPTION: Provides guidance on integrating PostHog feature flags within React Native and Expo projects. It covers setup and usage for remote feature management.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/using-feature-flags.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
import { PostHog } from 'posthog-react-native';

// Initialize PostHog (example)
const posthog = new PostHog('YOUR_API_KEY', {
  api_host: 'https://us.posthog.com'
});

// Check a feature flag (example)
const isFeatureEnabled = posthog.isFeatureEnabled('new-dashboard');

if (isFeatureEnabled) {
  // Show new dashboard
} else {
  // Show old dashboard
}
```

----------------------------------------

TITLE: Execute iOS E2E Tests
DESCRIPTION: Prepares the environment by installing pods and then runs the E2E tests for iOS using Maestro, targeting the `updates-e2e-enabled.yml` test suite. Ensure no Android emulators are running.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-updates/e2e/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npx pod-install
yarn maestro:ios:debug:build
./maestro/maestro-test-executor.sh ./maestro/tests/updates-e2e-enabled.yml ios debug
```

----------------------------------------

TITLE: Build for iOS App Store
DESCRIPTION: Initiates a build process for the iOS platform using EAS CLI. Requires Apple Developer Program membership and signing credentials. This command builds the application package ready for distribution on the Apple App Store.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build/setup.mdx#_snippet_6

LANGUAGE: shell
CODE:
```
$ eas build --platform ios
```

----------------------------------------

TITLE: EAS Tutorial Link
DESCRIPTION: Links to the EAS Tutorial, covering EAS Build, Update, and Submit workflows for building Android and iOS apps using Expo Application Services (EAS).

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/overview.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="EAS Tutorial"
  description="If you are looking to learn about building your Android and iOS apps using Expo Application Services (EAS), this tutorial covers the EAS Build, Update, and Submit workflows."
  href="/tutorial/eas/introduction/"
  Icon={GraduationHat02DuotoneIcon}
/>
```

----------------------------------------

TITLE: Install AuthSession and Dependencies
DESCRIPTION: Installs the AuthSession library and its peer dependency, expo-crypto, which is required for cryptographic operations used in authentication flows.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v52.0.0/sdk/auth-session.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install expo-auth-session expo-crypto
# or
yarn add expo-auth-session expo-crypto
```

----------------------------------------

TITLE: EAS Build Channel Configuration (eas.json)
DESCRIPTION: Configures update channels for 'preview' and 'production' build profiles within eas.json when using EAS Build. This allows directing updates to specific build types.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/getting-started.mdx#_snippet_8

LANGUAGE: json
CODE:
```
{
  "build": {
    "preview": {
      "channel": "preview"
      // ...
    },
    "production": {
      "channel": "production"
      // ...
    }
  }
}
```

----------------------------------------

TITLE: Start Expo Development Server for Web
DESCRIPTION: Starts the Expo development server with web support enabled, allowing you to preview your application in a browser. This command can be run directly from the terminal.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/customizing-metro.mdx#_snippet_6

LANGUAGE: bash
CODE:
```
$ npx expo start --web
```

----------------------------------------

TITLE: iOS Expo.plist Configuration for Expo Updates
DESCRIPTION: Details the additions to the iOS Expo.plist file for configuring Expo Updates. It sets the EXUpdatesRuntimeVersion and EXUpdatesURL, which are crucial for the iOS app to connect to the Expo update service.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/getting-started.mdx#_snippet_7

LANGUAGE: xml
CODE:
```
<key>EXUpdatesRuntimeVersion</key>
<string>1.0.0</string>
<key>EXUpdatesURL</key>
<string>https://u.expo.dev/your-project-id</string>
```

----------------------------------------

TITLE: Log in to Expo Account
DESCRIPTION: Logs the user into their Expo account using the EAS CLI. This command is essential for authenticating with Expo services and is typically the first step before deploying updates or using other EAS features.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/getting-started.mdx#_snippet_4

LANGUAGE: shell
CODE:
```
$ eas login
```

----------------------------------------

TITLE: Install Expo Package for Web Support
DESCRIPTION: Installs the `expo` package into a React Native project to enable targeting the web platform. This is a step for projects not initially set up with Expo.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/workflow/web.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
npm install expo
```

----------------------------------------

TITLE: Install jest-expo and Configure package.json
DESCRIPTION: Installs the compatible versions of jest-expo and jest, and configures the package.json file to use jest-expo as the preset for running tests.

SOURCE: https://github.com/expo/expo/blob/main/packages/jest-expo/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install jest-expo jest
```

LANGUAGE: json
CODE:
```
{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "preset": "jest-expo"
  }
}
```

----------------------------------------

TITLE: Render Development Environment Forms
DESCRIPTION: Renders UI components to guide the user through selecting their development platform and device, and choosing their preferred development mode (Expo Go or development build).

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/get-started/set-up-your-environment.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
<PlatformAndDeviceForm />
```

LANGUAGE: jsx
CODE:
```
<DevelopmentModeForm />
```

LANGUAGE: jsx
CODE:
```
<DevelopmentEnvironmentInstructions />
```

----------------------------------------

TITLE: Run Development Server
DESCRIPTION: Executes the 'dev' script defined in package.json to start the Expo development server. This command launches the server with the specified environment variables, allowing for a customized development experience.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/eas/multiple-app-variants.mdx#_snippet_5

LANGUAGE: shell
CODE:
```
$ npm run dev
```

----------------------------------------

TITLE: Expo Install: Automatic Config Plugin Addition
DESCRIPTION: When using `npx expo install` for a module with a config plugin, Expo automatically adds the plugin to the project's `app.config.js`. This process is designed to streamline setup and prevent errors from forgotten plugin configurations. It primarily works with static app configurations (`app.json`, `app.config.json`) and may issue warnings for dynamic configurations (`app.config.js`) requiring manual addition.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/config-plugins/development-and-debugging.mdx#_snippet_22

LANGUAGE: APIDOC
CODE:
```
Command: npx expo install <package-name>

Description:
Installs a package and automatically adds its config plugin to the project's app configuration if one is present.

Behavior:
- Automatically adds config plugins to the root `app.config.js` file.
- This feature is primarily for projects using static app configurations (`app.json`, `app.config.json`).
- For projects with dynamic `app.config.js`, a warning is issued, and manual addition to the config is required.
- Does not detect or add mandatory props for config plugins; only the plugin name is added.

Example Scenario (Dynamic Config Warning):
If `expo install expo-camera` is run in a project with `app.config.js`:

Output:
```sh
Cannot automatically write to dynamic config at: app.config.js
Please add the following to your app config

{
  "plugins": [
    "expo-camera"
  ]
}
```

Limitations:
- Only adds plugins to the root `app.config.js` to avoid conflicts with non-plugin packages.
- Does not handle mandatory plugin properties, which might lead to runtime errors if not manually configured.
```

----------------------------------------

TITLE: Use Expo Module in React Native Component
DESCRIPTION: Demonstrates how to import and use a function from an installed Expo module ('expo-settings') within a React Native component. This example shows rendering a text message from the module.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/use-standalone-expo-module-in-your-project.mdx#_snippet_10

LANGUAGE: tsx
CODE:
```
import React from 'react';
import * as Settings from 'expo-settings';
import { Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{Settings.hello()}</Text>
    </View>
  );
}
```

----------------------------------------

TITLE: Importing Icons and Components
DESCRIPTION: Demonstrates importing necessary icons and UI components from the '@expo/styleguide' and custom icon packages, as well as local UI components.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/router/introduction.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
import { DocsLogo } from '@expo/styleguide';
import { GithubIcon } from '@expo/styleguide-icons/custom/GithubIcon';
import { BookOpen02Icon } from '@expo/styleguide-icons/outline/BookOpen02Icon';
import { Rocket02Icon } from '@expo/styleguide-icons/outline/Rocket02Icon';

import { BoxLink } from '~/ui/components/BoxLink';
import { Collapsible } from '~/ui/components/Collapsible';
```

----------------------------------------

TITLE: Record Sound with expo-av
DESCRIPTION: Provides an example of recording audio using `expo-av`. This snippet includes requesting microphone permissions, configuring audio modes for recording, starting and stopping the recording process, and retrieving the URI of the recorded audio.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v52.0.0/sdk/audio-av.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
import { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  async function startRecording() {
    try {
      if (permissionResponse.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync(
      {
        allowsRecordingIOS: false,
      }
    );
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
  }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
```

----------------------------------------

TITLE: Use Default Options with --yes
DESCRIPTION: The `--yes` flag allows for the creation of a new project using all default options. This bypasses interactive prompts and immediately sets up the project with standard configurations.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/more/create-expo.mdx#_snippet_2

LANGUAGE: shell
CODE:
```
npx create-expo-app@latest --yes
```

----------------------------------------

TITLE: Background Location Task Example
DESCRIPTION: Demonstrates how to request foreground and background location permissions and start background location updates using expo-task-manager and expo-location. It also defines a task to process location data received in the background.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/task-manager.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

const LOCATION_TASK_NAME = 'background-location-task';

const requestPermissions = async () => {
  const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
  if (foregroundStatus === 'granted') {
    const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
    if (backgroundStatus === 'granted') {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced,
      });
    }
  }
};

const PermissionsButton = () => (
  <View style={styles.container}>
    <Button onPress={requestPermissions} title="Enable background location" />
  </View>
);

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    // Error occurred - check `error.message` for more details.
    return;
  }
  if (data) {
    const { locations } = data;
    // do something with the locations captured in the background
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PermissionsButton;
```

----------------------------------------

TITLE: Basic Light Sensor Usage
DESCRIPTION: Demonstrates how to use the LightSensor from expo-sensors to get illuminance data. It includes functions to subscribe to sensor updates, unsubscribe, and toggle the listening state, displaying the current illuminance value. This example is primarily for Android.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/light-sensor.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { LightSensor } from 'expo-sensors';

export default function App() {
  const [{ illuminance }, setData] = useState({ illuminance: 0 });
  const [subscription, setSubscription] = useState(null);

  const toggle = () => {
    if (subscription) {
      unsubscribe();
    } else {
      subscribe();
    }
  };

  const subscribe = () => {
    setSubscription(
      LightSensor.addListener(sensorData => {
        setData(sensorData);
      })
    );
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    subscribe();
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.sensor}>
      <Text>Light Sensor:</Text>
      <Text>
        Illuminance: {Platform.OS === 'android' ? `${illuminance} lx` : `Only available on Android`}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggle} style={styles.button}>
          <Text>Toggle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sensor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
});
```

----------------------------------------

TITLE: Build for All Platforms
DESCRIPTION: Initiates a build process for both Android and iOS platforms simultaneously using EAS CLI. This is a convenient option for building for multiple stores at once.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build/setup.mdx#_snippet_7

LANGUAGE: shell
CODE:
```
$ eas build --platform all
```

----------------------------------------

TITLE: Install dom-to-image for Web Screenshot Capture
DESCRIPTION: This snippet demonstrates how to install the 'dom-to-image' library, which is used to capture screenshots of DOM nodes on web browsers. It's a necessary step for implementing web-specific screenshot functionality in universal applications.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/platform-differences.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
$ npm install dom-to-image
```

----------------------------------------

TITLE: Configure app.json for expo-updates
DESCRIPTION: Modifies the app.json file to include the 'expo.updates.url' configuration. This specifies the endpoint for fetching update manifests, essential for remote updates. The example shows a custom URL for a local server.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/bare/installing-updates.mdx#_snippet_3

LANGUAGE: json
CODE:
```
{
  "name": "MyApp",
  "displayName": "MyApp",
  "expo": {
    "name": "MyApp",
     ...
    "updates": {
      "url": "http://localhost:3000/api/manifest"
    }
  }
}
```

----------------------------------------

TITLE: Load Remote Font with useFonts
DESCRIPTION: Loads a font directly from a web URL using the useFonts hook. Ensure the remote font is served with proper CORS configuration for web compatibility. This example demonstrates loading 'Inter-SemiBoldItalic' from a URL.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/user-interface/fonts.mdx#_snippet_14

LANGUAGE: tsx
CODE:
```
import { useFonts } from 'expo-font';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  const [loaded, error] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });

  if (!loaded || error) {
    // Handle loading or error state
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter-SemiBoldItalic', fontSize: 30 }}>Inter SemiBoldItalic</Text>
      <Text style={{ fontSize: 30 }}>Platform Default</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

----------------------------------------

TITLE: Google Maps Setup for Android
DESCRIPTION: Provides a comprehensive guide for configuring Google Maps on Android within an Expo project. This includes enabling the Maps SDK, obtaining SHA-1 fingerprints, creating API keys, and integrating them into the app.json configuration.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/maps.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
Google Maps Android Configuration:

This section outlines the steps required to enable and configure Google Maps for Android within your Expo project.

**Prerequisites:**
- A Google Cloud API project.
- Maps SDK for Android enabled in your Google Cloud project.
- Your app's SHA-1 certificate fingerprint.

**Steps:**

1.  **Register Google Cloud Project & Enable Maps SDK for Android**:
    - Navigate to the [Google API Manager](https://console.developers.google.com/apis).
    - Create a new project or select an existing one.
    - Enable the 'Maps SDK for Android' service for your project.

2.  **Obtain SHA-1 Certificate Fingerprint**:
    - **For Google Play Store:**
        - Upload your app binary to the Google Play Console.
        - Go to 'Release' > 'Setup' > 'App integrity' > 'App Signing'.
        - Copy the SHA-1 certificate fingerprint.
    - **For Development Builds:**
        - Access your project's dashboard on Expo.
        - Navigate to 'Project settings' > 'Credentials'.
        - Under 'Application Identifiers', find your package name.
        - Under 'Android Keystore', copy the SHA-1 Certificate Fingerprint.

3.  **Create and Configure API Key**:
    - Go to the [Google Cloud Credential manager](https://console.cloud.google.com/apis/credentials).
    - Click 'Create Credentials' > 'API Key'.
    - Click 'Edit API key' to configure restrictions.
    - Under 'Application restrictions', select 'Android apps'.
    - Add an item:
        - **Package name:** Your `android.package` from `app.json` (e.g., `com.company.myapp`).
        - **SHA-1 certificate fingerprint:** The fingerprint obtained in Step 2.
    - Click 'Done' and then 'Save'.

4.  **Add API Key to `app.json`**:
    - Copy your generated **API Key**.
    - Add it to your `app.json` file under the `android.config.googleMaps.apiKey` field.

    **Example `app.json` snippet:**
    ```json
    {
      "expo": {
        "android": {
          "config": {
            "googleMaps": {
              "apiKey": "YOUR_GOOGLE_MAPS_API_KEY"
            }
          }
        }
      }
    }
    ```

**Usage:**
After completing these steps and creating a new development build, you can use the Google Maps API with `expo-maps` on Android.

**Related:**
- Apple Maps on iOS requires no additional configuration beyond package installation.
```

----------------------------------------

TITLE: Configure expo-updates with eas update:configure
DESCRIPTION: Runs the EAS CLI command to automatically configure the 'expo-updates' URL and 'projectId' in your project's app.json file. This simplifies the setup process for EAS Update.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/bare/installing-updates.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
$ eas update:configure
```

----------------------------------------

TITLE: Video Link Component Example
DESCRIPTION: Renders a link to a video tutorial, including the video ID, title, and a brief description. This component is likely used to embed or link to external video content.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/development-builds/introduction.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
<VideoBoxLink
  videoId="FdjczjkwQKE"
  title="Expo Go & Development Builds: which should you use?"
  description="In this tutorial video Beto explains what each of them is, and when to choose a development build."
/>
```

----------------------------------------

TITLE: Expo Localization with i18n-js Example
DESCRIPTION: Demonstrates how to set up basic localization in an Expo app using the expo-localization library to get device locale and i18n-js for translation management. It shows how to define translations, set the locale, and use translated strings in components.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/localization.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import { View, StyleSheet, Text } from 'react-native';
import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

// Set the key-value pairs for the different languages you want to support.
const translations = {
  en: { welcome: 'Hello', name: 'Charlie' },
  ja: { welcome: 'こんにちは' },
};
const i18n = new I18n(translations);

// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode ?? 'en';

// When a value is missing from a language it'll fall back to another language with the key present.
i18n.enableFallback = true;
// To see the fallback mechanism uncomment the line below to force the app to use the Japanese language.
// i18n.locale = 'ja';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {i18n.t('welcome')} {i18n.t('name')}
      </Text>
      <Text>Current locale: {i18n.locale}</Text>
      <Text>Device locale: {getLocales()[0].languageCode}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    marginBottom: 16,
  },
});
```

----------------------------------------

TITLE: Start Expo Development Server for Web
DESCRIPTION: Starts the Expo development server, enabling live reloading and debugging for your application directly in the web browser.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/workflow/web.mdx#_snippet_5

LANGUAGE: bash
CODE:
```
npx expo start --web
```

----------------------------------------

TITLE: Android Manifest Configuration for Expo Updates
DESCRIPTION: Shows the XML meta-data added to AndroidManifest.xml to configure Expo Updates on Android. It includes the EXPO_UPDATE_URL and EXPO_RUNTIME_VERSION, pointing to the Expo update server and the app's runtime version.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/getting-started.mdx#_snippet_6

LANGUAGE: xml
CODE:
```
<meta-data android:name="expo.modules.updates.EXPO_UPDATE_URL" android:value="https://u.expo.dev/your-project-id"/>
<meta-data android:name="expo.modules.updates.EXPO_RUNTIME_VERSION" android:value="@string/expo_runtime_version"/>
```

----------------------------------------

TITLE: Test Native Links with uri-scheme CLI
DESCRIPTION: Use the uri-scheme CLI to test opening native links on a device. This example shows how to launch the Expo Go app on iOS to a specific route. Replace the IP address with your current Expo start IP.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/router/reference/sitemap.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx uri-scheme open exp://192.168.87.39:19000/--/form-sheet --ios
```

----------------------------------------

TITLE: Start Local Dev Launcher Bundler
DESCRIPTION: Instructions for starting the Metro bundler locally to develop the JavaScript code within the `bundle` folder of the expo-dev-launcher package.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-dev-launcher/README.md#_snippet_0

LANGUAGE: shell
CODE:
```
cd packages/expo-dev-launcher
yarn start
```

----------------------------------------

TITLE: Create iOS Development Build
DESCRIPTION: Initiates the creation of a development build for the iOS platform using the 'development' profile. This command triggers the EAS build process.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/iosSimulatedDevelopmentBuild.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
$ eas build --platform ios --profile development
```

----------------------------------------

TITLE: Run Project on iOS Device
DESCRIPTION: Builds and runs your Expo project on a connected iOS device. This command automatically starts the development server and prompts you to select your device.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/iosPhysicalDevelopmentBuildLocal.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npx expo run:ios --device
```

----------------------------------------

TITLE: Expo ProcessingView Component Example
DESCRIPTION: Demonstrates integrating a Processing.js sketch into an Expo app using `expo-processing`. It shows how to use the `ProcessingView` component, define `setup` and `draw` functions for the sketch, and includes a recursive fractal drawing that animates based on time.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-processing/README.md#_snippet_0

LANGUAGE: javascript
CODE:
```
import React from 'react';
import { ProcessingView } from 'expo-processing';

export default class App extends React.Component {
  render() {
    return (
      <ProcessingView style={{ flex: 1 }} sketch={this._sketch} />
    );
  }

  _sketch = (p) => {
    p.setup = () => {
      p.strokeWeight(7);
    }

    const harom = (ax, ay, bx, by, level, ratio) => {
      if (level <= 0) {
        return;
      }

      const vx = bx - ax;
      const vy = by - ay;
      const nx = p.cos(p.PI / 3) * vx - p.sin(p.PI / 3) * vy;
      const ny = p.sin(p.PI / 3) * vx + p.cos(p.PI / 3) * vy;
      const cx = ax + nx;
      const cy = ay + ny;
      p.line(ax, ay, bx, by);
      p.line(ax, ay, cx, cy);
      p.line(cx, cy, bx, by);

      harom(
        ax * ratio + cx * (1 - ratio),
        ay * ratio + cy * (1 - ratio),
        ax * (1 - ratio) + bx * ratio,
        ay * (1 - ratio) + by * ratio,
        level - 1,
        ratio);
    }

    p.draw = () => {
      p.background(240);
      harom(
        p.width - 142, p.height - 142, 142, p.height - 142, 6,
        (p.sin(0.0005 * Date.now() % (2 * p.PI)) + 1) / 2);
    }
  }
}
```

----------------------------------------

TITLE: Expo Push Notifications Example
DESCRIPTION: A complete React Native component demonstrating how to register for push notifications, receive them, and schedule local notifications using Expo Notifications. It includes setup for notification handlers and listeners, token retrieval, and platform-specific channel management for Android.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v53.0.0/sdk/notifications.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [channels, setChannels] = useState<Notifications.NotificationChannel[]>([]);
  const [notification, setNotification] = useState<Notifications.Notification | undefined>(
    undefined
  );

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => token && setExpoPushToken(token));

    if (Platform.OS === 'android') {
      Notifications.getNotificationChannelsAsync().then(value => setChannels(value ?? []));
    }
    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      notificationListener.remove();
      responseListener.remove();
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text>Your expo push token: {expoPushToken}</Text>
      <Text>{`Channels: ${JSON.stringify(
        channels.map(c => c.id),
        null,
        2
      )}`}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here', test: { test1: 'more data' } },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 2,
    },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('myNotificationChannel', {
      name: 'A channel is needed for the permissions prompt to appear',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    // EAS projectId is used here.
    try {
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
      if (!projectId) {
        throw new Error('Project ID not found');
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
      console.log(token);
    } catch (e) {
      token = `${e}`;
    }
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}

```

----------------------------------------

TITLE: Basic Calendar Usage Example
DESCRIPTION: Demonstrates how to request calendar permissions, fetch existing calendars, and display a button to create a new calendar using expo-calendar. It includes setup for the main app component and helper functions for calendar operations.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/calendar.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
import { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import * as Calendar from 'expo-calendar';

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        console.log('Here are all your calendars:');
        console.log({ calendars });
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Calendar Module Example</Text>
      <Button title="Create a new calendar" onPress={createCalendar} />
    </View>
  );
}

async function getDefaultCalendarSource() {
  const defaultCalendar = await Calendar.getDefaultCalendarAsync();
  return defaultCalendar.source;
}

async function createCalendar() {
  const defaultCalendarSource =
    Platform.OS === 'ios'
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: 'Expo Calendar' };
  const newCalendarID = await Calendar.createCalendarAsync({
    title: 'Expo Calendar',
    color: 'blue',
    entityType: Calendar.EntityTypes.EVENT,
    sourceId: defaultCalendarSource.id,
    source: defaultCalendarSource,
    name: 'internalCalendarName',
    ownerAccount: 'personal',
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
  });
  console.log(`Your new calendar ID is: ${newCalendarID}`);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
```

----------------------------------------

TITLE: Install Canary Expo Release
DESCRIPTION: Provides instructions for installing the canary (pre-release) version of the `expo` package and its related packages, often used for testing the latest development builds.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/index.mdx#_snippet_2

LANGUAGE: shell
CODE:
```
# Install the alpha version of expo and its related packages
$ npm install expo@canary && npx expo install --fix
```

----------------------------------------

TITLE: Publish Update with EAS CLI
DESCRIPTION: Use the `eas update` command to publish changes to your Expo project. Specify a channel name and a message to describe the update, allowing for bug fixes and quick updates without new builds.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/getting-started.mdx#_snippet_13

LANGUAGE: bash
CODE:
```
$ eas update --channel [channel-name] --message "[message]"
```

----------------------------------------

TITLE: Expo CLI Command Transition
DESCRIPTION: Illustrates the change in how Expo projects are started, moving from legacy global commands to the recommended npx execution of the @expo/cli package. This reflects a shift towards more isolated and version-specific CLI tooling.

SOURCE: https://github.com/expo/expo/blob/main/packages/@expo/cli/README.md#_snippet_15

LANGUAGE: APIDOC
CODE:
```
Expo CLI Command Usage:

Legacy Global Command:
  expo start
    - Starts the Expo development server using the global expo-cli.

Recommended New Command:
  npx expo start
    - Starts the Expo development server using the locally installed @expo/cli package.
    - This command lazily loads platforms, improving startup performance.

Related Legacy Commands (now integrated):
  expo start:web
  expo web
    - These commands are now implicitly handled by `npx expo start` when web platform is requested.
```

----------------------------------------

TITLE: EAS Build Hook Script Reference in package.json
DESCRIPTION: This package.json example illustrates how to reference external scripts for EAS Build lifecycle hooks, specifically the eas-build-pre-install hook. It shows how to execute a custom shell script before the build installation phase.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build-reference/npm-hooks.mdx#_snippet_1

LANGUAGE: json
CODE:
```
{
  "name": "my-app",
  "scripts": {
    "eas-build-pre-install": "./pre-install",
    "start": "expo start"
    /* @hide ... */ /* @end */
  },
  "dependencies": {
    /* @hide ... */
    /* @end */
  }
}
```

----------------------------------------

TITLE: Create New Expo App
DESCRIPTION: Command to create a new Expo project. This is a prerequisite for using EAS Build if you don't have an existing project.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build/setup.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
$ npx create-expo-app my-app
```

----------------------------------------

TITLE: Register Device for EAS Build
DESCRIPTION: Registers a physical iOS device with EAS. This is a prerequisite for creating development builds, as it typically involves generating an ad hoc provisioning profile associated with your device.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/iosPhysicalDevelopmentBuild.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
$ eas device:create
```

----------------------------------------

TITLE: Configure Next.js Adapter for Expo (Full)
DESCRIPTION: A comprehensive `next.config.js` example combining Expo integration with Next.js best practices like strict mode, SWC minification, and package transpilation. This configuration ensures a robust setup for web builds.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/using-nextjs.mdx#_snippet_6

LANGUAGE: javascript
CODE:
```
const { withExpo } = require('@expo/next-adapter');

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'expo',
    // Add more React Native/Expo packages here...
  ],
  experimental: {
    forceSwcTransforms: true,
  },
});

module.exports = nextConfig;
```

----------------------------------------

TITLE: EAS Build Remote Execution Steps
DESCRIPTION: Outlines the sequence of operations executed by the EAS Build service once a build request is received. This covers container setup, project extraction, dependency installation, pre/post build scripts, caching, and artifact uploading.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build-reference/android-builds.mdx#_snippet_1

LANGUAGE: shell
CODE:
```
1. Create a new Docker container.
2. Download and unpack the project tarball.
3. Create .npmrc if NPM_TOKEN is set.
4. Run eas-build-pre-install script from package.json.
5. Run npm install or yarn install.
6. Run npx expo-doctor.
7. For managed projects: Run npx expo prebuild.
8. Restore build cache.
9. Run eas-build-post-install script from package.json.
10. Restore keystore.
11. Inject signing configuration into build.gradle.
12. Run ./gradlew COMMAND (defaults to :app:bundleRelease).
13. Deprecated: Run eas-build-pre-upload-artifacts script.
14. Store build cache.
15. Upload application archive to AWS S3.
16. Run eas-build-on-success, eas-build-on-error, or eas-build-on-complete scripts based on build status.
17. Upload build artifacts archive if buildArtifactPaths is specified.
```

----------------------------------------

TITLE: Configure Expo Go Development Environment
DESCRIPTION: Steps to set up your local machine for Expo Go development. This includes installing necessary tools like direnv and Homebrew, cloning the repository, and installing project dependencies using Yarn.

SOURCE: https://github.com/expo/expo/blob/main/apps/expo-go/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
brew bundle
yarn
yarn setup:native
```

LANGUAGE: bash
CODE:
```
cd packages/expo
yarn build
```

----------------------------------------

TITLE: App.json Update Channel Configuration
DESCRIPTION: Configures update channels using the 'updates.requestHeaders' property in app.json for projects not using EAS Build, particularly when using Continuous Native Generation (CNG). This setting is applied when running 'npx expo prebuild'.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/getting-started.mdx#_snippet_9

LANGUAGE: json
CODE:
```
{
  "expo": {
    /* @hide ... */ /* @end */
    "updates": {
      /* @hide ... */ /* @end */
      "requestHeaders": {
        "expo-channel-name": "your-channel-name"
      }
      /* @hide ... */ /* @end */
    }
    /* @hide ... */ /* @end */
  }
}
```

----------------------------------------

TITLE: Configure Project for EAS Update
DESCRIPTION: Initializes EAS Update for a project by modifying app.json and native project files. It adds necessary runtime version and update URL configurations, ensuring the app can fetch updates from Expo's servers.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/getting-started.mdx#_snippet_5

LANGUAGE: shell
CODE:
```
# Initialize your project with EAS Update
$ eas update:configure
```

----------------------------------------

TITLE: Chain Plugins Using withPlugins Helper
DESCRIPTION: This example shows a more readable way to chain config plugins using the `withPlugins` helper function from `expo/config-plugins`. It allows for cleaner syntax when dealing with multiple plugins or complex configurations, including passing inputs or just the plugin function itself.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/config-plugins/plugins.mdx#_snippet_15

LANGUAGE: javascript
CODE:
```
import { withPlugins } from 'expo/config-plugins';

// Create a base config object
const baseConfig = {
  name: 'my app',
  /* @hide ... rest of the config */ /* @end */
};

// ❌ Hard to read
// withDelta(withFoo(withBar(config, 'input 1'), 'input 2'), 'input 3');

// ✅ Easy to read
// withPlugins(config, [
//   [withFoo, 'input 1'],
//   [withBar, 'input 2'],
//   // When no input is required, you can just pass the method
//   withDelta,
// ]);

// Export the base config with plugins applied
module.exports = ({ config }: { config: ExpoConfig }) => {
  return withPlugins(baseConfig, plugins);
};

```

----------------------------------------

TITLE: ExpoRadialChartView Example App
DESCRIPTION: Demonstrates how to use the `ExpoRadialChartView` component in a React Native application. It shows how to import the component and pass data for rendering a pie chart with specified colors and percentages. Assumes the module is installed or available via relative import.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/third-party-library.mdx#_snippet_14

LANGUAGE: tsx
CODE:
```
import {
  ExpoRadialChartView
} from 'expo-radial-chart';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <ExpoRadialChartView
      style={styles.container}
      data={[
        {
          color: '#ff0000',
          percentage: 0.5,
        },
        {
          color: '#00ff00',
          percentage: 0.2,
        },
        {
          color: '#0000ff',
          percentage: 0.3,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

----------------------------------------

TITLE: Import UI Components for Debugging
DESCRIPTION: Imports essential UI components used within the EAS Update debugging guide. These components, like ContentSpotlight, Terminal, and VideoBoxLink, are likely used to display information, code examples, and video content related to debugging.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas-update/debug.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
import { ContentSpotlight } from '~/ui/components/ContentSpotlight';
import { Terminal } from '~/ui/components/Snippet';
import { VideoBoxLink } from '~/ui/components/VideoBoxLink';
```

----------------------------------------

TITLE: Initialize New Package with Yarn
DESCRIPTION: Creates a new package directory within the monorepo and initializes it using 'yarn init'. This command sets up the basic package structure and prompts for metadata.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/monorepos.mdx#_snippet_6

LANGUAGE: shell
CODE:
```
# Create our new package directory
$ mkdir -p packages/cool-package
$ cd packages/cool-package

# And create the new package
$ yarn init
```

----------------------------------------

TITLE: Using npm vs Yarn for Global Packages
DESCRIPTION: To avoid inconsistency when referencing to install global packages with a package manager like npm or Yarn, use npm. This ensures a consistent approach across different environments.

SOURCE: https://github.com/expo/expo/blob/main/guides/Expo Documentation Writing Style Guide.md#_snippet_5

LANGUAGE: shell
CODE:
```
npm install expo-cli
```

LANGUAGE: shell
CODE:
```
yarn install expo-cli
```

----------------------------------------

TITLE: Initialize Git Repository and Add Remote
DESCRIPTION: Initializes a new Git repository in your project's root directory and adds a remote origin pointing to your GitHub repository. This step is crucial for version control and pushing your code.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/publishing-websites.mdx#_snippet_14

LANGUAGE: shell
CODE:
```
$ git init

$ git remote add origin https://github.com/username/expo-gh-pages.git
```

----------------------------------------

TITLE: Initialize Expo App with create-expo-app
DESCRIPTION: Initializes a new Expo project named StickerSmash using the `create-expo-app` command-line tool. It then navigates into the newly created project directory. This command sets up a React Native project with Expo and Expo Router.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/create-your-first-app.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
# Create a project named StickerSmash
$ npx create-expo-app@latest StickerSmash

# Navigate to the project directory
$ cd StickerSmash
```

----------------------------------------

TITLE: Configure `install.exclude` in package.json
DESCRIPTION: Specify libraries to exclude from Expo's automatic version checks performed by commands like `npx expo start` or `npx expo install`. This prevents warnings for libraries whose versions might differ from Expo's recommendations.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v52.0.0/config/package-json.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "expo": {
    "install": {
      "exclude": ["expo-updates", "expo-splash-screen"]
    }
  }
}
```

----------------------------------------

TITLE: Create Expo App CLI Commands
DESCRIPTION: Commands to bootstrap new React Native applications using the create-expo-app CLI tool. This tool installs the 'expo' package and sets up a new project.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/more/glossary-of-terms.mdx#_snippet_5

LANGUAGE: APIDOC
CODE:
```
create-expo-app:
  Usage:
    npx create-expo-app <ProjectName>
    yarn create expo-app <ProjectName>
    npm create expo-app <ProjectName>

  Description:
    A standalone command-line tool (CLI) for bootstrapping new React Native apps with the `expo` package installed. It can also be used to bootstrap from an example project in `expo/examples`.

  Examples:
    npx create-expo-app my-new-app
    yarn create expo-app my-new-app
    npm create expo-app my-new-app
```

----------------------------------------

TITLE: Get Current Location Example
DESCRIPTION: A React Native component that requests location permissions and fetches the user's current location. It handles permission denial and displays the location data or an error message. Designed to run on physical devices, with a check for Android Emulators.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v51.0.0/sdk/location.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
import {
  useState,
  useEffect
} from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet
} from 'react-native';
/* @hide */
import * as Device from 'expo-device';
/* @end */
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      /* @hide */
      if (Platform.OS === 'android' && !Device.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      /* @end */
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
```

----------------------------------------

TITLE: Navigate to Next Chapter Component
DESCRIPTION: Example of using a custom BoxLink component to navigate to the next section of the tutorial. It displays a title, description, an icon, and a link to the next step.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/eas/introduction.mdx#_snippet_2

LANGUAGE: JavaScript
CODE:
```
<BoxLink
  title="Start"
  description="Let's start by configuring a development build."
  Icon={BookOpen02Icon}
  href="/tutorial/eas/configure-development-build/"
/>
```

----------------------------------------

TITLE: Install iOS pods for expo-updates
DESCRIPTION: After installing the expo-updates package, this command installs the necessary native dependencies for iOS by running pod install. This step is crucial for the library to function correctly on iOS.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/bare/installing-updates.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
$ npx pod-install
```

----------------------------------------

TITLE: Configure `install.exclude` in package.json
DESCRIPTION: The `install.exclude` property in package.json allows you to specify libraries that should be excluded from version checks performed by commands like `npx expo start`, `npx expo-doctor`, and `npx expo install`. This prevents warnings for libraries whose versions differ from Expo's recommendations.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v53.0.0/config/package-json.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "expo": {
    "install": {
      "exclude": ["expo-updates", "expo-splash-screen"]
    }
  }
}
```

----------------------------------------

TITLE: Configure Example App to Use Plugin
DESCRIPTION: Specifies how to include a local Expo plugin in an app's configuration. The plugin path is relative to the project root.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/modules/config-plugin-and-native-module-tutorial.mdx#_snippet_13

LANGUAGE: json
CODE:
```
{
  "expo": {
    ...
    "plugins": ["../app.plugin.js"]
  }
}
```

----------------------------------------

TITLE: Configure `install.exclude` in package.json
DESCRIPTION: The `install.exclude` property in package.json allows you to specify libraries that should be excluded from version checks performed by commands like `npx expo start`, `npx expo-doctor`, and `npx expo install`. This prevents warnings for libraries whose versions differ from Expo's recommendations.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/config/package-json.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "expo": {
    "install": {
      "exclude": ["expo-updates", "expo-splash-screen"]
    }
  }
}
```

----------------------------------------

TITLE: Run reset-project script
DESCRIPTION: Executes the `reset-project` script within an Expo project. This script removes boilerplate files from the `app` directory and moves them to `app-example`, preparing the project for custom development.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/create-your-first-app.mdx#_snippet_1

LANGUAGE: shell
CODE:
```
$ npm run reset-project
```

----------------------------------------

TITLE: Create Expo App Basic Usage
DESCRIPTION: Demonstrates how to initialize a new Expo project using create-expo with different package managers (bun, npm, pnpm, yarn) and how to view help information.

SOURCE: https://github.com/expo/expo/blob/main/packages/create-expo/README.md#_snippet_0

LANGUAGE: sh
CODE:
```
# Usage for bun, npm, pnpm, and yarn
npx create-expo
bun create expo
pnpm create expo
yarn create expo

# Output help information with all available options
npx create-expo --help
```

----------------------------------------

TITLE: Install Specific Expo Module
DESCRIPTION: Installs a specific Expo module, such as `expo-device`, into your project using the `expo install` command. This command requires `expo-cli` to be installed globally.

SOURCE: https://github.com/expo/expo/blob/main/packages/install-expo-modules/README.md#_snippet_1

LANGUAGE: sh
CODE:
```
expo install expo-device
# the expo command is from expo-cli. if you don't have this, run `npm -g install expo-cli` to install.
```

----------------------------------------

TITLE: Expo Orbit Windows Installation Notes
DESCRIPTION: Details the installation process and current limitations for Expo Orbit on Windows. It notes that the Windows version is in preview and has specific architecture compatibility.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/build/orbit.mdx#_snippet_2

LANGUAGE: markdown
CODE:
```
> **Note**: Orbit for Windows is in preview and is only compatible with x64 and x86 machines. Compatibility for other architectures will be added in the future.

You can download Orbit for Windows directly from the [GitHub releases](https://github.com/expo-orbit/releases).
```

----------------------------------------

TITLE: Install EAS CLI
DESCRIPTION: Installs the Expo Application Services (EAS) Command Line Interface globally using npm. This tool is essential for building and managing Expo applications.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/iosSimulatedDevelopmentBuild.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npm install -g eas-cli
```

----------------------------------------

TITLE: Install iOS Dependencies with Pod Install
DESCRIPTION: After installing the npm package for expo-camera, this command is used to install the necessary native iOS dependencies via CocoaPods.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-camera/README.md#_snippet_4

LANGUAGE: bash
CODE:
```
npx pod-install
```

----------------------------------------

TITLE: Define Job Dependencies with `needs` in Expo (YAML)
DESCRIPTION: Specifies job dependencies, ensuring that a job only starts execution after all the jobs listed in its `needs` array have completed successfully. This allows for defining sequential or parallel execution flows within a workflow. The example shows the 'build' job depending on the 'test' job.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas/workflows/syntax.mdx#_snippet_14

LANGUAGE: yaml
CODE:
```
jobs:
  test:
    steps:
      - uses: eas/checkout
      - uses: eas/use_npm_token
      - uses: eas/install_node_modules
      - name: tsc
        run: yarn tsc
  build:
    needs: [test] # This job will only run if the 'test' job succeeds
    type: build
    params:
      platform: ios
```

----------------------------------------

TITLE: Importing Expo Styleguide Icons and UI Components
DESCRIPTION: Demonstrates how to import specific icons and custom UI components from the Expo styleguide and project UI library. These imports are necessary for rendering visual elements and navigation links within the application.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/billing/plans.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
import { CreditCard02Icon } from '@expo/styleguide-icons/outline/CreditCard02Icon';

import { BoxLink } from '~/ui/components/BoxLink';
import { ContentSpotlight } from '~/ui/components/ContentSpotlight';
```

----------------------------------------

TITLE: Create development builds with EAS Workflows
DESCRIPTION: This example demonstrates how to set up EAS Workflows to automatically create development builds. It helps in generating parallel builds for each platform, streamlining the development process.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/eas/workflows/examples/introduction.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
<BoxLink
  title="Create development builds"
  description="Learn how to kick off development builds in parallel for each platform."
  href="/eas/workflows/examples/create-development-builds"
  Icon={BookOpen02Icon}
/>
```

----------------------------------------

TITLE: Jest Configuration for Expo Module Scripts
DESCRIPTION: Configure Jest using the `expo-module-scripts` preset in `package.json` to enable TypeScript support, custom tsconfig, and Babel integration for accurate code transformation during tests. This setup ensures tests run efficiently and reflect the project's build process.

SOURCE: https://github.com/expo/expo/blob/main/guides/Expo Module Infrastructure.md#_snippet_5

LANGUAGE: json
CODE:
```
{
  "jest": {
    "preset": "expo-module-scripts"
  }
}
```

----------------------------------------

TITLE: Initial Expo Project Setup
DESCRIPTION: Commands to create a new Expo project using the 'tabs' template and navigate into the newly created project directory. This is the first step before configuring service workers.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/router/migrate/from-expo-webpack.mdx#_snippet_10

LANGUAGE: shell
CODE:
```
$ npm create expo -t tabs my-app
$ cd my-app

```

----------------------------------------

TITLE: Install iOS Dependencies with Pod Install
DESCRIPTION: Executes the pod install command within the ios directory to install all native dependencies specified in the Podfile. This step is essential after modifying the Podfile or adding new native modules to ensure the project is set up correctly for building.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/brownfield/installing-expo-modules.mdx#_snippet_9

LANGUAGE: Shell
CODE:
```
$ cd ios && pod install
```

----------------------------------------

TITLE: Start Local Dev Server with Atlas
DESCRIPTION: Starts the local Expo development server with the Atlas feature enabled. This allows for real-time analysis of the JavaScript bundle as you develop your application.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/analyzing-bundles.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
EXPO_ATLAS=true npx expo start
```

----------------------------------------

TITLE: Import Expo Styleguide Icons and UI Components
DESCRIPTION: Demonstrates importing icons and UI components from Expo's styleguide and UI libraries. These imports are necessary for using pre-built visual elements and functionalities within an Expo project.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/eas/introduction.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
import { BookOpen02Icon } from '@expo/styleguide-icons/outline/BookOpen02Icon';

import { BoxLink } from '~/ui/components/BoxLink';
```

----------------------------------------

TITLE: Run Expo App on Android Emulator
DESCRIPTION: Executes a development build of your Expo application on an Android emulator. This command starts the development server and prepares the app for debugging.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/androidSimulatedDevelopmentBuildLocal.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
$ npx expo run:android
```

----------------------------------------

TITLE: Expo Bundle Splitting with Async Imports
DESCRIPTION: Illustrates how Expo CLI automatically splits web bundles into multiple chunks using async imports in production. This example shows a basic setup where a module (`math.js`) is imported asynchronously, demonstrating the mechanism for creating separate chunks and the necessity of `@expo/metro-runtime` for loading these chunks.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v53.0.0/config/metro.mdx#_snippet_17

LANGUAGE: js
CODE:
```
export function add(a, b) {
  return a + b;
}
```

LANGUAGE: js
CODE:
```
import '@expo/metro-runtime';

// This will be split into a separate chunk.
import('./math').then(math => {
  console.log(math.add(1, 2));
});
```

----------------------------------------

TITLE: Expo Bundle Splitting with Async Imports
DESCRIPTION: Illustrates how Expo CLI automatically splits web bundles into multiple chunks using async imports in production. This example shows a basic setup where a module (`math.js`) is imported asynchronously, demonstrating the mechanism for creating separate chunks and the necessity of `@expo/metro-runtime` for loading these chunks.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/config/metro.mdx#_snippet_17

LANGUAGE: js
CODE:
```
export function add(a, b) {
  return a + b;
}
```

LANGUAGE: js
CODE:
```
import '@expo/metro-runtime';

// This will be split into a separate chunk.
import('./math').then(math => {
  console.log(math.add(1, 2));
});
```

----------------------------------------

TITLE: Install Native Code
DESCRIPTION: After installing the package, this command installs the necessary native code for iOS. It's crucial for projects that have an 'ios' directory and use Expo's native modules.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/bare/install-dev-builds-in-bare.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
$ npx pod-install
```

----------------------------------------

TITLE: Run app on iOS Simulator
DESCRIPTION: Launches your Expo application on an iOS simulator. This command starts a development server and builds the app for the simulator, allowing for rapid development and testing.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/iosSimulatedDevelopmentBuildLocal.mdx#_snippet_1

LANGUAGE: shell
CODE:
```
npx expo run:ios
```

----------------------------------------

TITLE: Expo Push Notifications: Setup and Scheduling
DESCRIPTION: This example demonstrates how to set up Expo Notifications for push notifications. It covers registering for notifications, obtaining an Expo push token, handling notification permissions, setting notification channels for Android, and listening for received notifications and user responses. It also includes a function to schedule a push notification.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/notifications.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [channels, setChannels] = useState<Notifications.NotificationChannel[]>([]);
  const [notification, setNotification] = useState<Notifications.Notification | undefined>(
    undefined
  );

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => token && setExpoPushToken(token));

    if (Platform.OS === 'android') {
      Notifications.getNotificationChannelsAsync().then(value => setChannels(value ?? []));
    }
    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      notificationListener.remove();
      responseListener.remove();
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text>Your expo push token: {expoPushToken}</Text>
      <Text>{`Channels: ${JSON.stringify(
        channels.map(c => c.id),
        null,
        2
      )}`}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here', test: { test1: 'more data' } },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 2,
    },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('myNotificationChannel', {
      name: 'A channel is needed for the permissions prompt to appear',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    // EAS projectId is used here.
    try {
      const projectId = 
        Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
      if (!projectId) {
        throw new Error('Project ID not found');
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
      console.log(token);
    } catch (e) {
      token = `${e}`;
    }
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}

```

----------------------------------------

TITLE: Verify Native Installation
DESCRIPTION: Steps to verify that the native installation of the Expo bare sandbox project is successful. This involves navigating to the project directory and running the app on a native platform.

SOURCE: https://github.com/expo/expo/blob/main/CONTRIBUTING.md#_snippet_7

LANGUAGE: bash
CODE:
```
cd apps/bare-expo
yarn ios
# or
yarn android
# For Linux users:
export TERMINAL="konsole"
```

----------------------------------------

TITLE: Install react-native-reanimated
DESCRIPTION: Command to install the react-native-reanimated library using npx expo install. This is necessary for projects not using the default Expo template.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/user-interface/animation.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx expo install react-native-reanimated
```

----------------------------------------

TITLE: Install Expo SDK
DESCRIPTION: Installs the latest Expo SDK or a specific version. Use 'npx expo install' for npm or 'yarn expo install' for Yarn. This command ensures your project's Expo package is updated to the desired version.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/workflow/upgrading-expo-sdk-walkthrough.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install expo@latest
# or
npx expo install expo@^53.0.0
```

LANGUAGE: bash
CODE:
```
yarn expo install expo@latest
# or
yarn expo install expo@^53.0.0
```

----------------------------------------

TITLE: Run EAS Build for Android Development
DESCRIPTION: This command initiates an Android build using EAS Build with the specified development profile. The `--platform android` flag targets Android, and `--profile development` selects the build configuration. The CLI will then prompt for necessary details like the Android application ID and whether to generate a new Android Keystore.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/eas/android-development-build.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
$ eas build --platform android --profile development
```

----------------------------------------

TITLE: Install CocoaPods for iOS
DESCRIPTION: Installs project dependencies using CocoaPods, which is necessary after adding Expo modules to an iOS project. Alternatively, `npx expo run:ios` can also handle pod installation.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/bare/installing-expo-modules.mdx#_snippet_2

LANGUAGE: shell
CODE:
```
# Install pods
npx pod-install

# Alternatively, the run command will install them for you
npx expo run:ios
```

----------------------------------------

TITLE: Start Expo Development Server
DESCRIPTION: Command to start the Expo development server, which is required for building and testing your Expo Router application, including static rendering features.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/router/reference/static-rendering.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
$ npx expo start
```

----------------------------------------

TITLE: FlashList Installation
DESCRIPTION: Installs the FlashList package and provides a link to detailed installation instructions. This component is typically used within a React Native project.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v52.0.0/sdk/flash-list.mdx#_snippet_0

LANGUAGE: react
CODE:
```
<APIInstallSection href="https://shopify.github.io/flash-list/docs/" />
```

----------------------------------------

TITLE: Access Package README
DESCRIPTION: This command helps you quickly access the README file for a given package, which often contains crucial setup and usage instructions.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/workflow/using-libraries.mdx#_snippet_4

LANGUAGE: shell
CODE:
```
npx npm-home @react-navigation/native
```

----------------------------------------

TITLE: Install expo-sqlite
DESCRIPTION: Installs the expo-sqlite package for managed Expo projects. This command ensures the correct version is installed for your Expo SDK.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-sqlite/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install expo-sqlite
```

----------------------------------------

TITLE: Example of a generated patch file name
DESCRIPTION: Shows the naming convention for generated patch files, including the platform and a checksum.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/config-plugins/patch-project.mdx#_snippet_6

LANGUAGE: text
CODE:
```
ios+eee880ad7b07965271d2323f7057a2b4.patch
```

----------------------------------------

TITLE: Run and Export Web Projects with Expo CLI
DESCRIPTION: Instructions for starting and deploying web versions of Expo projects. This covers running development servers and exporting static builds for production.

SOURCE: https://github.com/expo/expo/blob/main/apps/router-e2e/README.md#_snippet_3

LANGUAGE: shell
CODE:
```
yarn start:01-rsc
```

LANGUAGE: shell
CODE:
```
yarn export:web-workers
```

LANGUAGE: shell
CODE:
```
npx expo serve
```

----------------------------------------

TITLE: Install expo-linking
DESCRIPTION: Installs the expo-linking package in an Expo project using the Expo CLI. This command ensures the correct version compatible with your Expo SDK is installed.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-linking/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install expo-linking
```

----------------------------------------

TITLE: Install expo-image-loader
DESCRIPTION: Installs the expo-image-loader package using npm. This command is used in bare React Native projects after ensuring the `expo` package is installed and configured.

SOURCE: https://github.com/expo/expo/blob/main/packages/expo-image-loader/README.md#_snippet_0

LANGUAGE: shell
CODE:
```
npm install expo-image-loader
```

----------------------------------------

TITLE: Install ESLint Config Universe
DESCRIPTION: Installs the `eslint-config-universe` package as a development dependency using Yarn. It also requires installing `eslint` and `prettier` as dev dependencies.

SOURCE: https://github.com/expo/expo/blob/main/packages/eslint-config-universe/README.md#_snippet_0

LANGUAGE: sh
CODE:
```
yarn add --dev eslint-config-universe
yarn add --dev eslint@8 prettier
```

----------------------------------------

TITLE: Install expo-dev-client
DESCRIPTION: Installs the Expo Dev Client package into your project, which is essential for running development builds on your Android device.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/androidPhysicalDevelopmentBuildLocal.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
npx expo install expo-dev-client
```

----------------------------------------

TITLE: Install @expo/fingerprint CLI
DESCRIPTION: Installs the @expo/fingerprint package using npx, which is included with expo and expo-updates by default. This command is used for standalone installation if needed.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/versions/v53.0.0/sdk/fingerprint.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx expo install @expo/fingerprint
```

----------------------------------------

TITLE: Run your app on Android
DESCRIPTION: Builds and runs your Expo application on the connected Android device, starting a development server.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/androidPhysicalDevelopmentBuildLocal.mdx#_snippet_2

LANGUAGE: shell
CODE:
```
npx expo run:android
```

----------------------------------------

TITLE: E2E Testing Setup and Execution
DESCRIPTION: Guidelines for writing and running end-to-end tests for Expo. It details where to place test files, the testing framework used (Jasmine), and how to execute tests locally for Android and iOS.

SOURCE: https://github.com/expo/expo/blob/main/CONTRIBUTING.md#_snippet_15

LANGUAGE: javascript
CODE:
```
Place E2E tests in `apps/test-suite/tests`.
Add new test files to `apps/test-suite/TestUtils.js`.
For bare-expo testing, add to `apps/bare-expo/e2e/TestSuite-test.native.js`.
```

LANGUAGE: bash
CODE:
```
cd bare-expo
yarn test:android
yarn test:ios
```

----------------------------------------

TITLE: Create Android Development Build
DESCRIPTION: Initiates a development build for the Android platform using EAS. This command uploads your project to EAS servers for compilation.

SOURCE: https://github.com/expo/expo/blob/main/docs/scenes/get-started/set-up-your-environment/instructions/androidSimulatedDevelopmentBuild.mdx#_snippet_3

LANGUAGE: shell
CODE:
```
$ eas build --platform android --profile development
```

----------------------------------------

TITLE: Install Expo Package
DESCRIPTION: Installs the Expo package using npm. Ensure the installed version of 'expo' is compatible with your project's 'react-native' version.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/guides/adopting-prebuild.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
$ npm install expo
```

----------------------------------------

TITLE: Import Expo Development Components
DESCRIPTION: Imports necessary components for setting up the Expo development environment, including forms for platform selection and development mode.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/get-started/set-up-your-environment.mdx#_snippet_0

LANGUAGE: typescript
CODE:
```
import { DevelopmentEnvironmentInstructions } from '~/scenes/get-started/set-up-your-environment/DevelopmentEnvironmentInstructions';
import { DevelopmentModeForm } from '~/scenes/get-started/set-up-your-environment/DevelopmentModeForm';
import { PlatformAndDeviceForm } from '~/scenes/get-started/set-up-your-environment/PlatformAndDeviceForm';
```

----------------------------------------

TITLE: Link to Android Build Process Guide
DESCRIPTION: Provides a link to the documentation detailing the Android build process on EAS Build. This BoxLink component includes a title, description, target URL, and an icon.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/develop/development-builds/next-steps.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="Android build process"
  description="Learn how an Android project is built on EAS Build."
  href="/build-reference/android-builds/"
  Icon={BuildIcon}
/>
```

----------------------------------------

TITLE: GitHub Actions with EAS Update Guide Link Component
DESCRIPTION: Renders a BoxLink component to guide users to the GitHub Actions with EAS Update guide.

SOURCE: https://github.com/expo/expo/blob/main/docs/pages/tutorial/eas/next-steps.mdx#_snippet_12

LANGUAGE: jsx
CODE:
```
<BoxLink
  title="GitHub Actions with EAS Update"
  Icon={BookOpen02Icon}
  description="See Use GitHub Actions guide on how to automate publishing updates with EAS Update."
  href="/eas-update/github-actions/"
/>
```