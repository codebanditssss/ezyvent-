/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export default {
  primary: '#6B46C1',
  secondary: '#805AD5',
  background: '#FFFFFF',
  text: {
    dark: '#2D3748',
    light: '#4A5568',
    white: '#FFFFFF'
  },
  button: {
    primary: '#6B46C1',
    disabled: '#A0AEC0',
  },
  border: '#E2E8F0',
  error: '#E53E3E',
  success: '#38A169',
  calendar: {
    event: '#6B46C1',
    highlight: '#E9D8FD',
  }
};
