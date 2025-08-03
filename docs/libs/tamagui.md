========================
CODE SNIPPETS
========================
TITLE: Basic Button Example
DESCRIPTION: A simple example demonstrating how to render a `Button` component from Tamagui with a specified theme. This showcases basic UI component usage.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/intro/installation.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import { Button } from 'tamagui'

export default function Demo() {
  return <Button theme="blue">Hello world</Button>
}
```

----------------------------------------

TITLE: Install Tamagui Dependencies
DESCRIPTION: Installs the necessary Tamagui packages, including the core library, configuration, and the Metro plugin, required for web support.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/metro.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
yarn add tamagui @tamagui/config @tamagui/metro-plugin
```

----------------------------------------

TITLE: Start Supabase CLI
DESCRIPTION: This command navigates to the site application directory and starts the Supabase CLI services locally. It is a crucial step for development environments that rely on Supabase for backend services.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tests/next-site/README.md#_snippet_0

LANGUAGE: shell
CODE:
```
cd apps/site && npx supabase start
```

----------------------------------------

TITLE: Install Tamagui with Config Preset
DESCRIPTION: Installs Tamagui core and a preset configuration package using Yarn. This approach simplifies setup by providing a ready-to-use configuration.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/intro/installation.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
yarn add @tamagui/core @tamagui/config
```

----------------------------------------

TITLE: Install Portal Package
DESCRIPTION: If you are not using the full Tamagui setup but rather `@tamagui/core`, you need to install the `@tamagui/portal` package separately. This is required for modal-based tooltips.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tooltip/1.105.0.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @tamagui/portal
```

----------------------------------------

TITLE: Run Tamagui App (starter-free)
DESCRIPTION: Commands to navigate into your created Tamagui project, install dependencies, and start the local development server for web and native platforms.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/create-tamagui-app.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
cd myapp
yarn
yarn web
yarn native
```

----------------------------------------

TITLE: Basic TamaguiProvider Setup
DESCRIPTION: Demonstrates setting up `TamaguiProvider` with a custom configuration and rendering a basic `View` component. This requires `@tamagui/core` and a `tamagui.config.ts` file for configuration.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/intro/installation.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { TamaguiProvider, View } from '@tamagui/core'
import config from './tamagui.config' // your configuration

export default function App() {
  return (
  <TamaguiProvider config={config}>
    <View width={200} height={200} backgroundColor="$background" />
  </TamaguiProvider>
  )
}
```

----------------------------------------

TITLE: Install Tamagui Tooltip
DESCRIPTION: Instructions for installing the Tamagui Tooltip package using npm. It also mentions the dependency on `@tamagui/portal` if not using the full `tamagui` setup.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tooltip/1.122.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/tooltip
```

LANGUAGE: bash
CODE:
```
npm install @tamagui/portal
```

----------------------------------------

TITLE: Tamagui Theme Configuration Example
DESCRIPTION: An example demonstrating the creation of Tamagui themes using `createThemes`. It includes defining color palettes (dark and light), shadows, and organizing them into base, accent, and children themes for comprehensive styling control.

SOURCE: https://github.com/tamagui/tamagui/blob/main/library/config-v4.mdx#_snippet_3

LANGUAGE: typescript
CODE:
```
const darkPalette = [
  '#050505',
  '#151515',
  '#191919',
  '#232323',
  '#282828',
  '#323232',
  '#424242',
  '#494949',
  '#545454',
  '#626262',
  '#a5a5a5',
  '#fff',
]

const lightPalette = [
  '#fff',
  '#f2f2f2',
  'hsl(0, 0%, 93%)',
  'hsl(0, 0%, 91%)',
  'hsl(0, 0%, 88%)',
  'hsl(0, 0%, 85%)',
  'hsl(0, 0%, 82%)',
  'hsl(0, 0%, 76%)',
  'hsl(0, 0%, 56%)',
  'hsl(0, 0%, 50%)',
  'hsl(0, 0%, 42%)',
  'hsl(0, 0%, 9%)',
]

const lightShadows = {
  shadow1: 'rgba(0,0,0,0.04)',
  shadow2: 'rgba(0,0,0,0.08)',
  shadow3: 'rgba(0,0,0,0.16)',
  shadow4: 'rgba(0,0,0,0.24)',
  shadow5: 'rgba(0,0,0,0.32)',
  shadow6: 'rgba(0,0,0,0.4)',
}

const darkShadows = {
  shadow1: 'rgba(0,0,0,0.2)',
  shadow2: 'rgba(0,0,0,0.3)',
  shadow3: 'rgba(0,0,0,0.4)',
  shadow4: 'rgba(0,0,0,0.5)',
  shadow5: 'rgba(0,0,0,0.6)',
  shadow6: 'rgba(0,0,0,0.7)',
}

const blackColors = {
  black1: darkPalette[0],
  black2: darkPalette[1],
  black3: darkPalette[2],
  black4: darkPalette[3],
  black5: darkPalette[4],
  black6: darkPalette[5],
  black7: darkPalette[6],
  black8: darkPalette[7],
  black9: darkPalette[8],
  black10: darkPalette[9],
  black11: darkPalette[10],
  black12: darkPalette[11],
}

const whiteColors = {
  white1: lightPalette[0],
  white2: lightPalette[1],
  white3: lightPalette[2],
  white4: lightPalette[3],
  white5: lightPalette[4],
  white6: lightPalette[5],
  white7: lightPalette[6],
  white8: lightPalette[7],
  white9: lightPalette[8],
  white10: lightPalette[9],
  white11: lightPalette[10],
  white12: lightPalette[11],
}

const generatedThemes = createThemes({
  componentThemes: defaultComponentThemes,

  base: {
    palette: {
      dark: darkPalette,
      light: lightPalette,
    },

    extra: {
      light: {
        ...Colors.blue,
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...lightShadows,
        ...blackColors,
        ...whiteColors,
        shadowColor: lightShadows.shadow1,
      },
      dark: {
        ...Colors.blueDark,
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...darkShadows,
        ...blackColors,
        ...whiteColors,
        shadowColor: darkShadows.shadow1,
      },
    },
  },

  accent: {
    palette: {
      dark: lightPalette,
      light: darkPalette,
    },
  },

  childrenThemes: {
    black: {
      palette: {
        dark: Object.values(blackColors),
        light: Object.values(blackColors),
      },
    },
    white: {
      palette: {
        dark: Object.values(whiteColors),
        light: Object.values(whiteColors),
      },
    },

    blue: {
      palette: {
        dark: Object.values(Colors.blueDark),
        light: Object.values(Colors.blue),
      },
    },
    red: {
      palette: {
        dark: Object.values(Colors.redDark),
        light: Object.values(Colors.red),
      },
    },
    yellow: {
      palette: {
        dark: Object.values(Colors.yellowDark),
        light: Object.values(Colors.yellow),
      },
    },
    green: {
      palette: {
        dark: Object.values(Colors.greenDark),
        light: Object.values(Colors.green),
      },
    },
  },
})
```

----------------------------------------

TITLE: Start Development Server
DESCRIPTION: Initiates the Vite development server for local testing and rapid iteration. This command enables hot module replacement and provides a development environment.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/starters/remix/README.md#_snippet_0

LANGUAGE: sh
CODE:
```
npm run dev

```

----------------------------------------

TITLE: Tamagui Configuration Example
DESCRIPTION: A basic example of how to create a Tamagui core configuration, potentially for custom types or specific project setups. This snippet is part of the broader v3/v5 planning.

SOURCE: https://github.com/tamagui/tamagui/blob/main/next.md#_snippet_4

LANGUAGE: tsx
CODE:
```
createCore<CustomTypes>({
  // ... configuration options here
});

// Placeholder for CustomTypes definition
type CustomTypes = {
  // Define custom types for themes, colors, etc.
};

// Example of potential configuration:
// createCore<{
//   colors: {
//     primary: string;
//     secondary: string;
//   }
// }>({
//   themes: {
//     light: {
//       colors: {
//         primary: '#0070f3',
//         secondary: '#1a1a1a',
//       }
//     }
//   }
// });
```

----------------------------------------

TITLE: Install Webpack and Webpack CLI (Bash)
DESCRIPTION: Installs the core Webpack build tool and its command-line interface as development dependencies. These are essential for bundling JavaScript and other assets for web applications.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/webpack.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
yarn add -D webpack webpack-cli
```

----------------------------------------

TITLE: Install Webpack Dev Server (Bash)
DESCRIPTION: Installs the webpack-dev-server package, which provides a development server with live reloading capabilities. This is essential for a smooth local development workflow.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/webpack.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
yarn add -D webpack-dev-server
```

----------------------------------------

TITLE: Run Webpack Server (Bash)
DESCRIPTION: Starts the Webpack development server using the 'serve' command. This command compiles the project and serves it locally, allowing for rapid testing and development.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/webpack.mdx#_snippet_5

LANGUAGE: bash
CODE:
```
yarn run webpack serve
```

----------------------------------------

TITLE: Native iOS Sheet Setup
DESCRIPTION: Details the installation and setup process for enabling native iOS sheet rendering within Tamagui. This involves installing specific native libraries and calling a setup function.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/sheet/1.116.0.mdx#_snippet_5

LANGUAGE: sh
CODE:
```
yarn add react-native-ios-modal@3.0.0-5 react-native-ios-utilities@next @dominicstop/ts-event-emitter
```

LANGUAGE: tsx
CODE:
```
import { Sheet, setupNativeSheet } from '@tamagui/sheet'
import * as NativeModal from 'react-native-ios-modal'

setupNativeSheet('ios', NativeModal)

// now you can use the `native` prop:

export default (
  <Sheet native>
    {/* ... the rest of your sheet */}
  </Sheet>
)
```

----------------------------------------

TITLE: Install Tamagui Vite Plugin
DESCRIPTION: Commands to create a new Vite project and add the Tamagui Vite plugin. This sets up the necessary build tooling for Tamagui within a Vite environment.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/vite.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm create vite@latest
yarn add @tamagui/vite-plugin
```

----------------------------------------

TITLE: Install @tamagui/next-theme
DESCRIPTION: Installs the necessary package for SSR theme support with Tamagui in a Next.js application.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/next-js.mdx#_snippet_16

LANGUAGE: bash
CODE:
```
yarn add @tamagui/next-theme
```

----------------------------------------

TITLE: Tamagui Configuration Example
DESCRIPTION: Demonstrates a complete tamagui.config.ts file, showcasing the setup of fonts, tokens, themes, media queries, and shorthands using Tamagui's configuration API. It highlights the use of createFont, createTokens, and createTamagui functions.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/configuration.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import { createFont, createTamagui, createTokens, isWeb } from 'tamagui'

const systemFont = createFont({
  family: isWeb ? 'Helvetica, Arial, sans-serif' : 'System',
  size: {
    1: 12,
    2: 14,
    3: 15,
  },
  lineHeight: {
    2: 22,
  },
  weight: {
    1: '300',
    3: '600',
  },
  letterSpacing: {
    1: 0,
    2: -1,
  },
  face: {
    300: { normal: 'InterLight', italic: 'InterItalic' },
    600: { normal: 'InterBold' },
  },
})

const size = {
  0: 0,
  1: 5,
  2: 10,
}

export const tokens = createTokens({
  size,
  space: { ...size, '-1': -5, '-2': -10 },
  radius: { 0: 0, 1: 3 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: {
    white: '#fff',
    black: '#000',
  },
})

const config = createTamagui({
  fonts: {
    heading: systemFont,
    body: systemFont,
  },
  tokens,

  themes: {
    light: {
      bg: '#f2f2f2',
      color: tokens.color.black,
    },
    dark: {
      bg: '#111',
      color: tokens.color.white,
    },
  },

  media: {
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },

  shorthands: {
    px: 'paddingHorizontal',
    f: 'flex',
    m: 'margin',
    w: 'width',
  } as const,

  defaultProps: {
    Text: {
      color: 'green',
    },
  },
})

type AppConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
  interface TypeOverride {
    groupNames(): 'card'
  }
}

export default config

```

----------------------------------------

TITLE: Install @tamagui/next-theme Package
DESCRIPTION: This command installs the `@tamagui/next-theme` package, which is recommended for SSR light/dark theme support that respects user system preferences. It assumes your light and dark themes are named 'light' and 'dark' respectively, but this can be overridden.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/next-js.mdx#_snippet_6

LANGUAGE: bash
CODE:
```
yarn add @tamagui/next-theme
```

----------------------------------------

TITLE: Start Stripe Webhook Listener
DESCRIPTION: Starts a local Stripe webhook listener to forward events to the development server. It forwards all configured webhook events from your Stripe dashboard to your local server endpoint.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/doc/stripe-setup.md#_snippet_1

LANGUAGE: bash
CODE:
```
stripe listen --load-from-webhooks-api --forward-to http://localhost:8081/api/stripe/webhook
```

----------------------------------------

TITLE: Install Tamagui Preset Configuration (Bash)
DESCRIPTION: Installs the recommended preset configuration package for Tamagui. This package, `@tamagui/config/v4`, provides a solid starting point with shared shorthands and refined settings, saving development time.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/configuration.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @tamagui/config
```

----------------------------------------

TITLE: PortalProvider Setup
DESCRIPTION: Example of setting up PortalProvider at the root of your React application.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/dialog/1.131.0.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
import { PortalProvider } from '@tamagui/portal'
import YourApp from './components/YourApp'

function App() {
  return (
    <PortalProvider shouldAddRootHost>
      <YourApp />
    </PortalProvider>
  )
}

export default App
```

----------------------------------------

TITLE: Minimal createThemeBuilder Example
DESCRIPTION: Presents a foundational example of `createThemeBuilder`, demonstrating its chainable API for defining palettes, templates, and themes. This setup generates 'light', 'dark', 'light_subtle', and 'dark_subtle' themes, showcasing the builder's structure.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/theme-builder.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { createThemeBuilder } from '@tamagui/theme-builder'

const themesBuilder = createThemeBuilder()
  .addPalettes({
    dark: ['#000', '#111', '#222', '#999', '#ccc', '#eee', '#fff'],
    light: ['#fff', '#eee', '#ccc', '#999', '#222', '#111', '#000'],
  })
  .addTemplates({
    base: {
      background: 0,
      color: -0,
    },
    subtle: {
      background: 1,
      color: -1,
    }
  })
  .addThemes({
    light: {
      template: 'base',
      palette: 'light',
    },
    dark: {
      template: 'base',
      palette: 'dark',
    },
  })
  .addChildThemes({
    subtle: {
      template: 'subtle',
    },
  })

export const themes = themesBuilder.build()
```

----------------------------------------

TITLE: Install @tamagui/text
DESCRIPTION: Command to install the @tamagui/text package independently. This is useful if you are not using the full Tamagui monorepo setup.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/text/1.0.0.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
npm install @tamagui/text
```

----------------------------------------

TITLE: Create Expo TypeScript Project
DESCRIPTION: Command to create a new blank Expo project with TypeScript support. This is a prerequisite for following the Tamagui setup guide for Expo Native.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/expo.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
yarn dlx create-expo-app -t expo-template-blank-typescript
```

----------------------------------------

TITLE: Install Tamagui UI Kit
DESCRIPTION: Installs the full Tamagui UI kit package using Yarn. This package is a superset of `@tamagui/core` and includes additional UI components and features.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/intro/installation.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
yarn add tamagui
```

----------------------------------------

TITLE: Clear Expo Cache for Tamagui Projects (Bash)
DESCRIPTION: Provides the command to start an Expo project with Tamagui while clearing the cache. This is often necessary for the first-time setup or after significant dependency changes to ensure a clean build.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/expo.mdx#_snippet_10

LANGUAGE: bash
CODE:
```
npx expo start -c
```

----------------------------------------

TITLE: Tamagui Sheet Installation
DESCRIPTION: Provides instructions for installing the Tamagui Sheet component. It covers installation via npm and the necessary steps if using it with a PortalProvider for root rendering.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/sheet/1.116.0.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
npm install @tamagui/sheet
```

LANGUAGE: bash
CODE:
```
npm install @tamagui/portal
```

----------------------------------------

TITLE: Install @expo-google-fonts/inter (Bash)
DESCRIPTION: Installs the `@expo-google-fonts/inter` package, which provides access to Google Fonts for Expo projects. This command uses `npx` to execute the installation via `expo install`.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/expo.mdx#_snippet_8

LANGUAGE: bash
CODE:
```
npx expo install @expo-google-fonts/inter
```

----------------------------------------

TITLE: PortalProvider Setup
DESCRIPTION: Example of setting up the `PortalProvider` in the root of your application, which is necessary for the Tooltip component to function correctly, especially when using `modal={true}`.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tooltip/1.122.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { PortalProvider } from '@tamagui/portal'
import YourApp from './components/YourApp'

function App() {
  return (
    <PortalProvider shouldAddRootHost>
      <YourApp />
    </PortalProvider>
  )
}

export default App
```

----------------------------------------

TITLE: Install Tamagui
DESCRIPTION: Command to create a new Tamagui project using the latest version.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/intro/why-a-compiler.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm create tamagui@latest
```

----------------------------------------

TITLE: Install ListItem
DESCRIPTION: Instructions for installing the ListItem component package using npm.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/list-item/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/list-item
```

----------------------------------------

TITLE: Vite Configuration for Tamagui
DESCRIPTION: Example Vite configuration file demonstrating how to integrate the Tamagui Vite plugin. This setup enables the optimizing compiler and specifies Tamagui configuration files.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/version-one.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import { tamaguiPlugin } from '@tamagui/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  clearScreen: false,
  plugins: [
    react(),
    tamaguiPlugin({
      optimize: true, // turns on the optimizing compiler
      components: ['tamagui'],
      config: 'tamagui.config.ts',
    }),
  ],
})
```

----------------------------------------

TITLE: Install Bento Components via CLI
DESCRIPTION: This command installs the Bento suite of components using the command-line interface. It is the primary method for setting up the Bento components.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/packages/bento-get/readme.md#_snippet_0

LANGUAGE: bash
CODE:
```
$ npx bento-get
```

----------------------------------------

TITLE: Install Tamagui Select
DESCRIPTION: Installs the Tamagui Select component using npm.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/select/1.40.0.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @tamagui/select
```

----------------------------------------

TITLE: Build Production Artifacts
DESCRIPTION: Generates optimized production-ready assets for deployment. This command bundles, minifies, and prepares the application for a live environment.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/starters/remix/README.md#_snippet_1

LANGUAGE: sh
CODE:
```
npm run build:production

```

----------------------------------------

TITLE: Install Tamagui Core
DESCRIPTION: Installs the core Tamagui package using Yarn. This is the minimal package required for using Tamagui's styling and theming capabilities.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/intro/installation.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
yarn add @tamagui/core
```

----------------------------------------

TITLE: Install @tamagui/config
DESCRIPTION: Installs the @tamagui/config package, which is essential for setting up Tamagui's v4 configuration and theming system. This command is typically run once at the beginning of a project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/config-v4.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/config
```

----------------------------------------

TITLE: Minimal Webpack Manual Setup (TSX)
DESCRIPTION: Provides a minimal manual setup for Webpack, including defining environment variables for development mode and setting up aliases for react-native-web. It also configures file extensions for better compatibility with React Native Web projects.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/webpack.mdx#_snippet_3

LANGUAGE: javascript
CODE:
```
// some stuff for react-native
config.plugins.push(
  new webpack.DefinePlugin({
    process: {
      env: {
        __DEV__: process.env.NODE_ENV === 'development' ? 'true' : 'false',
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    },
  })
)

config.resolve.alias['react-native$'] = 'react-native-web'

// set up web extensions
compiler.options.resolve.extensions = [
  '.web.tsx',
  '.web.ts',
  '.web.js',
  '.ts',
  '.tsx',
  '.js',
]
```

----------------------------------------

TITLE: Install Tamagui Dialog
DESCRIPTION: Shows how to install the Tamagui Dialog component using npm. If using independently, also install `@tamagui/portal` and add `PortalProvider` to your app root.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/dialog/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/dialog
npm install @tamagui/portal
```

----------------------------------------

TITLE: Install Tamagui Loader (Bash)
DESCRIPTION: Installs the tamagui-loader package, which is required to process Tamagui components and configurations within the Webpack build pipeline. This loader enables features like optimized component generation.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/webpack.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
yarn add -D tamagui-loader
```

----------------------------------------

TITLE: Create Tamagui App
DESCRIPTION: Use this command to bootstrap a new Tamagui project. It initiates the project setup process, allowing you to choose templates and configurations.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/create-tamagui-app.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm create tamagui@latest
```

----------------------------------------

TITLE: TamaguiProvider and NextThemeProvider Setup in _app.tsx
DESCRIPTION: This snippet demonstrates the core setup for Tamagui in a Next.js application. It includes wrapping the application with `TamaguiProvider` and `NextThemeProvider` for theming support. Essential imports and configuration options like `disableInjectCSS` and `defaultTheme` are shown.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/next-js.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import '@tamagui/core/reset.css'

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { useMemo } from 'react'
import { TamaguiProvider, createTamagui } from 'tamagui'

// you usually export this from a tamagui.config.ts file:
import { defaultConfig } from '@tamagui/config/v4'
const tamaguiConfig = createTamagui(defaultConfig)

// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useRootTheme()

  // memo to avoid re-render on dark/light change
  const contents = useMemo(() => {
    return <Component {...pageProps} />
  }, [pageProps])

  return (
    <>
      <Head>
        <title>Your page title</title>
        <meta name="description" content="Your page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextThemeProvider
        // change default theme (system) here:
        // defaultTheme="light"
        onChangeTheme={setTheme as any}
      >
        <TamaguiProvider
          config={tamaguiConfig}
          disableInjectCSS
          disableRootThemeClass
          defaultTheme={theme}
        >
          {contents}
        </TamaguiProvider>
      </NextThemeProvider>
    </>
  )
}
```

----------------------------------------

TITLE: Install Tamagui Elements
DESCRIPTION: Installs the Tamagui elements package using npm.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/html-elements/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/elements
```

----------------------------------------

TITLE: Create Next.js Project
DESCRIPTION: Command to create a new Next.js project using npx. This is the initial step for setting up a Next.js application.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/next-js.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app@latest
```

----------------------------------------

TITLE: Manual Vite Setup for react-native-web Compatibility
DESCRIPTION: A manual configuration snippet for Vite to enhance compatibility with react-native-web. It defines environment variables, sets up aliases for 'react-native', and configures esbuild options for resolving web extensions.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/vite.mdx#_snippet_2

LANGUAGE: javascript
CODE:
```
config.define = {
  __DEV__: `${process.env.NODE_ENV === 'development' ? true : false}`,
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
}

config.resolve.alias['react-native'] = 'react-native-web'

// set up web extensions
config.optimizeDeps.esbuildOptions = {
  ...config.optimizeDeps.esbuildOptions,
  resolveExtensions: [
    '.web.js',
    '.web.jsx',
    '.web.ts',
    '.web.tsx',
    '.mjs',
    '.js',
    '.mts',
    '.ts',
    '.jsx',
    '.tsx',
    '.json',
  ],
  loader: {
    '.js': 'jsx',
  },
}
```

----------------------------------------

TITLE: Install Tamagui Dependencies (Bash)
DESCRIPTION: Installs Tamagui and its configuration package using Yarn. This is the initial step to integrate Tamagui into your One project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/one.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
yarn add tamagui @tamagui/config
```

----------------------------------------

TITLE: Slider Component Example
DESCRIPTION: Shows how to use the Slider component, a draggable element for inputting values within a specified range. This example provides a basic setup.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/version-one.mdx#_snippet_8

LANGUAGE: tsx
CODE:
```
```tsx hero template=Slider

```
```

----------------------------------------

TITLE: Install Tamagui Switch
DESCRIPTION: Install the Tamagui Switch component using npm.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/switch/1.28.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/switch
```

----------------------------------------

TITLE: PortalProvider Setup
DESCRIPTION: Demonstrates setting up `PortalProvider` at the root of your application, which is required when using `@tamagui/dialog` independently.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/dialog/1.0.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { PortalProvider } from '@tamagui/portal'
import YourApp from './components/YourApp'

function App() {
  return (
    <PortalProvider shouldAddRootHost>
      <YourApp />
    </PortalProvider>
  )
}

export default App
```

----------------------------------------

TITLE: Tamagui Build Package.json Configuration
DESCRIPTION: Demonstrates a typical `package.json` setup for a library using `@tamagui/build`. It includes essential fields like `source`, `types`, `main`, `module`, `exports`, and build scripts, showcasing how to configure the build process and define entry points for different environments.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/packages/build/README.md#_snippet_0

LANGUAGE: json
CODE:
```
{
  "source": "src/index.tsx",
  "types": "./types/index.d.ts",
  "main": "dist/cjs",
  "module": "dist/esm",
  "removeSideEffects": "true",
  "scripts": {
    "build": "tamagui-build",
    "watch": "tamagui-build --watch",
    "clean": "tamagui-build clean"
  },
  "exports": {
    "./package.json": "./package.json",
    ".": {
      "react-native-import": "./dist/esm/index.native.js",
      "react-native": "./dist/cjs/index.native.js",
      "types": "./types/index.d.ts",
      "import": "./dist/esm/index.mjs",
      "require": "./dist/cjs/index.js"
    }
  },
  "devDependencies": {
    "@tamagui/build": "latest"
  },
  "tamagui": {
    "build": {
      "skipEnvToMeta": true,
      "bundle.native": "./src/index.ts",
      "bundle.native.test": "./src/index.ts"
    }
  }
}
```

----------------------------------------

TITLE: Tamagui Theme Toggle Button Example
DESCRIPTION: A React component demonstrating how to use `useThemeSetting` and `useRootTheme` hooks to display and toggle the current theme.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/next-js.mdx#_snippet_23

LANGUAGE: tsx
CODE:
```
import { useState } from 'react'
import { Button, useIsomorphicLayoutEffect } from 'tamagui'
import { useThemeSetting, useRootTheme } from '@tamagui/next-theme'

export const SwitchThemeButton = () => {
  const themeSetting = useThemeSetting()
  const [theme] = useRootTheme()

  const [clientTheme, setClientTheme] = useState<string | undefined>('light')

  useIsomorphicLayoutEffect(() => {
    setClientTheme(themeSetting.forcedTheme || themeSetting.current || theme)
  }, [themeSetting.current, themeSetting.resolvedTheme])

  return <Button onPress={themeSetting.toggle}>Change theme: {clientTheme}</Button>
}
```

----------------------------------------

TITLE: Install Tamagui Sheet
DESCRIPTION: Instructions for installing the Tamagui Sheet component, either as part of the main Tamagui package or independently.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/sheet/1.130.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/sheet
```

----------------------------------------

TITLE: Tamagui Toast Usage Example
DESCRIPTION: Demonstrates the basic setup and usage of the Tamagui Toast component, including wrapping the application with ToastProvider and displaying toasts using the useToast hook.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.11.3.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { Button } from 'tamagui' // or '@tamagui/button'
import { Toast, ToastProvider, useToast } from '@tamagui/toast'

export default () => (
  <ToastProvider native={['mobile']}>
    <CurrentToast />
    <MyPage />
    <ToastViewport />
  </ToastProvider>
)

const CurrentToast = () => {
  const { currentToast } = useToast()

  // only show the component if it's present and not handled by native toast
  if (!currentToast || currentToast.isHandledNatively) return null
  return (
    <Toast key={currentToast.id}>
      <Toast.Title>{currentToast.title}</Toast.Title>
      <Toast.Description>{currentToast.message}</Toast.Description>
    </Toast>
  )
}

const MyPage = () => {
  const { show } = useToast()

  return (
    <Button onPress={() => show('Done!', { message: 'Form submitted successfully.' })}>
      Show Toast
    </Button>
  )
}

```

----------------------------------------

TITLE: Installation
DESCRIPTION: Installs the Cubic Bezier animation library using yarn.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/core/cubic-bezier-animator/README.md#_snippet_0

LANGUAGE: shell
CODE:
```
yarn add @tamagui/cubic-bezier-animator
```

----------------------------------------

TITLE: Install expo-font (Bash)
DESCRIPTION: Installs the `expo-font` package, which is essential for loading custom fonts in React Native applications. This command uses `npx` to execute the installation via `expo install`.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/expo.mdx#_snippet_6

LANGUAGE: bash
CODE:
```
npx expo install expo-font
```

----------------------------------------

TITLE: Install Tamagui Tooltip
DESCRIPTION: Instructions for installing the Tamagui Tooltip package using npm. This is the primary way to add the tooltip functionality to your project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tooltip/1.105.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/tooltip
```

----------------------------------------

TITLE: Install Tamagui Spinner
DESCRIPTION: Installs the Tamagui Spinner component using npm. This command is for standalone installation.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/spinner/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/spinner
```

----------------------------------------

TITLE: Configure Tamagui Vite Plugin in vite.config.ts
DESCRIPTION: Example configuration for `vite.config.ts` using `@tamagui/vite-plugin`. It includes options for pointing to the Tamagui config file, specifying components for optimization, and enabling the optimizing compiler.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/vite.mdx#_snippet_1

LANGUAGE: typescript
CODE:
```
import react from '@vitejs/plugin-react-swc'
import { tamaguiPlugin } from '@tamagui/vite-plugin'

export default {
  plugins: [
    react(),
    tamaguiPlugin({
      // points to your tamagui config file
      config: 'src/tamagui.config.ts',
      // points to any linked packages or node_modules
      // that have tamagui components to optimize
      components: ['tamagui'],
      // turns on the optimizing compiler
      optimize: true,
    }),
  ].filter(Boolean),
}
```

----------------------------------------

TITLE: Install Tamagui Dialog
DESCRIPTION: Command to install the Tamagui Dialog package using npm.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/dialog/1.131.0.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @tamagui/dialog
```

----------------------------------------

TITLE: Run Web Development Server
DESCRIPTION: Starts the Tamagui website development server, allowing you to preview changes to the web interface.

SOURCE: https://github.com/tamagui/tamagui/blob/main/CONTRIBUTING.md#_snippet_9

LANGUAGE: bash
CODE:
```
yarn dev
```

----------------------------------------

TITLE: Install Popover
DESCRIPTION: Install the Popover component using npm.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/popover
```

----------------------------------------

TITLE: Install Tamagui AlertDialog
DESCRIPTION: Installs the Tamagui AlertDialog package using npm. For independent use, also install the @tamagui/portal package.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/alert-dialog/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/alert-dialog
npm install @tamagui/portal
```

----------------------------------------

TITLE: Tamagui Expo package.json Scripts (JSON)
DESCRIPTION: Illustrates typical `package.json` scripts for a Tamagui Expo project. It includes commands for starting the native and web development servers with cache clearing, and running the application on Android and iOS devices.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/expo.mdx#_snippet_11

LANGUAGE: json
CODE:
```
{
  "scripts": {
    "start-native": "expo start -c",
    "start-web": "expo start -c",
    "android": "yarn expo run:android",
    "ios": "yarn expo run:ios",
    "web": "expo start --web"
  }
}
```

----------------------------------------

TITLE: Install Sheet Component
DESCRIPTION: Command to install the Sheet component using npm.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/sheet/1.27.0.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @tamagui/sheet
```

----------------------------------------

TITLE: Install Portal for Standalone Dialog
DESCRIPTION: If using @tamagui/dialog separately, install @tamagui/portal and add PortalProvider to your app root.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/dialog/1.131.0.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
npm install @tamagui/portal
```

----------------------------------------

TITLE: Install Dependencies
DESCRIPTION: Installs all necessary project dependencies using Yarn. This command should be executed after cloning the repository.

SOURCE: https://github.com/tamagui/tamagui/blob/main/CONTRIBUTING.md#_snippet_1

LANGUAGE: bash
CODE:
```
yarn install
```

----------------------------------------

TITLE: Vite Plugin and Vite Compiler
DESCRIPTION: Announces the integration of Vite support for Tamagui. Developers can find installation instructions in the dedicated Vite guide.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/version-one.mdx#_snippet_19

LANGUAGE: APIDOC
CODE:
```
Feature: Vite Support

Description:
Tamagui now includes support for Vite, a modern frontend build tool. This integration allows for faster development builds and improved performance.

Setup:
Refer to the official Vite guide for detailed installation and configuration steps.

Link:
[Vite Guide](/docs/guides/vite)
```

----------------------------------------

TITLE: Add Tamagui Babel Plugin
DESCRIPTION: Installs the `@tamagui/babel-plugin` package, which is essential for Tamagui's styling and optimization features within a Babel compilation process.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/expo.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
yarn add @tamagui/babel-plugin
```

----------------------------------------

TITLE: Toast Installation
DESCRIPTION: Instructions for installing the Tamagui toast component and its dependency, Burnt, for native functionality.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.13.0.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
yarn add @tamagui/toast burnt
```

----------------------------------------

TITLE: Install Tamagui Popover
DESCRIPTION: Installs the Tamagui Popover package using npm.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.83.0.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @tamagui/popover
```

----------------------------------------

TITLE: Install Styled/Unstyled RadioGroup
DESCRIPTION: Instructions for installing the standard Tamagui RadioGroup component, which is often included by default or can be installed independently.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/radio-group/1.2.0.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
npm install @tamagui/radio-group
```

----------------------------------------

TITLE: Install Popover Package
DESCRIPTION: Installs the core Popover package for use in your project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.128.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/popover
```

----------------------------------------

TITLE: Install Popover Package
DESCRIPTION: Installs the core Popover package for use in your project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.129.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/popover
```

----------------------------------------

TITLE: Install @tamagui/tooltip (bash)
DESCRIPTION: Installs the Tamagui tooltip package using npm. This is the primary package for using the tooltip component.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tooltip/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/tooltip
```

----------------------------------------

TITLE: Install Tamagui Select
DESCRIPTION: Command to install the Tamagui Select package using npm. This is required for using the Select component.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/select/1.128.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/select
```

----------------------------------------

TITLE: Install Progress
DESCRIPTION: Install the Progress component using npm. It is included in the tamagui package but can also be installed independently.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/progress/1.48.0.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @tamagui/progress
```

----------------------------------------

TITLE: Install ToggleGroup
DESCRIPTION: Command to install the ToggleGroup package using npm. This is required if not using the full Tamagui installation.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toggle-group/1.10.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/toggle-group
```

----------------------------------------

TITLE: Tamagui Provider and Theme Setup
DESCRIPTION: Demonstrates how to initialize Tamagui with custom tokens and themes, and apply themes to views. It shows the basic structure for creating a Tamagui application with theming capabilities.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/intro/themes.mdx#_snippet_8

LANGUAGE: tsx
CODE:
```
import { TamaguiProvider, createTokens, createTamagui, View, Theme } from 'tamagui'

const tokens = createTokens({
  color: {
    darkRed: '#550000',
    lightRed: '#ff0000'
  }
  // ... see configuration docs for required tokens
})

const config = createTamagui({
  tokens,
  themes: {
    dark: {
      red: tokens.color.darkRed,
    },
    light: {
      red: tokens.color.lightRed,
    }
  }
})

export const App = () => (
  <TamaguiProvider config={config} defaultTheme="light">
    <View backgroundColor="$red" />
    <Theme name="dark">
      <View backgroundColor="$red" />
    </Theme>
  </TamaguiProvider>
)
```

----------------------------------------

TITLE: PortalProvider Setup for Root Rendering
DESCRIPTION: Explains how to set up `PortalProvider` from `@tamagui/portal` when rendering the Sheet into the root of the application, rather than inline. This requires installing the `@tamagui/portal` package and wrapping the app's root component.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/sheet/1.59.0.mdx#_snippet_5

LANGUAGE: bash
CODE:
```
npm install @tamagui/portal
```

LANGUAGE: tsx
CODE:
```
import { PortalProvider } from '@tamagui/portal'
import YourApp from './components/YourApp'

function App() {
  return (
    <PortalProvider shouldAddRootHost>
      <YourApp />
    </PortalProvider>
  )
}

export default App
```

----------------------------------------

TITLE: Install Tamagui ScrollView
DESCRIPTION: Instructions for installing the Tamagui ScrollView package using npm.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/scroll-view/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/scroll-view
```

----------------------------------------

TITLE: Tamagui Styled Context Example
DESCRIPTION: Demonstrates creating a styled context in Tamagui, allowing for theme-aware styling and dynamic value overrides based on breakpoints.

SOURCE: https://github.com/tamagui/tamagui/blob/main/next.md#_snippet_9

LANGUAGE: javascript
CODE:
```
const Context = createStyledContext({
  isVertical: {
    $sm: true,
    $gtSm: false,
  },
})
```

----------------------------------------

TITLE: Install Tamagui Input Package
DESCRIPTION: Installs the Tamagui Input component package independently. This command is used to add the necessary files to your project for using the Input and TextArea components.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/inputs/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/input
```

----------------------------------------

TITLE: Install Tamagui Switch (Styled/Unstyled)
DESCRIPTION: Installs the Tamagui Switch component, which can be used with default styles or customized.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/switch/1.89.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/switch
```

----------------------------------------

TITLE: Install Tamagui Portal Package
DESCRIPTION: Installs the Tamagui Portal package using npm. This is required if you are installing @tamagui/popover independently and not using the main tamagui package.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.131.0.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @tamagui/portal
```

----------------------------------------

TITLE: Example Button Usage
DESCRIPTION: Demonstrates the initial usage of the `ButtonFrame` and `ButtonText` components, passing the `size` prop to both to ensure consistent styling.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/how-to-build-a-button.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
<ButtonFrame size="$md">
  <ButtonText size="$md" />
</ButtonFrame>
```

----------------------------------------

TITLE: Headless Checkbox Installation
DESCRIPTION: Command to install the @tamagui/switch-headless package for the headless version, which has no dependency on @tamagui/core.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/checkbox/1.89.0.mdx#_snippet_5

LANGUAGE: bash
CODE:
```
npm install @tamagui/switch-headless
```

----------------------------------------

TITLE: Use Tamagui Timer Utility in TypeScript
DESCRIPTION: This snippet shows how to initialize and use the timer utility from `@tamagui/timer`. It demonstrates starting a timer, marking specific points with tags, and printing the elapsed times.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/packages/timer/readme.md#_snippet_0

LANGUAGE: tsx
CODE:
```
import { timer } from '@tamagui/timer'

const t = timer()

setTimeout(() => {
  t.print()
}, 3000)

function something() {
  const time = t.start()
  
  // do stuff...
  
  time`firstTag`

  // do stuff...
  time`second`
}
```

----------------------------------------

TITLE: Next.js Tamagui Plugin Configuration
DESCRIPTION: Example of configuring the `withTamagui` plugin in `next.config.js`. It points to the Tamagui configuration and lists the project's components.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/design-systems.mdx#_snippet_4

LANGUAGE: javascript
CODE:
```
import withPlugins from 'next-compose-plugins'
import withTamagui from '@tamagui/next-plugin'

export default withPlugins([
  withTamagui({
    config: './tamagui.config.ts',
    components: ['@ourapp/components', 'tamagui'],
  })
])
```

----------------------------------------

TITLE: Install Tamagui UI
DESCRIPTION: Installs the Tamagui UI package using yarn. This command adds the core Tamagui package, which includes all components and is a superset of @tamagui/core.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/intro/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
yarn add tamagui
```

----------------------------------------

TITLE: Setup Tamagui Provider (App Layout TSX)
DESCRIPTION: Integrates Tamagui into the application's root layout by wrapping the main content with `TamaguiProvider`. This makes Tamagui's styling and theming available throughout the app.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/one.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
import { TamaguiProvider } from 'tamagui'
import { Slot } from 'one'
import config from '../tamagui.config'

export default function Layout() {
  return (
    <TamaguiProvider config={config}>
      <Slot />
    </TamaguiProvider>
  )
}
```

----------------------------------------

TITLE: Tamagui Variable Conversion Example
DESCRIPTION: Example TypeScript signature for converting a Tamagui `Variable` object into a string. This is useful for getting CSS variable names on the web or raw values on native platforms.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/exports.mdx#_snippet_15

LANGUAGE: typescript
CODE:
```
type getVariable = (value: Variable) => string
```

----------------------------------------

TITLE: Install VisuallyHidden Component
DESCRIPTION: Installs the `@tamagui/visually-hidden` package using npm. This is a prerequisite for using the component independently.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/visually-hidden/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/visually-hidden
```

----------------------------------------

TITLE: Install Tamagui Input Package
DESCRIPTION: Command to install the Tamagui Input package independently into your project using npm.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/new-inputs/1.0.0.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
npm install @tamagui/input
```

----------------------------------------

TITLE: Configure Tamagui with Themes and Tokens
DESCRIPTION: Shows the basic setup for a Tamagui application's configuration file (`tamagui.config.ts`). It demonstrates importing predefined tokens and themes from `@tamagui/themes`, creating custom tokens, and initializing Tamagui with these configurations.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/intro/themes.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
import { color, radius, size, space, themes, zIndex } from '@tamagui/themes'
import { createTamagui, createTokens } from 'tamagui'

const tokens = createTokens({
  size,
  space,
  zIndex,
  color,
  radius,
})

const config = createTamagui({
  themes,
  tokens,
  // ... see Configuration
})

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
```

----------------------------------------

TITLE: Install Tamagui Switch
DESCRIPTION: Instructions for installing the Tamagui Switch component using npm. This is a prerequisite for using the component in your project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/switch/1.58.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/switch
```

----------------------------------------

TITLE: Install Tamagui Text Package
DESCRIPTION: Installs the `@tamagui/text` package, which includes the Heading components, using npm. This is a prerequisite for using the Heading components in your project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/headings/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/text
```

----------------------------------------

TITLE: Install Tamagui Portal
DESCRIPTION: Installs the Tamagui Portal package using npm, which is required when rendering popovers into the root of the app instead of inline.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.83.0.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
npm install @tamagui/portal
```

----------------------------------------

TITLE: Install Accordion
DESCRIPTION: Command to install the Tamagui Accordion package using npm.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/accordion/1.0.0.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @tamagui/accordion
```

----------------------------------------

TITLE: Tamagui Popover Transform Origin Example
DESCRIPTION: References an external example for implementing transform origin functionality within Tamagui's Popover component.

SOURCE: https://github.com/tamagui/tamagui/blob/main/next.md#_snippet_15

LANGUAGE: javascript
CODE:
```
https://codesandbox.io/p/sandbox/floating-ui-react-scale-transform-origin-qv0t1c?file=%2Fsrc%2FApp.tsx%3A43%2C25
```

----------------------------------------

TITLE: TamaguiProvider with Preset Config
DESCRIPTION: Shows how to integrate `TamaguiProvider` using a preset configuration from `@tamagui/config/v4`. It includes type augmentation for custom configurations.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/intro/installation.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { defaultConfig } from '@tamagui/config/v4'

// you usually export this from a tamagui.config.ts file
const config = createTamagui(defaultConfig)

type Conf = typeof config

// make imports typed
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default () => {
  return (
    <TamaguiProvider config={config}>
      {/* your app here */}
    </TamaguiProvider>
  )
}
```

----------------------------------------

TITLE: Tamagui Component Styling Examples
DESCRIPTION: Illustrates different ways to create styled components in Tamagui, including using native HTML elements, styled functions, and extending existing styled elements.

SOURCE: https://github.com/tamagui/tamagui/blob/main/next.md#_snippet_6

LANGUAGE: jsx
CODE:
```
html.div
styled('div')
styled(html.div)
```

----------------------------------------

TITLE: Install Tamagui Checkbox
DESCRIPTION: Installs the Tamagui Checkbox component using npm. Can be installed independently or is included with the main tamagui package.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/checkbox/1.3.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/checkbox
```

----------------------------------------

TITLE: Install Tamagui Colors Package
DESCRIPTION: Installs the `@tamagui/colors` package using the Yarn package manager. This command adds the necessary dependencies to your project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/core/colors/README.md#_snippet_0

LANGUAGE: shell
CODE:
```
yarn add @tamagui/colors
```

----------------------------------------

TITLE: Install @tamagui/popover (Bash)
DESCRIPTION: Shows how to install the @tamagui/popover package using npm. This is the primary step to use the Popover component in your project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.110.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/popover
```

----------------------------------------

TITLE: Progress Usage Example
DESCRIPTION: Basic usage example of the Progress component. It demonstrates how to import and render the Progress component with an indicator, controlling the progress value.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/progress/1.0.0.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { Button, Progress } from 'tamagui'

export default () => (
  <Progress value={60}>
    <Progress.Indicator animation="bouncy" />
  </Progress>
)
```

----------------------------------------

TITLE: Install Tamagui Card
DESCRIPTION: Instructions for installing the Tamagui Card component using npm. This is a prerequisite for using the component in your project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/card/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/card
```

----------------------------------------

TITLE: Progress Component Example
DESCRIPTION: Shows an example of the Progress component, used to visualize the progress of a task or operation.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/version-one.mdx#_snippet_14

LANGUAGE: tsx
CODE:
```
```tsx hero template=Progress

```
```

----------------------------------------

TITLE: Install Tamagui Popover
DESCRIPTION: Instructions for installing the Tamagui Popover component using npm. This is a prerequisite for using the component in a project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.43.0.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
```bash
npm install @tamagui/popover
```
```

----------------------------------------

TITLE: Styled Checkbox Installation
DESCRIPTION: Command to install the @tamagui/checkbox package for the styled version of the component.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/checkbox/1.89.0.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
npm install @tamagui/checkbox
```

----------------------------------------

TITLE: Install Tamagui Slider
DESCRIPTION: Provides the command-line instruction to install the Tamagui Slider package independently if it's not already included in your project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/slider/1.0.0.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
npm install @tamagui/slider
```

----------------------------------------

TITLE: PortalProvider Setup
DESCRIPTION: Demonstrates how to set up the `PortalProvider` from `@tamagui/portal` at the root of your application. This is required when rendering the Sheet into the root of the app instead of inline.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/sheet/1.116.0.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
import { PortalProvider } from '@tamagui/portal'
import YourApp from './components/YourApp'

function App() {
  return (
    <PortalProvider shouldAddRootHost>
      <YourApp />
    </PortalProvider>
  )
}

export default App
```

----------------------------------------

TITLE: Unstyled Checkbox Installation
DESCRIPTION: Command to install the @tamagui/checkbox package for the unstyled version of the component.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/checkbox/1.89.0.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
npm install @tamagui/checkbox
```

----------------------------------------

TITLE: Install Progress Package
DESCRIPTION: Install the Progress package using npm. This command adds the necessary package to your project's dependencies.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/progress/1.0.0.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @tamagui/progress
```

----------------------------------------

TITLE: Stripe API Endpoints and Webhook Receiver
DESCRIPTION: Overview of key API endpoints and the webhook receiver for handling Stripe subscription flows. These files manage checkout sessions and process incoming Stripe events.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/doc/stripe-setup.md#_snippet_4

LANGUAGE: APIDOC
CODE:
```
Subscription API Endpoints:
  - create-subscription+api.ts
  - upgrade-subscription+api.ts
    Purpose: Initiate Stripe checkout sessions for subscriptions.

Webhook Receiver:
  - webhook+api.ts
    Purpose: Receives and processes Stripe events like checkout.session.completed, customer.subscription.created, and invoice.paid.
    Handles: Persistence of subscription data into Supabase.
```

----------------------------------------

TITLE: Install @tamagui/stacks
DESCRIPTION: Installs the @tamagui/stacks package using npm. This package provides stack components for flex-based layouts.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/stacks/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/stacks
```

----------------------------------------

TITLE: Create Tamagui Project
DESCRIPTION: Use the `npm create tamagui` command to quickly bootstrap a new monorepo project. This starter kit is pre-configured with Expo, Next.js, and Solito for cross-platform development.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/tamagui-enters-beta-themes-and-animations.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm create tamagui
```

----------------------------------------

TITLE: Contribute to create-tamagui
DESCRIPTION: Steps to clone the Tamagui repository, navigate to the create-tamagui package, install dependencies, and run tests for local development. This process builds the local app into a gitignored folder.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/core/create-tamagui/readme.md#_snippet_1

LANGUAGE: sh
CODE:
```
git clone <tamagui-repo-url>
cd packages/create-tamagui
yarn
yarn test
```

----------------------------------------

TITLE: Install Headless RadioGroup
DESCRIPTION: Instructions for installing the headless RadioGroup package, which provides the core logic without Tamagui styling dependencies.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/radio-group/1.2.0.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
npm install @tamagui/radio-headless
```

----------------------------------------

TITLE: Setup Tamagui Visualizer
DESCRIPTION: Configures the Tamagui development visualizer to display styled component information as an overlay. Allows customization of the activation key and delay for the heads-up display.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/developing.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { setupDev } from '@tamagui/core'

setupDev({
  // can just be true as well for defaulting to key: Alt + delay: 800
  visualizer: {
    key: 'Alt',
    delay: 800
  }
})
```

----------------------------------------

TITLE: Install Tamagui Babel Plugin
DESCRIPTION: Install the `@tamagui/babel-plugin` package using yarn. This plugin is optional but recommended for improved Tamagui optimization, especially on web.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/intro/compiler-install.mdx#_snippet_6

LANGUAGE: bash
CODE:
```
yarn add @tamagui/babel-plugin
```

----------------------------------------

TITLE: Native iOS Sheet Setup
DESCRIPTION: Configures the Sheet component to render to a native iOS sheet using `react-native-ios-modal`. This requires installing the native dependency and rebuilding the app.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/sheet/1.27.0.mdx#_snippet_3

LANGUAGE: sh
CODE:
```
yarn add react-native-ios-modal
pod install
# rebuild your app (expo ios, or use react-native cli)
```

----------------------------------------

TITLE: Start Development Server with Yarn
DESCRIPTION: Starts the development server for the Tamagui project. This command is used to run the application locally during the development phase, allowing for hot-reloading and debugging.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/sandbox/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
yarn dev
```

----------------------------------------

TITLE: Dialog Component Example
DESCRIPTION: Demonstrates the usage of the Dialog component, which can adapt its content based on screen size. This snippet shows a basic implementation.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/version-one.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
```tsx hero template=Dialog

```
```

----------------------------------------

TITLE: Install Lucide Icons
DESCRIPTION: Install the necessary packages for Lucide Icons integration with Tamagui. This includes the icon library and the required SVG renderer.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/lucide-icons/1.0.0.mdx#_snippet_0

LANGUAGE: sh
CODE:
```
yarn add react-native-svg @tamagui/lucide-icons
```

----------------------------------------

TITLE: Tamagui Popover Hero Example
DESCRIPTION: A basic example demonstrating the Tamagui Popover component, likely used for showcasing its functionality in a hero section or demo.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.43.0.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
```tsx hero template=Popover

```
```

----------------------------------------

TITLE: Install Tamagui Image Component
DESCRIPTION: Command to install the Tamagui Image component using npm. This package provides web-compatible image functionality.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tamagui-image/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/image-next
```

----------------------------------------

TITLE: Install Linear Gradient Package
DESCRIPTION: Installs the `@tamagui/linear-gradient` package using npm. This is a prerequisite for using the LinearGradient component in your project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/linear-gradient/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/linear-gradient
```

----------------------------------------

TITLE: Compound Component API Example
DESCRIPTION: Illustrates how users can import and use the combined `Button` component, accessing its `Text` sub-component via `Button.Text`.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/how-to-build-a-button.mdx#_snippet_10

LANGUAGE: tsx
CODE:
```
import { Button } from './OurButton'

export default () => (
  <Button size="$md">
    <Button.Text size="$md">Hello world</Button.Text>
  </Button>
)
```

----------------------------------------

TITLE: Avatar Component Example
DESCRIPTION: A basic example showcasing the Avatar component, typically used for displaying user profiles or icons.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/version-one.mdx#_snippet_12

LANGUAGE: tsx
CODE:
```
```tsx hero template=Avatar

```
```

----------------------------------------

TITLE: Install FocusScope
DESCRIPTION: Install the FocusScope component using npm. This package is essential for managing focus within interactive elements.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/focus-scope/1.128.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/focus-scope
```

----------------------------------------

TITLE: Tamagui Select Hero Example
DESCRIPTION: Example usage of the Tamagui Select component within a hero template context.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/select/1.40.0.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
```tsx hero template=Select
```
```

----------------------------------------

TITLE: Card Component Example
DESCRIPTION: Provides an example of the Card component, used for displaying content with features like headers, footers, background images, titles, subtitles, and descriptions.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/version-one.mdx#_snippet_10

LANGUAGE: tsx
CODE:
```
```tsx hero template=Card

```
```

----------------------------------------

TITLE: Create and Use Reactive Store
DESCRIPTION: Demonstrates creating a reactive store using `createUseStore` and `createStoreInstance`. Shows how to access the store state and methods within React components using `useStore` and `useGlobalStore` for top-level reactivity.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/packages/use-store/README.md#_snippet_0

LANGUAGE: tsx
CODE:
```
import { createUseStore, createStoreInstance, useStore, useGlobalStore } from '@tamagui/use-store'

class X {
  y = 0

  add() {
    this.y += 1
  }
}

// Can use it a few ways, all these will access *the same* store:
const useX = createUseStore(X)
const x = createStoreInstance(X)

// all of these will be reactive, so only props you use cause re-renders
export function ReactComponent() {
  const x0 = useStore(X)
  const x1 = useX()
  const x2 = useGlobalStore(x)
  
  return (
    <>
      <div>{x0.y}</div>
      <button action={x0.add}>add</button>
    </>
  )
}
```

----------------------------------------

TITLE: Install Tamagui Group
DESCRIPTION: Instructions for installing the Tamagui Group package using npm. This is the primary method for adding the component to your project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/group/1.56.1.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/group
```

----------------------------------------

TITLE: TamaguiProvider Setup
DESCRIPTION: Demonstrates how to import and use the TamaguiProvider component at the root of your application. It requires a configuration object and a default theme to be passed as props.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/configuration.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
import { TamaguiProvider } from 'tamagui'
import { config } from './tamagui.config'

export default function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <AppContents />
    </TamaguiProvider>
  )
}
```

----------------------------------------

TITLE: Install Tamagui Popover Package
DESCRIPTION: Installs the Tamagui Popover package using npm. This is the primary way to add the Popover component to your project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.131.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/popover
```

----------------------------------------

TITLE: Install RadioGroup Package
DESCRIPTION: Installs the RadioGroup package using npm. This command is used to add the component to your project dependencies.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/radio-group/1.3.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/radio-group
```

----------------------------------------

TITLE: Install Tamagui Tabs
DESCRIPTION: Command to install the Tamagui Tabs package using npm. This is a prerequisite for using the Tabs component independently.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tabs/1.125.35.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/tabs
```

----------------------------------------

TITLE: Install Tamagui Sheet
DESCRIPTION: Command to install the Tamagui Sheet component using npm. This is required for standalone usage or if not already included in your Tamagui project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/sheet/1.123.18.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/sheet
```

----------------------------------------

TITLE: Configure Webpack with TamaguiPlugin
DESCRIPTION: Demonstrates using the TamaguiPlugin for Webpack, which automates some of the setup for the Tamagui compiler. It requires similar options to the tamagui-loader configuration.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/intro/compiler-install.mdx#_snippet_2

LANGUAGE: javascript
CODE:
```
const { TamaguiPlugin } = require('tamagui-loader')

module.exports = {
  plugins: [
    new TamaguiPlugin({
      config: './tamagui.config.ts',
      components: ['tamagui'],
      importsWhitelist: ['constants.js', 'colors.js'],
      logTimings: true,
      disableExtraction: process.env.NODE_ENV === 'development',
    }),
  ],
}
```

----------------------------------------

TITLE: Install Tamagui Separator
DESCRIPTION: Installs the Tamagui Separator package using npm. This command is used to add the component to your project dependencies.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/separator/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/separator
```

----------------------------------------

TITLE: Add Native Dependencies
DESCRIPTION: Instructions for adding dependencies that include native code, typically installed in the `apps/expo` directory. This ensures correct linking for native modules.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/create-tamagui-app.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
cd apps/expo
yarn add react-native-reanimated
cd ../..
yarn
```

----------------------------------------

TITLE: Install Portal Package for Root Rendering
DESCRIPTION: Installs the `@tamagui/portal` package, which is required if you intend to render popovers into the root of your application instead of inline. This allows for better management of floating elements.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.125.0.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @tamagui/portal
```

----------------------------------------

TITLE: Install Tamagui Switch Headless
DESCRIPTION: Installs the headless version of the Tamagui Switch component, which has no dependency on Tamagui's core styling and allows for custom styling libraries.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/switch/1.89.0.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @tamagui/switch-headless
```

----------------------------------------

TITLE: Tamagui Configuration with createTamagui (TSX)
DESCRIPTION: Demonstrates how to generate a fully-typed design system with Tamagui. This example shows the creation of custom fonts, size tokens, spacing, color palettes, themes, media queries, and shorthands using the `createTamagui` utility.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/version-one.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { createFont, createTamagui, createTokens } from 'tamagui' // or '@tamagui/core'

const interFont = createFont({
  family: 'Inter, Helvetica, Arial, sans-serif',
  size: { 1: 12, 2: 14 /* ... */ },
  // ... lineHeight, weight, letterSpacing, transform, style, color, face
})

const size = { 0: 0, 1: 5, 2: 10 /* ... */ }

const tokens = createTokens({
  size,
  space: { ...size, '-1': -5, '-2': -10 },
  radius: { 0: 0, 1: 3 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: { white: '#fff', black: '#000' },
})

export default createTamagui({
  fonts: {
    heading: interFont,
    body: interFont,
  },
  tokens,
  themes: {
    light: { bg: '#f2f2f2', color: tokens.color.black },
    dark: { bg: '#111', color: tokens.color.white },
  },
  media: {
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
  },
  shorthands: {
    px: 'paddingHorizontal',
    f: 'flex',
  } as const,
})
```

----------------------------------------

TITLE: Install Tamagui Checkbox Package
DESCRIPTION: Instructions for installing the Tamagui Checkbox component using npm. This command applies to both the default styled version and the unstyled version.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/checkbox/1.85.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/checkbox
```

----------------------------------------

TITLE: Sheet Anatomy Example (Tamagui)
DESCRIPTION: Demonstrates the basic structure of a Tamagui Sheet component, including importing and nesting its core sub-components: Overlay, Handle, and Frame. This setup is essential for creating a functional bottom sheet.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/sheet/1.21.0.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { Sheet } from 'tamagui' // or '@tamagui/sheet'

export default () => (
  <Sheet>
    <Sheet.Overlay />
    <Sheet.Handle />
    <Sheet.Frame>{/* ...inner contents */}</Sheet.Frame>
  </Sheet>
)
```

----------------------------------------

TITLE: Spinner Component Example
DESCRIPTION: Demonstrates the Spinner component, used to indicate loading or activity states in the UI.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/version-one.mdx#_snippet_13

LANGUAGE: tsx
CODE:
```
```tsx hero template=Spinner

```
```

----------------------------------------

TITLE: Advanced Stack Styling Example
DESCRIPTION: An example showcasing advanced styling properties on an XStack, including flex properties, background color, hover styles, and media queries for responsive layout changes.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/stacks/1.0.0.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { Text, XStack, YStack } from 'tamagui'

export default () => (
  <XStack
    flex={1}
    flexWrap="wrap"
    backgroundColor="#fff"
    hoverStyle={{
      backgroundColor: 'red',
    }}
    // media query
    $gtSm={{
      flexDirection: 'column',
      flexWrap: 'nowrap',
    }}
  >
    <YStack gap="$3">
      <Text>Hello</Text>
      <Text>World</Text>
    </YStack>
  </XStack>
)
```

----------------------------------------

TITLE: Install Tamagui Image Package
DESCRIPTION: Command to install the Tamagui Image package using npm. This is the primary way to add the Image component to your project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/image/1.13.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/image
```

----------------------------------------

TITLE: Run Kitchen Sink App
DESCRIPTION: Starts the kitchen-sink application, which requires React 18. Ensure you switch the profile before running this command.

SOURCE: https://github.com/tamagui/tamagui/blob/main/CONTRIBUTING.md#_snippet_6

LANGUAGE: bash
CODE:
```
yarn kitchen-sink
```

----------------------------------------

TITLE: Configure Stripe and Supabase Environment Variables
DESCRIPTION: Sets up essential environment variables for Stripe API keys, Supabase URL, and Supabase service role key required for local development and testing. These are crucial for connecting to Stripe's test mode and your local Supabase instance.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/doc/stripe-setup.md#_snippet_0

LANGUAGE: env
CODE:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxx
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
```

----------------------------------------

TITLE: Install Portal Package for Root Rendering
DESCRIPTION: Installs the portal package, required when rendering popovers into the root of the application instead of inline. This enables managing popovers outside their immediate DOM hierarchy.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.128.0.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @tamagui/portal
```

----------------------------------------

TITLE: Create Tamagui Project
DESCRIPTION: Initiates the creation of a new Tamagui monorepo project using npm. This script automates the setup process for a new Tamagui project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/core/create-tamagui/readme.md#_snippet_0

LANGUAGE: sh
CODE:
```
npm create tamagui
```

----------------------------------------

TITLE: Install Portal Package for Root Rendering
DESCRIPTION: Installs the portal package, required when rendering popovers into the root of the application instead of inline. This enables managing popovers outside their immediate DOM hierarchy.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.129.0.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @tamagui/portal
```

----------------------------------------

TITLE: Install Reanimated (Moti) Driver
DESCRIPTION: Installs the `@tamagui/animations-moti` and `react-native-reanimated` packages using yarn. This driver utilizes the Moti library for Reanimated integration.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/animations.mdx#_snippet_5

LANGUAGE: bash
CODE:
```
yarn add @tamagui/animations-moti react-native-reanimated
```

----------------------------------------

TITLE: Run User Impersonation Tool
DESCRIPTION: This Bash script demonstrates how to install dependencies, configure environment variables, and run a Node.js tool for impersonating users. This is used for testing subscription flows, Discord access, and repository claims within the Tamagui project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/doc/subcriptions.md#_snippet_18

LANGUAGE: bash
CODE:
```
npm install
cp .env.example .env  # Fill in Supabase credentials
node main.mjs --email <user-email>
```

----------------------------------------

TITLE: Install Popover Package
DESCRIPTION: Installs the Tamagui Popover package using npm. This is the primary step to integrate the popover functionality into your project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.125.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/popover
```

----------------------------------------

TITLE: Tamagui Core Primitives
DESCRIPTION: Provides fast primitives for inline styles, hooks for media queries, and themes that work consistently across native and web platforms.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/introducing-tamagui.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
Package: @tamagui/core

Description: Provides foundational components and hooks for building universal UIs.

Features:
- Inline styles with optimized performance.
- Hooks for responsive styling (e.g., useMedia).
- Hooks for theming (e.g., useTheme).

Usage:
- Import primitives for building custom components.
- Utilize hooks for dynamic styling based on screen size or theme.

Related:
- tamagui (UI Kit)
- @tamagui/static (Optimizing Compiler)
```

----------------------------------------

TITLE: Install Tamagui Slider
DESCRIPTION: Command to install the Tamagui Slider package using npm. This is required if not already included in your Tamagui project.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/slider/1.45.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/slider
```

----------------------------------------

TITLE: Headless Tabs Example
DESCRIPTION: Shows an example of using the Tabs component in a headless manner, likely for custom styling or integration without Tamagui's default visual appearance.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tabs/1.125.35.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
```tsx hero template=TabsHeadless

```
```

----------------------------------------

TITLE: Install @tamagui/vite-plugin for Vite
DESCRIPTION: Installs the Vite plugin for Tamagui, enabling compiler optimizations within Vite projects. This plugin is essential for integrating Tamagui's performance features into a Vite build environment.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/intro/compiler-install.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
yarn add @tamagui/vite-plugin
```

----------------------------------------

TITLE: Install Tamagui Form
DESCRIPTION: Install the Tamagui Form package using npm. This command adds the necessary package to your project's dependencies.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/form/1.3.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/form
```

----------------------------------------

TITLE: Tamagui Themeable HOC Example
DESCRIPTION: Example TypeScript signature for the `themeable` higher-order component. It enhances a component by managing theme props, making them available to the wrapped component.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/exports.mdx#_snippet_14

LANGUAGE: typescript
CODE:
```
themeable<Comp extends ReactComponentLike>(component: Comp): Comp
```

----------------------------------------

TITLE: Install Tamagui Shapes
DESCRIPTION: Installs the @tamagui/shapes package using npm. This command is used to add the shapes library to your project dependencies.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/shapes/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/shapes
```

----------------------------------------

TITLE: Create Tamagui Project
DESCRIPTION: Use the Tamagui CLI to create a new project. This command bootstraps a new Tamagui application, providing starter templates for learning or production.

SOURCE: https://github.com/tamagui/tamagui/blob/main/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm create tamagui@latest
```

----------------------------------------

TITLE: Install CSS Animation Driver
DESCRIPTION: Installs the `@tamagui/animations-css` package using yarn. This driver provides simple, typed animations across components and integrates with the Tamagui compiler.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/animations.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
yarn add @tamagui/animations-css
```

----------------------------------------

TITLE: Install Tamagui Toast
DESCRIPTION: Command to install the Tamagui Toast component and its dependency, Burnt. Rebuilding the React Native app is required for native builds.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.15.15.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
yarn add @tamagui/toast burnt
```

----------------------------------------

TITLE: Install tamagui-loader for Webpack
DESCRIPTION: Installs the tamagui-loader package, which is necessary for integrating the Tamagui compiler with Webpack. This loader analyzes Tamagui components and optimizes them during the build process.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/intro/compiler-install.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
yarn add tamagui-loader
```

----------------------------------------

TITLE: Image Component Usage Example
DESCRIPTION: Example of using the Image component with Tamagui styling. This snippet demonstrates the basic structure for integrating the Image component within a Tamagui application.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/image/1.0.0.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
```tsx hero template=Image

```
```

----------------------------------------

TITLE: Tamagui Theme Generation with createThemes
DESCRIPTION: Demonstrates generating Tamagui themes using `createThemes` from '@tamagui/config/v4'. This example shows how to define a dark color palette and use it with `defaultComponentThemes` to create structured themes. It requires importing `Colors` and theme creation utilities.

SOURCE: https://github.com/tamagui/tamagui/blob/main/library/tamagui.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import * as Colors from '@tamagui/colors'
import { createThemes, defaultComponentThemes } from '@tamagui/config/v4'

const darkPalette = [
  '#050505',
  '#151515',
  '#191919',
  '#232323',
  '#282828',
  '#323232',
  '#424242',
```

----------------------------------------

TITLE: Install Tamagui Label with npm
DESCRIPTION: Instructions for installing the Tamagui Label component independently using npm. This command adds the necessary package to your project's dependencies.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/label/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/label
```

----------------------------------------

TITLE: Create Tamagui Expo Router Project
DESCRIPTION: Command to initialize a new Expo Router based Tamagui project using Yarn. This sets up the basic structure for an Expo application with Tamagui integration.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/expo.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
yarn create tamagui@latest --template expo-router
```

----------------------------------------

TITLE: Tamagui CLI Command
DESCRIPTION: The Tamagui CLI has been simplified. You can now use `npx tamagui` directly to access its features, such as creating starters, linting, one-off compiling, and running a doctor command.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/drafts/version-two.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx tamagui
```

----------------------------------------

TITLE: Install Tamagui Toast and Burnt
DESCRIPTION: Installs the Tamagui Toast package and its native dependency, Burnt, using Yarn. This is required for native toast functionality.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.83.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
yarn add @tamagui/toast burnt
```

----------------------------------------

TITLE: Tamagui New Components
DESCRIPTION: Lists new components added to the `tamagui` package, noting their rich features, compound component APIs inspired by Radix, and adaptability using `<Adapt />` for media queries and platforms.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/version-one-release-candidate.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
New Tamagui Components (v1 RC):

These components feature rich APIs, compound component patterns, and adaptive styling capabilities using the `<Adapt />` component for targeting media queries and platforms.

- Sheet
- Select
- Dialog
- AlertDialog
- Slider
- Label
- Card
- ListItem
- Avatar
- Progress
- Spinner
- Unspaced
- ScrollView
- XGroup and YGroup
```

----------------------------------------

TITLE: Next.js Configuration with Tamagui Plugin
DESCRIPTION: Configures the `next.config.js` file to integrate the Tamagui plugin. It specifies the path to the Tamagui configuration file and the components to be included.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/next-js.mdx#_snippet_3

LANGUAGE: javascript
CODE:
```
const { withTamagui } = require('@tamagui/next-plugin')

module.exports = function (name, { defaultConfig }) {
  let config = {
    ...defaultConfig,
    // ...your configuration
  }
  const tamaguiPlugin = withTamagui({
    config: './tamagui.config.ts',
    components: ['tamagui'],
  })
  return {
    ...config,
    ...tamaguiPlugin(config),
  }
}
```

----------------------------------------

TITLE: Setup PortalProvider for Tooltip (tsx)
DESCRIPTION: When rendering tooltips into the root of the app instead of inline, the `@tamagui/portal` package is required. This snippet shows how to add `PortalProvider` to your application's root.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tooltip/1.0.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { PortalProvider } from '@tamagui/portal'
import YourApp from './components/YourApp'

function App() {
  return (
    <PortalProvider shouldAddRootHost>
      <YourApp />
    </PortalProvider>
  )
}

export default App
```

----------------------------------------

TITLE: Tamagui Button Component Usage Example
DESCRIPTION: Demonstrates how to use the custom Tamagui Button component with its nested Text and Icon elements. Shows basic usage and how to include multiple icons.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/how-to-build-a-button.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { Moon } from '@tamagui/lucide-icons'
import { Button } from './Button' // Assuming Button is exported from Button.tsx

export default () => (
  <Button>
    <Button.Icon>
      <Moon />
    </Button.Icon>
    <Button.Text>hi</Button.Text>
  </Button>
)

// multiple icons:
export default () => (
  <Button>
    <Button.Icon>
      <Moon />
    </Button.Icon>
    <Button.Text>hi</Button.Text>
    <Button.Icon>
      <Moon />
    </Button.Icon>
  </Button>
)
```

----------------------------------------

TITLE: AlertDialog Component Example
DESCRIPTION: Illustrates the AlertDialog component, a specialized dialog for confirming or denying actions. It supports a `native` prop for platform-specific UI.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/version-one.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
```tsx hero template=AlertDialog

```
```

----------------------------------------

TITLE: ListItem Component Example
DESCRIPTION: Illustrates the ListItem component, which allows displaying content with titles, subtitles, and optional before/after elements like images or icons.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/version-one.mdx#_snippet_11

LANGUAGE: tsx
CODE:
```
```tsx hero template=ListItem

```
```

----------------------------------------

TITLE: Configure Tamagui (Tamagui Config TS)
DESCRIPTION: Creates the Tamagui configuration file, defining the project's styling and theming. It uses the default configuration from `@tamagui/config/v4` and extends the Tamagui custom configuration type.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/one.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'

const tamaguiConfig = createTamagui(defaultConfig)

export default tamaguiConfig

// this is important!
export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
```

----------------------------------------

TITLE: @tamagui/next-theme Usage
DESCRIPTION: Mentions the `@tamagui/next-theme` library, which simplifies handling light/dark/system color scheme preferences within Next.js applications. Refer to the Next.js guide for details.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/version-one.mdx#_snippet_22

LANGUAGE: APIDOC
CODE:
```
Package: @tamagui/next-theme

Description:
A helper library for Next.js applications to automatically manage theme preferences, including light, dark, and system color schemes.

Usage:
Consult the Next.js guide for integration instructions.

Link:
[Next.js Guide](/docs/guides/next-js)
```

----------------------------------------

TITLE: Configure NextTamaguiProvider for SSR Themes
DESCRIPTION: Sets up the NextTamaguiProvider component to handle SSR themes, including importing necessary CSS, managing root themes, and inserting styles server-side.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/next-js.mdx#_snippet_17

LANGUAGE: tsx
CODE:
```
'use client'

import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'
import '@tamagui/polyfill-dev'

import { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { useServerInsertedHTML } from 'next/navigation'
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '../tamagui.config'

export const NextTamaguiProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useRootTheme()

  useServerInsertedHTML(() => {
    // @ts-ignore
    const rnwStyle = StyleSheet.getSheet()
    return (
      <>
        {/* Link your CSS output for optimized themes */}
        <link rel="stylesheet" href="/tamagui.css" />
        <style
          dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
          id={rnwStyle.id}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: tamaguiConfig.getCSS({
              // if you are using "outputCSS" option, you should use this "exclude"
              // if not, then you can leave the option out
              exclude: process.env.NODE_ENV === 'production' ? 'design-system' : null,
            }),
          }}
        />
      </>
    )
  })

  return (
    <NextThemeProvider
      skipNextHead
      // change default theme (system) here:
      // defaultTheme="light"
      onChangeTheme={(next) => {
        setTheme(next as any)
      }}
    >
      <TamaguiProvider config={tamaguiConfig} disableRootThemeClass defaultTheme={theme}>
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  )
}
```

----------------------------------------

TITLE: Add Pure JS Dependencies
DESCRIPTION: Instructions for adding JavaScript-only dependencies to the `packages/app` directory in a monorepo. This ensures the dependency is available across platforms.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/create-tamagui-app.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
cd packages/app
yarn add date-fns
cd ../..
yarn
```

----------------------------------------

TITLE: Tamagui v4 Configuration Object (JSON)
DESCRIPTION: A comprehensive Tamagui v4 configuration object detailing font families, line heights, weights, letter spacing, and font sizes for 'body' and 'heading' types. It also includes animation presets, media query breakpoints, and design tokens for spacing, sizing, radius, and z-index.

SOURCE: https://github.com/tamagui/tamagui/blob/main/library/config-v4.mdx#_snippet_1

LANGUAGE: json
CODE:
```
{
  "tamaguiConfig": {
    "fonts": {
      "body": {
        "family": "-apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif",
        "lineHeight": {
          "1": 21,
          "2": 22,
          "3": 23,
          "4": 24,
          "5": 26,
          "6": 28,
          "7": 30,
          "8": 33,
          "9": 40,
          "10": 56,
          "11": 65,
          "12": 72,
          "13": 82,
          "14": 102,
          "15": 124,
          "16": 144,
          "true": 24
        },
        "weight": { "true": "300" },
        "letterSpacing": { "true": 0 },
        "size": {
          "1": 11,
          "2": 12,
          "3": 13,
          "4": 14,
          "5": 16,
          "6": 18,
          "7": 20,
          "8": 23,
          "9": 30,
          "10": 46,
          "11": 55,
          "12": 62,
          "13": 72,
          "14": 92,
          "15": 114,
          "16": 134,
          "true": 14
        }
      },
      "heading": {
        "family": "-apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif",
        "lineHeight": {
          "1": 25.4,
          "2": 26.8,
          "3": 28.2,
          "4": 29.6,
          "5": 32.4,
          "6": 35.2,
          "7": 38,
          "8": 42.2,
          "9": 52,
          "10": 74.4,
          "11": 87,
          "12": 96.8,
          "13": 110.8,
          "14": 138.8,
          "15": 169.6,
          "16": 197.6,
          "true": 29.6
        },
        "weight": { "true": "300" },
        "letterSpacing": { "true": 0 },
        "size": {
          "1": 15.4,
          "2": 16.8,
          "3": 18.2,
          "4": 19.6,
          "5": 22.4,
          "6": 25.2,
          "7": 28,
          "8": 32.2,
          "9": 42,
          "10": 64.4,
          "11": 77,
          "12": 86.8,
          "13": 100.8,
          "14": 128.8,
          "15": 159.6,
          "16": 187.6,
          "true": 19.6
        }
      }
    },
    "animations": {
      "75ms": "ease-in 75ms",
      "100ms": "ease-in 100ms",
      "200ms": "ease-in 200ms",
      "bouncy": "ease-in 200ms",
      "superBouncy": "ease-in 500ms",
      "lazy": "ease-in 1000ms",
      "medium": "ease-in 300ms",
      "slow": "ease-in 500ms",
      "quick": "cubic-bezier(0.215, 0.610, 0.355, 1.000) 400ms",
      "quicker": "cubic-bezier(0.215, 0.610, 0.355, 1.000) 300ms",
      "quickest": "cubic-bezier(0.215, 0.610, 0.355, 1.000) 200ms",
      "tooltip": "ease-in 400ms"
    },
    "media": {
      "2xl": { "minWidth": 1536 },
      "xl": { "minWidth": 1280 },
      "lg": { "minWidth": 1024 },
      "md": { "minWidth": 768 },
      "sm": { "minWidth": 640 },
      "xs": { "minWidth": 460 },
      "2xs": { "minWidth": 340 }
    },
    "tokens": {
      "radius": {
        "$0": 0,
        "$1": 3,
        "$2": 5,
        "$3": 7,
        "$4": 9,
        "$5": 10,
        "$6": 16,
        "$7": 19,
        "$8": 22,
        "$9": 26,
        "$10": 34,
        "$11": 42,
        "$12": 50,
        "$true": 9
      },
      "zIndex": {
        "$0": 0,
        "$1": 100,
        "$2": 200,
        "$3": 300,
        "$4": 400,
        "$5": 500
      },
      "space": {
        "$0": 0,
        "$1": 2,
        "$2": 7,
        "$3": 13,
        "$4": 18,
        "$5": 24,
        "$6": 32,
        "$7": 39,
        "$8": 46,
        "$9": 53,
        "$10": 60,
        "$11": 74,
        "$12": 88,
        "$13": 102,
        "$14": 116,
        "$15": 130,
        "$16": 144,
        "$true": 18
      },
      "size": {
        "$0": 0,
        "$1": 20,
        "$2": 28,
        "$3": 36,
        "$4": 44,
        "$5": 52,
        "$6": 64,
        "$7": 74,
        "$8": 84,
        "$9": 94,
        "$10": 104,
        "$11": 124,
        "$12": 144,
        "$13": 164,
        "$14": 184,
        "$15": 204,
        "$16": 224,
        "$true": 44
      }
    },
    "settings": {
      "defaultFont": "body",
      "onlyAllowShorthands": true
    }
  }
}
```

----------------------------------------

TITLE: Demonstrate Tamagui Select Component Usage
DESCRIPTION: This snippet shows a complete example of implementing the Tamagui Select component. It includes setting up the trigger, value display, and content with scroll buttons and groups. Crucially, it demonstrates how to use `<Adapt when="maxMd" platform="touch">` with `<Sheet>` to render the Select as a modal sheet on smaller screens or touch devices, a common pattern for native mobile experiences.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/select/1.40.0.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
import { Select } from 'tamagui' // or '@tamagui/select'
import { Adapt, Sheet } from 'tamagui'

export default () => (
  <Select defaultValue="">
    <Select.Trigger>
      <Select.Value placeholder="Search..." />
    </Select.Trigger>

    <Adapt when="maxMd" platform="touch">
      {/* or <Select.Sheet> */}
      <Sheet>
        <Sheet.Frame>
          <Adapt.Contents />
        </Sheet.Frame>
        <Sheet.Overlay />
      </Sheet>
    </Adapt>

    <Select.Content>
      <Select.ScrollUpButton />
      <Select.Viewport>
        <Select.Group>
          <Select.Label />
          <Select.Item>
            <Select.ItemText />
          </Select.Item>
        </Select.Group>
      </Select.Viewport>
      <Select.ScrollDownButton />
    </Select.Content>
  </Select>
)
```

----------------------------------------

TITLE: Using Different Viewports
DESCRIPTION: Example of setting up and using multiple `ToastViewport` instances within a `ToastProvider`. Toasts can then be directed to specific viewports by name.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.15.15.mdx#_snippet_13

LANGUAGE: tsx
CODE:
```
const App = () => {
  return (
    <ToastProvider>
      <ToastViewport /> {/* default viewport */}
      <ToastViewport name="viewport-custom" />
    </ToastProvider>
  )
}

const MyComponent = () => { 
  return <Toast /> // default viewport
}

const MyComponent2 = () => {
  return <Toast viewportName="viewport-custom" />
}
```

----------------------------------------

TITLE: Tooltip Anatomy Example
DESCRIPTION: Demonstrates the basic structure and anatomy of a Tamagui Tooltip component. It shows how to compose the `Tooltip`, `Tooltip.Trigger`, `Tooltip.Content`, and `Tooltip.Arrow` components.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tooltip/1.105.0.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
import { Tooltip } from 'tamagui' // or '@tamagui/tooltip'

export default () => (
  <Tooltip>
    <Tooltip.Trigger />
    <Tooltip.Content>
      <Tooltip.Arrow />
      {/* ... */}
    </Tooltip.Content>
  </Tooltip>
)
```

----------------------------------------

TITLE: Tamagui Configuration
DESCRIPTION: Sets up the default Tamagui configuration file (`tamagui.config.ts`). It imports `defaultConfig`, creates a `createTamagui` instance, and extends `TamaguiCustomConfig` for custom type safety.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/next-js.mdx#_snippet_2

LANGUAGE: typescript
CODE:
```
import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui' // or '@tamagui/core'

const appConfig = createTamagui(defaultConfig)

export type AppConfig = typeof appConfig

declare module 'tamagui' {
  // or '@tamagui/core'
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig
```

----------------------------------------

TITLE: Tooltip Anatomy Example
DESCRIPTION: Demonstrates the basic structure and components required to implement a Tooltip, including Trigger, Content, and Arrow.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tooltip/1.122.0.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { Tooltip } from 'tamagui' // or '@tamagui/tooltip'

export default () => (
  <Tooltip>
    <Tooltip.Trigger />
    <Tooltip.Content>
      <Tooltip.Arrow />
      {/* ... */}
    </Tooltip.Content>
  </Tooltip>
)
```

----------------------------------------

TITLE: View Compilation Output (Bash)
DESCRIPTION: Shows an example of the compilation output you might see in your terminal when Tamagui processes your application files. It indicates the time taken and the number of optimized/flattened components.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/design-systems.mdx#_snippet_8

LANGUAGE: bash
CODE:
```
»                  app.tsx  16ms ׁ·    1 optimized · 1 flattened
```

----------------------------------------

TITLE: Tamagui Provider Setup
DESCRIPTION: Sets up the TamaguiProvider at the root of the React application. This provider is required for components like dialogs and popovers to function correctly by setting up the root portal.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/intro/1.0.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { createTamagui,TamaguiProvider, View } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v4' // for quick config install this

const config = createTamagui(defaultConfig)

export default () => (
  <TamaguiProvider config={config}>
    <View />
  </TamaguiProvider>
)
```

----------------------------------------

TITLE: Tamagui Animations
DESCRIPTION: Tamagui's animation system is pluggable, supporting drivers like CSS for web and Reanimated for native. The `animation` prop on components enables animations, and `enterStyle` provides styling for elements upon mounting.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/tamagui-enters-beta-themes-and-animations.mdx#_snippet_2

LANGUAGE: typescript
CODE:
```
import { styled } from '@tamagui/core';
import { View } from 'react-native';

const AnimatedBox = styled(View, {
  animation: 'bouncy',
  enterStyle: {
    opacity: 0,
    scale: 0.5,
  },
  // Other animation props like exitStyle, stateStyle can be added
});

// Usage:
// <AnimatedBox>
//   Hello Tamagui Animations!
// </AnimatedBox>

```

----------------------------------------

TITLE: Setup PortalProvider for Popover (TSX)
DESCRIPTION: Demonstrates how to set up the PortalProvider from '@tamagui/portal' for rendering Popover content into the root of the app. This is necessary when the popover is not rendered inline, especially when using `modal={true}` which is the default.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.110.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { PortalProvider } from '@tamagui/portal'
import YourApp from './components/YourApp'

function App() {
  return (
    <PortalProvider shouldAddRootHost>
      <YourApp />
    </PortalProvider>
  )
}

export default App
```

----------------------------------------

TITLE: Tamagui Configuration Settings
DESCRIPTION: Defines various configuration options for Tamagui, controlling aspects like theme switching, styling behavior, and CSS generation.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/config-v4.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
TamaguiSettings:
  mediaQueryDefaultActive: See Media
    Description: Configures default active media queries.
  defaultFont: body
    Description: Sets the default font for the application.
  fastSchemeChange: true
    Description: On iOS, leverages DynamicColorIOS for fast light/dark theme changes.
  shouldAddPrefersColorThemes: true
    Description: Generates CSS for prefers-color-scheme, ensuring proper light/dark styling even with JS disabled.
  allowedStyleDescriptions: "somewhat-strict-web"
    Description: More strict than a plain string, allows web-only style descriptions like vh, vw.
  themeClassNameOnRoot: true
    Description: Defaults to applying the root theme className to the root html tag, enabling CSS variable usage on the body tag.
  onlyAllowShorthands: true
    Description: For any defined shorthand, removes the types for the longhand property.
  maxDarkLightNesting: 1
    Description: Limits dark/light theme nesting to once to save CSS and bundle size; recommends using black/white themes instead.
```

----------------------------------------

TITLE: Tamagui v4 Default Configuration
DESCRIPTION: Demonstrates how to use the `defaultConfig` from `@tamagui/config/v4` to create a Tamagui instance. It imports necessary functions and sets up custom type declarations for enhanced TypeScript support. This is the recommended starting point for new Tamagui projects.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/config-v4.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'

export const config = createTamagui(defaultConfig)

type CustomConfig = typeof config

// ensure types work
declare module 'tamagui' {
  interface TamaguiCustomConfig extends CustomConfig {}
}
```

----------------------------------------

TITLE: NextThemeProvider Component Props
DESCRIPTION: Defines the properties available for the NextThemeProvider component, controlling theme behavior, system preferences, and storage.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/next-js.mdx#_snippet_22

LANGUAGE: APIDOC
CODE:
```
NextThemeProvider:
  Props:
    skipNextHead: boolean (optional)
      Description: Required in app router. The internal usage of next/head is not supported in the app directory, so you need to add it.
    enableSystem: boolean (optional)
      Description: Whether to switch between dark and light themes based on prefers-color-scheme.
    defaultTheme: string (optional)
      Description: If enableSystem is `false`, the default theme is light. Default theme name (for v0.0.12 and lower the default was light).
    forcedTheme: string (optional)
      Description: Forced theme name for the current page.
    onChangeTheme: (name: string) => void (optional)
      Description: Used to change the current theme. The function receives the theme name as a parameter.
    systemTheme: string (optional)
      Description: System theme name for the current page.
    enableColorScheme: boolean (optional)
      Description: Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons.
    disableTransitionOnChange: boolean (optional)
      Description: Disable all CSS transitions when switching themes.
    storageKey: string (optional)
      Description: Key used to store theme setting in localStorage.
    themes: string[] (optional)
      Description: List of all available theme names.
    value: ValueObject (optional)
      Description: Mapping of theme name to HTML attribute value. Object where key is the theme name and value is the attribute value.
```

----------------------------------------

TITLE: Dialog Sheet Integration Example
DESCRIPTION: Demonstrates how to integrate Dialog.Sheet with Adapt to render dialogs as sheets on smaller screens. It shows the structure for content placement within Sheet.Frame and the use of Adapt.Contents.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/dialog/1.0.0.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
import { Dialog } from 'tamagui' // or '@tamagui/dialog'

export default () => (
  <Dialog>
    <Dialog.Trigger />

    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title />
        <Dialog.Description />
        <Dialog.Close />
        {/* ... */}
      </Dialog.Content>
    </Dialog.Portal>

    {/* optionally change to sheet when small screen */}
    <Dialog.Adapt when="maxMd">
      <Dialog.Sheet>
        <Dialog.Sheet.Frame>
          <Dialog.Adapt.Contents />
        </Dialog.Sheet.Frame>
        <Dialog.Sheet.Overlay />
      </Dialog.Sheet>
    </Dialog.Adapt>
  </Dialog>
)
```

----------------------------------------

TITLE: Label Component Example
DESCRIPTION: Demonstrates the updated Label component, designed to work seamlessly with various form inputs. This snippet shows its integration.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/version-one.mdx#_snippet_9

LANGUAGE: tsx
CODE:
```
```tsx hero template=Label

```
```

----------------------------------------

TITLE: Tamagui Tabs Advanced Animations Example
DESCRIPTION: Illustrates advanced animation possibilities with the Tabs component, leveraging `AnimatePresence` and the `onInteraction` prop on `Tabs.Trigger` for custom indicators and transitions.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tabs/1.7.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<TabsAdvancedDemo />
```

----------------------------------------

TITLE: Tamagui Shapes Usage Example
DESCRIPTION: Demonstrates importing and using Square and Circle components from Tamagui. It shows how to apply sizes using tokens or plain numbers.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/shapes/1.0.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { Circle, Square } from 'tamagui'

export default () => (
  <>
    <Square size="$4" />
    <Square size={100} />
    <Circle size="$4" />
    <Circle size={100} />
  </>
)
```

----------------------------------------

TITLE: Popover Anatomy and Usage Example (TSX)
DESCRIPTION: Illustrates the basic structure and components of a Tamagui Popover, including Trigger, Content, Arrow, and Close. It also shows how to use Adapt for responsive behavior, switching to a sheet on smaller screens.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.110.0.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { Popover, Adapt } from 'tamagui' // or '@tamagui/popover'

export default () => (
  <Popover>
    <Popover.Trigger />

    <Popover.Content>
      <Popover.Arrow />
      <Popover.Close />
      {/* ScrollView is optional, can just put any contents inside if not scrollable */}
      <Popover.ScrollView>{/* ... */}</Popover.ScrollView>
      {/* ... */}
    </Popover.Content>

    {/* optionally change to sheet when small screen */}
    {/* you can also use <Popover.Adapt /> */}
    <Adapt when="maxMd">
      <Popover.Sheet>
        <Popover.Sheet.Overlay />
        <Popover.Sheet.Frame>
          <Popover.Sheet.ScrollView>
            <Adapt.Contents />
          </Popover.Sheet.ScrollView>
        </Popover.Sheet.Frame>
      </Popover.Sheet>
    </Adapt>
  </Popover>
)
```

----------------------------------------

TITLE: useTheme with .get() and .val Access
DESCRIPTION: Shows advanced usage of `useTheme` with the `.get()` and `.val` methods on theme Variables. `.get()` provides optimized access, while `.val` retrieves the raw value directly. This example highlights how to use these for styling external components.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/use-theme.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { Stack, useTheme } from '@tamagui/core'
import { SomeExternalComponent } from 'some-external-component'

const App = () => {
  const theme = useTheme()

  // Optimized access (CSS var on web, raw value on native)
  const background = theme.background.get()

  // Direct raw value access
  const backgroundValue = theme.background.val

  return (
    <SomeExternalComponent
      style={{
        backgroundColor: background,
      }}
    />
  )
}
```

----------------------------------------

TITLE: Popover Anatomy Example
DESCRIPTION: Demonstrates the basic structure and components of a Tamagui Popover, including Trigger, Content, Arrow, Close, ScrollView, and Adapt for responsive behavior.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.0.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { Popover } from 'tamagui' // or '@tamagui/popover'

export default () => (
  <Popover>
    <Popover.Trigger />

    <Popover.Content>
      <Popover.Arrow />
      <Popover.Close />
      {/* ScrollView is optional, can just put any contents inside if not scrollable */}
      <Popover.ScrollView>{/* ... */}</Popover.ScrollView>
      {/* ... */}
    </Popover.Content>

    {/* optionally change to sheet when small screen */}
    <Popover.Adapt when="maxMd">
      <Popover.Sheet>
        <Popover.Sheet.Overlay />
        <Popover.Sheet.Frame>
          <Popover.Sheet.ScrollView>
            <Popover.Adapt.Contents />
          </Popover.Sheet.ScrollView>
        </Popover.Sheet.Frame>
      </Popover.Sheet>
    </Popover.Adapt>
  </Popover>
)
```

----------------------------------------

TITLE: Tamagui Tabs Basic Usage
DESCRIPTION: Demonstrates the basic implementation of the Tamagui Tabs component, including setting up tabs, lists, and content panes. It shows how to manage tab state using `defaultValue` and `value` props.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tabs/1.7.0.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { SizableText, Tabs } from 'tamagui'

export default () => (
  <Tabs defaultValue="tab1" width={400}>
    <Tabs.List space>
      <Tabs.Tab value="tab1">
        <SizableText>Tab 1</SizableText>
      </Tabs.Tab>
      <Tabs.Tab value="tab2">
        <SizableText>Tab 2</SizableText>
      </Tabs.Tab>
    </Tabs.List>

    <Tabs.Content value="tab1">
      <H5>Tab 1</H5>
    </Tabs.Content>
    <Tabs.Content value="tab2">
      <H5>Tab 2</H5>
    </Tabs.Content>
  </Tabs>
)
```

----------------------------------------

TITLE: Basic Tabs Usage
DESCRIPTION: Example demonstrating how to use the Tabs component with its List and Content sub-components. It shows how to define tabs and their associated content, managing state with `defaultValue`.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tabs/1.125.35.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { SizableText, Tabs } from "tamagui";

export default () => (
  <Tabs defaultValue="tab1" width={400}>
    <Tabs.List space>
      <Tabs.Tab value="tab1">
        <SizableText>Tab 1</SizableText>
      </Tabs.Tab>
      <Tabs.Tab value="tab2">
        <SizableText>Tab 2</SizableText>
      </Tabs.Tab>
    </Tabs.List>

    <Tabs.Content value="tab1">
      <H5>Tab 1</H5>
    </Tabs.Content>
    <Tabs.Content value="tab2">
      <H5>Tab 2</H5>
    </Tabs.Content>
  </Tabs>
);
```

----------------------------------------

TITLE: Tamagui Dialog Basic Structure and Sheet Adaptation Example (TSX)
DESCRIPTION: Demonstrates the fundamental structure of a Tamagui Dialog, including its trigger, portal, overlay, content, title, description, and close buttons. It also shows how to adapt the dialog to render as a sheet on smaller screens using Dialog.Adapt and Dialog.Sheet.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/dialog/1.131.0.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
import { Dialog } from 'tamagui' // or '@tamagui/dialog'

export default () => (
  <Dialog>
    <Dialog.Trigger />

    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title />
        <Dialog.Description />
        <Dialog.Close />
        {/* ... */}
      </Dialog.Content>
    </Dialog.Portal>

    {/* optionally change to sheet when small screen */}
    <Dialog.Adapt when="maxMd">
      <Dialog.Sheet>
        <Dialog.Sheet.Frame>
          <Dialog.Adapt.Contents />
        </Dialog.Sheet.Frame>
        <Dialog.Sheet.Overlay />
      </Dialog.Sheet>
    </Dialog.Adapt>
  </Dialog>
)
```

----------------------------------------

TITLE: Tamagui createThemes Configuration Example
DESCRIPTION: This snippet demonstrates the configuration of Tamagui's `createThemes` function. It defines custom palettes, shadows, and child themes for light, dark, and accent variations, along with default component themes. The output is a `TamaguiThemes` type.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/config-v4.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import * as Colors from '@tamagui/colors'
import { createThemes, defaultComponentThemes } from '@tamagui/config/v4'

const darkPalette = [
  '#050505',
  '#151515',
  '#191919',
  '#232323',
  '#282828',
  '#323232',
  '#424242',
  '#494949',
  '#545454',
  '#626262',
  '#a5a5a5',
  '#fff',
]

const lightPalette = [
  '#fff',
  '#f8f8f8',
  'hsl(0, 0%, 96.3%)',
  'hsl(0, 0%, 94.1%)',
  'hsl(0, 0%, 92.0%)',
  'hsl(0, 0%, 90.0%)',
  'hsl(0, 0%, 88.5%)',
  'hsl(0, 0%, 81.0%)',
  'hsl(0, 0%, 56.1%)',
  'hsl(0, 0%, 50.3%)',
  'hsl(0, 0%, 42.5%)',
  'hsl(0, 0%, 9.0%)',
]

const lightShadows = {
  shadow1: 'rgba(0,0,0,0.04)',
  shadow2: 'rgba(0,0,0,0.08)',
  shadow3: 'rgba(0,0,0,0.16)',
  shadow4: 'rgba(0,0,0,0.24)',
  shadow5: 'rgba(0,0,0,0.32)',
  shadow6: 'rgba(0,0,0,0.4)',
}

const darkShadows = {
  shadow1: 'rgba(0,0,0,0.2)',
  shadow2: 'rgba(0,0,0,0.3)',
  shadow3: 'rgba(0,0,0,0.4)',
  shadow4: 'rgba(0,0,0,0.5)',
  shadow5: 'rgba(0,0,0,0.6)',
  shadow6: 'rgba(0,0,0,0.7)',
}

const extraColors = {
  black1: darkPalette[0],
  black2: darkPalette[1],
  black3: darkPalette[2],
  black4: darkPalette[3],
  black5: darkPalette[4],
  black6: darkPalette[5],
  black7: darkPalette[6],
  black8: darkPalette[7],
  black9: darkPalette[8],
  black10: darkPalette[9],
  black11: darkPalette[10],
  black12: darkPalette[11],
  white1: lightPalette[0],
  white2: lightPalette[1],
  white3: lightPalette[2],
  white4: lightPalette[3],
  white5: lightPalette[4],
  white6: lightPalette[5],
  white7: lightPalette[6],
  white8: lightPalette[7],
  white9: lightPalette[8],
  white10: lightPalette[9],
  white11: lightPalette[10],
  white12: lightPalette[11],
}

const generatedThemes = createThemes({
  componentThemes: defaultComponentThemes,
  
  base: {
    palette: {
      dark: darkPalette,
      light: lightPalette,
    },

    // for values we don't want being inherited onto sub-themes
    extra: {
      light: {
        ...Colors.blue,
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...lightShadows,
        ...extraColors,
        shadowColor: lightShadows.shadow1,
      },
      dark: {
        ...Colors.blueDark,
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...darkShadows,
        ...extraColors,
        shadowColor: darkShadows.shadow1,
      },
    },
  },

  // inverse accent theme
  accent: {
    palette: {
      dark: lightPalette,
      light: darkPalette,
    },
  },

  childrenThemes: {
    blue: {
      palette: {
        dark: Object.values(Colors.blueDark),
        light: Object.values(Colors.blue),
      },
    },
    red: {
      palette: {
        dark: Object.values(Colors.redDark),
        light: Object.values(Colors.red),
      },
    },
    yellow: {
      palette: {
        dark: Object.values(Colors.yellowDark),
        light: Object.values(Colors.yellow),
      },
    },
    green: {
      palette: {
        dark: Object.values(Colors.greenDark),
        light: Object.values(Colors.green),
      },
    },
  },
})

export type TamaguiThemes = typeof generatedThemes

/**
 * This is an optional production optimization: themes JS can get to 20Kb or more.
 * Tamagui has ~1Kb of logic to hydrate themes from CSS, so you can remove the JS.
 * So long as you server render your Tamagui CSS, this will save you bundle size:
 */
export const themes: TamaguiThemes =
  process.env.TAMAGUI_ENVIRONMENT === 'client' &&
  process.env.NODE_ENV === 'production'
    ? {}
    : (generatedThemes as any)

```

----------------------------------------

TITLE: Tamagui UI Kit
DESCRIPTION: A comprehensive, batteries-included UI Kit built on top of Tamagui core, offering easy-to-use universal components for rapid development.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/introducing-tamagui.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
Package: tamagui

Description: A universal UI Kit that extends @tamagui/core with pre-built, customizable components.

Features:
- Provides a rich set of UI components (e.g., Buttons, Inputs, Layouts).
- Leverages core's styling, theming, and responsiveness.
- Designed for seamless integration between web and native.

Usage:
- Import and use components directly in your React/React Native application.

Related:
- @tamagui/core (Core primitives)
- @tamagui/static (Optimizing Compiler)
```

----------------------------------------

TITLE: Tamagui Hover Style Animation Example
DESCRIPTION: Demonstrates animating the hoverStyle prop in Tamagui, showing how animation presets like 'slow' can be applied to style changes on hover.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/animations.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
import { AnimationsHoverDemo } from 'tamagui'

<AnimationsHoverDemo />
```

----------------------------------------

TITLE: Imperative API Usage
DESCRIPTION: Demonstrates the imperative API for showing toasts, including native support setup and usage with `useToast` hook. Requires `burnt` for native functionality.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.9.1.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { Button } from 'tamagui' // or '@tamagui/button'
import { Toast, ToastImperativeProvider, ToastProvider, useToast } from 'tamagui' // or '@tamagui/toast'

const options = { native: 'mobile' }

export default () => (
  <ToastProvider>
    <ToastImperativeProvider options={options}>
      <CurrentToast />
      <MyPage />
    </ToastImperativeProvider>

    <ToastViewport />
  </ToastProvider>
)

const CurrentToast = () => {
  const { currentToast } = useToast()

  // only show the component if it's present and not handled by native toast
  if (!currentToast || currentToast.isHandledNatively) return null
  return (
    <Toast key={currentToast.id}>
      <Toast.Title>{currentToast.title}</Toast.Title>
      <Toast.Description>{currentToast.message}</Toast.Description>
    </Toast>
  )
}

const MyPage = () => {
  const { show } = useToast()

  return (
    <Button onPress={() => show('Done!', { message: 'Form submitted successfully.' })}>
      Show Toast
    </Button>
  )
}
```

----------------------------------------

TITLE: Tamagui Compiler Plugin Options
DESCRIPTION: Details the configuration props accepted by Tamagui compiler plugins. Each prop specifies a setting for how the Tamagui compiler should process your project, including paths, feature toggles, and optimization settings.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/intro/compiler-install.mdx#_snippet_8

LANGUAGE: APIDOC
CODE:
```
TamaguiCompilerPluginOptions:
  description: "Options for Tamagui compiler plugins."
  properties:
    config:
      type: string
      required: true
      description: "Relative path to your tamagui.config.ts file which should export default the result from createTamagui."
    components:
      type: string[]
      required: false
      default: "['tamagui']"
      description: "Array of npm modules containing Tamagui components which you'll be using in your app. For example: if you are using the base Tamagui components. This directs the compiler to load and optimize."
    importsWhitelist:
      type: string[]
      required: false
      description: "Array of whitelisted file paths (always end in .js) which the compiler may try and import and parse at build-time. It is normalized to \".js\" ending for all file extensions (js, jsx, tsx, ts). This usually should be set to something like ['constants.js', 'colors.js'] for example, where you have a couple mostly static files of constants that are used as default values for styles."
    logTimings:
      type: boolean
      required: false
      default: "true"
      description: "Tamagui outputs information for each file it compiles on how long it took to run, how many components it optimized, and how many it flattened. Set to false to disable these logs."
    disable:
      type: boolean
      required: false
      default: "false"
      description: "Disable everything - debug and extraction."
    disableExtraction:
      type: boolean
      required: false
      default: "false"
      description: "Disable extraction to CSS completely, instead fully relying on runtime. Setting this to true speed up development as generally your app will hot reload the Tamagui configuration itself."
    disableDebugAttr:
      type: boolean
      required: false
      default: "false"
      description: "If enabled along with disableExtraction, all parsing will turn off. Normally turning off disableExtraction will keep the helpful debug attributes in DOM."
    disableFlattening:
      type: boolean
      required: false
      default: "false"
      description: "Turns off tree-flattening."
    enableDynamicEvaluation:
      type: boolean
      required: false
      default: "false"
      description: "(Experimental) Enables further extracting of any styled component, even if not in your components. See below for more information."
    experimentalFlattenThemesOnNative:
      type: boolean
      required: false
      default: "false"
      description: "(Experimental) Enables further extracting of components that use theme values on native."
```

----------------------------------------

TITLE: Enable Tamagui Web Support in Metro
DESCRIPTION: Adjusts the Metro configuration to integrate Tamagui's web support. This involves using the `@tamagui/metro-plugin` to enable the optimizing compiler and CSS extraction for web builds.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/metro.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
})

// add nice web support with optimizing compiler + CSS extraction
const { withTamagui } = require('@tamagui/metro-plugin')
module.exports = withTamagui(config, {
  components: ['tamagui'],
  config: './tamagui.config.ts',
  outputCSS: './tamagui-web.css',
})
```

----------------------------------------

TITLE: Add Tamagui Next Plugin
DESCRIPTION: Command to add the `@tamagui/next-plugin` dependency to your project using yarn. This plugin is crucial for Tamagui's integration with Next.js.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/next-js.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
yarn add @tamagui/next-plugin
```

----------------------------------------

TITLE: Check Legacy Bento Access
DESCRIPTION: Example of querying the `product_ownership` table to check for legacy Bento access for a specific user and product. Uses Supabase client.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/doc/subcriptions.md#_snippet_6

LANGUAGE: typescript
CODE:
```
// Check legacy 🍱 Bento access
const { data: ownership } = await supabase
  .from('product_ownership')
  .select('*')
  .eq('user_id', userId)
  .eq('product_id', BENTO_PRODUCT_ID)
```

----------------------------------------

TITLE: Build Web Application for Production
DESCRIPTION: Builds the Tamagui web application for production deployment. This command optimizes assets and generates static files ready for serving.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/sandbox/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
yarn build:web
```

----------------------------------------

TITLE: Sheet Anatomy Example
DESCRIPTION: Demonstrates the basic structure and import statement for using the Tamagui Sheet component and its sub-components like Overlay, Handle, and Frame.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/sheet/1.9.18.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { Sheet } from 'tamagui' // or '@tamagui/sheet'

export default () => (
  <Sheet>
    <Sheet.Overlay />
    <Sheet.Handle />
    <Sheet.Frame>
      {/* ...inner contents */}
    </Sheet.Frame>
  </Sheet>
)
```

----------------------------------------

TITLE: Generated CSS Styles for Conditional Styling
DESCRIPTION: Presents the CSS generated by Tamagui's compiler for the `useTheme` and `useMedia` example. It includes media queries and specific class names to apply styles conditionally based on screen size and theme properties.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/use-theme.mdx#_snippet_5

LANGUAGE: css
CODE:
```
._alignItems-1oszu61 {
  -ms-flex-align: stretch;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  align-items: stretch;
}
._boxSizing-deolkf {
  box-sizing: border-box;
}
._display-6koalj {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
._flexBasis-1mlwlqe {
  -ms-flex-preferred-size: auto;
  -webkit-flex-basis: auto;
  flex-basis: auto;
}
._flexDirection-eqz5dr {
  -ms-flex-direction: column;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  flex-direction: column;
}
._flexShrink-1q142lx {
  -ms-flex-negative: 0;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
}
@media (max-width: 860px) {
  :root:root ._transform-_sm_1exagq {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
}
@media not all and (max-width: 860px) {
  :root:root ._transform-_sm0_1wpzndr {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}
@media (min-width: 1120px) {
  :root:root:root ._backgroundColor-_lg_no4z4g {
    background-color: var(--red);
  }
}
@media not all and (min-width: 1120px) {
  :root:root:root ._backgroundColor-_lg0_1qoifqd {
    background-color: var(--blue);
  }
}
@media (min-width: 1280px) {
  :root:root:root:root ._transform-_xl_gqa6p0 {
    -webkit-transform: translateY(var(--space2));
    transform: translateY(var(--space2));
  }
}
```

----------------------------------------

TITLE: Toast Component Usage Example
DESCRIPTION: Demonstrates how to use the Toast component within a ToastProvider, including showing toasts with a controller and handling native toast integration. It shows how to set up the provider, display toasts, and manage their visibility.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.13.0.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { Toast, ToastProvider, useToastController, useToastState } from '@tamagui/toast'
import { Button } from 'tamagui' // or '@tamagui/button'

export default () => (
  <ToastProvider native={['mobile']}>
    <CurrentToast />
    <MyPage />
    <ToastViewport />
  </ToastProvider>
)

const CurrentToast = () => {
  const toast = useToastState()

  // only show the component if it's present and not handled by native toast
  if (!toast || toast.isHandledNatively) {
    return null
  }

  return (
    <Toast key={toast.id}>
      <Toast.Title>{toast.title}</Toast.Title>
      <Toast.Description>{toast.message}</Toast.Description>
    </Toast>
  )
}

const MyPage = () => {
  const { show } = useToastController()

  return (
    <Button onPress={() => show('Done!', { message: 'Form submitted successfully.' })}>
      Show Toast
    </Button>
  )
}
```

----------------------------------------

TITLE: Tamagui Testing Documentation
DESCRIPTION: Recommends creating a dedicated documentation page for testing Tamagui components and features.

SOURCE: https://github.com/tamagui/tamagui/blob/main/next.md#_snippet_41

LANGUAGE: javascript
CODE:
```
we should add a docs page on testing tamagui:
```

----------------------------------------

TITLE: Tamagui styled() for Reusable Components
DESCRIPTION: Shows how to use the `styled()` Higher-Order Component with Tamagui's `View` to create reusable custom components like `Circle`. This example defines variants for positioning, centering, and sizing.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/stack-and-text.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { View, styled } from 'tamagui' // or '@tamagui/core'

export const Circle = styled(View, {
  borderRadius: 100_000_000,

  variants: {
    pin: {
      top: {
        position: 'absolute',
        top: 0,
      },
    },

    centered: {
      true: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },

    size: {
      '...size': (size, { tokens }) => {
        return {
          width: tokens.size[size] ?? size,
          height: tokens.size[size] ?? size,
        }
      },
    },
  } as const,
})
```

----------------------------------------

TITLE: Compiled Web Output for Conditional Styling
DESCRIPTION: Shows the compiled output for the `useTheme` and `useMedia` example when targeting the web. It demonstrates how Tamagui's compiler generates CSS class names for optimized rendering.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/use-theme.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
const _cn =
  ' _alignItems-1oszu61 _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx _transform-_sm_1exagq _transform-_sm0_1wpzndr _backgroundColor-_lg_no4z4g _backgroundColor-_lg0_1qoifqd _transform-_xl_gqa6p0'

import { YStack, useMedia, useTheme } from 'tamagui'

const App = () => {
  return <div className={_cn} />
}
```

----------------------------------------

TITLE: Install Tamagui Avatar
DESCRIPTION: Installs the Tamagui Avatar package using npm. This command is used to add the avatar component to your project dependencies.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/avatar/1.0.0.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @tamagui/avatar
```

----------------------------------------

TITLE: CLI Command for Theme Generation
DESCRIPTION: Provides the command-line interface (CLI) command using `@tamagui/cli` to generate themes. This offers an alternative to compiler configuration for automating the theme building process from an input file to an output file.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/theme-builder.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
npx @tamagui/cli generate-themes ./src/themes-in.ts ./src/themes-out.ts
```

----------------------------------------

TITLE: Tamagui Token Retrieval Example
DESCRIPTION: Example TypeScript signature for retrieving all parsed Tamagui tokens. This function returns the complete token configuration object.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/exports.mdx#_snippet_10

LANGUAGE: typescript
CODE:
```
;() => TokensParsed
```

----------------------------------------

TITLE: Select.Sheet Usage Example
DESCRIPTION: Demonstrates how to use Select.Sheet with Adapt to render the Select component as a native sheet on mobile devices. It requires specific nesting of Adapt.Contents within Sheet.Frame.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/select/1.128.0.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
import { Select } from 'tamagui' // or '@tamagui/select'
import { Adapt, Sheet } from 'tamagui'

export default () => (
  <Select defaultValue="">
    <Select.Trigger>
      <Select.Value placeholder="Search..." />
    </Select.Trigger>

    <Adapt when="maxMd" platform="touch">
      {/* or <Select.Sheet> */}
      <Sheet>
        <Sheet.Frame>
          <Adapt.Contents />
        </Sheet.Frame>
        <Sheet.Overlay />
      </Sheet>
    </Adapt>

    <Select.Content>
      <Select.ScrollUpButton />
      <Select.Viewport>
        <Select.Group>
          <Select.Label />
          <Select.Item>
            <Select.ItemText />
          </Select.Item>
        </Select.Group>
      </Select.Viewport>
      <Select.ScrollDownButton />
    </Select.Content>
  </Select>
)
```

----------------------------------------

TITLE: Setup Theming with Color Scheme (App Layout TSX)
DESCRIPTION: Configures Tamagui's theming to dynamically adapt to the system's color scheme (light/dark mode) using React Native's `useColorScheme` hook. The `defaultTheme` and `Theme` component are used for this integration.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/one.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import { TamaguiProvider, Theme } from 'tamagui'
import { Slot } from 'one'
import { useColorScheme } from 'react-native'
import config from '../tamagui.config'

export default function Layout() {
  const colorScheme = useColorScheme()

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme}>
      <Theme name={colorScheme}>
        <Slot />
      </Theme>
    </TamaguiProvider>
  )
}
```

----------------------------------------

TITLE: Tamagui SSR Safe Styled Context
DESCRIPTION: An example of creating a Server-Side Rendering (SSR) safe styled context in Tamagui, managing state like `isVertical` across renders.

SOURCE: https://github.com/tamagui/tamagui/blob/main/next.md#_snippet_18

LANGUAGE: javascript
CODE:
```
const Context = createStyledContext({
  isVertical: {
    $sm: true,
    $gtSm: false,
  },
})
```

----------------------------------------

TITLE: Tamagui Plugin Setup for react-native-web-lite
DESCRIPTION: Instructions for enabling react-native-web-lite within Tamagui's Next.js and Vite plugins. This involves setting a specific option to automatically configure the necessary aliases and settings.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/packages/react-native-web-lite/README.md#_snippet_0

LANGUAGE: javascript
CODE:
```
import { tamaguiPlugin } from '@tamagui/next-plugin';

export default {
  // ... other Next.js config
  plugins: [
    tamaguiPlugin({
      // ... other tamaguiPlugin options
      useReactNativeWebLite: true
    })
  ]
};
```

LANGUAGE: javascript
CODE:
```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tamaguiPlugin } from '@tamagui/vite-plugin';

export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin({
      // ... other tamaguiPlugin options
      useReactNativeWebLite: true
    })
  ]
});
```

----------------------------------------

TITLE: Create NextTamaguiProvider for App Directory
DESCRIPTION: A React component that wraps the application with TamaguiProvider and NextThemeProvider. It handles server-inserted styles using `useServerInsertedHTML` and includes necessary imports and configurations for the App Router.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/next-js.mdx#_snippet_13

LANGUAGE: tsx
CODE:
```
'use client'

import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'

import { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { useServerInsertedHTML } from 'next/navigation'
import { NextThemeProvider } from '@tamagui/next-theme'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '../tamagui.config'

export const NextTamaguiProvider = ({ children }: { children: ReactNode }) => {

  useServerInsertedHTML(() => {
    // @ts-ignore
    const rnwStyle = StyleSheet.getSheet()
    return (
      <>
        <style
          dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
          id={rnwStyle.id}
        />
        <style
          dangerouslySetInnerHTML={{
            // the first time this runs you'll get the full CSS including all themes
            // after that, it will only return CSS generated since the last call
            __html: tamaguiConfig.getNewCSS(),
          }}
        />
      </>
    )
  })

  return (
    <NextThemeProvider skipNextHead>
      <TamaguiProvider config={tamaguiConfig} disableRootThemeClass>
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  )
}
```

----------------------------------------

TITLE: Basic Image Usage with Tamagui Props
DESCRIPTION: Example of using the Tamagui Image component. It demonstrates setting the `source` prop with image dimensions and URI, and applying Tamagui style props like `width` and `height`.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/image/1.13.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
export default () => (
  <Image
    source={{ width: 200, height: 200, uri: 'https://...' }}
    width="100%"
    height="100%"
  />
)
```

----------------------------------------

TITLE: Setup PortalProvider for AlertDialog
DESCRIPTION: Configures the root of your application with PortalProvider to enable independent use of Tamagui components like AlertDialog. This is crucial when using components that render outside the component tree, such as dialogs or modals.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/alert-dialog/1.0.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { PortalProvider } from '@tamagui/portal'
import YourApp from './components/YourApp'

function App() {
  return (
    <PortalProvider shouldAddRootHost>
      <YourApp />
    </PortalProvider>
  )
}

export default App
```

----------------------------------------

TITLE: Tamagui Font Insertion Example
DESCRIPTION: Example TypeScript type definition for inserting a font into Tamagui. It shows the expected input and output types for the `insertFont` function.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/exports.mdx#_snippet_7

LANGUAGE: typescript
CODE:
```
type insertFont = (
  name: string,
  fontIn: GenericFont
) => ParsedFont
```

----------------------------------------

TITLE: Tamagui Shorthands Configuration (JavaScript)
DESCRIPTION: Defines CSS property shorthands for Tamagui, mapping abbreviated keys like 'b' for 'bottom' or 'bg' for 'backgroundColor' to their full CSS equivalents. This allows for more concise styling in Tamagui components.

SOURCE: https://github.com/tamagui/tamagui/blob/main/library/config-v4.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
{
  // text
  text: 'textAlign',

  // view
  b: 'bottom',
  bg: 'backgroundColor',
  content: 'alignContent',
  grow: 'flexGrow',
  items: 'alignItems',
  justify: 'justifyContent',
  l: 'left',
  m: 'margin',
  maxH: 'maxHeight',
  maxW: 'maxWidth',
  mb: 'marginBottom',
  minH: 'minHeight',
  minW: 'minWidth',
  ml: 'marginLeft',
  mr: 'marginRight',
  mt: 'marginTop',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  p: 'padding',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  pt: 'paddingTop',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  r: 'right',
  rounded: 'borderRadius',
  select: 'userSelect',
  self: 'alignSelf',
  shrink: 'flexShrink',
  t: 'top',
  z: 'zIndex',
}
```

----------------------------------------

TITLE: Define Tamagui Button Components
DESCRIPTION: Defines base `ButtonFrame` and `ButtonText` components using Tamagui's `styled` function. Includes examples of defining variants for dynamic styling based on props like `size`.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/how-to-build-a-button.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
import { Text, View } from 'react-native'
import { styled } from '@tamagui/core'

const ButtonFrame = styled(View, {
  name: 'ButtonFrame',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  borderRadius: 3,
  padding: '$4',
  backgroundColor: '$background',

  variants: {
    size: {
      '...fontSize': (name, { font }) => {
        return {
          paddingVertical: font?.size[name] * 0.5,
          borderRadius: tokens.radius[name],
          gap: tokens.space[name].val * 0.2,
        }
      },
    },
  } as const,
})

export const ButtonText = styled(Text, {
  name: 'ButtonText',
  color: '$color',
  userSelect: 'none',

  variants: {
    size: {
      '...fontSize': (name, { font }) => ({
        fontSize: font?.size[name],
      }),
    },
  } as const,
})
```

----------------------------------------

TITLE: Tamagui Configuration with createTamagui
DESCRIPTION: Demonstrates how to configure Tamagui using `createTamagui` from '@tamagui/core'. This includes defining tokens (size, space, radius, color), themes (light, dark), media queries, shorthands, and settings like `disableSSR`. It also shows how to retrieve the config and declare custom types for TypeScript.

SOURCE: https://github.com/tamagui/tamagui/blob/main/library/tamagui.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
import { createTamagui, getConfig } from '@tamagui/core'

export const config = createTamagui({
  // act like CSS variables at your root
  tokens: {
    // width="$sm"
    size: { sm: 8, md: 12, lg: 20 },
    // margin="$-sm"
    space: { '-sm': 8 },
    // radius="$none"
    radius: { none: 0, sm: 3 },
    color: { white: '#fff', black: '#000' },
  },

  themes: {
    light: {
      bg: '#f2f2f2',
      color: '#fff',
    },
    dark: {
      bg: '#111',
      color: '#000',
    },
  },

  // media query definitions can be used to style,
  // but also can be used with "groups" to do container queries by size:
  media: {
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },

  shorthands: {
    // <View px={20} />
    px: 'paddingHorizontal',
  },

  settings: {
    disableSSR: true, // for client-side apps gains a bit of performance
    allowedStyleValues: 'somewhat-strict-web', // if targeting only web
  },
})

// in other files use this:
console.log(`config is`, getConfig())

// get typescript types on @tamagui/core imports:
type AppConfig = typeof config
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}
```

----------------------------------------

TITLE: Manual Toast Rendering (Without Hooks)
DESCRIPTION: Example of rendering a single toast manually without using hooks, controlled via component state (`open`, `setOpen`). This method does not support native toasts.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.15.15.mdx#_snippet_15

LANGUAGE: tsx
CODE:
```
import React, { useState, useRef, useEffect } from 'react'
import { Button, YStack, Toast, ToastTitle, ToastDescription } from 'tamagui'

export default () => {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <YStack ai="center">
      <Button
        onPress={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 150)
        }}
      >
        Single Toast
      </Button>
      <Toast
        onOpenChange={setOpen}
        open={open}
        animation="100ms"
        enterStyle={{ x: -20, opacity: 0 }}
        exitStyle={{ x: -20, opacity: 0 }}
        opacity={1}
        x={0}
      >
        <Toast.Title>Subscribed!</Toast.Title>
        <Toast.Description>We'll be in touch.</Toast.Description>
      </Toast>
    </YStack>
  )
}
```

----------------------------------------

TITLE: Install React Native Animated Driver
DESCRIPTION: Installs the `@tamagui/animations-react-native` package using yarn. This driver leverages React Native's built-in Animated library for animations.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/animations.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
yarn add @tamagui/animations-react-native
```

----------------------------------------

TITLE: Button Sizing Example (tsx)
DESCRIPTION: Illustrates how to use the `size` prop on the Tamagui Button component. This prop allows for consistent scaling of padding, font size, and icon sizes across different button instances.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/button/1.0.0-alpha.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { Button } from 'tamagui'

export default () => <Button size="$6">Lorem ipsum</Button>
```

----------------------------------------

TITLE: Yarn package.json Configuration for Hoisting
DESCRIPTION: This snippet shows the required addition to package.json to resolve Yarn installation issues, specifically related to hoisting limits in monorepo environments. It ensures dependencies are handled correctly by Yarn.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/kitchen-sink/README.md#_snippet_0

LANGUAGE: json
CODE:
```
{
  "installConfig": {
    "hoistingLimits": "dependencies"
  }
}
```

----------------------------------------

TITLE: Advanced Selectors and Reactions
DESCRIPTION: Explains how to use selectors for derived state and `reaction` for side effects based on state changes. These methods support custom logic and perform shallow comparisons to optimize updates, allowing for more complex state-driven behavior.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/packages/use-store/README.md#_snippet_3

LANGUAGE: tsx
CODE:
```
const isValid = useStoreSelector(() => {
  return mapStore.isActive && homeStore.isActive
})

// Same with reaction:
useEffect(() => {
  return reaction(
    () => {
      return homeStore.isActive && mapStore.isActive
    },
    isValid => {
      // ...
    }
  )
}, [])

// Note it does shallow compare.
```

----------------------------------------

TITLE: Tamagui Configuration: Tokens and Themes
DESCRIPTION: Sets up the core Tamagui configuration, defining design tokens for size, space, and radius, alongside light and dark themes, including a specific sub-theme for Buttons.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/how-to-build-a-button.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { createTamagui, createTokens } from '@tamagui/core'

export default createTamagui({
  tokens: createTokens({
    size: {
      sm: 38,
      md: 46,
      lg: 60,
    },
    space: {
      sm: 15,
      md: 20,
      lg: 25,
    },
    radius: {
      sm: 4,
      md: 8,
      lg: 12,
    },
    // ... the rest of your tokens
  }),

  themes: {
    light: {
      background: '#fff',
      color: '#000',
    },

    // define a Button sub-theme, see the Themes docs for more
    light_Button: {
      background: '#ccc',
      backgroundPress: '#bbb', // darker background on press
      backgroundHover: '#ddd', // lighter background on hover
      color: '#222'
    },
  },

  // ... the rest of your tamagui.config.ts
})
```

----------------------------------------

TITLE: Using Tamagui Size Tokens in Components
DESCRIPTION: Shows how to apply Tamagui's predefined size tokens, like `$4.5`, to component props such as `width`. This leverages the framework's system for consistent spacing and sizing across the application.

SOURCE: https://github.com/tamagui/tamagui/blob/main/library/config-v4.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { View } from 'tamagui'

export default () => <View width="$4.5" />
```

----------------------------------------

TITLE: Simple createThemes Usage
DESCRIPTION: Demonstrates the most basic usage of the `createThemes` function from `@tamagui/theme-builder`. It sets up a simple 'base' theme with dark and light palettes, generating default component themes.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/theme-builder.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { createThemes } from '@tamagui/theme-builder'

export const themes = createThemes({
  base: {
    palette: {
      dark: ['#000', '#fff'],
      light: ['#fff', '#000'],
    }
  },
})
```

----------------------------------------

TITLE: Tamagui Component Type Check Example
DESCRIPTION: Example TypeScript type definition for checking if a component is a Tamagui component. It includes an optional parameter to specify the component name.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/exports.mdx#_snippet_8

LANGUAGE: typescript
CODE:
```
type isTamaguiComponent (component: any; name?: string) => boolean
```

----------------------------------------

TITLE: Tamagui Theme Configuration and Generation
DESCRIPTION: Defines color palettes, shadow styles, and uses them with the createThemes function to generate comprehensive UI themes for Tamagui. Includes optimization for production environments.

SOURCE: https://github.com/tamagui/tamagui/blob/main/library/tamagui.mdx#_snippet_6

LANGUAGE: typescript
CODE:
```
const darkPalette = [
  '#000',
  '#1a1a1a',
  '#242424',
  '#2e2e2e',
  '#383838',
  '#424242',
  '#494949',
  '#545454',
  '#626262',
  '#a5a5a5',
  '#fff',
]

const lightPalette = [
  '#fff',
  '#f8f8f8',
  'hsl(0, 0%, 96.3%)',
  'hsl(0, 0%, 94.1%)',
  'hsl(0, 0%, 92.0%)',
  'hsl(0, 0%, 90.0%)',
  'hsl(0, 0%, 88.5%)',
  'hsl(0, 0%, 81.0%)',
  'hsl(0, 0%, 56.1%)',
  'hsl(0, 0%, 50.3%)',
  'hsl(0, 0%, 42.5%)',
  'hsl(0, 0%, 9.0%)',
]

const lightShadows = {
  shadow1: 'rgba(0,0,0,0.04)',
  shadow2: 'rgba(0,0,0,0.08)',
  shadow3: 'rgba(0,0,0,0.16)',
  shadow4: 'rgba(0,0,0,0.24)',
  shadow5: 'rgba(0,0,0,0.32)',
  shadow6: 'rgba(0,0,0,0.4)',
}

const darkShadows = {
  shadow1: 'rgba(0,0,0,0.2)',
  shadow2: 'rgba(0,0,0,0.3)',
  shadow3: 'rgba(0,0,0,0.4)',
  shadow4: 'rgba(0,0,0,0.5)',
  shadow5: 'rgba(0,0,0,0.6)',
  shadow6: 'rgba(0,0,0,0.7)',
}

const extraColors = {
  black1: darkPalette[0],
  black2: darkPalette[1],
  black3: darkPalette[2],
  black4: darkPalette[3],
  black5: darkPalette[4],
  black6: darkPalette[5],
  black7: darkPalette[6],
  black8: darkPalette[7],
  black9: darkPalette[8],
  black10: darkPalette[9],
  black11: darkPalette[10],
  black12: darkPalette[11],
  white1: lightPalette[0],
  white2: lightPalette[1],
  white3: lightPalette[2],
  white4: lightPalette[3],
  white5: lightPalette[4],
  white6: lightPalette[5],
  white7: lightPalette[6],
  white8: lightPalette[7],
  white9: lightPalette[8],
  white10: lightPalette[9],
  white11: lightPalette[10],
  white12: lightPalette[11],
}

const generatedThemes = createThemes({
  componentThemes: defaultComponentThemes,
  
  base: {
    palette: {
      dark: darkPalette,
      light: lightPalette,
    },

    extra: {
      light: {
        ...Colors.blue,
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...lightShadows,
        ...extraColors,
        shadowColor: lightShadows.shadow1,
      },
      dark: {
        ...Colors.blueDark,
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...darkShadows,
        ...extraColors,
        shadowColor: darkShadows.shadow1,
      },
    },
  },

  accent: {
    palette: {
      dark: lightPalette,
      light: darkPalette,
    },
  },

  childrenThemes: {
    blue: {
      palette: {
        dark: Object.values(Colors.blueDark),
        light: Object.values(Colors.blue),
      },
    },
    red: {
      palette: {
        dark: Object.values(Colors.redDark),
        light: Object.values(Colors.red),
      },
    },
    yellow: {
      palette: {
        dark: Object.values(Colors.yellowDark),
        light: Object.values(Colors.yellow),
      },
    },
    green: {
      palette: {
        dark: Object.values(Colors.greenDark),
        light: Object.values(Colors.green),
      },
    },
  },
})

export type TamaguiThemes = typeof generatedThemes

/**
 * This is an optional production optimization: themes JS can get to 20Kb or more.
 * Tamagui has ~1Kb of logic to hydrate themes from CSS, so you can remove the JS.
 * So long as you server render your Tamagui CSS, this will save you bundle size:
 */
export const themes: TamaguiThemes =
  process.env.TAMAGUI_ENVIRONMENT === 'client' &&
  process.env.NODE_ENV === 'production'
    ? {}
    : (generatedThemes as any)

```

----------------------------------------

TITLE: Dialogs Inside Native Modals Example
DESCRIPTION: Provides an example of how to use PortalProvider to ensure Tamagui Dialogs render correctly when nested within native modals, such as those created with react-navigation.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/dialog/1.0.0.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
import { PortalProvider } from 'tamagui'

// this component used in react-navigation/expo-router with `presentation: "modal"`
export function Page() {
  return (
    <PortalProvider>
      {/* rest of your page, including the Dialog... */}
    </PortalProvider>
  )
}
```

----------------------------------------

TITLE: Tamagui Shorthand Expansion Example
DESCRIPTION: Example TypeScript signature for expanding shorthand properties within component props. It takes an object of props and returns a new object with shorthands resolved.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/exports.mdx#_snippet_13

LANGUAGE: typescript
CODE:
```
;(props: Object) => Object
```

----------------------------------------

TITLE: Tamagui View and Text Basic Usage
DESCRIPTION: Demonstrates the basic usage of Tamagui's `View` and `Text` components, showing how to import and render them with simple styling and content.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/stack-and-text.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { View, Text } from 'tamagui' // or '@tamagui/core'

export default () => (
  <View margin={10}>
    <Text color="$color">Hello</Text>
  </View>
)
```

----------------------------------------

TITLE: Tamagui Element Type Check Example
DESCRIPTION: Example TypeScript type definition for checking if a React element is a Tamagui element. It includes an optional parameter to specify the element's component name.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/exports.mdx#_snippet_9

LANGUAGE: typescript
CODE:
```
type isTamaguiElement (child: any; name?: string) => boolean
```

----------------------------------------

TITLE: Dialog Focus Management Example
DESCRIPTION: An example demonstrating how to use FocusScope within a Tamagui Dialog component to manage focus for modal content, including trapping and idle focusing.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/focus-scope/1.128.0.mdx#_snippet_9

LANGUAGE: tsx
CODE:
```
import { Button, Dialog, FocusScope, Input, XStack, YStack } from 'tamagui'

export default () => (
  <Dialog>
    <Dialog.Trigger asChild>
      <Button>Open Modal</Button>
    </Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
        <FocusScope trapped loop focusOnIdle={100}>
          <YStack space="$4" padding="$4">
            <Dialog.Title>User Details</Dialog.Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <XStack space="$2">
              <Dialog.Close asChild>
                <Button variant="outlined">Cancel</Button>
              </Dialog.Close>
              <Button>Save</Button>
            </XStack>
          </YStack>
        </FocusScope>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog>
)
```

----------------------------------------

TITLE: Run Sandbox Application
DESCRIPTION: Launches the Tamagui sandbox application, which is an easier way to run and test native code, often compatible with Expo Go.

SOURCE: https://github.com/tamagui/tamagui/blob/main/CONTRIBUTING.md#_snippet_4

LANGUAGE: bash
CODE:
```
yarn sandbox
```

----------------------------------------

TITLE: Store Instance with Namespace/ID
DESCRIPTION: Illustrates how to create different store instances or namespaces by passing an `id` property. This allows for managing distinct states or contexts using the same store class, ensuring all components with the same ID access the same underlying store instance.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/packages/use-store/README.md#_snippet_1

LANGUAGE: tsx
CODE:
```
// if you want a different instance or namespace, pass props, these will also all access the same store:
export function ReactComponentAlt() {
  const x0 = useStore(X, { id: 100 })
  const x1 = useX({ id: 100 })
  const x2 = useGlobalStore(x, { id: 100 })
  
  return (
    <div>{x0.y}</div>
  )
}
```

----------------------------------------

TITLE: Tamagui CSS Shorthands
DESCRIPTION: Lists common CSS property shorthands provided by Tamagui for concise styling, aligned with Tailwind CSS.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/config-v4.mdx#_snippet_5

LANGUAGE: APIDOC
CODE:
```
TamaguiShorthands:
  text: "textAlign"
  b: "bottom"
  bg: "backgroundColor"
  content: "alignContent"
  flex: "flexDirection"
  grow: "flexGrow"
  items: "alignItems"
  justify: "justifyContent"
  l: "left"
  m: "margin"
  maxH: "maxHeight"
  maxW: "maxWidth"
  mb: "marginBottom"
  minH: "minHeight"
  minW: "minWidth"
  ml: "marginLeft"
  mr: "marginRight"
  mt: "marginTop"
  mx: "marginHorizontal"
  my: "marginVertical"
  p: "padding"
  pb: "paddingBottom"
  pl: "paddingLeft"
  pr: "paddingRight"
  pt: "paddingTop"
  px: "paddingHorizontal"
  py: "paddingVertical"
  r: "right"
  rounded: "borderRadius"
  select: "userSelect"
  self: "alignSelf"
  shrink: "flexShrink"
  t: "top"
  z: "zIndex"
```

----------------------------------------

TITLE: Tamagui Single Token Retrieval Example
DESCRIPTION: Example TypeScript signature for retrieving a specific Tamagui token by name or name and group. It returns the token's value, which might be a CSS variable on web.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/exports.mdx#_snippet_11

LANGUAGE: typescript
CODE:
```
(name: Token, group?: keyof Tokens) => any
```

----------------------------------------

TITLE: Tamagui Media Query Breakpoints
DESCRIPTION: Defines responsive breakpoints for Tamagui, aligning with Tailwind CSS conventions for screen size queries.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/config-v4.mdx#_snippet_4

LANGUAGE: APIDOC
CODE:
```
TamaguiMediaQueries:
  2xl: "minWidth: 1536"
    Description: Extra large breakpoint.
  xl: "minWidth: 1280"
    Description: Large breakpoint.
  lg: "minWidth: 1024"
    Description: Medium breakpoint.
  md: "minWidth: 768"
    Description: Small breakpoint.
  sm: "minWidth: 640"
    Description: Extra small breakpoint.
  xs: "minWidth: 460"
    Description: Mobile breakpoint.
  2xs: "minWidth: 340"
    Description: Smallest mobile breakpoint.

Server-side behavior: On the server, only 'xs' and '2xs' default to true for a mobile-first design. Tamagui generates SSR-safe CSS for media queries.
```

----------------------------------------

TITLE: Install Headless Checkbox Package
DESCRIPTION: Instructions for installing the headless checkbox package, which has no dependency on Tamagui's core styling but works with React Native APIs. This allows for custom styling libraries.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/checkbox/1.85.0.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @tamagui/switch-headless
```

----------------------------------------

TITLE: Tamagui Single Token Value Retrieval Example
DESCRIPTION: Example TypeScript signature for retrieving the raw value of a specific Tamagui token. This function bypasses CSS variable conversion and always returns the underlying value.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/exports.mdx#_snippet_12

LANGUAGE: typescript
CODE:
```
(name: Token, group?: keyof Tokens) => any
```

----------------------------------------

TITLE: Tamagui createStyledContext with Styled Components
DESCRIPTION: Illustrates the complete implementation of a component context using createStyledContext, integrating it with Tamagui's styled components to automatically propagate context values like size and providing a Provider for external control.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/how-to-build-a-button.mdx#_snippet_14

LANGUAGE: tsx
CODE:
```
import { View, Text, styled, createStyledContext } from '@tamagui/core'

export const ButtonContext = createStyledContext({
  size: '$md' as SizeTokens,
})

const ButtonFrame = styled(View, {
  name: 'Button',
  context: ButtonContext,
  backgroundColor: '$background',
  alignItems: 'center',
  flexDirection: 'row',

  variants: {
    size: {
      '...size': (name, { tokens }) => {
        return {
          height: tokens.size[name],
          borderRadius: tokens.radius[name],
          gap: tokens.space[name].val * 0.2,
        }
      },
    },
  } as const,
})

const ButtonText = styled(Text, {
  name: 'ButtonText',
  context: ButtonContext,
  color: '$color',
  userSelect: 'none',

  variants: {
    size: {
      '...fontSize': (name, { font }) => ({
        fontSize: font?.size[name],
      }),
    },
  } as const,
})

export const Button = withStaticProperties(ButtonFrame, {
  Text: ButtonText,
  Props: ButtonContext.Provider,
})
```

----------------------------------------

TITLE: Tamagui Multiple Toasts Example
DESCRIPTION: This example demonstrates how to display multiple toasts in Tamagui. It's crucial to pass the `multipleToasts` prop to your `ToastViewport` component to avoid issues with swipe-to-dismiss and toast animations. The code includes a button to trigger new toasts and dynamically renders them based on a state counter.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.11.3.mdx#_snippet_12

LANGUAGE: tsx
CODE:
```
export default () => {
  const [savedCount, setSavedCount] = React.useState(0)

  return (
    <YStack ai="center">
      <Button
        onPress={() => {
          setSavedCount((old) => old + 1)
        }}
      >
        Show toast
      </Button>
      {[...Array(savedCount)].map((_, index) => (
        <Toast
          key={index}
          animation="100ms"
          enterStyle={{ x: -20, opacity: 0 }}
          exitStyle={{ x: -20, opacity: 0 }}
          opacity={1}
          x={0}
        >
          <Toast.Title>Subscribed!</Toast.Title>
          <Toast.Description>We'll be in touch.</Toast.Description>
        </Toast>
      ))}
    </YStack>
  )
}
```

----------------------------------------

TITLE: Tamagui Multiple Toasts Example
DESCRIPTION: This example demonstrates how to display multiple toasts in Tamagui. It's crucial to pass the `multipleToasts` prop to your `ToastViewport` component to avoid issues with swipe-to-dismiss and toast animations. The code includes a button to trigger new toasts and dynamically renders them based on a state counter.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.13.0.mdx#_snippet_14

LANGUAGE: tsx
CODE:
```
export default () => {
  const [savedCount, setSavedCount] = React.useState(0)

  return (
    <YStack ai="center">
      <Button
        onPress={() => {
          setSavedCount((old) => old + 1)
        }}
      >
        Show toast
      </Button>
      {[...Array(savedCount)].map((_, index) => (
        <Toast
          key={index}
          animation="100ms"
          enterStyle={{ x: -20, opacity: 0 }}
          exitStyle={{ x: -20, opacity: 0 }}
          opacity={1}
          x={0}
        >
          <Toast.Title>Subscribed!</Toast.Title>
          <Toast.Description>We'll be in touch.</Toast.Description>
        </Toast>
      ))}
    </YStack>
  )
}
```

----------------------------------------

TITLE: Tooltip API Reference
DESCRIPTION: Comprehensive API documentation for the main Tooltip component, detailing all available props for controlling its behavior, appearance, and integration with other Tamagui features.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tooltip/1.105.0.mdx#_snippet_4

LANGUAGE: APIDOC
CODE:
```
Tooltip:
  Props:
    children: React.ReactNode (required) - Must contain Tooltip.Content.
    groupId: string (optional) - For use with TooltipGroup to manage open states within a group.
    restMs: number (optional) - Delay in milliseconds before showing the tooltip after the cursor stops moving.
    delay: number | { open?: number; close?: number } (optional) - Maximum time before showing, with independent settings for open and close delays.
    size: SizeTokens (optional) - Applies size to padding, arrow, and borderRadius of sub-components.
    placement: Placement (optional) - Defines the tooltip's position relative to its trigger. Accepts values like 'top', 'bottom', 'left', 'right', and their variants (e.g., 'top-start').
    open: boolean (optional) - Controls the open state of the tooltip.
    defaultOpen: boolean (optional) - Sets the initial open state of the tooltip.
    onOpenChange: (open: boolean) => void (optional) - Callback function triggered when the open state changes.
    modal: boolean (default: true) - Renders the tooltip into the root of the app instead of inline.
    stayInFrame: ShiftProps (optional) - Configuration for the floating-ui shift() middleware to keep the tooltip within the viewport.
    allowFlip: FlipProps (optional) - Configuration for the floating-ui flip middleware to reposition the tooltip if it overflows the viewport.
    offset: OffsetOptions (optional) - Determines the distance between the tooltip and its trigger, using floating-ui offset() configuration.

Tooltip.Trigger:
  Description: Used to trigger the opening of the tooltip. See YStack in Stacks documentation.

Tooltip.Content:
  Description: Renders as SizableStack with an additional 'size' prop accepting any SizeTokens. See Stacks documentation.

Tooltip.Anchor:
  Description: Renders as YStack. Used when the trigger element is visually separate from where the tooltip attaches. The Anchor defines the attachment point, while the Trigger controls opening.
```

----------------------------------------

TITLE: Basic Switch Usage
DESCRIPTION: Example of how to use the Switch component with its Thumb in a Tamagui application.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/switch/1.28.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { Switch } from 'tamagui' // or '@tamagui/switch'

export default () => (
  <Switch size="$4">
    <Switch.Thumb animation="bouncy" />
  </Switch>
)
```

----------------------------------------

TITLE: Basic ScrollView Usage
DESCRIPTION: Example of how to use the Tamagui ScrollView component with basic list items.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/scroll-view/1.0.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { ScrollView, YStack, ListItem } from 'tamagui'

export default () => (
  <ScrollView>
    <YStack>
      <ListItem>1</ListItem>
      <ListItem>2</ListItem>
      <ListItem>3</ListItem>
      <ListItem>4</ListItem>
    </YStack>
  </ScrollView>
)
```

----------------------------------------

TITLE: Generated Theme Structure from Theme Builder
DESCRIPTION: Illustrates the output of the `themesBuilder.build()` method, showing the final theme objects with resolved color values based on palettes, templates, and hierarchical theme definitions.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/theme-builder.mdx#_snippet_15

LANGUAGE: json
CODE:
```
{
  "light": {
    "background": "#fff",
    "color": "#000"
  },
  "dark": {
    "background": "#000",
    "color": "#fff"
  },
  "light_subtle": {
    "background": "#eee",
    "color": "#111"
  },
  "dark_subtle": {
    "background": "#111",
    "color": "#eee"
  }
}
```

----------------------------------------

TITLE: Accordion Hero Template
DESCRIPTION: Example usage of the Accordion component within a hero template.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/accordion/1.0.0.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
```tsx hero template=Accordion

```
```

----------------------------------------

TITLE: Build JavaScript Artifacts
DESCRIPTION: Builds the JavaScript artifacts for the Tamagui project. This is typically performed once after installing dependencies.

SOURCE: https://github.com/tamagui/tamagui/blob/main/CONTRIBUTING.md#_snippet_2

LANGUAGE: bash
CODE:
```
yarn build:js
```

----------------------------------------

TITLE: Dialog Scoping - Nested Trigger
DESCRIPTION: Example of a nested Dialog.Trigger that attaches to a parent Dialog scope.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/dialog/1.131.0.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import { Button } from 'tamagui'
import { Dialog } from 'tamagui'

export default () => (
  <Dialog.Trigger scope="user-profile">
    <Button>Open Profile</Button>
  </Dialog.Trigger>
)
```

----------------------------------------

TITLE: Tamagui Animations Hero Template
DESCRIPTION: A placeholder for a Tamagui hero component demonstrating animations, typically used in documentation or examples.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/animations.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { AnimationsDemo } from 'tamagui'

<AnimationsDemo />
```

----------------------------------------

TITLE: Tamagui Build CLI Usage
DESCRIPTION: Provides common commands for using the `@tamagui/build` CLI tool. It covers basic build execution, watching for file changes, and cleaning build artifacts.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/packages/build/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npx @tamagui/build
tamagui-build
tamagui-build --watch
tamagui-build clean
```

----------------------------------------

TITLE: Tooltip API Reference (APIDOC)
DESCRIPTION: Provides detailed documentation for the main Tooltip component's props, including their types, requirements, and descriptions. It also mentions related sub-components and their roles.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tooltip/1.0.0.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Tooltip:
  description: Contains every component for the tooltip.
  props:
    children: React.ReactNode (required) - Must contain Tooltip.Content.
    groupId: string (optional) - Works with TooltipGroup to ensure only one tooltip in the group stays open.
    restMs: number (optional) - Time needed for cursor to rest before showing.
    delay: number | { open?: number; close?: number } (optional) - Maximum time before showing (can be set independently for open/close).
    size: SizeTokens (optional) - Passes size down to all sub-components for padding, arrow, borderRadius.
    placement: Placement (optional) - Defines the tooltip's position. Accepts values like 'top', 'right', 'bottom', 'left', and their variations (e.g., 'top-start').
    open: boolean (optional) - Controls the open state of the tooltip.
    defaultOpen: boolean (optional) - Sets the initial open state of the tooltip.
    onOpenChange: (open: boolean) => void (optional) - Callback function triggered when the open state changes.
    modal: boolean (optional, default: true) - Renders the tooltip into the root of the app instead of inline.
    stayInFrame: ShiftProps (optional) - See floating-ui shift() for frame constraints.
    allowFlip: FlipProps (optional) - See floating-ui flip for automatic repositioning.
    offset: OffsetOptions (optional) - Determines the distance the Tooltip appears from the target, see floating-ui offset().

  Sub-components:
    Tooltip.Trigger: Used to trigger opening of the popover when uncontrolled.
    Tooltip.Content: Renders as SizableStack with an extra `size` prop.
    Tooltip.Arrow: Renders an arrow for the tooltip content.
    Tooltip.Anchor: Renders as YStack. Used when the Trigger is in a different location from where the Tooltip attaches.
```

----------------------------------------

TITLE: Styled RadioGroup Usage
DESCRIPTION: Demonstrates how to use the styled RadioGroup component from Tamagui, including basic item setup with indicators.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/radio-group/1.2.0.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { RadioGroup } from 'tamagui'

export default () => (
  <RadioGroup value="foo" gap="$2">
    <RadioGroup.Item value="foo" id="foo-radio-item">
      <RadioGroup.Indicator />
    </RadioGroup.Item>
    <RadioGroup.Item value="bar" id="bar-radio-item">
      <RadioGroup.Indicator />
    </RadioGroup.Item>
  </RadioGroup>
)
```

----------------------------------------

TITLE: Custom Single Toast Implementation
DESCRIPTION: An example of creating a custom, non-native toast component using state management and animation props.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.13.0.mdx#_snippet_13

LANGUAGE: tsx
CODE:
```
import React, { useState, useRef, useEffect } from 'react';
import { Button, Toast, ToastTitle, ToastDescription, YStack } from 'tamagui';

export default () => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <YStack ai="center">
      <Button
        onPress={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 150);
        }}
      >
        Single Toast
      </Button>
      <Toast
        onOpenChange={setOpen}
        open={open}
        animation="100ms"
        enterStyle={{ x: -20, opacity: 0 }}
        exitStyle={{ x: -20, opacity: 0 }}
        opacity={1}
        x={0}
      >
        <Toast.Title>Subscribed!</Toast.Title>
        <Toast.Description>We'll be in touch.</Toast.Description>
      </Toast>
    </YStack>
  );
}
```

----------------------------------------

TITLE: Tamagui Optimizing Compiler
DESCRIPTION: An optimizing compiler that works with Tamagui's core and UI kit to output faster code, flatten component trees, and tune styles for each platform.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/introducing-tamagui.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
Package: @tamagui/static

Description: An optimizing compiler that enhances Tamagui's performance by extracting styles and flattening component trees.

Integration:
- Works with webpack and babel.

Benefits:
- Extracts styles from JS into atomic CSS for web.
- Optimizes inline and responsive styles, even within conditional logic.
- Flattens component trees for improved rendering performance.
- Tunes styles for specific platforms.

Usage:
- Configure webpack/babel to use the Tamagui static compiler.

Related:
- @tamagui/core (Core primitives)
- tamagui (UI Kit)
```

----------------------------------------

TITLE: Tabs with Animations Example
DESCRIPTION: Demonstrates advanced animations for the Tabs component using `AnimatePresence` and the `onInteraction` prop on `Tabs.Trigger` for custom indicators.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tabs/1.125.35.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
```tsx hero template=TabsAdvanced

```
```

----------------------------------------

TITLE: Tamagui Configuration File with Preset (TSX)
DESCRIPTION: Sets up the `tamagui.config.ts` file using the preset configuration from `@tamagui/config/v4`. It imports `defaultConfig` and `createTamagui`, then extends the default media queries. This approach leverages pre-defined styles and optimizations.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/configuration.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'

export const config = createTamagui({
  ...defaultConfig,
  media: {
    ...defaultConfig.media,
    // add your own media queries here, if wanted
  },
})

type OurConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends OurConfig {}
}
```

----------------------------------------

TITLE: Basic Progress Usage
DESCRIPTION: Example of using the Progress component with a value and an animated indicator. The `value` property controls the percent progress.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/progress/1.48.0.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { Button, Progress } from 'tamagui'

export default () => (
  <Progress value={60}>
    <Progress.Indicator animation="bouncy" />
  </Progress>
)
```

----------------------------------------

TITLE: Tamagui Theme Configuration for Color Scheme
DESCRIPTION: Discusses configuring Tamagui's color scheme helpers (like nextjs) to manage themes, and the implication of `shouldAddPrefersColorThemes: false` for JS-off users.

SOURCE: https://github.com/tamagui/tamagui/blob/main/next.md#_snippet_21

LANGUAGE: javascript
CODE:
```
as long as you use the nextjs or other new color scheme helpers they always add t_dark/t_light on first render so as long as youre ok with dark mode not working for js-off users, you could turn default the tamagui/config v4 to shouldAddPrefersColorThemes: false
```

----------------------------------------

TITLE: Import CSS Reset
DESCRIPTION: Imports the optional CSS reset from @tamagui/core to ensure consistent styling across different browsers.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/next-js.mdx#_snippet_21

LANGUAGE: tsx
CODE:
```
import '@tamagui/core/reset.css'
```

----------------------------------------

TITLE: Basic ToggleGroup Usage
DESCRIPTION: Example demonstrating how to use the ToggleGroup component with single selection. It includes importing the component and rendering items with values.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toggle-group/1.10.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { ToggleGroup } from 'tamagui'

export default () => {
  return (
    <ToggleGroup type="single">
      <ToggleGroup.Item value="foo"></ToggleGroup.Item>
      <ToggleGroup.Item value="bar"></ToggleGroup.Item>
    </ToggleGroup>
  )
}
```

----------------------------------------

TITLE: Positioning Custom Toasts
DESCRIPTION: Demonstrates how to position custom toasts by configuring the `ToastViewport` component. Examples include top-right and bottom-center placements.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.83.0.mdx#_snippet_11

LANGUAGE: tsx
CODE:
```
/* For top right placement */
<ToastViewport flexDirection="column-reverse" top={0} right={0} />

/* For bottom center placement */
<ToastViewport flexDirection="column" bottom={0} left={0} right={0} />
```

----------------------------------------

TITLE: Add Tamagui Button in app/page.tsx
DESCRIPTION: Demonstrates how to use a Tamagui component, such as a Button, within a client component in the Next.js App Router.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/next-js.mdx#_snippet_15

LANGUAGE: tsx
CODE:
```
'use client'

import { Button } from 'tamagui'

export default function Home() {
  return <Button>Hello world!</Button>
}
```

----------------------------------------

TITLE: Tamagui Dynamic Theme Helpers
DESCRIPTION: Introduces client-side helpers for managing themes dynamically: `addTheme`, `updateTheme`, and `replaceTheme`. These functions allow runtime modification or addition of themes without server-side impact.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/intro/themes.mdx#_snippet_12

LANGUAGE: APIDOC
CODE:
```
Dynamic Theme Helpers (Client-Side Only):

These functions are exported from '@tamagui/theme' and allow for runtime manipulation of themes.

1. addTheme(name: string, theme: ThemeObject, options?: { override?: boolean })
   - Adds a new theme to the Tamagui configuration.
   - Parameters:
     - name: The unique name for the new theme.
     - theme: An object containing the theme's key-value pairs.
     - options.override: If true, allows overriding an existing theme with the same name.
   - Usage:
     addTheme('newTheme', { background: 'blue', color: 'white' })

2. updateTheme(name: string, themeUpdate: Partial<ThemeObject>)
   - Updates specific properties of an existing theme.
   - Parameters:
     - name: The name of the theme to update.
     - themeUpdate: An object containing the properties to change.
   - Usage:
     updateTheme('light', { background: '#f0f0f0' })

3. replaceTheme(name: string, theme: ThemeObject)
   - Replaces an entire existing theme with a new definition.
   - Parameters:
     - name: The name of the theme to replace.
     - theme: The new complete theme object.
   - Usage:
     replaceTheme('dark', { background: '#111', color: '#eee' })

Notes:
- Dynamic themes only work on the client side and will be ignored on the server side.
- `updateTheme` merges changes, while `replaceTheme` overwrites the entire theme.
- For frequent dark/light theme switching on the web, consider adjusting `maxDarkLightNesting` in Tamagui configuration.
```

----------------------------------------

TITLE: Tamagui Inline Styles
DESCRIPTION: Demonstrates basic usage of Tamagui components with inline styles for common properties like background color and font size. Requires importing `View` and `Text` from 'tamagui'.

SOURCE: https://github.com/tamagui/tamagui/blob/main/library/tamagui.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { View, Text } from 'tamagui'

export default () => (
  <>
    <View backgroundColor="red" />
    <Text fontSize={16} color="$colorToken" />
  </>
)
```

----------------------------------------

TITLE: Discord Channel Metadata Storage
DESCRIPTION: Example of how Discord channel IDs are stored within the `subscriptions` table metadata. This is a JSON object.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/doc/subcriptions.md#_snippet_5

LANGUAGE: json
CODE:
```
{
  "discord_channel": "1132001717215559691"
}
```

----------------------------------------

TITLE: Tamagui Compiler Theme Builder Configuration (Next.js)
DESCRIPTION: Shows how to configure the Tamagui compiler, specifically for Next.js, to enable automatic theme building at build-time. This configuration points to the input file containing theme definitions and specifies the output file for generated themes.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/theme-builder.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
withTamagui({
  config: './tamagui.config.ts',
  components: ['tamagui'],

  // input is the file that imports @tamagui/theme-builder
  // and has an `export const themes`
  // output is then the file you import and use with your `createTamagui`
  themeBuilder: {
    input: './themes-input.tsx',
    output: './themes.tsx',
  },
})
```

----------------------------------------

TITLE: Using Different Viewports
DESCRIPTION: Example of setting up and using multiple `ToastViewport` instances within a `ToastProvider`. Toasts can then be directed to specific viewports by name.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.83.0.mdx#_snippet_14

LANGUAGE: tsx
CODE:
```
const App = () => {
  return (
    <ToastProvider>
      <ToastViewport /> {/* default viewport */}
      <ToastViewport name="viewport-custom" />
    </ToastProvider>
  )
}

const MyComponent = () => { 
  return <Toast /> // default viewport
}

const MyComponent2 = () => {
  return <Toast viewportName="viewport-custom" />
}
```

----------------------------------------

TITLE: Use Tamagui Components in One App (App Index TSX)
DESCRIPTION: Demonstrates how to use Tamagui components like `YStack`, `Text`, and `Button` within a One application. This shows basic layout and styling capabilities.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/one.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
import { Button, Text, YStack } from 'tamagui'

export default function Home() {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <Text fontSize="$6">Welcome to Tamagui with One!</Text>
      <Button>Click me</Button>
    </YStack>
  )
}
```

----------------------------------------

TITLE: Positioning Native Toasts (iOS)
DESCRIPTION: Example of positioning native toasts using `burntOptions` for iOS. This allows specifying placement like 'bottom'.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.83.0.mdx#_snippet_10

LANGUAGE: tsx
CODE:
```
<ToastProvider burntOptions={{ from: 'bottom' }}>
  {/* ... your app content ... */}
</ToastProvider>
```

----------------------------------------

TITLE: Positioning Custom Toasts
DESCRIPTION: Demonstrates how to position custom toasts by configuring the `ToastViewport` component. Examples include top-right and bottom-center placements.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.15.15.mdx#_snippet_10

LANGUAGE: tsx
CODE:
```
/* For top right placement */
<ToastViewport flexDirection="column-reverse" top={0} right={0} />

/* For bottom center placement */
<ToastViewport flexDirection="column" bottom={0} left={0} right={0} />
```

----------------------------------------

TITLE: Basic Image Usage in React
DESCRIPTION: Example of how to use the Tamagui Image component in a React application. It demonstrates setting the source URL, width, and height.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tamagui-image/1.0.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
export default () => (
  <Image
    src='https://...'
    width={300}
    height={400}
  />
)
```

----------------------------------------

TITLE: Optimize Next.js Performance with Tamagui
DESCRIPTION: Configures next.config.js to enable CSS output and disable extraction for improved performance, especially in development mode.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/next-js.mdx#_snippet_18

LANGUAGE: javascript
CODE:
```
const tamaguiPlugin = withTamagui({
  config: './tamagui.config.ts',
  components: ['tamagui'],
  outputCSS: process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
  disableExtraction: process.env.NODE_ENV === 'development" 
})
```

----------------------------------------

TITLE: Watch for Code Changes
DESCRIPTION: Starts a watcher process that recompiles code automatically as changes are detected. This should be run in a separate terminal during active development.

SOURCE: https://github.com/tamagui/tamagui/blob/main/CONTRIBUTING.md#_snippet_3

LANGUAGE: bash
CODE:
```
yarn watch
```

----------------------------------------

TITLE: Popover Demo
DESCRIPTION: Demonstrates the basic usage and structure of the Popover component.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.83.0.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
```tsx hero template=Popover

```
```

----------------------------------------

TITLE: Tamagui createStyledContext Definition
DESCRIPTION: Shows the basic definition of a context using Tamagui's createStyledContext, initializing it with a default size token.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/how-to-build-a-button.mdx#_snippet_13

LANGUAGE: tsx
CODE:
```
import { createStyledContext } from '@tamagui/core'

export const ButtonContext = createStyledContext({
  size: '$md' as SizeTokens,
})
```

----------------------------------------

TITLE: Set up PortalProvider for Popover
DESCRIPTION: Adds the PortalProvider component to the root of your application when installing popover independently. This is necessary for the popover's portal functionality to work correctly.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.131.0.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { PortalProvider } from '@tamagui/portal'
import YourApp from './components/YourApp'

function App() {
  return (
    <PortalProvider shouldAddRootHost>
      <YourApp />
    </PortalProvider>
  )
}

export default App
```

----------------------------------------

TITLE: Tooltip API Reference
DESCRIPTION: Comprehensive API documentation for the main Tooltip component, detailing its props, types, and default values.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/tooltip/1.122.0.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Tooltip:
  Props:
    children: React.ReactNode (required) - Must contain Popover.Content.
    groupId: string (optional) - For grouping tooltips to ensure only one stays open.
    restMs: number (optional) - Time in ms for cursor to rest before showing.
    delay: number | { open?: number; close?: number } (optional) - Max time before showing, independently settable for open/close.
    size: SizeTokens (optional) - Passes size down to sub-components for padding, arrow, borderRadius.
    placement: Placement (optional) - Positioning of the tooltip ('top', 'right', 'bottom', 'left', etc.).
    open: boolean (optional) - Controlled open state.
    defaultOpen: boolean (optional) - Uncontrolled default open state.
    onOpenChange: (open: boolean) => void (optional) - Callback for open state changes.
    modal: boolean (optional, default: true) - Renders into root of app instead of inline.
    stayInFrame: ShiftProps (optional) - Floating-ui shift() configuration.
    allowFlip: FlipProps (optional) - Floating-ui flip configuration.
    offset: OffsetOptions (optional) - Distance from target, see floating-ui offset().

  Notes:
    - If `modal={true}` (default), refer to PortalProvider installation.
    - Tooltip does not render on native platforms, only accessibility output.
```

----------------------------------------

TITLE: Tamagui Select API Reference
DESCRIPTION: Comprehensive API documentation for the Tamagui Select component and its sub-components, detailing properties, types, and descriptions for customization and functionality.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/select/1.19.0.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
Select:
  Props:
    id?: string
      description: Optional for usage with Label
    size?: SizeTokens
      description: Set the size of itself and pass to all inner elements
    children?: React.ReactNode
      description: Select children API components
    value?: string
      description: Controlled value
    defaultValue?: string
      description: Default value
    onValueChange?: (value: string) => void
      description: Callback on value change
    open?: boolean
      description: Controlled open value
    defaultOpen?: boolean
      description: Default open value
    onOpenChange?: (open: boolean) => void
      description: Callback on open change
    dir?: Direction
      description: Direction of text display
    name?: string
      description: For use in forms
    native?: NativeValue
      description: If passed, will render a native component instead of the custom one. Currently only `web` is supported.

Select.Trigger:
  Extends ListItem to give sizing, icons, and more.

Select.Value:
  Extends Paragraph, adding:
  Props:
    placeholder?: string
      description: Optional placeholder to show when no value selected

SelectContent:
  Main container for Select content, used to contain the up/down arrows, no API beyond children.

Select.ScrollUpButton:
  Inside Content first, displays when you can scroll up, stuck to the top.
  Extends YStack.

Select.ScrollDownButton:
  Inside Content last, displays when you can scroll down, stuck to the bottom.
  Extends YStack.

Select.Viewport:
  Extends ThemeableStack. Contains scrollable content items as children.
  Props:
    disableScroll?: boolean
      description: Removes ability to scroll and all style and functionality related to scrolling

Select.Group:
  Extends YStack. Use only when grouping together items, alongside a Label as the first child.

Select.Label:
  Extends ListItem. Used to label Groups.

Select.Item:
  Extends ListItem. Used to add selectable values to the list. Must provide an index as React Native doesn't give any escape hatch for us to configure that automatically.
  Props:
    index: number (required)
      description: Incrementally starting from 0, matching its appearance in the list.
    value?: string
      description: Provide a value that will be passed on selection.

Select.ItemText:
  Extends Paragraph. Used inside Item to provide unselectable text that will show above once selected in the parent Select.
```

----------------------------------------

TITLE: Product Ownership System API
DESCRIPTION: Details the `product_ownership` database table and its purpose in tracking one-time purchases and providing access for legacy users, including data migration considerations.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/doc/subcriptions.md#_snippet_13

LANGUAGE: APIDOC
CODE:
```
Product Ownership System:
  Purpose: Tracks one-time purchases made before the subscription system and manages legacy user access.
  Database Table: `product_ownership`

  Functionality:
    - Provides Bento access for legacy users.
    - Assists in handling data migration issues.

  Usage Example (Checking Access):
    - Query `product_ownership` table to verify if a user owns a specific product.
    - Example Query:
      await supabase.from('product_ownership').select('*').eq('user_id', userId).eq('product_id', BENTO_PRODUCT_ID)
```

----------------------------------------

TITLE: Basic Button Usage in Tamagui
DESCRIPTION: Demonstrates the fundamental way to import and render a Button component from the Tamagui library. This snippet shows how to display a button with simple text content.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/button/1.0.0.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { Button } from 'tamagui'

export default () => <Button>Lorem ipsum</Button>
```

----------------------------------------

TITLE: Positioning Native Toasts (iOS)
DESCRIPTION: Example of positioning native toasts using `burntOptions` for iOS. This allows specifying placement like 'bottom'.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.15.15.mdx#_snippet_9

LANGUAGE: tsx
CODE:
```
<ToastProvider burntOptions={{ from: 'bottom' }}>
  {/* ... your app content ... */}
</ToastProvider>
```

----------------------------------------

TITLE: Safe Area Toast Viewport Integration
DESCRIPTION: Provides an example of integrating Tamagui's ToastViewport with `react-native-safe-area-context` to ensure toasts respect mobile safe areas.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.13.0.mdx#_snippet_11

LANGUAGE: tsx
CODE:
```
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SafeToastViewport = () => {
  const { left, top, right } = useSafeAreaInsets()
  return (
    <ToastViewport flexDirection="column-reverse" top={top} left={left} right={right} />
  )
}
```

----------------------------------------

TITLE: Configure Vite for Tamagui (Vite TS)
DESCRIPTION: Updates the Vite configuration to include the One plugin and the Tamagui Vite plugin. This enables server-side rendering optimizations and Tamagui's build process.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/one.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { one } from 'one/vite'
import { tamaguiPlugin } from '@tamagui/vite-plugin'
import type { UserConfig } from 'vite'

export default {
  plugins: [
    one({
      web: {
        defaultRenderMode: 'ssg',
      },
    }),
    tamaguiPlugin({
      config: './tamagui.config.ts',
      components: ['tamagui'],
    }),
  ],

  // Vite 6 style configuration
  ssr: {
    noExternal: true,
  },

  optimizeDeps: {
    include: [
      '@tamagui/core',
      '@tamagui/config',
    ],
  },

  build: {
    cssTarget: 'safari15',
  },
} satisfies UserConfig
```

----------------------------------------

TITLE: Custom Styled Slider
DESCRIPTION: Example showing how to customize the Slider's appearance by styling its track component using the `styled` utility from Tamagui.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/slider/1.45.0.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { Slider, styled } from 'tamagui'

const CustomSliderTrack = styled(Slider.Track, {
  backgroundColor: 'red',
})

export default () => (
  <Slider size="$4" width={200} defaultValue={[50]} max={100} step={1}>
    <CustomSliderTrack>
      <Slider.TrackActive />
    </CustomSliderTrack>
    <Slider.Thumb circular index={0} />
  </Slider>
)
```

----------------------------------------

TITLE: Advanced Tamagui Styled Component with Variants and Functional Tokens
DESCRIPTION: Illustrates advanced usage of `styled()` from '@tamagui/core' with complex variants. It includes string-based variants ('pin'), boolean variants ('centered'), and functional variants that map token values (like 'size') to style properties, utilizing the theme's tokens. Requires importing `View` and `styled` from '@tamagui/core'.

SOURCE: https://github.com/tamagui/tamagui/blob/main/library/tamagui.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { View, styled } from '@tamagui/core'

export const RoundedSquare = styled(View, {
  borderRadius: 20,

  variants: {
    pin: {
      // string values
      top: {
        position: 'absolute',
        top: 0,
      },
    },

    centered: {
      // boolean
      true: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      false: {
        alignItems: 'flex-start'
      }
    },

    size: {
      // functional that take all "size" tokens, so <View size="$sm" /> passes into here
      '...size': (size, { tokens }) => {
        return {
          width: tokens.size[size] ?? size,
          height: tokens.size[size] ?? size,
        }
      },
    },
  } as const,
})
```

----------------------------------------

TITLE: Progress Component API
DESCRIPTION: API documentation for the Progress component. It extends ThemeableStack and supports standard Tamagui props.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/progress/1.48.0.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Progress:
  Extends: ThemeableStack, Tamagui standard props

  Props:
    size: "small" | "large"
      - Optional. Defines the size of the progress bar.
    value: number | null
      - Optional. Controls the percent progress. Can be overridden by adjusting the 'x' property.
    max: number
      - Optional. The maximum value for the progress bar (defaults to 100).
    unstyled: boolean
      - Optional. When true, removes all default styles from the component.
```

----------------------------------------

TITLE: Accordion: Allow Collapsing All Items Example
DESCRIPTION: Shows how to enable the functionality where all Accordion items can be closed simultaneously by setting the `collapsible` prop to true.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/accordion/1.0.0.mdx#_snippet_9

LANGUAGE: jsx
CODE:
```
<Accordion type="single" __collapsible__>
  <Accordion.Item value="item-1">…</Accordion.Item>
  <Accordion.Item value="item-2">…</Accordion.Item>
</Accordion>
```

----------------------------------------

TITLE: Accordion: Expanded by Default Example
DESCRIPTION: Demonstrates how to set an Accordion item to be expanded by default using the `defaultValue` prop on the main Accordion component.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/accordion/1.0.0.mdx#_snippet_8

LANGUAGE: jsx
CODE:
```
<Accordion type="single" __defaultValue__="item-2">
  <Accordion.Item value="item-1">…</Accordion.Item>
  <Accordion.Item value="item-2">…</Accordion.Item>
</Accordion>
```

----------------------------------------

TITLE: Tamagui Switch API Reference
DESCRIPTION: Comprehensive API documentation for the Tamagui Switch component and its sub-component Switch.Thumb. Details available props, their types, descriptions, and default values.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/switch/1.58.0.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Switch:
  Extends Stack views inheriting all the [Tamagui standard props](/docs/intro/props), plus:
  Props:
    labeledBy: string
      Set aria-labeled-by.
    name: string
      Equivalent to input name.
    value: string
      Give it a value (for use in HTML forms).
    checked: boolean
      Control the input.
    defaultChecked: boolean
      Uncontrolled default value.
    required: boolean
      Sets aria-required.
    onCheckedChange: (checked: boolean) => void
      Callback when the checked state changes.
    unstyled: boolean (default: false)
      When true, remove all default tamagui styling.
    native: NativeValue<"mobile" | "ios" | "android">
      Render to a native switch. (Not supported on web)
    nativeProps: SwitchProps (from `react-native`)
      Props to pass to the native Switch;

Switch.Thumb:
  Extends Stack views inheriting all the [Tamagui standard props](/docs/intro/props), plus:
  Props:
    unstyled: boolean (default: false)
      When true, remove all default tamagui styling.
```

----------------------------------------

TITLE: Apply Global Font Styles
DESCRIPTION: Adds a global style tag to the server-inserted HTML to ensure a specific font is applied globally to the HTML element.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/next-js.mdx#_snippet_20

LANGUAGE: tsx
CODE:
```
<style jsx global>{`
  html {
    font-family: 'Inter';
  }
`}</style>
```

----------------------------------------

TITLE: Clone Tamagui Repository
DESCRIPTION: Clones the Tamagui repository from GitHub. This is the initial step to set up your local development environment.

SOURCE: https://github.com/tamagui/tamagui/blob/main/CONTRIBUTING.md#_snippet_0

LANGUAGE: bash
CODE:
```
git clone https://github.com/tamagui/tamagui
```

----------------------------------------

TITLE: Configure Babel for Tamagui
DESCRIPTION: Updates the `babel.config.js` file to include the `@tamagui/babel-plugin`. This configuration enables Tamagui's component extraction and other optimizations during the build process.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/expo.mdx#_snippet_3

LANGUAGE: javascript
CODE:
```
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './tamagui.config.ts',
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development',
        },
      ],

      // NOTE: this is only necessary if you are using reanimated for animations
      'react-native-reanimated/plugin',
    ],
  }
}
```

----------------------------------------

TITLE: Tamagui Switch.Thumb API Reference
DESCRIPTION: API documentation for the Switch.Thumb component, detailing its props and inherited properties from Tamagui's Stack views.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/switch/1.89.0.mdx#_snippet_4

LANGUAGE: APIDOC
CODE:
```
Switch.Thumb:
  Extends: Stack views (Tamagui standard props)

  Props:
    unstyled: boolean
      Default: false
      Description: When true, removes all default Tamagui styling.
      Type: boolean
```

----------------------------------------

TITLE: Group Component (XGroup/YGroup) Example
DESCRIPTION: Illustrates the Group component, now split into XGroup and YGroup to align with Stacks. It supports scrollability and improved child styling.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/version-one.mdx#_snippet_15

LANGUAGE: tsx
CODE:
```
```tsx hero template=Group

```
```

----------------------------------------

TITLE: Plain React Context for Component Size
DESCRIPTION: Demonstrates using React's createContext to pass down component size information, highlighting the verbosity and potential brittleness of this approach when managing shared state across components.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/how-to-build-a-button.mdx#_snippet_12

LANGUAGE: tsx
CODE:
```
import { createContext } from 'react'
import { SizeTokens, GetProps, withStaticProperties } from '@tamagui/core'
import { Button } from './OurButton'

const SizeContext = createContext<SizeTokens>('$md')

const ButtonFrame = Button.styleable(
  ({ size = '$md', ...props }: GetProps<typeof OGB.ButtonFrame>) => {
    return (
      <SizeContext.Provider value={size}>
        <Button size={size} {...props} />
      </SizeContext.Provider>
    )
  },
)

const ButtonText = Button.Text.styleable(
  (props: GetProps<typeof OGB.ButtonText>) => {
    const size = useContext(SizeContext)
    return <Button.Text size={size} {...props} />
  },
)

export const NewButton = withStaticProperties(ButtonFrame, {
  Text: ButtonText,
})
```

----------------------------------------

TITLE: Webpack Tamagui Loader Configuration
DESCRIPTION: Configuration snippet for `webpack.config.js` to integrate Tamagui's loader. It specifies the path to the Tamagui configuration file and lists components to be processed.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/design-systems.mdx#_snippet_3

LANGUAGE: javascript
CODE:
```
{
  loader: 'tamagui-loader',
  options: {
    config: './tamagui.config.ts',
    components: ['@ourapp/components', 'tamagui'],
  },
}
```

----------------------------------------

TITLE: Accordion: Multiple Items Open Example
DESCRIPTION: Illustrates how to configure the Accordion to allow multiple items to be open at the same time by setting the `type` prop to `multiple`.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/accordion/1.0.0.mdx#_snippet_10

LANGUAGE: jsx
CODE:
```
<Accordion type="__multiple__">
  <Accordion.Item value="item-1">…</Accordion.Item>
  <Accordion.Item value="item-2">…</Accordion.Item>
</Accordion>
```

----------------------------------------

TITLE: Native iOS Sheet Usage
DESCRIPTION: Example of using the Sheet component with native iOS rendering enabled by calling `setupNativeSheet` and passing the `native` prop to the Sheet component.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/sheet/1.27.0.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
import { Sheet, setupNativeSheet } from '@tamagui/sheet'
import { ModalView } from 'react-native-ios-modal'

setupNativeSheet('ios', ModalView)

export default (
  <Sheet native>
    {/* The rest of your sheet views, see Anatomy, example and props API */}
  </Sheet>
)
```

----------------------------------------

TITLE: Tooltip Component API
DESCRIPTION: Describes the rebuilt Tooltip component, featuring a compound component API and full animation support, powered by Floating UI's React DOM Interactions. It provides a robust way to display contextual information.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/tamagui-enters-beta-themes-and-animations.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
import { Tooltip, TooltipTrigger, TooltipContent } from 'tamagui'

// Example usage of the Tooltip component
<Tooltip>
  <TooltipTrigger asChild>
    <Button>Hover Me</Button>
  </TooltipTrigger>
  <TooltipContent>
    {/* Tooltip content */}
    This is a helpful tooltip.
  </TooltipContent>
</Tooltip>
```

----------------------------------------

TITLE: Tamagui Switch API Reference
DESCRIPTION: API documentation for the Switch component, detailing its props and inherited properties from Tamagui's Stack views.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/switch/1.89.0.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Switch:
  Extends: Stack views (Tamagui standard props)

  Props:
    labeledBy: string
      Description: Set aria-labeled-by.
      Type: string

    name: string
      Description: Equivalent to input name.
      Type: string

    value: string
      Description: Give it a value (for use in HTML forms).
      Type: string

    checked: boolean
      Description: Control the input.
      Type: boolean

    defaultChecked: boolean
      Description: Uncontrolled default value.
      Type: boolean

    required: boolean
      Description: Sets aria-required.
      Type: boolean

    onCheckedChange: (checked: boolean) => void
      Description: Callback function when the checked state changes.
      Type: (checked: boolean) => void

    unstyled: boolean
      Default: false
      Description: When true, removes all default Tamagui styling.
      Type: boolean

    native: NativeValue<"mobile" | "ios" | "android">
      Description: Render to a native switch. (Not supported on web)
      Type: NativeValue<"mobile" | "ios" | "android">

    nativeProps: SwitchProps (from `react-native`)
      Description: Props to pass to the native Switch component.
      Type: SwitchProps (from `react-native`)
```

----------------------------------------

TITLE: Basic FocusScope Usage
DESCRIPTION: Wrap content with FocusScope to manage focus within a container. This example demonstrates basic focus management for a set of buttons.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/focus-scope/1.128.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { Button, FocusScope, XStack } from 'tamagui'

export default () => (
  <FocusScope loop trapped>
    <XStack space="$4">
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </XStack>
  </FocusScope>
)
```

----------------------------------------

TITLE: Styled Checkbox Usage
DESCRIPTION: Example of using the default styled Checkbox component from Tamagui. It includes an indicator icon, demonstrating basic controlled usage.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/checkbox/1.85.0.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { Check } from '@tamagui/lucide-icons'
import { Checkbox } from 'tamagui'

export default () => (
  <Checkbox size="$4">
    <Checkbox.Indicator>
      <Check />
    </Checkbox.Indicator>
  </Checkbox>
)
```

----------------------------------------

TITLE: Use Tamagui Checkbox Component
DESCRIPTION: Example of using the Tamagui Checkbox component with an indicator icon. It demonstrates basic usage within a React component.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/checkbox/1.3.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { Check } from '@tamagui/lucide-icons'
import { Checkbox } from 'tamagui'

export default () => (
  <Checkbox size="$4">
    <Checkbox.Indicator>
      <Check />
    </Checkbox.Indicator>
  </Checkbox>
)
```

----------------------------------------

TITLE: Exclude Design System CSS in Production
DESCRIPTION: Specifies the 'exclude' option within tamaguiConfig.getCSS to prevent the 'design-system' CSS from being included in production builds, optimizing output.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/next-js.mdx#_snippet_19

LANGUAGE: tsx
CODE:
```
<style
  dangerouslySetInnerHTML={{
    __html: tamaguiConfig.getCSS({
      // if you are using "outputCSS" option, you should use this "exclude"
      // if not, then you can leave the option out
      exclude: process.env.NODE_ENV === 'production' ? 'design-system' : null,
    }),
  }}
/>
```

----------------------------------------

TITLE: Popover API Reference
DESCRIPTION: Comprehensive API documentation for the Tamagui Popover component, detailing its props, structure, and integration with related components like Adapt and FocusScope for advanced functionality and responsive design.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.128.0.mdx#_snippet_4

LANGUAGE: APIDOC
CODE:
```
Popover:
  Props:
    open?: boolean
      - Controls the visibility of the popover.
    defaultOpen?: boolean
      - Sets the initial visibility state.
    onOpenChange?: (open: boolean) => void
      - Callback when the popover's open state changes.
    modal?: boolean
      - If true, the popover will be modal, blocking interaction with underlying content.
    stayInFrame?: boolean
      - If true, the popover will try to stay within the bounds of its nearest scrollable ancestor.
    disableOutsidePointerEvents?: boolean
      - Disables pointer events on elements outside the popover when it's open.
    allowFlip?: boolean
      - Enables automatic flipping of the popover's position if it overflows the viewport.
    allowPlacementAuto?: boolean
      - Allows the popover to automatically choose the best placement if the preferred placement overflows.
    offset?: number
      - Adjusts the distance between the trigger and the popover content.
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end'
      - Specifies the preferred placement of the popover relative to its trigger.
    containerStyle?: StyleProp<ViewStyle>
      - Custom styles for the popover container.
    overlayStyle?: StyleProp<ViewStyle>
      - Custom styles for the popover overlay (if modal).
    arrowStyle?: StyleProp<ViewStyle>
      - Custom styles for the popover arrow.
    contentStyle?: StyleProp<ViewStyle>
      - Custom styles for the popover content panel.
    sheetStyle?: StyleProp<ViewStyle>
      - Custom styles for the popover sheet when using Adapt.
    sheetContentStyle?: StyleProp<ViewStyle>
      - Custom styles for the popover sheet content.
    sheetHandleStyle?: StyleProp<ViewStyle>
      - Custom styles for the popover sheet handle.
    sheetOverlayStyle?: StyleProp<ViewStyle>
      - Custom styles for the popover sheet overlay.

  Sub-components:
    Popover.Trigger:
      - Renders the element that triggers the popover.
      - Accepts standard Tamagui props.

    Popover.Content:
      - Renders the main content panel of the popover.
      - Accepts standard Tamagui props for styling and layout.

    Popover.Arrow:
      - Renders a small arrow pointing from the popover content to the trigger.
      - Accepts standard Tamagui props for styling.

    Popover.Close:
      - Renders a button to close the popover.
      - Accepts standard Tamagui props.

    Popover.ScrollView:
      - A ScrollView component specifically for the popover content.
      - Accepts standard Tamagui props.

    Popover.FocusScope:
      - Manages focus within the popover content.
      - Props:
        - loop?: boolean
          - Enables looping focus within the scope.
        - trapped?: boolean
          - Traps focus within the scope.
        - focusOnIdle?: boolean
          - Sets focus to the first tabbable element when the scope is idle.

    Popover.Adapt:
      - Component for adapting popover behavior for different screen sizes, often used with Popover.Sheet.
      - Props:
        - when: string | ((props: any) => boolean)
          - Condition for adapting the content (e.g., 'maxMd').
        - children: ReactNode
          - Content to be adapted.

    Popover.Sheet:
      - Renders the popover content as a sheet, typically used with Adapt.
      - Props:
        - dismissible?: boolean
          - Whether the sheet can be dismissed by tapping the overlay.
        - open?: boolean
          - Controls the visibility of the sheet.
        - onOpenChange?: (open: boolean) => void
          - Callback when the sheet's open state changes.
        - zIndex?: number
          - The z-index of the sheet.
        - frameStyle?: StyleProp<ViewStyle>
          - Styles for the sheet frame.
        - overlayStyle?: StyleProp<ViewStyle>
          - Styles for the sheet overlay.
        - handleStyle?: StyleProp<ViewStyle>
          - Styles for the sheet handle.
        - scrollStyle?: StyleProp<ViewStyle>
          - Styles for the sheet scroll view.

    Popover.Sheet.Overlay:
      - Renders the overlay for the Popover.Sheet.

    Popover.Sheet.Frame:
      - Renders the main frame of the Popover.Sheet.

    Popover.Sheet.ScrollView:
      - A ScrollView component for the Popover.Sheet content.

  Example Usage:
    <Popover>
      <Popover.Trigger>Open</Popover.Trigger>
      <Popover.Content>
        <Popover.Arrow />
        <Popover.Close>X</Popover.Close>
        <Popover.ScrollView>
          Content here...
        </Popover.ScrollView>
      </Popover.Content>
    </Popover>

  Responsive Adaptation Example:
    <Popover>
      <Popover.Trigger>Open</Popover.Trigger>
      <Adapt when="maxMd">
        <Popover.Sheet>
          <Popover.Sheet.Frame>
            <Adapt.Contents />
          </Popover.Sheet.Frame>
        </Popover.Sheet>
      </Adapt>
      <Popover.Content>
        <Adapt.Contents />
      </Popover.Content>
    </Popover>
```

----------------------------------------

TITLE: Tamagui Popover API Reference
DESCRIPTION: Detailed API documentation for the Tamagui Popover component and its sub-components, including props, types, descriptions, and default values.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.43.0.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Popover:
  Props:
    children: React.ReactNode (required) - Must contain Popover.Content.
    size: SizeTokens (optional) - Passes size down to all sub-components for padding, arrow, borderRadius.
    placement: Placement (optional) - Defines the popover's position relative to its trigger. Accepts values like 'top', 'right', 'bottom', 'left', and their variations (e.g., 'top-start').
    open: boolean (optional) - Controls the open state of the popover.
    defaultOpen: boolean (optional) - Sets the initial open state of the popover.
    onOpenChange: (open: boolean) => void (optional) - Callback function triggered when the open state changes.
    modal: boolean (default: true) - Renders the popover into the root of the app instead of inline.
    keepChildrenMounted: boolean (optional) - If true, keeps popover children mounted even when hidden, which can improve performance for expensive content.
    stayInFrame: ShiftProps | boolean (optional) - Keeps the Popover inside the frame, utilizing floating-ui shift().
    allowFlip: FlipProps | boolean (optional) - Moves the Popover to other sides when space allows, utilizing floating-ui flip().
    offset: OffsetOptions (optional) - Determines the distance the Popover appears from the target, utilizing floating-ui offset().

Popover.Trigger:
  Description: Used to trigger opening of the popover when uncontrolled. Renders as a YStack.
  See: [Stacks](/docs/components/stacks)

Popover.Content:
  Description: Used to display the content of the popover. Renders as SizableStack (a YStack with an extra 'size' prop).
  Props:
    size: SizeTokens (optional)
    unstyled: boolean (optional) - Removes all default Tamagui styles.

Popover.Anchor:
  Description: Renders as YStack. Use when the Trigger is in a different location from where the Popover attaches. The Anchor defines where the Popover will attach, while the Trigger controls its opening.
  See: [Stacks](/docs/components/stacks)

Popover.Sheet:
  Description: When used with Adapt, Popover renders as a sheet at specified breakpoints. Must use Adapt.Contents inside Popover.Sheet.Frame to insert content from Popover.Content.
  See: [Sheet](/docs/components/sheet) for more props.
```

----------------------------------------

TITLE: Popover API Reference
DESCRIPTION: Comprehensive API documentation for the Tamagui Popover component, detailing its props, structure, and integration with related components like Adapt and FocusScope for advanced functionality and responsive design.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/popover/1.129.0.mdx#_snippet_4

LANGUAGE: APIDOC
CODE:
```
Popover:
  Props:
    open?: boolean
      - Controls the visibility of the popover.
    defaultOpen?: boolean
      - Sets the initial visibility state.
    onOpenChange?: (open: boolean) => void
      - Callback when the popover's open state changes.
    modal?: boolean
      - If true, the popover will be modal, blocking interaction with underlying content.
    stayInFrame?: boolean
      - If true, the popover will try to stay within the bounds of its nearest scrollable ancestor.
    disableOutsidePointerEvents?: boolean
      - Disables pointer events on elements outside the popover when it's open.
    allowFlip?: boolean
      - Enables automatic flipping of the popover's position if it overflows the viewport.
    allowPlacementAuto?: boolean
      - Allows the popover to automatically choose the best placement if the preferred placement overflows.
    offset?: number
      - Adjusts the distance between the trigger and the popover content.
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end'
      - Specifies the preferred placement of the popover relative to its trigger.
    containerStyle?: StyleProp<ViewStyle>
      - Custom styles for the popover container.
    overlayStyle?: StyleProp<ViewStyle>
      - Custom styles for the popover overlay (if modal).
    arrowStyle?: StyleProp<ViewStyle>
      - Custom styles for the popover arrow.
    contentStyle?: StyleProp<ViewStyle>
      - Custom styles for the popover content panel.
    sheetStyle?: StyleProp<ViewStyle>
      - Custom styles for the popover sheet when using Adapt.
    sheetContentStyle?: StyleProp<ViewStyle>
      - Custom styles for the popover sheet content.
    sheetHandleStyle?: StyleProp<ViewStyle>
      - Custom styles for the popover sheet handle.
    sheetOverlayStyle?: StyleProp<ViewStyle>
      - Custom styles for the popover sheet overlay.

  Sub-components:
    Popover.Trigger:
      - Renders the element that triggers the popover.
      - Accepts standard Tamagui props.

    Popover.Content:
      - Renders the main content panel of the popover.
      - Accepts standard Tamagui props for styling and layout.

    Popover.Arrow:
      - Renders a small arrow pointing from the popover content to the trigger.
      - Accepts standard Tamagui props for styling.

    Popover.Close:
      - Renders a button to close the popover.
      - Accepts standard Tamagui props.

    Popover.ScrollView:
      - A ScrollView component specifically for the popover content.
      - Accepts standard Tamagui props.

    Popover.FocusScope:
      - Manages focus within the popover content.
      - Props:
        - loop?: boolean
          - Enables looping focus within the scope.
        - trapped?: boolean
          - Traps focus within the scope.
        - focusOnIdle?: boolean
          - Sets focus to the first tabbable element when the scope is idle.

    Popover.Adapt:
      - Component for adapting popover behavior for different screen sizes, often used with Popover.Sheet.
      - Props:
        - when: string | ((props: any) => boolean)
          - Condition for adapting the content (e.g., 'maxMd').
        - children: ReactNode
          - Content to be adapted.

    Popover.Sheet:
      - Renders the popover content as a sheet, typically used with Adapt.
      - Props:
        - dismissible?: boolean
          - Whether the sheet can be dismissed by tapping the overlay.
        - open?: boolean
          - Controls the visibility of the sheet.
        - onOpenChange?: (open: boolean) => void
          - Callback when the sheet's open state changes.
        - zIndex?: number
          - The z-index of the sheet.
        - frameStyle?: StyleProp<ViewStyle>
          - Styles for the sheet frame.
        - overlayStyle?: StyleProp<ViewStyle>
          - Styles for the sheet overlay.
        - handleStyle?: StyleProp<ViewStyle>
          - Styles for the sheet handle.
        - scrollStyle?: StyleProp<ViewStyle>
          - Styles for the sheet scroll view.

    Popover.Sheet.Overlay:
      - Renders the overlay for the Popover.Sheet.

    Popover.Sheet.Frame:
      - Renders the main frame of the Popover.Sheet.

    Popover.Sheet.ScrollView:
      - A ScrollView component for the Popover.Sheet content.

  Example Usage:
    <Popover>
      <Popover.Trigger>Open</Popover.Trigger>
      <Popover.Content>
        <Popover.Arrow />
        <Popover.Close>X</Popover.Close>
        <Popover.ScrollView>
          Content here...
        </Popover.ScrollView>
      </Popover.Content>
    </Popover>

  Responsive Adaptation Example:
    <Popover>
      <Popover.Trigger>Open</Popover.Trigger>
      <Adapt when="maxMd">
        <Popover.Sheet>
          <Popover.Sheet.Frame>
            <Adapt.Contents />
          </Popover.Sheet.Frame>
        </Popover.Sheet>
      </Adapt>
      <Popover.Content>
        <Adapt.Contents />
      </Popover.Content>
    </Popover>
```

----------------------------------------

TITLE: GitHub Collaborator Check Response
DESCRIPTION: Example of handling the response from a GitHub collaborator check in `claim-product.ts`. It determines whether to return repo URL or prompt for invitation.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/doc/subcriptions.md#_snippet_8

LANGUAGE: typescript
CODE:
```
// claim-product.ts
if (collaboratorCheck.isCollaborator) {
  return {
    data: { /* claim data */ },
    message: `You are already a collaborator...`,
    ...(collaboratorCheck.repoUrl && { url: collaboratorCheck.repoUrl }),
  }
}
```

----------------------------------------

TITLE: Configure Non-Native Toast Placement
DESCRIPTION: Shows how to change the positioning of non-native toasts by modifying the `ToastViewport` component's style props. Examples include top-right and bottom-center placements.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.9.1.mdx#_snippet_10

LANGUAGE: tsx
CODE:
```
import { ToastViewport } from 'tamagui'

// For top-right placement:
<ToastViewport flexDirection="column-reverse" top={0} right={0} />

// For bottom-center placement:
<ToastViewport flexDirection="column" bottom={0} left={0} right={0} />
```

----------------------------------------

TITLE: Custom Single Toast Display
DESCRIPTION: An example of implementing a custom single toast display by managing its open state and animation properties directly, opting out of native toast behavior.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.11.3.mdx#_snippet_11

LANGUAGE: tsx
CODE:
```
export default () => {
  const [open, setOpen] = React.useState(false)
  const timerRef = React.useRef(0)

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <YStack ai="center">
      <Button
        onPress={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 150)
        }}
      >
        Single Toast
      </Button>
      <Toast
        onOpenChange={setOpen}
        open={open}
        animation="100ms"
        enterStyle={{ x: -20, opacity: 0 }}
        exitStyle={{ x: -20, opacity: 0 }}
        opacity={1}
        x={0}
      >
        <Toast.Title>Subscribed!</Toast.Title>
        <Toast.Description>We'll be in touch.</Toast.Description>
      </Toast>
    </YStack>
  )
}
```

----------------------------------------

TITLE: Button Component API Documentation (APIDOC)
DESCRIPTION: Provides detailed information about the properties available for the Tamagui Button component. This includes props for sizing, theming, icon placement, and text handling.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/button/1.0.0-alpha.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
Button Component Props:

Extends View, inheriting all standard Tamagui props.

Properties:
  size: string | tokens.size
    - Set a size, number or one of the size token values.
  theme: string
    - Apply a theme just to the button and its children.
  themeInverse: boolean
    - Helpful for "flipping" any theme between dark and light (including flipping a sub themes defined as [subtheme]-[dark/light]).
  textProps: TextProps
    - By default a button wraps contents in Text and will pass textProps if set.
  noTextWrap: boolean
    - If true, Button won't wrap content with a Text element.
  icon: JSX.Element
    - Pass any React element, appears before the text.
  iconAfter: JSX.Element
    - Pass any React element, appears after the text.
```

----------------------------------------

TITLE: Tamagui Sheet Anatomy
DESCRIPTION: Example demonstrating the basic structure and import statement for using the Sheet component and its sub-components like Overlay, Handle, and Frame.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/sheet/1.123.18.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { Sheet } from 'tamagui' // or '@tamagui/sheet'

export default () => (
  <Sheet>
    <Sheet.Overlay />
    <Sheet.Handle />
    <Sheet.Frame>{/* ...inner contents */}</Sheet.Frame>
  </Sheet>
)
```

----------------------------------------

TITLE: Tamagui Component Review for Size Assumptions
DESCRIPTION: A task to review Tamagui components and remove assumptions related to the `size` prop.

SOURCE: https://github.com/tamagui/tamagui/blob/main/next.md#_snippet_46

LANGUAGE: javascript
CODE:
```
run over components and review for removing some assumptions about `size`
```

----------------------------------------

TITLE: Tamagui Variant className Merging
DESCRIPTION: Example of how to define a className for a specific variant in Tamagui, allowing for custom class application based on component props.

SOURCE: https://github.com/tamagui/tamagui/blob/main/next.md#_snippet_10

LANGUAGE: javascript
CODE:
```
positionSticky: { true: { className: 'position-sticky' } }
```

----------------------------------------

TITLE: Tamagui Theme System
DESCRIPTION: Tamagui's theme system allows for deeply nested themes and automatic application of sub-themes to components. Theme properties like `color`, `colorHover`, `colorFocus`, and `colorPress` can be defined, enabling granular control over UI states and variations.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/tamagui-enters-beta-themes-and-animations.mdx#_snippet_1

LANGUAGE: typescript
CODE:
```
// Example theme structure
const themes = {
  dark: {
    color: 'black',
    background: 'white',
    dark_blue: {
      color: 'blue',
      background: '#e0e0ff'
    },
    dark_blue_alt1: {
      color: 'darkblue',
      background: '#c0c0ff'
    }
  },
  light: {
    color: 'white',
    background: 'black'
  }
};

// Components can automatically pick up theme variants
// e.g., a Button component might look for 'dark_blue_Button' if the theme is 'dark_blue'

```

----------------------------------------

TITLE: useTheme with useMedia for Conditional Styling
DESCRIPTION: Demonstrates combining `useTheme` with `useMedia` to apply conditional styles based on screen size and theme values. This allows for responsive design and theme-aware component rendering.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/core/use-theme.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
import { YStack, useMedia, useTheme } from 'tamagui'

const App = () => {
  const theme = useTheme()
  const media = useMedia()

  return (
    <YStack
      y={media.sm ? 10 : 0}
      backgroundColor={media.lg ? theme.red : theme.blue}
      {...(media.xl && {
        y: theme.space2,
      })}
    />
  )
}
```

----------------------------------------

TITLE: Progress Component API
DESCRIPTION: API documentation for the Progress component, detailing its props and their types.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/progress/1.0.0.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Progress:
  Extends [ThemeableStack](/docs/components/stacks#themeablestack), getting [Tamagui standard props](/docs/intro/props).

  Props:
    size: "small" | "large"
      - Description: Controls the size of the progress bar.
      - Required: false
      - Type: "small" | "large"

    value: number | null
      - Description: Control the percent progress. Can be set to null to indicate an indeterminate state.
      - Required: false
      - Type: number | null

    max: number
      - Description: The maximum value for the progress bar, typically 100.
      - Required: false
      - Type: number
```

----------------------------------------

TITLE: Configure TamaguiPlugin in Webpack (TSX)
DESCRIPTION: Adds the TamaguiPlugin to your Webpack configuration. This plugin is crucial for enabling Tamagui's features, such as specifying the configuration file and the components to be processed.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/webpack.mdx#_snippet_2

LANGUAGE: javascript
CODE:
```
const { TamaguiPlugin } = require('tamagui-loader')

config.plugins.push(
  new TamaguiPlugin({
    config: './src/tamagui.config.ts',
    components: ['tamagui'],
  }),
)
```

----------------------------------------

TITLE: Integrate NextTamaguiProvider in app/layout.tsx
DESCRIPTION: Applies the `NextTamaguiProvider` to the root layout component in the Next.js App Router. This ensures Tamagui styling and theming are correctly applied to the entire application.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/next-js.mdx#_snippet_14

LANGUAGE: tsx
CODE:
```
import { Metadata } from 'next'
import { NextTamaguiProvider } from './NextTamaguiProvider'

export const metadata: Metadata = {
  title: 'Your page title',
  description: 'Your page description',
  icons: '/favicon.ico',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NextTamaguiProvider>{children}</NextTamaguiProvider>
      </body>
    </html>
  )
}
```

----------------------------------------

TITLE: Responsive Styles Optimization
DESCRIPTION: Tamagui's compiler optimizes responsive styles, including those within hooks and inline styles, even when interspersed with conditional logic or spread objects, outputting clean CSS media queries.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/introducing-tamagui.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Feature: Fast Responsive Styles

Description: Tamagui enables fast responsive styles by optimizing them through its compiler. This includes styles defined via hooks or inline, even when complex JavaScript logic like ternaries or object spreads is involved.

Output:
- Generates efficient CSS media queries on the web.

Benefits:
- Improves performance by reducing runtime JavaScript overhead.
- Ensures consistent responsive behavior across platforms.

Related:
- Inline styles without overhead
- Universal, fast themes
```

----------------------------------------

TITLE: Basic Tamagui Switch Usage
DESCRIPTION: Demonstrates the basic usage of the Tamagui Switch component, including importing it and rendering it with a custom thumb. Shows how to apply size and animation props.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/switch/1.58.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { Switch } from 'tamagui' // or '@tamagui/switch'

export default () => (
  <Switch size="$4">
    <Switch.Thumb animation="bouncy" />
  </Switch>
)
```

----------------------------------------

TITLE: Import and Use Custom Component (TSX)
DESCRIPTION: Demonstrates how to import and render a custom component, such as `Circle`, within your Tamagui application. This snippet shows the basic usage after component setup.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/design-systems.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
import { Circle } from '@ourapp/components'

export default () => <Circle size="$large" />
```

----------------------------------------

TITLE: Define Theme Using Tokens
DESCRIPTION: Shows how to define a Tamagui theme that references values from `createTokens`. Tokens act as fallback values for theme keys.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/intro/themes.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const tokens = createTokens({
  color: {
    black: '#000',
    white: '#fff',
  },
})

// theme:
const dark = {
  background: tokens.color.black,
  color: tokens.color.white,
}
```

----------------------------------------

TITLE: Tamagui Theme Structure with BaseType
DESCRIPTION: Provides a structured TypeScript example for defining themes, ensuring type safety by establishing a base theme type and extending it for different theme variations.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/intro/themes.mdx#_snippet_11

LANGUAGE: tsx
CODE:
```
import { tokens } from './tokens'

const light = {
  background: '#fff',
  backgroundHover: tokens.color.gray3,
  backgroundPress: tokens.color.gray4,
  backgroundFocus: tokens.color.gray5,
  borderColor: tokens.color.gray4,
  borderColorHover: tokens.color.gray6,
  color: tokens.color.gray12,
  colorHover: tokens.color.gray11,
  colorPress: tokens.color.gray10,
  colorFocus: tokens.color.gray6,
  shadowColor: tokens.color.grayA5,
  shadowColorHover: tokens.color.grayA6,
}

// note: we set up a single consistent base type to validate the rest:
type BaseTheme = typeof light

// the rest of the themes use BaseTheme
const dark: BaseTheme = {
  background: '#000',
  backgroundHover: tokens.color.gray2Dark,
  backgroundPress: tokens.color.gray3Dark,
  backgroundFocus: tokens.color.gray4Dark,
  borderColor: tokens.color.gray3Dark,
  borderColorHover: tokens.color.gray4Dark,
  color: '#ddd',
  colorHover: tokens.color.gray11Dark,
  colorPress: tokens.color.gray10Dark,
  colorFocus: tokens.color.gray6Dark,
  shadowColor: tokens.color.grayA6,
  shadowColorHover: tokens.color.grayA7,
}

const dark_translucent: BaseTheme = {
  ...dark,
  background: 'rgba(0,0,0,0.7)',
  backgroundHover: 'rgba(0,0,0,0.5)',
  backgroundPress: 'rgba(0,0,0,0.25)',
  backgroundFocus: 'rgba(0,0,0,0.1)',
}

const light_translucent: BaseTheme = {
  ...light,
  background: 'rgba(255,255,255,0.85)',
  backgroundHover: 'rgba(250,250,250,0.85)',
  backgroundPress: 'rgba(240,240,240,0.85)',
  backgroundFocus: 'rgba(240,240,240,0.7)',
}

export const allThemes = {
  dark,
  light,
  dark_translucent,
  light_translucent,
} satisfies {[key: string]: BaseTheme}
// note: `satisfies` was introduced with TypeScript 4.9

```

----------------------------------------

TITLE: Focus Styles Prop
DESCRIPTION: Introduces experimental support for the `focusStyle` prop, which functions similarly to `pressStyle` and `hoverStyle`. This allows for defining visual states when an element receives focus, demonstrated on the Input component.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/blog/tamagui-enters-beta-themes-and-animations.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
import { Input } from 'tamagui'

// Example usage of Input with focusStyle
<Input
  focusStyle={{
    borderColor: '$blue5',
    shadowColor: '$blue5',
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 5,
    shadowOpacity: 1,
  }}
/>
```

----------------------------------------

TITLE: Usage Example: Tamagui Button with Icon
DESCRIPTION: Demonstrates how to use the `Button.Icon` component within a Tamagui Button, passing an external icon component like `MyIcon` as its child.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/how-to-build-a-button.mdx#_snippet_17

LANGUAGE: tsx
CODE:
```
import { MyIcon } from 'some-icon-library'
import { Button } from './Button'

export default () => (
  <Button size="$lg">
    <Button.Icon>
      <MyIcon />
    </Button.Icon>
    <Button.Text>
      Hello world
    </Button.Text>
  </Button>
)
```

----------------------------------------

TITLE: Position Toast Viewport within Safe Area (Mobile)
DESCRIPTION: Provides an example of how to integrate Tamagui's ToastViewport with react-native-safe-area-context to ensure toasts respect mobile device safe areas.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.11.3.mdx#_snippet_9

LANGUAGE: javascript
CODE:
```
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SafeToastViewport = () => {
  const { left, top, right } = useSafeAreaInsets()
  return (
    <ToastViewport flexDirection="column-reverse" top={top} left={left} right={right} />
  )
}
```

----------------------------------------

TITLE: Toast Component Structure
DESCRIPTION: Illustrates the basic structure for integrating the Toast component within a ToastProvider. It shows the hierarchy of Toast, Toast.Title, Toast.Description, Toast.Action, Toast.Close, and ToastViewport.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/toast/1.15.15.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<ToastProvider>
  <Toast>
    <Toast.Title />
    <Toast.Description />
    <Toast.Action />
    <Toast.Close />
  </Toast>

  <ToastViewport />
</ToastProvider>
```

----------------------------------------

TITLE: Basic Slider Usage
DESCRIPTION: Example of how to use the Slider component with default track and thumb. It demonstrates setting size, width, default value, maximum value, and step.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/slider/1.45.0.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { Slider } from 'tamagui'

export default () => (
  <Slider size="$4" width={200} defaultValue={[50]} max={100} step={1}>
    <Slider.Track>
      <Slider.TrackActive />
    </Slider.Track>
    <Slider.Thumb circular index={0} />
  </Slider>
)
```

----------------------------------------

TITLE: Optimize Performance with outputCSS (Vite TS)
DESCRIPTION: Configures the Tamagui Vite plugin to generate a separate CSS file for static extraction in production builds. This can improve performance by reducing runtime styling overhead.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/one.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
tamaguiPlugin({
  config: './tamagui.config.ts',
  components: ['tamagui'],
  outputCSS: process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
})
```

----------------------------------------

TITLE: Advanced createThemes with Multiple Palettes and Children Themes
DESCRIPTION: Illustrates a more advanced use case for `createThemes`, showing how to define multiple themes, including an 'accent' theme and 'childrenThemes' like 'warning', 'error', and 'success'. This allows for complex, production-grade theme suites by leveraging external color palettes.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/theme-builder.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { createThemes } from '@tamagui/theme-builder'
import * as Colors from '@tamagui/colors'

export const themes = createThemes({
  base: {
    palette: {
      dark: ['#000', '#fff',],
      light: ['#fff', '#000'],
    },
  },

  // this sets up both an accent theme, and $accent tokens
  // in this case we're just making them "inverse" of the current theme
  accent: {
    palette: {
      dark: ['#fff', '#000'],
      light: ['#000', '#fff',],
    },
  }

  childrenThemes: {
    warning: {
      palette: {
        dark: Object.values(Colors.yellowDark),
        light: Object.values(Colors.yellow),
      },
    },

    error: {
      palette: {
        dark: Object.values(Colors.redDark),
        light: Object.values(Colors.red),
      },
    },

    success: {
      palette: {
        dark: Object.values(Colors.greenDark),
        light: Object.values(Colors.green),
      },
    },
  },
})
```

----------------------------------------

TITLE: Tamagui Configuration File
DESCRIPTION: Defines the Tamagui configuration, including default settings and custom types. This file is crucial for integrating Tamagui's styling system into the Expo application.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/guides/expo.mdx#_snippet_4

LANGUAGE: typescript
CODE:
```
import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'

export const tamaguiConfig = createTamagui(defaultConfig)

export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
```

----------------------------------------

TITLE: Dialog Component Template
DESCRIPTION: A basic template demonstrating the structure and usage of the Dialog component.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/dialog/1.131.0.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { Dialog } from 'tamagui'

export default () => (
  <Dialog>
    <Dialog.Trigger />
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title />
        <Dialog.Description />
        <Dialog.Close />
        {/* ... */}
      </Dialog.Content>
    </Dialog.Portal>

    {/* Optional: Control focus behavior */}
    <Dialog.FocusScope loop trapped focusOnIdle={true}>
      <Dialog.FocusScope.Scope>
        {/* Focus scope will be applied to children */}
      </Dialog.FocusScope.Scope>
    </Dialog.FocusScope>
  </Dialog>
)
```

----------------------------------------

TITLE: Progress.Indicator Component API
DESCRIPTION: API documentation for the Progress.Indicator component, detailing its inheritance and props.

SOURCE: https://github.com/tamagui/tamagui/blob/main/code/tamagui.dev/data/docs/components/progress/1.0.0.mdx#_snippet_4

LANGUAGE: APIDOC
CODE:
```
Progress.Indicator:
  Extends [ThemeableStack](/docs/components/stacks#themeablestack), getting [Tamagui standard props](/docs/intro/props).

  Props:
    (Inherits all props from ThemeableStack)
```