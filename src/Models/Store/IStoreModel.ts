import { IProduct } from 'src/Models/IProduct';

export enum Status {
    NotStarted = "NotStarted",
    Running = "Running",
    Completed = "Completed",
    Failed = "Failed"
}

export type IDataWithStatus<T> =
    | {
          status: Status.Completed;
          data: T;
      }
    | {
          status: Status.NotStarted | Status.Running | Status.Failed;
          data: undefined;
      };

export type IAppReducerState = IDataWithStatus<IProduct>;

export interface IStoreModel {
    app: IAppReducerState;
}
