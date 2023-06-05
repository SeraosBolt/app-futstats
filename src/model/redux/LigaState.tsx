import { configureStore, createSlice } from '@reduxjs/toolkit';
import { LigaInfo } from '../interfaces/LigasInterface';
interface ILigaState {
  league: number;
  season: string;
  ligaInfo?: LigaInfo;
}
const initialState: ILigaState = {
  league: 0,
  season: '',
};

const leagueSlice = createSlice({
  name: 'league',
  initialState,
  reducers: {
    setLeague(state: ILigaState, action) {
      state.league = action.payload.league;
      state.season = action.payload.season;
      state.ligaInfo = action.payload.ligaInfo;
    },
  },
});

export const leagueStore = configureStore({
  reducer: leagueSlice.reducer,
});

export const { setLeague } = leagueSlice.actions;

export type LigaState = ReturnType<typeof leagueStore.getState>;
export type AppDispatch = typeof leagueStore.dispatch;
