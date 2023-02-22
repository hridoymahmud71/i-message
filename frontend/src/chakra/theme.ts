// 1. Import `extendTheme`
import { extendTheme,type ThemeConfig } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'


const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme(
  { config },
  {
    colors: {
      brand: {
        100: "#3d84f7",
      },
    },
    styles: {
      global: (props) => ({
        body: {
            bg: mode('white', 'gray.800')(props),
        },
      }),
    },
  }
);

export { theme };
