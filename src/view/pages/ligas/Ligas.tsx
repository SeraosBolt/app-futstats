import { MaterialIcons } from '@expo/vector-icons';
import { Button, Text, View } from 'tamagui';
import React from 'react';
import { ChevronLeft } from '@tamagui/lucide-icons';
import { FlatList } from 'react-native-gesture-handler';
import { LigaInfo } from '../../../model/interfaces/LigasInterface';
import LigaCard from '../../components/ligasComponents/LigaCard';
import Header from '../../components/header/Header';

let ligas: LigaInfo[] = require('../../../model/db/liga.json').response;

const Ligas = (props: any) => {
  const [ligaInfo, setLigaInfo] = React.useState<LigaInfo[]>([]);
  React.useEffect(() => {
    setLigaInfo(ligas);
  }, []);
  const renderItem = ({ item, index }: { index: number; item: LigaInfo }) => {
    return (
      <LigaCard
        key={index}
        item={item}
        data={ligaInfo}
        setLigaInfo={setLigaInfo}
      />
    );
  };
  return (
    <View flex={1} backgroundColor={'$azulEscuro'}>
      <Header title='LIGAS' navigation={props.navigation}/>
      <FlatList
        data={ligaInfo}
        style={{ paddingHorizontal: 8 }}
        renderItem={renderItem}
        keyExtractor={(item) => item.league.id.toString()}
      />
    </View>
  );
};

export default Ligas;
