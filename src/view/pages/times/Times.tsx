import React from 'react';
import { Image, Text, View } from 'tamagui';

import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import times from '../../../model/db/times.json';
import { ITimeInfo } from '../../../model/interfaces/timesInterface';
import Header from '../../components/header/Header';

let timesInfo: ITimeInfo[] = times.response;

const Times = (props: any) => {
  const [timeInfo, setTimeInfo] = React.useState<ITimeInfo[]>([]);
  React.useEffect(() => {
    setTimeInfo(timesInfo);
  }, []);
  const renderItem = ({ item, index }: { index: number; item: ITimeInfo }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('TimeInfo', {time: item});
        }}
      >
        <View
          style={{ elevation: 8 }}
          key={index}
          padding={10}
          borderRadius={12}
          m={4}
          backgroundColor={'$verdeEscuro'}
        >
          <View
            flexDirection="row"
            flexWrap="wrap"
            width={'100%'}
            alignItems="center"
          >
            <View width={'25%'} alignItems="center" justifyContent="center">
              <Image
                resizeMode="contain"
                h={65}
                w={65}
                source={{ uri: item.team.logo }}
                alt={'logo'}
              />
            </View>
            <View width={'70%'} ml={12}>
              <Text>Time: {item.team.name}</Text>
              <Text>Fundação: {item.team.founded}</Text>
              <Text>Estádio: {item.venue.name}</Text>
              <Text>
                Capacidade:{' '}
                {item.venue.capacity
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              </Text>
              <Text>Local: {item.venue.city}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View flex={1} backgroundColor={'$azulEscuro'}>
      <Header title="TIMES" navigation={props.navigation} />
      <FlatList
        data={timeInfo}
        style={{ paddingHorizontal: 8 }}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Times;
