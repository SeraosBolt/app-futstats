import React from 'react';
import { View, Text } from 'tamagui';
import { ITimeStats } from '../../../model/interfaces/timeInfoInterface';

interface IEscalacoesCard {
  timeStats: ITimeStats;
}

const EscalacoesCard = ({ timeStats }: IEscalacoesCard) => {
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
          Escalações
        </Text>
      </View>
      <View paddingVertical={8} alignItems="center">
        {timeStats?.lineups.length > 0 ? (
          timeStats?.lineups.map((item, index) => {
            return <Text>{item.formation}</Text>;
          })
        ) : (
          <Text fontWeight={'bold'}>Não há informações de escalações</Text>
        )}
      </View>
    </View>
  );
};

export default EscalacoesCard;
