import React from 'react';
import { View, Text, Button } from 'tamagui';
import { ChevronLeft } from '@tamagui/lucide-icons';

const Header = ({ title, navigation }: { title: string; navigation: any }) => {
  return (
    <View
      flexDirection={'row'}
      w={'100%'}
      h={'10%'}
      alignItems={'center'}
      justifyContent={'center'}
      position={'relative'}
      backgroundColor={'$verdeEscuro'}
    >
      <Button
        backgroundColor={'$verdeClaro'}
        position={'absolute'}
        left={4}
        m={2}
        p={4}
        onPress={() => navigation.goBack()}
      >
        <ChevronLeft />
      </Button>
      <Text fontSize={28} fontWeight={'bold'} color={'white'}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
