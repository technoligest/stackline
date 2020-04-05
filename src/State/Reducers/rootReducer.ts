import { combineReducers, Reducer } from 'redux';

import { IStoreModel } from 'src/Models/Store/IStoreModel';
import { appReducer } from './appReducer'

export const rootReducer: Reducer<IStoreModel> = combineReducers({
  app: appReducer,
});
