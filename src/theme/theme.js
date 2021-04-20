import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { fonts } from './fonts';
import { CustomText } from '../components/custom-text';
import { CustomHeading } from '../components/custom-heading';

const breakpoints = createBreakpoints({
  xs: '0',
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
});

const overrides = {
  fonts,
  breakpoints,
  components: {
    Text: CustomText,
    Heading: CustomHeading,
  },
};
export const extendedTheme = extendTheme(overrides);
