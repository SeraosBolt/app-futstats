import React from 'react';
import { View, Text, XStack } from 'tamagui';
import { ITimeStats } from '../../../../model/interfaces/timeInfoInterface';

interface IGolsMinuto {
  timeStats: ITimeStats;
}

const GolsMinuto = ({ timeStats }: IGolsMinuto) => {
  return (
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
              <View>
                <Text fontWeight={'bold'}>
                  Total: {timeStats?.goals.for.minute['0-15'].total}
                </Text>
                <Text fontWeight={'bold'}>
                  {timeStats?.goals.for.minute['0-15'].percentage}
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
                  Total: {timeStats?.goals.for.minute['16-30'].total}
                </Text>
                <Text fontWeight={'bold'}>
                  {timeStats?.goals.for.minute['16-30'].percentage}
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
                  Total: {timeStats?.goals.for.minute['31-45'].total}
                </Text>
                <Text fontWeight={'bold'}>
                  {timeStats?.goals.for.minute['31-45'].percentage}
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
                  Total: {timeStats?.goals.for.minute['46-60'].total}
                </Text>
                <Text fontWeight={'bold'}>
                  {timeStats?.goals.for.minute['46-60'].percentage}
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
                  Total: {timeStats?.goals.for.minute['61-75'].total}
                </Text>
                <Text fontWeight={'bold'}>
                  {timeStats?.goals.for.minute['61-75'].percentage}
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
                  Total: {timeStats?.goals.for.minute['76-90'].total}
                </Text>
                <Text fontWeight={'bold'}>
                  {timeStats?.goals.for.minute['76-90'].percentage}
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
                  Total: {timeStats?.goals.for.minute['91-105'].total}
                </Text>
                <Text fontWeight={'bold'}>
                  {timeStats?.goals.for.minute['91-105'].percentage}
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
                  {timeStats?.goals.for.minute['106-120'].total === null
                    ? '0'
                    : timeStats?.goals.for.minute['106-120'].total}
                </Text>
                <Text fontWeight={'bold'}>
                  {timeStats?.goals.for.minute['106-120'].percentage === null
                    ? '0%'
                    : timeStats?.goals.for.minute['106-120'].percentage}
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
              <View>
                <Text fontWeight={'bold'}>
                  Total: {timeStats?.goals.against.minute['0-15'].total}
                </Text>
                <Text fontWeight={'bold'}>
                  {timeStats?.goals.against.minute['0-15'].percentage}
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
                  Total: {timeStats?.goals.against.minute['16-30'].total}
                </Text>
                <Text fontWeight={'bold'}>
                  {timeStats?.goals.against.minute['16-30'].percentage}
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
                  Total: {timeStats?.goals.against.minute['31-45'].total}
                </Text>
                <Text fontWeight={'bold'}>
                  {timeStats?.goals.against.minute['31-45'].percentage}
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
                  Total: {timeStats?.goals.against.minute['46-60'].total}
                </Text>
                <Text fontWeight={'bold'}>
                  {timeStats?.goals.against.minute['46-60'].percentage}
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
                  Total: {timeStats?.goals.against.minute['61-75'].total}
                </Text>
                <Text fontWeight={'bold'}>
                  {timeStats?.goals.against.minute['61-75'].percentage}
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
                  Total: {timeStats?.goals.against.minute['76-90'].total}
                </Text>
                <Text fontWeight={'bold'}>
                  {timeStats?.goals.against.minute['76-90'].percentage}
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
                  {timeStats?.goals.against.minute['91-105'].total === null
                    ? '0'
                    : timeStats?.goals.against.minute['91-105'].total}
                </Text>
                <Text fontWeight={'bold'}>
                  {timeStats?.goals.against.minute['91-105'].percentage === null
                    ? '0%'
                    : timeStats?.goals.against.minute['91-105'].percentage}
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
                  {timeStats?.goals.against.minute['106-120'].total === null
                    ? '0'
                    : timeStats?.goals.against.minute['106-120'].total}
                </Text>
                <Text fontWeight={'bold'}>
                  {timeStats?.goals.against.minute['106-120'].percentage ===
                  null
                    ? '0%'
                    : timeStats?.goals.against.minute['106-120'].percentage}
                </Text>
              </View>
            </View>
          </XStack>
        </View>
      </View>
    </XStack>
  );
};

export default GolsMinuto;
