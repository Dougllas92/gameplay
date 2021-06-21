import { Dimensions } from "react-native"

export default {
  colors: {
    background: '#0D133D',
    heading: '#DDE3F0',
    primary: '#E51C44',
    line: '#991F36'
    
  },

  fonts: {
    regular: 'Roboto_400Regular',
    bold: 'Roboto_700Bold'
  },

  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    title: '32px',
    subtitle: '26px',
    body: '16px',
    caption: '14px',
    small: '12px'
  },

  radius: '8px'
}