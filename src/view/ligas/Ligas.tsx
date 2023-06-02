import React, { ReactElement } from 'react';
import { View, Text, IconButton, FlatList, Image } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { LigaInfo } from '../../model/interfaces/LigasInterface';
import { ListRenderItem } from 'react-native';

let ligas: LigaInfo[] = require('../../model/db/liga.json').response;

const Ligas = (props: any) => {
  React.useEffect(() => {
    console.log(JSON.stringify(ligas[0].league.name, null, 2));
  }, []);

  const renderItem = ({ index, item }: { item: LigaInfo; index: number }) => {
    return (
      <View m={2} borderRadius={8}>
        <View background={'khaki.400'} flexDir={'row'} p={2} borderRadius={12}>
          <View w={'20%'} h={'100%'}>
            <Image
              resizeMode="contain"
              h={'100%'}
              w={'100%'}
              source={{ uri: item.league.logo }}
              alt={'logo'}
            />
          </View>
          <View mx={2} w={'80%'}>
            <Text fontWeight={'extrabold'} color={'#22333B'}>
              Liga : {item.league.name}
            </Text>
            <Text fontWeight={'extrabold'} color={'#22333B'}>
              Pais : {item.country.name}
            </Text>
            <View w={'100%'} alignItems={'center'}>
              <View
                backgroundColor={'almond.400'}
                alignItems={'center'}
                p={2}
                borderRadius={12}
                w={'50%'}
                my={2}
              >
                <Text fontWeight={'extrabold'} color={'#22333B'}>
                  Temporadas
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View flex={1} backgroundColor={'#22333B'} alignItems={'center'}>
      <View
        flexDir={'row'}
        w={'100%'}
        h={16}
        alignItems={'center'}
        justifyContent={'center'}
        position={'relative'}
        backgroundColor={'walnutBrown.400'}
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
          onPress={() => props.navigation.navigate('Home')}
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
          LIGAS
        </Text>
      </View>
      <View w={'100%'}>
        <FlatList data={ligas} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default Ligas;
