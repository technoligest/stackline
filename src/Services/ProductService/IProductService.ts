import { IProduct } from 'src/Models/IProduct';

export interface IProductService {
  getProduct(productId: string): Promise<IProduct>;
}