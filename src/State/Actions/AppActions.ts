import { Action, Dispatch } from 'redux';
import { myContainer } from 'src/inversify/diContainer';
import { IProduct } from 'src/Models/IProduct';
import { action, payload, union } from 'ts-action';
import { TYPES } from '../../inversify/types';
import { IProductService } from '../../Services/ProductService/IProductService';
import { ActionType } from './ActionTypes';

const retreiveProductSuccess = action(
  ActionType.retreiveProductSuccess,
  payload<IProduct>()
);

const appInitializeStarted = action(ActionType.appInitializeStarted);
const appInitializeFailed = action(ActionType.appInitializeFailed);

export function initializeApp(): (dispatch: Dispatch<Action>) => void {
  return async dispatch => {

      dispatch(appInitializeStarted());
      const productService = myContainer.get<IProductService>(TYPES.PRODUCT_SERVICE);
      const mockProductId = "";
      try {
        const product = await productService.getProduct(mockProductId);
        dispatch(retreiveProductSuccess(product));
      } catch (err) {
        dispatch(appInitializeFailed());
      }
  };
}

export const allAppActions = union(appInitializeFailed, appInitializeStarted, retreiveProductSuccess);
