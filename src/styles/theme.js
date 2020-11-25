const commonColors = {
  black: '#000',
  white: '#fff',

  light: {
    text: '#000',
    textSecondary: 'rgba(0, 0, 0, .5)',
    textTertiary: 'rgba(0, 0, 0, .3)',

    background: '#FFF',
    backgroundGrouped: '#F2F2F2',

    red: '#FF4000',
    yellow: '#FFC94C',
    green: '#52D411',
    blue: '#006AFF'
  },
  dark: {
    text: '#FFF',
    textSecondary: 'rgba(255, 255, 255, .6)',
    textTertiary: 'rgba(255, 255, 255, .4)',

    background: '#1C1C1C',
    backgroundGrouped: '#000',

    red: '#FF470A',
    yellow: '#FFC34C',
    green: '#56DE12',
    blue: '#1A79FF'
  }
}

const theme = {
  common: {
    colors: {
      black: commonColors.black,
      white: commonColors.white,

      light: {
        text: commonColors.light.text,
        textSecondary: commonColors.light.textSecondary,
        textTertiary: commonColors.light.textTertiary,

        background: commonColors.light.background,
        backgroundGrouped: commonColors.light.backgroundGrouped,

        red: commonColors.light.red,
        yellow: commonColors.light.yellow,
        green: commonColors.light.green,
        blue: commonColors.light.blue
      },
      dark: {
        text: commonColors.dark.text,
        textSecondary: commonColors.dark.textSecondary,
        textTertiary: commonColors.dark.textTertiary,

        background: commonColors.dark.background,
        backgroundGrouped: commonColors.dark.backgroundGrouped,

        red: commonColors.dark.red,
        yellow: commonColors.dark.yellow,
        green: commonColors.dark.green,
        blue: commonColors.dark.blue
      }
    },

    borderRadiusSmall: 5,
    borderRadius: 10,

    shadowOffset: {width: 0, height: 5},
    shadowOffsetLarge: {width: 0, height: 10},
    shadowOpacity: .2,
    shadowRadius: 10,
    shadowRadiusLarge: 20
  },

  container: {
    padding: 16
  },

  button: {
    view: {
      light: {
        default: commonColors.light.background,

        red: commonColors.light.red,
        yellow: commonColors.light.yellow,
        green: commonColors.light.green,
        blue: commonColors.light.blue,

        disabled: '#CCCCCC',

        none: '#00000000'
      },
      dark: {
        default: commonColors.dark.background,
        
        red: commonColors.dark.red,
        yellow: commonColors.dark.yellow,
        green: commonColors.dark.green,
        blue: commonColors.dark.blue,

        disabled: '#333333',

        none: '#00000000'
      },

      pressed: {
        light: {
          default: 'rgba(0, 0, 0, .8)',

          red: '#E53900',
          yellow: '#F4B625',
          green: '#49BD0F',
          blue: '#0661E0'
        },
        dark: {
          default: 'rgba(255, 255, 255, .8)',

          red: '#D63600',
          yellow: '#F4AF25',
          green: '#4DC610',
          blue: '#066BF9'
        }
      }
    },

    text: {
      light: {
        text: commonColors.light.text,
        textSecondary: commonColors.light.textSecondary,

        black: commonColors.black,
        white: commonColors.white,

        red: commonColors.light.red,
        yellow: commonColors.light.yellow,
        green: commonColors.light.green,
        blue: commonColors.light.blue,
        disabled: '#999'
      },
      dark: {
        text: commonColors.dark.text,
        textSecondary: commonColors.dark.textSecondary,

        black: commonColors.black,
        white: commonColors.white,

        red: commonColors.dark.red,
        yellow: commonColors.dark.yellow,
        green: commonColors.dark.green,
        blue: commonColors.dark.blue,
        disabled: '#888'
      }
    }
  },

  list: {
    item: {
      light: {
        background: '#FFF',
        backgroundSelected: '#DDD'
      },
      dark: {
        background: '#1C1C1C',
        backgroundSelected: '#333'
      },

      fontSize: 18,
      iconSize: 24
    },

    separator: {
      light: {
        background: 'rgba(0, 0, 0, .1)'
      },
      dark: {
        background: 'rgba(255, 255, 255, .1)'
      }
    }
  },

  form: {
    padding: 16,
    fontSize: 16
  },

  icon: {
    size: 32
  }
}

export default theme
