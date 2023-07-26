import { Image, Text, View } from 'tamagui';
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';
import { handleTemporadaMenu } from '../../../controller/ligaCardController/LigaCardController';
import { LigaInfo, Temporada } from '../../../model/interfaces/LigasInterface';
import TemporadaCard from './TemporadaCard';

interface ILigaCard {
  item: LigaInfo;
  data: LigaInfo[];
  setLigaInfo: React.Dispatch<React.SetStateAction<LigaInfo[]>>;
}
const LigaCard = ({ item, data, setLigaInfo }: ILigaCard) => {
  React.useEffect(() => {}, []);

  return (
    <View style={{elevation: 8}} marginVertical={4} backgroundColor={'$verde'} borderRadius={8}>
      <View flexDirection={'row'} p={4} borderRadius={12} width={'100%'}>
        <View width={'30%'} height={'100%'}>
          <Image
            resizeMode="contain"
            h={100}
            w={100}
            source={{ uri: item.league.logo }}
            alt={'logo'}
          />
        </View>
        <View width={'75%'}>
          <Text fontWeight={'bold'} color={'#22333B'}>
            Liga : {item.league.name}
          </Text>
          <View
            position={'relative'}
            alignItems={'center'}
            w={'100%'}
            flexDirection={'row'}
          >
            <View>
              <Text fontWeight={'bold'} color={'#22333B'}>
                Pais : {item.country.name}
              </Text>
            </View>
            <View ml={2} width={25} height={25}>
              <SvgUri width="100%" height="100%" uri={item.country.flag} />
            </View>
          </View>
          <View w={'100%'} alignItems={'center'}>
            <TouchableOpacity
              style={{
                marginTop: 4,
                width: '40%',
                backgroundColor: '#0CF25D',
                borderRadius: 12,
                padding: 4,
              }}
              onPress={() =>
                handleTemporadaMenu(data, item.league.id, setLigaInfo)
              }
            >
              <View
                backgroundColor={'almond.400'}
                alignItems={'center'}
                p={2}
                borderRadius={12}
                w={'100%'}
                my={2}
                flexDirection={'row'}
                justifyContent={'space-between'}
              >
                <Text fontWeight={'bold'} color={'#22333B'}>
                  Temporadas
                </Text>
                {item.isOpen ? <ChevronUp /> : <ChevronDown />}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {item.isOpen &&
        item.seasons.map((season: Temporada, index: number) => {
          return <TemporadaCard id={index} season={season} item={item} />;
        })}
    </View>
  );
};

export default LigaCard;
