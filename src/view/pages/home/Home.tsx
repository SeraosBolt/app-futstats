import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'tamagui';
import React from 'react';
import { ImageBackground } from 'react-native';

interface Props {
  navigation: any;
}

const Home = (props: Props) => {
  const awaitRequest = async () => {
    //const ligas: LigaInfo[] = await getLigas();
  };
  React.useEffect(() => {
    awaitRequest();
  }, []);

  let image = require('../../../assets/images/campo.png');

  return (
    <View
      flex={1}
      backgroundColor={'#40750b'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <StatusBar style="light" backgroundColor="#22333B" />
      <ImageBackground
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        source={image}
        resizeMode={'cover'}
      >
        <View height="100%" width={'100%'} alignItems={'center'}>
          <View
            height={'40%'}
            width={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
            paddingHorizontal={4}
          >
            <Text
              style={{
                textShadowColor: 'black',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 4,
              }}
              fontSize={60}
              fontWeight={'bold'}
              color={'white'}
            >
              FUTSTATS
            </Text>
          </View>
          <View
            height={'60%'}
            width={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Button
              margin={8}
              width={'90%'}
              onPress={() => props.navigation.navigate('Ligas')}
              elevation={8}
              backgroundColor={'$verdeEscuro'}
            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  textShadowColor: 'black',
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 4,
                }}
              >
                LIGAS
              </Text>
            </Button>
            <Button
              margin={8}
              width={'90%'}
              elevation={8}
              backgroundColor={'$verdeEscuro'}
            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  textShadowColor: 'black',
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 4,
                }}
              >
                JOGADORES
              </Text>
            </Button>
            <Button
              margin={8}
              width={'90%'}
              elevation={8}
              backgroundColor={'$verdeEscuro'}
            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  textShadowColor: 'black',
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 4,
                }}
              >
                TIMES
              </Text>
            </Button>
            <Button
              margin={8}
              width={'90%'}
              elevation={8}
              backgroundColor={'$verdeEscuro'}
            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  textShadowColor: 'black',
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 4,
                }}
              >
                LIGAS
              </Text>
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
