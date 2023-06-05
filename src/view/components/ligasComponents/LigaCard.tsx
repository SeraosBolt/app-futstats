import { ChevronDownIcon, ChevronUpIcon, Image, Text, View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';
import { handleTemporadaMenu } from '../../../controller/ligaCardController/LigaCardController';
import { LigaInfo } from '../../../model/interfaces/LigasInterface';
import TemporadaCard from './TemporadaCard';
interface ILigaCard {
  item: LigaInfo;
  data: LigaInfo[];
  setLigaInfo: React.Dispatch<React.SetStateAction<LigaInfo[]>>;
}
const LigaCard = ({ item, data, setLigaInfo }: ILigaCard) => {
  React.useEffect(() => {}, []);

  return (
    <View m={2} background={'khaki.400'} borderRadius={8}>
      <View flexDir={'row'} p={2} borderRadius={12}>
        <View w={'20%'} h={'100%'}>
          <Image
            resizeMode="contain"
            h={100}
            w={100}
            source={{ uri: item.league.logo }}
            alt={'logo'}
          />
        </View>
        <View mx={2} w={'80%'}>
          <Text fontWeight={'extrabold'} color={'#22333B'}>
            Liga : {item.league.name}
          </Text>
          <View
            position={'relative'}
            alignItems={'center'}
            w={'100%'}
            flexDir={'row'}
          >
            <View>
              <Text fontWeight={'extrabold'} color={'#22333B'}>
                Pais : {item.country.name}
              </Text>
            </View>
            <View ml={2} w={'25'} h={'25'}>
              <SvgUri width="100%" height="100%" uri={item.country.flag} />
            </View>
          </View>
          <View w={'100%'} alignItems={'center'}>
            <TouchableOpacity
              style={{ width: '50%' }}
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
                flexDir={'row'}
                justifyContent={'space-between'}
              >
                <Text fontWeight={'extrabold'} color={'#22333B'}>
                  Temporadas
                </Text>
                {item.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {item.isOpen &&
        item.seasons.map((season) => {
          return <TemporadaCard season={season} item={item}/>;
        })}
    </View>
  );
};

export default LigaCard;
