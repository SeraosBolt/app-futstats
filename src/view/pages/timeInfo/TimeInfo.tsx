import React from 'react';
import { View, Text, Image, XStack, YStack, Tabs } from 'tamagui';
import Header from '../../components/header/Header';
import { getTeamInfo } from '../../../model/service/AxiosRequests';
import { ITimeStats } from '../../../model/interfaces/timeInfoInterface';
import { ITimeInfo } from '../../../model/interfaces/timesInterface';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import EncontrosCard from '../../components/timeInfo/EncontrosCard';
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons';
import GolsCard from '../../components/timeInfo/golsCard/GolsCard';
import EscalacoesCard from '../../components/timeInfo/EscalacoesCard';
import PenaltyCard from '../../components/timeInfo/penaltyCard';
import CartoesCard from '../../components/timeInfo/CartoesCard';

const TimeInfo = (props: any) => {
  const [timeInfo, setTimeInfo] = React.useState<ITimeInfo>(
    props.route.params.time
  );
  const [timeStats, setTimeStats] = React.useState<ITimeStats>();

  const temInfoHandler = async () => {
    const resp = await getTeamInfo(timeInfo.team.id)[0];
    setTimeStats(resp);
  };

  const formaColorHandler = (forma: string) => {
    if (forma === 'W') {
      return '#29F000';
    } else if (forma === 'L') {
      return '#FF0000';
    } else {
      return 'grey';
    }
  };
  React.useEffect(() => {
    temInfoHandler();
  }, []);
  return (
    <View flex={1} backgroundColor={'$azulEscuro'}>
      <Header title="TIME INFO" navigation={props.navigation} />
      <View
        style={{ elevation: 8 }}
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
              source={{ uri: timeStats?.team.logo }}
              alt={'logo'}
            />
          </View>
          <View width={'70%'} ml={12}>
            <Text>Time: {timeStats?.team.name}</Text>
            <Text>Liga: {timeStats?.league.name}</Text>
            <Text>Pais: {timeStats?.league.country}</Text>
            <Text>Temporada: {timeStats?.league.season}</Text>
            <View flexDirection="row" mt={8}>
              <Text>Forma: </Text>
              {timeStats?.form.split('').map((item, index) => {
                while (index < 5) {
                  return (
                    <View
                      backgroundColor={formaColorHandler(item)}
                      width={30}
                      alignItems="center"
                      padding={2}
                      marginHorizontal={2}
                      borderRadius={4}
                    >
                      <Text color={'white'} fontWeight={'bold'} key={index}>
                        {item}
                      </Text>
                    </View>
                  );
                }
              })}
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <EncontrosCard
          formaColorHandler={formaColorHandler}
          timeStats={timeStats}
        />
        <GolsCard timeStats={timeStats} />
        <EscalacoesCard timeStats={timeStats} />
        <PenaltyCard timeStats={timeStats}/>
        <CartoesCard timeStats={timeStats}/>
      </ScrollView>
    </View>
  );
};

export default TimeInfo;
