// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    webGLRenderer: false,
    // Choose either "stable" for receiving highly polished,
    // or "canary" for less polished but more frequent updates
    updateChannel: 'canary',

    // default font size in pixels for all tabs
    fontSize: 14,

    // font family with optional fallbacks
    fontFamily: '"Fira Code", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(255,00,60,0.6)',
    selectionColor: 'rgba(255,00,60,0.2)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    // set to true for blinking cursor
    cursorBlink: true,

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    backgroundColor: 'rgba(0,0,40,0.9)',

    // border color (window, tabs)
    borderColor: 'rgba(0,0,40,0.9)',

    // custom css to embed in the main window
    css: ``,

    // custom css to embed in the terminal window
    termCSS: `
    x-screen x-row {
        font-variant-ligatures: initial;
    }
    `,

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object

    // colors: {
    //   black: '#000000',
    //   red: '#dd0044',
    //   green: '#339900',
    //   yellow: '#ffff00',
    //   blue: '#0066ff',
    //   magenta: '#cc00ff',
    //   cyan: '#FF9697',
    //   white: '#d0d0d0',
    //   lightBlack: '#808080',
    //   lightRed: '#ff0145',
    //   lightGreen: '#33ff00',
    //   lightYellow: '#ffff00',
    //   lightBlue: '#0066ff',
    //   lightMagenta: '#cc00ff',
    //   lightCyan: '#00ffff',
    //   lightWhite: '#ffffff'
    // }

    paneNavigation: {
      debug: false,
      hotkeys: {
        navigation: {
          up: 'ctrl+alt+up',
          down: 'ctrl+alt+down',
          left: 'ctrl+alt+left',
          right: 'ctrl+alt+right'
        },
        jump_prefix: 'ctrl+alt', // completed with 1-9 digits
        permutation_modifier: 'shift', // Added to jump and navigation hotkeys for pane permutation
        maximize: 'meta+enter'
      },
      showIndicators: true, // Show pane number
      indicatorPrefix: '^⌥ №', // Will be completed with pane number
      indicatorStyle: { // Added to indicator <div>
        position: 'absolute',
        top: 3,
        left: 15,
        fontSize: '8px'
      },
      focusOnMouseHover: false,
      inactivePaneOpacity: 0.9 // Set to 1 to disable inactive panes dimming
    },
    hyperlinks: {
      clickAction: 'open', // open, copy, ignore
      defaultBrowser: 'false'
    },
    colors: {
      black: '#1B1B1B',
      red: '#dd0044',
      green: '#7F817C',
      yellow: '#E5CE92',
      blue: '#A02535',
      magenta: '#E5CE92',
      cyan: '#A40A3C',
      white: '#CBCBCB',
      lightBlack: '#808080',
      lightRed: '#557C8B',
      lightGreen: '#A02535',
      lightYellow: '#E5CE92',
      lightBlue: '#A02535',
      lightMagenta: '#E5CE92',
      lightCyan: '#A40A3C',
      lightWhite: '#CBCBCB'
    },

    MaterialTheme: {
      // Set the theme variant,
      // OPTIONS: 'Darker', 'Palenight', ''
      theme: 'Darker',

      // [Optional] Set the rgba() app background opacity, useful when enableVibrance is true
      // OPTIONS: From 0.1 to 1
      backgroundOpacity: '0.91',

      // [Optional] Set the accent color for the current active tab
      // accentColor: '#dd0044',
      accentColor: '#A40A3C',

      // [Optional] Mac Only. Need restart. Enable the vibrance and blurred background
      // OPTIONS: 'dark', 'ultra-dark', 'bright'
      // NOTE: The backgroundOpacity should be between 0.1 and 0.9 to see the effect.
      vibrancy: 'dark'
    },
    hyperclean: {
      hideTabs: false, // default: false
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // Powershell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    // shell: '/Users/franklinflitton/.oh-my-zsh',
    // shell: '',
    shell: '/bin/zsh',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    // shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: 'SOUND',

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: true,

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    "hyper-material-theme",
    `hypergoogle`,
    `hyper-statusline`,
    `hyperterm-final-say`,
    `hyper-tab-icons`,
    `hyperclean`,
    `hypercwd`,
    `hyper-pane`,
    `hyper-match`,
    `hyperlinks`
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],


  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  }
};
