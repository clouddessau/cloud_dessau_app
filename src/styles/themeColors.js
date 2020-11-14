const themeColors = {
  colors: {
    black: '#000',
    white: '#fff',

    light: {
      text: '#000',
      textSecondary: 'rgba(0, 0, 0, .5)',

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

      background: '#000',
      backgroundGrouped: '#000',
      backgroundSecondary: '#1C1C1C',

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

  button: {
    light: {
      disabled: '#CCCCCC'
    },
    dark: {
      disabled: '#333333'
    }
  },

  buttonText: {
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
      }
    }
  }
}

export default themeColors
