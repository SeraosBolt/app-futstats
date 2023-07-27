import React from 'react';
import { View, Text, Tabs, XStack, YStack } from 'tamagui';

interface IEncontrosCard {
  timeStats: any;
  formaColorHandler: any;
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

const EncontrosCard = ({ timeStats, formaColorHandler }: IEncontrosCard) => {
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
            backgroundColor={tabColor.tab1.backGround}
            borderRadius={12}
            value="tab1"
            onInteraction={(value) => {
              tabColorHandler('tab1');
            }}
          >
            <Text color={tabColor.tab1.textColor}>Total</Text>
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
    </View>
  );
};

export default EncontrosCard;
