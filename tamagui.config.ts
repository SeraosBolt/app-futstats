import { shorthands } from '@tamagui/shorthands';

import { themes, tokens } from '@tamagui/themes';

import { createFont, createTamagui, createTokens } from 'tamagui';

const token = createTokens({
  ...tokens,
  color: {
    ...tokens.color,
    azulEscuro: '#f5f5f5',
    verdeEscuro: '#43652C',
    verdeSemiEscuro: '#43652C',
    verde: '#97B78A',
    verdeClaro: '#97B78A',
  },
});

const appConfig = createTamagui({
  themes,

  tokens: token,

  shorthands,

  fonts: {
    body: createFont({
      family: 'Arial',

      size: {
        // You'll want to fill these values in so you can use them

        // for now, fontSize="$4" will be 14px.

        // You can define different keys, but `tamagui`

        // standardizes on 1-15.

        4: 14,
      },

      lineHeight: {
        4: 16,
      },
    }),
  },
});

export type AppConfig = typeof appConfig;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
