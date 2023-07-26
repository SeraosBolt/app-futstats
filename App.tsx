import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import * as Font from 'expo-font';

import { theme } from './src/model/theme/theme';

import { TamaguiProvider } from 'tamagui'

import appConfig from './tamagui.config'

import Home from './src/view/pages/home/Home';
import Ligas from './src/view/pages/ligas/Ligas';
import Temporada from './src/view/pages/temporada/Temporada';
import { leagueStore } from './src/model/redux/LigaState';
import Times from './src/view/pages/times/Times';
import TimesInfo from './src/view/pages/timeInfo/TimeInfo';

let custom_fonts = {
  'NotoSans-Regular': require('./src/assets/fonts/NotoSans-Regular.ttf'),
  'NotoSans-Italic': require('./src/assets/fonts/NotoSans-Italic.ttf'),
  'NotoSans-Medium': require('./src/assets/fonts/NotoSans-Medium.ttf'),
  'NotoSans-MediumItalic': require('./src/assets/fonts/NotoSans-MediumItalic.ttf'),
  'NotoSans-Bold': require('./src/assets/fonts/NotoSans-Bold.ttf'),
  'NotoSans-BoldItalic': require('./src/assets/fonts/NotoSans-BoldItalic.ttf'),
  'NotoSans-Light': require('./src/assets/fonts/NotoSans-Regular.ttf'),
  'NotoSans-LightItalic': require('./src/assets/fonts/NotoSans-Regular.ttf'),
};

const stack = createStackNavigator();
export default function App() {
  const [fontsLoaded, setFontLoaded] = React.useState<boolean>(false);

  const LoadFonts = async () => {
    await Font.loadAsync(custom_fonts);
    setFontLoaded(true);
  };

  React.useEffect(() => {
    LoadFonts();
  }, []);

  if (fontsLoaded) {
    return (
      <Provider store={leagueStore}>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <TamaguiProvider config={appConfig}>
          <NavigationContainer>
            <stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            >
              <stack.Screen name="Home" component={Home} />
              <stack.Screen name="Ligas" component={Ligas} />
              <stack.Screen name="Temporada" component={Temporada} />
              <stack.Screen name="Times" component={Times} />
              <stack.Screen name="TimeInfo" component={TimesInfo} />
            </stack.Navigator>
          </NavigationContainer>
        </TamaguiProvider>
      </SafeAreaView>
      </Provider>
    );
  }
}
