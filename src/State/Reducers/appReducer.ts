import produce from 'immer';

import { IProduct } from 'src/Models/IProduct';
import { IAppReducerState, IDataWithStatus, Status } from 'src/Models/Store/IStoreModel';
import { ActionType } from '../Actions/ActionTypes';
import { allAppActions } from '../Actions/AppActions';

const defaultState: IDataWithStatus<IProduct> = {
  data: undefined,
  status: Status.NotStarted,
};

export function appReducer(state: IAppReducerState = defaultState, action: typeof allAppActions.actions): IAppReducerState {
  return produce(state, draft => {
    switch (action.type) {
      case ActionType.appInitializeStarted:
        draft.status = Status.Running;
        return;
      case ActionType.retreiveProductSuccess:
        draft.status = Status.Completed;
        draft.data = action.payload;
        return;
      case ActionType.appInitializeFailed:
        draft.status = Status.Failed;
      default:
        return;
    }
  });
}