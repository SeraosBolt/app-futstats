import { LigaInfo } from '../../model/interfaces/LigasInterface';

export const handleTemporadaMenu = (
  data: LigaInfo[],
  leagueId: number,
  setLigaInfo: React.Dispatch<React.SetStateAction<LigaInfo[]>>
): void => {
  let array: LigaInfo[] = [...data];
  array.forEach((elem, i) => {
    if (elem.league.id === leagueId) {
      if (elem.isOpen === undefined) {
        elem.isOpen = true;
      } else {
        elem.isOpen = !elem.isOpen;
      }
    }
  });
  setLigaInfo(array);
};

export const formatData = (date: string): string => {
    let array = date.split('-');
    return `${array[2]}/${array[1]}/${array[0]}`;
}
