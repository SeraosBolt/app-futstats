import { MaterialIcons } from '@expo/vector-icons';
import { Button, IconButton, Image, Text, View } from 'native-base';
import React from 'react';
import { SvgUri } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import { LigaState } from '../../../model/redux/LigaState';

const Temporada = (props: any) => {
  const ligaInfo = useSelector((state: LigaState) => state);
  const dispatch = useDispatch();
  const item = ligaInfo.ligaInfo;
  return (
    <View flex={1} backgroundColor={'#22333B'}>
      <View
        flexDir={'row'}
        w={'100%'}
        h={16}
        alignItems={'center'}
        justifyContent={'center'}
        position={'relative'}
        backgroundColor={'manoBrown.400'}
      >
        <IconButton
          position={'absolute'}
          left={0}
          m={2}
          p={4}
          colorScheme={'almond'}
          size={'sm'}
          variant="solid"
          _icon={{
            as: MaterialIcons,
            name: 'arrow-back',
          }}
          onPress={() => props.navigation.navigate('Ligas')}
        />
        <Text
          style={{
            textShadowColor: 'black',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 4,
          }}
          fontSize={28}
          fontWeight={'extrabold'}
          color={'white'}
        >
          MENU
        </Text>
      </View>
      <View bg={'khaki.400'}>
        <View flexDir={'row'} p={2} alignItems={'center'} borderRadius={12}>
          <View w={'20%'} h={'100%'}>
            <Image
              resizeMode="contain"
              h={100}
              w={100}
              source={{ uri: item.league.logo }}
              alt={'logo'}
            />
          </View>
          <View mx={2} w={'80%'}>
            <Text fontWeight={'extrabold'} color={'#22333B'}>
              Liga : {item.league.name}
            </Text>
            <View
              position={'relative'}
              alignItems={'center'}
              w={'100%'}
              flexDir={'row'}
            >
              <View>
                <Text fontWeight={'extrabold'} color={'#22333B'}>
                  Pais : {item.country.name}
                </Text>
              </View>
              <View ml={2} w={'25'} h={'25'}>
                <SvgUri width="100%" height="100%" uri={item.country.flag} />
              </View>
            </View>
            <Text fontWeight={'extrabold'} color={'#22333B'}>
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
        <Button
          colorScheme={'manoBrown'}
          _text={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
          m={2}
          w={'90%'}
          shadow={8}
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
            TABELA
          </Text>
        </Button>
        <Button
          colorScheme={'manoBrown'}
          _text={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
          m={2}
          w={'90%'}
          shadow={8}
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
            ENCONTROS
          </Text>
        </Button>
        <Button
          colorScheme={'manoBrown'}
          _text={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
          m={2}
          w={'90%'}
          shadow={8}
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
        <Button
          colorScheme={'manoBrown'}
          _text={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
          m={2}
          w={'90%'}
          shadow={8}
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
      </View>
    </View>
  );
};

export default Temporada;
