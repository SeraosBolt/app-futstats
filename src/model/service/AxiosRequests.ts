import axios from 'axios';
import { LigaInfo } from '../interfaces/LigasInterface';
import { ITimeStats } from '../interfaces/timeInfoInterface';
import timesInfo from '../db/timesInfos.json'
export const getLigas = async (): Promise<LigaInfo[]> => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://v3.football.api-sports.io/leagues',
    headers: {
      'x-apisports-key': '7d49394561cb0bc751763460156589de',
    },
  };
  let response =  await axios.request(config)
  return response.data.response;
};


export const getTeamInfo =  (id: number): ITimeStats[] => {
  let resposta: ITimeStats[] = [];
  resposta = timesInfo.response.filter(time => {
    if(time.team.id == id){
      return time
    }
  })
  return resposta;
}
