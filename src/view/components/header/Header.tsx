import React from 'react';
import { View, Text, IconButton } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({
  title,
  navigation,
  page,
}: {
  title: string;
  navigation: any;
  page: string;
}) => {
  return (
    <View
      flexDir={'row'}
      w={'100%'}
      h={16}
      alignItems={'center'}
      justifyContent={'center'}
      position={'relative'}
      backgroundColor={'manoBrown.400'}
    >
      <IconButton
        position={'absolute'}
        left={0}
        m={2}
        p={4}
        colorScheme={'almond'}
        size={'sm'}
        variant="solid"
        _icon={{
          as: MaterialIcons,
          name: 'arrow-back',
        }}
        onPress={() => navigation.navigate(page)}
      />
      <Text
        style={{
          textShadowColor: 'black',
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 4,
        }}
        fontSize={28}
        fontWeight={'extrabold'}
        color={'white'}
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;
