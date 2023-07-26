import { shorthands } from '@tamagui/shorthands';

import { themes, tokens } from '@tamagui/themes';

import { createFont, createTamagui, createTokens } from 'tamagui';

const token = createTokens({
  ...tokens,
  color: {
    ...tokens.color,
    azulEscuro: '#000000',
    verdeEscuro: '#02735E',
    verdeSemiEscuro: '#038C3E',
    verde: '#038C3E',
    verdeClaro: '#0CF25D',
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
