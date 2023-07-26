import { MaterialIcons } from '@expo/vector-icons';
import { Button, Image, Text, View } from 'tamagui';
import React from 'react';
import { SvgUri } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import { LigaState } from '../../../model/redux/LigaState';
import { ChevronLeft } from '@tamagui/lucide-icons';
import Header from '../../components/header/Header';

const Temporada = (props: any) => {
  const ligaInfo = useSelector((state: LigaState) => state);
  const dispatch = useDispatch();
  const item = ligaInfo.ligaInfo;
  return (
    <View flex={1} backgroundColor={'$azulEscuro'}>
      <Header title="MENU" navigation={props.navigation} />
      <View
        marginVertical={4}
        backgroundColor={'$verde'}
        borderRadius={8}
        marginHorizontal={8}
      >
        <View
          flexDirection={'row'}
          p={2}
          alignItems={'center'}
          borderRadius={12}
        >
          <View w={'30%'} h={'100%'}>
            <Image
              resizeMode="contain"
              h={100}
              w={100}
              source={{ uri: item.league.logo }}
              alt={'logo'}
            />
          </View>
          <View mx={2} w={'80%'}>
            <Text fontWeight={'bold'} color={'#22333B'}>
              Liga : {item.league.name}
            </Text>
            <View
              position={'relative'}
              alignItems={'center'}
              w={'100%'}
              flexDirection={'row'}
            >
              <View>
                <Text fontWeight={'bold'} color={'#22333B'}>
                  Pais : {item.country.name}
                </Text>
              </View>
              <View ml={2} w={25} h={25}>
                <SvgUri width="100%" height="100%" uri={item.country.flag} />
              </View>
            </View>
            <Text fontWeight={'bold'} color={'#22333B'}>
              Temporada : {ligaInfo.season}
            </Text>
          </View>
        </View>
      </View>
      <View
        h={'60%'}
        w={'100%'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Button m={8} elevation={8} w={'90%'} backgroundColor={'$verdeEscuro'}>
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
            TABELA
          </Text>
        </Button>
        <Button m={8} elevation={8} w={'90%'} backgroundColor={'$verdeEscuro'}>
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
            ENCONTROS
          </Text>
        </Button>
        <Button
          m={8}
          elevation={8}
          w={'90%'}
          backgroundColor={'$verdeEscuro'}
          onPress={() => props.navigation.navigate('Times')}
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
        <Button m={8} elevation={8} w={'90%'} backgroundColor={'$verdeEscuro'}>
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
      </View>
    </View>
  );
};

export default Temporada;
