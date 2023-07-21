import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const globalstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  lightText: {
    fontSize: 12,
    color: colors.halfwhite,
  },
});
