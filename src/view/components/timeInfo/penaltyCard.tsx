import React from 'react';
import { View, Text, XStack, YStack } from 'tamagui';
import { ITimeStats } from '../../../model/interfaces/timeInfoInterface';

interface IPenaltyCard {
  timeStats: ITimeStats;
}

const penaltyCard = ({ timeStats }: IPenaltyCard) => {
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
          Pênaltis
        </Text>
      </View>
      <YStack width={'100%'} mt={8} paddingHorizontal={8} space={8}>
        <XStack>
          <View width={'50%'} alignItems="center">
            <Text fontSize={20} fontWeight={'bold'} color={'white'}>
              Marcados
            </Text>
          </View>
          <View width={'50%'} alignItems="center">
            <Text fontSize={20} fontWeight={'bold'} color={'white'}>
              Perdidos
            </Text>
          </View>
        </XStack>
        <XStack>
          <View width={'50%'} alignItems="center">
            <View>
              <Text fontWeight={'bold'} color={'white'}>
                Total: {timeStats?.penalty.scored.total}
              </Text>
              <Text fontWeight={'bold'} color={'white'}>
                % de acerto: {timeStats?.penalty.scored.percentage}
              </Text>
            </View>
          </View>
          <View width={'50%'} alignItems="center">
            <View>
              <Text fontWeight={'bold'} color={'white'}>
                Total: {timeStats?.penalty.missed.total}
              </Text>
              <Text fontWeight={'bold'} color={'white'}>
                % de acerto: {timeStats?.penalty.missed.percentage}
              </Text>
            </View>
          </View>
        </XStack>
      </YStack>
    </View>
  );
};

export default penaltyCard;
