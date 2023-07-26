import React from 'react';
import { View, Text, Image, XStack, YStack, Tabs } from 'tamagui';
import Header from '../../components/header/Header';
import { getTeamInfo } from '../../../model/service/AxiosRequests';
import { ITimeStats } from '../../../model/interfaces/timeInfoInterface';
import { ITimeInfo } from '../../../model/interfaces/timesInterface';

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
      <View
        style={{ elevation: 8 }}
        borderRadius={12}
        m={4}
        backgroundColor={'$verdeEscuro'}
      >
        <View
          alignItems="center"
          marginBottom={8}
          justifyContent="center"
          borderBottomWidth={1}
          width={'100%'}
          borderBottomColor={'white'}
        >
          <Text fontSize={28} fontWeight={'bold'} color={'white'}>
            Encontros
          </Text>
        </View>
        <Tabs flexDirection="column" defaultValue="tab1">
          <Tabs.List
            backgroundColor="transparent"
            width={'100%'}
            justifyContent="space-around"
          >
            <Tabs.Tab
              width={'30%'}
              backgroundColor={'$verde'}
              borderRadius={12}
              value="tab1"
            >
              <Text>Total</Text>
            </Tabs.Tab>
            <Tabs.Tab
              width={'30%'}
              backgroundColor={'$verde'}
              borderRadius={12}
              value="tab2"
            >
              <Text>Casa</Text>
            </Tabs.Tab>
            <Tabs.Tab
              width={'30%'}
              backgroundColor={'$verde'}
              borderRadius={12}
              value="tab3"
            >
              <Text>Fora</Text>
            </Tabs.Tab>
          </Tabs.List>
          <View>
            <Tabs.Content value="tab1">
              <YStack width={'100%'} mt={8} paddingHorizontal={8} space={8}>
                <XStack>
                  <View w={'65%'}>
                    <Text fontSize={20} fontWeight={'bold'} color={'white'}>
                      Total
                    </Text>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>Total: </Text>
                      <Text>{timeStats?.fixtures.played.total}</Text>
                    </View>
                  </View>
                  <YStack space={8}>
                    <View flexDirection="row" alignItems="center">
                      <View
                        backgroundColor={formaColorHandler('W')}
                        width={30}
                        alignItems="center"
                        padding={2}
                        marginRight={8}
                        borderRadius={4}
                      >
                        <Text color={'white'} fontWeight={'bold'}>
                          W
                        </Text>
                      </View>
                      <Text fontWeight={'bold'}>Vitórias: </Text>
                      <Text>{timeStats?.fixtures.wins.total}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <View
                        backgroundColor={formaColorHandler('D')}
                        width={30}
                        alignItems="center"
                        padding={2}
                        marginRight={8}
                        borderRadius={4}
                      >
                        <Text color={'white'} fontWeight={'bold'}>
                          D
                        </Text>
                      </View>
                      <Text fontWeight={'bold'}>Empates: </Text>
                      <Text>{timeStats?.fixtures.draws.total}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <View
                        backgroundColor={formaColorHandler('L')}
                        width={30}
                        alignItems="center"
                        padding={2}
                        marginRight={8}
                        borderRadius={4}
                      >
                        <Text color={'white'} fontWeight={'bold'}>
                          L
                        </Text>
                      </View>
                      <Text fontWeight={'bold'}>Derrotas: </Text>
                      <Text>{timeStats?.fixtures.loses.total}</Text>
                    </View>
                  </YStack>
                </XStack>
              </YStack>
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <YStack space={8} paddingHorizontal={8} mt={8} width={'100%'}>
                <XStack>
                  <View w={'65%'}>
                    <Text fontSize={20} fontWeight={'bold'} color={'white'}>
                      Encontros em casa
                    </Text>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>Jogos: </Text>
                      <Text>{timeStats?.fixtures.played.home}</Text>
                    </View>
                  </View>
                  <YStack space={8}>
                    <View flexDirection="row" alignItems="center">
                      <View
                        backgroundColor={formaColorHandler('W')}
                        width={30}
                        alignItems="center"
                        padding={2}
                        marginRight={8}
                        borderRadius={4}
                      >
                        <Text color={'white'} fontWeight={'bold'}>
                          W
                        </Text>
                      </View>
                      <Text fontWeight={'bold'}>Vitórias: </Text>
                      <Text>{timeStats?.fixtures.wins.home}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <View
                        backgroundColor={formaColorHandler('D')}
                        width={30}
                        alignItems="center"
                        padding={2}
                        marginRight={8}
                        borderRadius={4}
                      >
                        <Text color={'white'} fontWeight={'bold'}>
                          D
                        </Text>
                      </View>
                      <Text fontWeight={'bold'}>Empates: </Text>
                      <Text>{timeStats?.fixtures.draws.home}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <View
                        backgroundColor={formaColorHandler('L')}
                        width={30}
                        alignItems="center"
                        padding={2}
                        marginRight={8}
                        borderRadius={4}
                      >
                        <Text color={'white'} fontWeight={'bold'}>
                          L
                        </Text>
                      </View>
                      <Text fontWeight={'bold'}>Derrotas: </Text>
                      <Text>{timeStats?.fixtures.loses.home}</Text>
                    </View>
                  </YStack>
                </XStack>
              </YStack>
            </Tabs.Content>
            <Tabs.Content value="tab3">
              <YStack width={'100%'} paddingHorizontal={8} mt={8} space={8}>
                <XStack>
                  <View w={'65%'}>
                    <Text fontSize={20} fontWeight={'bold'} color={'white'}>
                      Encontros Fora
                    </Text>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>Jogos: </Text>
                      <Text>{timeStats?.fixtures.played.away}</Text>
                    </View>
                  </View>
                  <YStack space={8}>
                    <View flexDirection="row" alignItems="center">
                      <View
                        backgroundColor={formaColorHandler('W')}
                        width={30}
                        alignItems="center"
                        padding={2}
                        marginRight={8}
                        borderRadius={4}
                      >
                        <Text color={'white'} fontWeight={'bold'}>
                          W
                        </Text>
                      </View>
                      <Text fontWeight={'bold'}>Vitórias: </Text>
                      <Text>{timeStats?.fixtures.wins.away}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <View
                        backgroundColor={formaColorHandler('D')}
                        width={30}
                        alignItems="center"
                        padding={2}
                        marginRight={8}
                        borderRadius={4}
                      >
                        <Text color={'white'} fontWeight={'bold'}>
                          D
                        </Text>
                      </View>
                      <Text fontWeight={'bold'}>Empates: </Text>
                      <Text>{timeStats?.fixtures.draws.away}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <View
                        backgroundColor={formaColorHandler('L')}
                        width={30}
                        alignItems="center"
                        padding={2}
                        marginRight={8}
                        borderRadius={4}
                      >
                        <Text color={'white'} fontWeight={'bold'}>
                          L
                        </Text>
                      </View>
                      <Text fontWeight={'bold'}>Derrotas: </Text>
                      <Text>{timeStats?.fixtures.loses.away}</Text>
                    </View>
                  </YStack>
                </XStack>
              </YStack>
            </Tabs.Content>
          </View>
        </Tabs>
        <YStack
          space={8}
          flexWrap="wrap"
          width={'100%'}
          paddingVertical={8}
          paddingHorizontal={12}
        ></YStack>
      </View>
    </View>
  );
};

export default TimeInfo;
