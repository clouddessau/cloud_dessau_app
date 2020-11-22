const theme = {
  common: {
    colors: {
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
      },
      
      active: {
        light: {
          red: '#E53900',
          yellow: '#F4B625',
          green: '#49BD0F',
          blue: '#0661E0'
        },
        dark: {
          red: '#D63600',
          yellow: '#F4AF25',
          green: '#4DC610',
          blue: '#066BF9'
        }
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
        disabled: '#CCCCCC'
      },
      dark: {
        disabled: '#333333'
      }
    },

    text: {
      light: {
        blue: '#FFF',
        green: '#FFF',
        red: '#FFF',
        yellow: '#000',
        disabled: '#999'
      },
      dark: {
        blue: '#FFF',
        green: '#FFF',
        red: '#FFF',
        yellow: '#000',
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
