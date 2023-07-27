import { ChevronUp, ChevronDown } from '@tamagui/lucide-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, XStack, YStack, Tabs } from 'tamagui';
import { ITimeStats } from '../../../../model/interfaces/timeInfoInterface';
import GolsMinuto from './GolsMinuto';

interface IGolsCard {
  timeStats: ITimeStats;
}

let tabController = {
  tab1: {
    backGround: '$verde',
    textColor: 'white',
  },
  tab2: {
    backGround: '$verde',
    textColor: 'white',
  },
  tab3: {
    backGround: '$verde',
    textColor: 'white',
  },
};

const GolsCard = ({ timeStats }: IGolsCard) => {
  const [showGolsMin, setShowGolsMin] = React.useState<boolean>(false);
  const [tabColor, setTabColor] = React.useState<any>(tabController);

  const tabColorHandler = (tab: string) => {
    let tabDefault = {
      tab1: {
        backGround: '$verde',
        textColor: 'white',
      },
      tab2: {
        backGround: '$verde',
        textColor: 'white',
      },
      tab3: {
        backGround: '$verde',
        textColor: 'white',
      },
    };
    if (tab === 'tab1') {
      tabDefault.tab1.backGround = '$azulEscuro';
      tabDefault.tab1.textColor = 'black';
      setTabColor(tabDefault);
      return '$verde';
    } else if (tab === 'tab2') {
      tabDefault.tab2.backGround = '$azulEscuro';
      tabDefault.tab2.textColor = 'black';
      setTabColor(tabDefault);
    } else {
      tabDefault.tab3.backGround = '$azulEscuro';
      tabDefault.tab3.textColor = 'black';
      setTabColor(tabDefault);
    }
  };
  return (
    <View
      style={{ elevation: 8 }}
      borderRadius={12}
      m={4}
      pb={8}
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
          Gols
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
            backgroundColor={tabColor.tab1.backGround}
            borderRadius={12}
            value="tab1"
            onInteraction={(value) => {
              tabColorHandler('tab1');
            }}
          >
            <Text fontWeight={'bold'} color={tabColor.tab1.textColor}>
              Total
            </Text>
          </Tabs.Tab>
          <Tabs.Tab
            width={'30%'}
            backgroundColor={tabColor.tab2.backGround}
            borderRadius={12}
            value="tab2"
            onInteraction={(value) => {
              tabColorHandler('tab2');
            }}
          >
            <Text color={tabColor.tab2.textColor}>Casa</Text>
          </Tabs.Tab>
          <Tabs.Tab
            width={'30%'}
            backgroundColor={tabColor.tab3.backGround}
            borderRadius={12}
            value="tab3"
            onInteraction={(value) => {
              tabColorHandler('tab3');
            }}
          >
            <Text color={tabColor.tab3.textColor}>Fora</Text>
          </Tabs.Tab>
        </Tabs.List>
        <View>
          <Tabs.Content value="tab1">
            <YStack width={'100%'} mt={8} alignItems="center">
              <XStack justifyContent="space-between" width={'100%'}>
                <View width={'50%'} alignItems="center">
                  <Text fontSize={20} fontWeight={'bold'} color={'white'}>
                    Marcados
                  </Text>
                  <View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>Total: </Text>
                      <Text>{timeStats?.goals?.for.total.total}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>Média: </Text>
                      <Text>{timeStats?.goals?.for.average.total}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>S/ Marcar: </Text>
                      <Text>{timeStats?.failed_to_score.total}</Text>
                    </View>
                  </View>
                </View>
                <View width={'50%'} alignItems="center">
                  <Text fontSize={20} fontWeight={'bold'} color={'white'}>
                    Sofridos
                  </Text>
                  <View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>Total: </Text>
                      <Text>{timeStats?.goals.against.total.total}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>Média: </Text>
                      <Text>{timeStats?.goals.against.average.total}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>S/ Sofrer: </Text>
                      <Text>{timeStats?.clean_sheet.total}</Text>
                    </View>
                  </View>
                </View>
              </XStack>
              <View w={'60%'}>
                <TouchableOpacity
                  style={{
                    marginTop: 4,
                    backgroundColor: '#43652C',
                    borderRadius: 12,
                    padding: 4,
                    alignItems: 'center',
                  }}
                  onPress={() => setShowGolsMin(!showGolsMin)}
                >
                  <View
                    backgroundColor={'$verde'}
                    alignItems={'center'}
                    p={8}
                    borderRadius={12}
                    w={'100%'}
                    my={2}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                  >
                    <View>
                      <Text fontWeight={'bold'} color={'white'}>
                        Gols / 15min
                      </Text>
                    </View>
                    <View>{showGolsMin ? <ChevronUp /> : <ChevronDown />}</View>
                  </View>
                </TouchableOpacity>
              </View>
              {showGolsMin && <GolsMinuto timeStats={timeStats} />}
            </YStack>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <YStack width={'100%'} mt={8} alignItems="center">
              <XStack justifyContent="space-between" width={'100%'}>
                <View width={'50%'} alignItems="center">
                  <Text fontSize={20} fontWeight={'bold'} color={'white'}>
                    Marcados
                  </Text>
                  <View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>Total: </Text>
                      <Text>{timeStats?.goals?.for.total.home}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>Média: </Text>
                      <Text>{timeStats?.goals?.for.average.home}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>S/ Marcar: </Text>
                      <Text>{timeStats?.failed_to_score.home}</Text>
                    </View>
                  </View>
                </View>
                <View width={'50%'} alignItems="center">
                  <Text fontSize={20} fontWeight={'bold'} color={'white'}>
                    Sofridos
                  </Text>
                  <View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>Total: </Text>
                      <Text>{timeStats?.goals.against.total.home}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>Média: </Text>
                      <Text>{timeStats?.goals.against.average.home}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>S/ Sofrer: </Text>
                      <Text>{timeStats?.clean_sheet.home}</Text>
                    </View>
                  </View>
                </View>
              </XStack>
              <View w={'60%'}>
                <TouchableOpacity
                  style={{
                    marginTop: 4,
                    backgroundColor: '#43652C',
                    borderRadius: 12,
                    padding: 4,
                    alignItems: 'center',
                  }}
                  onPress={() => setShowGolsMin(!showGolsMin)}
                >
                  <View
                    backgroundColor={'$verde'}
                    alignItems={'center'}
                    p={8}
                    borderRadius={12}
                    w={'100%'}
                    my={2}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                  >
                    <View>
                      <Text fontWeight={'bold'} color={'white'}>
                        Gols / 15min
                      </Text>
                    </View>
                    <View>{showGolsMin ? <ChevronUp /> : <ChevronDown />}</View>
                  </View>
                </TouchableOpacity>
              </View>
              {showGolsMin && <GolsMinuto timeStats={timeStats} />}
            </YStack>
          </Tabs.Content>
          <Tabs.Content value="tab3">
            <YStack width={'100%'} mt={8} alignItems="center">
              <XStack justifyContent="space-between" width={'100%'}>
                <View width={'50%'} alignItems="center">
                  <Text fontSize={20} fontWeight={'bold'} color={'white'}>
                    Marcados
                  </Text>
                  <View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>Total: </Text>
                      <Text>{timeStats?.goals?.for.total.away}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>Média: </Text>
                      <Text>{timeStats?.goals?.for.average.away}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>S/ Marcar: </Text>
                      <Text>{timeStats?.failed_to_score.away}</Text>
                    </View>
                  </View>
                </View>
                <View width={'50%'} alignItems="center">
                  <Text fontSize={20} fontWeight={'bold'} color={'white'}>
                    Sofridos
                  </Text>
                  <View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>Total: </Text>
                      <Text>{timeStats?.goals.against.total.away}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>Média: </Text>
                      <Text>{timeStats?.goals.against.average.away}</Text>
                    </View>
                    <View flexDirection="row" alignItems="center">
                      <Text fontWeight={'bold'}>S/ Sofrer: </Text>
                      <Text>{timeStats?.clean_sheet.away}</Text>
                    </View>
                  </View>
                </View>
              </XStack>
              <View w={'60%'}>
                <TouchableOpacity
                  style={{
                    marginTop: 4,
                    backgroundColor: '#43652C',
                    borderRadius: 12,
                    padding: 4,
                    alignItems: 'center',
                  }}
                  onPress={() => setShowGolsMin(!showGolsMin)}
                >
                  <View
                    backgroundColor={'$verde'}
                    alignItems={'center'}
                    p={8}
                    borderRadius={12}
                    w={'100%'}
                    my={2}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                  >
                    <View>
                      <Text fontWeight={'bold'} color={'white'}>
                        Gols / 15min
                      </Text>
                    </View>
                    <View>{showGolsMin ? <ChevronUp /> : <ChevronDown />}</View>
                  </View>
                </TouchableOpacity>
              </View>
              {showGolsMin && <GolsMinuto timeStats={timeStats} />}
            </YStack>
          </Tabs.Content>
        </View>
      </Tabs>
    </View>
  );
};

export default GolsCard;
