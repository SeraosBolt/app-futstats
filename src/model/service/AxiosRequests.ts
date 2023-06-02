import axios from 'axios';
import { LigaInfo } from '../interfaces/LigasInterface';

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
