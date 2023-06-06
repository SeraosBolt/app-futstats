import React from 'react';
import { View, Text, ChevronRightIcon } from 'native-base';
import { LigaInfo, Temporada } from '../../../model/interfaces/LigasInterface';
import { formatData } from '../../../controller/ligaCardController/LigaCardController';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { LigaState, setLeague } from '../../../model/redux/LigaState';

const TemporadaCard = ({
  season,
  item,
  id
}: {
  season: Temporada;
  item: LigaInfo;
  id: number
}) => {
  const navigation: any = useNavigation();
  const ligaInfo = useSelector((state: LigaState) => state);
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setLeague({league: item.league.id, season: season.year, ligaInfo: item}))
        navigation.navigate('Temporada');
      }}
    >
      <View
        shadow={8}
        bg={'manoBrown.400'}
        m={2}
        p={2}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={'row'}
        borderRadius={12}
      >
        <View alignItems={'center'}>
          <Text
            style={{
              textShadowColor: 'black',
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 4,
            }}
            fontSize={16}
            fontWeight={'extrabold'}
            color={'white'}
          >
            TEMPORADA {season.year}
          </Text>
        </View>
        <View>
          <Text
            fontSize={12}
            style={{
              textShadowColor: 'black',
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 4,
            }}
            fontWeight={'extrabold'}
            color={'white'}
          >
            INICIO
          </Text>
          <Text fontSize={12} fontWeight={'extrabold'} color={'white'}>
            {formatData(season.start)}
          </Text>

          <Text
            fontSize={12}
            style={{
              textShadowColor: 'black',
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 4,
            }}
            fontWeight={'extrabold'}
            color={'white'}
          >
            FIM
          </Text>
          <Text fontSize={12} fontWeight={'extrabold'} color={'white'}>
            {formatData(season.end)}
          </Text>
        </View>
        <View alignItems={'center'}>
          <ChevronRightIcon color={'white'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TemporadaCard;
