import React from 'react';
import { View, Text, XStack, YStack } from 'tamagui';
import { ITimeStats } from '../../../model/interfaces/timeInfoInterface';

interface ICartoesCard {
  timeStats: ITimeStats;
}
const CartoesCard = ({ timeStats }: ICartoesCard) => {
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
          Cartões
        </Text>
      </View>
      <YStack width={'100%'} mt={8} alignItems="center">
        <XStack justifyContent="space-between" width={'100%'}>
          <View width={'50%'} alignItems="center">
            <Text fontSize={20} fontWeight={'bold'} color={'white'}>
              Amarelos
            </Text>
          </View>
          <View width={'50%'} alignItems="center">
            <Text fontSize={20} fontWeight={'bold'} color={'white'}>
              Vermelhos
            </Text>
          </View>
        </XStack>
        <XStack justifyContent="space-between" width={'100%'}>
          <View width={'50%'} alignItems="center">
            <View
              style={{ elevation: 8 }}
              borderRadius={12}
              m={4}
              p={8}
              backgroundColor={'$verde'}
              width={'95%'}
              space={8}
            >
              <XStack justifyContent="space-around" width={'100%'}>
                <View
                  p={4}
                  width={'45%'}
                  alignItems="center"
                  backgroundColor={'$verdeEscuro'}
                  borderRadius={12}
                >
                  <View
                    borderBottomWidth={1}
                    mb={4}
                    alignItems="center"
                    width={'100%'}
                    borderBottomColor={'white'}
                  >
                    <Text fontWeight={'bold'}>0 - 15</Text>
                  </View>
                  <View alignItems="center">
                    <Text fontWeight={'bold'}>
                      Total:{' '}
                      {timeStats?.cards.yellow['0-15'].total === null
                        ? '0'
                        : timeStats?.cards.yellow['106-120'].total}
                    </Text>
                    <Text fontWeight={'bold'}>
                      {timeStats?.cards.yellow['0-15'].percentage === null
                        ? '0%'
                        : timeStats?.cards.yellow['0-15'].percentage}
                    </Text>
                  </View>
                </View>
                <View
                  p={4}
                  width={'45%'}
                  alignItems="center"
                  backgroundColor={'$verdeEscuro'}
                  borderRadius={12}
                >
                  <View
                    borderBottomWidth={1}
                    mb={4}
                    alignItems="center"
                    width={'100%'}
                    borderBottomColor={'white'}
                  >
                    <Text fontWeight={'bold'}>16 - 30</Text>
                  </View>
                  <View alignItems="center">
                    <Text fontWeight={'bold'}>
                      Total:{' '}
                      {timeStats?.cards.yellow['16-30'].total === null
                        ? '0'
                        : timeStats?.cards.yellow['106-120'].total}
                    </Text>
                    <Text fontWeight={'bold'}>
                      {timeStats?.cards.yellow['16-30'].percentage === null
                        ? '0%'
                        : timeStats?.cards.yellow['0-15'].percentage}
                    </Text>
                  </View>
                </View>
              </XStack>
              <XStack justifyContent="space-around" width={'100%'}>
                <View
                  p={4}
                  width={'45%'}
                  alignItems="center"
                  backgroundColor={'$verdeEscuro'}
                  borderRadius={12}
                >
                  <View
                    borderBottomWidth={1}
                    mb={4}
                    alignItems="center"
                    width={'100%'}
                    borderBottomColor={'white'}
                  >
                    <Text fontWeight={'bold'}>31 - 45</Text>
                  </View>
                  <View alignItems="center">
                    <Text fontWeight={'bold'}>
                      Total:{' '}
                      {timeStats?.cards.yellow['31-45'].total === null
                        ? '0'
                        : timeStats?.cards.yellow['106-120'].total}
                    </Text>
                    <Text fontWeight={'bold'}>
                      {timeStats?.cards.yellow['31-45'].percentage === null
                        ? '0%'
                        : timeStats?.cards.yellow['0-15'].percentage}
                    </Text>
                  </View>
                </View>
                <View
                  p={4}
                  width={'45%'}
                  alignItems="center"
                  backgroundColor={'$verdeEscuro'}
                  borderRadius={12}
                >
                  <View
                    borderBottomWidth={1}
                    mb={4}
                    alignItems="center"
                    width={'100%'}
                    borderBottomColor={'white'}
                  >
                    <Text fontWeight={'bold'}>46 - 60</Text>
                  </View>
                  <View alignItems="center">
                    <Text fontWeight={'bold'}>
                      Total:{' '}
                      {timeStats?.cards.yellow['46-60'].total === null
                        ? '0'
                        : timeStats?.cards.yellow['106-120'].total}
                    </Text>
                    <Text fontWeight={'bold'}>
                      {timeStats?.cards.yellow['46-60'].percentage === null
                        ? '0%'
                        : timeStats?.cards.yellow['0-15'].percentage}
                    </Text>
                  </View>
                </View>
              </XStack>
              <XStack justifyContent="space-around" width={'100%'}>
                <View
                  p={4}
                  width={'45%'}
                  alignItems="center"
                  backgroundColor={'$verdeEscuro'}
                  borderRadius={12}
                >
                  <View
                    borderBottomWidth={1}
                    mb={4}
                    alignItems="center"
                    width={'100%'}
                    borderBottomColor={'white'}
                  >
                    <Text fontWeight={'bold'}>61 - 75</Text>
                  </View>
                  <View alignItems="center">
                    <Text fontWeight={'bold'}>
                      Total:{' '}
                      {timeStats?.cards.yellow['61-75'].total === null
                        ? '0'
                        : timeStats?.cards.yellow['106-120'].total}
                    </Text>
                    <Text fontWeight={'bold'}>
                      {timeStats?.cards.yellow['61-75'].percentage === null
                        ? '0%'
                        : timeStats?.cards.yellow['0-15'].percentage}
                    </Text>
                  </View>
                </View>
                <View
                  p={4}
                  width={'45%'}
                  alignItems="center"
                  backgroundColor={'$verdeEscuro'}
                  borderRadius={12}
                >
                  <View
                    borderBottomWidth={1}
                    mb={4}
                    alignItems="center"
                    width={'100%'}
                    borderBottomColor={'white'}
                  >
                    <Text fontWeight={'bold'}>76 - 90</Text>
                  </View>
                  <View alignItems="center">
                    <Text fontWeight={'bold'}>
                      Total:{' '}
                      {timeStats?.cards.yellow['76-90'].total === null
                        ? '0'
                        : timeStats?.cards.yellow['106-120'].total}
                    </Text>
                    <Text fontWeight={'bold'}>
                      {timeStats?.cards.yellow['76-90'].percentage === null
                        ? '0%'
                        : timeStats?.cards.yellow['0-15'].percentage}
                    </Text>
                  </View>
                </View>
              </XStack>
              <XStack justifyContent="space-around" width={'100%'}>
                <View
                  p={4}
                  width={'45%'}
                  alignItems="center"
                  backgroundColor={'$verdeEscuro'}
                  borderRadius={12}
                >
                  <View
                    borderBottomWidth={1}
                    mb={4}
                    alignItems="center"
                    width={'100%'}
                    borderBottomColor={'white'}
                  >
                    <Text fontWeight={'bold'}>91 - 105</Text>
                  </View>
                  <View alignItems="center">
                    <Text fontWeight={'bold'}>
                      Total:{' '}
                      {timeStats?.cards.yellow['91-105'].total === null
                        ? '0'
                        : timeStats?.cards.yellow['106-120'].total}
                    </Text>
                    <Text fontWeight={'bold'}>
                      {timeStats?.cards.yellow['91-105'].percentage === null
                        ? '0%'
                        : timeStats?.cards.yellow['0-15'].percentage}
                    </Text>
                  </View>
                </View>
                <View
                  p={4}
                  width={'45%'}
                  alignItems="center"
                  backgroundColor={'$verdeEscuro'}
                  borderRadius={12}
                >
                  <View
                    borderBottomWidth={1}
                    mb={4}
                    alignItems="center"
                    width={'100%'}
                    borderBottomColor={'white'}
                  >
                    <Text fontWeight={'bold'}>106-120</Text>
                  </View>
                  <View alignItems="center">
                    <Text fontWeight={'bold'}>
                      Total:{' '}
                      {timeStats?.cards.yellow['106-120'].total === null
                        ? '0'
                        : timeStats?.cards.yellow['106-120'].total}
                    </Text>
                    <Text fontWeight={'bold'}>
                      {timeStats?.cards.yellow['106-120'].percentage === null
                        ? '0%'
                        : timeStats?.cards.yellow['106-120'].percentage}
                    </Text>
                  </View>
                </View>
              </XStack>
            </View>
          </View>
          <View width={'50%'} alignItems="center">
            <View
              style={{ elevation: 8 }}
              borderRadius={12}
              m={4}
              p={8}
              backgroundColor={'$verde'}
              width={'95%'}
              space={8}
            >
              <XStack justifyContent="space-around" width={'100%'}>
                <View
                  p={4}
                  width={'45%'}
                  alignItems="center"
                  backgroundColor={'$verdeEscuro'}
                  borderRadius={12}
                >
                  <View
                    borderBottomWidth={1}
                    mb={4}
                    alignItems="center"
                    width={'100%'}
                    borderBottomColor={'white'}
                  >
                    <Text fontWeight={'bold'}>0 - 15</Text>
                  </View>
                  <View alignItems='center'>
                    <Text fontWeight={'bold'}>
                      Total:{' '}
                      {timeStats?.cards.red['0-15'].total === null
                        ? '0'
                        : timeStats?.cards.red['0-15'].total}
                    </Text>
                    <Text fontWeight={'bold'}>
                      {timeStats?.cards.red['0-15'].percentage === null ? "0%" : timeStats?.cards.red['0-15'].percentage}
                    </Text>
                  </View>
                </View>
                <View
                  p={4}
                  width={'45%'}
                  alignItems="center"
                  backgroundColor={'$verdeEscuro'}
                  borderRadius={12}
                >
                  <View
                    borderBottomWidth={1}
                    mb={4}
                    alignItems="center"
                    width={'100%'}
                    borderBottomColor={'white'}
                  >
                    <Text fontWeight={'bold'}>16 - 30</Text>
                  </View>
                  <View alignItems="center">
                    <Text fontWeight={'bold'}>
                      Total:{' '}
                      {timeStats?.cards.red['16-30'].total === null
                        ? '0'
                        : timeStats?.cards.red['16-30'].total}
                    </Text>
                    <Text fontWeight={'bold'}>
                      {timeStats?.cards.red['16-30'].percentage === null ? "0%" : timeStats?.cards.red['16-30'].percentage}
                    </Text>
                  </View>
                </View>
              </XStack>
              <XStack justifyContent="space-around" width={'100%'}>
                <View
                  p={4}
                  width={'45%'}
                  alignItems="center"
                  backgroundColor={'$verdeEscuro'}
                  borderRadius={12}
                >
                  <View
                    borderBottomWidth={1}
                    mb={4}
                    alignItems="center"
                    width={'100%'}
                    borderBottomColor={'white'}
                  >
                    <Text fontWeight={'bold'}>31 - 45</Text>
                  </View>
                  <View alignItems="center">
                    <Text fontWeight={'bold'}>
                      Total:{' '}
                      {timeStats?.cards.red['31-45'].total === null
                        ? '0'
                        : timeStats?.cards.red['31-45'].total}
                    </Text>
                    <Text fontWeight={'bold'}>
                      {timeStats?.cards.red['31-45'].percentage === null ? "0%" : timeStats?.cards.red['31-45'].percentage}
                    </Text>
                  </View>
                </View>
                <View
                  p={4}
                  width={'45%'}
                  alignItems="center"
                  backgroundColor={'$verdeEscuro'}
                  borderRadius={12}
                >
                  <View
                    borderBottomWidth={1}
                    mb={4}
                    alignItems="center"
                    width={'100%'}
                    borderBottomColor={'white'}
                  >
                    <Text fontWeight={'bold'}>46 - 60</Text>
                  </View>
                  <View alignItems="center">
                    <Text fontWeight={'bold'}>
                      Total:{' '}
                      {timeStats?.cards.red['46-60'].total === null
                        ? '0'
                        : timeStats?.cards.red['46-60'].total}
                    </Text>
                    <Text fontWeight={'bold'}>
                      {timeStats?.cards.red['46-60'].percentage === null ? "0%" : timeStats?.cards.red['46-60'].percentage}
                    </Text>
                  </View>
                </View>
              </XStack>
              <XStack justifyContent="space-around" width={'100%'}>
                <View
                  p={4}
                  width={'45%'}
                  alignItems="center"
                  backgroundColor={'$verdeEscuro'}
                  borderRadius={12}
                >
                  <View
                    borderBottomWidth={1}
                    mb={4}
                    alignItems="center"
                    width={'100%'}
                    borderBottomColor={'white'}
                  >
                    <Text fontWeight={'bold'}>61 - 75</Text>
                  </View>
                  <View alignItems="center">
                    <Text fontWeight={'bold'}>
                      Total:{' '}
                      {timeStats?.cards.red['61-75'].total === null
                        ? '0'
                        : timeStats?.cards.red['61-75'].total}
                    </Text>
                    <Text fontWeight={'bold'}>
                      {timeStats?.cards.red['61-75'].percentage === null ? "0%" : timeStats?.cards.red['61-75'].percentage}
                    </Text>
                  </View>
                </View>
                <View
                  p={4}
                  width={'45%'}
                  alignItems="center"
                  backgroundColor={'$verdeEscuro'}
                  borderRadius={12}
                >
                  <View
                    borderBottomWidth={1}
                    mb={4}
                    alignItems="center"
                    width={'100%'}
                    borderBottomColor={'white'}
                  >
                    <Text fontWeight={'bold'}>76 - 90</Text>
                  </View>
                  <View alignItems="center">
                    <Text fontWeight={'bold'}>
                      Total:{' '}
                      {timeStats?.cards.red['76-90'].total === null
                        ? '0'
                        : timeStats?.cards.red['76-90'].total}
                    </Text>
                    <Text fontWeight={'bold'}>
                      {timeStats?.cards.red['76-90'].percentage === null ? "0%" : timeStats?.cards.red['76-90'].percentage}
                    </Text>
                  </View>
                </View>
              </XStack>
              <XStack justifyContent="space-around" width={'100%'}>
                <View
                  p={4}
                  width={'45%'}
                  alignItems="center"
                  backgroundColor={'$verdeEscuro'}
                  borderRadius={12}
                >
                  <View
                    borderBottomWidth={1}
                    mb={4}
                    alignItems="center"
                    width={'100%'}
                    borderBottomColor={'white'}
                  >
                    <Text fontWeight={'bold'}>91 - 105</Text>
                  </View>
                  <View alignItems="center">
                    <Text fontWeight={'bold'}>
                      Total:{' '}
                      {timeStats?.cards.red['91-105'].total === null
                        ? '0'
                        : timeStats?.cards.red['91-105'].total}
                    </Text>
                    <Text fontWeight={'bold'}>
                      {timeStats?.cards.red['91-105'].percentage === null
                        ? '0%'
                        : timeStats?.cards.red['91-105'].percentage}
                    </Text>
                  </View>
                </View>
                <View
                  p={4}
                  width={'45%'}
                  alignItems="center"
                  backgroundColor={'$verdeEscuro'}
                  borderRadius={12}
                >
                  <View
                    borderBottomWidth={1}
                    mb={4}
                    alignItems="center"
                    width={'100%'}
                    borderBottomColor={'white'}
                  >
                    <Text fontWeight={'bold'}>106-120</Text>
                  </View>
                  <View alignItems="center">
                    <Text fontWeight={'bold'}>
                      Total:{' '}
                      {timeStats?.cards.red['106-120'].total === null
                        ? '0'
                        : timeStats?.cards.red['106-120'].total}
                    </Text>
                    <Text fontWeight={'bold'}>
                      {timeStats?.cards.red['106-120'].percentage === null
                        ? '0%'
                        : timeStats?.cards.red['106-120'].percentage}
                    </Text>
                  </View>
                </View>
              </XStack>
            </View>
          </View>
        </XStack>
      </YStack>
    </View>
  );
};

export default CartoesCard;
