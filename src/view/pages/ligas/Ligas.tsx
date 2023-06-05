import { MaterialIcons } from '@expo/vector-icons';
import { IconButton, Text, View } from 'native-base';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { LigaInfo } from '../../../model/interfaces/LigasInterface';
import LigaCard from '../../components/ligasComponents/LigaCard';

let ligas: LigaInfo[] = require('../../../model/db/liga.json').response;

const Ligas = (props: any) => {
  const [ligaInfo, setLigaInfo] = React.useState<LigaInfo[]>([]);
  React.useEffect(() => {
    setLigaInfo(ligas);
  }, []);
  const renderItem = ({ item, index }: { index: number; item: LigaInfo }) => {
    return <LigaCard item={item} data={ligaInfo} setLigaInfo={setLigaInfo} />;
  };
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
      <FlatList
        data={ligaInfo}
        renderItem={renderItem}
        keyExtractor={(item) => item.league.id.toString()}
      />
    </View>
  );
};

export default Ligas;
